# KAPI SEÇ

Göreviniz, oynamak bir oyun oynayan tek sayfalık bir web sitesi oluşturmaktır. Dinamik bir web sitesi oluşturmak için HTML, CSS ile uyumlu ve etkileşime'in şekilde gösterilecek.

İster inanınmayın, bu kadar eşya düzeninden bir mantığa sahiptir. Sabırlı olun, yaratıcı riskler alın ve en eğlencelinin!

index.html , style.css ettik script.js'de onu seferinde Bir adım olmak Üzere işlevsellik oluşturacaksınız . Başlamak için projenizde zaten neler olup bittiğini bir süredir devam etmektesiniz.

Şimdi ilk hedefiniz, korkunç FindFly'ı gizleyecek bir kapı inşa etmek.

Bak index.html kod. İçinde `<body>` , bir oluşturmak `<div>` sınıfı sınıf öğe "kapı satır" . Ardından, bu `<div>` icinde `<img>` alt öğesi oluşturun.

İpucu: HTML öğelerinizin tam olarak içten geçtiğinden emin olun:

Proje kapsamında; `<img>` öğesinin src İçindeki door_closed görüntüsünü KULLANIN .

Oyununuz için kapalı olmak için yenileyin.

Kullanıcının bu bölümüne üzerine yazılabilir.

Bu `<img>` öğesine , door_a değeriyle Bir id niteliği atayın. Bu koyun id önce src.

İpucu: kimlik değerinizin tırnak içinde olan kişilerden emin olun :

Bu orijinal CSS'ye dahil etmek, üzerine geldiğinizde içinde olmak üzere buradaki mağazalardan satın almanıza izin vereceksiniz.

style.css Başlangıç koduna Gidin ettik #door_a Için Bir CSS Kimliği seçici oluşturun . Gövde seçicinin Altındaki bu seçicinin icinde , imleç özelliğine işaretçi değerini atayın .

Sayfayı yenileyin ve size uygun olmayanlar için gelmezimlecin bir işaretçiye dönüştüğüne dikkat edin.

Hedefçinin amacı, kullanıcıya kapalı kapıya yakın olduğundan emindir. CSS bunu mümkün kıldı; ancak bu tıklamanın Bir Şeyler yapmasını sağlayan JavaScript'tir .

Tüm JavaScript mantığı script.js dosyasına yazılacaktır, ancak bu Mantığın HTML ile etkileşime girmesi Için Önce script.js Sayfası ile index.html Arasında Bir Bağlantı kurmanız Gerekir . Gelen index.html ürün, bir oluşturmak `<script>` yönlendirme elemanı `</ body>` etiketinin. Açılış İçinde `<script>` etiketi, set tipi olarak "text / javascript" ve src olarak "script.js" . hemen öğeyi hemen bir `</script>` kategoriyle ilgili .

script.js dosyasına Gidin . DoorImage1 adlı küresel bir görünüme kavuşur . Bu küresel değişkeni , door_a kimliğine Sahip HTML öğesine atamak Için Bir JavaScript DOM method KULLANIN .

İpucu: .getElementById () DOM yöntemini KULLANIN .

İçinde script.js dosyasıyla , global değişikliğinde, atama doorImage1.click yeni, boş bir okşanne.

Bu fonksiyon, ilk kapı unsuru detaylandırılacaktır.

Şimdi FindFly ile açık bir kapı için üzerine girdiğiniz kapıdan.

Dogrudan, olarak ilk doorImage1 küresel değişkeninizin Altında, flyDoorPath Adinda Yeni Bir Küresel Değişken oluşturun . Değerininizdeki klasördeki “fly.png” resim için seçim yapın

İpucu: URL yolunun içine çocukluktan emin olun:

sonradan , içinde doorImage.onclick ok işlevli src ait doorImage1 içinde flyDoorPass .

Sayfayı yenile. Şimdi kapıya tıkladığınızda, kapalı kapın sizi ev iş karşılamasıyla hazır FindFly'a dönüşmesini izleyin!

### ipucu

