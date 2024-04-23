const agetext=document.getElementById("agetext");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let age;
submit.onclick=function(){
    age=agetext.value;
    age=Number(age);
    if(age>=100){
        result.textContent=(`You are too old to enter`);
    }
    else if(age==0){
        result.textContent=(`You can't enter you just born`);
    }
    else if(age>=18){
        result.textContent=(`You are allowed to enter`);
    }
    else if(age<0){
        result.textContent=(`You can't be less than 0`);
    }
    else{
        result.textContent=(`You can't enter the site`);
    }
}
