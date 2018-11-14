$(function(){
	var $imgs = $("#baine_img");
	var $btnl = $(".btn_left");
	var $btnr = $(".btn_right");
	var i=0;
	//获取定义none元素
	var $img = $(".baine_img>li")
	$btnr.on('click',function(){
		if(i != $img.length){
			i++;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
		}else{
			i=0;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
			}
		})
	$btnl.on('click',function(){
		if(i != 0){
			i--;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
		}else{
			i = $img.length;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
		}
	})
	setInterval(function(){
		if(i != $img.length){
			i++;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
		}else{
			i=0;
			$img.eq(i).css("display","block")
			.siblings().css("display","none");
		}
	},5000)
})

//鼠标滚动事件
 window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop;
    if(scrollTop>=400){
       p1.style.display="block";
    } if(scrollTop>=500){
       p2.style.display="block";
    } if(scrollTop>=500){
       img_r.style.display="block";
    }  if(scrollTop>=750){
       p3.style.display="block";
    } else if(scrollTop>=700){
      p0.style.display="block";
    }
}
 