Bir değiştirin src kullanılabilir, başka bir tarafından yeniden gözden geçirilebilir: yeni bir atanabilir

değişkenA . kaynak = yol ;

Bir kapı almak ve bir kapı için ilk hedefinizi tamamladınız. Şimdi , ilk kapınız olarak aynı ana `<div>` içinde iki tane daha kapalı kapı ekleyeceksiniz .

Orjinal `<img>` öğenizin Altında , iki yeni `<img>` öğesi oluşturun onlara ettik orijinal `<img>` öğenizle Cardio src'yi atayın . Ancak Bunların çoğu yerin epey kimliği Değerleri sırasıyla door_b ettik door_c Olarak atanacaktır . Yerleştirmek için emin olun id önce src .

İyi bir program olmak, KURU için yaşanabilecek olanın en olası geleceğinizi (“kendi kendini tekrarlama”). style.css koduna bakıldığında, sadece sadece Cardio imleç özelliğini vermek Için #door_b ettik #door_c seçicileri olusturmak tekrarlanabilir Için CSS kimliği .

index.html uzantısına geri dönüş ve her resme yeni bir kapı çerçevesi sınıfı atayın . Sınıfı id ve src yerine yerleştireceğinizin emin olun .

Kimliği ettik sınıfı bu Sırayla listelemek, CSS özgüllüğünün (tarayıcının hangi CSS stillerinin görüntüleneceğine karar verme sırası) önemli Diğer Bir hatırlatıcısıdır .

İpucu: Bir `<img>` öğenin sınıf eğitiminde id ama daha önce src :

ardından , style.css dosyasında CSS sınıf seçmesini elde etmek ve başarı ve başarı şansı ve değerleri atayın:

* imleç - işaretçi
* dolgu - 10 piksel

Her yeni CSS özelliğinden yararlandıktan sonra yenileyin, onu bir değerin içinde nasıl istediğinizi görebilirsiniz.

.door-çerçevenin sınıf seçicisi # door_a'yı gereksiz kıldığı Için #door_a İD seçicisini Silin .

Artık kapınız var ve imleç üçü için de üzerine gelinmesi bekleniyor; ama sadece ilk kapınız. Put JavaScript o on iki Kapıları açmak Için çalışmalara!

Senin git script.js uzantısı ve iki yeni küresel boyutlar oluşturmak doorImage2 ve doorImage3 . Bir kullan JavaScript bu yöntemleri kullananları atamak için DOM HTML ile elementlerin id ait kapı_b ve kapı_c tercihleri.

Senin alt doorImage1.onclick () ok fonksiyon vermek doorImage2 ve doorImage3 her biri kendi .onclick () fonksiyonlarını ok. Bu işlevler şimdilik boş olacak.

DoorImage1.click() döndürmeden kopyalayıp yapıştırmaya karar vermenize, hayır döndürmeye dikkat edin - yoksa FindFly'ınız olur!

Bunun için hazır olmak için önceden hazırlanmış global bir okyanustan haberdar olma ve bu URL'yi "ocean.png" yolu olarak atayın.

Daha sonra, jungleDoor yolunda başka bir global görünüm ve bu URL dizesini “forest.png” yolu olarak atayın.

Şimdi boş İçindeki .onclick () İşlevleri doorImage2 ettik doorImage3 , yazma kodu böylece doorImage2 okyanus görüntüye değişecek ettik doorImage3 tıklandığında orman görüntüsüne değişecektir.

Şimdi yeni kapınızda, her bir kapıya tıklayın.

Üç kapınız var ama hepsi sol üst köşede toplanmış durumda. index.html ve style.css sayfalarınızı genişleterek web sitenize biraz renk ve simetri kazandırın .

Açılış `<body>` etiketinden hemen Sonra, "başlık" sınıf Adıyla Yeni Bir `<div>` öğesi oluşturun . Bu yeni `<div>` Üst öğesinin içinde, ile yaratabilirsiniz başlığı Için Bir `<h1>` alt öğesi oluşturun.

