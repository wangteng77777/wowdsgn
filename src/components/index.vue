<template>
 	<div class="all">
    <openapp></openapp>
    <div class="inside">
      <div class="nav">
        <div class="logobox">      
          <img class="logo" src="../assets/titleView.png">
        </div> 
        <div class="inputbox">
          <img class="biggass" src="../assets/biggass.png">
          <input class="serch" type="text" name="">
        </div>       
      </div>
      <ul class="titlelist">
        <li v-for="data,index in dagelist" @click="chagneshow(index,data.path)" :class="current===index?'bottomborder':''">{{data.name}}</li>
      </ul>
      <navswiper :key="index"></navswiper>
      <router-view></router-view>
      <recommend v-if="current === 0?true:false"></recommend>
      <furniture v-if="current === 1?true:false"></furniture>
      <HomeFurnishing v-if="current === 2?true:false"></HomeFurnishing>
      <activity v-if="current === 3?true:false"></activity>
      <footerbar></footerbar>
   	</div>
  </div>
</template>
<script src="../dist/js/swiper.min.js"></script>
<script>
	import adbar from './index/adbar'
	import searchbar from './index/searchbar'
	import tagbox from './index/tagbox'
	import footerbar from './index/footerbar'
  import Router from "../router"
  import recommend from "./index/recommend"
  import furniture from "./index/furniture"
  import activity from "./index/activity"
  import HomeFurnishing from "./index/HomeFurnishing"
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
  import axios from "axios"
  import navswiper from './index/navswiper'
  import vuex from "vuex"
  import Vue from "vue"
  import openapp from './index/openapp'

  Vue.use(vuex)
export default {
	name:'index',
	data(){
		return {
			name:'首页',
      index:0,
      isshow:true,
      dagelist:[
        {
          name:'推荐',
          path:"/v2/page?pageId=1&tabId=1&_=1539826826594"
        },
        {
          name:'家具',
          path:"/v2/page?pageId=1&tabId=10005&_=1539826829243"
        },
        {
          name:'家居',
          path:"/v2/page?pageId=1&tabId=10006&_=1539826876643"
        },
        {
          name:'活动',
          path:"/v2/page?pageId=1&tabId=10010&_=1539826980457"
        } 
        ],
      current:0,
      imglist:[],
		}
	},
  methods:{
    chagneshow(id,path){
      this.current = id
      this.imglist = this.$store.state['imglist'+(this.current)]
      this.$store.dispatch('toget',path)
      this.index = id
      // console.log(this.$store.state.imglist.modules[0].moduleContent.banners[0].bannerImgSrc)
        console.log(this.$store.state.imglist.modules[1].moduleName)
    }
  },
  mounted(){
    axios.get("/v2/page?pageId=1&tabId=1&_=1539826826594").then((res)=>{
      this.$store.commit("changelist",res)
    })
  },
	components:{
		adbar,
		searchbar,
		tagbox,
		footerbar,
    recommend,
    furniture,
    activity,
    HomeFurnishing,
    navswiper,
    openapp
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html{
    width:100%;
    font-size: 26.6667vw;
  }
  ul{
    list-style: none;
  }
  img{
    display:block;
  }
  .nav{
    padding:10px;
  }
  .inside{
    position:relative;
    margin-bottom: 3rem
  }
  .logobox{
    margin:1rem;
    display: inline-block;
    height: 2rem;
    left:0;
    float: left;
    overflow: hidden;
    position: relative;
    margin-top: 2px;
  }
  .logo{
    height:1rem;
    top:50%;
    position:relative;
    transform: translateY(-50%);
  }
  .inputbox{
    height:2rem;
    float: left;
    margin-left: 20px;
    background: #f5f5f5;
    border-radius: 1rem;
    border:1px solid #ccc;
    overflow: hidden;
    width:14rem;
  }
  .serch{
    height:2rem;
    box-sizing: border-box;
    width:12rem;
    background: #f5f5f5;
    border:0;
    float: left;

  }
  .biggass{
    width:2rem;
    display: inline-block;
    float: left;
  }
  #indexInput{
    width:200px;
    height:30px;
  }
  ul{
    width:100%;
    list-style: none;
    overflow: hidden;
  }
  li{
    width:25%;
    float: left;
    text-align: center;
  }
  .bottomborder{
    border-bottom: 2px solid #ccc
  }
  .bannerimg{
    width:100%;
  }
</style>
