# Çalışma Süresi Hesaplayıcı

*Yoğun bir yaşam tarzına yakalandığınızda, ne kadar zaman ayırmanız gerektiğinin izini kaybetmek kolaydır. Study Time Calculator, belirli bir haftada müsait olduğunuz saatleri ve çevrimiçi çalışmayı yaşam tarzınıza nasıl sığdırabileceğinizi hesaplamanıza yardımcı olan basit bir araçtır.*

*Bu projede, bir Çalışma Süresi Hesaplayıcı kullanarak her hafta yeterli çalışma süresi alıp almadığınızı hesaplayacağız.*

*Program, geçen haftanın her günü için gerçek ve ideal çalışma saatlerini belirleyecektir.*

*Son olarak, haftalık çalışma hedefinizden ne kadar uzakta olduğunuzu saat cinsinden hesaplayacaktır.*

* [ ] Çözülmesi gereken ilk problem, haftanın her günü kaç saat ders çalıştığınızı belirlemektir.
* [ ] Herhangi bir günün boş saat sayısını döndüren bir işlev oluşturabilirsiniz. Yedi farklı fonksiyon (haftanın her günü için bir tane) yazmak yerine güne parametreli bir fonksiyon yazalım.
  day adlı tek bir parametreyle `getStudyHours` adlı bir işlev oluşturun.
* [ ] İşlev, bir günü argüman olarak kabul etmeli ve o gün çalıştığınız saat sayısını döndürmelidir.
* [ ] Örneğin, Pazartesi günü 8 saatlik eğitiminiz varsa, getStudyHours('monday') çağrısı 8 döndürmelidir.
* [ ] İşlevi birden çok kez çağırarak ve sonuçları konsola yazdırarak test edin.
  `console.log(getStudyHours('salı')); // salıya atanan # saati yazdırmalı`
* [ ] Artık her gün için çalışma saatlerini almak için bir fonksiyon yazdığınıza göre, üç şey yapmamız gerekiyor:
  • Gerçekte çalıştığınız toplam çalışma saatlerini alın
  • Tercih ettiğiniz ideal çalışma saatlerini alın
  • Varsa öğrenim borcunu hesaplayın.
* [ ] Gerçekte çalıştığınız toplam çalışma saatlerini elde etmek için `getActualStudyHours` adında, parametre almayan yeni bir işlev oluşturun.
* [ ] `getActualStudyHours()` işlevinin içinde, haftanın her günü için getStudyHours() işlevini çağırın. Sonuçları bir araya getirin ve örtük bir dönüş kullanarak toplamı döndürün.
* [ ] Tercih ettiğiniz ideal çalışma saatlerini elde etmek için parametresiz getIdealStudyHours adlı bir işlev oluşturun.
* [ ] Fonksiyonun içinde idealHours adında bir değişken tanımlayın ve değerini günlük ideal saatlerinize ayarlayın. Ardından idealHours değerini 7 ile çarparak döndürün.
* [ ] Haftada tercih ettiğiniz toplam saati elde etmek için 7 ile çarpmak isteyeceksiniz.
* [ ] İki yeni işlevinizi arayarak ve sonuçları konsola yazdırarak test edin.

  ```
  konsol.log(getActualStudyHours()); // haftadaki tüm çalışma saatlerinin toplamını yazdırmalıdır
  konsol.log(getIdealStudyHours()); // idealHours 8 ise, 56 yazdırmalıdır

  ```
* [ ] Artık gerçek çalışma saatlerini ve ideal çalışma saatlerini alabileceğinize göre, çalışma borcunu hesaplamanın zamanı geldi.
* [ ] Parametresiz hesapStudyDebt adlı bir işlev oluşturun.
* [ ] Bloğunun içinde, `getActualStudyHours()` işlev çağrısına eşit olan `factStudyHours` kümesi adında bir değişken oluşturun.
* [ ] Ardından, `idealStudyHours` adında, `getIdealStudyHours()` işlev çağrısına eşit olarak ayarlanmış başka bir değişken oluşturun.
* [ ] Artık gerçekStudyHours ve idealStudyHours'a sahip olduğunuza göre, sonucu konsola göndermek için birkaç if/else ifadesi yazabilirsiniz. İşlev şu mantığı yerine getirmelidir:
  • Gerçek çalışma ideal çalışmaya eşitse, kullanıcının mükemmel miktarda çalışma aldığını konsolda oturum açın.
  • Gerçek etüt ideal etüdden büyükse, kullanıcının planlanandan daha fazla etüt aldığını konsolda oturum açın. Kullanıcı dinlenebilir.
  • Gerçek etüt ideal etüdden daha azsa, kullanıcının çalışmak için biraz boş zaman yaratması için konsolda oturum açın.
