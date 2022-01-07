let john = {
    fullName: "John Smith",
    mass: 82,
    height: 1.82,
    calcBMI: function bmi() {

        let result = this.mass / (this.height * this.height)
        this.bmi = result.toFixed(1)
        return result
    }
}

let mark = {
    fullName: "Mark Miller",
    mass: 92,
    height: 1.72,
    calcBMI: function bmi() {

        let result = this.mass / (this.height * this.height)
        this.bmi = result.toFixed(1)
        return result
    }
}

console.log(john.calcBMI())

console.log(mark.calcBMI())


if (john.calcBMI() > mark.calcBMI()) {

    console.log(`${john.fullName}'in BMI'si (${john.bmi}) ${mark.fullName}'inkinden (${mark.bmi}) daha yüksek!`)

} else {

    console.log(`${mark.fullName}'in BMI'si (${mark.bmi}) ${john.fullName}'inkinden (${john.bmi}) daha yüksek!`)
}