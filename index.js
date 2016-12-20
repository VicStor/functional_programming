import Functor from './functor';
import Monad from './monad';
const add1 = a => a + 1;

//temp is a Functor instance that's storing value 1
// const temp = new Functor(2);
// temp.map(add1);

const a = 1;
const b = 2;

const aMon = Monad.of(a);
const bMon = Monad.of(b);

// console.log('Functor val: ', temp.map(add1).join());
console.log('mon val: ', aMon.ap(bMon));
console.log('mon2 val: ', bMon.chain(add1));
