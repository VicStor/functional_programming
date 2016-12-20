export default class Monad {
  constructor(val) {
    this.__value = val;
  }
  static of(val) { //Monad.of is simpler than "new Monad(val)
    return new Monad(val);
  };
  map(f) {//Applies the function but returns another Monad!
    return Monad.of(f(this.__value));
  };
  join() {
    return this.__value;
  };
  chain(f) {//Helper func that maps and then gets the value out
    return this.map(f).join();
  };
  ap(someOtherMonad) {//Used to deal w/ multiple Monads
    return someOtherMonad.map(this.__value);
  }
}
