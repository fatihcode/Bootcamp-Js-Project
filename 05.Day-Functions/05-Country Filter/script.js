const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']

console.log(countries)



console.warn("// Step_1 Extract all the countries contain the word 'land' from the countries array and print it as array")
// 1. Ülkeler dizisinden 'land' kelimesini içeren tüm ülkeleri ayıklayın ve dizi olarak yazdırın*******


function countryFind1(arr) {

  return arr.filter(arr => arr.includes("land"));
}

console.log(countryFind1(countries))


//---------------------------------------------------------


console.warn("// Step_2 Find the country containing the hightest number of characters in the countries array")
// 2. Ülkeler dizisindeki en yüksek sayıda karakteri içeren ülkeyi bulun



function longestCountry(arr) {

  let x = arr.map(arr => arr.length) // Bütütn elamanlaru uzunluğunu arraya aktar

  let y = Math.max(...x) //Ne uzun elemanı seç

  return arr.find(arr => arr.length === y) //En uzun elelmanı bul
}

console.log(longestCountry(countries))



//---------------------------------------------------------


console.warn("// Step_3 Sort the countries by length of characters in the countries array")
// 3. Ülkeler dizisindeki karakterlerin uzunluğuna göre ülkeleri sıralayın



function countrySort(arr) {

  newArr = arr.slice()

  return newArr.sort((a, b) => a.length - b.length);
}

console.log(countrySort(countries))


//---------------------------------------------------------


console.warn("// Step_4 Extract all the countries containing only four characters from the countries array and print it as array")
// 4. Ülkeler dizisinden sadece dört karakter içeren tüm ülkeleri çıkartın ve dizi olarak yazdırın*****



function countryFind4(arr) {

  return arr.filter(arr => arr.length === 4)
}

console.log(countryFind4(countries))


//---------------------------------------------------------


console.warn("// Step_5 Extract all the countries containing two or more words from the countries array and print it as array")
// 5. Ülkeler dizisinden iki veya daha fazla kelime içeren tüm ülkeleri çıkartın ve dizi olarak yazdırın*********



function countryFind5(arr) {

  return arr.filter(arr => arr.includes(" "))
}

console.log(countryFind5(countries))


//---------------------------------------------------------


console.warn("// Step_6 Reverse the countries array and capitalize each country and stored it as an array.")
// 6. Ülkeler dizisini ters çevirin ve her ülkeyi büyük harf yapın ve bir dizi olarak saklayın.*********



function countryFind6(arr) {

  return arr.map(arr => arr.toUpperCase()).reverse()
}

console.log(countryFind6(countries))


//---------------------------------------------------------


console.warn("// Step_7 Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.")
// 7. Ülkeler dizisinden 'land' kelimesini içermeyen tüm ülkeleri çıkartın, ülkenin sonuna “land” ekleyin ve dizi olarak yazdırın.*******



function countryFind7(arr) {

  return arr.filter(arr => !arr.includes("land")).map(arr => arr + "land")
}

console.log(countryFind7(countries))