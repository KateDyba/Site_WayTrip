gsap.set('#container', {perspective:1000}); //lower number exagerates the 'spheriness'

let zoom = 1,
    stageH = gsap.getProperty('#container', 'height');

const n = 32, //number of divs
      c = document.getElementById('container');

for (let i=0; i<n; i++){  
  let b = document.createElement('div'); 
  b.className="container"; 
  b.classList.add('box');
  c.appendChild(b);
  
  gsap.set(b, {
    left:'50%',
  	top:'50%',
    xPercent:-50,
    yPercent:-50,
    color:'#fff',
    z:1000,
  	width:213,
	  height:4700,
    scaleX:-1, //flip horizontally
    rotationY:i/n*-360+90,
    transformOrigin:String("50% 50% -1075%"), //adjust 3rd percentage to remove space between divs
    backgroundImage:'url(images/North_America/panoram_Canada.jpg)',
    backgroundPosition:i*-213+'px 0px' //offset should match width
  });  
}

window.onresize = (e)=>{ 
  stageH = gsap.getProperty('#container', 'height');
  gsap.to('.box', {y:0})
}

c.onmousemove = (e)=>{
  gsap.to('.box', {duration:0.6, rotationY:(i)=>-89+i/n*-360+180*(e.clientX/window.innerWidth), y:(Math.abs(1000-stageH)/2)-(Math.abs(1000-stageH))*(e.clientY/window.innerHeight) });
}
