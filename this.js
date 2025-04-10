/*
    this => current context
*/

"use strict";

const human = {
  name: "Ajay",
  age: "99",
  designation: "PM",
  startWorking: function () {
    console.log(this);
    console.log(`Hello ${this.name}, you are currently a ${this.designation}`);
  },
};

// human.startWorking();

// this in global space
// console.log(this); // globalObject => window object /{}

// this inside a function
// one more side note => "this" behaves differently in strict mode and non-strict mode

// this inside non-strict mode -(this substitution)
//if the value of this keyword is undefined or null, this keyword will be replaced with globalObject(only in non-strict mode).

function demo() {
  // non strict mode => window object
  // strict mode => undefined
  console.log(this);
}
// demo();

// this value depends on how this is called
// demo();
// window.demo();

// this inside a object's method
let anObject = {
  key1: "sample",
  key2: function () {
    console.log(this);
    console.log(this.key1);
  },
};

// anObject.key2();

// call apply bind methods (sharing methods)

// this inside arrow function

// function sumOf2Nums(x, y) {
//   console.log(this);
//   return x + y;
// }

//  console.log(this);

// console.log(this);
const sumOf2Nums = (x, y) => {
  console.log(this); // enclosing lexical environment
  return x + y;
};

// console.log(sumOf2Nums(2, 3));

// this inside nested arrow function
function ajeeb() {
  console.log(this);
  const demo = () => {
    console.log(this);
  };
  demo();
}
// ajeeb();

// this inside DOM - done

class ChaiCode {
  constructor() {
    console.log(this);
  }
}

const obj = new ChaiCode();

class Demo {
  constructor() {
    console.log(this);
  }
}

const demoObj1 = new Demo();
