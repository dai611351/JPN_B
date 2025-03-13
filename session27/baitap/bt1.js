function sum(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

function nhan(a, b) {
    return a * b;
}

function chia(a, b) {
    return a / b;
}

let choice;

do {
    console.log("===MENU===");
    console.log("1. Tổng 2 số");
    console.log("2. Trừ 2 số");
    console.log("3. Nhân 2 số");
    console.log("4. Chia 2 số");
    console.log("5. Exit");

    choice = +prompt("Mời bạn nhập lựa chọn: "); // Fixed typo here

    let num1, num2; // Declare num1 and num2 outside the switch block
    
    switch (choice) {
        case 1:
            num1 = +prompt("Nhập số thứ nhất:");
            num2 = +prompt("Nhập số thứ hai:");
            let result = sum(num1, num2);
            console.log("Kết quả tổng: " + result);
            break;
        case 2:
            num1 = +prompt("Nhập số thứ nhất:");
            num2 = +prompt("Nhập số thứ hai:");
            let a = tru(num1, num2);
            console.log("Kết quả trừ: " + a);
            break;
        case 3:
            num1 = +prompt("Nhập số thứ nhất:");
            num2 = +prompt("Nhập số thứ hai:");
            let b = nhan(num1, num2);
            console.log("Kết quả nhân: " + b);
            break;
        case 4:
            num1 = +prompt("Nhập số thứ nhất:");
            num2 = +prompt("Nhập số thứ hai:");
            if (num2 !== 0) { 
                let c = chia(num1, num2);
                console.log("Kết quả chia: " + c);
            } else {
                console.log("Không thể chia cho 0.");
            }
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 5);
