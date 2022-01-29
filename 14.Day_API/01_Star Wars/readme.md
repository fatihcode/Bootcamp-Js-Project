# YILDIZ SAVAŞLARI

Bu meydan okumada, farklı starwars öğelerini oluşturan bir '`starWars`' işlevi oluşturacaksınız. “Filmler”, “gezegenler”, “yıldız gemileri” vb.

#### BÖLÜM 1

Girdi olarak bir parametre bitiş noktası alan bir '`starWars`' işlevi oluşturun .

Bu API'yi bir değişken url'ye atamak için kullanın : "`https://starwars.egghead.training/`"

AJAX çağrısı şu formatta bir URL'ye yapılacaktır:

"`https://starwars.egghead.training/films`"

Verileri almak için getirme API'sini ve vaatlerini kullanın (.then() yöntemini kullanın). 😉

.json() yöntemini kullanarak verileri okuyun ve ayrıştırın .

Farklı argümanlarla çağrı işlevi; “filmler”, “gezegenler”, “türler”, “insanlar”, “yıldız gemileri”, “araçlar”. Test için birini seçin.

Verilere sahip olduğunuzda, tüm özellikleri görmek için konsolda bir göz atın.

Ardından, bu verileri kullanarak konsola şöyle bir mesaj kaydedin: ' Starwars tarihinde 60 gezegen var' veya ' Starwars tarihinde 6 film var'.

5. Meydan Okuma

“Filmleri” uç nokta olarak kullanın ve konsola aşağıdaki gibi bir mesaj kaydedin:

"Film bölümü_4 başlığı "Yeni Bir Umut".

"Film bölüm_5 başlığı "İmparatorluk Geri Dönüyor".

"Film bölüm_6 başlığı "Jedi'nin Dönüşü"dür.

"Film bölümünün_1 başlığı "The Phantom Menace".

"Film bölümü_2 başlığı "Klonların Saldırısı".

"Film bölüm_3 başlığı "Sith'in İntikamı".

Zincir a. catch() yöntemini söz zincirinin sonuna ekleyin ve hataları konsola kaydedin.

İlk .then() yönteminizde; sözü kendiniz reddetmek için bir hata oluşturun (yanıt yoksa). Takılırsanız sayfanın sonundaki ipucuna bakabilirsiniz.

#### BÖLÜM 2

Şimdi `starWarsCount` adlı bir işlev oluşturun . StarWars işlevinin getirme ve ilk `.then() `bölümünü şablon olarak alabilirsiniz. Getirmeyi iade etmeyi unutmayın.

Zaten öğrendin; ayrıca işlevi çağırabilir ve işlevi çağırdıktan sonra veri almak için (ikinci) .then() yöntemini kullanabilirsiniz. Bu nedenle, işlevinizi farklı argümanlarla çağırın ve verileri almak için .then()'i kullanın.

Sonuçları konsolda tekrar görün.

DOM'da mesaj yazalım.

Tüm argüman çağrılarını almak için Promiss.all kullanın . (3. maddeye bakın)

Promise.all'dan sonra .then () yöntemini kullanın ve her öğenin numarasını DOM'a yazın.

Örnek : “ Starwars tarihinde 60 gezegen var”.

Zincir a. catch() yöntemini söz zincirinin sonuna ekleyin ve hataları konsola kaydedin.

11. Ek Adım

Zincir a. nihayet() yöntemini söz zincirinin sonuna getirin ve 5 saniye sonra img starship-1'in kaynağını starship-2 olarak değiştirin.

12. Ek Adım Mücadelesi

Düğmeye bir olay işleyicisi oluşturun. Düğmeye tıkladığınızda görüntü rastgele değişmelidir. Görüntünün kaynağını api'den ("yıldız gemilerinden") alın.

#### İPUCU:

iade sözü . reddet ( Hata ( "Başarısız yanıt" ));

![Google Çeviri](https://www.gstatic.com/images/branding/product/1x/translate_24dp.png)

# Orijinal metin

Use this API to and assign it to a variable url: “https://starwars.egghead.training/“

---

# STAR WARS

In
this challenge you will build a function 'starWars' which renders different
starwars elements. Like “films”, “planets”, “starships”, etc.

#### PART 1

**1.**

Create
a function *'starWars'* which takes one parameter *endpoint*as an input.

**2.**

Use this API
to and assign it to a variable  *url* :
“https://starwars.egghead.training/“

The
AJAX call will be done to a URL with this format:

“https://starwars.egghead.training/films“

Use
the fetch API and promises (use .then() method) to get the data. 😉

Read
and parse the data using *.json()* method.

**3.**

Call
function with different arguments; “films”, “planets”, “species”, “people”,
“starships”, “vehicles”. Choose one for testing.

**4.**

Once
you have the data, take a look at it in the console to see all the attributes.

Then,
using this data, log a messsage like this to the console: ‘ *There are 60
planets in Starwars history' or  * ‘*There
are 6 films in Starwars history'.*

**5.
Challenge**

Use
“films” as endpoint and log a messsage like below to the console:

*“Film
episode_4 title is "A New Hope".*

*“Film
episode_5 title is "The Empire Strikes Back".*

*“Film
episode_6 title is "Return of the Jedi".*

*“Film
episode_1 title is "The Phantom Menace".*

*“Film
episode_2 title is "Attack of the Clones".*

*“Film
episode_3 title is "Revenge of the Sith".*

**6.**

Chain
a .*catch()* method to the end of the promise chain
and log errors to the console.

**7.**

In
your first *.then()* method; create an error (if there is
no response) to reject the promise yourself. If you got stuck you can look at
the hint at the end of the page.

#### PART 2

**8.**

Now
create a function called  *starWarsCount* . You can take the fetch and first
.then() part of the *starWars* function as template.  Don’t forget to return fetch.

You
learned already; you can also call the function and use (second) .then() method
for getting data after calling the function. So call your function with
different arguments and use .then() to retrieve data.

See
the results on console again.

**9.**

Lets
write messages in DOM.

Use
*Promiss.all* for taking all arguments call. (look
at item 3)

Use
*.then()* method after *Promise.all* and write the number of every
element to the DOM.

Sample
: “*There are 60 planets in Starwars history”.*

**10.**

Chain
a .*catch()* method to the end of the promise chain
and log errors to the console.

**11.
Additional Step**

Chain
a .*finally()* method to the end of the promise chain
and change the source of the img starship-1 to starship-2 after 5 seconds.

**12.
Additional Step Challenge**

Create
a event handler to the button. When you click button image should change
randomly. Take source of the img from api (from “starships”).

#### HINT:

return Promise.reject(Error("Unsuccessful response"));
