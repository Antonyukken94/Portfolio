class Animal {
    constructor(name, age){
        this.name=name;
        this.age=age;

    }

}
class Rabbit extends Animal {
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed=runspeed;
    }

}
class Fish extends Animal {
    constructor(name, age, swimspeed){
        super();
        this.swimspeed=swimspeed;
    }


}
class Eagle extends Animal {
    constructor(name, age, flyspeed){
        super(); 
        this.flyspeed=flyspeed;
    }
  

}

const rabbit= new Rabbit("bunny", 2 ,30);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

