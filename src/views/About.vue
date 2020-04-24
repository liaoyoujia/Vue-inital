<template>
  <div class="test-wrapper">
    <Scrool>
      <div class="test">
        312312
      </div>
    </Scrool>
  </div>
</template>
<script>
import Scrool from "../components/Scrool";
export default {
  name: "test",
  data() {
    return {};
  },
  methods: {},
  components: {
    Scrool
  }
};
</script>
<style lang="scss" scope>
.test-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
.test {
  width: 100%;
  height:120vh;
  background-color: cyan;
}
}
</style>
