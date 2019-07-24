<template>
  <div id="app">
  <RightSide/>
    <router-view />
  </div>
</template>
<script>
import RightSide from './views/RightSide'
export default {

  components:{
    RightSide,
  }
}
</script>

<style>

#app {
  padding-right: 25%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border:1px solid rgba(255, 255, 255, 0);
}

</style>
