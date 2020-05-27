async function yibu() {
  if (1) {
    return Promise.resolve('hello world')
  } else {
    return Promise.reject('err');
  }
}

async function retry (func, count) {
    try{
      let res = await func();
      return res;
    } catch(err) {
      console.log(err + count);
      if (count > 1) {
        retry(func, --count);
      }
      return err;
    }
}

async function render () {
  const result = await retry(yibu, 5);
  console.log('result---' + result);
}

render();




