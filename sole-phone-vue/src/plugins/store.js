import Vue from 'vue';
import Vuex from 'vuex';

//console.log(Vuex);
//{Store类,mapActions,mapGetters}
//安装状态管理
Vue.use(Vuex);

//引入state、actions、mutations、getters
import state from '../store/state'
import mutations from '../store/mutations'
import actions from '../store/actions'
import getters from '../store/getters'
//实例化
let store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store;