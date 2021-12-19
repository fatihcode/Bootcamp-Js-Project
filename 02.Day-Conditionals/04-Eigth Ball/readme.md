Fortune Eight Ball

You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
In this project we will build the Fortune Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.

1.
In the first line of the program, define a variable called userName that is set to an empty string.
If the user wants, he or she can enter his or her name in between the quotation marks.
Hint
An empty string is '' in JavaScript.

2.
Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.

Hint
If the user doesn’t enter a name, the condition userName ? will evaluate to falsy because it will be an empty string.

For example:
condition ? console.log('true') : console.log('false');

3.
Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Fortune Eight Ball.

Hint
const userQuestion = 'Will I become a werewolf tonight?';

4.
Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!

Hint
console.log(`The user asked: ${userQuestion}`);

5.
We need to generate a random number between 0 and 7.
Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods from the Math library.

Math.floor(Math.random() * 8);
Check the hint to learn how it works!

Hint
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.
Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
const randomNumber = Math.floor(Math.random() * 8);

6.
Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.

Hint
let eightBall = '';

7.
We need to create a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Fortune Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Fortune Eight Ball phrases that we’d like to save to the variable eightBall:
•	'It is certain'
•	'It is decidedly so'
•	'Reply hazy try again'
•	'Cannot predict now'
•	'Do not count on it'
•	'My sources say no'
•	'Outlook not so good'
•	'Signs point to yes'
If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!
Hint
switch (condition) {
  case 0:
    eightBall = 'prediction here';
    break;
  case 1:
    eightBall = 'another prediction here';
    break;  
  // additional cases...
}

8.
Write a console.log() to print the Fortune Eight Ball’s answer, the value of the eightBall variable.

Hint
console.log(`The eight ball answered: ${eightBall}`); 

9.
Run your program a few times to see random results appear in the console!
If you want extra practice:
•	If you started with a switch statement, convert it to if/else if/else statements.
•	If you started with if/else if/else statements, convert them to a switch statement.

10.
•	Use prompt to ask your question and see result in alert screen!




////////////////////



Servet Sekiz Topu

JavaScript'te güçlü bir araç öğrendiniz: akışı kontrol edin! Aslında o kadar güçlü ki, birinin servetini söylemek için kullanılabilir.

Bu projede, JavaScript'teki kontrol akışını kullanarak Fortune Eight Ball'u oluşturacağız.

Kullanıcı bir soru girebilecek, ardından programımız rastgele bir servet verecek.

1.
Programın ilk satırında, boş bir dizeye ayarlanmış userName adlı bir değişken tanımlayın.
Kullanıcı isterse adını tırnak işaretleri arasına girebilir.

İpucu
JavaScript'te boş bir dize '' şeklindedir.

2.
Bu değişkenin altında, kullanıcının bir ad girip girmemesine karar veren üçlü bir ifade oluşturun. Kullanıcı 'Jane' gibi bir ad girerse, oturum açmak için dize enterpolasyonunu kullanın Merhaba, Jane! konsola. Aksi takdirde, sadece Merhaba!

İpucu
Kullanıcı bir ad girmezse, userName ? boş bir dize olacağı için falsy olarak değerlendirilecektir.

Örneğin:
şart ? console.log('true') : console.log('false');

3.
userQuestion adlı bir değişken oluşturun. Değişkenin değeri, kullanıcının Fortune Eight Ball'a sormak istediği soru olan bir dize olmalıdır.

İpucu
const userQuestion = 'Bu gece kurt adam mı olacağım?';

4.
userQuestion için ne istendiğini belirten bir console.log() yazın. Dilerseniz konsol.log() deyimine kullanıcının adını ekleyebilirsiniz!

İpucu
konsol.log(`Kullanıcı sordu: ${userQuestion}`);

5.
0 ile 7 arasında rastgele bir sayı üretmemiz gerekiyor.
Başka bir değişken oluşturun ve onu randomNumber olarak adlandırın. Math kitaplığındaki iki yöntemi kullanan bu ifadeye eşit olarak ayarlayın.

Math.floor(Math.random() * 8);
Nasıl çalıştığını öğrenmek için ipucunu kontrol edin!

İpucu
Math.random(), 0 (dahil) ile 1 (hariç) arasında bir değer döndürür.
Bu sayı kümesini 0 (dahil) ile 8 (hariç) arasında değiştirmek için döndürülen değeri 8 ile çarpabiliriz.

Son olarak, yalnızca 0'dan 7'ye kadar tam sayılara sahip olduğumuzdan emin olmak için Math.floor()'u kullanarak aşağı yuvarlayabiliriz.
const randomNumber = Math.floor(Math.random() * 8);

6.
SekizBall adında bir değişken daha oluşturun ve onu boş bir dizeye eşitleyin. Sonraki adımlarda randomNumber değerine bağlı olarak bu değişkene bir değer kaydedeceğiz.

İpucu
sekizBall = '';

7.
4. adımda yaptığımız randomNumber'ı alan ve ardından bir Fortune Eight Ball'un döndüreceği bir yanıta sekizBall atanan bir kontrol akışı oluşturmamız gerekiyor. if/else veya switch deyimlerini kullanmayı düşünün. İşte sekizBall değişkenine kaydetmek istediğimiz 8 Fortune Eight Ball ifadesi:
•	'Bu kesin'
• 'Kesinlikle öyle'
•	'Bulanık cevap tekrar deneyin'
•	'Şimdi tahmin edemem'
• 'Buna güvenmeyin'
•	'Kaynaklarım hayır diyor'
• 'Görünüm pek iyi değil'
• 'İşaretler eveti gösteriyor'

randomNumber 0 ise, sekizBall değişkenine bir yanıt kaydedin; randomNumber 1 ise, sonraki yanıtı kaydedin vb. Kendinizi yaratıcı hissediyorsanız, kendi yanıtlarınızı verin!

İpucu
geçiş (koşul) {
  durum 0:
    sekizBall = 'burada tahmin';
    kırmak;
  dava 1:
    sekizBall = 'burada başka bir tahmin';
    kırmak;
  // ek durumlar...
}

8.
Fortune Eight Ball'un yanıtını, yani sekizBall değişkeninin değerini yazdırmak için bir console.log() yazın.

İpucu
konsol.log(`Sekiz top cevap verdi: ${eightBall}`);

9.
Konsolda rastgele sonuçların göründüğünü görmek için programınızı birkaç kez çalıştırın!
Ekstra pratik istiyorsanız:

• Bir switch ifadesi ile başladıysanız, onu if/else if/else ifadelerine dönüştürün.
• if/else if/else ifadeleriyle başladıysanız, bunları bir switch ifadesine dönüştürün.

10.
• Sorunuzu sormak ve sonucu uyarı ekranında görmek için komut istemini kullanın!