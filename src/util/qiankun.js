import { registerMicroApps, start } from "qiankun"

export const registerApp = (list) => {
  // 注册到微前端框架里
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        console.log('开始加载')
      }
    ],
    afterMount: [
      () => {
        console.log('渲染完成')
      }
    ],
    afterUnmount: [
      () => {
        console.log('卸载完成')
      }
    ]
  })
  start()
}
