function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

console.log(result1, result2); // Output: 8 6

// Uncommon bug: Type Narrowing Issue with Union Types

interface Person {
  name: string;
  age?: number; // age is optional
}

function greet(person: Person): string {
  let message: string;
  if (person.age !== undefined) {
    message = `Hello, ${person.name}! You are ${person.age} years old.`;
  } else {
    message = `Hello, ${person.name}!`;
  }
  return message;
}

let person1: Person = { name: "Alice", age: 30 };
let person2: Person = { name: "Bob" };

console.log(greet(person1)); // Output: Hello, Alice! You are 30 years old.
console.log(greet(person2)); // Output: Hello, Bob!

// The bug:  Even though TypeScript's type narrowing works well within the greet function,
//           unexpected behavior might arise if you try to access person.age outside of the if/else block.

let person3: Person = { name: "Charlie" };
// let age = person3.age; // This will produce an error because age is potentially undefined.
// To handle the potential undefined nature of person3.age, use optional chaining (?.)
let age = person3.age ? person3.age : 0;
// or nullish coalescing operator (??)
let age2 = person3.age ?? 0; // If person3.age is null or undefined, default to 0

console.log(age,age2); //output: 0 0

// Another potential issue: Type Assertion

function processData(data: any): number {
  // The following line is dangerous.  Using a type assertion (as string) here bypasses TypeScript's type checking and can lead to runtime errors
  let str: string = data as string;

  return parseInt(str, 10);
}

// Calling processData with a number will result in a runtime error (NaN) because the type assertion won't check the actual value at runtime.
let numResult = processData(123); //This will be parsed correctly
let strResult = processData("456"); //This will be parsed correctly
let errorResult = processData([1,2,3]); //This will cause runtime error
console.log(numResult, strResult, errorResult); // Output: 123 456 NaN