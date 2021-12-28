const streetNames = ["Carnaby Street", "Abchurch Lane", "Adam's Court", "Piccadilly Street", "Addle Hill", "Addle Lane", "Alban Highwalk", "Brick Lane"]


// main solution

// function filterStreet(arr) {
//     // let new1 = []

//     // for (let i = 0; i < arr.length; i++) {

//     //     if (arr[i].includes("Lane")) {

//     //         new1.push(arr[i])
//     //     }
//     // }

//     // return new1;

// }


function filterStreet(arr) {

    return arr.filter(item => item.includes("Lane"))
}


console.log(filterStreet(streetNames));