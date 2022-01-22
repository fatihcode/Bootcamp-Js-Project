# DİJİTAL OKUL

*İlimiz Eğitim Bakanlığı, şehirdeki her okul için hızlı başvuru materyali içeren bir katalog istiyor.*

*İlkokul, ortaokul ve liseler için `class` oluşturmamız gerekiyor. Bu sınıflar özellikleri ve yöntemleri paylaştığı için, her biri bir üst Okul sınıfından miras alacaktır. Ebeveyn ve üç alt `class` aşağıdaki özelliklere, alıcılara, ayarlayıcılara ve yöntemlere sahiptir:*

### Okul

• **Özellikler:** `name` (string), `level` (üç dizeden biri: '`primary`', '`middle`' veya '`high`') ve `numberOfStudents` (sayı)

• **Getters:** tüm mülklerin alıcıları vardır

• **Setters:** `numberOfStudents` özelliğinin bir ayarlayıcısı vardır.

• **Yöntemler:** `.quickFacts()` ve `.pickSubstituteTeacher()` (bu statik bir yöntemdir)

### İlkokul

• `School` sınıfındaki her şeyi ve ayrıca bir ek mülkü içerir.

• **Özellikler:** `pickupPolicy` (string)

### Ortaokul

• Herhangi bir ek özellik veya yöntem içermez

### lise

• `School` sınıfındaki her şeyi ve ayrıca bir ek mülkü içerir.

• **Özellikler:** `sportsTeams` (array)

Yukarıdaki dört sınıf için `constructor()` ve alıcıları oluşturun. Ardından, ayarlayıcı ve yöntem özelliklerini aşağıdaki adımlarda kullanın.

* [ ] Alıcılarınızın altında, aşağıdaki dizeyi konsola kaydeden `quickFacts` adlı bir yöntem oluşturun:

  > OKUL ADI, SEVİYE okul düzeyinde ÖĞRENCİ SAYISI öğrenci yetiştirmektedir.
  >
* [ ] OKUL ADI yerine, bir örneğin ad değerini değiştirin.
* [ ] NUMBER OF STUDENTS yerine, bir örneğin `numberOfStudents` değerini değiştirin.
* [ ] LEVEL yerine, örneğin seviye değerini değiştirin.
* [ ] `.quickFacts()` altında, `pickSubstituteTeacher` adlı statik bir yöntem oluşturun. Bu yöntem, `substituteTeachers` adlı bir parametre alacaktır. `substituteTeachers` parametresi bir array alacaktır.
* [ ] Yöntemin içinde, rastgele oluşturulmuş dizine göre bir yedek öğretmene rastgele erişin ve döndürün.
* [ ] Ardından, Okulu genişleten bir `PrimarySchool` `class` oluşturacağız.
* [ ] `PrimarySchool` sınıfımız `Schools`'un özelliklerini ve alıcılarını devraldığından, `PrimarySchool` `class`'ına `pickupPolicy` özelliği için yalnızca bir yeni alıcı oluşturmamız gerekir.
* [ ] Şimdi `School` genişleten bir `HighSchool` sınıfı oluşturun. Okuldaki özelliklere, alıcılara ve yöntemlere ek olarak `HighSchool`, `sportsTeams` (dize) özelliğini ve `sportsTeams` dizisi için bir alıcı içerir.
* [ ] Alıcı, tüm sporları konsola kaydetmelidir.
* [ ] Şimdi `School` `class`'ını genişleten bir `MiddleSchool` sınıfı oluşturun. Ekstra alıcı ve ayarlayıcı yok.
* [ ] Aşağıdaki özelliklere sahip bir `PrimarySchool` örneği oluşturun:

  > * **Ad:** 'Sierre Nevada'
  > * **Öğrenci Sayısı:** 422
  > * **Alma Politikası:** 'Öğrenciler bir ebeveyn, vasi veya 15 yaşından büyük bir aile üyesi tarafından alınmalıdır.'
  >
* [ ] Örneği, `sierraNevada` adlı sabit bir değişkene kaydedin.
* [ ] `sierraNevada` örneğinde .`quickFacts()` öğesini çağırın.
* [ ] Sierra Nevada'nın müdürünün gün için rastgele seçilmiş bir yedek öğretmene ihtiyacı var.
* [ ] Okulda `.pickSubstituteTeacher()` öğesini çağırın ve aşağıdaki diziyi argüman olarak iletin:

  ```js
  ['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'];
  ```

* [ ] Aşağıdaki özelliklere sahip bir `HighSchool` örneği oluşturun:

  > * **Ad:** 'Elkhart'
  > * **Öğrenci Sayısı:** 515
  > * **Spor Takımları:** ['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey']
  >
