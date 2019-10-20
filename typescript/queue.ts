class Queue<T> {
  size: number;
  queue: T[] = [];
  currentIndex: number = 0;

  constructur(size: number) {
    this.size = size;
  }

  isFull() {
    return this.size === this.currentIndex - 1;
  }

  enqueue(value: T) {
    if (!this.isFull()) {
      this.queue[this.currentIndex] = value;
      this.currentIndex++;
    } else {
      throw new Error("over size");
    }
  }

  dequeue() {
    this.queue.shift();
  }
}
