/* eslint-disable @typescript-eslint/no-unused-vars */

// type AddFn = (a: number, b: number) => number;
type AddFn = (a: number, b: number) => number;

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

// interfaces can be extended
interface Greetable extends Named {
  greet: (phrase: string) => void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

const user1: Greetable = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
