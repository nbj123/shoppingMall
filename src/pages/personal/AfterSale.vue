<template>
	<div class="afterSale">
		<div v-for="(item,index) in msg">
			<i class="iconfont" :class="item.icon"></i>
			<span>{{item.text}}</span>
			<i class="iconfont" :class="item.next"></i>
		</div>
	</div>
</template>

<script>
	export default{
		name:'PersonalAftersale',
		data(){
			return{
				msg:[
				{
					icon:'icon-shouhou',
					text:'售后服务',
					next:'icon-back'
				},
				{
					icon:'icon-yijianfankui',
					text:'意见反馈',
					next:'icon-back'
				},
				{
					icon:'icon-shouhuo',
					text:'收货地址',
					next:'icon-back'
				},
				{
					icon:'icon-tuichu',
					text:'退出登录',
					next:'icon-back'
				},
				{
					icon:'icon-dianhua',
					text:'400-123-8888',
					next:'icon-back'
				}],
			};
		}
	}
</script>

<style lang="scss" scoped>
	.afterSale{
		width: 100%;
		height: 250px;
		background-color: #fff;
		div{
			width: 100%;
			height: 50px;
			padding: 0 8px;
			line-height: 50px;
			border-bottom: 1px solid #eee;
			
			.iconfont{
				font-size: 18px;
			}
			span{
				font-size: 16px;
				color: #666;
				margin-left: 8px;
			}
			.icon-back{
				display: inline-block;
				transform:rotate(180deg);
				float: right;
			}
		}
	}
</style>