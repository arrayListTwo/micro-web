<template>
  <div class="energy">
    vue2 Energy
    <van-button type="primary">Energy</van-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Button } from 'vant'
import axios from 'axios'

export default defineComponent({
  name: 'energy',
  components: {
    VanButton: Button,
  },
  mounted () {
    this.getCarList()
  },
  methods: {
    async getCarList () {
      try {
        const res = await axios.get('http://localhost:3000/vue2/car/list?name=boss')
        console.log(res)
      } catch (e) {
        console.error(e)
      }
    },
  },
})
</script>

<style scoped></style>
