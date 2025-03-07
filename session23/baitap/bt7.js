// Hàm tìm số lớn thứ hai trong mảng
function findSecondLargest(arr) {
    let first = -Infinity; // Số lớn nhất
    let second = -Infinity; // Số lớn thứ hai

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first; // Cập nhật số lớn thứ hai
            first = arr[i]; // Cập nhật số lớn nhất
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i]; // Cập nhật số lớn thứ hai nếu điều kiện thỏa mãn
        }
    }

    return second;
}

// Nhập số lượng phần tử và các giá trị của mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`)));
}

// Tìm số lớn thứ hai
let secondLargest = findSecondLargest(arr);

// In kết quả
if (secondLargest === -Infinity) {
    console.log("Mảng không có số lớn thứ hai.");
} else {
    console.log("Số lớn thứ hai trong mảng là: " + secondLargest);
}
