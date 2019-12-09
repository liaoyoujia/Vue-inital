<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词"
      v-model="value" />
    <div class="box">
      312312312312
      <icon-svg icon-class="test"
        className="test"></icon-svg>
    </div>
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
  /* background-color: cyan; */
}
.smile {
  font-size: 40px;
  color: red;
}
.svg-icon-test {
  width: 1em;
  height: 1em;
  /* font-size: 40px; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: cyan !important;
  font-size: 12px;
}
</style>
