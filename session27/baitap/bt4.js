// Khai báo một mảng để lưu danh sách số nguyên
let integers = [];

function inputIntegerList() {
    let n = +prompt("Nhập số lượng số nguyên muốn nhập:");
    integers = []; // Reset danh sách số nguyên
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
        integers.push(num);
    }
}

function calculateAverage() {
    if (integers.length === 0) {
        console.log("Danh sách số nguyên rỗng, không thể tính trung bình.");
        return;
    }
    let sum = integers.reduce((acc, num) => acc + num, 0);
    let average = sum / integers.length;
    console.log("Trung bình các số là:", average);
}

function findMaxEven() {
    let maxEven = null;
    for (let num of integers) {
        if (num % 2 === 0 && (maxEven === null || num > maxEven)) {
            maxEven = num;
        }
    }
    if (maxEven === null) {
        console.log("Không có số chẵn trong danh sách.");
    } else {
        console.log("Số chẵn lớn nhất là:", maxEven);
    }
}

function findMinOdd() {
    let minOdd = null;
    for (let num of integers) {
        if (num % 2 !== 0 && (minOdd === null || num < minOdd)) {
            minOdd = num;
        }
    }
    if (minOdd === null) {
        console.log("Không có số lẻ trong danh sách.");
    } else {
        console.log("Số lẻ nhỏ nhất là:", minOdd);
    }
}

function showMenu() {
    let choice;
    do {
        console.log("\n----- MENU XỬ LÝ SỐ NGUYÊN -----");
        console.log("1. Nhập danh sách số nguyên.");
        console.log("2. Tính trung bình các số.");
        console.log("3. Tìm số chẵn lớn nhất.");
        console.log("4. Tìm số lẻ nhỏ nhất.");
        console.log("5. Thoát.");

        choice = +prompt("Chọn chức năng (1-5):");

        switch (choice) {
            case 1:
                inputIntegerList();
                break;
            case 2:
                calculateAverage();
                break;
            case 3:
                findMaxEven();
                break;
            case 4:
                findMinOdd();
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
        }
    } while (choice !== 5);
}


showMenu();