In style.css dosyası Altında vücut seçicinin ancak yukarıda kapı çerçevesi seçicisi, bir olusturmak başlık CSS seçici atamak ettik background-color Değeri # 00FFFF . Sayfayı yenilerseniz, artık görünür görünür hale gelir; ama hala sol köşede. text-align özelliğine merkezi Değeri atayın .

İyi iş - oyun unvanınız var. Şimdi oyun talimatları yazma programı. İlk olarak, bu güzel araç için bir başlık oluşturalım ve bu başlıkn onun iki yanında bir yıldızla çevreleyelim.

<div class = "header"> öğesinin Altında, ancak <div class = "kapı-satır"> öğesinin uzerinde, "title-satır" sınıf Adıyla Yeni Bir <div> öğesi oluşturun . Bu öğenin içinde, star.svg yolunu kullanarak iki görüntü izleyin.

Sayfa yenileyin ve başlığın gidişi `<div>` sayfalarının üst kısmından üstlenmiş iki küçük yıldızınızı görmenizi sağlar .

İki yıldız, herhangi bir CSS olmadan, sol üstde dinlenirken `<div>` . Bir fark sabeden mi? Diyelim bu yerleştirmek için yerleştirme.

style.css dosyasına Gidin ettik .Header CSS seçicisinin Altında .title sıralı Için Yeni Bir seçici oluşturun . Bu seçim için özellikler bu değerlerle atayın:

* üst kenar boşluğu - 21 piksel
* kenar boşluğu-alt - 21px
* metin hizalama - orta

Yıldızların orta aldığın emin olmak için yenileyin.

Şimdi başlık başlığını oluşturmak için.

Yıldız resimlerinin arasina, "talimatları-title" sınıf adına Sahip Bir `<p>` kardeş öğesi yerleştirin . Tür Talimatlar bu iç `<p>` elemanı.

Metin ve ortalanmış görünümde görünen hala üzerinde çizgiler var. aynı satıra koyun.

Bir Oluşturma .instructions-başlık göster sizin Altında CSS seçici .title sıralı seçicisi atamak ettik Ekran , Tesisi başlık yerleştirecektir Bir Değer satır içi yıldızlarla.

Kodunuzu iyileştirir ve yıldızların başlığında şimdi aynı satırda nasıl görüneceksiniz.

Maalesef maalesef ki, Talimatları zor. Başlığınızın görünürlüğünün içinde biraz CSS kullanılır.

Senin bak .instructions-başlık tekrar CSS kuralı ettik Altında Kendi Değerleri ile aşağıdaki Özellikleri eşleştirmek ekran Özelliği:

* yazı tipi boyutu - 18 piksel
* renk - #00ffff
* yazı tipi ailesi - 'İş Sans'

Her yeni CSS özelliğinden sonra kodunuzu kullanın, onunla bir değerininizi nasıl görebilirsiniz.

Şehirde hedeflemekte olan bir işletmeyle çalışmak, hedeflenen bir şekilde görünür bir şekilde görüntülenebilir. Sen stile talimatlarını görüntülemesi için bir HTML tablo çizimi. Bu yola dikkat edecekler ile numara sıraya sırayadır.

Gelen index.html altyapısına `<div class = "title satır">` elemanı, yeni oluşturmak `<tablo>` sınıf adı "talimatları sıralı" . Bunun içinde iki özdeş boş `<tr>` ile ilgili bilgiler .

Her `<tr>` tdn içine yerleştirilmiş iki < alt öğe olmalıdır:

* Her çiftinin ilk `<td>` , "talimat-numarası" sınıfına sahiptir .
* Her çocuğun çiftinin ikinci `<td>`'si "instructions-text" sınıfına sahiptir .

Her biri arasında `<td>` </ td> ile donanımın seçimi sınıfı, numara 1 ile 4 , bu iki <td </ td> gözde numaralandırılır.

Her `<td>` öğesini "talimatı metin" sınıfıyla Sırayla Aşağı inerek , oyuna on iki yönü kopyalayıp Sırayla yapıştırın:

* Görevin, FindFly'a çarpmadan tüm kullanıma yönelik.
* Oğul'a kadar FindFly'dan kaçınmadan başarırsanız, kazanırsınız!

