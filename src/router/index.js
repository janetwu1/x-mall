import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index"
import Login from  "@/views/Login"
import Home from  "@/views/Home"
import Goods from  "@/views/Goods"
import Thanks from  "@/views/Thanks"

Vue.use(VueRouter)

const routes=[
  {
    path:"/",
    redirect:'/Home',
    name:'home',
    component: Index,
    children:[
      {
        path:"home",
        component: Home

      },
      {
        path:"goods",
        component: Goods

      },
      {
        path:"thanks",
        component: Thanks

      }
    ]
  },
  {
    path:"/Login",
    name:'login',
    component: Login,
  }
]

const router=new VueRouter({
  routes
})

export default router
