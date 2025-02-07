function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number
let result2 = subtract(5, 3); // result2: number

console.log(result1); // Output: 8
console.log(result2); // Output: 2

//This will fix the compilation error.
function conflict(a: number, b: number): number {
  return a + b;
}

//Or you can convert the result explicitly to string
function conflictString(a: number, b: number): string {
  return String(a + b);
}