# Birim Dönüştürücü

*JavaScript bilgimizle Kelvin'i Celsius'a, ardından Fahrenheit'e çevirelim.
Örneğin, 283 K, 10 °C'ye dönüşür ve bu da 50 °F'ye dönüşür.*

* [ ] Bugün hava tahmini 293 Kelvin. Başlamak için kelvin adında bir değişken oluşturun ve bunu 293'e eşitleyin.
* [ ] Kelvin'e kaydedilen değer sabit kalacaktır. Bunu göz önünde bulundurarak değişken türünü seçin. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Celsius, Kelvin'e benzer - tek fark, Celsius'un Kelvin'den 273 derece daha az olmasıdır.
  Kelvin değişkeninden 273 çıkararak Kelvin'i Celsius'a çevirelim. Sonucu celsius adlı başka bir değişkende saklayın. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Fahrenhayt'ı hesaplamak için bu denklemi kullanın, ardından yanıtı fahrenhayt adlı bir değişkende saklayın.
  `Fahrenhayt = Santigrat * (9/5) + 32`
  Bir sonraki adımda, kaydedilen sayıyı fahrenhayt'a yuvarlayacağız. Değerini değiştirmenize izin veren değişken türünü seçin. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Celsius'tan Fahrenheit'e dönüştürdüğünüzde, genellikle bir ondalık sayı alırsınız.
  Fahrenhayt sıcaklığını yuvarlamak için yerleşik Math nesnesindeki `.round()` yöntemini kullanın. Sonucu fahrenheit değişkenine kaydedin. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Sıcaklığı fahrenhayt cinsinden konsola kaydetmek için `console.log` ve dize enterpolasyonunu aşağıdaki gibi kullanın:
  Sıcaklık SICAKLIK derece Fahrenheit'tir. TEMPERATURE'ı fahrenhayt'a kaydedilen değerle değiştirmek için dize enterpolasyonunu kullanın.
* [ ] Sonuçlarınızı görmek için programınızı çalıştırın!
* [ ] Değişkenleri kullanarak programınız herhangi bir Kelvin sıcaklığı için çalışmalıdır - sadece kelvin değerini değiştirin ve programı yeniden çalıştırın. Fahrenheit'te 0 Kelvin nedir?

***Harika iş!***

Ekstra pratik yapmak isterseniz şunu deneyin:

* [ ] Aşağıdaki denklemi kullanarak santigratı Newton ölçeğine dönüştürün.
  Newton = Santigrat * (33/100)
* [ ] `.floor()` yöntemini kullanarak Newton sıcaklığını aşağı yuvarlayın
* [ ] Sıcaklığı newton cinsinden konsola kaydetmek için console.log ve string enterpolasyonunu kullanın.

### Meydan okuma!;

* [ ] Çalışmanızı zenginleştirin. "Hız" veya "kütle" birimlerini dönüştürebilirsiniz.
* [ ] Google Converter'ı (Chrome ile) açın ve değerler ve formüller için birim dönüştürücüye bakın. Değişkenleri ve hesaplamaları değiştirmeyi deneyin.
* [ ] İlk birimi girmek için komut istemini kullanarak kodunuzu değiştirin ve sonucu uyarın.
* [ ] Readme dosyası hazırlayın ve çalışmanızı github hesabına gönderin.

---

# Unit Converter

*With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.*

* [ ] The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
  The value saved to kelvin will stay constant. Choose the variable type with this in mind. Write a comment above that explains this line of code.
* [ ] Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
  Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius. Write a comment above that explains this line of code.
* [ ] Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
  `Fahrenheit = Celsius * (9/5) + 32`
  In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value. Write a comment above that explains this line of code.
* [ ] When you convert from Celsius to Fahrenheit, you often get a decimal number.
  Use the .round() method from the built-in Math object to round the Fahrenheit temperature. Save the result to the fahrenheit variable. Write a comment above that explains this line of code.
* [ ] Use `console.log` and string interpolation to log the temperature in fahrenheit to the console as follows:
  The temperature is TEMPERATURE degrees Fahrenheit.
  Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
* [ ] Run your program to see your results!
* [ ] By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.
  What’s 0 Kelvin in Fahrenheit?

***Great work!***

*If you'd like extra practice, try this:*

* [ ] Convert celsius to the Newton scale using the equation below
  Newton = Celsius * (33/100)
* [ ] Round down the Newton temperature using the `.floor()` method
* [ ] Use `console.log` and string interpolation to log the temperature in newton to the console.

### Challenge!;

* [ ] Enrich your work. You can convert “speed” or “mass” units.
* [ ] Open Google Converter (with Chrome) and look at the unit converter for values and formulas. Try changing variables and calculations.
* [ ] Change your code using prompt to input first unit, and alert the result.
* [ ] Prepare a Readme file and send your work to the github account.
