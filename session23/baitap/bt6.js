// Khai báo mảng có sẵn các giá trị
let arr = [0, 1, "", NaN, null, undefined, "Hello", false, 2, 3];

// Tạo mảng mới để chứa các giá trị truthy
let filteredArr = [];

// Duyệt qua từng phần tử trong mảng gốc
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { // Kiểm tra nếu phần tử là truthy
        filteredArr.push(arr[i]); // Thêm phần tử vào mảng filteredArr nếu là truthy
    }
}

// Hiển thị kết quả
console.log("Mảng sau khi loại bỏ các phần tử falsy:", filteredArr);
