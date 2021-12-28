const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, , "75"];

console.log(arrCase1);
console.log(arrCase2);


//---------------------------------------


console.warn("İlk önce, dizinin dizin numarasına göre her bir öğenin veri türlerini inceleyin. Sonuçların türünü konsollayın.")

function type(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(typeof (arr[i]))
    }
    return newArr
}

console.log(type(arrCase1))
console.log(type(arrCase2));


//---------------------------------------


console.warn("HandleFilter işlevinizin içinde, yerleşik javascript filter() yöntemini kullanmadan sayı olmayan tüm veri türlerini kaldırın. Ve sadece sayıları döndür.")


function handleFilter(arr) {
    let newArr1 = []

    for (let i = 0; i < arr.length; i++) {

        if (typeof (arr[i]) !== 'number') {

            newArr1.push(arr[i])
        }
    }
    return newArr1
}

console.log(handleFilter(arrCase1))
console.log(handleFilter(arrCase2))


//---------------------------------------


console.warn("Şimdi, bir typeNumber işlevi oluşturun ve filter() yöntemini kullanarak yalnızca verilen dizilerden sayıları döndürün.")


function typeNumber(arr) {

    return arr.filter(a => typeof (a) == 'number')
}

console.log(typeNumber(arrCase1));
console.log(typeNumber(arrCase2))


//---------------------------------------


console.warn("Bir handleSort işlevi oluşturun ve artan ve azalan düzende bir dizi sıralanmış sayı döndürün. Sıralama için yukarıdaki herhangi bir fonksiyonun çıktısını kullanabilirsiniz.")


function sort(arr) {

    return arr.sort((a, b) => a - b)
}

console.log(sort(typeNumber(arrCase1)));
console.log(sort(typeNumber(arrCase2)));