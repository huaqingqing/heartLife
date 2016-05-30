var nowFrame = 0;
		for(var i=0;i<$('.lun li').length;i++){
			if(i==nowFrame){
				$('.lun li').eq(i).css('display','block');
			}else{
				$('.lun li').eq(i).css('display','none');
			}
		}
		setInterval(function(){
			nowFrame++;
			if(nowFrame>=$('.lun li').length){
				nowFrame=0;
			}

			for(var i=0;i<$('.lun li').length;i++){
				if(i==nowFrame){
					$('.lun li').eq(i).css('display','block');
				}else{
					$('.lun li').eq(i).css('display','none');
				}
			}

		},1000);