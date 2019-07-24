<template>
    <div class="sign">
      <div class="logo">Hello Daily</div>
      <div class="container">
        <!-- 弹窗（密码错误，用户名（手机号）已存在）。中央管理，状态，内容 -->
        <div v-if="this.$store.state.alert" class="alert alert-danger" role="alert">{{this.$store.state.alertcontext}}</div>
            <ul class="nav nav-pills">
              <li role="presentation">
                <router-link to="/signin">登录</router-link>
              </li>
              <li role="presentation">
                <router-link to="/signup">注册</router-link>
              </li>
            </ul>

            <hr>
      
      
        <router-view></router-view>
    
      </div>
    </div> <!-- /container -->
</template>

<script>
export default {
    
}
</script>
<style scoped>
.logo{
  font-size: 30px;
  position: absolute;
  color: #2830a180;
  top:0;
  left: 2%;
  
}
.alert{
  width: 100%;
  margin: 0 auto;
  position: absolute;
  height: 30px;
  line-height: 30px;
  padding: 0px;
  top:-40px;
  left: 0;
}

.container{
  position: relative;
  margin-top:100px; 
  /* border:1px solid black; */
  width: 40%;
  max-width: 400px;
  min-width: 213px;
  padding: 20px;
  border-radius: 5px;
  background-color: #2830a180
}

.nav {
  display: inline-block;
  margin: 0 auto;
}
hr{
  margin: 0 0 30px 0;
}

.nav a {
  font-weight: bold;
  color: black;
}

.nav a.router-link-exact-active {
  color: rgb(51, 110, 163)
}
</style>