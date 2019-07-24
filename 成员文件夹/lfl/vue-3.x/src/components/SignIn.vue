<template>
  <form>
    <!-- 登录，用户手机号 -->
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
      </span>
      <input
        v-model="phone"
        type="text"
        class="form-control"
        placeholder="请输入手机号"
        aria-describedby="basic-addon1"
        required
      />
    </div>
    <!-- 登录，用户密码 -->
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </span>
      <input
        v-model="password1"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="请输入密码"
        required
      />
    </div>

    <div class="checkbox">
      <!-- <label> -->
      <input type="checkbox" v-model="remember" value="remember" />记住密码
      <!-- </label> -->
    </div>
    <button v-on:click.prevent="signIn" class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
  </form>
</template>

<script>
import md5 from 'js-md5'
import axios from 'axios'//引入后，可以使用get，post(推荐)

// sign in是登录
export default {
  data(){
    return{
      remember:[],
      phone:"",
      password1:'',
    }
  },
  methods:{
    signIn(){
 


      //先验证用户名（手机号）密码是否正确。
      axios.get("http://localhost:3000/users?phone="+this.phone+"&password="+md5(this.password1))
      .then((data)=>{
          if(data.data.length == 0){//密码错误
           console.log("密码错误")
           this.$store.dispatch('alert',"您的密码或手机号错误")//进行alert提醒
          }else{//密码正确请求获得该账号的用户名进行展示，和如果remember后存cookie，进行登录
            console.log("密码正确")
            if(this.remember.length==1){//用户勾选remember
              this.$cookies.set('username',data.data.username,3600*24*10);
            }
            console.log(data);
          this.$store.commit('signIn',data.data[0].username);//改变为登录状态(右侧)
          this.$router.push({path:'/'});
          };
      
      
      })
    }  
  }
};
</script>