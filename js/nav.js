$(function(){
	// $(window).scroll(function(){
	// 	var x=$(document).scrollTop();
	// 	// console.log(x);
	// 	if (x>1510) {
	// 		$('.ipart02_img').animate({right:'20px'},1000);
	// 	 }
	// 	 if (x>1400 && x<1500){
	// 	 	// var a=$('..ipart02_img').position().right;
	// 		$('.ipart02_img').animate({right:'300px'},1000);
	// 	 }
	// });
	$('.navs a:first').addClass('actives');
	$('.navs ul li a').mouseover(function(){
       $('.navs ul a').removeClass('actives');
       $(this).addClass('actives');
	});
	$('.links li .n').mouseover(function(){
		  $(this).css({'color':'#ffa500','transition':'all 0.3s ease'});
	});
	$('.links li .n').mouseout(function(){
		  $(this).css({'color':'#555','transition':'all 0.3s ease'});
	});
	$('.nav2 .tubiao').click(function(){
	   $('.daohang').slideToggle('slow');
	});
		
});
