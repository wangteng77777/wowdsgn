<template>
	<div>
		
<!-- Swiper -->
  <div class="swiper-container b"v-if="this.$store.state.imglist.length===0?false:true">
    <div class="swiper-wrapper">
      <!-- 这里有一个渲染错误 报错不影响功能 -->
      <div class="swiper-slide" v-for="data in this.$store.state.imglist.modules[0].moduleContent.banners"><img :src="data.bannerImgSrc"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"><span></span></div>
  </div>

	</div>
</template>
<script src="../dist/js/swiper.min.js"></script>
<script type="text/javascript">
	import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
	
	export default {
    data(){
      return{
      }
    },
    updated(){  
      this.$nextTick(()=>{
        var myswiper = new Swiper('.b', {
                  slidesPerView: 1,
                    spaceBetween: 30,
                  loop: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true,
                   },
                   navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                   },
                   autoplay: {
                       delay: 2000,
                       disableOnInteraction: false,
                   }
              });           
      })
    },
	}
</script>
<style scoped type="text/css">
	img{width:100%;}
</style>