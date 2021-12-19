//Random puan atama

let puan = Math.floor(Math.random() * 100);

console.log(puan);



//Puana göre not verme

switch (true) {
    case puan >= 80 && puan <= 100:
        console.log("AA")
        break;

    case puan >= 70 && puan < 80:
        console.log("BB")
        break;

    case puan >= 60 && puan < 70:
        console.log("CC")
        break;

    case puan >= 50 && puan < 60:
        console.log("DD")
        break;

    case puan >= 0 && puan < 50:
        console.log("FF")
        break;

    default:
        console.log("Lütfen doğru puan girişi yapınız.")
        break;
}


//Girilen ayın hangi mevsim olduğunu gösterme

let month = prompt("Lütfen bir ay giriniz").toLowerCase();

console.log(month);

switch (true) {
    case month === "september" || month === "october" || month === "november":
        console.warn("The season is Autumn")
        break;

    case month === "december" || month === "january" || month === "february":
        console.warn("The season is Winter")
        break;

    case month === "march" || month === "april" || month === "may":
        console.warn("The season is Spring")
        break;

    case month === "june" || month === "july" || month === "august":
        console.warn("The season is Summer")
        break;

    default:
        console.error("Please enter month name.")
        break;
}


//Girilen ayın kaç gün olduğunu gösterme

if (month==="january"||month==="march"||month==="may"||month==="july"||month==="august"||month==="october"||month==="december") {
    console.log(`${month} has 31 days`)

} else if (month==="april"||month==="june"||month==="september"||month==="november") {
    console.log(`${month} has 30 days`)

} else if (month==="february") {
    console.log(`${month} has 28 days`)

} else {
    console.error("Please enter month name.")
}
