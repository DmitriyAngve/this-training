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

/*
// 23
function f() {
  console.log(this); 
}

let user = {
  g: f.bind(null),
};

user.g(); // null
*/

/*
// 24
// Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?
function f() {
  console.log(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // Вася
*/

/*
// 25
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // что выведет? почему?

// Ответ: undefined.

// Результатом работы bind является другой объект. У него уже нет свойства test.
*/

/*
// 26
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/

/*
// 27
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
*/

/*
// 28
var f = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function () {
    console.log(this.x);
  },
};

f(); // 3
new f(); // 5
obj.m(); // 4
new obj.m(); // undefined
f.call(f); // 5
obj.m.call(f); // 5
*/

/*
// 29
var x = 10;
var obj = {
  x: 20,
  getX: function () {
    return this.x;
  },
};
// var retrieveX = obj.getX;
// console.log(retrieveX()); // 10
var retrieveX = obj.getX.bind(obj);
console.log(retrieveX()); // 20
*/

/*
// 30
var person = {
  firstName: "Jane",
  lastName: "Smith",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var anotherPerson = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.call(anotherPerson)); // John Doe
*/

/*
// 31
function foo() {
  console.log(this.bar);
}

var bar = "global";
var obj1 = { bar: "obj1", foo: foo };
var obj2 = { bar: "obj2" };

foo(); // global
obj1.foo(); // obj1
foo.call(obj2); // obj2
*/

/*
// 32
var x = 10;
var obj = {
  x: 20,
  getX: function() {
    return this.x;
  }
};
var retrieveX = obj.getX.bind(obj);
console.log(retrieveX());
*/

/*
// 33
var bar = "outer";
function foo() {
  var bar = "inner";
  console.log(this.bar);
}
var obj = { bar: "object" };
obj.foo = foo;
foo(); // outer
obj.foo(); // object
foo.call(obj); // object
*/

/*
// 34
var bar = "global";
function foo() {
  console.log(this.bar);
}
var obj = { bar: "object" };
var fn = foo.bind(obj);
fn(); // object
*/

/*
// 35
var bar = "global";
var obj = {
  bar: "object",
  foo: function () {
    console.log(this.bar);
  },
};
var fn1 = obj.foo;
var fn2 = obj.foo.bind(obj);
fn1(); // global
fn2(); // object
*/

/*
// 36
var bar = "outer";
var obj = {
  bar: "object",
  foo: function () {
    console.log(this.bar);
  },
};
var fn = obj.foo.bind(window);
fn(); // outer
*/

/*
// 37
var bar = "global";
var obj = {
  bar: "object",
  foo: function () {
    console.log(this.bar);
  },
};
var fn = obj.foo.bind(null);
fn(); // global
*/

/*
// 38
var bar = "global";
function foo() {
  console.log(this.bar);
}
var obj1 = { bar: "object1", foo: foo };
var obj2 = { bar: "object2" };
var bindedFoo = foo.bind(obj2);
bindedFoo(); // object2
obj1.foo(); // object1
*/

/*
// 39
var bar = "outer";
var obj = {
  bar: "inner",
  foo: function () {
    console.log(this.bar);
  },
};
var foo = obj.foo.bind(obj);
foo(); // inner
*/

/*
// 40
var bar = "global";
function foo() {
  console.log(this.bar);
}
var obj1 = { bar: "object1" };
var obj2 = { bar: "object2" };
var boundFoo1 = foo.bind(obj1);
var boundFoo2 = boundFoo1.bind(obj2);
boundFoo2(); // object1
*/

/*
// 41
var bar = "global";
var obj = {
  bar: "object1",
  foo: function () {
    console.log(this.bar);
  },
};
var bindedFoo = obj.foo.bind({ bar: "object2" });
bindedFoo(); // object2
*/

/*
// 42
var bar = "global";
function foo() {
  console.log(this.bar);
}
var obj = {
  bar: "object",
  foo: foo.bind({ bar: "bound" }),
};
var unboundFoo = obj.foo;
unboundFoo(); // bound
*/

/*
// 43
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

person1.sayName(); // Alice
person2.sayName(); // Bob
*/

/*
// 44
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var method = obj.method;
method(); // undefined
*/

/*
// 45
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var obj2 = { prop: "anotherValue" };

obj.method.call(obj2); // anotherValue
*/

/*
// 46
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var obj2 = { prop: "anotherValue" };
var method = obj.method.bind(obj2);
method(); // anotherValue
*/

/*
// 47
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var obj2 = { prop: "anotherValue" };
var method = obj.method.bind(obj2);
obj.method(); // value
method(); // anotherValue
*/

/*
// 48
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var obj2 = { prop: "anotherValue" };
var method = obj.method.bind(obj2);
var obj3 = { prop: "thirdValue", method: method };
obj3.method(); // thirdValue
*/

/*
// 49
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var method = obj.method;
method(); // undefined

var obj1 = {
  prop1: "value",
  method1: function () {
    console.log(this.prop1);
  },
};

obj1.method1(); // value
*/

/*
// 50
var obj = {
  prop: "value",
  method: function () {
    console.log(this.prop);
  },
};

var method = obj.method.bind(null);
method(); // undefined
*/

// 51
var prop = "value";
var obj = {
  prop: "anotherValue",
  method: function () {
    console.log(this.prop);
  },
};

obj.method(); // anotherValue
var method = obj.method.bind(null);
method(); // value
