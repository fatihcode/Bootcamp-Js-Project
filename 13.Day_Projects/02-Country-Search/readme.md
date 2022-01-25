# ÜLKE ARAMA

Bu Projede bir ülke arama web sayfasını düzelteceğiz. Bu sayfa bir API ile çalışır ve Ülkelerin temel bilgilerini ve bayrağını gösterir.

1.
İlk önce bir parametre alan getCountry fonksiyonunu oluşturmalısınız; ülke.


2.
İşlevin içinde url değişkeni oluşturun ve değerini şu adrese atayın: “https://restcountries.com/v3.1/name/”

Bu url'yi tarayıcınızda biten bir ülke adıyla deneyin, sonucu görün.

Yeni operatörü kullanarak yeni bir XMLHttpRequest nesnesi oluşturun ve bunu request adlı bir const'a kaydedin.
4.
İstek nesnesinin answerType özelliğini 'json' olarak ayarlayın.

İstek nesnesinin onreadystatechange olay işleyicisine boş bir anonim ok işlevi kaydedin. Bu fonksiyon herhangi bir parametre almaz.
Anonim işlevin kod bloğunun içine aşağıdaki kodu ekleyin:
if (request.readyState === XMLHttpRequest.DONE) {
const [veri] = request.response;
  renderCountry(veri);
}
renderCountry işlevi ./helper.js adresinde görüntülenebilir.

Yeni oluşturduğunuz anonim işlevin altında, getCountry işlevinin içinde, istek üzerine .open() yöntemini çağırın ve ilgili argümanlar olarak 'GET' ve url adını (ülke parametresiyle birleştirme yapın) iletin.
7.
Düğmeye bir olay dinleyicisi tıklayın ve içindeki displayCountry işlevini çağırın. ( displayCountry işlevi ./helper.js adresinde görüntülenebilir)
8.
Şimdi sayfanızın sunucudan doğru API aldığını görün.

İKİNCİ KISIM

Bir parametre alan getCountryAndNeighbour işlevi oluşturun; ülke. Tüm adımlar bu işlevin içinde olacaktır.
10.
Fonksiyonun içinde; bu değerlerle url ve alfa değişkenleri oluşturun;
url : “https://restcountries.com/v3.1/name/”
alfa : “https://restcountries.com/v3.1/alpha/“

Yeni operatörü kullanarak yeni bir XMLHttpRequest nesnesi oluşturun ve bunu request adlı bir const'a kaydedin. İstek nesnesinin answerType özelliğini ayarlamayın.
12.
İstek nesnesinin load olay işleyicisine boş bir anonim ok işlevi kaydedin. Bu fonksiyon herhangi bir parametre almaz.
Anonim işlevin kod bloğunun içine aşağıdaki kodu ekleyin:
const [veri] = JSON.parse(this.responseText);
  renderCountry(veri);
}
renderCountry işlevi ./helper.js adresinde görüntülenebilir.

Verileri konsola yazdırın ve veri türünü anlamaya çalışın.

Az önce oluşturduğunuz anonim işlevin içinde, değişken bir komşu oluşturun ve onu ülkenin border dizisinin ilk öğesine atayın.
Komşu sonucu yoksa, sadece geri dönün (işlevinizden çıkın).


15.
Bu satırın altında request2 adlı ikinci bir istek değişkeni oluşturun ve istek için yaptığınızın aynısını yapın.


17.
renderCountry çağrısına ikinci bir "komşu" parametresi (dize olarak) ekleyin. Düşünün, neden ikinci parametre gönderiyoruz?

Her ikisi de iki istek olan açma ve gönderme yöntemlerini (birinci bölüm gibi) eklemeyi unutmayın.

İPUCU:
Ülke için url, komşu için alfa kullanın

Bir olay dinleyicisi ekleyin, düğmeye tıklayın ve içindeki displayCountries işlevini çağırın. ( displayCountries işlevi ./helper.js adresinde görüntülenebilir)
18.
Şimdi sayfanızın sunucudan doğru API aldığını görün (Ana ülke ve bir komşu).


---



# COUNTRY SEARCH

In this Project we will
fix a country search web page. This page working with an API and Show countries
basic informatin and flag.

**1.**

First You should create
`<span>getCountry</span>` function which takes one
parameter; country.

**2.**

Inside the function, create `<span>url</span>` variable and assign its value
to : “https://restcountries.com/v3.1/name/”

Try this url with a country name ending in your browser, see the
result.

**3.**

Create
a new `<span>XMLHttpRequest</span>` object using the `<span>new</span>` operator, and save it to a `<span>const</span>` called `<span>request</span>`.

**4.**

Set
the `<span>responseType</span>` property of the `<span>request</span>` object to be `<span>'json'</span>`.

**5.**

Save an
empty anonymous arrow function to the onreadystatechange event handler of the request object. This function will not take in any parameters.

Inside
the anonymous function’s code block, include the following code:

if (request.readyState === XMLHttpRequest.DONE) {

    const[data] = request.response;

    renderCountry(data);

}

The renderCountry function can be viewed at **./helper.js**

**6.**

Below
the anonymous function you just created, inside the `<span>getCountry</span>`
function, call the `<span>.open()</span>` method on `<span>request</span>`, and pass it `<span>'GET'</span>` and `<span>url</span>` name (make concatenation with the country parameter) as
respective arguments.

**7.**

Add an event listener `<span>click</span>` to
the button and call `<span>displayCountry</span>` function
in it. (The `<span>displayCountry</span>`function
can be viewed at **./helper.js**)

**8.**

Now see your page is taking correct API from server.

**SECOND PART**

**9.**

Create `<span>getCountryAndNeighbour</span>`
function which takes one parameter; country. All steps will inside this
function.

**10.**

Inside the function; create `<span>url</span>` and `<span>alpha</span>` variables with this values;

url : “https://restcountries.com/v3.1/name/
“

alpha : “https://restcountries.com/v3.1/alpha/“

**11.**

Create
a new `<span>XMLHttpRequest</span>` object using the `<span>new</span>` operator, and save it to a `<span>const</span>` called `<span>request</span>`. Do
not set the `<span>responseType</span>` property of the `<span>request</span>` object.

**12.**

Save an
empty anonymous arrow function to the load event handler of the request object. This function will not take in any parameters.

Inside
the anonymous function’s code block, include the following code:

const [data] = JSON.parse(this.responseText);

  renderCountry(data);

}

The renderCountry function can be viewed at **./helper.js**

**13.**

Print data to console and try to understand
data type.

**14.**

Inside
the anonymous function you just created, create a variable neighbour and assign
it to the first item of the borders array of country.

If no
neighbour result, just return (quit
your function).

**15.**

Below this line create
a second request variable named `<span>request2</span>` , and
do the same what you did for `<span>request</span>`.

**17.**

Add a second parameter  `<span>“neighbour”</span>` (as a string) to the `<span>renderCountry</span>` call. Think, why are
we sending second parameter?

**16.**

Dont forget to add open and send methods (like part one), both two
requests.

HİNT:

Use `<span>url</span>` for `<span>country</span>`, `<span>alpha</span>` for `<span>neighbour</span>`

**17.**

Add an event listener `<span>click</span>` to
the button and call `<span>displayCountries</span>` function
in it. (The `<span>displayCountries</span>`function
can be viewed at **./helper.js**)

**18.**

Now see your page is taking correct API from server (Main
country and it’s one neighbour).
