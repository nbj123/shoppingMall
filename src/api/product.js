import jsonp from 'assets/js/jsonp'
import {TIMEOUT,PRODUCT_API,PRODUCT_ttid,PRODUCT_SUCCESS,jsonpOptions} from './config'

export const getProductNav = (id,api=PRODUCT_API,ttid=PRODUCT_ttid) => {
	const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';

	const params = {
		api,
		ttid,
		data:`{%22itemNumId%22%3A%22${id}%22}`,
		appKey:12574478,
		dataType:'jsonp',
		type:'jsonp',
		v:6.0
	};
	return jsonp(url,params,jsonpOptions).then(res => {
		if(res.ret[0] == PRODUCT_SUCCESS){
			// console.log(res.data);
			return res.data;
		}
		throw new Error('没有获取到数据 ！');
	}).catch(err=>{
		if(err){
			console.log(err);
		}
	})
}

