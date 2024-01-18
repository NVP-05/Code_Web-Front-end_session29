let n = +prompt("Nhập số phần tử có trong mảng.");
let mangChuoi = ["Chuỗi mẫu 1", "Chuỗi mẫu 2", "Chuỗi mẫu 3", "Chuỗi mẫu 4"];
for (let i = 0; i < n; i++) {
  let m = prompt("Nhập chuỗi");
  mangChuoi.push(m);
}

let chuoiNhap = prompt("Nhập vào một chuỗi bất kỳ để kiểm tra.");
function check(mang, chuoi) {
  let ketQua = mang.filter((element) => element.includes(chuoi));
  return ketQua;
}

let end = check(mangChuoi, chuoiNhap);
console.log("Các phần tử trong mảng có chứa chuỗi '" + chuoiNhap + "':");
console.log(end);
