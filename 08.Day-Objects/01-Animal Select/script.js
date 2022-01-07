let animal = {
    species: "Dog",
    name: "Karabaş",
    legs: 4,
    color: "white",
    age: 5,
    bark() {
        return "woof woof"
    },
    calcAge() {
        if (this.age >= 2) {
            return this.humanAge = (2 * 10.5) + (this.age - 2) * 4
        } else {
            return this.humanAge = (this.age * 10.5)
        }
    },
    getAnimalInfo() {
        return `Cinsi: ${this.breed} Adı: ${this.name} Yaşı: ${this.age} İnsan Yaşı: ${this.calcAge()} `
    },
}


console.log(animal)
console.log(animal.bark())

animal.breed = "Golden"

console.log(animal.getAnimalInfo())

console.log(animal.calcAge())

console.log(animal.humanAge)

console.log(animal)