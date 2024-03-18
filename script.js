/*
// 1
const obj2 = {
  x: "yandex",
  a: function f() {
    console.log(this.x);
  },
  b: () => {
    console.log("arrow", this.x);
  },
};

obj2.a();
obj2.b();

// yandex
// arrow undefined
*/

/*
// 2
const obj1 = {
  x: "google",
  a: function () {
    console.log(this.x);
  },
  b: () => {
    console.log("arrow", this.x);
  },
};

const obj2 = {
  x: "yandex",
  a: obj1.a,
  b: obj1.b,
};

obj2.a(); // google
obj2.b(); // arrow undefined
*/

/*
// 3
const obj = {
  x: "stackoverflow",
  handleClick: function () {
    setTimeout(function () {
      console.log(this.x);
    }, 100);
  },
};

obj.handleClick(); // undefined
// Тут теряется контекст, можно исправить, поменяв в setTimeout на стрелочную функцию, которая сохраняет конекст выполнения внешней области видимости
const obj1 = {
  x: "stackoverflow",
  handleClick: function () {
    setTimeout(() => {
      console.log(this.x);
    }, 100);
  },
};

obj1.handleClick(); // stackoverflow
*/

/*
// 4
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    setTimeout(function () {
      this.count++;
      console.log(this.count);
    }, 100);
  }
}

const counter = new Counter();
counter.increment(); // NaN поскольку теряется контекст внутри функции обратного вызова setTimeout внутри объекта Counter, и this ссылается на глобальный объект window
// Чтобы исправить это, надо использовать стрелочную функцию
class Counter1 {
  constructor() {
    this.count = 0;
  }
  increment() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 100);
  }
}

const counter1 = new Counter1();
counter1.increment();
counter1.increment();
counter1.increment();
*/

/*
// 5
const obj = {
  x: "apple",
  inner: {
    y: "banana",
    printX: function () {
      console.log(this.x);
    },
    printY: function () {
      console.log(this.y);
    },
  },
};

obj.inner.printX(); // undefined
obj.inner.printY(); // banana
*/

/*
// 6
const user = {
  name: "John",
  greet: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name);
    }, 100);
  },
};

// const user = {
//   name: "John",
//   greet: function () {
//     setTimeout(() =>{
//       console.log("Hello, " + this.name);
//     }, 100);
//   },
// };


user.greet(); // Hello, undefined
*/

/*
// 7
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";

sayHi(); // Pete
*/

/*
// 8
const numbers = {
  array: [1, 2, 3],
  getArray: function () {
    return this.array.map((number) => number * this.multiplier);
  },
  multiplier: 2,
};

console.log(numbers.getArray());
*/

/*
// 9
const obj = {
  x: "grape",
  methodWithArrowFunc: () => {
    console.log(this.x);
  },
};

obj.methodWithArrowFunc(); // undefined
*/

// 10
const obj = {
  x: "react",
  handleClick: function () {
    console.log(this.x);
  },
};

function higherOrderFunction(callback) {
  callback();
}

higherOrderFunction(obj.handleClick);
