import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import fastClick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
// 解决移动端300ms点击
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
