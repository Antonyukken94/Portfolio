const newH1=document.createElement("h1");
newH1.textContent="I love java";
newH1.id="myH1";
newH1.style.color="red";
newH1.style.textAlign="center";

document.getElementById("box2").append(newH1);
document.body.insertBefore(newH1,box3);


const coconut=document.createElement("li");
coconut.textContent="Coconut";
coconut.id="coconut";
coconut.style.color="green";
coconut.style.textAlign="center";
document.getElementById("box1").prepend(coconut);
const listItems=document.querySelectorAll("#box1 li");
document.getElementById("box1").insertBefore(coconut,listItems[2]);

