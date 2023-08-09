export const turnApp = () => {
  if(window.__CURRENT_SUB_APP__ === window.location.pathname) {
    return
  }
  console.log('路由切换了')
}
