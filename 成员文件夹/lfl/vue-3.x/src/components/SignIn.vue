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
        <input type="checkbox" value="remember-me" />记住密码
      <!-- </label> -->
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
  </form>
   
</template>

<script>
// sign in是登录
export default {
  data(){
    return{
      phone:"",
      password1:'',
      // password:md5(password1),
    }
  }
};
</script>