function createCounter(){


 let count=0;
function increment(){
    count++;
    console.log(`The count is increased to ${count}`);
}
function getCount(){
    return count;
}
return{increment,getCount};
}
const counter=createCounter();
counter.increment();
counter.increment();counter.increment();
counter.increment();
console.log(`The current count is:${counter.getCount()}`);




