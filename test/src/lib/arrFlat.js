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

let oldArr = [0,1,0,3,12];
let i = 0;
oldArr.map((value, index) => {
  if (value === 0 && index < Math.round(oldArr.length / 2)) {
    let temp = oldArr[index];
    oldArr[index] = oldArr[oldArr.length - i - 1];
    oldArr[oldArr.length - i - 1] = temp;
    i++;
  } 
})
console.log(oldArr)