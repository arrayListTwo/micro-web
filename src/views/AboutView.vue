<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{route.fullPath}}</h2>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router"

const route = useRoute()
</script>

<style>
</style>
