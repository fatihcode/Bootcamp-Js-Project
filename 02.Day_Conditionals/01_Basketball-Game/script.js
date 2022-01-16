let johnScore= parseInt((89+120+173)/3);
let mikeScore= parseInt((116+94+123)/3);
let maryScore= parseInt((97+134+165)/3);


//Ortalama Skoru Konsola Yazdır

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);


//İki takımlı karşılaştırma

if (johnScore>mikeScore) {
    console.log(`John'nun takımı ${johnScore} puanla kazandı`);

} else if (mikeScore>johnScore) {
    console.log(`Mike'ın takımı ${mikeScore} puanla kazandı`);

} else {
    console.log(`Maç ${johnScore} - ${mikeScore} berabere bitti`)
}


//Üç takımlı karşılaştırma

if (johnScore>mikeScore && johnScore>maryScore){
    console.log(`John'nun takımı ${johnScore} puanla kazandı`);

} else if (mikeScore>johnScore && mikeScore>maryScore){
    console.log(`Mike'ın takımı ${mikeScore} puanla kazandı`);

} else if (maryScore>johnScore && maryScore>mikeScore){
    console.log(`Mary'nin takımı ${maryScore} puanla kazandı`);

} else {
    console.log(`Maçlar berabere bitti`)

}