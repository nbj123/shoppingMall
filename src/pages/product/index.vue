<template>
	<transition name="product">
		<div class="product" >
			<header class="g-header-container">
				<product-header/>
			</header>
			<me-scroll>
				<product-navbar/>
				<product-appraise/>
				<product-shop/>
			</me-scroll>
			<footer class="g-footer-container">
				<product-footer/>
			</footer>

		</div>
	</transition>
</template>

<script>
	import ProductHeader from './header'
	import ProductNavbar from './navbar'
	import MeScroll from 'base/scroll'
	import ProductAppraise from './appraise'
	import ProductShop from './shop'
	import ProductFooter from './footer'


	export default{
		name:'Product',
		data(){
			return {
			};
		},
		components:{
			ProductHeader,
			ProductNavbar,
			MeScroll,
			ProductAppraise,
			ProductShop,
			ProductFooter
		},

	};

</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.product{
		overflow:hidden;
		position:absolute;
		top:0;
		left:0;
		z-index:$product-z-index;
		width:100%;
		height:100%;
		background-color:#eee;
	}
	
	.product-enter-active,
	.product-leave-active{
		transition:all .3s;
	}

	.product-enter,
	.product-leave-to{
		transform:translate3d(100%,0,0);
	}
	

</style>