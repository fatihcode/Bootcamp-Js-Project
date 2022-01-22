# RESMİ YÜKLE

Görüntü yükleme işlevini oluşturun. Kendi başına çalışıyormuş gibi yap 😉

Amaç şudur: resimler sayfada en az bir saniyede bir görüntülenecek ve ardından kaybolacaktır. Her seferinde sayfada bir resim olmalıdır.

Resimleri proje klasörünüzde bulabilirsiniz.

ADIMLAR:

1. `imgPath`'i girdi (argüman) olarak alan bir '`createImage`' işlevi oluşturun. Bu işlev, yeni bir görüntü oluşturan (`document.createElement('img')` kullanın) ve `.src` niteliğini sağlanan görüntü yoluna (imgPath) ayarlayan yeni bir söz döndürür.
2. Ardından, onu ilgili DOM öğesine ('images' sınıfına) ekleyin ve taahhüdü çözün.
   Yerine getirilen değer konsola "görüntü yüklenmiş" olmalıdır. Veya tüm "img" öğesinin kendisini çözebilirsiniz.

Görüntüyü yüklerken bir hata olması durumunda ('hata' olayı), vaadi reddedin.

3. Resimleriniz resimler klasöründedir, çözme ve reddetme işlevini deneyin.
4. `.then`'i kullanarak sözü yerine getirin ve ayrıca bir hata işleyici (`catch`) ekleyin.

Resimlerinizin birbiri ardına yüklendiğini görün.

5. Şimdi, görüntü yüklendikten sonra yürütmeyi 2 saniye duraklatan bir 'bekle' işlevi oluşturun. Bu işlevi zincirinizin içinde kullanın.

### İpucu;

> ```
> const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
> ```
>
> Referans: geliştirici.mozilla.org

6. 2 saniye geçtikten sonra, mevcut görüntüyü gizleyin (ekranı 'none' olarak ayarlayın) ve ikinci bir görüntü yükleyin (tekrar 'createImage' kullanarak).

### İpucu;

> Geçerli görüntüyü gizlemek için `createImage` vaadi tarafından döndürülen görüntü öğesini kullanabilirsiniz. Veya doğrudan `img` öğesini gizleyebilirsiniz. Her ikisi de: bunun için global bir değişkene ihtiyacınız olacak 😉;

7. İkinci görüntü yüklendikten sonra, yürütmeyi tekrar 2 saniye duraklatın;
8. 2 saniye geçtikten sonra mevcut görüntüyü tekrar gizleyin.

***İyi Şanslar***

---

# LOAD IMAGE

Build the image loading functionality. Pretend you're working
on your own 😉

The goal is: pictures will be displayed on the page
every at least one second and then disappear. Each time one image should be on
the page.

You can find pictures in your project folder.

**STEPS:**

**1.**         Create a function 'createImage'which receives *imgPath* as
an input (argument). This function returns a new promise which creates a new image
(use document.createElement('img')) and sets the .srcattribute to the provided image
path ( *imgPath* ).

**2.**         Then, append it to the relevant
DOM element (to the 'images' class), and resolve the promise.

The fulfilled value should be “image loaded” to the
console. Or you can just resolve whole “img” element itself.

In case there is an error loading the image ('error' event),
reject the promise.

**3.**         Your images is in the images folder, try for resolve and reject functionality.

**4.**         Comsume the promise using .then
and also add an error handler (catch).

See that your images loading page one after other.

**5.**         Now, create a function 'waitFor'which pauses execution for 2 seconds
after the image has loaded. Use this function inside your chain.

HİNT:

const `<span></span>`wait `<span></span>`=`<span></span>`ms `<span></span>`=>`<span></span>`new `<span></span>`Promise(resolve `<span></span>`=>`<span></span>`setTimeout(`<span>resolve</span>`,`<span> ms</span>`));

Reference : [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

**6.**         After the 2 seconds have passed,
hide the current image (set display to 'none'), and load a second image (by
using 'createImage' again).

HINT: You can use the image element returned by the createImage promise to hide the current image. Or you can hide img element directly.
Both: you will need a global variable for that 😉;

**7.**         After the second image has
loaded, pause execution for 2 seconds again;

**8.**         After the 2 seconds have passed,
hide the current image again.

GOOD LUCK
