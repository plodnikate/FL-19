/*eslint no-magic-numbers: */
class Toy {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    getToyInfo() {
        return `The toy name is ${this.name}. It costs ${this.price} dollars.`
    }
}

class WoodenToy extends Toy{
  constructor(name, price){
      super(name, price)
          this.material = 'wooden';
  }
  getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material}.`
  }
}

class TeddyToy extends Toy{
  constructor(name, price){
      super(name, price)
          this.material = 'teddy';
  }
  getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material}.`
  }
}

class PlasticToy extends Toy{
  constructor(name, price){
      super(name, price)
          this.material = 'plastic';
  }
  getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material}.`
  }
}

class Factory {
  constructor(){
      this.allToys = new Map();
  }
  
  
produce(name, price, type){
    let toy = this.allToys.get(name);
        switch(type) {
            case 'teddy': 
                if (!toy) {
                    toy = new TeddyToy(name, price) 
                    this.allToys.set(name, toy)
                    }
                    return toy;
            case 'wooden': 
            if(typeof factory.instance === 'object'){
                toy = factory.instance;
            }else if(!toy) {
                    toy = new WoodenToy(name, price) 
                    this.allToys.set(name, toy)
                    factory.instance = toy;
            }
                return toy;
            default: 
            if (!toy) {
                toy = new PlasticToy(name, price) 
                this.allToys.set(name, toy)
                }
                return toy;
         }
    }
}



let factory = new Factory();

const teddyBear = factory.produce('Bear', 200, 'teddy')
console.log(teddyBear.getToyInfo());
console.log(teddyBear.getMaterialInfo());

const plasticCar = factory.produce('Car', 100)
console.log(plasticCar.getToyInfo());
console.log(plasticCar.getMaterialInfo());

const plasticBear = factory.produce('Bear', 100, 'bear')
console.log(plasticBear.getToyInfo());
console.log(plasticBear.getMaterialInfo());

const woodenHorse = factory.produce('Bear1', 100, 'wooden')
console.log(woodenHorse.getToyInfo());
console.log(woodenHorse.getMaterialInfo());

const woodenBear = factory.produce('Horse', 100, 'wooden')
console.log(woodenBear.getToyInfo());
console.log(woodenBear.getMaterialInfo());

class Car{
    constructor(name, host) {
        this.name = name;
        this.host = host;
      }
      carSound(){
        return 'Usual car sound.'
      }
}
class AmbulanceCar{
    constructor(car) {
        this.car = car;
    }
    ambulanceSound(){
        return 'Siren sound.'
    }
}

const mercedes = new Car('Mercedes', 'Doctor');
const ambulanceMercedes = new AmbulanceCar(mercedes);
console.log(ambulanceMercedes.ambulanceSound());

const toyota = new Car('Toyota', 'Doctor2');
const ambulanceToyota = new AmbulanceCar(toyota);
console.log(ambulanceToyota.ambulanceSound());







