import { setList, getList } from "@/micro/const/subApps"
import { rewriteRouter } from "@/micro/router/rewriteRouter"
import { currentApp } from "@/micro/utils"

// 实现路由拦截
rewriteRouter()

export const registerMicroApps = (appList) => {
  setList(appList)
}

// 启动微前端框架
export const start = () => {
  // 受限验证当前子应用列表是否为空
  const apps = getList()
  // 子应用列表为空
  if (!apps.length) {
    throw Error('子应用列表为空，请正确注册')
  }
  // 有子应用的内容，查找到符合当前路由的子应用
  const app = currentApp()
  if (app) {
    const { pathname, hash } = window.location
    const url = pathname + hash
    window.history.pushState('', '', url)
    window.__CURRENT_SUB_APP__ = app.activeRule
  }
}
