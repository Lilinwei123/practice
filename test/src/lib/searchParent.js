// console.log('1111')
let arr = [{
  "id": 1,
  "name": "name1",
  "children": [{
    "id": 11,
    "parentId": 1,
    "name": "name11",
    "children" : [{
        "id": 111,
        "parentId": 11,
        "name": "name121"
      }]
    },
    {
      "id": 12,
      "parentId": 1,
      "name": "name12",
      "children" : [{
        "id": 121,
        "parentId": 12,
        "name": "name121"
      }]
    }
  ]},
  {
    "id": 2,
    "name": "name2",
    "children": [{
      "id": 21,
      "parentId": 2,
      "name": "name21"
    },{
      "id": 22,
      "parentId": 2,
      "name": "name22"
    }]
  },{
    "id": 3,
    "name": "name1",
    "children": null
  }
];

// function searchParent(arr, parentId) {
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i]
//     if (item.id === parentId) {
//       return item
//     } else if (item.children){
//       return searchParent(item.children, parentId)
//     } 
//   }
// }

function searchParent(arr, parentId) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item.id === parentId) {
      return item;
    } else if (item.children) {
      let res = searchParent(item.children, parentId);
      if (res) {
        return res;
      }
    }
  }
}

console.log(searchParent(arr, 12))

