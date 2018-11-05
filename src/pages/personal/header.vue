<template>
	<me-navbar title="我的慕淘" class="header">
		<span slot="right">
			<i class="iconfont icon-setting"></i>
			<i class="iconfont icon-msg"></i>
		</span>
	</me-navbar>
</template>

<script>
	import MeNavbar from 'base/navbar';
	export default{
		name:'PersonalHeader',
		components:{
			MeNavbar
		}
	}
</script>

<style lang="scss" scoped>
	@import '~assets/scss/mixins';
	
	.header{
		&.mine-navbar{
			transition:background-color 0.5s;
			background-color:$header-bgc-translucent;
			color:$icon-color-default;
		}

		.iconfont{	
			font-size:$icon-font-size;
		}

	}
</style>