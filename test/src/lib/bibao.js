// 闭包
function hd () {
  let n = 1; 
  return function sum () {
    console.log(++n);
  }

  // sum();
}

// hd();hd();hd();hd(); // 一直是2，因为调用完后数据会被清掉
// let a = hd();
// a();
// a();a();a();a();a();
// let b = hd();
// b();b();

// 只要被用着，变量就不会被清掉，就会一直保留

// 构造函数中的作用域
// function Hb() {
//   let n = 1;
//   function sum() {
//     console.log(++n);
//   }

//   return {
//     sum: sum
//   }
// }

// let a = new Hb();
// a.sum();a.sum();a.sum();

// let b = new Hb();
// b.sum();b.sum();b.sum();


//  for (var i = 1; i <= 3; i++) {
//    (function (a) {
//      setTimeout(() => {
//       console.log('i = ', a);
//      }, 1000)

//    })(i);
//  }
//  console.log(i)

// 多级作用域嵌套详解
// let arr = [];
// for (var i = 0; i <= 3; i++) {
//   (function (i) {
//     arr.push(function() {
//       return i;
//     })
//   }) (i)
// }

// console.log(arr[2]())


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function between (n, m) {
  return function (t) { 
    return t >= n && t <= m
  }
}

console.log(arr.filter(between(3, 9)))

console.log(arr.filter(function (t) { 
  return t >= 4 && t <= 8
}))

