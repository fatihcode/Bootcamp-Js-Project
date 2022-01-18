# ORGANİZE KÜTÜPHANESİ

Kütüphane veritabanı üç farklı ortam türü taşır: kitaplar, CD'ler ve filmler.

Bu projede Media adında üç alt sınıfa sahip bir üst sınıf oluşturacaksınız: Kitap, Film ve CD. Bu üç alt sınıf aşağıdaki özelliklere ve yöntemlere sahiptir:

#### Kitap

• **Özellikler:** yazar (dize), başlık (dize), sayfalar (sayı), `isCheckedOut` (boolean, başlangıçta yanlış) ve derecelendirmeler (dizi, başlangıçta boş).

• **Alıcılar:** tüm mülklerin bir alıcısı vardır

• **Yöntemler:** `.getAverageRating()`, `.toggleCheckOutStatus()` ve `.addRating()`

#### Film

• **Özellikler:** yönetmen (dize), başlık (dize), `runTime` (sayı), `isCheckedOut` (boolean, başlangıçta false) ve derecelendirmeler (dizi, başlangıçta boş)

• **Alıcılar:** tüm mülklerin bir alıcısı vardır

• **Yöntemler:** `.getAverageRating()`, `.toggleCheckOutStatus()` ve `.addRating()`

#### CD

• **Özellikler:** sanatçı (dize), başlık (dize), `isCheckedOut` (boolean, başlangıçta yanlış) ve derecelendirmeler (dizi, başlangıçta boş), şarkılar (dize dizisi), süre (sayı).

• **Alıcılar:** tüm mülklerin bir alıcısı vardır

• **Yöntemler:** `.getAverageRating()`, `.toggleCheckOutStatus()` ve `.addRating()`
Bir meydan okuma arıyorsanız, aşağıdaki adımları kullanmadan dört sınıfı oluşturmaya çalışın.

Media adında bir ebeveyn sınıfı oluşturarak başlayalım.

Media sınıfının içinde, bir parametre alan bir `constructor() `yöntemi oluşturun.
Bu argüman, Media'nın üç alt sınıfının hepsinde bulunan ve varsayılan bir değeri olmayan bir özelliği ayarlayacaktır.

## İpucu:

Üç sınıfın her birinin başlık, `isCheckedOut` ve derecelendirme özellikleri vardır. Ancak, varsayılan değere sahip olmayan tek özellik title özelliğidir.

Yapıcı içinde Kitap, CD ve Filmin paylaştığı Medya özellikleri için değerleri ayarlayın. Tüm özellik adlarının başına bir alt çizgi (_) ekleyin.

## İpucu:

`_title` özelliğini title olarak ayarlayın, `_isCheckedOut` özelliğini false olarak ayarlayın ve _`ratings `özelliğini boş bir dizi olarak ayarlayın.

Başlık, `isCheckedOut` ve derecelendirme özellikleri için alıcılar oluşturun. Her alıcı, eşleşen özelliğe kaydedilen değeri döndürmelidir.

`isCheckedOut` özelliği için bir ayarlayıcı oluşturun.

Alıcılarınızın altında, `_isCheckedOut` özelliğine kaydedilen değeri değiştiren `toggleCheckOutStatus` adlı bir yöntem oluşturun.

Değer `true` ise, `false` olarak değiştirin. Değer `false` ise, `true` olarak değiştirin.

`.toggleCheckOutStatus()` altında, `getAverageRating `adlı bir yöntem oluşturun. Derecelendirme dizisinin ortalama değerini döndürür.

Bir argümanı kabul eden ve onu derecelendirme dizisinin sonuna eklemek için `.push()` kullanan `addRating` adında bir yöntem ekleyelim.

Girişin 1 ile 10 arasında olduğundan emin olun.

Ardından, Medya'yı genişleten bir Kitap sınıfı oluşturacağız.

