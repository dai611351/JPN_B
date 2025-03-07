// Nhập vào số phần tử của mảng
let n = parseInt(prompt("Nhập vào số lượng phần tử của mảng:"));
let arr = [];  // Khởi tạo mảng rỗng
let negativeCount = 0;  // Biến đếm số nguyên âm

// Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(num);  // Thêm phần tử vào mảng
}

// Đếm số lượng số nguyên âm
for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
        negativeCount++;  // Nếu phần tử là số âm, tăng biến đếm
    }
}

// Hiển thị kết quả
alert(`Số lượng số nguyên âm trong mảng là: ${negativeCount}`);
