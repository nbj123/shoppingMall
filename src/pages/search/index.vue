<template>
	<transition name="search">
		<div class="search">
			<header class="g-header-container">
				<search-header @query="getQuery"/>
			</header>
			<div class="g-content-container">
				<me-scroll ref="scroll">
					<search-hot @loaded="updateScroll" v-show="!query"/>
					<search-history
					  @show-confirm="showConfirm"
					  ref="history"
					  v-show="!query"
					  @remove-item="updateScroll"
					/>
					<search-result :query="query" v-show="query"/>
				</me-scroll>
			</div>
			<me-confirm
			  msg="确认要删除吗？"
			  ref="confirm"
			  @confirm="clearAllSearchHistory"
			/>
		</div>
	</transition>
</template>

<script>
	import MeScroll from 'base/scroll'
	import SearchHeader from './header'
	import SearchHot from './hot'
	import SearchHistory from './history'
	import SearchResult from './result'
	import MeConfirm from 'base/confirm'

	
	export default{
		name:'Search',
		data(){
			return {
				query:''
			}
		},
		components:{
			MeScroll,
			SearchHeader,
			SearchHot,
			SearchHistory,
			SearchResult,
			MeConfirm
		},
		methods:{
			showConfirm(){
				this.$refs.confirm.show();
			},
			clearAllSearchHistory(){
				this.$refs.history.clear()
				this.$refs.history.update()
			},
			getQuery(query){
				this.query = query;
			},
			updateScroll(){
				this.$refs.scroll.update();
			}
		}
	};

</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .search {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }
  .search-enter-active,
  .search-leave-active {    
      transition: all 0.3s;
  }

  .search-enter,
  .search-leave-to {
     transform: translate3d(100%, 0, 0);
  }
</style>