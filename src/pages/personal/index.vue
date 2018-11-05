<template>
	<div class="personal">
		<header class="g-header-container">
			<personal-header/>
		</header>
		<me-scroll>
			<personal-login/>
			<personal-order/>
			<personal-money/>
			<personal-aftersale/>
			<personal-footer/>
		</me-scroll>
	</div>
</template>

<script>
	import PersonalHeader from './header'
	import MeScroll from 'base/scroll'
	import PersonalLogin from './login'
	import PersonalOrder from './order'
	import PersonalMoney from './money'
	import PersonalAftersale from './AfterSale'
	import PersonalFooter from './footer'

	export default{
		name:'Personal',
		components:{
			PersonalHeader,
			MeScroll,
			PersonalLogin,
			PersonalOrder,
			PersonalMoney,
			PersonalAftersale,
			PersonalFooter
		}
	};

</script>

<style lang="scss" scoped>
	.personal{
		overflow:hidden;
		width:100%;
		height:100%;
	}
</style>