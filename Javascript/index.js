const countzero=document.getElementById("countzero");
const decrease=document.getElementById("decrease");
const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
let count=0;
increase.onclick=function(){
    count++;
    countzero.textContent=count;
}
decrease.onclick=function(){
    count--;
    countzero.textContent=count;
}
reset.onclick=function(){
    count=0;
    countzero.textContent=count;
}