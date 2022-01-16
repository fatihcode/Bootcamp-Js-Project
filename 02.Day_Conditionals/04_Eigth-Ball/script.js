let userName = prompt("Lütfen bir kullanıcı adı giriniz.")

//Kullanıcı isim girerse ismiyle hitap et

userName ? console.log(`Merhaba ${userName} Hoşgeldin`) : console.log("Merhaba");

const userQuestion = prompt("Bize bir soru sorun.")

console.log(`${userName} sordu: ${userQuestion}`);


//Random çıkan piyango sonucu

let random = Math.floor(Math.random() * 8);

console.log(`Piyango sonucu ${random} çıktı`);


switch (random) {
    case 0:
        console.log('Bu kesin')
        break;

    case 1:
        console.log('Kesinlikle öyle')
        break;

    case 2:
        console.log('Bulanık cevap tekrar deneyin')
        break;

    case 3:
        console.log('Şimdi tahmin edemem')
        break;

    case 4:
        console.log('Buna güvenmeyin')
        break;

    case 5:
        console.log('Kaynaklarım hayır diyor')
        break;

    case 6:
        console.log('Görünüm pek iyi değil')
        break;

    default:
        console.log('İşaretler eveti gösteriyor')
        break;
}


//İf else ile sonucu yazdırma
let mesaj=""

if (random === 0) {
    mesaj = 'It is certain';

  } else if (random === 1) {
    mesaj = 'It is decidedly so';

  } else if (random === 2) {
    mesaj = 'Reply hazy try again';

  } else if (random === 3) {
    mesaj = 'Cannot predict now';

  } else if (random === 4) {
    mesaj = 'Do not count on it';

  } else if (random === 5) {
    mesaj = 'My sources say no';

  } else if (random === 6) {
    mesaj = 'Outlook not so good';

  } else {
    mesaj = 'Signs point to yes';
  }
             
  console.warn(mesaj);