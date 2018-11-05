import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'assets/scss/index.scss'
// 安装 cnpm install --save babel-polyfill fastclick
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)

Vue.use(VueLazyload,{
	preLoad:1,  // 图显示多少的时候开始加载  1:图全显示加载。 更多的话 如1.8:还没全显示就加载 
	error:require('assets/img/error.png'), //错误显示的图片
	loading:require('assets/img/loading.gif'), // 成功显示的图片
	attempt:1  // 尝试加载几次
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
