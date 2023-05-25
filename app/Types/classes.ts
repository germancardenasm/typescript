/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Classes are blueprints for objects

class Department {
  name: string;
  constructor(departmentName: string) {
    this.name = departmentName;
  }

  describe(): void {
    console.log(`Department: ${this.name}`);
  }
}

// Just for reference in es5 would be
const DepartmentConstructor = (function () {
  // @ts-expect-error -- Clases are Constructor function
  function Department(n): void {
    // @ts-expect-error as this needs types
    this.name = n;
  }
  return Department;
})();

class Team {
  name: string;
  readonly employees: string[] = [];

  constructor(departmentName: string) {
    this.name = departmentName;
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}
/*
 *  You can declare properties in a shorter way adding private or public
 *  in the constructor arguments
 */
class ShortDeclarationTeam {
  readonly employees: string[] = [];
  constructor(public name: string) {}

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}

// Public & Private
const yeti = new ShortDeclarationTeam('');

// For public this is allowed
yeti.name = 'Snuffles';

// For private you can't
// yeti.employees = ['I can not'];

// Static Methods and properties can be executed with out instantiating the class
class MyMath {
  public addResult: number = 0;
  private subtractResult: number = 0;
  protected multiplyResult: number = 0;
  static PI: number = Math.PI;

  subtract(a: number, b: number): number {
    this.subtractResult = a - b;
    return this.subtractResult;
  }

  multiply(a: number, b: number): void {
    this.multiplyResult = a * b;
  }

  circumference(): number {
    // @ts-expect-error -- P is static , is not part of a instance.
    let pi = this.PI;
    // You can access PI as a static property
    pi = MyMath.PI;
    return pi;
  }

  static add(...params: number[]): number {
    // Static methods can access static properties
    const internalPI = this.PI;
    return params.reduce((prev, curr) => prev + curr, 0);
  }
}

const addition = MyMath.add(1, 2); // Static method
const PI = MyMath.PI; // Static property

interface Results {
  add: number;
  multiply: number;
  subtract: number;
}

class Calculus extends MyMath {
  returnResults(): Results {
    return {
      add: this.addResult, // Public properties can be accessed in inherited classes
      multiply: this.multiplyResult, // Protected properties can be accesses here as well
      // @ts-expect-error -- Error caused by private property
      subtract: this.subtractResult, // Private properties cant be accessed outside
    };
  }
}

/*
 * An abstract method or abstract field is one that hasn’t had an implementation
 * provided.  These members must exist inside an abstract class, which cannot be
 * directly instantiated.
 *
 * The role of abstract classes is to serve as a base class for subclasses which
 * do implement all the abstract members.
 */

abstract class PhysicsAbstract extends MyMath {
  abstract force(mass: number, speed: number): number;
}

// @ts-expect-error -- Abstract Cant be instantiated
const physic = new PhysicsAbstract();

class Physics extends PhysicsAbstract {
  force(mass: number, speed: number): number {
    return mass * speed;
  }
}

// Singleton Classes are classes that only allow to have one instance

class IamSingleton extends MyMath {
  static instance: IamSingleton;
  private constructor() {
    super();
  }

  static getInstance(): IamSingleton {
    if (this.instance === undefined) {
      return IamSingleton.instance;
    }
    return new IamSingleton();
  }
}

const instance1 = IamSingleton.getInstance();
const instance2 = IamSingleton.getInstance();
console.log('Is singleton ? ==> ', instance1 === instance2);

// optional properties
class Jedi {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }
}
