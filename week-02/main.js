// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 每個有實做到的函數都做測試，另外也要多假設幾種情況，例如：空陣列又被pop 等等，觀察是否溢位。
stack.push(5);
stack.push(8);
stack.push(89);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("stack isEmpty? " + stack.isEmpty());
console.log("peek:"+stack.peek());
stack.print();
stack.clear();
console.log("stack isEmpty" + stack.isEmpty());
