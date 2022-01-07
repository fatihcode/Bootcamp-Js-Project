console.log("Evden çık");
console.log("sola dön");
console.log("3 içki al");
console.log("eve dön");


function calcBottles (money, price) {
    return Math.floor(money/price)
}

// console.log(calcBottles(200,3))



function calcChange (money, price) {
    return money%price
}

// console.log(calcChange(200,3))



function getDrink (money, bottle) {

    return `${money} liran varsa ${calcBottles(money,bottle)} şişe alabilirsin. Para üstü ${calcChange (money,bottle)} liradır.`
    
}

console.log(getDrink(500, 11))