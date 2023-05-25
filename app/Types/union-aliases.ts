/* eslint-disable @typescript-eslint/no-unused-vars */

/* Union Types */
type combinableValue = string | number;

function combine(a: combinableValue, b: combinableValue): combinableValue {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    throw new Error('Both values should be the same type');
  }
}

function printf(a: number | string): void {
  console.log('Value received: ', a);
}

/* Literal types */

interface UserOfTheForce {
  name: string;
  age: number;
  role: 'apprentice' | 'padawan' | 'master';
}

const jedi: UserOfTheForce = {
  name: 'Rogu',
  age: 100,
  // @ts-expect-error -- Role is string but only the three strings
  role: 'sith',
};

// Literal types also can be created with type declaration
type jediRoles = 'apprentice' | 'padawan' | 'master';

export {};
