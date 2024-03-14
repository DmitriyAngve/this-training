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
