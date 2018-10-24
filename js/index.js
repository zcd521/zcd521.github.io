//设置函数
function task(){
	//把查找到的选择器传给img
	var img=baine_img.querySelector(".bai_img");
	
	img.className="";
	var next=img.nextElementSibling;
	if(next!=null){
		next.className="bai_img";
	}
	else{
		img.parentNode.children[0].className="bai_img";
	}
}
var timer=setInterval(task,6000);
//鼠标滚动事件
 window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop;
    if(scrollTop>=400){
       p1.style.display="block";
    } if(scrollTop>=500){
       p2.style.display="block";
    } if(scrollTop>=500){
       img_r.style.display="block";
    }  if(scrollTop>=1000){
       p3.style.display="block";
    } if(scrollTop>=1200){
       p4.style.display="block";
    }
}