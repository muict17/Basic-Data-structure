class Stack<T> {
  size: number;
  stack: T[] = [];
  currentIndex: number = 0;

  constructor(size: number) {
    this.size = size;
  }

  isFull() {
    return this.size === this.currentIndex;
  }

  push(value: T) {
    if (!this.isFull()) {
      this.stack[this.currentIndex] = value;
      this.currentIndex++;
    } else {
      throw Error("Over size");
    }
  }

  pop() {
    this.currentIndex--;
    this.stack.splice(this.currentIndex, 1);
  }
}

const testStack = new Stack<string>(4);
testStack.push("a");
testStack.push("b");
testStack.push("c");
testStack.push("d");

testStack.pop();
// Uncomment to show Error
// testStack.push("a");
// testStack.push("a");
console.log(testStack);
