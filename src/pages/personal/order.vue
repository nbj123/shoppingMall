<template>
	<div class="order">
		<div class="top">
			<i class="iconfont icon-zichan"></i>
			<span class="top-left">我的订单</span>
			<span class="top-right">查看我的全部订单&nbsp;&nbsp; <i class="iconfont icon-back"></i></span>
		</div>
		<ul class="bottom">
			<li>
				<i class="iconfont icon-daifukuan"></i>
				<span>待付款</span>
			</li>
			<li>
				<i class="iconfont icon-daishouhuo1-copy"></i>
				<span>待收货</span>
			</li>
			<li>
				<i class="iconfont icon-msg"></i>
				<span>待评价</span>
			</li>
			<li>
				<i class="iconfont icon-tuihuo"></i>
				<span>退货/退款</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'PersonalOrder'
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.order{
		margin-top: 16px;
		width: 100%;
		height: 100px;
		background-color: #fff;
		margin-bottom: 16px;
		.top{
			width: 100%;
			height: 40px;
			padding: 10px 8px;
			border-bottom: 1px solid #eee;
			.iconfont{
				font-size: 18px;
			}
			.top-left{
				font-size: 16px;
				font-weight: bold;
				margin-left: 10px;
			}
			.top-right{
				color: #999;
				float: right;
				
			}
		}
		.bottom{
			display: flex;
			width: 100%;
			height: 60px;
			li{
				flex:1;
				@include flex-center(column);
				.iconfont{
					font-size: 22px;
					margin-bottom: 4px;
				}
			}
		}
		.icon-back{
			display: inline-block;
			transform:rotate(180deg);
		}
	}
</style>