let needCheck = prompt("Nhập vào một chuỗi:");
let keyCheck = prompt("Nhập vào một ký tự để đếm số lần xuất hiện:");
function check(needCheck, keyCheck) {
  let keyInCheck = needCheck.split("").filter((char) => char === keyCheck);
  return keyInCheck.length;
}
let end = check(needCheck, keyCheck);
console.log(`Số lần xuất hiện của ký tự '${keyCheck}' trong chuỗi là: ${end}`);
