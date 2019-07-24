<template ref="html">
  <div class="RightSide">
<!-- 下边是右侧的用户头像/登录/注册部分（组件） -->
<RightMy></RightMy>

<!-- 下边是右侧的 下部分导航（非组件） -->
    <div id="nav">
      <ul class="nav">
        <li role="presentation">
          <router-link to="/">浏览日记</router-link>
        </li>
        <li role="presentation">
          <router-link to="/my">我的日记</router-link>
        </li>
        <li role="presentation">
          <router-link to="/growth">成长日记</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import RightMy from '../components/RightMy'
export default {
  name: "navigation",
  data() {
    return {

    };
  },
  components:{
    RightMy
  }
};
</script>
<style scoped>
.RightSide {
  width: 25%;
  height: 10000px;
  border-left: 2px rgba(71, 183, 132, 0.3) solid;
  position: fixed;
  right: 0;
}
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
