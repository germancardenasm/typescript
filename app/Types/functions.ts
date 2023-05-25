/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

const addAndHandle = (
  a: number,
  b: number,
  cb: (result: number) => void
): void => {
  const total = a + b;
  cb(total);
};

type HandlePrint = (message: number | string) => void;

const combineAndHandle = (a: number, b: number, cb: HandlePrint): void => {
  const total = a + b;
  cb(total);
};

// Function parameters default values
const add = (a: number, b: number = 0): number => {
  return a + b;
};

// Rest parameters
const logArguments = (...rest: string[]): void => {
  console.log(...rest);
};
logArguments('hello', 'world', '!');

// Unknown  type

let anyValue: any = 'hello';
let unknownValue: unknown = 'hello';
let name: string;

name = anyValue; // No complains from TS

// @ts-expect-error --  TS can't warranty it is going to be a string
name = unknownValue;

if (typeof unknownValue === 'string') {
  name = unknownValue; // No complains from TS as it is sure it is a string
}

export {};

// Never

function generateError(): never {
  // Never means the function will never get to return anything, not even undefined
  throw new Error('I break the scrip and the function never returns');
}

const result = generateError();
console.log('this line will never be printed');
