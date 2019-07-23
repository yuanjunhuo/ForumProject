<template>
    <div class="sign">
      <div class="logo">Hello Daily</div>
      <div class="container">
       
       
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
  top:2%;
  left: 2%;
  
}

.container{
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