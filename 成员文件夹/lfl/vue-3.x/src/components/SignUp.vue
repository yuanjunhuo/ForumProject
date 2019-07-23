<template>
  <form>
    <!-- 用户名 -->
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
      </span>
      <input
        v-model="user.name"
        type="text"
        class="form-control"
        placeholder="你的昵称(2~5个字符)"
        aria-describedby="basic-addon1"
       
      />
    </div>
    <!-- 手机号 -->
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
      </span>
      <input
        v-model="user.phone"
        type="text"
        class="form-control"
        placeholder="手机号"
        aria-describedby="basic-addon1"
        required
      />
    </div>

    <!-- 验证码 -->
    <div class="input-group identify" v-if="user.phone>13000000000 && user.phone<19999999999">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>
      </span>
      <input
        v-model="code"
        type="text"
        class="form-control"
        placeholder="验证码"
        aria-describedby="basic-addon1"
        required
      />
      <div v-on:click="sendCode" class="sendCodeBtn">验证码</div>
    </div>
    <!-- 设置密码 -->
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">
        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </span>
      <input v-model="password1" type="password" id="inputPassword" class="form-control" placeholder="设置密码" required />
    </div>
    <security></security>
    <button v-on:click.prevent="identify" class="btn btn-lg btn-primary btn-block" type="submit">注册</button>
  

  </form>
</template>


<script>
import md5 from 'js-md5'
import security from './Security'
import axios from 'axios'//引入后，可以使用get，post(推荐)

export default {
  components:{
    security,
  },
  data(){
    return{
      inputCode:'',//动态储存用户输入的验证码
      code:'',//随机生成的4位数验证码，目标验证码，用来比对inputCode
      password1:'',//临时明文
      user:{
        name:"",
        phone:"",
        password:""//加密后的密码
      }
    }
  },
  computed:{
   
  },
  methods:{
    sendCode(){
       axios.get("http://localhost:3000/users?phone="+this.user.phone).then((data)=>{
        if(data.data==[]){
          //无此用户，可以注册,然后发送验证码
          
        }else{//此用户已存在，请登录
          
        }
      }); 
      this.code = Math.random().toString(10).slice(2,6)
      
      // alert("http://v.juhe.cn/sms/send?mobile="+this.user.phone+"&tpl_id=174546&tpl_value=%23code%23%3D"+this.code+"&key=157e3d5c80e9a2af12aac8e5dfa8be5b")
    // 这里验证验证码，如果成功再进行post

    //  axios.post("http://v.juhe.cn/sms/send?mobile="+this.user.phone+"&tpl_id=174546&tpl_value=%23code%23%3D"+this.code+"&key=157e3d5c80e9a2af12aac8e5dfa8be5b")//axios请求数据
    //   // .then(function(data){
    //   //   // return data.data;//axios返回的。
    //   //   //   return data.json();//vue-resourse请求才用。
    //   //     console.log(data)
    //   //   // this.blogs=data.body.slice(0,10)
    //   //   // console.log(this.blogs)
    //   // })  //无需返回数据
    },
    identify(){
      //验证码正确之后才能post（），inputCode==code时
     this.post();
    },
    post(){
     
    
      // console.log("加密成功")
      // this.user.password = md5(this.password1);
      // console.log(this.user)
      //  axios.post("http://localhost:3000/users",this.user).then(function(data){//这里的地址是第三方测试地址。不能真实写入，但是有响应
      //   console.log("post成功")
      //   console.log(data)
      // })
    }
  }
}
</script>



<style scoped>

.sendCodeBtn {
  cursor: pointer;
  padding: 4px 8px;
  border: 0;
  position: absolute;
  width: 52px;
  font-size: 12px;
  top: 5px;
  right: 5px;
  z-index: 3;
  border-radius: 10px;
  background-color: rgb(72, 190, 57);
  color: white;
}
.btn {
  margin: 30px 0;
}
</style>