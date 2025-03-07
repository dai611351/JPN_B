// Nhập vào số lượng phần tử của mảng
let n = parseInt(prompt("Nhập vào số lượng phần tử của mảng:"));
let arr = [];  // Khởi tạo mảng rỗng
let sum = 0;  // Biến tính tổng các ký tự số

// Nhập các ký tự vào mảng
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);  // Thêm ký tự vào mảng
}

// Tính tổng các ký tự là số
for (let i = 0; i < n; i++) {
    if (!isNaN(arr[i]) && arr[i] !== ' ') {  // Kiểm tra nếu ký tự là số
        sum += parseInt(arr[i]);  // Cộng dồn vào tổng
    }
}

// Hiển thị kết quả
alert(`Tổng các ký tự số trong mảng là: ${sum}`);
