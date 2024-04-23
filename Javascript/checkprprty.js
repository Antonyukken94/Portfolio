const Subs=document.getElementById("Subs");
const visabtn=document.getElementById("visabtn");
const masterbtn=document.getElementById("masterbtn");
const paypalbtn=document.getElementById("paypalbtn");
const present=document.getElementById("present");
const checksub=document.getElementById("checksub");
const checkcard=document.getElementById("checkcard");
    present.onclick=function(){
if(Subs.checked){
       checksub.textContent=`You are subscribed`;
    }
       else{
        checksub.textContent=`You are not subscribed`;
       }
       if(visabtn.checked){
        checkcard.textContent=`You selected visa option`;
       }
       else if(masterbtn.checked){
       checkcard.textContent=`You selected master card`;
       }
       else if(paypalbtn.checked){
       checkcard.textContent=`You selected paypal`;
       }
       else{
        checkcard.textContent=`You haven't selected any payment options`;
       }


    }