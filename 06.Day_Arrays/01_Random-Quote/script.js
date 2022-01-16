let quote1 = "'İstediğinin peşinden koşarken ne hale geldiğine dikkat et. -Jim Rohn'"

let quote2 = "'Sana ne olduğu değil, ona nasıl tepki verdiğin önemlidir. - Epiktetos'"

let quote3 = "'En iyi intikam büyük bir başarıdır. - Frank Sinatra'"

let quote4 = "'Yapmadığın şutların %100'ünü kaçırıyorsun. - Wayne Gretzy'"

let quote5 = "'Kızgınlık, zehir içip düşmanlarının ölmesini beklemek gibidir. - Nelson Mandela'"

let quote6 = "'Hayatı fazla ciddiye almayın. Canlı çıkmayacaksın. - Elbert Hubbard'"

let arr = [quote1, quote2, quote3, quote4, quote5, quote6]

arr.sort()

console.log(arr)

let day = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]



function generateQuote() {

    let rand = Math.floor(Math.random() * arr.length)

    // return params[rand]

    console.log(`Bugün günlerden ${day[rand]} bugünün sözü ${arr[rand]}`)
}

    // console.log(`Bugün günlerden ${generateQuote(day)} bugünün sözü ${generateQuote(arr)}`)


document.getElementById("btn").addEventListener("click", generateQuote);