import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)



Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username:"Guest",
    minerouter:'/signin',
    signined:false,
    alertcontext:'',
    alert:false,
  },
  mutations: {
    signIn:(state,payload)=>{
      state.username = payload;//改变右侧用户名
      state.minerouter='/mine';//改变mine的路由地址
      state.signined = true;//改变登录状态
    },
    quit:(state)=>{
      state.username = 'Guest';
      state.minerouter='/signin';
      state.signined = false;
    },
    alertShow:(state,payload)=>{
      state.alert=true;
      state.alertcontext=payload;
    },
    alertFade:(state)=>{
      state.alert=false;
    }
  },
  actions: {
    alert:(context,payload)=>{
      context.commit('alertShow',payload);
      setTimeout(() => {
        context.commit('alertFade')
      }, 5000);
    },
    

    // signIn:(context,payload)=>{
    //       context.commit('reducePrice',payload)   
  // }
  }
})
