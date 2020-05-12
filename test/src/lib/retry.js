// func(void) -> Promise
// retry(func, count) -> Promise

function yibu() {
  return new Promise ((resolve, reject) => {
    reject('err');
  })
}

function retry (func, count) {
  let flag = 0;
  
  if (!flag) {
    i = 0;
    flag = 1;
  }

  if (i < count) {
    func().then((data) => {
      
    }).catch((err) => {
      console.log(err)
      retry(func, count);
      i++;
    })
  }
  
}

retry(yibu, 5)





