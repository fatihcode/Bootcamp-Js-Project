# TAKIM SEÇİCİ

*Bir NBA hayranı olarak, kendi takımınızla internette oyun oynamayı seviyorsunuz.*

*Bu projede, verilen oyunculara göre rastgele bir takım oluşturmak için JavaScript kullanacaksınız. Oluşturulan ekipten memnun kalana kadar çalıştırmaya devam edeceğiz!*

* [ ] Boş bir ekip nesnesi oluşturarak başlayın.
* [ ] Ekip nesnenize bir ` _positions` özelliği ekleyin ve değerini boş bir nesneye ayarlayın. Bu özellik, nihayetinde her bir pozisyon ile o pozisyona girebilecek oyuncular arasında bir eşleme içerecektir.
* [ ] `_positions` nesnesinin içinde `centers`, `forwards` ve `guards` adı verilen en az üç özellik oluşturun. Bunların her biri boş bir diziye başlamalıdır.
* [ ] `centers`, `forwards` ve `guards` özellikleri için alıcı ve ayarlayıcı yöntemleri oluşturun.
* [ ] Takım nesnenizin içinde, `_positions` özelliği için boş bir alıcı yöntemi oluşturun.
* [ ] Konum alıcı yönteminin içinde, `centers`, `forwards` ve `guards` için key/value çiftlerini içeren bir nesne döndürün.

### İpucu

> Merkezler, forvetler ve korumalar için özelliklere sahip bir nesne döndürün.

* [ ] Takım nesnesinin içinde, takımda belirtilen konuma yeni bir oyuncu eklemek için kullanılacak `.addPlayerToPosition()` adlı bir yöntem oluşturacağız.
* [ ] Yöntem üç parametre almalıdır: `positionName`, `playerName` ve `playerPoint`.
* [ ] `.addPlayerToPosition()` yöntemi, parametrelerden aldığı bir ada ve noktaya sahip olan player adında bir nesne oluşturmalıdır.
* [ ] Yöntem daha sonra bu oyuncu nesnesini, hangi `positionName`'in iletildiğine bağlı olarak ekibinizin `_positions` nesnesindeki uygun diziye itmelidir.
* [ ] Şimdi, rastgele bir takım oluşturmak için gerekli olacak, takımdaki bir pozisyondan rastgele bir oyuncu almamızı sağlayacak başka bir fonksiyona ihtiyacımız olacak.
* [ ] Ekip nesnesi içinde `.getRandomPlayerFromPosition()` adlı bir yöntem oluşturun. PositionName olan bir parametre alacaktır.
* [ ] `.getRandomPlayerFromPosition()`'ın çalışmasını sağlamanın birkaç adımı vardır.

  * Verilen pozisyonun oyuncularının dizisini takımın `_positions` nesnesinden alın ve oyuncular adlı bir değişkende saklayın.
  * `Math.random()` ile oyuncular dizisinin uzunluğunu çarparak rastgele bir dizin oluşturun (Bu, rastgele sayının 0 ile dizinin uzunluğu arasında olacağını garanti eder)
  * Sonuç üzerinde `Math.floor()`'u kullanarak bu üretilen sayıyı bir tam sayıya yuvarlayın.
  * Oyuncularda o dizinde bulunan oynatıcıyı döndürün.
* [ ] Artık bir pozisyondan rastgele bir oyuncu almanın bir yolu olduğuna göre, bizim için otomatik olarak üç pozisyonlu bir takım oluşturacak bir `.generateRandomTeam()` işlevi oluşturabiliriz. Fonksiyonun herhangi bir parametre almasına gerek yoktur.

  * İşlev, ona bir merkez dizesini ilettiğimizde .`getRandomPlayerFromPosition()` yöntemini çağırmanın sonucu olması gereken bir merkez değişken oluşturmalıdır.
  * Merkez değişkeni oluşturduğunuz şekilde bir ileri değişken ve koruyucu değişken oluşturun, ancak doğru konum tipini ilettiğinizden emin olun.
  * Ortalama puanı hesaplar ve her oyuncunun adını ve takımın ortalama puanını içeren, istediğiniz şekilde biçimlendirilmiş bir dize döndürür.
