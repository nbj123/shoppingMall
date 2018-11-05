<template>
	<swiper :options="swiperOption"  :key="keyId">
        <slot></slot>
        <div class="swiper-pagination" slot="pagination" v-if="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper } from 'vue-awesome-swiper'

	export default{
		name:'MeSlider',
		components: {
   		 swiper
  		},
  		props:{
  			direction:{
  				type:String,
  				default:'horizontal', // 水平
  				validator(value){
  					return [
  						'horizontal',
  						'vertical'
  					].indexOf(value) > -1;
  				}
  			},
  			interval:{
  				type:Number,
  				default:3000,
  				validator(value){
  					return value >=0;
  				}
  			},
  			loop:{
  				type:Boolean,
  				default:true
  			},
  			pagination:{
  				type:Boolean,
  				default:true
  			},
        data:{
          type:Array,
          default(){
            return [];
          }
        }

  		},
  		data(){
  			return{
          keyId:Math.random(),
  				
  			}
		  },
      watch:{
        data(newData){
          if(newData.length === 0) return;

          this.swiperOption.loop = newData.length === 1 ? false : this.loop;

          this.keyId = Math.random();
        }
      },
      created(){
        this.init();//初始化参数
      },
      methods:{
        init(){
          this.swiperOption = {
            watchOverflow:true,  // 只有一张图片的时候 轮播图失效
            direction:this.direction,  // 排列滑动的方式
            autoplay:this.interval ? {
              delay:this.interval,  //延迟
              disableOnInteraction:false  // 开启自动轮播 当手滑的时候 不停止自动轮播
            } : false,
            slidesPerView:1,    //  设置slider容器能够同时显示几张图片
            loop:this.data.length === 1 ? false : this.loop,    //是否开启无缝滚动 
            pagination:{     //分页器
              el:this.pagination ? '.swiper-pagination' : null
            }
          };
        }
      }
  	}
</script>

<style lang="scss" scoped>
	
</style>