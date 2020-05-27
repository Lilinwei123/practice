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
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    let i = 0;
    if (index !== -1) {
        console.log(index)
        return index;
    } else {
        while(target > nums[i]) {
            i++;
        }
        console.log(i)
        return i;
    }
};

searchInsert([1,3,5,6], 0)


