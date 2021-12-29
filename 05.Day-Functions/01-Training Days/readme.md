## EĞİTİM GÜNLERİ

Tecrübeli bir atlet olarak en sevdiğiniz aktivitelerden biri maraton koşmak. Kayıt olduğunuz kondisyon ve antrenmana kaldığınız günler için size mesaj gönderen Training Days adlı bir servis kullanıyorsunuz.

Siz de kodladığınız için, program şu anda değişkenleri için yanlış kapsamı kullanıyor. Bu projede, değişken kapsamları sabitleyerek Eğitim Günlerini daha sürdürülebilir ve daha az hataya açık hale getireceksiniz.

**Başlayalım.**

* [X] Konsolda programın bozuk olduğunu görebiliriz! İdeal olarak, `getRandEvent()` işlevi rastgele bir etkinlik döndürür. `(“Maraton”, Triatlon”, “Pentatlon”)`
* [X] `getTrainingDays()` işlevi, seçilen aktiviteye göre eğitilecek gün sayısını döndürür.
* [X] `getTrainingDays i`şlevi içinde trainingDays değişkenini bildirin. Ardından, bir koşullu yazın; trainingDays'in kaç gün olduğuna (50,75 veya 100) duruma göre karar verin,
* [X] Sporcuyu küresel yapın.
* [X] `logEvent()` ve `logTime()` işlevleri, sporcunun adını, durumunu ve gün sayısını konsola yazdırır.
* [X] Günlük işlevleri–logEvent() ve logTime()– aynı atlet değişkenini kullanır. Kapsam belirleme ile ilgili bir sorun var gibi görünüyor; burada yinelenen kod miktarından bahsedebiliriz!
* [X] Her fonksiyon için ilk parametre olarak atlet ekleyerek bu tekrardan kaçınalım. Atlet değişkenini global kapsama taşıyın.
* [X] Sporcuyu `logEvent()` ve `logTime()` için ilk argüman olarak iletin.
* [X] Programın hala çalışıp çalışmadığını kontrol edin! Çalıştırın ve çıktıyı kontrol edin.
* [X] Rastgele yerel yapın
* [X] İşlevleri başka bir rakip için deneyin `(“Warren”)`.
* [X] atlet-2 değişkeni oluşturun ve yeni değişkenler atamak için getRandEvent() ve getTrainingDays() işlevlerini çalıştırın; spor-2 ve günler-2.
* [X] `logEvent()` ve `logTime()` işlevlerini çağırın.
* [X] Programı çalıştır. Etkinlikler rastgele atanmalıdır, ancak “Nala” ve “Warren” aynı etkinliği yürütüyor!
* [X] Rastgele değişkenin global kapsamda tanımlandığını görüyoruz. getRandEvent() her çağrıldığında aynı değeri kullanır.
* [X] Dosyanın en üstünde, `getRandEvent` işlevi içindeki kapsamı engellemek için genel kapsamdan rastgele değişkeni taşıyın.
* [X] Aferin! Eğitim Günleri, çalışmanız sayesinde daha sürdürülebilir ve daha az hataya açıktır. Sonuçların rastgele olduğundan emin olmak için programı birkaç kez çalıştırın.

---

## TRAINING DAYS

As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the condition you signed up for and the days you have left to train.

Since you also code, program currently uses the wrong scope for its variables. In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.

**Let's get started.**

* [X] In the console we can see that the program is broken!
* [X] Ideally, the getRandEvent() function returns an activity at random. `(“Marathon”, Triathlon”, “Pentathlon”)`
* [X] The getTrainingDays() function returns the number of days to train, based on the activity selected.
* [X] Declare trainingDays variable within the getTrainingDays function. Then, write a conditional; decide trainingDays is how many day (50,75 or 100) according to the condition ,
* [X] Make athlete global
* [X] The `logEvent()` and `logTime()` functions print the athlete name, condition, and number of days to the console.
* [X] The log functions–logEvent() and logTime()–use the same athlete variable. There seems to be a problem with the scoping; we can mention the amount of duplicate code here!
* [X] Let’s avoid this repetition by adding athlete as the first parameter for each function.
* [X] Move the athlete variable to global scope.
* [X] Pass athlete as the first argument to `logEvent()` and `logTime()`.
* [X] Check that the program still works! Run it and check the output.
* [X] Make random local
* [X] Try the functions for another competitor `(“Warren”)`
* [X] Create athlete-2 variable and run `getRandEvent()` and getTrainingDays() functions to assign new variables; sport-2 and days-2.
* [X] Call `logEvent()` and `logTime()` functions.
* [X] Run the program. The activities should assigned randomly, but “Nala” and “Warren” are running the same activity!
* [X] We see that the random variable is defined in the global scope. Each time `getRandEvent()` is called, it uses the same value.
* [X] At the top of the file, move the random variable from the global scope to block scope within the getRandEvent function.
* [X] Well done! Training Days is more maintainable and less error-prone thanks to your work. Run the program a few times to make sure the results are randomized.
