import IconSvg from '@/components/Icon-svg.vue'
import Vue from 'vue'

// 全局注册icon-svg
Vue.component('icon-svg', IconSvg)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
