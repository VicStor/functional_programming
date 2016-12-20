export default class Functor { //Custom "Functor"
  constructor(value) {
    this.__val = value;
  }
  map(fn) {   //Applies function to this.val + returns new Myfunctor
    return new Functor(fn(this.__val));
  }
  join() { // used to get the value out of the Monad
    return this.__val;
  };
}
