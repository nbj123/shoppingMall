<template>
	<swiper :options="swiperOption" ref="swiper">
		<!-- 下拉 -->
		<div class="mine-scroll-pull-down" v-if="pullDown">
			<me-loading :text="pullDownText" inline ref='pullDownLoading'/>
		</div>
		<swiper-slide>
			<slot></slot>
		</swiper-slide>
		<!-- 上拉 -->
		<div class="mine-scroll-pull-up" v-if="pullUp">
			<me-loading :text="pullUpText" inline ref="pullUpLoading"/>
		</div>
		<div class="swiper-scrollbar" slot="scrollbar" v-if="scrollbar"></div>
	</swiper>
</template>

<script>
	import { swiper,swiperSlide } from 'vue-awesome-swiper'
	import MeLoading from 'base/loading'
	import {
		PULL_DOWN_HEIGING,
		PULL_DOWN_TEXT_INIT,
		PULL_DOWN_TEXT_START,
		PULL_DOWN_TEXT_ING,
		PULL_DOWN_TEXT_END,
		PULL_UP_HEIGHT,
		PULL_UP_TEXT_INIT,
		PULL_UP_TEXT_START,
		PULL_UP_TEXT_ING,
		PULL_UP_TEXT_END
	} from './config'

	export default{
		name:'MeScroll',
		components:{
			swiper,
			swiperSlide,
			MeLoading
		},
		props:{
			scrollbar:{
				type:Boolean,
				default:true
			},
			data:{
				type:[Array,Object]
			},
			pullDown:{
				type:Boolean,
				default:false
			},
			pullUp:{
				type:Boolean,
				default:false
			}
		},
		created(){
			this.init();
		},
		watch:{  //监听变化的一个函数
			data(){  //变化了 并且满足条件要求[Array,Object]使用
				this.update(); //调用更新
			}
		},
		methods:{
			init(){
				this.pulling=false;
				this.pullDownText=PULL_DOWN_TEXT_INIT;
				this.pullUpText=PULL_UP_TEXT_INIT;
				this.swiperOption = {
					direction:'vertical',   //垂直滚动的滚动条
					slidesPerView:'auto',  //一页能看到几张图 目前自适应
					freeMode:true,        //自由模式 随便滚动
					setWrapperSize:true, // 设置元素外围的高度
					scrollbar:{
						el:this.scrollbar ? '.swiper-scrollbar' : null,
						hide:true    // 是否自动隐藏
					},
					on:{   //用来触发事件
						sliderMove:this.scroll,
						touchEnd:this.touchEnd,
						transitionEnd:this.scrollEnd//滑动停止的时候监听触发
					}
				}
			},
			update(){
				// 滚动条更新 获取滚动条 然后加上API swiper.update 更新  swiper是new 出来的实例
				// this.$refs.swiper && this.$refs.swiper.swiper.update() ; //this.$refs.swiper存在的时候 调用更新

				this.$nextTick(()=>{  // $nextTick 包装DOM渲染完毕触发里面函数
					this.$refs.swiper && this.$refs.swiper.swiper.update() ; 
				});

			},
			scrollToTop(speed,runCallbacks){ //滚动条返回顶部
									//slideTo() swiper自带的方法 返回幻灯片 因为此页面只有一个幻灯片在顶部 所以相当于返回顶部
				this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0,speed,runCallbacks);
			},

			scroll(){
				const swiper = this.$refs.swiper.swiper;

				this.$emit('scroll',swiper.translate,this.$refs.swiper.swiper);

				if(this.pulling){  //true 表示正在拉动 
					return;
				}

				if(swiper.translate > 0){ // 下拉
					if(!this.pullDown){  // 不存在 就返回
						return;
					}

					if(swiper.translate > PULL_DOWN_HEIGING){
						// this.pullDownText = 111;
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
					}else{
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
					}
				}else if(swiper.isEnd){  // 上拉  isEnd: 到了底部
					if(!this.pullUp){  // 不存在 就返回
						return;
					}

					// 上拉的高度是否超过 高
					const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT>parseInt(swiper.$wrapperEl.css('height'));

					if(isPullUp){
						this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
					}else{
						this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
					}

				}
			},
			scrollEnd(){  //滚动条滑动结束
				this.$emit('scroll-end',this.$refs.swiper.swiper.translate,this.$refs.swiper.swiper,this.pulling);
			},
			touchEnd(){
				if(this.pulling){  //true 表示正在拉动 
					return;
				}

				const swiper = this.$refs.swiper.swiper;
				if(swiper.translate > PULL_DOWN_HEIGING){ // 下拉
					if(!this.pullDown){  // 不存在 就返回
						return;
					}
 
					this.pulling=true;  //正在加载 设置true 不可拉动
					swiper.allowTouchMove = false; //禁止触摸
					swiper.setTransition(swiper.params.speed);  //设置速度 为找到的初识速度
					swiper.setTranslate(PULL_DOWN_HEIGING); //设置回到原来的高度
					swiper.params.virtualTranslate = true ;//定住不给回弹
					this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);

					this.$emit('pull-down',this.pullDownEnd);

				}else if(swiper.isEnd){ //底部

					const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
          			const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;

          			if(isPullUp){  //上拉
          				if(!this.pullUp){  // 不存在 就返回
							return;
						}

						this.pulling=true;
						swiper.allowTouchMove = false; //禁止触摸
						swiper.setTransition(swiper.params.speed);  //设置速度 为找到的初识速度
						swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height));
            			swiper.params.virtualTranslate = true; // 定住不给回弹
            			this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
            			this.$emit('pull-up',this.pullUpEnd);
          			}

				}
			},
			pullDownEnd(){
				const swiper = this.$refs.swiper.swiper;

				this.pulling = false; //加载完成 设置成false 可以拉动
				this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
				swiper.params.virtualTranslate = false;//可以回弹
				swiper.allowTouchMove = true; //可以触摸
				swiper.setTransition(swiper.params.speed);  //设置速度 为找到的初识速度
				swiper.setTranslate(0); //设置滚动条swiper的移动距离
				setTimeout(()=>{
					this.$emit('pull-down-transition-end');
				},swiper.params.speed);
			},
			pullUpEnd(){
				const swiper = this.$refs.swiper.swiper;
				this.pulling = false; //加载完成 设置成false 可以拉动
				this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
				swiper.params.virtualTranslate = false;//可以回弹
				swiper.allowTouchMove = true; //可以触摸

			}		
		}
	}; 
</script>

<style lang="scss" scoped>
	.swiper-container{
		overflow:hidden;
		width:100%;
		height:100%;
	}
	.swiper-slide{
		height:auto;
	}
	.mine-scroll-pull-down{
		position:absolute;
		left:0;
		bottom:100%;
		height:80px;
		width:100%;
	}

	.mine-scroll-pull-up{
		position:absolute;
		left:0;
		width:100%;
		top:100%;
		height:30px;
	}

</style>