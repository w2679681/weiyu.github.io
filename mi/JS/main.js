/**
 * Created by Administrator on 2016/4/13 0013.
 */
//显示按钮
$(".banner").hover(function(){
    $("#pre").fadeIn();
    $("#next").fadeIn();
    clearInterval(timer)
},function(){
    $("#pre").fadeOut();
    $("#next").fadeOut();
    autoPlay()
});
//焦点图
var num=0;
var aLi=$(".banner_pic li");
var timer=null;
$("#pre").click(function(){
    num--;
    if (num==-1){
        num=aLi.length-1
    }
    aLi.eq(num).fadeIn().siblings().hide()
});
$("#next").click(function(){
    num++;
    if (num==aLi.length){
        num=0
    }
    aLi.eq(num).fadeIn().siblings().hide()
});
function autoPlay(){
    timer=setInterval(function(){
        num++;
        if (num==aLi.length){
            num=0
        }
        aLi.eq(num).fadeIn().siblings().hide()
    },4000)
}
autoPlay();
//滚动图
$("#right").click(function(){
    $("#move_box").animate({left:"-1226"},1000)
});
$("#left").click(function(){
    $("#move_box").animate({left:"0"},1000)
});
//左侧边栏
/*var aLi2=$(".sidebar li");
for (var i=0;i<aLi2.length;i++){
    aLi2[i].onmouseover=function(){

        this.getElementsByTagName("div")[0].style.display="block";
    };
    aLi2[i].onmouseout=function(){
        this.getElementsByTagName("div")[0].style.display="none"
    }
}*/
$(".sidebar li").hover(function(){
    var m=$(this).index();
    var aDl=this.getElementsByTagName("dl");
    $(".item_show").eq(m).show();
    var iWidth=230*aDl.length;
    $(".item_show").eq(m).width(iWidth)
},function(){
    $(".item_show").hide()
});
//顶部栏
$(".menunav").hover(function(){
    $(".nav_show").stop().slideToggle()
},function(){
    $(".nav_show").stop().slideToggle()
});
$(".nav_show").hover(function(){
    $(".nav_show").stop().slideToggle()
},function(){
    $(".nav_show").stop().slideToggle()
});
$(".menunav li:lt(6)").mouseover(function(){
    var n=$(this).index();
    $(".nav_show ul").eq(n).fadeIn().siblings().fadeOut()
});

















