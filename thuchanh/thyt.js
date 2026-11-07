// Bước 1: Khai báo một hàm có tên là 'max' nhận vào 2 con số a và b
function max(a, b) {
  if (a < b) {
    return b; // Nếu a nhỏ hơn b thì kết quả hàm trả về là b
  }
  return a; // Trường hợp ngược lại thì trả về a
}

// Bước 2: Gọi hàm ra để sử dụng, truyền số thực tế vào và lưu kết quả
var ket_qua = max(100, 25);

// Bước 3: In kết quả ra màn hình
alert("Số lớn hơn là: " + ket_qua);
