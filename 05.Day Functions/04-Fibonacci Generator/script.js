function fibonacciGen(num) {

    let num1 = 1;
    let num2 = 0;
    let array = []

    for (let i = 0; i < num; i++) { 

        temp = num2 
        num2 = num1 
        num1 = num2 + temp 

        array.push(temp) 
    }
    return array;
}

console.log(fibonacciGen(10))

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987


function fibonacciFinder(num) {

    return fibonacciGen(num).pop()

}

console.log(fibonacciFinder(7))


