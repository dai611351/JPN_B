


function findmin(arr) {
    if (!Array.isArray(arr)) {
        console.log("Đây không phải là mảng");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử nào");
        return;
    }

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    console.log("Phần tử nhỏ nhất là", min);
    return min;
}

findmin("ád");  // Không phải mảng
findmin([]);  // Mảng rỗng
findmin([5, 3, 8, 1, 6]);  // Mảng hợp lệ
