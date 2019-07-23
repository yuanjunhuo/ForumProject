<template>
  <div class="about">
<!-- Modal -->
  <div class="modal fade" id="myModal"  tabindex="-1"  role="dialog" aria-labelledby="myModalLabel">
      
        <video autoplay="autoplay" id="video" muted="muted" volume="0"
            poster="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL2RkOGZkYWM3MjkwNGUwZWZiY2M0ZTczOGZiYmEzMjlhLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            loop="loop" style="width: 100%; height: 100%;object-fit:cover;object-position:center center"
            class="section-background-video">
            <source type="video/webm"
                src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzLzEyMzQud2VibQ_p_p100_p_3D_p_p100_p_3D.webm">
            <source type="video/mp4"
                src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL2FwcGxlX3NpbmdfY2hpbGQubXA0.mp4">
            <source type="video/webm"
                src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzLzEyMzQud2VibQ_p_p100_p_3D_p_p100_p_3D.webm">
                <source type="video/mp4" src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL2FwcGxlX3NpbmdfY2hpbGQubXA0.mp4">
        </video>
  
    <div class="logoAbout">
        <div class="logotext">Hello Daily</div>
        <h1>写自传，写日记，记录人生轨迹，分享人生经历。
        让世界感知你的存在。</h1>
        <router-link to="/" tag="div" id="close" data-dismiss="modal" aria-label="Close">立即开启</router-link>
    </div>
    
 
  </div>
</div>

</template>


<script>
// import HelloWorld from '../components/HelloWorld'
export default {
  data(){
    return{
     
    }
  },
  components:{
    
  },
  
}
</script>
<style>


.logo{
    margin: 20px auto;
    font-size: 36px;
    color: lightseagreen;
    cursor: pointer;
}
.logotext{
  font-size: 40px;
  color: aquamarine;
}
#video{
  position: fixed;
  left:0;
  opacity: 0.8;
  /* z-index: 0 !important; */
 }
.logoAbout{
  border:2px solid white;
  margin-bottom: 50px;
  padding: 50px 20px;
  position: absolute;
  right: 3%;
  width: 40%;
  top:10%;
  color: white;
}
#close{
  width: 35%;
  margin:10px auto;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  line-height: 45px;
  cursor: pointer;
}
#close:hover{
  color: aquamarine;

}
h1{
  line-height: 60px;
}
</style>
