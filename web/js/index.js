define(function(require) {
	var $ = require('jquery');
	require('skrollr');
		$(document).ready(function(e) {
            var s = skrollr.init({
				edgeStrategy: 'set',
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});
        });	
   require('mousewheel');
		$(document).ready(function(e) {
			
			function calcParallax(tileheight, speedratio, scrollposition) {
				return ((tileheight - (Math.floor(scrollposition / speedratio) % (tileheight+1)))-tileheight);
			}

			setTimeout(function(){
				$(".factory-none").height($(".factory-box").height())//匹配滚动条
			},1000);
		
			$(window).mousewheel(function(event, delta, deltaX, deltaY){
				if(delta < 0) $(window).scrollTop($(window).scrollTop() + 85);
				else if(delta > 0) $(window).scrollTop($(window).scrollTop() -85);
		
				return false;
			})
			$(window).bind('scroll',function() {
				scrollfun();
			});
			function scrollfun(){
				posY = $(window).scrollTop();
				var layer= calcParallax(20000, 1, posY);
				$(".factory-box").stop().animate({top:layer},600);
				
			}
			
        });	
	}
)
