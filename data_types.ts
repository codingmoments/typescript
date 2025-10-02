// Primitive types: number, string, boolean
let age: number = 30;
age = 31;

let userName: string = 'Max';
userName = 'Manu';

let isInstructor: boolean;
isInstructor = true;

// More complex types: arrays, objects
let hobbies: string[] = [ 'Sports', 'Cooking' ];
hobbies = [ 'Reading', 'Traveling' ];

let person: { name: string; age: number };
person = { name: 'Max', age: 32 };

let people: { name: string; age: number }[];
people = [ { name: 'Max', age: 32 }, { name: 'Manu', age: 29 } ];

// Type inference
let course = 'React - The Complete Guide';

// Union type
let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 12341;

// Type alias
type Student = {
  name: string,
  class: string,
  age: number
}
let student: Student;
student = { name: 'Alice', class: '10th Grade', age: 15 };

let students: Student[];
students = [
  { name: 'Bob', class: '10th Grade', age: 16 },
  { name: 'Charlie', class: '11th Grade', age: 17 }
];

// Functions and types
function add( a: number, b: number ) {
  return a + b;
}

function multiply( a: number, b: number ): number {
  return a * b;
}

function addOrConcat( a: number | string, b: number | string ): number | string {
  if ( typeof a === 'number' && typeof b === 'number' ) {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

// Generics
function insertAtBeginning<T>( array: T[], value: T ) {
  const newArray = [ value, ...array ];
  return newArray;
}

const numberArray = [ 1, 2, 3 ];
const updatedNumberArray = insertAtBeginning( numberArray, -1 ); // [-1, 1, 2, 3]

const stringArray = [ 'b', 'c', 'd' ];
const updatedStringArray = insertAtBeginning( stringArray, 'a' ); // ['a', 'b', 'c', 'd']

// Classes and interfaces
class Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  private salary: number;
  dateOfJoining: Date;

  constructor( employeeId: number, firstName: string, lastName: string, salary: number, dateOfJoining: Date ) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.dateOfJoining = dateOfJoining;
  }

  updateSalary( newSalary: number ): void {
    this.salary = newSalary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const employee = new Employee( 1, 'John', 'Doe', 50000, new Date( '2020-01-15' ) );
employee.updateSalary( 55000 );
console.log( employee.getSalary() );

class Manager {
  constructor( public employeeId: number, public name: string, private salary: number ) { }

  updateSalary( newSalary: number ): void {
    this.salary = newSalary;
  }
}

const manager = new Manager( 2, 'Jane Smith', 60000 );

// Interfaces
interface Car {
  make: string;
  model: string;
  year: number;
  getDetails: () => string;
}

let myCar: Car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  getDetails() {
    return `${ this.year } ${ this.make } ${ this.model }`;
  }
};

class SportsCar implements Car {
  constructor( public make: string, public model: string, public year: number, public topSpeed: number ) { }

  getDetails() {
    return `${ this.year } ${ this.make } ${ this.model } with a top speed of ${ this.topSpeed } mph`;
  }
}