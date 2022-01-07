//Transform a string into an array and fix it!
//"Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";


let quote = "“Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand.” – Martin Fowler. Agile Software Design."

console.log(quote)


let quoteArr= quote.split(" ");//String ifadeyi boşluklardan ayırarak array haline getirdi

console.log(quoteArr);

console.log(quoteArr.length);


quoteArr.pop();//Array in en son öğesini çıkartır

console.log(quoteArr);

console.log(quoteArr.length);


quoteArr.push("Development,", "ThoughtWorks", "and", "Inc.");//Arrayin en sonuna ekler

console.log(quoteArr)

console.log(quoteArr.length);


let word =quoteArr.indexOf("body") //Parantez içinde verilen değeri bulur ve index numarasını döndürür

console.log(word);

console.log(quoteArr[1])

quoteArr[1] = "fool" //Index 1deki öğeye yeniden değer atadık

console.log(quoteArr)


quoteArr.shift(); //Arrayin ilk öğesini çıkarır

console.log(quoteArr)


quoteArr.unshift("Any")//Arrayin başına yeni eğer atar

console.log(quoteArr)


let word1=quoteArr.indexOf("very");

console.log(word1)


quoteArr.splice(7, 5, "computer") //İstenen öğeleri kaldırdı yerine öğe atadı

console.log(quoteArr)


quote= quoteArr.join(" ")//String ifadeye çevirdi

console.log(quote)