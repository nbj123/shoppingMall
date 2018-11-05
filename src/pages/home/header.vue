<template>
	<me-navbar class="header" v-show="visible">
		<i class="iconfont icon-scan" slot="left"></i>
		<me-search-box
		  slot="center"
		  placeholder="开学季有礼，好货5折起"
		  @query="getQuery"
		  fake
		  @click.native="goToSearch"
		/>
		<i class="iconfont icon-msg" slot="right"></i>
	</me-navbar>
</template>

<script>
	import MeNavbar from 'base/navbar'
	import MeSearchBox from 'base/search-box'

	export default{
		name:'HomeHeader',
		components:{
			MeNavbar,
			MeSearchBox
		},
		data(){
			return{
				visible:true
			};
		},
		methods:{
			show(){
				this.visible = true;
			},
			hide(){
				this.visible = false;
			},
			getQuery(query){
				console.log(query);
			},
			goToSearch(){
				this.$router.push('/search');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.header{
		&.mine-navbar{
			background-color:transparent;
			transition:background-color 0.5s;
			// background-color:$header-bgc-translucent;
		}
		
		&.header-transition{
			background-color:$header-bgc-translucent;
		}

		.iconfont{
			color:$icon-color-default;
			font-size:$icon-font-size;
		}
	}
</style>