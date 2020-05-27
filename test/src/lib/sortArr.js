// let arr = [85, 24, 63, 85, 31, 45, 17, 31, 95, 50];
// 快排
// function quickSort (arr) {
//   if (arr.length <= 0) { return arr; }

//   // '基准'下标
//   // let pivotIndex = Math.floor(arr.length / 2);
//   // '基准'值
//   // let pivot = arr.splice(pivotIndex, 1);
//   let pivot = arr[0];
//   let middle = [];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else if (pivot < arr[i]) {
//       right.push(arr[i]);
//     } else {
//       middle.push(arr[i])
//     }
//   }

//   // console.log('left---' + left);
//   // console.log('right---' + right);
//   // console.log(quickSort(left).concat(pivot, quickSort(right)));
//   return quickSort(left).concat(middle, quickSort(right));
// }

// quickSort(arr);

// console.log(quickSort(arr))

// let arr = [85, 24, 63, 85, 31, 45, 17, 31, 95, 50];

// function quickSort (arr) {
//   let index = Math.floor(arr.length/2)-1;
//   let start = 0;
//   let end = arr.length - 1;

//   for (let i = 0; i < index; i++) {
//     if (arr[i] > arr[index]) {

//     }
//   }

//   for (let j = end; j > index; j--) {

//   }
//   console.log(qivot);
// }

// quickSort(arr);

// let arr = [3, 1, 2, 5, 4];
// function quickSort(arr, left, right) {
//   var len = arr.length,
//       partitionIndex;
//       // left = typeof left != 'number' ? 0 : left,
//       // right = typeof right != 'number' ? len - 1 : right;

//   if (left < right) {

//       console.log(arr)
//       partitionIndex = partition(arr, left, right);
//       quickSort(arr, left, partitionIndex-1);
//       quickSort(arr, partitionIndex+1, right);
//   }
//   return arr;
// }

// function partition(arr, left ,right) {     // 分区操作
//   var pivot = left,                      // 设定基准值（pivot）
//       index = pivot + 1;
//   for (var i = index; i <= right; i++) {
//       if (arr[i] < arr[pivot]) {

//           swap(arr, i, index);
//           index++;
//       }
//   }
//   console.log(pivot, index-1);

//   swap(arr, pivot, index - 1);
//   return index-1;
// }

// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// console.log(quickSort(arr, 0, arr.length - 1))


// let a = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
// function quicksort(left, right) {
//   let i, j, t, temp;
//   if (left > right) return;

//   temp = a[left]; //temp中存的就是基准数
//   i = left;
//   j = right;
//   while (i != j) {
//     //顺序很重要，要先从右边开始找
//     while (a[j] >= temp && i < j) j--;
//     //再找右边的
//     while (a[i] <= temp && i < j) i++;
//     //交换两个数在数组中的位置
//     if (i < j) {
//       t = a[i];
//       a[i] = a[j];
//       a[j] = t;
//     }
//   }
//   //最终将基准数归位
//   a[left] = a[i];
//   a[i] = temp;

//   quicksort(left, i - 1); //继续处理左边的，这里是一个递归的过程
//   quicksort(i + 1, right); //继续处理右边的 ，这里是一个递归的过程
// }

// quicksort(0, a.length - 1);

// console.log(a);



// // let a = [3, 1, 2, 5, 4]
// function quickSort (arr, left, right) {
//   if (left >= right) return;

//   let qivot = arr[left];
//   let i = left + 1;
//   let j = right;

//   while (i < j) {
//     while (arr[j] > qivot && i < j) j--;
//     console.log(j)
//     while (arr[i] < qivot && i < j) i++;
    
//     console.log( i + '-' + j)
//     console.log(arr)
//     if (i < j) {
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, left, i);
  
//   console.log(arr)
//   quickSort(arr, left, i - 1);
//   quickSort(arr, i + 1, right);
// }

// quickSort(a, 0, a.length-1);
// console.log(a)

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let a = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function quickSort (arr, left, right) {
  if (left >= right) return;
  let qivot = arr[left];
  let i = left+1;
  let j = right;

  while (i < j) {
    while (arr[j] > qivot && i<j) j--;
    while (arr[i] < qivot && i<j) i++;
    
    if (i<j)
    swap(arr, i, j);
  }
  swap(arr, left, i);

  quickSort(arr, left, i-1);
  quickSort(arr, i+1, right);
}

quickSort(a, 0, a.length-1);
console.log(a)














