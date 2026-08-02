const target=new Date(new Date().getFullYear(),7,12,0,0,0);
const cd=document.getElementById('countdown');
const content=document.getElementById('content');
const timer=setInterval(()=>{
 let now=new Date(),d=target-now;
 if(d<=0){
  clearInterval(timer);
  cd.style.display='none';
  content.style.display='block';
  confetti({particleCount:250,spread:120});
 }else{
  let days=Math.floor(d/86400000);
  let hrs=Math.floor(d%86400000/3600000);
  let mins=Math.floor(d%3600000/60000);
  let secs=Math.floor(d%60000/1000);
  cd.innerHTML=`${days}d ${hrs}h ${mins}m ${secs}s`;
 }
},1000);
document.getElementById('yes').onclick=()=>{
 confetti({particleCount:400,spread:180});
 document.body.innerHTML='<div style="display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column;color:white;font-family:Arial"><h1>💍 She Said YES! ❤️</h1><h2>Forever Begins Today</h2><h3>Arun ❤️ Chandu</h3></div>';
};
const no=document.getElementById('no');
no.onmouseover=()=>{
 no.style.position='absolute';
 no.style.left=Math.random()*80+'vw';
 no.style.top=Math.random()*80+'vh';
};
