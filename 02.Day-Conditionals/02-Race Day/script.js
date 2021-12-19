//Random yaş atama
let age= Math.floor(Math.random() * 30);

//Erken ya da geç olacağına karar veren yazı tura
let time= Math.floor(Math.random() * 2)

//1 gelirse erken 0 gelirse geç yarışır
time==1 ? time=true : time=false;


// time==1 ? console.log("Yarışınız 9.30'da"): console.log("Yarışınız 11.00'da");
// console.log(`Yaşınız ${age}`)


if (age>18 && time === true) {
    console.log(`Yarışınız 9.30'da Numaranız ${Math.floor((Math.random()+1)*1000)}`)

} else if(age>18 && time === false) {
    console.log(`Yarışınız 11.00'da Numaranız ${Math.floor(Math.random()*1000)}`)

} else if (age === 18) {
    console.log(`Yönetici ile görüşün`)

} else {
    console.log(`Yarışınız 12.30'da Numaranız ${Math.floor(Math.random()*1000)}`)

}


