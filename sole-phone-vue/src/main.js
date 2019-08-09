import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false

//单位换算，和全局基础样式引入
import './assets/js/font'
import './assets/css/base.scss'

//路由配置引入
import router from './plugins/router';

//状态管理引入
import store from './plugins/store';

//配置图片公共路径，方便将来修改
Vue.prototype.baseUrl = 'http://localhost:3000'

//配置全局过滤器
import date from './filters/date';
import price from './filters/price';
Vue.filter('date', date);
Vue.filter('price', price);

//配置全局轮播图swipe
import { Swipe, SwipeItem,Lazyload} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload);

//同步storage && state
let local = window.localStorage.getItem('user');
if(local){
  store.commit('UPDATE_USER',JSON.parse(local))
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
