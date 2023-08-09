import { patchRouter } from "@/micro/utils"
import { turnApp } from "@/micro/router/routerHandle"

// 重写window的路由跳转
export const rewriteRouter = () => {
  console.log('rewriteRouter')
  window.history.pushState = patchRouter(window.history.pushState, 'micro_push')
  window.history.replaceState = patchRouter(window.history.replaceState, 'micro_replace')

  window.addEventListener('micro_push', () => {
    console.log('事件时间=====')
    turnApp('micro_push')
  })
  window.addEventListener('micro_replace', () => {
    turnApp('micro_replace')
  })

  // 监听返回事件
  window.onpopstate = function () {
    turnApp()
  }
}
