import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Error from '../pages/Error/Error';
import Follow_list from '../pages/Follow/Follow_list';

const Login =()=>import(/* webpackChunkName: "loginReg" */'../pages/Login/Login')
const Register = () => import(/* webpackChunkName: "loginReg" */'../pages/Register/Register')
const User = () => import(/* webpackChunkName: "loginReg" */'../pages/User/User')

// import Login from '../pages/Login/Login';
// import Register from '../pages/Register/Register';
// import User from '../pages/User/User';
import Search from '../pages/Search'

let routes = [
    {
        name: "home", path: '/home', component: Home
    },
    {
        name: "detail_id", path: '/detail/:id', component: Detail
    },
    {
        name: 'search', path: '/search', component: Search
    },
    {
        name: "follow", path: '/follow', component: r => { require(['../pages/Follow/Follow_list'], r) }
    },
    {
        name: "login", path: '/login', component: Login
    },
    {
        name: "reg", path: '/reg', component: Register
    },
    {
        name:'shopcar',path:'/shopcar',component:r =>{require(['../pages/Shopcar/Shopcar.vue'],r)}
    },
    {
        name: "user", path: '/user', component: User
    },
    {
        path: '/', redirect: '/home'
    },
    {
        name: "error", path: '*', component: Error
    },

]


let router = new VueRouter({
    routes,
    mode: 'hash' //默认 "hash" (浏览器环境) | "abstract" (Node.js 环境)
})

//全局守卫router.beforeEach((to,from,next)=>{})

// router.beforeEach((to, from, next) => {

//     console.log(to.matched, 'to.matched');

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (!auth.loggedIn()) {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next() // 确保一定要调用 next()
//     }
// })


export default router;