* [ ] Artık takımımızı bitirdiğimize göre, nesneyi, `.addPlayerToPosition()` işleviyle bazı merkezler, forvetler ve guardlar ekleyerek bir takım oluşturmak için kullanalım. Her pozisyona en az 5 oyuncu ekleyin (veya isterseniz daha fazla!).

### İpucu

> ```
> team.addPlayerToPosition('center', Bam Adebayo', 6.25);
> ```

* [ ] Ekibinizin içinde öğeler olduğunda, ekibinizde `.generateRandomTeam()` işlevini kullanarak bir ekip oluşturun ve bunu ekip adlı bir değişkene kaydedin. Son olarak, sizin için hangi takımın oluşturulduğunu görmek için takım değişkeninizi yazdırın.

### İpucu

> ```
> let selectedTeam = team.generateRandomTeam();
> console.log(selectedTeam);
> ```

---

# TEAM SELECTOR

*As a NBA fan, you love playing games on internet with your own team.*

*In this project, you'll use JavaScript to randomly create a team based on given players. We'll keep running it until we're satisfied with the created team!*

* [ ] Start by creating an empty `team` object.
* [ ] Add a `_positions` property to your team object and set its value to an empty object. This property will ultimately contain a mapping between each position and the players available to get in that position.
* [ ] Create at least three properties inside the `_positions` object called `centers`, `forwards`, and `guards`. Each one of these should initialize to an empty array.
* [ ] Create `getter` and `setter` methods for the `centers`, `forwards`, and `guards` properties.
* [ ] Inside your team object, create an empty `getter` method for the `_positions` property.
* [ ] Inside the positions `getter` method, return an object that contains key/value pairs for `centers`, `forwards`, and `guards`.

### Hint

> Return an object with properties for `centers`, `forwards`, and `guards`.

* [ ] Inside the team object, we are going to create a method called `.addPlayerToPosition()` which will be used to add a new player to the specified position on the team.
* [ ] The method should take in three parameters: the `positionName`, the `playerName`, and the `playerPoint`.
* [ ] The `.addPlayerToPosition()` method should create an object called player which has a name and point which it gets from the parameters.
* [ ] The method should then push this player object into the appropriate array in your team‘s _positions object based on what positionName was passed in.
* [ ] Now, we're going to need another function which will allow us to get a random player from a position on the team, which will be necessary for generating a random team.
* [ ] Create a method inside the team object called `.getRandomPlayerFromPosition()`. It will take in one parameter which is the positionName.
* [ ] There are a few steps in getting the `.getRandomPlayerFromPosition()` to work.

  * Retrieve the array of the given position's players from the team‘s _positions object and store in a variable called players.
  * Generate a random index by multiplying `Math.random()` by the length of the players array (This will guarantee that the random number will be between 0 and the length of the array)
  * Round that generated number to a whole number by using `Math.floor()` on the result.
  * Return the player located at that index in players.
* [ ] Now that we have a way to get a random player from a position, we can create a .generateRandomTeam() function which will automatically generate a three-position team for us. The function doesn't need to take any parameters.

  * The function should create a center variable which should be the result of calling the `.getRandomPlayerFromPosition(`) method when we pass in a center string to it.
  * Create a forward variable and guard variable the same way you created the center variable, but make sure to pass in the right position type.
  * Calculates the average point and returns a string that contains the name of each of the players and the average point of the team, formatted as you like.
* [ ] Now that we've finished our team, object, let's use it to create a team by adding some centers, forwards, and guards with the `.addPlayerToPosition()` function. Add at least 5 players to each position (or more if you like!).

### Hint

> ```
> team.addPlayerToPosition('center', Bam Adebayo', 6.25);
> ```

* [ ] Once your team has items inside it, generate a team by using the `.generateRandomTeam()` function on your team, and save it to a variable called team. Lastly, print out your team variable to see what team was generated for you.

### Hint

> ```
> let selectedTeam = team.generateRandomTeam();
> console.log(selectedTeam);
> ```
