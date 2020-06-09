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

// 实现const
// function _const (key, value) {
//   Object.defineProperty(window, key, {
//     value,
//     writable: false
//   })
// }

// _const('a', 3)
// const a = 3

// // 原型继承
// function Parent() {
//   this.name = ['alin'];
// }

// Parent.prototype.getName = function () {
//   console.log('parent---' + this.name)
// }

// function Child () {
//   console.log('child---' + this.name);
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// var child = new Child();
// // console.log('lll---', child.name);
// // child.getName();

// var child1 = new Child();
// child1.name[0] = 'ankjun';
// console.log(child.name);
// console.log(child1.name);

// ’AbC' 变成 'aBc'
// let oldStr = 'AbC';
// let arr = oldStr.split('');
// console.log(arr)
// let newArr = arr.map( t => t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase())

// console.log(newArr.join(''));

// // 'ghjghjhjkgftydezoiuon,jghvcfgc'中找出'ydezoiu'
// let str = 'ghjghjhjkgftydezoiuon,jghvcfgc';
// let searchStr = 'ydezoiu';

// console.log(str.indexOf(searchStr))
// ----------------------------------------------------

// 1-10000对称数
// let a = [...Array.from({length:10000}).keys()].filter((t) => {
//   return  t === Number.parseInt(t.toString().split('').reverse().join(""), 10);
// })
// console.log(a)
// ----------------------------------------------------

// 手写call
// function foo() {
//   console.log(this.name)
// }

// // 测试
// const obj = {
//   name: 'alin'
// }

// foo.call(obj)
// Function.prototype.myCall = function (thisArgs, ...args) {
//   thisArgs = thisArgs || window;
//   const fn = Symbol('fn');

//   thisArgs[fn] = this;
//   const result = thisArgs[fn](...args);
//   delete thisArgs[fn];
//   return result;
// }
// ----------------------------------------------------

// var longestCommonPrefix = function(strs) {
//   let isSame = true;
//   let i = 0;

//   if (Array.isArray(strs) && typeof strs[0] == 'string') {
//     if (strs.length > 0) {
//       while (i <= strs[0].split('').length && isSame) {

//         isSame = strs.every((item) => {
//           return strs[0].substring(i, i+1) == item.substring(i, i+1);
//         });

//         i++;
//       }

//       return strs[0].substring(0, i-1) || '';
//     } else {
//       return strs[0];
//     }
//   }

//   return '';
// };
// console.log('---'+longestCommonPrefix(['f']))
// ----------------------------------------------------

// let arr = [];

// function removeRepeat(arr) {
//   if (arr.length === 0) return [];
//   let i = 1;
//   let pivot = arr[0];
//   while (i < arr.length) {
//     if (pivot === arr[i]) {
//       arr.splice(i, 1);
//     } else {
//       pivot = arr[i];
//       i++;
//     }
//   }

//   return arr.length;
// }
// removeRepeat(arr);
// console.log(arr)

// ----------------------------------------------------

// js事件机制
// console.log('global');

// setTimeout(function() {
//     console.log('setTimeout1');
//     new Promise(function(resolve) {
//         console.log('setTimeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('setTimeout1_promiseThen')
//     })
//     process.nextTick(function() {
//         console.log('setTimeout1_nextTick');
//     })
// },0)

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promiseThen1')
// })

// setImmediate(function() {
//     console.log('setImmediate');
// })

// process.nextTick(function() {
//     console.log('nextTick');
// })

// new Promise(function(resolve) {
//     console.log('promise2');
//     resolve();
// }).then(function() {
//     console.log('promiseThen2')
// })

// setTimeout(function() {
//     console.log('setTimeout2');
// },0)

// ----------------------------------------------------

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// var searchInsert = function(nums, target) {
//     let index = nums.indexOf(target);
//     let i = 0;
//     if (index !== -1) {
//         console.log(index)
//         return index;
//     } else {
//         while(target > nums[i]) {
//             i++;
//         }
//         console.log(i)
//         return i;
//     }
// };

// searchInsert([1,3,5,6], 0)

// function swap (arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function quickSort(arr, left, right){
//     if (left >= right) return;
//     let qivot = arr[left];
//     let i = left+1;
//     let j = right;

//     while (i < j) {
//         while (arr[j] > qivot && i < j) j--;
//         while (arr[i] < qivot && i < j) i++;
// console.log(arr)
//         if (i < j) {
//             swap(arr, i, j);
//         }
//     }
//      swap(arr, left, i);

