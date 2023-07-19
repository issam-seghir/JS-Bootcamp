class Car {
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run () {
        return `Car is running now`
    }
    stop () {
        return `Car is stopped`
    }
}


const carOne = new Car("Friary", "2023", "150000$");
const carTwo = new Car("Ford", "2020", "90000$");
const carThree = new Car("Audi", "2018", "120000$");

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
// Needed Output
// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