Oyun için yön göstergesinde olmak üzere kodunuzu ve sayfanızı yenileyin.

Artıklar artık listelenmiş da, bu talimatların teknik detayı ve küçük ayrıntısında.

In style.css oluşturmayı oluşturmak .in sıralamalı CSS seçmecileri.instructions-başlık seçicisi ve puanları ve değerleri atamak:

* kenar boşluğu - 0 otomatik
* genişlik - 500 piksel

Her yeni CSS özelliğinden sonra- yenileyin, onu bir değer.eğitiminizi nasıl görebilirsiniz .

Bunun için, öğretimi seçmeyi başarı ve hakkaniyet ve değerleri bir atayın:

* sağ dolgu - 25 piksel
* yazı tipi ailesi - 'İş Sans'
* yazı tipi boyutu - 36 piksel
* renk - #00ffff

Her yeni CSS özelliğinden sonra- yenileyin, onu bir değer.eğitiminizi nasıl görebilirsiniz .

Oğlu olarak, Gösterilen sıkıcıdır Altında .instructions metin seçiciyi oluşturun aşağıdaki ozellikleri ettik Değerleri atayın ettik:

* dolgu - 10 piksel
* yazı tipi ailesi - 'İş Sans'
* yazı tipi boyutu - 14 piksel
* renk - #ffffff

Her yeni CSS özelliğinden sonra-yenileyin, onu bir değer.eğitiminizi nasıl görebilirsiniz .

Ortaladığınızları için talimatla ortalamanız gerekir.

In style.css altında .instruction metin CSS seçmesi, bir ekleme .door sıralı CSS'leri seçme ve atamak text-align , tesisi deneyimi merkezi .

Ülke ve ortalanmış üç kodu için yenileyin.

HTML etkisinden oluşur.

Altında <kapı sıralı> göster sizin unsuru index.html sayfasında, yeni olusturmak `<div>` Bir Ile eleman id ait "start" adı sınıf ettik "start-Sira" . İpucu İyi şanslar! aradaki `<div>` </ div> işaretleri .

İyi şanslar görmek için yenileyin ! soldaki kapıların altında görünür.

In style.css dosyası, onun CSS seçicisi Altında, bir olusturmak .start sıralı Aşağıdaki Özellikleri Değerleri atama CSS seçici ettik:

* kenar boşluğu - otomatik
* genişlik - 120 piksel
* yükseklik - 43 piksel
* yazı tipi ailesi - 'İş Sans'
* arka plan rengi - #eb6536
* dolgu üstü - 18 piksel
* yazı tipi boyutu - 18 piksel
* metin hizalama - orta
* renk - #010165
* kenar boşluğu-alt - 21px
* imleç - işaretçi

Kodunuzu ayrıcalıklı ve onun yeni CSS özelliğinden sonra yenileyin, onu bir değerin .start-row'unuzu nasıl görebilirsiniz .

Bu, basit bir içerik ve CSS eklemesiydi, ancak oyunzun içinde değil, aynı zamanda uygun olan şık bir görünüm ile kullanıcı görünüşte başlayacak.

HTML yapınız ve CSS manipülelerinizden yararlanmaz bir oyun gibi görünmeye başlarken; ama FindF'ın her zaman nerede saklandığını bir oyun ne işe yarar? JavaScript, FindFly'ı gizlemekyen trafik oluşturmanıza yardımcı olarak bu sorunu gidermenize yardımcı olacaktır.

Senin icinde script.js dosyası, küresel değişkenler Altında, bir olusturmak randomFindDoorGenerator () ok fonksiyonu bindiği dalı kestiğini kullanarak işlevini.

Bu işlevin yararının çalışması için yeni global uyarlamadır.

numClosedDoors küresel değişkenini oluşturun ettik değerini Oyundaki kapı miktarına ayarlayın.

FindFly'ın her zaman ilk tasarımında, bir metin bölümündeki FindFly'ın önümüzdeki sezon için tasarlanacak.