//      quickSort(arr, left, i-1);
//      quickSort(arr, i+1, right);
// }
// let arr = [1,3,5,5,5,2];
// // console.log(arr.length-1)
// quickSort(arr, 0, arr.length-1)
// console.log(arr)

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   let a = [1,3,5,5,5,2];
// //   let a = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

  // function quickSort (arr, left, right) {
  //   if (left >= right) return;
  //   let qivot = arr[left];
  //   let i = left;
  //   let j = right;

  //   while (i < j) {
  //     while (arr[j] > qivot && i<j) j--;
  //     while (arr[i] <= qivot && i<j) i++;

  //     if (i<j)
  //     swap(arr, i, j);
  //   }

  //   if (arr[left] > arr[i])
  //       swap(arr, left, i);

  //   quickSort(arr, left, i-1);
  //   quickSort(arr, i+1, right);
  // }
  // console.log(a)
  // quickSort(a, 0, a.length-1);
  // console.log(a)

// let arr = [1,3,5,5,5,2];
// // let sameArr = Array.from(arr);

// let sameArr = arr.map((value, key) => {
//     let obj = {};
//     obj.index = key;
//     obj.value = value;

//     return obj;
// })

// sameArr.sort((a, b) => {
//     return a.value-b.value;
// });

// sameArr.splice(4, sameArr.length-4);
// let newArr = sameArr.map((value)=>{
//     return arr[value.index];
// })

// console.log(newArr)

// console.log(sameArr)
// console.log(arr)

// var lengthOfLastWord = function(s) {
//     let arr = s.split(' ');
// // console.log(arr[0].length)
//     let i = arr.length-1;
//     while (arr[i].length === 0 && i > 0) {
//         i--;
//     }
//     return arr[i].length ;
// };

// console.log(lengthOfLastWord(''));

// var removeElement = function(nums, val) {
//     while (nums.indexOf(val) !== -1) {
//         nums.splice(nums.indexOf(val), 1);
//     }

//     return nums.length;
// };
// console.log(removeElement([], 2))

// let itemArr = [];
// var isHappy = function(n) {
//     let arr = n.toString().split('');
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value*value;
//     });

// console.log(sum)
//     if (sum === 1) {
//         return 1;
//     } else {
//         if (itemArr.indexOf(sum) !== -1) {
//             return 0;
//         } else {
//             itemArr.push(sum);
//             isHappy(sum);
//         }
//     }
// };

// console.log(isHappy(19));

// let SourceObject = {
//     a:1,
//     b: {
//         c: 2
//     }
// }

// let copiedObject = SourceObject;
// copiedObject.a = 3;
// copiedObject.b.c = 4;

// console.log(SourceObject);

// 观察者模式
// class Observers {
//     constructor (fn) {
//         this.update = fn;
//     }
// }
// class Subjects {
//     constructor () {
//         this.observers = [];
//     }
//     addObservers (observer) {
//         this.observers.push(observer);
//     }
//     notify () {
//         this.observers.forEach(observe => {
//             observe.update();
//         })
//     }
// }

// const subject = new Subjects();
// const update = () => {console.log('观察到变化了，更新一下')};
// const observer1 = new Observers(update);
// const observer2 = new Observers(update);
// subject.addObservers(observer1);
// subject.addObservers(observer2);
// subject.notify();

// let a = '红蓝蓝黄红黄蓝红红黄红';
// function sortColor (a) {
//     a = a.split('');
//     console.log(a);
//     let i = 0;
//     let newArr = [];
//     while (i !== -1) {
//         i = a.indexOf('红');
//         newArr.push(...a.splice(i, 1));
//         console.log(newArr)
//     }
// }
// sortColor(a)

// let stu = {name: 'alin', age: 10, sex: 'femela', isStu: true};
// // for (let key in stu){
// //     console.log(key)
// // }

// console.log(Object.assign({isStu: false}, stu))

// class Phone {
//   constructor() {
//     console.log("I'm a phone.");
//   }
// }

// class MI extends Phone {
//   constructor() {
//     super();
//     console.log("I'm a phone designed by xiaomi");
//   }
// }

// let mi8 = new MI();


// Jsonp封装
// function jsonp(url, cb) {
//   let fnName = 'callback' + num;
//   let script = document.createElement('script');
//   script.src = url + '&callback=' + fnName;
//   document.body.appendChild(script);
  
//   window[fnName] = function (data) {
//     cd(data);
//   }
// }

// let obj = {
//   name:"xm",
//   age:30,
//   cars:{
//       bmw:"30w",
//       bench:"60w"
//   }
// }
// let obj1 = obj;
// obj.cars.bmw = '40w';
// console.log(obj1.cars); // { bmw: '40w', bench: '60w' }

// function deepClone (obj) { 
//   if (obj instanceof Object === false) {
//     return obj;
//   }
//   let newObj = {};
//   for (let key in obj) {
//     newObj[key] = deepClone(obj[key]);
//   }

//   return newObj;
// }

// let obj2 = deepClone(obj);
// obj.cars.bw = '44w';
// console.log(obj2)






