//////////// DEĞİŞKENLER //////////////

let massMark=80;
let heightMark=1.90;

let massJohn=75;
let heightJohn=1.70;


//////////// YUVARLAMA //////////////

let BMIMark= massMark/(heightMark*heightMark);
let BMIJohn= massJohn/(heightJohn*heightJohn);

console.log("Vücut Kitle Endeksi",BMIJohn, BMIMark);

console.log("BMI Aşağı Yuvarlama", Math.floor(BMIJohn), Math.floor(BMIMark));

console.log("BMI Yuvarlama", Math.round(BMIJohn), Math.round(BMIMark));

console.log("BMI 2 Haneli Gösterim", BMIJohn.toFixed(2), BMIMark.toFixed(2));


////////////// BÜYÜKTÜR-KÜÇÜKTÜR //////////////

console.log("John'un BMI büyüktür Mark", Boolean(BMIJohn>BMIMark));

console.log("Mark'ın BMI büyüktür John", Boolean(BMIMark>BMIJohn));


let markHigher=BMIJohn>BMIMark;

console.log(markHigher);


////////////// IF KULLANIMI //////////////

if (BMIJohn > BMIMark) { 
    console.log("John'un Kitle İndeksi Marktan Büyüktür"); 
    } else { 
         console.log("Mark'ın Kitle İndeksi Johndan Büyüktür");
     }



