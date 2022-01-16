const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']

console.log(countries)


//---------------------------------------------------------
console.warn("// Step_1 Extract all the countries contain the word 'land' from the countries array and print it as array")



function countryFind1(arr) {

  return arr.filter(arr => arr.includes("land"));
}

console.log(countryFind1(countries))



/*
function countryFind1(arr) {

  let landCountry = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes("land")) {

      landCountry.push(arr[i])
    }
  }
  return landCountry;
}

console.log(countryFind1(countries))
*/


//---------------------------------------------------------
console.warn("// Step_2 Find the country containing the hightest number of characters in the countries array")



function longestCountry(arr) {

  let x = arr.map(arr => arr.length) // Bütütn elamanlaru uzunluğunu arraya aktar

  let y = Math.max(...x) //Ne uzun elemanı seç

  return arr.find(arr => arr.length === y) //En uzun elelmanı bul
}

console.log(longestCountry(countries))



/*
function longestCountry(arr) {

  let lgth = 0;
  let longest;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > lgth) {

      lgth = arr[i].length;
      longest = arr[i];

    }
  }
  return longest;
}

console.log(longestCountry(countries))
*/



//---------------------------------------------------------
console.warn("// Step_3 Sort the countries by length of characters in the countries array")



function countrySort(arr) {

  newArr = arr.slice()

  return newArr.sort((a, b) => a.length - b.length);
}

console.log(countrySort(countries))






//---------------------------------------------------------
console.warn("// Step_4 Extract all the countries containing only four characters from the countries array and print it as array")



function countryFind4(arr) {

  return arr.filter(arr => arr.length === 4)
}

console.log(countryFind4(countries))


/*
function countryFind4(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].length <= 4) {
      step4 = arr[i]
    }
  }
  return step4;
}

console.log(countryFind4(countries))
*/



//---------------------------------------------------------
console.warn("// Step_5 Extract all the countries containing two or more words from the countries array and print it as array")



function countryFind5(arr) {

  return arr.filter(arr => arr.includes(" "))
}

console.log(countryFind5(countries))



/*
function countryFind5(arr) {

  let step5 = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes(" ")) {

      step5.push(arr[i])
    }
  }
  return step5;
}

console.log(countryFind5(countries))
*/



//---------------------------------------------------------
console.warn("// Step_6 Reverse the countries array and capitalize each country and stored it as an array.")



function countryFind6(arr) {

  return arr.map(arr => arr.toUpperCase()).reverse()
}

console.log(countryFind6(countries))



/*
function countryFind6(arr) {

  let newArr = []
  for (let i = 0; i < arr.length; i++) {

    newArr.push(arr[i].toUpperCase())
  }

  let step6 = newArr.slice().reverse()

  return step6
}

console.log(countryFind6(countries))
*/



//---------------------------------------------------------
console.warn("// Step_7 Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.")



function countryFind7(arr) {

  return arr.filter(arr => !arr.includes("land")).map(arr => arr + "land")
}

console.log(countryFind7(countries))


/*
function countryFind7(arr) {

  let step7 = []

  for (let i = 0; i < arr.length; i++) {

    if (!arr[i].includes("land")) {

      let str = arr[i] + "land"
      step7.push(str)
    }
  }
  return step7;
}

console.log(countryFind7(countries))
*/