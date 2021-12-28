Mass Compare Project
With our knowledge of JavaScript, let’s calculate and compare of the Mark’s and John’s BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height2 = mass / (height * height). (mass in kg and height in meter). 

1.
To start, Store Mark's and John's mass and height in variables. Create variables named massMark , massJohn , heightMark and heightJohn set them equal to some value.

2.
Calculate both their BMIs using the given formula. Set the results to variables named BMIJohn and BMIMark.

3.
Write a comment above that explains this line of code. Print this BMIs to the console.

4.
Use Math operators to shorten BMI results. (Math.Floor, Math.Round or toFixed)

5.
According to the console, create a boolean variable higherBMI containing information about whether if Mark has a higher BMI than John or reverse. Use compare statement (< or >).
Hint
let A = 8; 
let B = 5;
const bigger = A > B; // this gives “true”
const bigger = A < B; // this gives “false”

6.
Use console.log and string interpolation (containing the variables from all steps) to log the result something like this:
Is Mark's BMI is higher than John's? Answer is “true". Because Mark's BMI is BMIMARK and John's BMI is BMIJOHN


7.
Challange! Enrich your work. You can add values by using prompt and use string interpolation to see your result in alert screen.

8.
Prepare a Readme file and send your work to the github account.

9.
Additional Step!
If you wish, you can make this compare with an if else stattement instead of boolean variable that you created in step 5. 
Usage of if else statement example: 

if (someValue > otherValue) { 
    console.log('someValue is higher than otherValue'); 
    } else { 
         console.log('someValue is lower than otherValue');
     }




Toplu Karşılaştırma Projesi
JavaScript bilgimizle, aşağıdaki formül kullanılarak hesaplanan Mark's ve John's BMI'yi (Vücut Kitle İndeksi) hesaplayıp karşılaştıralım:
BMI = kütle / yükseklik2 = kütle / (yükseklik * yükseklik). (kg cinsinden kütle ve metre cinsinden yükseklik).

1.
Başlamak için, Mark'ın ve John'un kütlesini ve yüksekliğini değişkenlerde saklayın. massMark , massJohn , heightMark ve heightJohn adlı değişkenler oluşturun, bunları bir değere eşitleyin.

2.
Verilen formülü kullanarak her ikisinin de BMI'sini hesaplayın. Sonuçları BMIJohn ve BMIMark adlı değişkenlere ayarlayın.

3.
Bu kod satırını açıklayan bir yorum yazın. Bu BMI'leri konsola yazdırın.

4.
BMI sonuçlarını kısaltmak için Matematik operatörlerini kullanın. (Math.Floor, Math.Round veya toFixed)

5.
Konsola göre, Mark'ın John'dan daha yüksek bir BMI'ye sahip olup olmadığı veya tersi olup olmadığı hakkında bilgi içeren daha yüksek BMI boole değişkeni oluşturun. Karşılaştırma ifadesini kullanın (< veya >).
İpucu
A = 8 olsun;
B = 5 olsun;
const daha büyük = A > B; // bu "doğru" verir
const daha büyük = A < B; // bu "yanlış" verir

6.
Sonucu şöyle bir şekilde günlüğe kaydetmek için konsol.log ve dize enterpolasyonunu (tüm adımlardaki değişkenleri içerir) kullanın:
Mark'ın BMI'si John'unkinden daha mı yüksek? Cevap "doğru". Çünkü Mark'ın VKİ'si BMIMARK ve John'un VKİ'si BMIJOHN


7.
Meydan okuma! Çalışmanızı zenginleştirin. İstemi kullanarak değerler ekleyebilir ve sonucunuzu uyarı ekranında görmek için dize enterpolasyonunu kullanabilirsiniz.

8.
Benioku dosyası hazırlayın ve çalışmanızı github hesabına gönderin.

9.
Ek Adım!
Dilerseniz bu karşılaştırmayı 5. adımda oluşturduğunuz boolean değişkeni yerine bir if else deyimi ile yapabilirsiniz.

if else ifadesinin kullanımı örneği:
if (someValue > otherValue) {
    konsol.log('someValue, otherValue'dan daha yüksek');
    } Başka {
         konsol.log('someValue, otherValue'dan daha düşük');
     }