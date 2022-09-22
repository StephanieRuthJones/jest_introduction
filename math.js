function sumTwoNums(numOne, numTwo) {
    if(!(typeof numOne === 'number') || !(typeof numTwo === 'number')){
        return "please use numbers only";
    }
    return numOne + numTwo;
}

function multiplyNums(...args) {
    const product = args.reduce((acc, number) => {
        console.log(acc, number)
        acc = acc *= number
        return acc
    }, 1)
    return product
}

module.exports = {sumTwoNums, multiplyNums}