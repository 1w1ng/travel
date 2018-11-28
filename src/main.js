import Vue from 'vue';
import App from './App';
import router from './router';
// import fastClick from 'fastclick';
import './assets/styles/reset.css';
import './assets/styles/border.css';


Vue.config.productionTip = false;
// 解决移动端300ms点击
// fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
