let myString = prompt("Nhập chuỗi kí tự cần kiểm tra.");

function check(chuoi) {
  let chuoiKhongKyTuTrong = chuoi.split(" ").join("");
  return chuoiKhongKyTuTrong.length;
}
let end = check(myString);
console.log("Số ký tự trong chuỗi là: " + end);