Book sınıfının içinde, üç bağımsız değişkeni kabul eden bir kurucu oluşturun. Bu bağımsız değişkenler, varsayılan değerlere sahip olmayan özellikleri ayarlamak için kullanılır.

## İpucu:

Yapıcı yöntemi argümanları yazar, başlık ve sayfalardır.

Books'un yapıcı yönteminin ilk satırında super'i arayın. Ana kurucunun kullandığı tüm argümanları iletin.

## İpucu:

Başlığı ana kurucuya iletin.

Kitapta yazar ve sayfa özelliklerini ayarlamak için kalan bağımsız değişkenleri kullanın.

Kitap sınıfımız Media'nın özelliklerini ve alıcılarını devraldığından, Kitap sınıfında yalnızca iki yeni alıcı oluşturmamız gerekir.

Şimdi, yalnızca belgenin başında verilen özellik, alıcı ve yöntem belirtimlerini kullanarak bir Movie sınıfının tamamını oluşturun.

Aşağıdaki özelliklere sahip bir Kitap örneği oluşturun:
• Yazar: 'Edouard Louis'
• Başlık: 'Şiddet Tarihi'
• sayfalar: 224

Örneği, `historyOfViolence` adlı sabit bir değişkene kaydedin.

`historyOfViolence` örneğinde `.toggleCheckOutStatus()` öğesini çağırın.

`historyOfViolence` örneğinde i`sCheckedOut `özelliğine kaydedilen değeri Console.log.

4, 5 ve 5 girişleriyle historyOfViolence üzerinde `.addRating()` öğesini üç kez çağırın.

HistoryOfViolence üzerinde `.getAverageRating()` öğesini çağırın. Sonucu konsola kaydedin.

Aşağıdaki özelliklere sahip bir Film örneği oluşturun:
Yönetmen: 'Jean-Claude Van Damme'
• Başlık: 'Kan Sporu'
• Çalışma zamanı: 122
Örneği, bloodSport adlı sabit bir değişkene kaydedin.

BloodSport örneğinde `.toggleCheckOutStatus()` öğesini çağırın.

BloodSport'ta 1, 1 ve 5 girişleriyle `.addRating()`'i üç kez çağırın.

BloodSport'ta `.getAverageRating()`'i arayın. Sonucu konsola kaydedin.

Şimdi, yalnızca belgenin başında verilen özellik, alıcı ve yöntem özelliklerini kullanarak bir CD sınıfının tamamını oluşturun.

İki yöntem daha ekleyin: `.addSong()` ve `.shuffle()`

`shuffle()` yöntemi, şarkılar özelliğindeki tüm şarkıların rastgele sıralanmış bir dizisini döndürür.

Şimdi tüm alt sınıflarımızdan (tür) kullanan üst sınıf için yeni bir özellik oluşturun.

## İPUCU:

Başlıkla aynı.

Bu yeni mülkü, yapıcılarımız ve her şeyden üstün olarak adlandırın.

Daha önce oluşturduğunuz tüm örnekler için tür özelliği ("geçmiş", "eylem", "drama" vb.) ekleyin.

Seçtiğiniz özelliklerle iki veya daha fazla CD örneği oluşturun.
Bu CD örnekleri için şarkı ekleyin.
28

İçindeki tüm ortamları toplayan Katalog adlı bir sınıf oluşturun. Sizin tarafınızdan oluşturulan tüm ortamları (örnekler) yeni nesneye (Katalogdan oluşturulacak) yazın.

Bu katalog nesnesini konsola kaydedin.

## MÜCADELE

DOM kullanarak yeni örnekler oluşturun. Derecelendirmeleri de ekleyin.

• Kimlikler veya sınıf adları kullanarak öğelere ulaşın. (Onları değişkenlere atayın)
• Düğme için bir onclick işlevi yapın.
• Giriş değerlerini kullanarak örneklerinizi oluşturun.
• Örneklerinizi katalog nesnesine yazın.
• Bu verileri, önceden oluşturulmuş DOM kataloğu Kitaplığı paragrafında yazdırın

