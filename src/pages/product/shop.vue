<template>
	<div class="a">
		<div class="shop-name">
			<img :src="shopInfo.shopIcon">
			<span>{{shopInfo.shopName}}</span>
		</div>
		<ul class="shop-info">
			<li
			  v-for="(item ,index) in shopInfo.evaluates"
			  :key="index"
			>
				{{item.title}}&nbsp;{{item.score}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {getProductNav} from 'api/product'

	export default{
		name:'ProductShop',
		data(){
			return{
				id:'',
				shopInfo:{}
			};
		},
		created(){
			this.getShopInfo();
		},
		methods:{
			getShopInfo(){
				this.id = this.$route.params.id;
				return getProductNav(this.id).then(data=>{
					this.shopInfo = data.seller;
					// console.log(data.seller);
				});
			},
		}

	}
</script>

<style lang="scss">
	@import "~assets/scss/mixins";
	.a{
		width: 100%;
		height: 120px;
		background-color: #fff;
		margin-top: 8px;
		padding: 10px 16px;
		margin-bottom: $tabbar-height;
		.shop-name{
			margin-bottom: 18px;
		  img{
		  	width: 50px;
		  	height: 50px;
		  	border:1px solid #999;
		  	margin-right: 5px;
		  }
		  span{
		  	display: inline-block;
		  	margin-top: 10px;
		  	font-size: 15px;
		  	color: #333;
		  }
		}
		.shop-info{
			display: flex;
			justify-content:space-around;
			font-size: 14px;
			color: #999;
		}
	}
</style>