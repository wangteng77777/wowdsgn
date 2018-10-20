<template>
	<div class="recommendall">
		<div class='recommend' v-for="data,index in this.$store.state.imglist.modules" v-if="$store.state.imglist.modules[0]===data?false:true">
			<div class="recommendinside">				
				<div><h2>{{data.moduleName}}</h2></div>
				<div class="meizhoutuijian" v-if="data.moduleDescription">{{data.moduleDescription}}</div>
				<div v-for="info in data.moduleContent.banners" v-if="data.moduleContent.banners.length===1"><img class="onebannner" :src="info.bannerImgSrc"></div>
				<div class="bannerbox">				
					<div v-for="info in data.moduleContent.banners" v-if="data.moduleContent.banners.length>1" class="floatbanners"><img class="somebannner" :src="info.bannerImgSrc">
					</div>
				</div>
				<div>
					 <!-- Swiper -->
				  <div class="swiper-container a">
				    <div class="swiper-wrapper">
				      <div class="swiper-slide goodlist" v-for="info1 in data.moduleContent.products">
				      	<img :src="info1.productImg">
				      	<span v-if="info1.prizeOrSlogan"><p class="prizeOrSlogan">{{info1.prizeOrSlogan}}</p></span>
				      	<label v-if="info1.sellPrice"><span>￥{{info1.sellPrice}}</span></label>
				      	<label v-if="info1.originalPrice" class="originalPrice"><span>￥{{info1.originalPrice}}</span></label>
				      </div>
				    </div>
				  </div>
				</div>
				<div v-if="data.moduleContent.products"><div class="watchall" v-if="data.moduleContent.products.length>3">查看全部</div></div>
			</div>
		</div>
 	</div>
</template>
<script type="text/javascript">
	import axios from "axios"
	import Swiper from "swiper"
  	import "swiper/dist/css/swiper.css"
		export default{
			updated(){
				var swiper = new Swiper('.a',{
				 slidesPerView : 3,	
				 spaceBetween : 20,	
				});
			},
		}
</script>
<style type="text/css" scoped>
	*{
		padding:0;
		margin:0;
	}
	img{
		width:100%;
	}
	html, body{
		width:100%;
		font-size: 26.66667vw
	}
	ul{
		list-style: none;
		width:100%;
	}
	li{
		float: left;
		width:25%;
	}
	div{
		font-size: 0.8rem ;
		text-align: center;
		width:100%;
	}
	h2{
		font-size: 1rem
	}
	.onebanner{
		width:100% !important;
	}
	.somebannner{
		width:;
	}
	.meizhoutuijian, .watchall{
		height:3rem;
		line-height: 3rem
	}
	.recommend{
		background: #f5f5f5;
		padding-top:1rem;
	}
	.recommendinside{
		box-sizing: border-box;
		background: white;
		padding:1rem;
	}
	.prizeOrSlogan{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.originalPrice{
		text-decoration: line-through;
	}
	.floatbanners{
		float: left;
		width:33.3333%;
		box-sizing: border-box;
		padding: 0.5rem

	}
	.somebannner{
		width:100%;
	}
	.bannerbox{
		overflow: hidden;
	}
</style>