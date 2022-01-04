const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

for (let i = 0; i < companies.length; i++) {

  console.log(companies[i])
}


console.warn("First of all print out all, company objects on the console. Use “for loop”.")
//---------------------------------------

companies.forEach(element => {
  console.log(element)
});

companies.push({
  name: "Company Ten",
  category: "marketing",
  start: 1981,
  end: 1992
})


console.log(companies)

console.warn("")
//---------------------------------------


let filter1 = companies.filter(item => item.category === "Retail")

console.log(filter1)


let filter2 = companies.filter(item => item.start >= 1980 && item.start <= 1990)

console.log(filter2)


let filter3 = companies.filter(item => item.end - item.start >= 10)

console.log(filter3)


console.warn("")
//---------------------------------------


let companyName = companies.map(item => item.name)

console.log(companyName)


let companySum = companies.map(item => item.name + " " + item.start + " " + item.end)

console.log(companySum)



console.warn("")
//---------------------------------------

companies.sort((a, b) => a.start - b.start)

console.log(companies)


console.warn("")
//---------------------------------------

function total(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    sum += (arr[i].end - arr[i].start)

  }
  return sum;
}

console.log(total(companies))


const totatYears = companies.reduce((total, a) => total + (a.end - a.start), 0)

console.log(totatYears)

