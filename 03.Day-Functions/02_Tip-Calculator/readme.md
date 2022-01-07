# Bahşiş Hesaplayıcı

*John ve ailesi tatile gittiler ve 4 farklı restorana gittiler. Faturalar 124, 48, 75 ve 268 dolardı. John faturaları nakit ödedi ve cüzdanında 750 dolar bütçesi var.*

*Garsona makul bir miktar bahşiş vermek için John basit bir bahşiş hesaplayıcısı yarattı (işlev olarak) bahşiş vermeyi sever;*

* *Fatura 50 dolardan az olduğunda faturanın %20'si,*
* *Fatura 50\$ ile 200\$ arasında olduğunda %15,*
* *Fatura 200 dolardan fazla ise %10.
  (NOT: Bir değerin %20'sini hesaplamak için 20/100 = 0,2 ile çarpmanız yeterlidir)*

* [ ] Herhangi bir fatura tutarının ipucunu döndüren bir işlev oluşturabilirsiniz.
* [ ] `Bill` adlı tek bir parametreyle hesaplanan İpuçları adlı bir işlev oluşturun.
* [ ] İşlev, bir fatura tutarını argüman olarak kabul etmeli ve ödenen bahşişi iade etmelidir.
* [ ] İşlevi birden çok kez çağırarak ve sonuçları konsola yazdırarak test edin.
* [ ] Artık her fatura için bahşiş almak için bir fonksiyon yazdığınıza göre, üç şey yapmamız gerekiyor:
* [ ] Hesaplanan her faturayı ve bahşişi alın ve konsola yazdırın.
* [ ] John'un ödediği toplam bahşişi alın.
* [ ] Toplam ipucu almak için, parametre almayan `getTotalTips` adlı yeni bir işlev oluşturun.
* [ ] `getTotalTips()` işlevinin içinde, her fatura için `calculateTips()` işlevini çağırın. Sonuçları bir araya getirin ve örtük bir dönüş kullanarak toplamı döndürün.
* [ ] John'un bütçe tozunu hesaplayın ve konsola yazdırın. `BudgetDust` başka bir işlev oluşturun ve bu işlevi konsola yazdırın.
* [ ] Ondan sonra bütçesinin %80'ini harcarsa John'u uyarın. Fatura tutarlarını değiştirin ve bu durum için farklı sonuçlar görün.

***Tebrikler!***

---

# Tip Calculator

*John and his family went on a holiday and went to 4 different restaurants. The bills were $124, $48, $75 and $268. John paid the bills cash and he has $750 budget in his wallet.*

*To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip;*

* *20% of the bill when the bill is less than $50,*
* *15% when the bill is between $50 and $200,*
* *10% if the bill is more than $200.
  (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)*

* [ ] You can create a function that returns any given bill amount''s tip.
* [ ] Create a function named calculateTips with a single parameter named bill.
* [ ] The function should accept a bill amount as an argument and return the tip paid.
* [ ] Test the function by calling it multiple times and printing the results to the console.
* [ ] Now that you’ve written a function to get the tip for each bill, we need to do three things:
* [ ] Get the each bill and tip calculated and print to the console.
* [ ] Get the total tip that John paid.
* [ ] To get the total tip, create a new function named getTotalTips that takes no parameters.
* [ ] Inside the `getTotalTips()` function, call the `calculateTips()` function for each bill. Add the results together and return the sum using an implicit return.
* [ ] Calculate John's budget dust and print to the console. Create another function budgetDust and print this function to the console.
* [ ] After that, warn John, if he spend %80 of his budget. Change the bill amounts and see different results for tthis situtation.

***Congragulations!***
