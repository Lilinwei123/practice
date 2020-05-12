// 原型继承: 子类的原型指向父类的实例, 子类的构造指向自己
function Parent () {
  this.name = 'alin';
}

Parent.prototype.getName = function () {
  return this.name;
}

function Child () {}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const parent = new Parent();
const child = new Child();

console.log(child.name);
console.log(child.getName())
