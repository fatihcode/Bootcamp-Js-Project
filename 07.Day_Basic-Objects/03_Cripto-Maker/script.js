/*
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


let newCryp = crypto(20).split("")


let cleanArr = newCryp.filter(item => item !== "*" && item !== "$" && item !== "&" && item !== "%")

console.log(cleanArr.join(""))




//STEP 3




//STEP 4
givenUnwanted = "3 , * , j , q , z"

*/


const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const alpha1 = alpha.split(" ")

const special = "* $ & %"
const special1 = special.split(" ");


const newArray = [...numeric, ...alpha1, ...special1];


const givenUnwanted = "-*/"
const arrayGiven = givenUnwanted.split("");

let sizepaswort = 10


function passwort(arr, size) {

    let newArray = [];

    for (let i = 0; i < size; i++) {

        let sonuc = arr[Math.floor(Math.random() * arr.length)]

        if (sonuc.toFixed && (i < size - 1)) {

            newArray += (sonuc + "-")

        } else {

            newArray += (sonuc)
        }
    }
    return newArray
};

function kimlik(par) {

    let bos = [];

    for (let i = 0; i < newArray.length; i++) {

        for (let k = 0; k < par.length; k++) {

            if (newArray[i] == par[k]) {

                newArray.splice(i, 1)
            }
        };
        bos.push(newArray[i])
    }
    return bos;
};
console.log(passwort(kimlik(arrayGiven), sizepaswort));