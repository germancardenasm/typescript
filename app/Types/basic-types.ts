/* eslint-disable @typescript-eslint/no-unused-vars */
const age: number = 41;
const firstName: string = 'Anakin';
const lastName: string = 'Skywalker';
const isMale: boolean = true;
const hobbies: string[] = [
  'destroy planets',
  'choke people',
  'intimidate subordinates',
];

// Tuple is an special array with fixed length and fixed type in each position
const thisIsATuple: [number, string] = [12345, 'admin'];

// Enum , are fixed maps from a constant identifier to a value
enum Roles {
  ADMIN, // If no value assigned it starts in 0
  APPROVER, // It will increment by 1 , in this case APPROVER is 1
  BUYER = 10, // You can assign any value to any identifier
}

const isAdmin = Roles.ADMIN === 0;
const isBuyer = Roles.BUYER === 10;

// Inline typing
const person: {
  age: number;
  firstName: string;
  lastName: string;
  isMale: boolean;
  hobbies: string[];
} = {
  age,
  firstName,
  lastName,
  isMale,
  hobbies,
};

// Interface typing
interface Person {
  age: number;
  firstName: string;
  lastName: string;
  isMale: boolean;
  hobbies: string[];
}
const jedi: Person = {
  age,
  firstName,
  lastName,
  isMale,
  hobbies,
};

export {};
