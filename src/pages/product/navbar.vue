<template>
	<div class="swiper-wrapper">
		<me-loading v-if="!navbars.images"></me-loading>
		<div class="navbar-wrapper" v-else>
			<me-slider
			  :direction="direction"
			  :loop="loop"
			  :interval="interval"
			  :pagination="pagination"
			>
				<swiperSlide
				 v-for="(item,index) in navbars.images"
				 :key="index"
				>				
					<p><img :src="item" alt="" class="navbar-img"></p>			
				</swiperSlide>
			</me-slider>
			<div class="navbar-title">
				<span class="left">aaa</span>
				<span class="right">bbb</span>
			</div>
			<div class="main-title">
				<p>{{title}}</p>
				<ul class="main-address">
					<li>快递包邮</li>
					<li>月销量 xxx件</li>
					<li>中国大陆</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import {getProductNav} from 'api/product'
	import { swiperSlide } from 'vue-awesome-swiper'
	import MeSlider from "base/slider"
	import MeLoading from 'base/loading'
	import {sliderOptions} from './config'

	export default{
		name:'ProductNavbar',
		data(){
			return{
				id:'',
				navbars:[],
				title:'',
				direction:sliderOptions.direction,
				loop:sliderOptions.loop,
				interval:sliderOptions.interval,
				pagination:sliderOptions.pagination
			}
		},
		components:{
			MeSlider,
			MeLoading,
			swiperSlide
		},
		created(){
			this.getNav();
		},
		methods:{
			getNav(){
				this.id = this.$route.params.id;
				return getProductNav(this.id).then(data=>{
					// console.log(data);
					this.navbars = 	data.item;
					this.title = data.item.title;
					// console.log(this.navbars.images)
					// this.$emit('get-data',data);

				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~assets/scss/mixins';

	.swiper-wrapper{
		width:100%;
		height:481px;
	}
	.navbar-wrapper{
		width: 100%;
		height: 100%;
		.main-title{
			width: 100%;
			height: 70px;
			background-color: #fff;
			padding: 10px 16px;
		
			p{
				font-size: 15px;
				color:#000;
				@include ellipsis();
			}
			.main-address{
				margin-top:18px; 
				display: flex;
				justify-content:space-between;
				font-size: 14px;
				color:#999;
			}

		}
	}
	.navbar-img{
		display: block;
		width:100%;
		height:375px;
	}
	.navbar-title{
		width: 100%;
		background-color: #ef347a;
		height: 36px;
		border-top: 1px solid #fff;
		padding: 8px 10px;
		
		color:#fff;
	
		.left{
			float: left;
			font-size: 18px;
		}
		.right{
			display: inline-block;
			width: 80px;
			height: 20px;
			line-height: 20px;
			background-color: #cc2e3e;
			float: right;
			text-align: center;
			font-size: 13px;
			border-radius: 5px;
		}
	}
</style>