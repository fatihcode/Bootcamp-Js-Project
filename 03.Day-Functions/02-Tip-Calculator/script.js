let fatura1=124;
let fatura2=48;
let fatura3=75;
let fatura4=268;

function calcTip(tip) {
    if (tip<50) {
        return tip*0.2;
        
    } else if (tip>=50 && tip<200){
        return tip*0.15;

    } else if (tip>200){
        return tip*0.1;

    }
}

console.log(calcTip(fatura1));



function totalTips() {
    return calcTip(fatura1)+calcTip(fatura2)+calcTip(fatura3)+calcTip(fatura4)
}

console.log(totalTips())

function uyari() {
    

let totalFatura=fatura1+fatura2+fatura3+fatura4;
let total= totalFatura+totalTips()

if(total>750*0.8){
    console.log("Bütçenizin %80'ni aştınız")
    
} else{
    console.log("Bütçeniz iyi durumda")
}
}

uyari()