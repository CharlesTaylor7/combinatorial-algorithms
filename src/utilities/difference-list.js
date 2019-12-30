import Stack from './stack'

class DList {
  constructor(func) {
    this.func = func;
  }

  static empty = new DList(x => x);

  push(x) {
    return new DList(stack => this.func(stack).push(x));
  }

  append(x) {
    return new DList(stack => this.func(stack.push(x)));
  }

  toStack() {
    return this.func(Stack.empty)
  }
}

export default DList;
