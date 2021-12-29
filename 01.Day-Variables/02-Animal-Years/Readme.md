# Köpek Yılları

*Köpekler insanlardan daha hızlı olgunlaşır. Bir köpeğin yaşının, aynı yaştaki bir insanla karşılaştırıldığında büyümesini hesaba katmak için "köpek yılları" olarak hesaplanabileceğini sık sık söyleriz. Bazı yönlerden, köpekler için zaman hızlı hareket eder - bir insanın hayatındaki 8 yıl, bir köpeğin hayatındaki 45 yıla eşittir. Bir köpek olsaydın kaç yaşında olurdun?*

*Yaşınızı "insan yaşından" "köpek yaşına" nasıl çevireceğiniz aşağıda açıklanmıştır:*

* *Bir köpeğin yaşamının ilk iki yılı, her biri 10,5 köpek yılı olarak sayılır.*
* *Takip eden her yıl 4 köpek yılına eşittir.*

*Kafanızda matematiği yapmaya başlamadan önce, bırakın bir bilgisayar icabına baksın! Matematik operatörleri ve değişkenler hakkındaki bilginizle, insan yaşınızı köpek yıllarına dönüştürmek için JavaScript kullanın.*

* [ ] `myAge` adında bir değişken oluşturun ve bunu bir sayı olarak yaşınıza eşitleyin.  Bu kod satırını açıklayan bir yorum yazın.
* [ ] `earlyYears` adında bir değişken oluşturun ve buna 2 değerini kaydedin. Bu değişkene kaydedilen değerin değişeceğini unutmayın. Bu kod satırını açıklayan bir yorum yazın.
* [ ] `earlyYears`'a kaydedilen değeri 10.5 ile çarpmak ve bunu `earlyYears`'a yeniden atamak için çarpma atama operatörünü kullanın.
* [ ] İlk iki yılı zaten hesapladığımız için, `myAge` değişkenini alın ve ondan 2 çıkarın. Sonucu, `laterYears` adlı bir değişkene eşit olarak ayarlayın. Bu değeri daha sonra değiştireceğiz.
  Bu kod satırını açıklayan bir yorum yazın.
* [ ] Sonraki yıllarınız tarafından hesaplanan köpek yıllarının sayısını hesaplamak için `laterYears` değişkenini 4 ile çarpın. Bir adımda çarpmak ve atamak için çarpma atama operatörünü kullanın. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Bu noktada çalışmanızı kontrol etmek isterseniz, `earlyYears` ve `laterYears`'ı konsola yazdırın. Değerler beklediğiniz gibi mi? Devam etmeye hazır olduğunuzda bu görevi işaretleyin.
* [ ] `earlyYears` ve `laterYears`'ı birlikte ekleyin ve bunu `myAgeInDogYears` adlı bir değişkende saklayın. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Şimdi bir string metodu kullanalım.  Adınızı bir dize olarak yazın, yerleşik yöntemini `.toLowerCase()` olarak adlandırın ve sonucu `myName` adlı bir değişkende saklayın. `toLowerCase` yöntemi, tümü küçük harfli bir dize döndürür. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Adınızı ve yaşınızı köpek yıllarında gösteren bir `console.log` ifadesi yazın. Değeri aşağıdaki cümlede görüntülemek için dize enterpolasyonunu kullanın: `Benim adım NAME. HUMAN AGE yaşındayım. Köpek yıllarına göre DOG AGE yaşındayım.`
* [ ] Yukarıdaki cümlede NAME yerine myName, HUMAN AGE yerine myAge ve DOG AGE yerine myAgeInDogYears yazın. Bu kod satırını açıklayan bir yorum yazın.
* [ ] Harika! Herhangi bir insan yaşını köpek yaşına dönüştürebilirsiniz. `myAge`'i değiştirmeyi deneyin ve ne olduğunu görün.
* [ ] Fazladan alıştırma yapmak isterseniz, bu projeyi `*=` operatörü olmadan yazmayı deneyin.

## Ek adım

* [ ] İşini tersine çevir. Herhangi bir köpek yaşını insan yılına dönüştürebilirsiniz. Değişkenleri ve hesaplamaları değiştirmeyi deneyin.
* [ ] Yaşınızı girmek için komut istemini kullanarak kodunuzu değiştirin ve sonucu uyarın.
* [ ] Readme dosyası hazırlayın ve çalışmanızı github hesabına gönderin.

### Meydan okuma!

*İşte "kaplumbağa yaşından" "insan yaşına" yeni dönüşüm:*

- Bir kaplumbağanın yaşamının ilk yılı 12 insan yılı olarak sayılır.
- Sonraki her yıl 10 insan yılına eşittir.
- Bunun gibi uyarmak için bir çözüm yapın: 20 yaşındaki kaplumbağanız insan olsaydı 202 yaşında olurdu.

*Not: Daha fazla bilgi için bu sayfayı inceleyebilirsiniz:*

[http://www.age-converter.com/reptiles-age-calculator.html](http://www.age-converter.com/reptiles-age-calculator.html/)

---

# Dog Years

*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?*

*Here’s how you convert your age from “human years” to “dog years”:*

* *The first two years of a dog’s life count as 10.5 dog years each.*
* *Each year following equates to 4 dog years.*

*Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.*

* [ ] Create a variable named `myAge`, and set it equal to your age as a number.
  Write a comment that explains this line of code.
* [ ] Create a variable named `earlyYears` and save the value 2 to it. Note, the value saved to this variable will change.
  Write a comment that explains this line of code.
* [ ] Use the multiplication assignment operator to multiply the value saved to `earlyYears` by 10.5 and reassign it to `earlyYears`.
* [ ] Since we already accounted for the first two years, take the `myAge` variable, and subtract 2 from it.
  Set the result equal to a variable called `laterYears`. We’ll be changing this value later.
  Write a comment that explains this line of code.
* [ ] Multiply the `laterYears` variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step. Write a comment that explains this line of code.
* [ ] If you'd like to check your work at this point, print `earlyYears` and `laterYears` to the console. Are the values what you expected? Check off this task when you're ready to move on.
* [ ] Add earlyYears and laterYears together, and store that in a variable named `myAgeInDogYears`.
  Write a comment that explains this line of code.
* [ ] Let’s use a string method next. Write your name as a string, call its built-in method `.toLowerCase()`, and store the result in a variable called `myName`. The `toLowerCase` method returns a string with all lowercase letters. Write a comment that explains this line of code.
* [ ] Write a `console.log` statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:
  `My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.`
* [ ] Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above. Write a comment that explains this line of code.
* [ ] Great work! You can convert any human age to dog years. Try changing myAge and see what happens.
  If you’d like extra practice, try writing this project without the `*=` operator.

## Additional Step!

* [ ] Reverse your work. You can convert any dog age to human years. Try changing variables and calculations.
* [ ] Change your code using prompt to input your age, and alert the result.
* [ ] Prepare a Readme file and send your work to the github account.

### Challange!

*Here's new convertion from “tortoise years” to “human years”:*

* The first year of a tortoise's life count as 12 human years.
* Each year following equates to 10 human years.
* Make a solution to alert like this: Your 20 year(s) old tortoise would have 202 years if it was a human.

*Note: You can inspect this page :*

[http://www.age-converter.com/reptiles-age-calculator.html](http://www.age-converter.com/reptiles-age-calculator.html/)
