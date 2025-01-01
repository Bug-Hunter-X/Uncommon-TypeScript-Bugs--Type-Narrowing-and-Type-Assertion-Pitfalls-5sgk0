# Uncommon TypeScript Bugs

This repository demonstrates some uncommon but potentially tricky bugs in TypeScript that can lead to unexpected behavior or runtime errors.  The examples focus on issues related to type narrowing with union types and the misuse of type assertions.

## Bugs Covered

* **Type Narrowing with Union Types:**  Illustrates how even though TypeScript's type narrowing works well within certain code blocks, accessing properties of union types outside those blocks can lead to unexpected undefined errors. Safe ways to handle potential undefined values are demonstrated using the optional chaining operator (?.) and the nullish coalescing operator (??).
* **Type Assertion Pitfalls:**  Highlights the potential dangers of using type assertions (`as Type`). Using type assertions bypasses TypeScript's type safety checks during compile time.  Improper usage can lead to runtime errors even though the code compiles without errors.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Compile and run the TypeScript code using the following command (you'll need to have Node.js and npm installed):
   ```bash
   npx tsc && node bug.js
   ```

## Solutions

Solutions to the bugs are provided in `bugSolution.ts`.  These solutions demonstrate safer ways to handle union types and avoid the misuse of type assertions.