// import './lib/bibao.js'

// console.log('success!');
// console.warn('error' + new Date().getTime());

// function wait (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// }

// wait(1000).then(() => {
//   console.log('wait'  + 's');
//   console.log(new Date().getTime());
// });

// async function wait1 (time) {
//   setTimeout(() => {
//     console.log(new Date().getTime());
//   }, time);
// }

// async function method() {
//   console.log('pre----', new Date().getTime());
//   await wait(1000);
//   console.log('font-----', new Date().getTime());
// }

// method();

// function processString (s) {
//   var arr = s.split('');
//   var new_arr = arr.map((item) => {
//       return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
//   });
//   return new_arr.join('');
// }
// console.log(processString('AbC'));

// 数组扁平化
// const arr = [1, [1,2], [1,2,3]];
// let arrNew = [];

// function flatArr (arr) { 
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       flatArr(item);
//     } else {
//       arrNew.push(item);
//     }
//   });
// }

// flatArr(arr);
// console.log(arrNew);

// es2019
// arr.flat();

// 数组的扩展实现
// let arr = [1, [1,2], [1,2,3,[4,4,4]]];

// while(arr.some(Array.isArray)) {
//   arr = [].concat(...arr)
//   console.log('while arr----', arr)
// }
// console.log(arr)

// 实现const
// function _const (key, value) {
//   Object.defineProperty(window, key, {
//     value,
//     writable: false
//   })
// }

// _const('a', 3)
// const a = 3



// 原型继承
function Parent() {
  this.name = ['alin'];
}

Parent.prototype.getName = function () {
  console.log('parent---' + this.name)
}

function Child () {
  console.log('child---' + this.name);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
// console.log('lll---', child.name);
// child.getName();

var child1 = new Child();
child1.name[0] = 'ankjun';
console.log(child.name);
console.log(child1.name);


