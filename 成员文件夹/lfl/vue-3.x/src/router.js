import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Mine from './views/Mine.vue'
import Sign from './views/Sign.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import ReadDaily from './views/ReadDaily.vue'
import MyDaily from './views/MyDaily.vue'
import GrowthDaily from './views/GrowthDaily.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{path:'/mine',name:'mine',component:Mine},
  {path:'/',name:'read',component:ReadDaily},
  {path:'/my',name:'myDaily',component:MyDaily},
  {path:'/sign',name:'Sign',redirect:'/signin',component:Sign,children:[ 
  {path:'/signin',name:'SignIn',component:SignIn},
  {path:'/signup',name:'SignUp',component:SignUp},]},
  {path:'/growth',name:'GrowthDaily',component:GrowthDaily},
  {path: '/about',name: 'about',component:About}]
})
