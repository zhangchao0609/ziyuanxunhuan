// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)


import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(dataV)

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})


const store = new Vuex.Store({
  state : {
    user : "",
    renzheng : "",
    qy_type : 1,
    id : ''
  },
  mutations : {
    increment (state,yuser) {
      state.user = yuser
    },
    incrementt (state,qy_type) {
      state.qy_type = qy_type
    },
    incrementid (state,id) {
      state.id = id
    },
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
