# REBRANDLY

Bu alıştırmada, bir URL'yi kısaltmak için Rebrandly API'sine bir POST isteğinde bulunacaksınız.

Henüz Rebrandly'den bir API Anahtarına kaydolmadıysanız, lütfen Rebrandly URL Kısaltıcı API sayfasını okuyun. Bu alıştırmalarda API anahtarınızı kullanmanız uygun olsa da anahtarınızı kimseyle paylaşmamanız gerektiğini unutmayın.

Rebrandly API Anahtarınızı kopyalayın ve kodunuzun en üstündeki const apiKey'e atayın.
Kontrol Noktası 2 Geçildi

ShortUrl() kod bloğu içinde, urlToShorten adlı bir const oluşturun ve buna inputField.value dosyasını kaydedin. urlToShorten şimdi giriş alanının değerini kaydedecek
Not: Bu alıştırmanın talimatlarının geri kalanında, shortUrl() kod bloğunun içinde çalışacağız!
Kontrol Noktası 3 Geçildi

data adında bir const oluşturun ve buna aşağıdaki kodu kaydedin:
JSON.stringify({hedef: urlToShorten});
API, URL değerine sahip bir anahtar hedefi olan bir nesne görmeyi beklediği için bu bilgileri dahil ediyoruz.
Kontrol Noktası 4 Geçildi

Yeni operatörü kullanarak yeni bir XMLHttpRequest nesnesi oluşturun ve onu xhr adlı bir const'a kaydedin.
Kontrol Noktası 5 Geçildi

xhr nesnesinin answerType özelliğini 'json' olarak ayarlayın.
Kontrol Noktası 6 Geçildi

xhr nesnesinin onreadystatechange olay işleyicisine boş bir anonim ok işlevi kaydedin. Bu fonksiyon herhangi bir parametre almaz.
Anonim işlevin kod bloğunun içine, kod bloğunun içine aşağıdaki kodu ekleyin:
if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
renderResponse işlevi ./helper.js adresinde görüntülenebilir.
Kontrol Noktası 7 Geçildi

Az önce oluşturduğunuz anonim işlevin altında, xhr'de .open() yöntemini çağırın ve ilgili argümanlar olarak 'POST' ve url'yi iletin.
Kontrol Noktası 8 Geçildi

Rebrandly API'sine erişmek için iki anahtar/değer çiftine sahip bir başlığa ihtiyacımız var. Başlıkta, 'Content-type' ve bir 'apikey' için değerler eklemelisiniz.
Başlığı ayarlamak için .open() yöntemimizin altına aşağıdaki kodu eklemeliyiz.
xhr.setRequestHeader('İçerik türü', 'uygulama/json');
xhr.setRequestHeader('apikey', apiKey);
Kontrol Noktası 9 Geçildi

xhr'de .send() yöntemini çağırın ve verileri argüman olarak iletin.
Kontrol Noktası 10 Geçildi

Bu URL'yi giriş alanına girin ve web sayfasındaki kısalt düğmesini tıklayın. (bir onclick olay işleyicisi yapın ve displayShortUrl işlevini çağırın)
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader

çok daha temiz değil mi


---



# REBRANDLY

In this exercise,
you’ll be making a POST request to the Rebrandly API to shorten a URL.

If you haven’t already signed up for an API Key from
Rebrandly, please read [Rebrandly URL Shortener API](https://developers.rebrandly.com/docs/get-started) page. Keep in mind, while it’s ok to use your
API key in these exercises, you should **not** share your key with
anyone.

**1.**

Copy your Rebrandly API
Key, and assign it to the `<span>const apiKey</span>` at
the top of your code.

Checkpoint 2 Passed

**2.**

Within the code block
of `<span>shortenUrl()</span>`, create
a `<span>const</span>` called `<span>urlToShorten</span>`, and
save `<span>inputField.value</span>` to
it. `<span>urlToShorten</span>` will
now save the value of the input field

Note: for the remainder
of this exercise’s instructions we will be working inside the code block of `<span>shortenUrl()</span>`!

Checkpoint 3 Passed

**3.**

Create a `<span>const</span>` called `<span>data</span>`, and
save the following code to it:

```
JSON.stringify({destination: urlToShorten});
```

We’re including this
information because the API expects to see an object with a key `<span>destination</span>` that
has a value of a URL.

Checkpoint 4 Passed

**4.**

Create a new `<span>XMLHttpRequest</span>` object
using the `<span>new</span>` operator, and save it to
a `<span>const</span>` called `<span>xhr</span>`.

Checkpoint 5 Passed

**5.**

Set the `<span>responseType</span>` property
of the `<span>xhr</span>` object to be `<span>'json'</span>`.

Checkpoint 6 Passed

**6.**

Save an empty anonymous
arrow function to the `<span>onreadystatechange</span>` event
handler of the `<span>xhr</span>` object.
This function will not take in any parameters.

Inside the anonymous
function’s code block, include the following code inside of its code block:

```
if (xhr.readyState === XMLHttpRequest.DONE) {

  renderResponse(xhr.response);

}
```

The `<span>renderResponse</span>` function
can be viewed at  **./helper.js** .

Checkpoint 7 Passed

**7.**

Below the anonymous
function you just created, call the `<span>.open()</span>` method
on `<span>xhr</span>`, and pass it `<span>'POST'</span>` and `<span>url</span>` as
respective arguments.

Checkpoint 8 Passed

**8.**

To access the Rebrandly
API, we need a header with two key-value pairs. In the header, you must include
values for `<span>'Content-type'</span>` and
an `<span>'apikey'</span>`.

To set the header, we
have to include the following code below our `<span>.open()</span>` method.

```
xhr.setRequestHeader('Content-type', 'application/json');

xhr.setRequestHeader('apikey', apiKey);
```

Checkpoint 9 Passed

**9.**

On `<span>xhr</span>`, call
the `<span>.send()</span>` method, and pass
it `<span>data</span>` as an argument.

Checkpoint 10 Passed

**10.**

Enter this URL into the
input field, and click the shorten button in the web page. (make an onclick
event handler and call `<span>displayShortUrl</span>`
function)

```
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
```

Isn’t it much cleaner?
