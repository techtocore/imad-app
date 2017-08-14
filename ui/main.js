console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML='new text updated';

var img=document.getElementById('madi');
img.onclick= function(){
    img.style.marginleft='100px';
}