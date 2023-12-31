import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null
const render = () => {
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#appVue2')
}

/* 当前非微前端环境 */
if (!window.__MICRO_WEB__) {
  render()
}

/* 微前端环境，暴露生命周期 */
// 开始加载结构
export const bootstrap = () => {
  console.log('开始加载结构')
}

export const mount = () => {
  render()
  console.log('渲染成功')
}

export const unmount = () => {
  console.log('卸载', instance)
}
