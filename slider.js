let slide = document.getElementsByClassName('slide');
let dot = document.getElementsByClassName('dot');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let n=0;

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    none()
    removeAvtive()
    if(n>2)n=0;
    slide[n].style.display='block'
    dot[n].classList.add('active')
} )
prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    none()
    removeAvtive()
    if(n<0)n=2;
    slide[n].style.display='block'
    dot[n].classList.add('active')
} )
function none(){
    for(let i=0;i<slide.length;i++){
        slide[i].style.display='none'
    }
}
function removeAvtive(){
    for(let i=0;i<dot.length;i++){
        dot[i].classList.remove('active')
    }
}
setInterval(() => {
    n++;
    none()
    removeAvtive()
    if(n>2)n=0;
    slide[n].style.display='block'
    dot[n].classList.add('active')
}, 3000);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 650) {
    alert('dff')
  }
  else{
    prev.style.color = "blue";
  }
  };