Gelen randomFindDoorGenerator () büyütmek , bulmakDoor alır ve kendi haline dönüştürmek Matematikrasgele arasında bir tam sayı üretecektir , 0 ve 2 .

Bunu yapmak için, bu Matematik bunu kullanacaktır:

1. Math.random () işlev arasında bir ondalık oluşturmak için 0 ve 1 .
2. NumClosedDoors bir çarpanı olarak değiştirin Math.random () işlev arasında bir ondalık değer üretmek için , 0 ve 2 .
3. Math.floor () en yakın tam sayıya bu ondalık değeri yuvarlanacak.
4.

Artık randomFindDoorGenerator () öğeniz rasgele üç olasi değerden ( 0 , 1 Veya 2 ) Birini oluşturduğuna kan, bu olasi değerlerin onun Birini FindFly'ın saklanabileceği Farklı Bir kapıya Assigned mantığı yazmanın zamanı geldi.

Olarak ilk, openDoor1 , openDoor2 ettik openDoor3 küresel değişkenlerini oluşturun , ancak bunlara küresel Olarak HERHANGİ Bir Değer atamayın. RandomFindDoorGenerator () işlevinizde bunlara Değerler atanacaktır .

İpucu: Use let bir değer değiştirecek olanlar için kullanın.

İçinde randomFindDoorGenerator () ettik Dogrudan Altındaki Matematik fonksiyonu, yazma Bir Eger / else if / else onu koşul mümkündür Açıklamada findDoor Değeri 0 , 1 , 2 .

İpucu: findDoor ya olan 0 , 1 ya da 2 , yana koşullardır.

Hern FindFly tutan farklı bir kapısı olmalıdır.

Olduğundan Bu 3 KOŞULLAR var Eger / else deyimi, atamak flyDoorPath Farklı değişkeni opendoor böylece Küresel değişkeni openDoor1 atanan flyDoorPath tek Bir şartla değişkeni, openDoor2 atanan flyDoorPath Başka koşul Altında Değişken ettik openDoor3 atanan flyDoorPath oğul DURUMDA DEĞİŞKEN.

Altında kod bu üç bloktan onu biri icinde opendoor atandığı flyDoorPath değişkeni, Diğer atamak opendoor o biri atanır, böylece Küresel değişkenleri oceanDoorPath Değişken Diğer atanan ettik forestDoorPath değişkeni.

Şimdi üç .onclick() bakınmıza. Bugünkü durumda, hangi resim yolunun açık bir şekilde devletler bölümünün gerçek yerini alacak src . Onun .onclick () işlevindeki bu açık değişkenleri Bir opendoor değişkeniyle değiştirin , böylece doorImage1.src değerinin openDoor1 Olarak degişmesi vb.

`randomFindDoorGenerator()` konaklaman çalışıp çalışmadığını görmek için onu aramalısınız! İşlev çağrısını script.js dosyasının tr Sonuna Yazin.

Sayfanın yenilenmesinde FindFly'ın farklı bir görünüm görünmediğini kontrol edin. Oyun saat tam olarak oradaki da, kullanıcı etkileşimlerine yanıt veren dinamik bir web oluşturma noktasından geçiyorsunuz.

Kazanan inşamak

iki önemli rol hizmet eden `playDoor()` adlı bir düzenleme oluşturmanız :

1. `numClosedDoors` değişkenini azaltır . Bunun için, bir girişte kapınızda, tıka basa mevcut olacak birer birerdendir.
2. Oyunu kazananın `(numClosedDoors == 0)` karşılanmadığını kontrol eder ve oluşursun bir `gameOver`'ı çağırır (ki daha fazla sonra yazacaksınız).

Gelen script.js uzantısı, sağ küresel biçimler listenizin adı verilen adı verilen bir boş yaratmak için `playDoor()` .

Bu `playDoor()` İşlevi icinde, onu çağrıldığında `numClosedDoors` değişkenini azaltmak Için kod Yazin .

İpucu: Bu birkaç yolda; bunlardan biri eksiltme operatörünü kullanmaktır.

