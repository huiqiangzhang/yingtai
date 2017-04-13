window.onload=function(){
	var head=$(".headli");
	var shoujip=$(".shoujip");

	var weixin=$(".weixin");
	var shouye=$(".shouyepin");

	head[0].onmouseover=function(){
		shouye[0].style.display="block";
	} 
	head[0].onmouseout=function(){
		shouye[0].style.display="none";
	}
	head[2].onmouseover=function(){
		weixin[0].style.display="block";
	} 
	head[2].onmouseout=function(){
		weixin[0].style.display="none";
	}
	head[4].onmouseover=function(){
		shoujip[0].style.display="block";
	}
	head[4].onmouseout=function(){
		shoujip[0].style.display="none";
	}

	//向左向右按钮出现于隐藏

	var btnl=$(".btnl");
	var btnr=$(".btnr");
	var btnll=$(".btnll");
	var btnrr=$(".btnrr");
	btnl[0].onmouseover=function(){
		btnll[0].style.display="block";	
	}
	btnll[0].onmouseout=function(){
		btnll[0].style.display="none";
	}
	btnr[0].onmouseover=function(){
		btnrr[0].style.display="block";	
	}
	btnrr[0].onmouseout=function(){
		btnrr[0].style.display="none";
	}





var win=$(".lunb")[0];
	var as=$("a",win);
	var lis=$("li",$(".lunbodian")[0])
	var btn=$(".btn")[0];
	var btnl=$(".btnll")[0];
	var btnr=$(".btnrr")[0];
	var num=0;
	as[0].style.zIndex=10;
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
		btn.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
	    btn.style.display="none";
	}


for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
		if(num==this.index){
			return;
		}
		for(var j=0;j<as.length;j++){
			animate(as[j],{opacity:0});
			lis[j].className="";
		}
		lis[this.index].className="hot";
		animate(as[this.index],{opacity:1});
		num=this.index;

	}

}


var flag=true;
btnr.onclick=function(){
	if(flag){
		flag=false;//开关
		moveR();
	}
}
btnl.onclick=function(){
	if(flag){
		flag=false;
		moveL();
}

}
function moveR(){
	num++;
	if(num==as.length){
		num=0;
	}
	for(var i=0;i<as.length;i++){
		animate(as[i],{opacity:0});
		lis[i].className="";
	}
	lis[num].className="hot";
	animate(as[num],{opacity:1},function(){
		flag=true;
	});
}
function moveL(){
	num--;
	if(num<0){
		num=lis.length-1;
	}

for( var i=0;i<as.length;i++){
	animate(as[i],{opacity:0});
	lis[i].className="";

}
lis[num].className="hot";
animate(as[num],{opacity:1},function(){
	flag=true;
});
}





