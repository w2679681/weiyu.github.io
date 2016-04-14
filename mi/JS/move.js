// perfect move:
//对于background-color等属性在不同浏览获取的值不同的不能使用；
function  move(obj,json,fn){
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			//取值
			var iCur=0;
			
			if(attr=="opacity"){
				iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur=parseInt(getStyle(obj,attr));	
			}
			//速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//检测
			/*if(iCur!=json[attr]){
				bStop=false;
			}*/

			if(attr=="opacity"){
				obj.style.filter="alpha(opacity:"+(iCur+iSpeed)+")"	;
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+"px";	
			}	

		}
		//结束
		
	},30)
}

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}