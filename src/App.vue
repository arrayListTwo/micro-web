<script setup>
import Loading from './components/Loading.vue'
import {ref} from "vue"

let loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 3000)
</script>

<template>
  <header>
    <h1>Header</h1>
  </header>
  <div class="btn-list">
    
  </div>
  <div class="sub-container">
    <Loading v-if="loading"></Loading>
    <div v-else class="sub-body">显示子应用内容</div>
  </div>
  <footer>
    <h1>Footer</h1>
  </footer>
</template>

<style lang="scss">
html, body, #micro_web_main_app {
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sub-container {
  min-height: 100%;
  position: relative;
}
.sub-body {
  min-height: 100%;
  width: 100%;
}
</style>