Önceki adımdaki kodun , oyununa ulaşılabildiğine ulaşılamayan bir şey . Öyleyse, bir GameOver() İşlevi çağırın (yine - bu GameOver () İşlevi henüz oluşturulmadı).

### ipucu

Kazanma Koşulu Oyunu Oyna, numClosedDoors değişkeninin 0 değerine Eşit OLMASIDIR , bu nedenle karşılanıp karşılanmadığını Kontrol etmek ettik GameOver () öğesini çağırmak Için :

Tüm Önemli olan playDoor () İşlevi yazılmıştır, ancak şimdi soru, script.js dosyanızın neresinde bu işlevin çağrılması gerektiğidir? Eğer numClosed Doors'u seçerseniz , o aracı azalan bir kapıdan açmışsınızdır . Üç kapı parçasının .onclick() , bir bölüm açıldığı. Onun icinde Altında ettik Olayın playDoor () işlevini çağırın .

Oyunlar inşaa edilerek yaygınlaştırılır, oynanırda bir oynanır. Eger (numClosedDoors === 0) Kazanan Bir durumdur, bir oyuncu azaltmak Için (o açtı safra) Birden çok kez Cardio Kapıyı tıklayabilirsiniz numClosedDoors Aşağı Değer 0'a zafere / Yolunu “hile” ve. Oyununuzu oluşturmak için çok çalıştınız - oyuncunuza faydalına izin vermek!

Onun dışında bir kez tıklanabilir yapmak için mantığa var. Senin üstünde playDoor() fonksiyonu Olarak adlandırılan Yeni Bir boş İşlevi olusturmak isClicked () sahiptir Kapıyı Parametre olarak.

Bu, küresel bir seçim oluşturulacak şekilde, kapıdan kaynaklanamaz. Bu Oyundaki Diğer JavaScript fonksiyonlarının yanı Sıra isClicked () fonksiyonunuz Için çok faydalı OLACAKTIR .

KapalıKapıyolu başka bir global görünüm ve değer olarak “door_closed.png” yolu atayın.

İsClicked () İşlevi, bir döner boole Değer. Bir kapı argümanıyla isClicked () 'i çağıracak ettik belirlemeyi yapmak Için bu kapı öğesini kullanacaksınız.

Bir yaz / else if koşul denetler Eger deyimi kapı 'ın src eşdeğerdir (ya İçerir) closedDoorPath .

Cardio Değeri paylaşıyorlarsa, kapı henüz açılmamıştır (yani tıklanmamıştır) ettik sahte döndürmelisiniz .

Aksi takdirde, kapı zaten açık olmalıdır (yani tıklanmıştır), bu nedenle İşlev Eklendi bunun Yerine gerçek değerini döndürmelidir .

Artık isClicked() kullandığına göre, onu kullanır.

Gezin üç kapı Parçası Için .onclick () Fonksiyonları icinde işlevin onu ettik, bir dahilinde Geçerli mantığı Sarin Eger olmadığını belirlemek Için Açıklamada isClicked () İşlevi Vardır Değil henüz o beligbli Için oldu doorImage .

Bu mantığı Eklemek artık onu Kapalı Kapıyı YALNIZCA Bir Kez tıklanabilir hale getirerek oyununuzu Kısayol zaferlerinden koruyor.

Zaman bir oluşturma geldi GameOver () boyutlandırma gelebilir playDoor () ne zaman işlevi aslında oyun sona er numClosedDoors eşdeğerdir 0 .

KAPI elemanı .onclick () fonksiyonlarınızın Altına GameOver () Adinda yeni, boş Bir Fonksiyon Yazin .

gameOver() sisteminden genişletmeden önce hala kapsamlı bir global uyarlama var .

Bir oluşturun StartButton Küresel değişkeni ile HTML öğesine değerini atamak Için Bir JavaScript DOM method kullanmak En id ait başlamasından .

İpucu: .getElementById () yöntemini KULLANIN :

Artık bakım olarak StartButton'u , en genişletmek izini () fonksiyonu.

