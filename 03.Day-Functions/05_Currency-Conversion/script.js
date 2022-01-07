//£ dan $ çeviren fonksiyon
function convertToUSD(pound) {
    return pound * 1.4
}

//Çalıştığını görmek için değer verip konsolda test
console.log(convertToUSD(10))



//£ dan $ çeviren fonksiyon (Yüzde 1 paund keserek sonucu veriyor)
function convertToBRL(pound) {
    return Number(((pound - pound * 0.01) * 5.7).toFixed(2)); //Virgülden sonra 2 basamak göster
}

//Çalıştığını görmek için değer verip konsolda test
console.log(convertToBRL(10))



//£ dan istenen değere göre çeviren fonksiyon
function change(currency, value) {
    if (currency === "USD") {

        return convertToUSD(value)

    } else if (currency === "BRL"){

        return convertToBRL(value)

} else {

    return "Yanlış Giriş Yaptınız"
}
}


//100£ dolara çevirme
console.log(change("USD", 100));

//100£ brezilya realine çevirme
console.log(change("BRL", 100));