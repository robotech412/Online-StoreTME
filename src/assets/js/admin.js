$(".main-sub-menu").on("click",function(){
	$(".sub-menu").css({"display":"none"});
	$('.main-sub-menu').find(".fa-angle-right").css({"transform":"rotate(0deg)"});
	$(this).find("ul").slideToggle();
	$(".main-menu .main-sub-menu").removeClass("active");
	$(this).addClass("active");
	$(this).find(".fa-angle-right").css({"transform":"rotate(90deg)"});
});