Katalog adında bir sınıf oluşturun.

---

# ORGANİZE LIBRARY

Library database carries
three different types of media: books, CDs, and movies.

In this project you will
create a parent class named `<span>Media</span>` with three
subclasses: `<span>Book</span>`, `<span>Movie</span>`, and `<span>CD</span>`. These
three subclasses have the following properties and methods:

#### Book

·
**Properties** : `<span>author</span>` (string),
`<span>title</span>` (string), `<span>pages</span>` (number),
`<span>isCheckedOut</span>` (boolean, initially `<span>false</span>`), and
`<span>ratings</span>` (array, initially empty).

·
**Getters** : all properties
have a getter

·
**Methods** : `<span>.getAverageRating()</span>`, `<span>.toggleCheckOutStatus()</span>`, and `<span>.addRating()</span>`

#### Movie

·
**Properties** : `<span>director</span>` (string),
`<span>title</span>` (string), `<span>runTime</span>` (number),
`<span>isCheckedOut</span>` (boolean, initially `<span>false</span>`), and
`<span>ratings</span>` (array, initially empty)

·
**Getters** : all properties
have a getter

·
**Methods** : `<span>.getAverageRating()</span>`, `<span>.toggleCheckOutStatus()</span>`, and `<span>.addRating()</span>`

#### CD

·
**Properties** : `<span>artist</span>` (string),
`<span>title</span>` (string), `<span>isCheckedOut</span>` (boolean,
initially `<span>false</span>`), and `<span>ratings</span>` (array,
initially empty), `<span>songs</span>` (array of strings), `<span>duration</span>` (number).

·
**Getters** : all properties
have a getter

·
**Methods** : `<span>.getAverageRating()</span>`, `<span>.toggleCheckOutStatus()</span>`, and `<span>.addRating()</span>`

If you’re looking for a
challenge, try to create the four classes without using the steps below.

**1.**

Let’s start by making a
parent class called `<span>Media</span>`.

**2.**

Inside the `<span>Media</span>` class,
create a `<span>constructor()</span>` method
that takes **one** parameter.

This argument will set the
one property that is in all three subclasses of `<span>Media</span>`, and does
not have a default value.

**Hint** : Each of the three classes has properties for `<span>title</span>`, `<span>isCheckedOut</span>`, and `<span>ratings</span>`. However, the `<span>title</span>` property is the only one
that does not have a default value.

**3.**

Inside the constructor,
set the values for `<span>Media</span>` properties that `<span>Book</span>`, `<span>CD</span>`, and `<span>Movie</span>` share.
Prepend all of the property names with an underscore (`<span>_</span>`).

**Hint** : Set the `<span>_title</span>` property
to `<span>title</span>`, set the
`<span>_isCheckedOut</span>` property
to `<span>false</span>`, and set
the `<span>_ratings</span>` property
to an empty array.

**4.**

Create getters for the `<span>title</span>`, `<span>isCheckedOut</span>`, and `<span>ratings</span>` properties.
Each getter should return the value saved to the matching property.

**5.**

Create a setter for the
`<span>isCheckedOut</span>` property.

**6.**

Under your getters, create
a method named `<span>toggleCheckOutStatus</span>` that changes
the value saved to the `<span>_isCheckedOut</span>` property.

If the value is `<span>true</span>`, then
change it to `<span>false</span>`. If the value is `<span>false</span>`, then
change it to true.

**7.**

Under `<span>.toggleCheckOutStatus()</span>`, create
a method named `<span>getAverageRating</span>`. Return
the average value of the `<span>ratings</span>` array.

**8.**

Let’s add a method named
`<span>addRating</span>` that accepts one argument and
uses `<span>.push()</span>` to add it to the end of
the `<span>ratings</span>` array.

Make sure input is between `<span>1</span>` and `<span>10</span>`.

**9.**

Next, we’’ll build a `<span>Book</span>` class
that extends `<span>Media</span>`.

