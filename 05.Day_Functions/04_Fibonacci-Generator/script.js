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

console.log(fibonacciGen(8))

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987


function fibonacciFinder(num) {
    return fibonacciGen(num).pop()
}

console.log(fibonacciFinder(10))


//-----------------------------------------------------


function fibonacciGen(num) {

    let output = [0, 1];

    if (num === 0) {
        output = [];

    } else if (num === 1) {
        output = [0];

    } else {
        for (let i = 2; i < num; i++) {

            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output
}

console.log(fibonacciGen(0));