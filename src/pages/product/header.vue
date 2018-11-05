<template>
	<me-navbar title="商品详情" class="header">
		<i class="iconfont icon-back" slot="left" @click="goBack"></i>
		<i class="iconfont icon-cart" slot="right"></i>
	</me-navbar>
</template>

<script>
	import MeNavbar from 'base/navbar'
	export default{
		name:'ProductHeader',
		components:{
			MeNavbar
		},
		methods:{
			goBack(){
				this.$router.back();
			}
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