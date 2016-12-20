// concat
// semigroup - instance has concat method

// associativity
// 'a'.concat('b').concat('c') === 'a'.concat('b'.concat('c'))
// const res = 'a'.concat('b').concat('c');
// const res = 'a'.concat('b'.concat('c'));

const Sum = x => ({ // summ rules
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

const All = x => ({ // boolean rules
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`
});

const First = x => ({ // First rules
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`
});
// const res = Sum(1).concat(Sum(2)); // Sum(3)
// const res = All(true).concat(All(true)); //All(true)
const res = First('first remains').concat(First('never counts')); // First('first remains')


console.log(res);
