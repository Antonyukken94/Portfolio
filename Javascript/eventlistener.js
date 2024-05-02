const myBox=document.getElementById("myBox");
const myClick=document.getElementById("myClick");


myClick.addEventListener("click",event=>{
    myBox.style.backgroundColor="red";
    myBox.textContent="Fuck you🤪👆";
});
   
myBox.addEventListener("mouseover",event =>{ 
   myClick.style.backgroundColor="lightblue";
    event.target.textContent="Aruthu molu😰";
    myClick.textContent="Eda mone🥸";
    

});
myClick.addEventListener("mouseout",event =>{ 
myBox.style.backgroundColor="lightGreen";
    myBox.textContent="Click me 🤩";
});