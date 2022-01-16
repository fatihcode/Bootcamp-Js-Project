# HAYVAN BİLGİSİ

* [ ] `animal` adında boş bir nesne oluşturun.
* [ ] Hayvan nesnesi için `species`, `name`, `legs`, `color`, `age` özelliklerini ekleyin ve doldurun.
* [ ] Hayvanın sesini döndüren `bark` adlı bir yöntem ekleyin. Örneğin köpekler için `“woof woof”` dır.
* [ ] Köpek nesnesini konsola yazdır
* [ ] Nesneye yeni özellik ayarla: `breed`, önek olarak türleri kullanmalıdır.
* [ ] Nesnenin içinde, bir dizede hayvanın ` breed`, `name` ve `age` döndüren bir `getAnimalInfo` yöntemi oluşturun.
* [ ] Nesnenin içinde, bu nesnenin bir özelliği olarak `humanAge` döndüren `calcAge` adlı bir yöntem oluşturun.
* [ ] İlk gün projemizi hatırla; hayvan yılları. Köpek yaşına göre `humanAge` hesaplayın.

  **Formül şöyle görünür:**

  > 2 yaşında veya daha büyükse,
  > insanYaşı = (2 * 10,5) + (köpekYaş-2)*4;
  > 1 yaşındaysa, humanAge için yalnızca 10.5 döndürür.
  >
* [ ] Bu dizeyi döndürmek için `getAnimalInfo` yeniden düzenle.

  **Örnek sonuç dizisi:**

  > “Benim adım Max, ben bir köpek teriyeriyim. Köpek yıllarında 5, insan yıllarında 33 yaşındayım. ”
  >
* [ ] Son olarak, konsolda sonuç dizesini görmek için `calcAge` işlevinizi ve `getAnimalInfo` işlevinizi çağırın.

***İyi şanslar!***

---

# ANIMAL INFO

* [ ] Create an empty object called `animal`.
* [ ] Add `species`, `name`, `legs`, `color`, `age` properties for the animal object and fill out.
* [ ] Add a method named `bark` which returns sound of animal. For example it is `“woof woof”` for dogs.
* [ ] Print the dog object on the console
* [ ] Set new property to the object: `breed`, should use species as prefix.
* [ ] Inside object, create a method `getAnimalInfo` which return `breed`, `name` and `age` of the animal in a string.
* [ ] Inside object, create a method called `calcAge`, returning `humanAge` as a property of this object.
* [ ] Remember our first day Project; animal years. Calculate `humanAge` according to the dog age.

* **The formula looks like:**

  > if it is 2 years old or more,
  > humanAge = (2 * 10.5) + (dogAge-2)*4;
  > if it is 1 years old, returns only 10,5 for humanAge.
  >

* [ ] Refactor `getAnimalInfo` to return this string:

  **Example result string:**

  > “My name is  *Max* , i am a  *dog-terrier* . I am *33* years old in human years which is *5* years old in *dog* years.”
  >
* [ ] Finally call your `calcAge` function and `getAnimalInfo` function to see the result string in console.

***Good luck!***
