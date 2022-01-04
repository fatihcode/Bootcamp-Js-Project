const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const spec = ["+", ".", "*", "/", "$", "&", "%"]

//STEP-1

function crypto(num) {
    let arr = []
    let alphaArr = alpha.split(" ")
    let all = [...numeric, ...alphaArr, ...spec]

    for (let i = 0; i < num; i++) {

        let rand = Math.floor(Math.random() * all.length)

        if (typeof (all[rand]) === "number" && i !== num - 1) {

            arr.push(all[rand] + "-")

        } else {

            arr.push(all[rand])
        }
    }
    return arr.join("")
}

console.log(crypto(10))




//STEP 2
const special = "* $ & %"

let specArr = special.split(" ")
let newCryp = crypto(20).split("")



let cleanArr = newCryp.filter(item => item !== "*" && item !== "$"&& item !== "&"&& item !== "%")

console.log(cleanArr.join(""))






//STEP 3




//STEP 4
givenUnwanted = "3 , * , j , q , z"