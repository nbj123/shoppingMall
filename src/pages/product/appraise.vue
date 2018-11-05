<template>
	<div class="appraise-box">
		<me-loading
		  v-if="!personInfo.keywords||!personInfo.rateList||!personInfo.totalCount"
		/>
		<div class="appraise-main" v-else>
			<div class="appraise-goods">
				<div class="goods-total">商品评价 <span>({{personInfo.totalCount}})</span></div>
				<ul class="goods-types">
					<li
					  v-for="(item ,index) in personInfo.keywords"
					  :key="index"
					>
						{{item.word}}({{item.count}})
					</li>
				</ul>
			</div>
			<div class="appraise-person" >
				<div class="person-info">
					<img :src="goodsAppraise.headPic"> {{goodsAppraise.userName}}
				</div>
				<p class="person-content">{{goodsAppraise.content}}</p>
				<p class="person-time">{{goodsAppraise.dateTime}} {{goodsAppraise.skuInfo}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {getProductNav} from 'api/product'
	import MeLoading from 'base/loading'

	export default{
		name:'ProductAppraise',
		data(){
			return{
				id:'',
				personInfo:{},
				goodsAppraise:{}
			};
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				this.id = this.$route.params.id;
				return getProductNav(this.id).then(data=>{
					// console.log(data.rate);
					this.personInfo = data.rate;
					this.goodsAppraise = data.rate.rateList[0];
					
				})
			}
		},
		components:{
			MeLoading
		}

	}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .appraise-box{
  	width: 100%;
  	height: 263px;
	  .appraise-main{
	  	width: 100%;
	  	height: auto;
	  	background-color: #fff;
	  	margin-top: 8px;
		padding: 10px 16px;
		height: 258px;
		.appraise-goods{
			width: 100%;
			height: auto;
			
			.goods-total{
				font-size: 16px;
				span{
					font-size: 15px;
				}
			}

			.goods-types{
				display: flex;
				flex-wrap:wrap;
				font-size: 12px;
				margin-top: 12px;
				li{
					background-color: #fbe2e2;
					margin-right: 10px;
					margin-bottom: 10px;
					padding: 5px;
					border-radius: 8px;
				}
			}
		}

		.appraise-person{
			width: 100%;
			height: auto;
			margin-top: 6px;
			.person-info{
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				img{
					width: 28px;
					height: 28px;
					border-radius: 50%;
					margin-right: 6px;
				}
			}
			.person-content{
				margin-top: 10px;
				font-size: 15px;
				line-height: 20px;
				color: #000;
				@include multiline-ellipsis();
				margin-bottom: 10px;
			}
		}

	  }
  }

</style>