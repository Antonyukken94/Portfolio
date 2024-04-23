sum(displayPage,1005,10010);
function sum(callback,x,y){
    let result =x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("results").textContent=result;
}
