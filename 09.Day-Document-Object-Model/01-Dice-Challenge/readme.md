# ZAR MÜCADELE

DOM bilgimizi kullanarak bir zar oyunu oluşturacağız. Düğmeye bastığınızda, zarlar rastgele yuvarlanır ve bir kazanan (veya beraberlik) oluşturur.

İlk önce rastgele bir sayı üreteci işlevi oluşturun. Her seferinde rastgele 1-6 üretir.

Kimliği kullanarak düğmeyi seçmek için bir startButton değişkeni oluşturun.
Kimliklerini kullanarak zar img öğelerini seçmek için dice1 ve dice2 olmak üzere iki değişken oluşturun.

Boş bir ok işlevine startButton tıklama ifadesi atayın.
Bu fonksiyon butona her tıklandığında çalışacaktır.
İpucu: .onclick'i kullanın.

Bu fonksiyonun içinde;
Her zar için randomNum1 ve randomNum2 değişkenleri oluşturun. Ve rastgele sayı işlevini çağırın.

.src ifadesini kullanarak zar görüntü öğesi kaynağı atayın. img url'yi atamak için randomNum değişkenlerini (ve dize sınırlamasını) kullanın (görüntüler proje klasörünüzdedir).

Sayfanızı yenileyin ve butona tıkladığınızda zarlarınızın değiştiğini görün.

Artık oyununuz oynamaya hazır ama sonuç yok, kazanan kim.
RandomNum değişkenleri karşılaştırmak için bir if else ifadesi yapın.

randomNum1, randomNum2'den büyükse; h1 öğesini "Oyuncu 1 Kazandı!!!" olarak değiştirin
index.html'mizde yalnızca bir h1 öğesi var. Bu nedenle, “querySelector” ile h1 öğesini seçin ve yeni değer atamak için .innerHTML kullanın.

Diğer seçenek için de aynı şeyi yapın (randomNum2, randomNum1'den büyükse).
Ayrıca çekme seçeneğini de unutmayın.

Sayfanızı yenileyin ve butona tıkladığınızda zarlarınızın ve h1 öğesinin değiştiğini görün.

11. ZORLUK
    Kazanan Oyuncu Adını (zarların altında) kalın ve kırmızı yapın.
    Kazanan `<p>` öğesine DOM yöntemlerini kullanarak bir sınıf ekleyebilirsiniz. Her dönem, diğer kullanıcı kazanırsa bu sınıfı kaldırmayı unutmayın.

İyi şanslar!

---

# DICE CHALLENGE

We willl create a dice game using our DOM knowledge. When you
press the button, dice rolls randomly and generate a winner (or draw).

**1. **

First create a random number generator function. It genereate
1-6 each time randomly.

**2.**

Create a variable startButton
to select button by using id.

Create two variables dice1 and dice2  to
select dice img elements by using their id.

**3.**

Assign startButton clicking expression to an
empty arrow function.

This function will run whenever the button is clicked.

Hint: use .onclick .

**4.**

Inside this function ;

Create variables randomNum1 and randomNum2 for each dice. And call random number function.

**5.**

Assign dice image element source by using .src expression. Use randomNum
variables (and string concetination) to assign img url (images are in your project
folder).

**6.**

Refresh your page and see your dices are changing when you
are clicking the button.

**7.**

Now your game is ready to play but there is no result, who is
winner.

Make an if else statement for randomNum
variables compare.

**8.**

If randomNum1 greater than randomNum2 ; change h1
element to” Player 1 Wins!!!”

There is only one h1 element in our index.html. So, select h1 element by “querySelector” and use .innerHTML to assign new value.

**9.**

Make same thing for other option (if randomNum2 greater than randomNum1).

Also don’t forget draw option.

**10.**

Refresh your page and see your dices and h1 element is changing when you are clicking the
button.

**11. CHALLENGE**

Make winner Player Name (under the dice) bold and red.

You can add a class by using DOM methods to the winner `<p>` element. Each term don’t forget to remove this
class if other user is winner.

Good luck!
