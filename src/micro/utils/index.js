import { getList } from "@/micro/const/subApps"

// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName)
    globalEvent.apply(this, arguments)
    window.dispatchEvent(e)
  }
}

export const currentApp = () => {
  const currentUrl = window.location.pathname
  return filterApp('activeRule', currentUrl)
}

const filterApp = (key, value) => {
  const currentApp = getList().filter(item => item[key] === value)
  return currentApp && currentApp.length ? currentApp[0] : {}
}