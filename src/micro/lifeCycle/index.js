import { findAppByRoute } from '@/micro/utils'
import { getMainLifecycle } from '@/micro/const/mainLifeCycle'
import { loadHtml } from '@/micro/loader'

export const lifeCycle = async () => {
  debugger
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ORIGIN_APP__)

  // 获取到要跳转到的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)

  console.log(prevApp, nextApp)

  if (!nextApp) {
    return
  }

  if (prevApp && prevApp.destroyed) {
    await destroyed(prevApp)
  }

  const app = await beforeLoad(nextApp)
  await mounted(app)
}

export const beforeLoad = async (app) => {
  await runMainLifeCycle('beforeLoad')
  app && app.beforeLoad && app.beforeLoad()

  const subApp = await loadHtml(app) // 获取的是子应用的内容
  subApp && subApp.beforeLoad && subApp.beforeLoad()
  return subApp
}

export const mounted = async (app) => {
  app && app.mounted && app.mounted()

  await runMainLifeCycle('mounted')
}

export const destroyed = async (app) => {
  app && app.destroyed && app.destroyed()
  // 对应的执行以下主应用的生命周期
  await runMainLifeCycle('destroyed')
}

export const runMainLifeCycle = async (type) => {
  const mainLife = getMainLifecycle()

  await Promise.all(mainLife[type].map(async (item) => await item()))
}
