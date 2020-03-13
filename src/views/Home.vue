<template>
  <div class="home">
    <icon-svg icon-class="test" className="test"></icon-svg>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      date: '',
      show: false,
      value: ''
    }
  },
  methods: {
    onConfirm () {}
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
