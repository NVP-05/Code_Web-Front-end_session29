function check() {
  let numbers = [];
  for (let i = 1; i < 4; i++) {
    let n = +prompt(` Số thứ ${i} = `);
    numbers.push(n);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      console.log("Chẵn.");
    } else {
      console.log("Lẻ.");
    }
  }
}

check();
