class Queue<T> {
  size: number;
  queue: T[] = [];
  rear: number;
  front: number;
  constructor(size: number) {
    this.size = size;
    this.rear = this.front = -1;
  }

  enqueue(value: T) {
    if (this.front === -1) {
      this.front++;
    }
    if (this.rear === this.size - 1) {
      throw new Error("Queue is full");
    } else {
      this.queue[++this.rear] = value;
    }
  }

  dequeue() {
    this.queue.splice(this.rear);
    this.rear--;
  }
}

const q = new Queue<string>(5);
q.enqueue("1");
q.enqueue("2");
q.enqueue("3");
console.log(q);
q.dequeue();
console.log(q);
q.enqueue("1");
console.log(q);