* [ ] Örneği `elkhart` adlı sabit bir değişkene kaydedin.
* [ ] `elkhart`'taki `sportsTeams` özelliğine kaydedilen değeri alın.
* [ ] Okulların bir koleksiyonunu tutan `SchoolCatalog` adlı ayrı bir sınıf oluşturun. `SchoolCatalog`'dan bir örnek oluşturun ve okullarınızı buna yerleştirin.

## Mücadele

* [ ] DOM kullanarak yeni örnekler (`School`) oluşturun.
* [ ] Kimlikler veya sınıf adları kullanarak öğelere ulaşın. (Onları değişkenlere atayın)
* [ ] Düğme için bir `onclick` işlevi yapın.
* [ ] Giriş değerlerini kullanarak örneklerinizi oluşturun.
* [ ] Örneklerinizi katalog nesnesine yazın.
* [ ] Bu verileri, önceden oluşturulmuş DOM kataloğu Kitaplığı paragrafına yazdırın.

---

# DIGITAL SCHOOL

*Our City's Department of Education wants a catalog to hold quick reference material for each school in the city.*

*We need to create classes for primary, middle and high schools. Because these classes share properties and methods, each will inherit from a parent `School` class.*

*Our parent and three child classes have the following properties, getters, setters, and methods:*

### School

 **Properties** : `name` (string), `level` (one of three strings: `'primary'`, `'middle'`, or `'high'`), and  `numberOfStudents` (number)

 **Getters** : all properties have getters

 **Setters** : the `numberOfStudents` property has a setter

 **Methods** : `.quickFacts()` and `.pickSubstituteTeacher()` (this is a static method)

### Primary

Includes everything in the `School` class, plus one additional property

 **Properties** : `pickupPolicy` (string)

### Middle

Does not include any additional properties or methods

### High

Includes everything in the `School` class, plus one additional property

 **Properties** : `sportsTeams` (array of strings) Create the `constructor()` and getters for the four classes above. Then, use the setter and methods specifications in belove steps.

* [ ] Under your getters, create a method named `quickFacts` that logs the following string to the console:

  ```
  SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
  ```

* [ ] In place of `SCHOOL NAME`, substitute an instance's `name` value.
  In place of `NUMBER OF STUDENTS`, substitute an instance's `numberOfStudents` value.
  In place of `LEVEL`, substitute an instance's  `level` value.

* [ ] Under `.quickFacts()`, create a static method named `pickSubstituteTeacher`. This method will receive one parameter, named `substituteTeachers`. The `substituteTeachers` parameter will take an array of strings.
* [ ] Inside the method, randomly access and return one substitute teacher according to randomly generated index.
* [ ] Next, we'll build a `PrimarySchool` class that extends `School`.
* [ ] Since our `PrimarySchool` class inherits `Schools`‘s properties and getters, we only need to create one new getter for `pickupPolicy` property in the `PrimarySchool` class.

* [ ] Now create a `HighSchool` class that extends the `School` class. In addition to the properties, getters, and methods in `School`, the `HighSchool` includes the `sportsTeams` (array of strings) property and a getter for the `sportsTeams` array.
* [ ] The getter should log all of the sports to the console.
* [ ] Now create a `MiddleSchool` class that extends the `School` class. No extra getters and setters.
* [ ] Create a `PrimarySchool` instance with the following properties:

  > * **Name:** `'Sierre Nevada'`
  > * **Number of Students:** `422`
  > * **Pickup Policy:** `'Students must be picked up by a parent, guardian, or a family member over the age of 15.'`

* [ ] Save the instance to a constant variable named `sierraNevada`.
* [ ] Call `.quickFacts()` on the  `sierraNevada` instance.
* [ ] The principal of Sierra Nevada needs a randomly selected substitute teacher for the day.

* [ ] Call `.pickSubstituteTeacher()` on `School`, and pass the following array as an argument:

  ```js
  ['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'];
  ```

* [ ] Create a `HighSchool` instance with the following properties:

  > * **Name:** `'Elkhart'`
  > * **Number of Students:** `515`
  > * **Sports Teams:** `['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey']`

* [ ] Save the instance to a constant variable named `elkhart`.
* [ ] Get the value saved to the  `sportsTeams` property in `elkhart`.
* [ ] Create a seperate class called `SchoolCatalog` that holds a collection of schools. Create an instance from `SchoolCatalog` and put your schools in it.

## Challenge

* [ ] Create new instances (schools) by using DOM.
* [ ] Reach elements by using ids or classnames. (Assign them to variables)
* [ ] Make an onclick function for `button` Put belove steps inside function.
* [ ] Create your instances by using input values.
* [ ] Write your instances to the catalog object.
* [ ] Print this data to DOM `catalogLibrary` paragraph that is already created.
