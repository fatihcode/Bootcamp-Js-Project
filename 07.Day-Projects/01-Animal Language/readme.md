# Hayvan Dili

*Bir cümle alın ve onu balina eşdeğerine çevirin. Metni balina diline çevirmek için birkaç basit kural vardır:*

* Ünsüz yoktur. Yalnızca `'y'` hariç sesli harfler.
* u'lar ve e'ler ekstra uzundur, bu yüzden programımızda onları ikiye katlamalıyız.

  ```
  Örneğin “Hi, Human” çıktısı: “IUUA” şeklindedir.
  ```

Bu çeviriyi gerçekleştirmek için döngü bilgimizi kullanabiliriz. Başlayalım!

* [ ] İstediğiniz herhangi bir ifadeye eşit olan girdi adında bir değişken oluşturun. Bu değişken, hayvan diline çevirmek istediğiniz metni içerecektir.
* [ ] Balinalar yalnızca sesli harflerle konuşur, bu nedenle girdi değişkeninden bir dizi sesli harf çıkarmanız gerekir. Diziyi, güncellenmeyecek `vowels` adında bir değişkene eşit olarak ayarlayın.
  **Not:** Balinalar `'y'`yi sesli harf olarak kabul etmezler.
* [ ] `resultArray` adında bir değişken oluşturun ve onu boş bir diziye eşitleyin: `[]`. Bu, giriş dizesindeki sesli harfleri depolamak için bir yer olarak hizmet edecektir.
* [ ] Giriş değişkeni metninin her harfini yinelemek için bir döngü oluşturun. Daha sonraki bir adımda, her harfi `vowels` dizimizle karşılaştıracağız.
* [ ] Az önce yazdığınız `for` döngüsünün içinde iç içe bir `for` döngüsü oluşturun. Dış döngü her çalıştığında, iç döngünün `vowels` dizisi boyunca yinelenmesini sağlayın.
* [ ] Bu, her yineleme sırasında her bir giriş harfini tüm `vowels` öğelerine karşı kontrol etmenizi sağlayacaktır.

### İpucu

> Unutmayın, içteki for döngüsü ve dıştaki for döngüsü farklı yineleyici değişkenlere sahip olmalıdır.

* [ ] İkinci `for` döngüsünün içine, giriş harfini sesli harfler dizisindeki her harfle karşılaştıran bir kod bloğu yazın.

### İpucu

> Sonuçları depolayan diziye eşleşen harfler eklemek için bir yöntem kullanın. Balinalar kendi dillerindeki e'leri ve u'ları iki katına çıkarır.

* [ ] Giriş dizesindeki her harfin `'e'` veya `'u'`ya eşit olup olmadığını kontrol eden bir `if` ifadesi yazın.
* [ ] Programın alt kısmında, konsolda `resultArray`'i günlüğe kaydedin.
* [ ] Diziyi kaydettiğimizde, çıktının her harf arasında virgül olduğuna dikkat edin. Uygun balina dili üretmek için dizi öğelerini büyük harf yapmak ve bunları tek bir dize olarak bir araya getirmek istiyoruz.
* [ ] Programı çalıştırın ve çıktıyı yüksek sesle söyleyin - resmen balina konuşuyorsunuz!
* [ ] Onaylamak için, girdinin değerini `"turpentine and turtles"` olarak değiştirirseniz, balina versiyonunda `"UUEEIEEAUUEE"` yazacaktır.`

`'A whale of a deal!'` gibi diğer testleri deneyin. (`'AAEEOAEEA'` almak için).

---

# Animal Language

*Take a phrase and translate it into its whale equivalent.*

There are a few simple rules for translating text to whale language:

* There are no consonants. Only vowels excluding `'y'`.
* The `u`‘s and `e`‘s are extra long, so we must double them in our program.

```
For example for “Hi, Human” output is : “IUUA.
```

To accomplish this translation, we can use our knowledge of `loops`. Let’s get started!

* [ ] Create a variable named `input` that is equal to any phrase you’d like. This variable will contain the text you want to translate into animal language.
* [ ] Whales only speak in vowels so you need an array of vowels to be extracted from the `input` variable. Set the array equal to a variable named `vowels` that will not be updated.
  **Note:** Whales don’t consider `“y”` a vowel.
* [ ] `Create `a variable named `resultArray` and set it equal to an empty array: `[]`. This will serve as a place to store the vowels from the `input` string.
* [ ] Create a loop to iterate through each letter of the `input` variable text. In a later step, we will compare each letter with our `vowels` array.
* [ ] Create a nested `for` loop inside of the `for` loop you just wrote. Make the inner loop iterate through the `vowels` array each time the outer loop runs.
* [ ] This will enable you to check each letter of `input` against all the `vowels` elements during each iteration.

### Hint

> Remember, the inner `for` loop and outer `for` loop should have different iterator variables.

* [ ] Inside the second `for` loop, write a code block that compares the `input` letter to every letter in the `vowels` array.

### Hint

> Use a method to add matching letters the array that stores the results.

* [ ] Whales double their `e`‘s and the `u`‘s in their language.
* [ ] Write an `if` statement that checks if each letter in the `input` string is equal to `'e'` or `'u'.`
* [ ] At the bottom of the program, log `resultArray` to the console.
* [ ] Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
* [ ] Run the program and sing the output out loud — you officially speak whale!
* [ ] To confirm, if you change the value of `input` to ‘turpentine and turtles’, the whale version would read: `'UUEEIEEAUUEE'`.

Try other tests like `'a whale of a deal!'` (to get `'AAEEOAEEA'`).