* [ ] Bu hesap makinesini daha yararlı hale getirmek için, hesapStudyDebt() içindeki her günlük ifadesine kullanıcının ideal çalışmasının üzerinde veya altında kaldığı saatleri ekleyin.
* [ ] Yazdırmak için console.log()'a iletilen dizenin içindeki matematiği enterpolasyon yapabilirsiniz. Örneğin, kullanıcı idealden daha az çalışma yaptıysa şunu yazabilirsiniz:
  `console.log('Bu hafta ihtiyaç duyduğunuzdan ' + (idealStudyHours - gerçekStudyHours) + ' saat(ler) daha az çalışmanız var. Çalışmak için biraz boş zaman yaratın.');`
* [ ] Programın son satırında, `calculateStudyDebt()` işlevini çağırarak programı başlatın.

***Aferin.***

* [ ] Hesap makineniz çalışıyor. Şimdi ekstra alıştırma için şunları deneyin:
  • `getActualStudyHours()`, `getStudyHours()` çağrılmadan uygulanabilir. `getActualStudyHours()`'u yeniden yazmak için değişmez sayıları ve + operatörünü kullanın. Yine de, haftadaki toplam fiili saat çalışmasını döndürmelidir.
* [ ] Bazı insanlar diğerlerinden daha uzun süre çalışabilir. Bir argüman iletebilmek için `getIdealStudyHours(`)'u yeniden yazın, örneğin `getIdealStudyHours(8)` burada 8 günlük ideal saattir. Çağrıyı `getIdealStudyHours()`'a da `calculateStudyDebt()` içinde güncelleyin.
* [ ] Günlük çalışma saatlerini doğrudan `getActualStudyHours()` içine koyun.
  `const getActualStudyHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;`
* [ ] idealHours'u bir parametre yapın ve 7 ile çarpın.
  `const getIdealStudyHours = idealHours => idealHours * 7;`

### Ek Adım!;

* [ ] Erken bitirirseniz bir sonraki Projeyi geçmeyin, bu adımı yapın.
* [ ] Sadece günleri değil, farklı parametreleri kullanan yeni bir hesap makinesi (son projeyi kopyalayın) yapın. Her çalışmaya zaman puanı verin.

sabahları
Beynimiz günün ilk birkaç saatinde en çok açıktır ve fırsat doğduğunda bundan yararlanmaya değer. Sabahları çalışmaya haftada kaç saat ayırabilirsiniz? Bu zamanı 2,5 ile çarpın.

akşamlar
Bir gecede yarım saat kadar kısa bir eğitime sığdırmak, bir hafta boyunca temettü ödeyebilir. Haftada kaç saatinizi akşamları çalışmaya ayırabilirsiniz? Bu sefer 1 ile çarpın.

işe gidip gelmek
Mobil teknoloji uzun bir yol kat etti ve toplu taşımada uzun bir yolculuk, kılık değiştirmiş bir nimet olabilir. İşe giderken haftada kaç saat ders çalışmaya ayırabilirsiniz? Bu zamanı 2 ile çarpın.

Çalışmak
Öğle tatilinizi neden bazı çevrimiçi çalışmalara uydurmak için kullanmıyorsunuz? Haftada kaç saatinizi, özellikle öğle tatilinde, işte çalışmaya ayırabilirsiniz? Bu zamanı 2 ile çarpın.

Hafta sonları
Hafta sonları, ailenizi ve sosyal hayatınızı ihmal etmeden daha uzun, daha odaklı çalışma oturumlarına sığdırmak için harika bir zamandır. Ortalama bir haftasonuna kaç saat ders çalışabilirsiniz? Bu süreyi 3 ile çarpın.

* [ ] Hedefinizi koruyan bir değişken idealStudyPoints oluşturun. 25 puan altı düşük, 25 ila 35 yeterli, 35 ila 45 iyidir, 45'in üzerinde bir süper kahramansınız. Birini seç.
* [ ] Artık gerçekStudyPoints ve idealStudyPoints'e sahip olduğunuza göre, sonucu konsola göndermek için birkaç if/else ifadesi yazabilirsiniz. 9. adıma bakın. Farklı hedefler hesaplamak ve konsola yazdırmak için çalışma saatlerini değiştirin.

***Tebrikler.***

---

# Study Hard Calculator

*The program will determine the actual and ideal hours of study for each day of the last week.
Finally, it will calculate, in hours, how far you are from your weekly study goal.*

*Study Time Calculator
When you're caught in a busy lifestyle, it’s easy to lose track of how much time you have to spare. Study Time Calculator is a simple tool that helps you calculate the hours you have available in a given week, and how you can fit online study into your lifestyle.
In this project we’ll calculate if you’re getting enough study time each week using a Study Time Calculator.
The program will determine the actual and ideal hours of study time for each day of the last week.
Finally, it will calculate, in hours, how far you are from your weekly study goal.*

