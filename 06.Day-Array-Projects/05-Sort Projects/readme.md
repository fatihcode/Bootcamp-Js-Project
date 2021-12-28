## SIRALAMA DİZİ:

*Bu projede sort() metodu hakkında pratik yapacaksınız. Ve bundan sonra filter() yöntemini uygulayın. typeof kullanımını da göreceksiniz.*

Karışık veri türlerinden (dizeler, sayılar, boolean, vb.) oluşan iki diziniz var.

* İlk önce, dizinin dizin numarasına göre her bir öğenin veri türlerini inceleyin. Sonuçların türünü konsollayın.
* Argüman olarak bir diziyi alan `handleFilter` adlı bir işlev oluşturun. `handleFilter` işlevinizin içinde, yerleşik javascript `filter()` yöntemini kullanmadan sayı olmayan tüm veri türlerini kaldırın. Ve sadece sayıları döndür. Bunu yapmak için `forEach()` yöntemini veya bir for döngüsü kullanabilirsiniz.
* Şimdi, bir `typeNumber` işlevi oluşturun ve `filter()` yöntemini kullanarak yalnızca verilen dizilerden sayıları döndürün.
* Bir `handleSort` işlevi oluşturun ve artan ve azalan düzende bir dizi sıralanmış sayı döndürün. Sıralama için yukarıdaki herhangi bir fonksiyonun çıktısını kullanabilirsiniz.

***Aferin!***

## ZORLUK – EVDE ÇALIŞMA

* İlk bağımsız değişken olarak `sortAges` işlevini ve ikinci bağımsız değişken olarak beklenen bir diziyi alan bir test işlevi oluşturun. (karşılaştırma için manuel olarak beklenen dizi olarak bir çözüm dizisi oluşturun)
* Karşılaştırma yapın ve **“geçti”** veya **“başarısız”** sonucunu verin.

Bu algoritmanın hızlı çalışmasını sağlamak için endişelenmenize gerek yok! Buradaki fikir, bir bilgisayar gibi "düşünmenizi" ve temel JavaScript bilginizi uygulamanızı sağlamaktır.

***İyi şanslar!***

---

## SORT ARRAY:

*In this Project you will practice about sort() method. And after that implement filter() method. You will see usage of typeof also.*

You have two arrays consist of mixed data types (strings, numbers, boolean, etc.).

* First examine data types of each element by index number of array. Console the typeof results.
* Create a function called `handleFilter `which takes an array as an argument. Inside your `handleFilter `function remove any non-number data types without using the built-in javascript `filter()` method. And return just numbers.
* To do that, you can use `forEach()` method or a for loop.
* Now, create a function `typeNumber `and return numbers only from given arrays by using `filter()` method.
* Create a `handleSort `function and return an array of sorted numbers in ascending and descending order. You can use output of any function above for sorting.

***Well done!***

## CHALLENGE – HOME STUDY

* Create a test function that takes sortAges  function as an first argument and takes an expected array as an second argument. (create a solution array as expected array manually, for comparing)
* Make comparison and give result “passed” or “failed”.

You don't have to worry about making this algorithm work fast! The idea is to get you to "think" like a computer and practice your knowledge of basic JavaScript.

***Good luck!***
