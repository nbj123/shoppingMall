import axios from 'axios'
import jsonp from 'assets/js/jsonp'
import {SUCC_CODE,TIMEOUT,HOME_RECOMMEND_PAGE_SIZE,jsonpOptions} from './config'

//打乱 更新以后的幻灯片顺序   //打乱数组顺序
const shuffle = (arr) => {
	const arrLength = arr.length;
	let i = arrLength;
	let rndNum;

	while(i--){
		if(i !== (rndNum = Math.floor(Math.random() * arrLength))){
			[arr[i],arr[rndNum]] = [arr[rndNum],arr[i]];
		}
	}
	return arr;
}


// 获取幻灯片数据   --ajax

export const getHomeSlider = () => {
	return axios.get('http://www.imooc.com/api/home/slider',{
		timeout:TIMEOUT  //超过十秒报超时错误	
	}).then(res=>{
		if(res.data.code === SUCC_CODE){
			let sliders = res.data.slider;
			const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
			sliders = shuffle(sliders.filter(() => Math.random() >= 0.5)); //一半的概念
			if(sliders.length === 0){
				sliders = slider;
			}

			return sliders;
		}

		throw new Error('没有成功获取到数据！');
	}).catch(err => {
		if(err){
			console.log(err);  //打印错误
		}

		return [   //错误时 返回一个链接和图片
			{
				linkUrl:'https://www.imooc.com',
				picUrl:require('assets/img/404.png')
			}
		];
	})// .then(data => {    //延迟一秒钟执行 获取数据
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {
	// 			resolve(data);   //执行上面then中的函数
	// 		}, 1000);
	// 	});
	// })
};



// 获取热门推荐数据 -- jsonp
export const getHomeRecommend = (page=1,psize=HOME_RECOMMEND_PAGE_SIZE) => {
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
    //https://ju.taobao.com/json/tg/ajaxGetItemsV2.json?&20page=1&psize=20&type=0&frontCatId=&callback=_JP0
	// 最后是这个网站引进数据
	const params = {
		page,
		psize,
		type:0,
		frontCatId:''
	};
	return jsonp(url,params,jsonpOptions).then(res=>{
		if(res.code === "200"){
			// console.log(url);
			return res;
		}

		throw new Error('没有成功获取到数据！');
	}).catch(err => {
		if(err){
			console.log(err);
		}
	 })//.then(data => {
	// 	return new Promise(resolve => {
	// 		setTimeout(()=>{
	// 			resolve(data)
	// 		},1000);
	// 	})
	// })
}