const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']

console.log(countries)



console.warn("//step-1--------------------------------------")
// 1. Extract all the countries contain the word 'land' from the countries array and print it as array
// 1. Ülkeler dizisinden 'land' kelimesini içeren tüm ülkeleri ayıklayın ve dizi olarak yazdırın*******


// step-1
function countryFind1(arr) {

  return arr.filter(arr => arr.includes("land"));
}

console.log(countryFind1(countries))



console.warn("//step-2--------------------------------------")
// 2. Find the country containing the hightest number of characters in the countries array
// 2. Ülkeler dizisindeki en yüksek sayıda karakteri içeren ülkeyi bulun


// step-2
function longestCountry(arr) {

  return arr.filter(arr => arr.length > 6)
}

console.log(longestCountry(countries))



console.warn("//step-3--------------------------------------")
// 3. Sort the countries by length of characters in the countries array
// 3. Ülkeler dizisindeki karakterlerin uzunluğuna göre ülkeleri sıralayın


// step-3

function countrySort(arr) {

  step3 = arr.slice()

  return step3.sort((a, b) => a.length - b.length);

}

console.log(countrySort(countries))



console.warn("//step-4--------------------------------------")
// 4. Extract all the countries containing only four characters from the countries array and print it as array
// 4. Ülkeler dizisinden sadece dört karakter içeren tüm ülkeleri çıkartın ve dizi olarak yazdırın*****


// step-4

function countryFind4(arr) {

  return arr.filter(arr => arr.length === 4)
}

console.log(countryFind4(countries))



console.warn("//step-5--------------------------------------")
// 5. Extract all the countries containing two or more words from the countries array and print it as array
// 5. Ülkeler dizisinden iki veya daha fazla kelime içeren tüm ülkeleri çıkartın ve dizi olarak yazdırın*********


// step-5

function countryFind5(arr) {

  return arr.filter(arr => arr.includes(" "))
}

console.log(countryFind5(countries))



console.warn("//step-6--------------------------------------")
// 6. Reverse the countries array and capitalize each country and stored it as an array.
// 6. Ülkeler dizisini ters çevirin ve her ülkeyi büyük harf yapın ve bir dizi olarak saklayın.*********


//step-6

function countryFind6(arr) {

  return arr.map(arr => arr.toUpperCase()).reverse()
}

console.log(countryFind6(countries))



console.warn("//step-7--------------------------------------")
// 7. Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.
// 7. Ülkeler dizisinden 'land' kelimesini içermeyen tüm ülkeleri çıkartın, ülkenin sonuna “land” ekleyin ve dizi olarak yazdırın.*******


// step-7

function countryFind7(arr) {

  return arr.filter(arr => !arr.includes("land")).map(arr => arr + "land")

}

console.log(countryFind7(countries))