//xuanxianka
var list=$(".caili");
	var item=$(".cairight00");
	for(var i=0;i<list.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		list[i].index=i;
		list[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			item[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}
	// 特卖栏选项卡
	
var bi=$(".buyint");
var bl=$(".buyld");
for(var i=0;i<bi.length;i++){
	if(i==0){
		continue;
	}
}
for(var i=0;i<bi.length;i++){
	bi[i].index=i;
	bi[i].onmouseover=function(){
		for(var j=0;j<bi.length;j++){
			bl[j].style.display="none";
		}
		bl[this.index].style.display="block";
	}
}
//同款选项卡

var gli=$(".shangchenli");
var glid=$(".shanchenlid");
for(var i=0;i<gli.length;i++){
	if(i==0){
		continue;
	}
}
for(var i=0;i<gli.length;i++){
	gli[i].index=i;
	gli[i].onmouseover=function(){
		for(var j=0;j<gli.length;j++){
		glid[j].style.display="none";
		}
		glid[this.index].style.display="block";
	}
}




// 边框线条渐变

	var xian=$(".buyxian");
	for(var i=0;i<xian.length;i++){
		zhq(xian[i]);
	}
	function zhq(obj){
		var widths=obj.offsetWidth;
		var heights=obj.offsetHeight;
		var lefts=$(".zuo",obj)[0];
		var rights=$(".you",obj)[0];
		var tops=$(".shang",obj)[0];
		var bottoms=$(".xia",obj)[0];
		obj.onmouseover=function(){
			animate(lefts,{height:heights});
			animate(rights,{height:heights});
			animate(tops,{width:widths});
			animate(bottoms,{width:widths});
		}
		obj.onmouseout=function(){
			animate(lefts,{height:0});
			animate(rights,{height:0});
			animate(tops,{width:0});
			animate(bottoms,{width:0});
		}
	}
//logo轮播

	var mingpin1=$(".shileftxia");
	for(var j=0;j<mingpin1.length;j++){
		zlbt(mingpin1[j]);
	}
	function zlbt(obj){
	var mingleft=$(".shilogo",obj);
	var mingbtnl=$(".lanniu",obj)[0];
	var mingbtnr=$(".ranniu",obj)[0];
	var mingwidths=parseInt(getStyle(mingleft[0],"width"));
	var mingnum=0;
	var mingnext=0;
	for(i=0;i<mingleft.length;i++){
		if(i==0){
			continue;
		}
		mingleft[i].style.left=mingwidths+"px";
	}
	var FLAG1=true;
	mingbtnr.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVEL1();
		}
	}
	mingbtnl.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVER1();
		}
	}
	function MOVEL1(){
		mingnext++;
		if(mingnext==mingleft.length){
			mingnext=0;
		}
		mingleft[mingnext].style.left=mingwidths+"px";
		animate(mingleft[mingnum],{left:-mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
	function MOVER1(){
		mingnext--;
		if(mingnext<0){
			mingnext=mingleft.length-1;
		}
		mingleft[mingnext].style.left=-mingwidths+"px";
		animate(mingleft[mingnum],{left:mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
  }

	
	

//名品中间轮播
var mingpin=$(".shishangzhong");
	for(var i=0;i<mingpin.length;i++){
		lbt(mingpin[i]);
	}
	function lbt(obj){
	var mingpinas=$("a",obj);
	var lis1=$("li",$(".point1")[0]);
	var mingpinbtnl=$(".mingping-btnl",obj)[0];
	var mingpinbtnr=$(".mingping-btnr",obj)[0];
	var mingpinwidths=parseInt(getStyle(mingpinas[0],"width"));
	var mingpinnum=0;
	var mingpinnext=0;

	obj.onmouseover=function(){
		mingpinbtnl.style.display="block";
		mingpinbtnr.style.display="block";
	}
	obj.onmouseout=function(){
		mingpinbtnl.style.display="none";
		mingpinbtnr.style.display="none";
	}

	for(i=0;i<mingpinas.length;i++){
		if(i==0){
			continue;
		}
		mingpinas[i].style.left=mingpinwidths+"px";
	}
	for(var i=0;i<lis1.length;i++){
		lis1[i].dd=i;
		lis1[i].onclick=function(){
			if(mingpinnum==this.dd){return;}
			mingpinas[this.dd].style.left=mingpinwidths+"px";
			lis1[mingpinnum].className="";
			lis1[this.dd].className="hot1";
			animate(mingpinas[mingpinnum],{left:-mingpinwidths});
			animate(mingpinas[this.dd],{left:0});
			mingpinnext=this.dd;
			mingpinnum=this.dd;
		}
	}
	var FLAG=true;
	mingpinbtnr.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVEL();
		}
	}
	mingpinbtnl.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVER();
		}
	}
	function MOVEL(){
		mingpinnext++;
		if(mingpinnext==mingpinas.length){
			mingpinnext=0;
		}
		mingpinas[mingpinnext].style.left=mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:-mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
	function MOVER(){
		mingpinnext--;
		if(mingpinnext<0){
			mingpinnext=mingpinas.length-1;
		}
		mingpinas[mingpinnext].style.left=-mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
	}




}

	




	
