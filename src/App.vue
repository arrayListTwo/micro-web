<script setup>
import Loading from './components/Loading.vue'
import { watch } from "vue"
import { useRouter, useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import { loading } from '@/stores'

let loadingShow = loading.loadingStatus
const router = useRouter()
const route = useRoute()
const handleClick = (url) => {
  router.push(url)
}

watch(route, (val) => {
  console.log(val.fullPath)
}, { deep: true })
</script>

<template>
  <header>
    <h1>Header</h1>
  </header>
  <div class="btn-list">
    <el-button @click="handleClick('/vue2#/energy')">Vue2</el-button>
    <el-button @click="handleClick('/vue3#/index')">Vue3</el-button>
  </div>
  <div class="sub-container">
    <Loading v-if="loadingShow"></Loading>
    <div v-show="!loadingShow" id="micro_container">
      <RouterView></RouterView>
    </div>
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

#micro_container {
  min-height: 100%;
  width: 100%;
}
</style>
