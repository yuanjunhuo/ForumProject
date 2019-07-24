<template>
    <div>
       <a v-on:click="quit">
           退出
       </a>
    </div>
</template>
<script>
export default {
    methods:{
        quit(){
            this.$cookies.remove("username");
            this.$store.commit('quit');//改变登录状态，mine的路由地址，
            console.log("已退出")
            this.$router.push({path:"/signIn"})
        }
    }
}
</script>