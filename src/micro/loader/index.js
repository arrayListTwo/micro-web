import { fetchResource } from '@/micro/utils/fetchResource'

// 加载 html 的方法
export const loadHtml = async (app) => {
  // 子应用需要显示在哪里
  let container = app.container
  // 子应用的入口
  let entry = app.entry

  const html = await parseHtml(entry)
  const ct = document.querySelector(container)
  console.log('container: ', container, 'ct: ', ct, 'html: ', html)
  if(!ct) {
    throw new Error('容器不存在，请查看')
  }
  ct.innerHTML = html
  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  const div = document.createElement('div')
  div.innerHTML = html
  // 标签、link、script(src, js)
  const [dom, scriptUrl, script] = await parseJs()
  return html
}

export const parseJs = async () => {
  return ['', '', '']
}
