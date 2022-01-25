# BATERİ SETİ

Çocuklar için bateri uygulaması bulunmaktadır. Yedi tıklanabilir davulunuz ve onların sesi var.
Ama sayfa bozuk ve çalışmıyor. Bunu düzeltmeye çalış.

İlk önce ilk tambura ulaşan değişken bir tambur1 oluşturun.

Drum1 tıklama ifadesini boş bir ok işlevine atayın.
Bu fonksiyon butona tıklandığında ses çıkaracaktır.

Bu fonksiyonun içinde;
Sesi aktif hale getirin. Proje klasörünüze bakın, her davul için sesler buldunuz.
İPUCU: kullanım; “new Audio("somesound.mp3").play();”

İşlevinizi başlatın ve çalışıp çalışmadığını görün.

Şimdi bunu tüm davullar için yapabilirsiniz ama yapmayın.

Sayfadaki tüm davulları alan bir değişken oluşturun. querySelectorAll'ı kullanın. Bu size tüm davullardan oluşan bir dizi verecektir.
Artık o değişkendeki her öğe için bir for döngüsü oluşturabilirsiniz.

Bu for döngüsünün içinde onclick işlevinizi oluşturun ve tüm seslerin düzgün çalışmasını sağlayın. Sesleri değiştirmek (erişmek ve oynatmak) için düğme değerlerini kullanabilirsiniz. (Veya innerHTML değerlerini kullanın)

Sayfanızı yenileyin ve düğmelere tıkladığınızda oyununuzun çalışıp çalışmadığını görün.

Artık oyununuz oynamaya hazır, ancak yapılacak bir şey daha var: Tuşa basma.
Bazı kullanıcılar klavyeyi kullanarak davulları kontrol etmek ister.

DOM için bir olay dinleyicisi oluşturun. Bu sefer “tıklama” yerine “tuşa basma” kullanın. Size klavyede basılan tuşu verecektir.
Bu fonksiyon içerisinde klavye ile basılan tuşları konsola yazdırın. Doğru anahtarları aldığınızdan emin olun.

Şimdi her sesi anahtara göre çalıştırmak için komut dosyanızı yazın.

## ZORLUK

Oyununuzda herhangi bir efekt yok.

Bir animasyon işlevi oluşturmak için aynı olay dinleyicisini kullanın. Kullanıcı tuşa bastığında ilgili düğme .css dosyasında önceden oluşturulmuş olan “basılan” sınıfı alacaktır.
Ayrıca kısa bir süre sonra bu sınıfı otomatik olarak kaldırmayı da unutmayın.
İPUCU: setTimeout();

İyi şanslar!

---

# DRUM KIT

There is a drum kit application for childs. You have seven clickable
drums and their voice.

But page is broken and not working. Try to fix it.

**1. **

First create a variable *drum1* that reaches
first drum.

**2.**

Assign *drum1* clicking
expression to an empty arrow function.

This function will make sound when button is clicked.

**3.**

Inside this function ;

Make the sound active. Look at your Project folder, you found
sounds for each drum.

HİNT: usage; “ *new Audio("somesound.mp3").play();* ”

Start your function and see if it is working.

**4.**

Now you can make this for all drums but do not.

Create a variable that takes all drums at the page. Use querySelectorAll.
This will gives you an array consist of all drums.

Now you can create a for loop for each element in that variable.

İnside this for loop create your onclick function and make all
sounds working properly. You can use button values to manipulate (reach and play)
sounds. (Or use innerHTML values)

**5.**

Refresh your page and see if your game is working when you are
clicking the buttons.

**6.**

Now your game is ready to play but there is something else to
do: Keypress.

Some users want to control drums by using keyboard.

**7.**

Create an event listener to the DOM. This time use “keypress”
instead of “click”. It will gives you the key pressed on the keyboard.

İnside this function print your keys pressed by keyboard to the
console. Make sure you got the correct keys.

**8.**

Now write your script to run each sound according to the key.

**9. CHALLENGE**

There is no effect in your game.

Use same event listener to create an animation function. When
user pressed the key, related button will take the class of “*pressed”* that has been already created in .css file.

And also don’t forget to remove this class automaticaly after
a short while.

HİNT: setTimeout();

Good luck!
