const degree=document.getElementById("degree");
const Fahrenheit=document.getElementById("Fahrenheit");
const Celsius=document.getElementById("Celsius");

const result=document.getElementById("result");
let temp;
function convert(){
if(Fahrenheit.checked){
    temp=Number(degree.value);
    temp=temp*9/5+32;
    result.textContent=temp+"F";
}
    else if(Celsius.checked){
        temp=Number(degree.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+"C";

    }
    else{
        result.textContent="Select a unit";

    }

}


