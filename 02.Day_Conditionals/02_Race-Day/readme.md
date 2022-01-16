# Yarış Günü

*Koşucuları yarışa kaydedecek ve yarış gününde onlara talimatlar verecek bir program yazmak için işe alındınız.*

*Bir zaman çizelgesi olarak, kayıt şöyle görünür:*

*İşte kaydımız nasıl çalışıyor. Yetişkin koşucular (18 yaş üstü) ve genç koşucular (18 yaş altı) vardır.*

*Erken veya geç kayıt olabilirler. Koşuculara yaşlarına ve kayıtlarına göre bir yarış numarası ve başlama zamanı atanır.*

**Yarış numarası:**

* Erken yaştaki yetişkinlere 1000 veya üzerinde bir yarış numarası verilir.
* Diğerlerinin tümü 1000'in altında bir sayı alır.

**Başlangıç saati:**

* Yetişkin kayıt yaptıranlar sabah 9:30 veya 11:00'de çalışır.
* Erken yetişkinler sabah 9:30'da koşar.
* Geç yetişkinler saat 11:00'de koşar.
* Genç kayıt yaptıranlar 12:30'da koşarlar (kayıttan bağımsız olarak).
* Ancak tam olarak 18 yaşında olan koşucular için planlama yapmadık! Bunu projenin sonunda halledeceğiz.

* [ ] Yarış numaraları rastgele atanır.

### İpucu;

> `Math.random()`, 0 (dahil) ile 1 (hariç) arasında bir değer döndürür.
> Bu sayı kümesini 0 (dahil) ile 1000 (hariç) arasında bir aralık yapmak için döndürülen değeri 1000 ile çarpabiliriz. Son olarak, yalnızca 0'dan 999'a kadar tam sayılara sahip olduğumuzdan emin olmak için `Math.floor()`'u kullanarak aşağı yuvarlayabiliriz.
>
> ```js
> let raceNumber = Math.floor(Math.random() * 1000);
> ```

* [ ] Bir koşucunun erken kayıt olup olmadığını gösteren bir değişken oluşturun.
* [ ] Bir Boolean değerine eşit olarak ayarlayın. Bunu daha sonra farklı koşucu koşullarını test ederken değiştireceksiniz.

### İpucu;

> ```js
> const registeredEarly = false;
> ```

* [ ] Koşucunun yaşı için bir değişken oluşturun ve bunu bir sayıya eşitleyin.
* [ ] Bunu daha sonra farklı koşucu koşullarını test ederken değiştireceksiniz.

### İpucu;

> ```js
> const age = 19;
> ```

* [ ] Koşucunun yetişkin olup olmadığını ve erken kayıt olup olmadığını kontrol eden bir kontrol akışı ifadesi oluşturun.
* [ ] Bu doğruysa, raceNumber'larına 1000 ekleyin.

### İpucu;

> Bir koşucu, yaşı 18'in üzerindeyse yetişkindir.
> Bir if ifadesi, && mantıksal operatörü ve matematiksel atama operatörü += kullanmanız gerekir.

* [ ] İlkinin altında ayrı bir kontrol akışı ifadesi oluşturun (tekrar if ile başlayarak). Bu beyan, yarış zamanını belirlemek için yaşı ve kayıt zamanını kontrol edecektir.
* [ ] Erken kayıt yaptıran 18 yaşından büyük koşucular için, konsola saat 9:30'da yarışacaklarını bildiren bir açıklama yazın. RaceNumber'larını ekleyin.

### İpucu;

> Bu adım bir if ifadesi, && mantıksal işleci, console.log ve dize enterpolasyonu gerektirir.
>
> ```js
> if (koşul && koşul) {
>  console.log('ifade');
>  }
> ```

* [ ] “Geç yetişkinler saat 11: 00'de koşar”
* [ ] Erken yetişkinleri zaten kontrol ettiğimiz için şöyle bir ifade yazabiliriz: Aksi takdirde koşucu 18 yaşından büyükse ve erken kayıt yaptırmadıysa saat 11:00'de yarışacaktır.
* [ ] Karşılık gelen else if ifadesini yazın.
* [ ] Bunun içinde, konsola saat 11: 00'de yarışacaklarını söyleyen bir dize kaydedin. RaceNumber'larını ekleyin.

### İpucu;

> Bu adım, && ve ! mantıksal işleçler, console.log ve dize enterpolasyonu.
>
> ```js
> if (koşul && koşul) {
> console.log('ifade');
> } else if (koşul && !şart) {
> console.log('diğer ifade');
> }
> ```

* [ ] “Genç kayıt yaptıranlar öğlen 12:30'da koşar (kayıttan bağımsız olarak)”
* [ ] 18 yaşından küçükler için, consolea 12:30'da yarışacaklarını bildiren bir açıklama yazın. RaceNumber'larını ekleyin.

### İpucu;

