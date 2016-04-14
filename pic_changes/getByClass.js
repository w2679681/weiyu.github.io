// JavaScript Document
function getByClass(obj,sClass){
		var aEle=obj.getElementsByTagName("*");
		var aResult=[];
		
		for(var i=0; i<aEle.length; i++){
			if(aEle[i].className==sClass){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
}