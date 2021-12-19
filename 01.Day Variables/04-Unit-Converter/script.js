//////// KELVIN /////////

const kelvin=293;

console.log(kelvin);


//////// KELVIN > CELCIUS /////////

let celcius=kelvin-273;

console.log(celcius);


//////// CELCIUS > FAHRENHEİT /////////

let fahrenheit=celcius*(9/5)+32;

console.log(fahrenheit);

console.log(celcius+" santigrat derece "+fahrenheit+" Fahrenheit Derecedir.")

console.log("Yuvarlanmış Değer "+Math.round(fahrenheit));


//////// KELVIN > FAHRENHEİT /////////

let yeniKelvin=0;

let yeniFahrenheit=(yeniKelvin-273)*(9/5)+32;

console.log(yeniKelvin+" Kelvin " +Math.floor(yeniFahrenheit)+" Fahrenheit Derecedir");



//////// CELCIUS > NEWTON /////////

let newton=celcius+(33/100);

console.log(`Sıcaklık ${Math.floor(newton)} Newton Derece.`);











// let newton = Math.round(celsius * (33 / 100));

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, which is equivalent to ${newton} degrees Newton.`);

// son consol log yazilim sekli interpolation 
// diye tarif etdigimiz syntax sekli
