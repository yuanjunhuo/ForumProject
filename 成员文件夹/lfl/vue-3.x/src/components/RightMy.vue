<template>
    <div class="RightMy">

        <!-- 下面是logo -->
        <router-link to="/about" tag="div">
            <div class="logo" data-toggle="modal" data-target="#myModal">
                Hello Daily
            </div>
        </router-link>

        <!-- 下面是头像 -->
        <router-link v-bind:to="mineRouter" tag="div">
            <div class="img">
                <div class="family">G</div>
                <div class="name">{{username}}</div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
    computed:{
        mineRouter(){
            return this.$store.state.minerouter
        },
        username(){
            return this.$store.state.username
        }

    },
    created(){
        //创建一开始就检测是否有cookie(username)，更改mine的路由，
        if(this.$cookies.get("username")){
            this.$store.commit('signIn',this.$cookies.get("username"));//改变为登录状态
            console.log("登录状态");
        }else{
            console.log("非登录状态")
        }
    }
   
}
</script>
<style scoped>
.RightMy{
    margin:5px auto;
}
.logo{
    margin: 20px auto;
    font-size: 36px;
    color: lightseagreen;
    cursor: pointer;
}

.img{
    width: 80px;
    height: 80px;
    margin:0 auto;
    /* border: 1px black solid; */
    border-radius: 50%;
    cursor: pointer;
    background-color: #efefef;
}
.img:hover{
    background-color: rgba(202, 202, 202, 0.705);

}
.family{
    width: 36px;
    height: 36px;
    margin:20px auto 0 auto;
    /* border: 1px black solid; */
    border-radius: 50%;
    text-align: center;
    line-height: 36px;
    background-color: #b8bba5;
    color: #fff;
    font-size: 20px;
    font-weight: 400;

}
.name{
    width: 70px;
    height: 36px;
    margin:0 auto;
    /* border: 1px black solid; */
    border-radius: 10px;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    color: #8e8e8e

}
</style>
