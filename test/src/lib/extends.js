// // 原型继承: 子类的原型指向父类的实例, 子类的构造指向自己
// function Parent () {
//   this.name = 'alin';
// }

// Parent.prototype.getName = function () {
//   return this.name;
// }

// function Child () {}

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const parent = new Parent();
// const child = new Child();

// console.log(child.name);
// console.log(child.getName())


// 构造函数继承
// function Parent() {
//   this.name = 'liming';
// }

// Parent.prototype.getName = function () {
//   return this.name;
// }

// function Child() {
//   Parent.call(this)
// }

// var child = new Child();

// console.log(child.name);

function Parent(name) {
  this.name = [name]
}
Parent.prototype.getName = function() {
  console.log('parent name')
}
function Child() {
  // Parent.prototype.getName.call(this);   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}

Child.prototype.__proto__ = Parent.prototype;

//测试
const child1 = new Child();
child1.getName()






