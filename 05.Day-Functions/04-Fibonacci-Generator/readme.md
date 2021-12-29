# FİBONACCİ ÜRETİCİSİ

Fibonacci Dizisi, sayı dizisidir:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

1. Bir sonraki sayı, kendisinden önceki iki sayı toplanarak bulunur:
2. önündeki iki sayının eklenmesiyle bulunur (1+1),
3. önündeki iki sayının (1+2) eklenmesiyle bulunur,
4. (2+3)'tür,
5. ve benzeri!

Örnek: Yukarıdaki dizide bir sonraki sayı 21+34 = 55'tir.

Bu kadar basit!

İşte daha uzun bir liste:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

**Sonraki birkaç sayıyı bulabilir misin?**

* Böyle; amacınız, bir fibonacci sayı oluşturucu işlevi oluşturmaktır. Örnek; `fibonacciGen(6) = [0, 1, 1, 2, 3, 5`]

**Adımlara bakmadan tamamlamayı deneyin.**

1. [ ] İlk olarak, bir parametre kabul eden bir fonksiyon oluşturun;
2. [ ] Her seferinde bir tane Fibonacci sayısı oluşturacağınız için.
3. [ ] İşlevin içinde, bir dizi oluşturma koşulu, başlangıç koşulu için iki öğeye sahiptir.
4. [ ] Verilen argümana göre fonksiyon, Fibonacci sayı dizisini hesaplamalı ve döndürmelidir.
5. [ ] Her sayı kendisinden önceki iki sayı toplanarak bulunur.

* [ ] Dizinin doğru uzunluğuna ulaşmadıkça bu itibarı yapın.

4. [ ] Ama ya kullanıcı argüman için “1” verirse.

* [ ] Bu durum için bir if ifadesi oluşturun ve manuel olarak çıktı verin.

5. [ ] Diğer daha büyük argümanlar için (50 veya 100 olabilir); kodunuzu tekrarlayamazsınız, verilen argümana göre dizi oluşturmak için bir “for döngüsü” kullanmanız gerekir.

### İpucu;

> ```
> // Döngü yapısı için
> for(başlatma, koşul, artırma/azaltma){
> // kod buraya gelir
> }
>
> //örnekdizi = [45, 55, 65, 78, 83, 99]
> for(let i = 0; i <= 5; i++){ // kodu döngü içinde 6 kez tekrarlamak anlamına gelir
> konsol.log(arr[i]) // her “i” döngüsü +1 alır ve 5'e ulaştığında; döngü durur.
> }
> //konsol şöyle olur: // 45 55 65 78 83 99
>
> // bununla aynı koddu;
> konsol.log(dizi[0])
> konsol.log(dizi[1])
> konsol.log(dizi[2])
> konsol.log(dizi[3])
> konsol.log(dizi[4])
> konsol.log(dizi[5])
> ```

***Tebrikler!***

## Ek Adım;

Altın Oran "φ" (sembol, solda gösterilen Yunanca "phi" harfidir) yaklaşık olarak 1,618'e eşit özel bir sayıdır.

Ve işte bir sürpriz. Ardışık (birbiri ardına) herhangi iki Fibonacci Sayısını aldığımızda, oranları Altın Oran'a çok yakındır.

"φ" = fibonacciArray[sayı] / fibonacciArray[sayı-1] "φ" kullanarak tam fibonacci sayısını bulabiliriz.

Formül 6. sayıdan sonra doğru sonucu verir.

> Örnek çıktı: X7 = ((1.618034...)(7-1) − (1−1.68034...)(7-1) )/√5

O halde, istediğiniz Fibonacci Sayısını veren bir fonksiyon oluşturun. Örnek çıktı fibonacciFinder(7) = 8

***İyi şanlar!***

---

# FIBONACCI GENERATOR

The Fibonacci Sequence is the series of numbers:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it:
•	the 2 is found by adding the two numbers before it (1+1),
•	the 3 is found by adding the two numbers before it (1+2),
•	the 5 is (2+3),
•	and so on!
Example: the next number in the sequence above is 21+34 = 55
It is that simple!
Here is a longer list:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
Can you figure out the next few numbers?
•	So; your goal is, creating a fibonacci number creater function. Example; `fibonacciGen(6) = [0, 1, 1, 2, 3, 5]`

**Try complete it without looking steps.**

1. First, create a function accepts one parameter; for how many Fibonacci numbers you will create for each time.
2. Inside function, create an array has two elements, for starting condition.
3. According to the given argument, function should calculate and return Fibonacci numbers array. Each number found by adding the two numbers before it.

Make this reputition unless you reach correct length of the array.

4. But what if the user gives “1” for argument.

Create an if statement for this situtation and give output manually.

5. For other bigger arguments (may be 50 or 100); you can not repeat your code, you need to use a “for loop” to create array according to the given argument.

### Hint;

> ```
> // For loop structure
> for(initialization, condition, increment/decrement){
> // code goes here
> }
>
> //example
> arr = [45, 55, 65, 78, 83, 99]
> for(let i = 0; i <= 5; i++){    // it means repeat the code 6 times inside loop
> console.log(arr[i])      // every loop “i” takes +1 and when reaches 5; loop stops.
> }
> //console would be : // 45 55 65 78 83 99
>
> //it was the same code with this;
> console.log(arr[0])
> console.log(arr[1])
> console.log(arr[2])
> console.log(arr[3])
> console.log(arr[4])
> console.log(arr[5])
> ```

***Congratulations!***

## Additional Step!;

The Golden Ratio "φ" (symbol is the Greek letter "phi" shown at left)
is a special number approximately equal to 1,618.
And here is a surprise. When we take any two successive (one after the other) Fibonacci Numbers, their ratio is very close to the Golden Ratio.
"φ" = fibonacciArray[num] / fibonacciArray[num-1]
By using "φ" we can find exact fibonacci number. The formula gives correct result after 6th number.

`Example output:    X7 = ((1,618034...)(7-1) − (1−1,618034...)(7-1) )/√5`

•	So, create a function that gives the Fibonacci Number you want. Example output fibonacciFinder(7) = 8

***Good luck!***
