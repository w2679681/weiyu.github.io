window.onload=function(){
	var oBox=document.getElementById("box");
	
	var oBigPic=getByClass(oBox,"big_pic")[0];
	var oBigUl=oBigPic.getElementsByTagName("ul")[0];
	var aBigLi=oBigUl.getElementsByTagName("li");
	var oPre=getByClass(oBox,"pre")[0];
	var oNext=getByClass(oBox,"next")[0];
	var oLeft=getByClass(oBox,"left")[0];
	var oRight=getByClass(oBox,"right")[0];
	var oNum=getByClass(oBox,"num")[0];
	var oTxt=getByClass(oBox,"text")[0];
	
	var oSmallUl=getByClass(oBox,"small_pic")[0].getElementsByTagName('ul')[0];
	var aSmallLi=oSmallUl.getElementsByTagName('li');
	
	var iNow=0;
	var arr=["牵手","三毛","西游","海龙","地球"];
	var oLd=aBigLi[0];
	
	oTxt.innerHTML=arr[0];
	oNum.innerHTML="1/"+aBigLi.length;
	oSmallUl.style.width=aSmallLi.length*aSmallLi[0].offsetWidth+"px";
	
	
	oPre.onclick=function(){
		 iNow--;
		 if(iNow<0){
			 iNow=aSmallLi.length-1;
		 }
		 tab();
	}
	oNext.onclick=function(){
		 iNow++;
		 if(iNow==aSmallLi.length){
			 iNow=0;
		 }
		 tab();
	}
	
	oLeft.onmouseover=oPre.onmouseover=function(){
		anymove(oPre,"opacity",100);
	}
	oRight.onmouseover=oNext.onmouseover=function(){
		anymove(oNext,"opacity",100);
	}
	oLeft.onmouseout=oPre.onmouseout=function(){
		anymove(oPre,"opacity",0);
	}
	oRight.onmouseout=oNext.onmouseout=function(){
		anymove(oNext,"opacity",0);
	}
	
	
	for(var i=0; i<aSmallLi.length; i++){
		aSmallLi[i].index=i;
		aSmallLi[i].onmouseover=function(){
			anymove(this,"opacity",100);
		}
		aSmallLi[i].onmouseout=function(){
			if(this.index==iNow){return}
			anymove(this,"opacity",30);	
		}
		aSmallLi[i].onclick=function(){
			if(iNow==this.index){return}
			iNow=this.index;
			tab();
		}
		
	}
	function tab(){
			oLd.style.zIndex="1";
			oLd=aBigLi[iNow];
			for(var i=0; i<aSmallLi.length; i++){
				anymove(aSmallLi[i],"opacity",30);
			}
			anymove(aSmallLi[iNow],"opacity",100);
			aBigLi[iNow].style.zIndex="2";
			aBigLi[iNow].style.height=0;
			anymove(aBigLi[iNow],"height",oBigUl.offsetHeight);
			oNum.innerHTML=iNow+1+"/"+aBigLi.length;
			oTxt.innerHTML=arr[iNow];
			
			if(iNow==0){
				anymove(oSmallUl,"left",0);
			}else if(iNow==aSmallLi.length-1){
				anymove(oSmallUl,"left",-(iNow-2)*aSmallLi[0].offsetWidth);
			}else{
				anymove(oSmallUl,"left",-(iNow-1)*aSmallLi[0].offsetWidth);
			}
			
		}
	
}
