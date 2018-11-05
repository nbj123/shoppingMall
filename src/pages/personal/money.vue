<template>
	<div class="money">
		<div class="top">
			<i class="iconfont icon-zichan"></i>
			<span>我的资产</span>
		</div>
		<ul class="bottom">
			<li>现金劵</li>
			<li>红包</li>
			<li>余额</li>
			<li>礼品卡</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'PersonalMoney'
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.money{
		width: 100%;
		height: 90px;
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
			span{
				font-size: 16px;
				font-weight: bold;
				margin-left: 10px;
			}
		}
		.bottom{
			width: 100%;
			height: 50px;
			display: flex;
			li{
				flex:1;
				color: #999;
				font-size: 15px;
				@include flex-center();
			}
		}
	}
</style>