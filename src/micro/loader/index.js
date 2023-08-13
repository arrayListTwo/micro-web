import { fetchResource } from '@/micro/utils/fetchResource'

// 加载 html 的方法
export const loadHtml = async (app) => {
  // 子应用需要显示在哪里
  let container = app.container
  // 子应用的入口
  let entry = app.entry

  const [dom, scripts] = await parseHtml(entry)
  console.log('scripts: ', scripts)
  const ct = document.querySelector(container)
  console.log('container: ', container, 'ct: ', ct, 'html: ', dom)
  if (!ct) {
    throw new Error('容器不存在，请查看')
  }
  ct.innerHTML = dom
  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  let allScript = []
  const div = document.createElement('div')
  div.innerHTML = html
  // 标签、link、script(src, js)
  const [ dom, scriptUrl, script ] = await getResources(div, entry)
  console.log(dom)
  console.log(scriptUrl)
  console.log(script)
  const fetchedScripts = await Promise.all(scriptUrl.map(async url => fetchResource(url)))
  console.log('fetchedScripts: ', fetchedScripts)
  allScript = script.concat(fetchedScripts)
  return [dom, allScript]
}

export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []
  const dom = root.outerHTML

  // 深度解析
  function deepParse (element) {
    const children = element.children
    const parent = element.parent

    // 第一步处理位于 script 中的内容
    if (element.nodeName.toLowerCase() === 'script') {
      // 非内联
      const src = element.getAttribute('src')
      // 内联 script
      if (!src) {
        script.push(element.outerHTML)
      } else {
        if (src.startsWith('http')) {
          scriptUrl.push(src)
        } else {
          console.log(`http:${entry}/${src}`)
          scriptUrl.push(`http:${entry}/${src}`)
        }
      }
      if (parent) {
        parent.replaceChild(document.createComment('此 js 文件已经被微前端替换'), element)
      }
    }

    // link 也会有 js 的内容
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')
      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrl.push(href)
        } else {
          console.log(`http:${entry}/${href}`)
          scriptUrl.push(`http:${entry}/${href}`)
        }
      }
    }

    for(let i = 0; i < children.length; i++) {
      deepParse(children[i])
    }
  }

  deepParse(root)

  return [ dom, scriptUrl, script ]
}
