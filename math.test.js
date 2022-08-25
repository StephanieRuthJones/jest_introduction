const {sumTwoNums, multiplyNums} = require('./math')

test('sumTwoNums function adds two numbers', () => {
    expect(sumTwoNums(1, 2)).toEqual(3)
})