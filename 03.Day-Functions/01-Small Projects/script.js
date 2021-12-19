
function calculateBMI(mass, height) {
    return Math.floor(mass/(height*height))
}

let john=calculateBMI(70, 1.8);
let mark=calculateBMI(80, 1.7);

console.log(`John'nun BMI ${john}`);
console.log(`Mark'ın BMI ${mark}`);




function durum(name, bmi) {

if (bmi<18.5){
    console.log(`${name}'ın Kilosu Zayıf`)

} else if(bmi>=18.5 && bmi<24.9){
    console.log(`${name}'ın Kilosu Normal`)

} else if(bmi>=25 && bmi<29.9){
    console.log(`${name}'ın Kilosu Fazla`)

} else {
    console.log(`${name} Obez`)
}
}

durum("Mark", mark);