> ```js
> if (koşul && koşul) { 
> console.log('ifade'); 
> } else if (koşul && !şart) { 
> console.log('diğer ifade'); 
> } else if (koşul) { 
> console.log('başka bir ifade'); 
> }
> ```

* [ ] Oluşturduğunuz iki değişken için farklı değer kombinasyonları girin ve kodunuzu birkaç kez çalıştırın. Doğru ifadelerin konsola yazdırıldığını doğrulayın!
* [ ] İpucunda verilen örnekleri kullanarak çalışmanızı kontrol edebilirsiniz.

### İpucu;

> Kodunuz doğru çalışıyorsa, bunların tümü doğru olmalıdır:
>
> - 25 yaşını doldurmuş ve erken kayıt yaptıran koşucular saat 09:30'da koşacaktır.
> - 25 yaşını doldurmuş ve erken kayıt yaptırmayan koşucular saat 11:00'de koşacaktır.
> - 16 yaşını doldurmuş ve erken kayıt yaptıran koşucular saat 12:30'da koşacaktır.
> - 16 yaşında olup erken kayıt yaptırmayan koşucular saat 12:30'da koşacaktır.

* [ ] Tam 18 yaşında olan koşucuları unutmayın!
* [ ] Koşucuya kayıt masasını görmesini söyleyen bir ifadeyi konsola kaydeden başka bir ifade ekleyin.

### İpucu;

> Kodunuz doğru çalışıyorsa, bu doğru olmalıdır:
>
> - 18 yaşını doldurmuş ve erken kayıt yaptıran koşucuların kayıt masasını görmeleri gerekmektedir.
> - 18 yaşını doldurmuş ve erken kayıt OLMAYAN koşucuların kayıt masasını görmeleri gerekmektedir.

---

# Race Day

*You have been hired to write a program that will register runners for the race and give them instructions on race day.*

*As a timeline, registration would look like this:
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age).*

*They can register early or late. Runners are assigned a race number and start time based on their age and registration.*

**Race number:**

* Early adults receive a race number at or above 1000.
* All others receive a number below 1000.

**Start time**:

* Adult registrants run at 9:30 am or 11:00 am.
* Early adults run at 9:30 am.
* Late adults run at 11:00 am.
* Youth registrants run at 12:30 pm (regardless of registration).
* But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

* [ ] Race numbers are assigned randomly.

### Hint;

> `Math.random()` returns a value between 0 (inclusive) and 1 (exclusive).
> In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.
> Finally, to ensure we only have whole numbers from 0 to 999 we can round down using `Math.floor()`.
>
> ```js
> let raceNumber = Math.floor(Math.random() * 1000);
> ```

* [ ] Create a variable that indicates whether a runner registered early or not.
* [ ] Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

### Hint;

> ```js
> const registeredEarly = false;
> ```

* [ ] Create a variable for the runner’s age and set it equal to a number.
* [ ] You’ll change this later as you test different runner conditions.

### Hint;

> ```js
> const age = 19;
> ```

* [ ] Create a control flow statement that checks whether the runner is an adult AND registered early.
* [ ] Add 1000 to their raceNumber if this is true.

### Hint;

> A runner is an adult if their age is over 18.
> You’ll need to use an if statement, the && logical operator, and the mathematical assignment operator +=.

* [ ] Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
* [ ] For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

### Hint;

> This step requires an if statement, the && logical operator, console.log, and string interpolation.
>
> ```js
> if (condition && condition) { 
> console.log('statement'); 
> }
> ```

* [ ] “Late adults run at 11:00 am”
* [ ] Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
* [ ] Write the corresponding else if statement.
* [ ] Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.

### Hint;

> This step requires an else if statement, the && and ! logical operators, console.log, and string interpolation.
>
> ```js
> if (condition && condition) {
> console.log('statement');
> } else if (condition && !condition) {
> console.log('other statement');
> }
> ```

* [ ] “Youth registrants run at 12:30 pm (regardless of registration)”
* [ ] For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.

### Hint;

> ```js
> if (condition && condition) {
> console.log('statement');
> } else if (condition && !condition) {
> console.log('other statement');
> } else if (condition) {
> console.log('another statement');
> }
> ```

* [ ] Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!
* [ ] You can check your work using the examples provided in the hint.

### Hint;

> If your code is working correctly, all of these should be true:
>
> - Runners who are 25 years old and registered early will run at 9:30 am.
> - Runners who are 25 years old and did NOT register early will run at 11:00 am.
> - Runners who are 16 years old and registered early will run at 12:30 pm.
> - Runners who are 16 years old and did NOT register early will run at 12:30 pm.

* [ ] Don’t forget about runners exactly 18 years old!
* [ ] Add an else statement that logs a statement to the console telling the runner to see the registration desk.

### Hint;

> If your code is working correctly, this should be true:
>
> - Runners who are 18 years old and registered early should see the registration desk.
> - Runners who are 18 years old and did NOT register early should see the registration desk.
