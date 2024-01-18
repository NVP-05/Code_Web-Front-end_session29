function check() {
  let n = +prompt("Nhập số phần tử có trong mảng.");
  let numbers = [];
  for (let i = 0; i < n; i++) {
    let m = prompt(`numbers[${i}] = `);
    numbers.push(m);
  }
  let newNumbers = [];
  let k = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (k == numbers.length) {
      break;
    }
    newNumbers[0] = numbers[k];
    for (let j = 1; j < numbers.length; j++) {
      if (newNumbers[0].length < numbers[j].length) {
        k = j;
        break;
      } else {
        k = numbers.length;
      }
    }
  }

  console.log(newNumbers);
}

check();
