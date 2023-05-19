const container=document.querySelector('.container');
const button=document.querySelector('#btn');
const allcorner=document.getElementById('all_corner');
const border_radius=document.getElementById('border_radius');
const allradius=document.getElementById('all_radius');
const border_size=document.getElementById('border_size');
const border_style=document.getElementById('border_style');
const codegenerator=document.getElementById('code_generate')
var all_radius=10;
var borderStyle="solid";
var borderSize=3;
var coding="Test";

function allBordersUpdate(){
    all_radius=border_radius.value;
    borderSize=border_size.value;
    allcorner.innerText=all_radius+"px";
    all.innerText=borderSize+"px";
    coding=`
        border-radius:${all_radius}px;
        border:${border_size}px ${border_style} red;
    `;
    codegenerator.value=coding;
    container.style.cssText=coding;
    
}
allcorner.addEventListener("mousemove",allBorderUpdate);
allcorner.addEventListener("change",allBordersUpdate);

allradius.addEventListener("mousemove",allBorderUpdate);
allradius.addEventListener("change",allBordersUpdate);

button.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert("Code Coppied");
});

allBordersUpdate();

border_style=addEventListener('change',function(){
    border_style=this.value;
    allBordersUpdate();
});