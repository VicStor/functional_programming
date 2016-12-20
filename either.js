const fs = require('fs');

// const Either = Right || Left

const Right = x =>
({
  map: f => Right(f(x)),
  chain: f => f(x),
  unFold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x =>
({
  chain: f => Left(x),
  map: f => Left(x),
  unFold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const Either = x => x != null ? Right(x) : Left(x)

const findColor = name =>
  Either(({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]);


// const getDescription = () => {
//   try {
//     const file = fs.readFileSync('package.json');
//     const package = JSON.parse(file);
//     return package.description;
//   } catch(e) {
//     return 'Default description';
//   }
// }


const tryCatch = f => {
  try {
    return Right(f());
  } catch(err) {
    return Left(err)
  }
}

const getDescription = () =>
  tryCatch(() => fs.readFileSync('package.json'))
    .chain(file => tryCatch(() => JSON.parse(file)))
    .unFold(_ => 'Default description',
            package => package.description);

// const res = findColor('green')
//   .map(s => s.slice(1))
//   .map(s => s.toUpperCase())
//   .unFold(err => 'error, no color', s => s)

const res = getDescription();

console.log(res);
