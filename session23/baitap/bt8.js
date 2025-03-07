// Hàm kiểm tra xem mảng có phải là dãy Fibonacci không
function isFibonacci(arr) {
    // Nếu mảng có ít hơn 3 phần tử, không thể là dãy Fibonacci
    if (arr.length < 3) {
        return false;
    }

    // Kiểm tra xem mỗi phần tử có thỏa mãn công thức dãy Fibonacci không
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            return false; // Nếu không thỏa mãn, không phải dãy Fibonacci
        }
    }

    return true; // Nếu tất cả các điều kiện đều thỏa mãn, là dãy Fibonacci
}

// Nhập số lượng phần tử và các giá trị của mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`)));
}

// Kiểm tra xem mảng có phải là dãy Fibonacci không
if (isFibonacci(arr)) {
    console.log("Mảng là dãy số Fibonacci.");
} else {
    console.log("Mảng không phải là dãy số Fibonacci.");
}