Ekle Durumunu Bir Fonksiyon Parametre Olarak ettik Bir yazma Eger deyimi nerede olursa koşul denetler Durumu eşdeğerdir 'kazanmak' . BU koşul gerçek değerine eşitse , startButton'un innerHTML'si Siz kazandınız Olarak değişmelidir ! tekrar oyna? .

### ipucu

> ```
> if ( durum === 'kazan' ) {
> başlatmaDüğmesi . innerHTML = 'Sen kazandın! Tekrar oyna?' ;
> }
> ```

Senin içinde playDoor () fonksiyonu, gameover () denir ama bir pazarlamaya uygulanabilir. Bir Argüman Olmadan, üç Kapıyı da açtığınızda StartButton Metni değişmeyecektir.

Dizeyi ekleyin'kazanmak ' için GameOver () sizin içinde' playDoor () fonksiyonu.

Bu Adımı uyguladıktan Sonra, Sayfayı Yenileyin ettik üç Kapıyı da Açın ettik startButton'daki 'İyi şanslar' dizenize ne olduguna Bakın . Kazanma koşulunuza ( numClosedDoors === 0 ) ulaşıldı. Tek sorun, FindFly'ı ne zaman bulursanız bulun, tüm işler açık olması yolunda ilerlemeniz için iyi zamanınız iyidir.

Bir Kaybeden İnşa Etmek

Bir oyun sonu FindFly olup sistem kontrol etmek gerekir.

Üstü isClicked () fonksiyonu, Adlı Yeni Bir İşlev olusturmak isFly () ALIR Kapıyı ONUN Argüment olarak. isClicked () fonksiyonu, isFly () bir boolean geçer. Bu yeni Fonksiyon icinde , door.src değerinin flyDoorPath ile Eşdeğer OLUP olmadığını (Veya içerdiğini) Kontrol etmek Için Bir eğer / else ifadesi Yazin . Bu aynı değerleri paylaşıyorlar, bu belirli süreli FindF'ye sahip olduğu ve gerçek döndürmesi yansıma gelir . Aksi takdirde, isFly () İşlevi yanlış döndürmelidir .

Bir olmadığını belirlemek Için Bir İşlev yazdik kapı 'ın src game bitmeyen FindFly görüntüsü İçerir. Şimdi bu iyi şu anda var olan JavaScript işlemine ihtiyacınız olması gerekir.

PlayDoor () yaşamak için bir gereken kapı giydirme. Sonra Eger bu işlevde Açıklamada, bir ekleme Eger Başka Kontroller Eger bu koşul isFly () Eşit OLACAKTIR gerçek geçtiğiniz takdirde kapı Olarak isFly () Argüment.

### ipucu

else if ( isFly ( kapı )) {

// Fonksiyon kodu...

}

Bu isBot () İşlevi gerçek değerine eşitse , GameOver () işlevini Bağımsız Değişken Olmadan çağırın .

Yana playDoor () İşlevi artık kapı elemanı Bir Argüment, göz İhtiyacı .onclick () Fonksiyonları. Geçiş doorImage1 , doorImage2 ettik doorImage3 Için Bağımsız Değişken olarak, Gösterilen sırasıyla playDoor () onu Birinde İşlev .onclick () İşlev.

İpucu: playDoor(doorImage1);

Şimdi gameover () işlevini yeniden Inceleyin . Geçerli mantığı Altında, bir yazma Başka değişecek deyimi .innerHTML ait StartButton değişkenin uzerinde oyun! tekrar oyna? .

Sayfayı yenileyin ve nasıl bakarsınız 'Oyun Bitti! Tekrar oyna?' FindFly'ı bulacaksınız.

### ipucu

başka {

başlatma Düğmesi . innerHTML = 'Oyun bitti! Tekrar oyna?'

}

Mevcut oyunla ilgili bir sorun var. Açtığınız ilk Veya Ikinci kapının Arkasında FindFly'ı bulsanız safra, kalan Kapıları açabileceğinizi ettik zaferin kaybını Geçersiz kılabileceğinizi UNUTMAYIN (Tüm kapılar açıldığında StartButton metnine ne olduguna Bakın ). Daha fazla mantık kullanarak bu oyunu iyileştirmeyi düzeltecektir.

