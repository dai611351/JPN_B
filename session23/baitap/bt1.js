// Khởi tạo mảng số nguyên gồm 10 phần tử
let arr = [];
let count = 0; // Biến đếm số phần tử lớn hơn hoặc bằng 10

// Nhập các phần tử vào mảng
for (let i = 0; i < 10; i++) {
    let num = prompt(`Nhập phần tử thứ ${i + 1}:`); // Nhập giá trị từ người dùng
    arr.push(Number(num)); // Thêm phần tử vào mảng và chuyển sang kiểu số
}

// Đếm số phần tử lớn hơn hoặc bằng 10
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

// Hiển thị kết quả
alert(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng.`);
