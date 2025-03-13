// Hàm tính diện tích hình tròn
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Hàm tính chu vi hình tròn
function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Hàm tính diện tích hình chữ nhật
function calculateRectangleArea(length, width) {
    return length * width;
}

// Hàm tính chu vi hình chữ nhật
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function showMenu() {
    let choice;
    do {
        console.log("Mời bạn chọn chức năng (1-5):");
        console.log("1. Tính diện tích hình tròn.");
        console.log("2. Tính chu vi hình tròn.");
        console.log("3. Tính diện tích hình chữ nhật.");
        console.log("4. Tính chu vi hình chữ nhật.");
        console.log("5. Thoát");
        
        choice = +prompt("Chọn chức năng (1-5):");

        switch (choice) {
            case 1:
                let radius = +prompt("Nhập bán kính hình tròn:");
                console.log("Diện tích hình tròn là:", calculateCircleArea(radius));
                break;
            case 2:
                radius = +prompt("Nhập bán kính hình tròn:");
                console.log("Chu vi hình tròn là:", calculateCirclePerimeter(radius));
                break;
            case 3:
                let length = +prompt("Nhập chiều dài hình chữ nhật:");
                let width = +prompt("Nhập chiều rộng hình chữ nhật:");
                console.log("Diện tích hình chữ nhật là:", calculateRectangleArea(length, width));
                break;
            case 4:
                length = +prompt("Nhập chiều dài hình chữ nhật:");
                width = +prompt("Nhập chiều rộng hình chữ nhật:");
                console.log("Chu vi hình chữ nhật là:", calculateRectanglePerimeter(length, width));
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5);
}

// Gọi hàm để hiển thị menu và thực hiện chương trình
showMenu();
