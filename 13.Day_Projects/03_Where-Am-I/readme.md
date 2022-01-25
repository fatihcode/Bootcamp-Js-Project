# NEREDEYİM

Bu görevde, bir ülkeyi SADECE GPS koordinatlarına dayalı olarak oluşturan bir 'whereAmI' işlevi oluşturacaksınız. Bunun için koordinatları coğrafi olarak kodlamak için ikinci bir API kullanacaksınız.

Lütfen oturum açın ve bu proje için bir API anahtarı alın. Geocodeapi belgelerine bakın.

İşte görevleriniz:

BÖLÜM 1
1.
Girdi olarak iki parametre alan bir 'whereAmI' işlevi oluşturun; bir enlem değeri (enlem) ve bir boylam değeri (lng) (bunlar GPS koordinatlarıdır, örnekler aşağıdadır).

Sağlanan koordinatların 'ters coğrafi kodlamasını' yapacaksınız. Ters coğrafi kodlama, koordinatları bir şehir ve ülke adı gibi anlamlı bir konuma dönüştürmek anlamına gelir.

Ters coğrafi kodlama yapmak için bu API'yi kullanın, onu bir değişken url'ye atayın:
“https://app.geocodeapi.io/api/v1/reverse?apikey=”

AJAX çağrısı şu formatta bir URL'ye yapılacaktır:
“https://app.geocodeapi.io/api/v1/reverse?apikey=SİZİN-API-KEY&point.lat=52.508&point.lon=13.381”

52.508 Enlem ve 13.381 Boylamdır. Bunun gibi bir format oluşturmak için bir dize bitiştirme yapabilirsiniz.

Verileri almak için getirme API'sini ve vaatlerini kullanın (.then() yöntemlerini kullanın). 😉

Fonksiyonunuzu koordinatlarla çağırın ve verilere sahip olduğunuzda, .json() kullanarak verileri okuyun ve ayrıştırın.

Sağlanan konum hakkında aldığınız tüm özellikleri görmek için konsolda bir göz atın.
Ardından, bu verileri kullanarak konsola şöyle bir mesaj kaydedin: 'Almanya ülkesi Berlin'desiniz'

Bir .catch() yöntemini söz zincirinin sonuna zincirleyin ve hataları konsola kaydedin

Bu API, saniyede yalnızca 2 istek yapmanızı sağlar. Hızlı yeniden yüklerseniz veya yanlış API anahtarı geçirirseniz; 403 kodu ile hata alırsınız. Koordinatlarınız doğru değilse 400 kodu ile hata alırsınız.

İlk .then() yönteminizde; anlamlı bir hata mesajı ile sözü kendiniz reddetmek için bir hata (yanıt yoksa) oluşturun ve atın. Takılırsanız sayfanın sonundaki ipucuna bakabilirsiniz.

BÖLÜM 2

Şimdi koordinatları almak için DOM kullanma zamanı. "Neredeyim" düğmesine bir "tıklama" olay işleyicisi yapın. displaycountry işlevini çağırın (./helper.js üzerindedir)
DOM'dan koordinatları verin ve sonucu konsolda tekrar görün.

Şimdi biraz sihir yapalım. Bir ülke oluşturmak için alınan verileri kullanın.

Bunu yapmak için, API sonucundan ilgili özniteliği alın ve (ikinci .then() dosyanızda) bunu önceki Projede (Ülke Arama) kullandığımız ülkeler API'sine takın.
(İpucu: getirmeyi tekrar kullanın)

Cevabı al ve ülkeyi oluştur ve daha önce yaptığımız gibi hataları da yakala. RenderCountry'ye veri göndermeden önce lütfen verileri yazdırın ve konsolda görün.
renderCountry ve displayCountry işlevlerini .helper.js içinde bulabilirsiniz.

TEST KOORDİNATLARI 1: 52.508, 13.381 (Enlem, Boylam)
TEST KOORDİNATLARI 2: 49.037, -123.140
TEST KOORDİNATLARI 2: -33.933, 18.474
BAŞARILAR 😀

İPUCU:
if (!res.ok) new Error(“anlamlı hata mesajı”)


---



# WHERE AM I

In
this challenge you will build a function 'whereAmI' which renders a country ONLY
based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Please
sign in and take an **API key** for this project. Look at the [Geocodeapi documentation](https://geocodeapi.io/documentation/).

Here
are your tasks:

#### PART 1

**1.**

Create
a function 'whereAmI' which takes two parameters as inputs; a latitude value (lat)
and a longitude value (lng) (these are GPS coordinates, examples are below).

**2.**

You
will do 'reverse geocoding' of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.

Use this API
to do reverse geocoding, assign it to a variable url:

“https://app.geocodeapi.io/api/v1/reverse?apikey=
“

The
AJAX call will be done to a URL with this format:

“https://app.geocodeapi.io/api/v1/reverse?apikey=YOUR-API-KEY&point.lat=52.508&point.lon=13.381”

52.508
is Latitude and 13.381 is Longitude. You can make a string concatenation to
create a format like this.

Use
the fetch API and promises (use .then() methods) to get the data. 😉

**3.**

Call
your function with coordinates and once you have the data, read and parse the
data using .json() .

**4.**

Take
a look at it in the console to see all the attributes that you recieved about the
provided location.

Then,
using this data, log a messsage like this to the console: *'You are in Berlin,
country of Germany'*

**5.**

Chain
a .catch() method to the end of the promise chain
and log errors to the console

**6.**

This
API allows you to make only 2 requests per second. If you reload fast or if you
pass wrong API key; you will get error with code 403. If your coordinates are
not true, you will get error with code 400.

In
your first .then() method; create and throw an error (if
there is no response) to reject the promise yourself, with a meaningful error message.
If you got stuck you can look at the hint at the end of the page.

#### PART 2

**7.**

Now
it's time to use DOM to take coordinates. Make an “click” event handler to the “Where
Am I” button. Call the displaycountry function (it is on ./helper.js)

Give
coordinates from DOM and see the result on console again.

**8.**

Lets
do some magic now. Use the received data to render a country.

To
do that, take the relevant attribute from the API result, and (in your second .then()) plug it into the countries API that
we have been using  **previous Project (Country Search)** .

(Hint:
use fetch again)

**9.**

Take
the response and render the country and also catch any errors, just like we have
done before. Before sending data to renderCountry,
please print the data and see on console.

You
can find renderCountry and displayCountry
functions in .helper.js

TEST
COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)

TEST
COORDINATES 2: 49.037, -123.140

TEST
COORDINATES 2: -33.933, 18.474

GOOD
LUCK 😀

#### HINT:

if (!res.ok) thrownewError(“meaningful error message”)
