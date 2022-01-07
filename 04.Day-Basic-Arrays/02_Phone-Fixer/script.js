let phonenum = "12345689456";


let phone=phonenum.split("") //Arraya çevirdik

console.log(phone);


phone.unshift("+") //En başa değer atadık

console.log(phone);


phone.splice(2,0," (") //Array içine öğe ekledik

console.log(phone);


phone.splice(6,0,") ") //Array içine öğe ekledik

console.log(phone);


phone.splice(10,0," ") //Array içine öğe ekledik

console.log(phone);


phonenum= phone.join("") //Tekrar string ifadeye çevirdik

console.log(phonenum)