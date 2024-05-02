const names= ["Antony", "joseph", "anu"];
const person={
    "name": "Antony",
    "age" : "29",
    "place": "kuriachira ",
    "isEmployed": true,
    "hobbies": ["gaming","cooking","videography"]
}
const people=[{
    "name": "Antony",
    "age" : "29",
    "place": "kuriachira",
    "isEmployed": true
},
{
    "name": "Hisham",
    "age" : "31",
    "place": "pangu",
    "isEmployed": false
},
{
    "name": "Thala",
    "age" : "30",
    "place": "Mundoor",
    "isEmployed": true

},
{
    "name": "Vista",
    "age" : "29",
    "place": "Kodussery",
    "isEmployed": true
}]
const jsonstring= JSON.stringify(names);
console.log(jsonstring);
console.log(person);
const jsonperson=JSON.stringify(person);
console.log(jsonperson);
const jsonpeople=JSON.stringify(people);
console.log(people);
console.log(jsonpeople);