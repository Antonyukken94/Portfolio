
function display({firstName,lastName,age,job="Unemployed"}){
console.log(`name:${firstName} ${lastName}`);
console.log(`age:${age}`);
console.log(`job:${job}`);
}
const person1={
    firstName: "Roy",
    lastName: "Cheriyan",
    age:30,
    job:"developer",
}
const person2={
    firstName: "Antony",
    lastName: "Joseph",
    age:29,
}
display(person2);