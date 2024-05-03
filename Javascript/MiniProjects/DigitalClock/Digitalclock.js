function updateClock(){
const now=new Date();
let hours=now.getHours().toString().padStart(2,0);
const twelve=hours>=12?"PM":"AM";
hours=hours%12||12;
const mins=now.getMinutes().toString().padStart(2,0);
const secs=now.getSeconds().toString().padStart(2,0);
const timestring=`${hours}:${mins}:${secs} ${twelve}`;
document.getElementById("clock").textContent=timestring;
}
updateClock();
setInterval(updateClock,1000);
