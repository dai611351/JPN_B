// Hàm tìm phần tử lớn nhất và vị trí của nó trong mảng
function findMaxElement(arr) {
    let max = arr[0]; // Khởi tạo giá trị lớn nhất ban đầu là phần tử đầu tiên
    let maxIndex = 0; // Khởi tạo vị trí của phần tử lớn nhất

    // Duyệt qua mảng từ phần tử thứ 2 trở đi
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật giá trị lớn nhất
            maxIndex = i; // Cập nhật vị trí của phần tử lớn nhất
        }
    }

    return { max, maxIndex }; // Trả về giá trị lớn nhất và vị trí của nó
}

// Nhập 10 phần tử của mảng
let arr = [];
for (let i = 0; i < 10; i++) {
    let num;
    // Đảm bảo nhập vào giá trị là số và không trùng lặp
    do {
        num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    } while (isNaN(num) || arr.includes(num));
    arr.push(num);
}

// Tìm phần tử lớn nhất và vị trí của nó
let result = findMaxElement(arr);

// Hiển thị kết quả
console.log(`Phần tử lớn nhất trong mảng là: ${result.max}`);
console.log(`Vị trí của phần tử lớn nhất là: ${result.maxIndex}`);
