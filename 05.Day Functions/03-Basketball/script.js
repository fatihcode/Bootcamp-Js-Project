let scoreJohn = [89, 120, 103]
let scoreMike = [116, 94, 123]

function avaragePoint(arr) {
    let avarage = 0;
    for (let i = 0; i < arr.length; i++) {
        avarage += arr[i]
    }
    return (avarage / arr.length).toFixed(2)
}

console.log(avaragePoint(scoreJohn))

function whoIsWinner(name1, name2, score1, score2) {

    if (avaragePoint(score1) > avaragePoint(score2)) {
        console.log(name1 + ' takımı ' + avaragePoint(score1) + ' puanla kazandı');
    } else if (avaragePoint(score2) > avaragePoint(score1)) {
        console.log(name2 + ' takımı ' + avaragePoint(score2) + ' puanla kazandı');
    } else {
        console.log('Hatalı giriş yaptınız');
    }

}

console.log(whoIsWinner("John", "Mike", scoreJohn, scoreMike))



