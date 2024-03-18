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

/*
// 10
// const obj = {
//   x: "react",
//   handleClick: function () {
//     console.log(this.x);
//   },
// };

// function higherOrderFunction(callback) {
//   callback();
// }

// higherOrderFunction(obj.handleClick); // undefined

const obj = {
  x: "react",
  handleClick: function () {
    console.log(this.x);
  },
};

function higherOrderFunction(callback) {
  callback.bind(obj)();
}

higherOrderFunction(obj.handleClick); // react
*/

/*
// 11
const obj1 = {
  x: "angular",
  method1: function () {
    console.log(this.x);
  },
};

obj1.method1(); // angular

const obj2 = {
  x: "vue",
  method2: function () {
    obj1.method1();
  },
};

obj2.method2(); // angular
*/

/*
// 12
function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

let work = makeWorker();

work(); // Pete
*/

/*
// 13
function generateIncrementor() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const incrementor = generateIncrementor();
incrementor(); // 1
incrementor(); // 2
*/

/*
// 14
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // Hello
*/

/*
// 15
function delayedPrint() {
  let message = "Delayed message";

  setTimeout(function () {
    console.log(message);
  }, 1000);
}

delayedPrint(); // Delayed message
*/

/*
// 16
function manipulateData() {
  let data = [];

  return {
    add: function (item) {
      data.push(item);
    },
    print: function () {
      console.log(data);
    },
  };
}

const dataHandler = manipulateData();
dataHandler.add(1);
dataHandler.add(2);
dataHandler.print(); // [1,2]
*/

/*
// 17
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1
*/

/*
// 18
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
*/

/*
// 19
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
*/

/*
// 20
function sum(a) {
  return function (b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
*/

/*
// 21
let x = 1;

function func() {
  console.log(x); // Ref error

  let x = 2;
}

func();

// let x = 1;

// function func() {
//   console.log(x); // 1

// }

// func();
*/

/*
// 22
function inBetween(start, end) {
  return function (n) {
    return n >= start && n <= end;
  };
}

function inArray(arr1) {
  return function (n) {
    return arr1.includes(n);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
*/

// 23
