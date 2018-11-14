$(function(){
	var $l = $(".d-flex>.w>.lb>img");
	var i = 0;
	$l.eq(i).siblings().css("display","none");
	var $btnl=$(".d-flex>.w>.btn_l");
	var $btnr=$(".d-flex>.w>.btn_r");
	$btnr.click(()=>{
		if(i!=$l.length){
			i++;
			$l.eq(i).css("display","block")
				.siblings().css("display","none");
		}else{
			i=0;
			$l.eq(i).css("display","block")
				.siblings().css("display","none");
		}
	})
	$btnl.click(()=>{
		if(i!= 0){
			i--;
			$l.eq(i).css("display","block")
				.siblings().css("display","none");
		}else{
			i=$l.length;
			$l.eq(i).css("display","block")
				.siblings().css("display","none");
		}
	});
	
	$(".sm").click(function(){
		$('.sm').append($(".sm img:eq(0)"));
	})
})
