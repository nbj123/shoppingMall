<template>
	<div class="home">
		<header class="g-header-container">
			<home-header :class="{'header-transition':isHeaderTransition}" ref="header"/>
		</header>
		<me-scroll 
		  :data="recommends"
		  pullDown
		  pullUp
		  @pull-down="pullToRefresh"
		  @pull-up="pullToLoadMore"
		  @scroll-end="scrollEnd"
		  @scroll="scroll"
		  @pull-down-transition-end="pullDownTransitionEnd"
		  ref="scroll"
		>
			<home-slider ref="slider"></home-slider>
			<home-nav></home-nav>
			<home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
		</me-scroll>
		<div class="g-backtop-container">
			<me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	
	import HomeHeader from './header'
	import HomeSlider from './slider'
	import MeScroll from 'base/scroll'
	import MeBacktop from 'base/backtop'
	import HomeNav from './nav'
	import HomeRecommend from './recommend'
	import {HEADER_TRANSITION_HEIGHT} from './config'

	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSlider,
			MeScroll,
			HomeNav,
			HomeRecommend,
			MeBacktop
		},
		data(){
			return {
				recommends:[],
				isBacktopVisible:false,
				isHeaderTransition:false
			};
		},
		methods:{
			updateScroll(){
			},
			getRecommends(recommends){
				this.recommends = recommends;
			},
			pullToRefresh(end){
				// setTimeout(() => {
				// 	end();
				// 	console.log('刷新成功');
				// },1000)
				this.$refs.slider.upData().then(end);
			},
			pullToLoadMore(end){
				// setTimeout(() => {
				// 	end();
				// 	console.log('上拉刷新');
				// },1000)
				this.$refs.recommend.upData().then(end).catch(err => {
					if(err){
						console.log(err);
					}
					end();
					// 处理没有更多数据的情况
					//   禁止继续加载更多数据
					//   替换上拉时的loading，改为没有更多数据了
				});
			},
			scroll(translate){
				this.changeHeaderStatus(translate);
			},
			scrollEnd(translate,scroll,pulling){  //translate<0 上拉 
				// console.log(translate);
				if(!pulling){  //pulling 为false 没在加载时候 设置导航出现
					this.changeHeaderStatus(translate);
				}
				this.isBacktopVisible = translate < 0 && -translate > scroll.height;
				
			},
			pullDownTransitionEnd(){
				this.$refs.header.show();
			},
			backToTop(){
				this.$refs.scroll && this.$refs.scroll.scrollToTop();
			},
			changeHeaderStatus(translate){

				if(translate > 0){ //上拉
					this.$refs.header.hide();
					return;
				}

				this.$refs.header.show();

				this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
			}
		}
	}
</script>

<style lang="scss" scoped>

	@import "~assets/scss/mixins";

	.home{
		overflow:hidden;
		width:100%;
		height:100%;
		background-color:$bgc-theme;
	}


</style>