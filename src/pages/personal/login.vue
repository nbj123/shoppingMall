<template>
	<div class="login">
		<div class="login-icon">
			<i class="iconfont icon-personal"></i>
		</div>
		<div class="login-btn">
			<span>注册</span>
			<span class="center">|</span>
			<span>登陆</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'PersonalLogin'
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.login{
		width: 100%;
		height: 230px;
		padding-top: 50px;
		background-color: $header-bgc-translucent;
		.login-icon{
			width: 100%;
			text-align: center;
			padding-top: 24px;
			.iconfont{
				font-size:84px;
				color: #fff;
			}
		}
		.login-btn{
			width: 100%;
			font-size: 26px;
			color: #fff;
			text-align: center;
			padding-top: 16px;
			.center{
				margin: 0 26px;
			}
		}
	}
</style>