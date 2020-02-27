import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Fenlei = () => import('../views/fenlei/fenlei.vue')
const Profile = () => import('../views/profile/profile.vue')
const Shopcar = () => import('../views/shopcar/shopcar.vue')
const Detail = () => import('../views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/fenlei',
        component:Fenlei
    },
    {
        path:'/shopcar',
        component:Shopcar
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
