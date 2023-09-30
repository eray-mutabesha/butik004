
const shoesdiv=document.getElementById("image_shoes");
let images=[];
images=["images/jordan4r.webp","images/jordna4.webp"];
let i=0;
function shoes(){
document.shoes.src=images[i];
if(i<images.length -1){
    i++;
}
else{
    i=0;
}
setTimeout("shoes()",2000);
}
window.onload=shoes();

const menu=document.querySelector(".menu");
const icon=document.getElementById("icon");
icon.addEventListener("click",()=>{
   menu.classList.toggle("menu_deroulant");
   
})