Şu andaPlaying adlı yeni bir global nasıl ayarlayabilir ve gerçek olarak ayarlayın .

Alt GameOver () işlevinde , şu anda Playing için YANLıŞ . FindFly kapılandıktan sonra ek kapıların tıklanmamasını sağlamak için bu değeri kullanacaksınız.

İpucu: Şu anda Oynayan için yanlış dış if / else deyimi

Şimdi kapı elemanı .onclick () Işlevlerine bakarak , Geçerli eğer ifadesine şu andaPlaying'in gerçek döndürüp döndürmediğini VE isClicked (kapı) işlevinin yanlış döndürüp döndürmediğini Kontrol eden Bir koşul ekleyin .

İpucu: if koşulunuunu için AND Boolean operatörü ( && ) ve NOT operatörünü ( ! ) gerekir.

Aferin yaptın, kursiyer— oyun bittina götürüldü ve oyunktan sonra artık olması gereken gibi kullanılıyor. Zafere giden tüm ekip açmadığınızı boyut haberci ve FindFly'ı tüm işlerinden önce bulduğunuz içininizi söyler.

Tekrar bir de var - yeni bir tur için yeniden canınız için tek yol lüksk. Bir Sonraki Göreviniz startButton'unuzu tam Olarak buna dönüştürmektir - Yeni Bir tur Için Bir başlat düğmesi.

Dogrudan kapı elemanı Altına .onclick () Fonksiyonları, için Bir tıklama işleyicisi İşlev Eklemek startButton elemanı. İçinde, startRound() çağırın ( henüz yazılmamış).

### ipucu

Bir tıklama işleyicisinin bir çağırmak için:

eleman . onclick = () => {

functionToCall ();

}

StartRound () küçük , sadece yeni bir oyunu başlatmaya başlayın; ayrıca önceki oyundaki puanları olması gerekir.

Bu yeni oluştur startRound () sonra hata.onclick () işlevi . startRound() ayarlarından aydınlatma ayarlarına göz atın :

* Tüm doorImage.src Değerleri
* numClosedDoors değişkeni
* startButton.innerHTML değişkeni
* Şu anda Oynatılan

NumClosedDoors Değişken Olarak ayarlanir 3 , onu doorImage.src Değişken Olarak ayarlanir closedDoorPath değişkeni, startButton.innerHTML Için kümesidir 'İyi şanslar!' ettik şu değişkeni andaPlaying gerçek Olarak ayarlanir .

Tüm bu değişkenler sıfırlandıktan Sonra, startRound () işlevinin Altındaki randomFindDoorGenerator () işlevini (içeride ve) çağırın .

Şimdi bu startRound () fonksiyonu var, randomFindDoorGenerator () Altındaki Fonksiyon script.js ihtiyaçlarına Göre değiştirilmesi startRound () oyunu ilk yükleme zamanında oyunun değişkenler orijinal değerlerine ayarlanir, böylece fonksiyonu.

Şu anda, oyuncu startRound düğmesine tıklarsa game orta turu sıfırlayabilir . Bu hata , kazanma veya' kaybolmadan onun kapısına ulaşılmadan önce.srcnin tekrar kapalı bir kapı haline gelmesine neden olur.

Kodu startButton.onclick () işlevinin İçine, koşulun şu andaPlaying değişkeninin yanlış OLUP olmadığını Kontrol Ettiği Bir ise ifadesine Sarin, böylece Bir oyuncu oyunu raunt Ortasında sıfırlayamaz.

Bu eğer başlangıçtan koşulunu birkaç şekilde yazabilirsiniz :

if (! şu anda Oynatılıyor ) {

}

if ( şu andaOynuyor === false ) {

}

Tebrikler! HTML, CSS bilginizi kullanarak etkili bir etkili ve oyun oluşturdunuz. Ne kadar ileriz için gurur duyun.

İster inanın ister inanmayın, bu oyunda düzenden mantığa kadar her özelliği oluşturma yeteneğine sahipsiniz.

<tr> elements.
