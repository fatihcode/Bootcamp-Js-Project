// 1. BÖLÜM
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

console.warn("Her öğeyi aşağıdaki gibi bir diziyle değiştirmek için country dizisini kullanın [ ['Arnavutluk', 'ALB', 7], ['Bolivya', 'BOL', 7], …… ]")


function short(arr) {
  let arrOut = []
  for (let i = 0; i < arr.length; i++) {
    let arrIn = []

    arrIn.push(arr[i])
    arrIn.push(arr[i].substring(0, 3).toUpperCase())
    arrIn.push(arr[i].length)
    arrOut.push(arrIn)
  }
  return arrOut
}

console.log(short(countries))



console.warn("Bir dizedeki her çift sayıdan sonra “-“ üreten bir komut dosyası yazın.")

// 2. BÖLÜM Add "-" after every even number
const numbers = "315469781318158";

let numArr = numbers.split("")

function even(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {

      arr[i] = arr[i] + "-"
    }
  }
  return numArr.join("")
}

console.log(even(numArr))



// let numEven = numArr.filter(item => item % 2 == 0)

// console.log(numEven)

// let numEven2 = numEven.map(item => item+"-")

// console.log(numEven2)



console.warn("Çıktıya tek sayıları veren bir fonksiyon yazın. Bundan sonra, tüm sayıları “25” e bölün.")
// 3. BÖLÜM
let arr = [5, 24, 122, 625, 3125, 15625];

console.log(arr.filter(item => item % 2 == 1)) //Tek Sayıların gösterilmesi

console.log(arr.map(item => item / 25)) //Tüm sayıların 25'e bölünmesi