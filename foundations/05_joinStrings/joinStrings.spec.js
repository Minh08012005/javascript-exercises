const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Mai', () => {
    expect(values.firstName).toEqual('Mai');
  });
  test('lastName is Huy Minh', () => {
    expect(values.lastName).toEqual('Huy Minh');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2005', () => {
    expect(values.birthYear).toEqual(2005);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Mai Huy Minh and I am 21 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Mai Huy Minh', () => {
    expect(values.fullName).toEqual('Mai Huy Minh');
  });
  test('age is 21', () => {
    expect(values.age).toEqual(21);
  });
});