* [ ] The first problem to solve is determining how many hours of study you got each day of the week.
* [ ] You can create a function that returns any given day’s number of hours of empty. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
* [ ] Create a function named getStudyHours with a single parameter named day.

The function should accept a day as an argument and return the number of hours you studied that day.
For instance, if you got 8 hours of study on Monday, calling getStudyHours('monday') should return 8.
3.
Test the function by calling it multiple times and printing the results to the console.
console.log(getStudyHours('tuesday')); // should print the # hours assigned to tuesday

Now that you’ve written a function to get the study hours for each day, we need to do three things:
•	Get the total study hours that you actually study
•	Get the ideal study hours that you prefer
•	Calculate the study debt, if any.
To get the total study hours that you actually study, create a new function named getActualStudyHours that takes no parameters.

Inside the getActualStudyHours() function, call the getStudyHours() function for each day of the week. Add the results together and return the sum using an implicit return.

To get the ideal study hours that you prefer, create a function named getIdealStudyHours with no parameters.
Inside the function, declare a variable named idealHours and set its value to your ideal hours per day. Then return the idealHours multiplied by 7.
You’ll want to multiply by 7 to get the total hours you prefer per week.

Test your two new functions by calling them and printing the results to the console.
console.log(getActualStudyHours()); // should print the sum of all study hours in the week

console.log(getIdealStudyHours()); // if idealHours is 8, should print 56

Now that you can get the actual study hours and the ideal study hours, it’s time to calculate study debt.
Create a function named calculateStudyDebt with no parameters.
Inside of its block, create a variable named actualStudyHours set equal to the getActualStudyHours() function call.
Then, create another variable named idealStudyHours, set equal to the getIdealStudyHours() function call.

Now that you have actualStudyHours and idealStudyHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
•	If actual study equals ideal study, log to the console that the user got the perfect amount of study.
•	If the actual study is greater than the ideal study, log to the console that the user got more study than planned. User can rest.
•	If the actual study is less than the ideal study, log to the console that the user should create some empty time to study.

To make this calculator more helpful, add the hours the user is over or under their ideal study in each log statement in calculateStudyDebt().

You can interpolate the math inside the string passed to console.log() to print. For instance, if the user got less study than is ideal, you could write:
`console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hour(s) less study than you needed this week. Create some empty time to study.');`

On the last line of the program, start the program by calling the calculateStudyDebt() function.

Good job. Your calculator is working. Now for extra practice, try these:
•	getActualStudyHours() could be implemented without calling getStudyHours(). Use literal numbers and the + operator to rewrite getActualStudyHours(). It should still return the total actual hours study in the week.
•	Some people can study longer than others. Rewrite getIdealStudyHours() so that you can pass it an argument, like getIdealStudyHours(8) where 8 is the ideal hours per day. Update the call to getIdealStudyHours() in calculateStudyDebt() too.

Put the daily study hours directly into getActualStudyHours().
const getActualStudyHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

Make idealHours a parameter and multiply it by 7.
const getIdealStudyHours = idealHours => idealHours * 7;

### Additional Step!;

* [ ] If you finish early do not pass the next Project, do this step.

13.a.
Make a new calculator (duplicate recent project) that uses different parameters not only days. Give every study time points.

Mornings
Our brains are the most switched-on in the first few hours of the day, and it’s well worth taking advantage of this when the chance arises. How many hours a week can you dedicate to studying in the morning? Multiply this time by 2,5.

Evenings
Fitting in as little as half an hour of study a night can pay dividends over the course of a week. How many hours a week can you dedicate to studying in the evening? Multiply this time by 1.

Commuting
Mobile technology has come a long way, and a long commute on public transport can be a blessing in disguise. How many hours a week can you dedicate to study while commuting to work? Multiply this time by 2.

Work
Why not use your lunch break for fitting in some online study? How many hours a week can you dedicate to studying at work, particularly during your lunch break? Multiply this time by 2.

Weekends
Weekends are a fantastic time to fit in some longer, more focused study sessions, without neglecting your family and social life. How many hours of study can you fit into your average weekend? Multiply this time by 3.

13.b.
Create a variable idealStudyPoints that keeps your goal. Under 25 points is low, 25 to 35 is enough, 35 to 45 is good, above 45 you are a superhero. Choose one.

13.c.
Now that you have actualStudyPoints and idealStudyPoints, you can write a few if/else statements to output the result to the console. Look at the step-9. Change study hours to calculate different goals and print to the console.

***Congragulations.***
