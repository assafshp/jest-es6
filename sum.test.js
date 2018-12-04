const sum = require('./sum');

describe('Test sum', () => {

  it('sum is working', () => {
    return expect(sum(2,3)).toBe(5);
  });

});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
