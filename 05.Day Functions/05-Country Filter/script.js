
const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']

console.log(countries)



console.warn("//step-1--------------------------------------")



// step-1
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



console.warn("//step-2--------------------------------------")



// step-2
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



console.warn("//step-3--------------------------------------")



// step-3

function countrySort(arr) {

  step3 = arr.slice()

  return step3.sort((a, b) => a.length - b.length);

}

console.log(countrySort(countries))



console.warn("//step-4--------------------------------------")



// step-4

function countryFind4(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].length <= 4) {
      step4 = arr[i]
    }
  }
  return step4;
}

console.log(countryFind4(countries))



console.warn("//step-5--------------------------------------")



// step-5

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



console.warn("//step-6--------------------------------------")



//step-6

function countryFind6(arr) {

  let newArr = []
  for (let i = 0; i < arr.length; i++) {

    newArr.push(arr[i].toUpperCase())
  }

  let step6 = newArr.slice().reverse()

  return step6
}

console.log(countryFind6(countries))



console.warn("//step-7--------------------------------------")



// step-7

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