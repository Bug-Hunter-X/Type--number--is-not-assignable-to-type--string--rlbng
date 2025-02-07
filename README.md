# Type 'number' is not assignable to type 'string' in TypeScript
This repository demonstrates a common type error in TypeScript where a function's return type is explicitly defined as a string, but the function returns a number. This leads to a type mismatch error during compilation.

## The Bug
The bug lies in the `conflict` function.  It's declared to return a `string`, but the addition operation (`a + b`) results in a `number`. TypeScript's type checker correctly identifies this inconsistency and throws an error.

## The Solution
The solution involves correcting the return type of the `conflict` function to `number` to match the actual return value. Alternatively, if you intend to return a string representation of the number, you would need to explicitly convert the result to a string using `String()`.

## How to Reproduce
1. Clone this repository.
2. Compile the code using the TypeScript compiler (`tsc bug.ts`).
3. Observe the compilation error. 
4. Examine the `bugSolution.ts` file to see the corrected version of the code.
