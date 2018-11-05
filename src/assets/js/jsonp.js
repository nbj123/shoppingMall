import jsonp from 'jsonp'

// 目的是吧 { page:1,
// 	      psize:20
// 	    }
// 转化成 page=1&psize=20

const parseParam = parse => {
	let parses = [];

	for(let key in parse){
		parses.push([key,parse[key]]);
	}

	// [[page,1],[psize,20]]
	
	return parses.map( value => {
		return value.join('=');     // [page=1,psize=20]
	}).join('&');      //page=1&psize=20

}

export default (url,data,options) => {
	url += (url.indexOf('?') < 0 ? '?' : '%') + parseParam(data);

	return new Promise((resolve,reject) => {
		jsonp(url,options,(err,data) => {
			if(err){
				reject(err);
			}else{
				resolve(data);
				console.log(url)
			}
		});
	});
}