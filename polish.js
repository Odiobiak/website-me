(function(){
  if(!window.matchMedia||!matchMedia('(pointer:fine)').matches)return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var dot=document.createElement('div');dot.className='cur-dot';
  var ring=document.createElement('div');ring.className='cur-ring';
  document.body.appendChild(dot);document.body.appendChild(ring);
  document.documentElement.classList.add('has-cursor');
  var mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.transform='translate('+mx+'px,'+my+'px)';},{passive:true});
  (function loop(){rx+=(mx-rx)*.2;ry+=(my-ry)*.2;ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(loop);})();
  addEventListener('mouseover',function(e){if(e.target.closest('a,button,.fchip,.witem,.icard,.skill'))ring.classList.add('big');});
  addEventListener('mouseout',function(e){if(e.target.closest('a,button,.fchip,.witem,.icard,.skill'))ring.classList.remove('big');});
  // magnetic buttons
  document.querySelectorAll('.btn,.nav-pill').forEach(function(el){
    el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();var x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2);el.style.transform='translate('+(x*.22)+'px,'+(y*.32)+'px)';});
    el.addEventListener('mouseleave',function(){el.style.transform='';});
  });
})();
