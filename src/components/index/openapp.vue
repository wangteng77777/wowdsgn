<template>
	<div v-if="isshow">
		<ul>
			<li class="icon" @click="isshow=!isshow"><i class="iconfont icon-tuichu"></i></li>
			<li class="applogo"><img src="../../assets/applogo.png"></li>
			<li class="text">
				<p>
					尖叫设计APP
				</p>
				<p>
					生活即风格
				</p>
			</li>
			<li class="openapp">
				立即打开
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isshow:true
			}
		}
	}
</script>
<style type="text/css" scoped>
	*{
		padding:0;
		margin:0;
	}
	html,body{
		height:100%;
	}
	html{
		font-size: 26.66666vw
	}
	.icon>i{
		font-size: 2rem;
		margin-right: 10px
	}
	ul{
		list-style: none
	}
	body{
		font-size: 16px
	}
	ul{
		width: 100%;
		height:2rem;
		padding:10px;
	}
	li{
		float: left;
	}
	.text>p{
		height:1rem;
	}
	.applogo>img{
		width:2rem;
		margin-right: 10px
	}
	.openapp{
		float: right;
		width:6rem;
		height:2rem;
		background: #ffd444;
		text-align: center;
		line-height: 2rem
	}
</style>