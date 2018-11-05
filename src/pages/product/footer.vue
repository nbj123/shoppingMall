<template>
	<div class="main">
		<div class="left">
			<router-link class="item" to="">
				<i class="iconfont icon-shop"></i>
				<span>店铺</span>
			</router-link>
			<router-link class="item" to="">
				<i class="iconfont icon-service"></i>
				<span>客服</span>
			</router-link>
			<router-link class="item" to="">
				<i class="iconfont icon-collect"></i>
				<span>收藏</span>
			</router-link>
		</div>
		<div class="right">
			<button class="r-yellow">加入购物车</button>
			<button class="r-red">马上抢</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProductFooter'
	}

</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.main{
		width: 100%;
		height: $tabbar-height;
		background-color: #fff;
		display: flex;
		.left{
			width: 40%;
			display: flex;
			.item{
				flex:1;
				@include flex-center(column);
				.iconfont{
					margin-top: 4px;
					margin-bottom:4px;
					font-size:$icon-font-size;
				}
			}
		}
		.right{
			width: 60%;
			display: flex;
			button{
				text-align: center;
				flex:1;
				height: 100%;
				line-height: 100%;
				color: #fff;
			}
			.r-yellow{
				background-color: #ff9500;
			}
			.r-red{
				background-color: #ff0036;
			}
		}
	}
</style>