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