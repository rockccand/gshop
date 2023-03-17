// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //配置所有路由
    routes: [
        {
            path: '/',
            redirect: '/msite',
        },
        {
            path: '/msite',
            component: Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/login',
            component: Login,
            //这里不用加，因为meta默认就有，但是是空对象，空对象取值那么得到的是flase
        },
    ]
})