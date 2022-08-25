const { multiplyNums } = require('../math')

test('multiplyNums accurately multiplies 2 numbers', () => {
    expect(multiplyNums(3, 2)).toEqual(6)
})

test('multiplyNums accurately multiplies 3 numbers', () => {
    expect(multiplyNums(2, 3, 4)).toEqual(24)
})
