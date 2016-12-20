 // Identity functor
 // provide context for x
const Id = x =>
({
  map: f => Id(f(x)),
  unFold: f => f(x),
  inspect: () => `Id(${x})`
})

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g,''))

// const percentToFloat = str => {
//   const replaced = str.replace(/\%/g,'');
//   const number = parseFloat(replaced);
//   return number * 0,01;
// }

const moneyToFloat = str =>
  Id(str)
    .map(s => s.replace(/\$/g,''))
    .map(parseFloat)

const percentToFloat = str =>
  Id(str)
    .map(s => s.replace(/\%/g,''))
    .map(parseFloat)
    .map(num => num * 0.01)



const applyDiscount = (price, discount) =>
  moneyToFloat(price)
    .unFold(cost =>
      percentToFloat(discount)
        .map(savings => cost - cost * savings));


const nextCharForNumberString = str =>
  Id(str)
    .map(s => s.trim())
    .map(parseInt)
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))

// const res = nextCharForNumberString('  64 ');

const res = applyDiscount('120$', '20%');
// const res =  moneyToFloat('120$');
// const res =  percentToFloat('20%');

console.log(res);


export Id;
