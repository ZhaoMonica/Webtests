//** 背景条 **//
!function(){function e(e,t,n){return Number(e.getAttribute(t))||n}
function t(){for(r.clearRect(0,0,h,s),a=[{x:0,y:.7*s+u},{x:0,y:.7*s-u}];a[1].x<h+u;)n(a[0],a[1])}
function n(e,t){r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(t.x,t.y);
	var n=t.x+(2*p()-.25)*u,o=i(t.y);
	r.lineTo(n,o),
	r.closePath(),
	m-=x/-50,
	r.fillStyle="#"+(127*y(m)+128<<16|127*y(m+x/3)+128<<8|127*y(m+x/3*2)+128).toString(16),
	r.fill(),
	a[0]=a[1],
	a[1]={x:n,y:o}
	}
function i(e){return l=e+(2*p()-1.1)*u,l>s||l<0?i(e):l}
var o=document.getElementsByTagName("script"),c=o[o.length-1];
config={z:e(c,"zIndex",-1),a:e(c,"alpha",.6),s:e(c,"size",100)};
var a,l,d=document.createElement("canvas"),
r=d.getContext("2d"),
g=window.devicePixelRatio||1,h=window.innerWidth,
s=window.innerHeight,
u=config.s,f=Math,m=0,x=2*f.PI,y=f.cos,p=f.random;
d.width=h*g,d.height=s*g,r.scale(g,g),
r.globalAlpha=config.a,d.style.cssText="position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",
document.getElementsByTagName("body")[0].appendChild(d),
document.onclick=t,document.ontouchstart=t,t()}();
//** 鼠标聚焦 **//
!function(){
function n(n,e,t){return n.getAttribute(e)||t}
function e(n){return document.getElementsByTagName(n)}
function t(){
	var t=e("script"),o=t.length,i=t[o-1];
	return{
		l:o,z:n(i,"zIndex",-1),
		o:n(i,"opacity",.5),
		c:n(i,"color","0,0,0"),
		n:n(i,"count",99)
		}
	}
function o(){
	a=m.width=window.innerWidth||
		document.documentElement.clientWidth||
		document.body.clientWidth,c=m.height=window.innerHeight||
		document.documentElement.clientHeight||
		document.body.clientHeight
		}
function i(){
	r.clearRect(0,0,a,c);
	var n,e,t,o,m,l;s.forEach(function(i,x){
		for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,
			r.fillRect(i.x-.5,i.y-.5,1,1),
			e=x+1;e<u.length;e++)
			n=u[e],null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),
			t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,
			r.strokeStyle="rgba("+d.c+","+(t+.2)+")",
			r.moveTo(i.x,i.y),
			r.lineTo(n.x,n.y),
			r.stroke()))}),x(i)
			}
		var a,c,u,m=document.createElement("canvas"),
			d=t(),l="c_n"+d.l,r=m.getContext("2d"),
			x=window.requestAnimationFrame||
				window.webkitRequestAnimationFrame||
				window.mozRequestAnimationFrame||
				window.oRequestAnimationFrame||
				window.msRequestAnimationFrame||
		function(n){window.setTimeout(n,1e3/45)},
			w=Math.random,y={x:null,y:null,max:2e4};
			m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),
			o(),
			window.onresize=o,
			window.onmousemove=function(n){n=n||window.event,y.x=n.clientX,y.y=n.clientY},
			window.onmouseout=function(){y.x=null,y.y=null};
			for(var s=[],f=0;d.n>f;f++){
				var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;
				s.push({x:h,y:g,xa:v,ya:p,max:6e3})
				}
			u=s.concat([y]),setTimeout(function(){i()},100)
}();
