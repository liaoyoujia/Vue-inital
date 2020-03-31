<template>
  <div class="scroll-wrapper" ref="scrollWrapper"></div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    direction: {
      validator (value) {
        return ['vertical', 'horizental'].indexOf(value) !== -1
      },
      default: 'vertical'
    },
    click: {
      type: Boolean,
      default: true
    }, // 是否支持点击
    refresh: {
      type: Boolean,
      default: true
    }, // 是否刷新
    onScroll: Function, // 滑动触发的回调函数
    pullUp: Function, // 上拉加载逻辑
    pullDown: Function, // 下拉加载逻辑
    pullUpLoading: {
      type: Boolean,
      default: false
    }, // 是否显示上拉 loading 动画
    pullDownLoading: {
      type: Boolean,
      default: false
    }, // 是否显示下拉 loading 动画
    bounceTop: {
      type: Boolean,
      default: true
    }, // 是否支持向上吸顶
    bounceBottom: {
      type: Boolean,
      default: true
    } // 是否支持向下吸底
  },
  data () {
    return {
      bScroll: null
    }
  },
  methods: {
    initScoll () {
      const { direction, click, bounceTop, bounceBottom } = this.props
      this.bScroll = new BScroll(this.$refs.scrollWrapper, {
        scrollX: direction === 'horizental',
        scrollY: direction === 'vertical',
        probeType: 3,
        click: click,
        bounce: {
          top: bounceTop,
          bottom: bounceBottom
        }
      })
    },
    scroll () {
      const { onScroll } = this.props
      if (!this.bScroll || !onScroll) return
      this.bScroll.on('scroll', scroll => {
        onScroll(scroll)
      })
    },
    judgeBottom () {
      const { pullUp } = this.props
      if (!this.bScroll || !pullUp) return
      this.bScroll.on('scrollEnd', () => {
        // 判断是否滑动到了底部
        if (this.bScroll.y <= this.bScroll.maxScrollY + 100) {
          pullUp()
        }
      })
    },
    judgeTop () {
      const { pullDown } = this.props
      if (!this.bScroll || !pullDown) return
      this.bScroll.on('touchEnd', pos => {
        // 判断用户的下拉动作
        if (pos.y > 50) {
          pullDown()
        }
      })
    },
    judgeRefresh () {
      const { refresh } = this.props
      if (refresh && this.bScroll) {
        this.bScroll.refresh()
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scope>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
