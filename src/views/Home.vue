<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词"
      v-model="value" />
    <div class="box"></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      value: ''
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: cyan;
}
</style>