**10.**

Inside the `<span>Book</span>` class,
create a constructor that accepts **three** arguments. These arguments are used
to set properties that do not have default values.

**Hint** : The constructor method arguments are `<span>author</span>`, `<span>title</span>`, and `<span>pages</span>`.

**11.**

Call `<span>super</span>` on the
first line of the `<span>Books</span>`‘s constructor method. Pass
it any arguments that the parent constructor uses.

**Hint** : Pass `<span>title</span>` to the
parent constructor.

**12.**

Use the remaining arguments
to set the `<span>author</span>` and `<span>pages</span>` properties
in `<span>Book</span>`.

**13.**

Since our `<span>Book</span>` class
inherits `<span>Media</span>`‘s properties and getters,
we only need to create two new getters in the `<span>Book</span>` class.

**14.**

Now, create an entire `<span>Movie</span>` class
using only the property, getter, and method specifications given at the
beginning of the document.

**15.**

Create a `<span>Book</span>` instance
with the following properties:

·
Author: `<span>'Édouard Louis'</span>`

·
Title: `<span>'History of Violence'</span>`

·
pages: `<span>224</span>`

Save the instance to a constant
variable named `<span>historyOfViolence</span>`.

**16.**

Call `<span>.toggleCheckOutStatus()</span>` on the
`<span><span> </span>historyOfViolence</span>` instance.

**17.**

Console.log the value saved
to the `<span>isCheckedOut</span>` property
in the `<span><span> </span>historyOfViolence</span>` instance.

**18.**

Call `<span>.addRating()</span>` three
times on `<span><span> </span>historyOfViolence</span>` with inputs
of `<span>4</span>`, `<span>5</span>`, and `<span>5</span>`.

**19.**

Call `<span>.getAverageRating()</span>` on `<span><span> </span>historyOfViolence</span>`. Log the
result to the console.

**20.**

Create a `<span>Movie</span>` instance
with the following properties:

# Director:

`<span>'</span>``<span>Jean-Claude Van Damme</span>``<span>'</span>`

·
Title: `<span>'Blood Sport'</span>`

·
Runtime: `<span>122</span>`

Save the instance to a constant
variable named `<span>bloodSport</span>`.

**21.**

Call `<span>.toggleCheckOutStatus()</span>` on the
`<span>bloodSport</span>` instance.

**22.**

Call `<span>.addRating()</span>` three
times on `<span>bloodSport</span>` with inputs
of `<span>1</span>`, `<span>1</span>`, and `<span>5</span>`.

**23.**

Call `<span>.getAverageRating()</span>` on `<span>bloodSport</span>`. Log the
result to the console.

**24.**

Now, create an entire `<span>CD</span>` class
using only the property, getter, and method specifications given at the
beginning of the document.

Add two more methods: `<span>.addSong()</span>`, and `<span>.shuffle()</span>`

Method `<span>shuffle()</span>`returns
a randomly sorted array of all the songs in the `<span>songs</span>` property.

**25.**

Now create a new property for parent class that uses from our
all subclasses (`<span>type</span>`)

HINT: Same as `<span>title</span>`.

**26.**

Call this new property in our constructors and supers of all.

Add type property (“history”, “action”, “drama”, etc.) for all instances
you created before.

**27.**

Create two or more `<span>CD</span>` instances
with the properties you choice.

Add songs for these CD
instances.

**28.**

Create a class named `<span>Catalog </span>`that colllects all media in it.
Write all media created by you (instances) to the new **object** (to be
created from `<span>Catalog</span>`).

Log this catalog object
to the console.

**29. CHALLANGE**

Create new instances
from using DOM. Add ratings also.

·
Reach elements by using ids or classnames. (Assign them to variables)

·
Make an onclick function for button.

·
Create your instances by using input values.

·
Write your instances
to the catalog object.

·
Print this data in DOM `<span>catalogLibrary</span>` paragraph that is already created.
