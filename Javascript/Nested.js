class Anto{
    constructor(name,age,...address){
this.name=name;
this.age=age;
this.address=new Address(...address);

}
}
class Address{
    constructor(street,city,country){
   this.street=street;
   this.city=city;
   this.country=country; 
}
}
const person1=new Anto("Antony","29","Ukken house","Donbosco Road","Kuriachira");
console.log(person1.address);
