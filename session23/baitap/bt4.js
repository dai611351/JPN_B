// Nhập vào số phần tử của mảng
let n = parseInt(prompt("Nhập vào số lượng phần tử của mảng:"));
let arr = [];  // Khởi tạo mảng rỗng
let digitCount = 0;  // Biến đếm số lượng ký tự số

// Nhập các ký tự vào mảng
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);  // Thêm ký tự vào mảng
}

// Đếm số lượng ký tự số trong mảng
for (let i = 0; i < n; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        digitCount++;  // Nếu ký tự là số, tăng biến đếm
    }
}

// Hiển thị kết quả
alert(`Số lượng ký tự số trong mảng là: ${digitCount}`);
