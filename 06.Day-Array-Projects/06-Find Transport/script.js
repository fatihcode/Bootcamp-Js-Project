const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]



function getTransport(arr, val) {

  let = newArr = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes(val)) {
      newArr.push(arr[i][0])
    }
  }
  return `${val} aracı ile ${newArr}'e gidebilirsiniz`
}


console.log(getTransport(londonLocations, "bus"))