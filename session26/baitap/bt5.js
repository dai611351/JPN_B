function timMax(arr) {
    if (!Array.isArray(arr)) {
        alert("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        alert("Mảng không có dữ liệu");
        return;
    }

    let max = -Infinity;
    let viTri;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > max) {
            max = arr[i];
            viTri = i;
        }
    }

    if (max !== -Infinity) {
        alert(`max: ${max}\nposition: ${viTri}`);
    }
}

// Kiểm thử
timMax([10, 9, 5, 11, 24, 5]);