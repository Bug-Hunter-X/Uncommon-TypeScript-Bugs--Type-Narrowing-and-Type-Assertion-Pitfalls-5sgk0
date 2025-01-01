// Solution to Type Narrowing Issue:

function greet(person: Person): string {
  let message = `Hello, ${person.name}!`; // Default message
  if (person.age !== undefined) {
    message += ` You are ${person.age} years old.`;
  }
  return message;
}

// Or use optional chaining (?.)
function greet2(person: Person): string {
  return `Hello, ${person.name}!${person.age ? ` You are ${person.age} years old.` : ''}`;
}

// Or use nullish coalescing operator (??)
function greet3(person: Person): string {
  const ageDescription = person.age !== undefined ? `You are ${person.age} years old.` : '';
  return `Hello, ${person.name}! ${ageDescription}`;
}

// Solution to Type Assertion Pitfall

function processData(data: any): number {
  if (typeof data === 'string') {
    return parseInt(data, 10);
  } else if (typeof data === 'number') {
    return data;
  } else {
    throw new Error('Invalid data type. Expected string or number.');
  }
}

// Or using Type Guards:
function isString(value: any): value is string {
    return typeof value === 'string';
  }
  
function processData2(data: any): number {
    if (isString(data)) {
      return parseInt(data, 10);
    } else if (typeof data === 'number') {
      return data;
    } else {
      throw new Error('Invalid data type. Expected string or number.');
    }
  }