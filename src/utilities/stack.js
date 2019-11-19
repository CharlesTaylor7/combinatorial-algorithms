import 'babel-polyfill'
import * as R from 'ramda'
import wu from 'wu'

class Empty {
  constructor() {
    this[Symbol.iterator] = function* () {}
    return Object.freeze(this);
  }
}

function* iterateStack() {
  yield this.head;
  yield* this.tail;
}

const isStack = stack => {
  return stack instanceof Empty || stack instanceof Stack;
}

class Stack {
  constructor(head, tail) {
    if (!isStack(tail)) {
      throw new Error('Tail must be a stack.')
    }
    this.head = head;
    this.tail = tail;
    this[Symbol.iterator] = iterateStack.bind(this);
    return Object.freeze(this);
  }
}

const empty = new Empty();

const isEmpty = stack => stack instanceof Empty;

const push = (head, tail) => new Stack(head, tail);

const pop = (num, stack) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (!stack.tail) throw new Error('Not enough elements in stack')
    result.push(stack.head);
    stack = stack.tail;
  }
  result.push(stack);
  return result;
};

function* reverse(array) {
  for(let i = array.length - 1; i > -1; i--) {
    yield array[i];
  }
}

const from = R.pipe(
  reverse,
  wu.reduce((stack, elem) => push(elem, stack), empty)
);

export default {
  empty,
  isEmpty,
  push,
  pop,
  from,
}
