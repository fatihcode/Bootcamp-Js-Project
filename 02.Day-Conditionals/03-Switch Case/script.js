let john=20;

if (john>=18){
    console.log(`John ${john} yaşında kahve içerbilir.`)

} else {
    console.log(`John ${john} yaşında meyve suyu içebilir.`)
}


//turnary operatörü kullandık

let drink= john>18 ? "Kahve" : "Meyve Suyu";

console.log(drink);



switch (true) {
    case john<13:
        console.log("John bir çocuk");
        break;

    case john>=13 && john<20:
        console.log("John bir genç");
        break;

    case john>=20 && john<30:
        console.log("John bir çocuk");
        break;

    default:
        console.log("John bir yetişkin");
        break;
}