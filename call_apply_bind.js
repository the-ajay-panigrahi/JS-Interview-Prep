/*
1. call method is used to call the function with the given this value and argument can be passed individually.
2. apply method is similar to call method, the only difference is that instead of passing argument individually, will pass the argument in a list/array.
3. bind method is similar to call method. It is also used to override this value, but the difference is it will not invoke the function instantly but return a function with attached this and argument which can be called later.
*/

// call apply bind => methods

const person1 = {
  firstName: "Ajay",
  middleName: "B",
  lastName: "Panigrahi",
  printFullName: function (state, country) {
    console.log(this);
    console.log(
      `Full name: ${this.firstName} ${this.middleName} ${this.lastName} - ${state}, ${country}`
    );
  },
};
// person1.printFullName("chai code");

const person2 = {
  firstName: "Randchodd",
  middleName: "Shamaldas",
  lastName: "Chanchad",
};
// person1.printFullName();
// person1.printFullName.call(person2, "AP", "India");

// person1.printFullName.apply(person2, ["AP", "India"]);

let result = person1.printFullName.bind(person2, "AP", "India");

result();
