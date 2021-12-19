
const calculateCharacter = () => {
  // Write your codes here

  /////// DEĞİŞKENLER ////////

  let tweet=prompt("Tweetinizi buraya yazınız");


  /////// KAÇ KARAKTER YAZDILDI ////////////

  let tweetCount=tweet.length;

  console.log(tweetCount);


  /////// KAÇ KARAKTER KALDI ////////////

  let tweetLeft=150-tweetCount;

  console.log(tweetLeft);


  /////// ALERT MESAJ YAZDIRMA ////////////

  console.log(tweetCount+ " karakter yazdınız, "+ tweetLeft+ " karakteriniz kaldı.");

  alert(tweetCount+ " karakter yazdınız, "+ tweetLeft+ " karakteriniz kaldı.");


}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
