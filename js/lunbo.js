 window.onload=function(){
		 	var oDiv=document.getElementById('playBox');
		 	var uimg=getTagName(oDiv,'Ulimg')[0];
		 	var im=uimg.getElementsByTagName('li');
		 	var now=0;
		 	function tab(){
		 		starmove(uimg,'left',-(now*im[0].offsetWidth));
		 	}
            var timer = setInterval(function(){
            	  now++;
            	if(now==im.length){
            		now=0;
            	}
            	tab();
            }, 3000); //滚动间隔时间设置
		    oDiv.onmouseover = function() {
		        clearInterval(timer);
		    }
		    oDiv.onmouseout = function() {
		        timer = setInterval(function(){
            	  now++;
            	if(now==im.length){
            		now=0;
            	}
            	tab();
            },3000); //滚动间隔时间设置
		    }
	

		 }
		 function getStyle(obj,name){
		 	if(obj.currentStyle){
		 		return obj.currentStyle[name];
		 	}else{
		 		return getComputedStyle(obj,null)[name];
		 	}
		 }
		 function starmove(obj,arr,add){
		 	clearInterval(obj.timer);
		 	obj.timer=setInterval(function(){
               var current=parseFloat(getStyle(obj,arr));
               var speed=(add-current)/5;
               speed=speed>0?Math.ceil(speed):Math.floor(speed);
               if(add==current){
               	clearInterval(obj.timer);
               }else{
               	obj.style[arr]=current+speed+'px';
               }

		 	},50);
		 }
		function getTagName(Pnode,Cname){
			var allnode=Pnode.getElementsByTagName('*');
			var r=[];
			for (var i = 0; i < allnode.length; i++) {
				if(allnode[i].className==Cname){
					r.push(allnode[i]);
				}
				
			}
			return r;
		}