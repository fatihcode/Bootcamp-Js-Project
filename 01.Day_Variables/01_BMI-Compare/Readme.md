# Kütle Karşılaştırma Projesi

*JavaScript bilgimizle, aşağıdaki formül kullanılarak hesaplanan Mark's ve John's BMI'yi (Vücut Kitle İndeksi) hesaplayıp karşılaştıralım:*

> BMI = kütle / yükseklik2 = kütle / (yükseklik * yükseklik). (kg cinsinden kütle ve metre cinsinden yükseklik).

* [ ] Başlamak için, Mark'ın ve John'un kütlesini ve yüksekliğini değişkenlerde saklayın. `massMark` , `massJohn`, `heightMark` ve `heightJohn` adlı değişkenler oluşturun, bunları bir değere eşitleyin.
* [ ] Verilen formülü kullanarak her ikisinin de BMI'sini hesaplayın. Sonuçları `BMIJohn` ve `BMIMark` adlı değişkenlere ayarlayın.
* [ ] Bu kod satırını açıklayan bir yorum yazın. Bu BMI'leri konsola yazdırın.
* [ ] BMI sonuçlarını kısaltmak için Matematik operatörlerini kullanın. (`Math.Floor`, `Math.Round` veya `toFixed`)
* [ ] Konsola göre, Mark'ın John'dan daha yüksek bir BMI'ye sahip olup olmadığı veya tersi olup olmadığı hakkında bilgi içeren daha yüksek BMI boole değişkeni oluşturun. Karşılaştırma ifadesini kullanın (`< `veya `>`).

### İpucu;

> A = 8 olsun;
> B = 5 olsun;
> const daha büyük = A > B; // bu "doğru" verir
> const daha büyük = A < B; // bu "yanlış" verir

* [ ] Sonucu şöyle bir şekilde günlüğe kaydetmek için konsol.log ve dize enterpolasyonunu (tüm adımlardaki değişkenleri içerir) kullanın:
  `Mark'ın BMI'si John'unkinden daha mı yüksek? Cevap "doğru". Çünkü Mark'ın VKİ'si BMIMARK ve John'un VKİ'si BMIJOHN`

### Meydan okuma!;

* [ ] Çalışmanızı zenginleştirin. `prompt` kullanarak değerler ekleyebilir ve sonucunuzu uyarı ekranında görmek için dize enterpolasyonunu kullanabilirsiniz.
* [ ] Readme dosyası hazırlayın ve çalışmanızı github hesabına gönderin.

## Ek Adım!;

* [ ] Dilerseniz bu karşılaştırmayı 5. adımda oluşturduğunuz `boolean` değişkeni yerine bir `if/else` deyimi ile yapabilirsiniz.

```js
//if else ifadesinin kullanımı örneği:
if (someValue > otherValue) {
console.log("someValue, otherValue'dan daha yüksek");
} else {
console.log("someValue, otherValue'dan daha düşük");
}
```

---

# Mass Compare Project

*With our knowledge of JavaScript, let’s calculate and compare of the Mark’s and John’s BMI (Body Mass Index), which is calculated using the formula:*

> BMI = mass / height2 = mass / (height * height). (mass in kg and height in meter).

* [ ] To start, Store Mark's and John's mass and height in variables. Create variables named `massMark` , `massJohn` , `heightMark` and `heightJohn` set them equal to some value.
* [ ] Calculate both their BMIs using the given formula. Set the results to variables named `BMIJohn` and `BMIMark`.
* [ ] Write a comment above that explains this line of code. Print this BMIs to the console.
* [ ] Use Math operators to shorten BMI results. (`Math.Floor`, `Math.Round` or `toFixed`)
* [ ] According to the console, create a boolean variable `higherBMI` containing information about whether if Mark has a higher BMI than John or reverse. Use compare statement (`<` or `>`).

### Hint;

> let A = 8;
> let B = 5;
> const bigger = A > B; // this gives “true”
> const bigger = A < B; // this gives “false”

* [ ] Use `console.log` and string interpolation (containing the variables from all steps) to log the result something like this:
  `Is Mark's BMI is higher than John's? Answer is “true". Because Mark's BMI is BMIMARK and John's BMI is BMIJOHN`

### Challenge!;

* [ ] Enrich your work. You can add values by using `prompt` and use string interpolation to see your result in alert screen.
* [ ] Prepare a Readme file and send your work to the github account.

## Additional Step!;

* [ ] If you wish, you can make this compare with an `if/else` stattement instead of `boolean` variable that you created in step 5.

```js
//Usage of if else statement example:
if (someValue > otherValue) {
console.log("someValue is higher than otherValue");
} else {
console.log("someValue is lower than otherValue");
}
```
