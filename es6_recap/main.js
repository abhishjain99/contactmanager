// // CONST LET VAR
console.log("\nCONST LET VAR");
var fName = "Abhish"; // for block level scope, can be used in loop
let fname; // just initialized
const f_name = "Abhi"; // can not mutate, can use with object and array

// So these are valid too--
const person = { name: "Abhish", age: 25 }
person.name = "Abhi";
console.log("person", person); // will show name as Abhi

const fruits = ["Apples", "Bananas", "Oranges"];
fruits.push("Grapes");

// But these are not valid
// person = { name: "Abhi" }
// fruits = [4]


// // ARROW FUNCTION // //
console.log("\nARROW FUNCTION")
function sayHello(name) {
  console.log("Hello " + name);
}
const sayHello2 = (name) => {
  console.log(`Hello ${name}`);
}
sayHello("Abhish");
sayHello2("Abhi");

// // FOREACH // //
console.log("\nFOREACH");
fruits.forEach((fruit, index) => console.log("fruits", index, fruit))


// // MAP // //
// like foreach, but returns an array. We can change item in array however we want
// We can also do something on the iterator just like forEach.
console.log("\nMAP");
const singularFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log("singular fruit", singularFruit);


// // FILTER // //
// filter out items that don't meet criteria
console.log("\nFILTER");
// used in redux or context API where we need to filter out some data from state
const people = [
  { id: 1, name: "Abby" },
  { id: 2, name: "Bobby" },
  { id: 3, name: "Coby"}
]
// because state is immutable in react, we cannot change directly. So we return new array making a new array without something.
const people2 = people.filter(person => person.id !== 2);
console.log("people", people);
console.log("people 2", people2);


// // SPREAD // //
// useful as state is immutatble. So instaed of directly modifying it, we have to make copy of it
console.log("\nSPREAD");
const arr = [1, 2, 3]
const arr2 = [...arr, 4];
const arr3 = [arr, 4]
const arr4 = [...arr.filter(n => n !== 2), 4];
console.log("arr 1", arr);
console.log("arr 2", arr2);
console.log("arr 3", arr3);
console.log("arr 4", arr4);

const person2 = { ...person, email: "abhi@example.com" }
const person3 = { person, email: "abhi@example.com" }
console.log("person 2", person2);
console.log("person 3", person3);


// // DESTRUCTURING // //
console.log("\nDESTRUCTURING");
const profile = {
  name: "n1",
  address: {
    street: "s1",
    city: "c1"
  },
  hobbies: ["h1", "h2", "h3"]
} // this can be a redux state

const { name } = profile;
const { address, hobbies } = profile;
const { street, city } = profile.address;

console.log("name", name);
console.log("address", address);
console.log(street, city);
console.log("hobbies", hobbies);
// in react used as this.state.profile; OR this.props.name;


// // CLASSES // //
console.log("\nCLASSES");
// react component class
class Person {
  // property and methods
  constructor(name, age) { // need to store properties
    console.log("constructor ran");
    this.name = name
    this.age = age;
  }

  greet() {
    return `name: ${this.name} , age: ${this.age}`;
  }
}
const person1 = new Person("Abh", 24);
const person4 = new Person("Abhish", 25);
console.log("person 1", person1.name, person1.age);
console.log("person 4", person4.greet());


// // SUBCLASSES // //
console.log("\nSUBCLASSES");
class Customer extends Person {
  // in react extends React.Component which has lifecycle methods
  constructor(name, age, balance) {
    super(name, age); // part of parent, so take from parent using super keywordß
    this.balance = balance;
  }
  info() {
    return `name: ${this.name}, balane: $${this.balance}`;
  }
}
const customer1 = new Customer("Abhi", 23, 3000);
const customer4 = new Customer("Abhishek", 26, 100);
console.log("customer1", customer1);
console.log('customer4', customer4.info());


// // MODULES // //
console.log("\nMODULES");
// in react file created for components, export from component and imported in main file
// weback or babble is needed, not compatible for browser
// Let's say we have file1 = file1.js--
// export const f1_name = "Ab";
// export const f1_nums = [1,2,3];
// export default f1_Person; // f1_Person is class from file1.
// we can export strings, functions, classes, anything from file1

// Let's say we have file2 = file2.js--
// import { f1_name, f1_nums } from "./file1";
// console.log(`Name from file1: ${f1_name}, ${f1.nums}`);
// import f1_Person from "./file1"; // no curly braces needed around Person as it was exported as default.