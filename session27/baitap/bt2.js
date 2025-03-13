let array = [];

function input() {
    let student = +prompt("Nhập số lượng sinh viên muốn nhập:");
    for (let i = 0; i < student; i++) {
        let studentList = prompt(`Nhập tên đầy đủ của sinh viên ${i + 1}:`);
        array.push(studentList);
    }
}

function listStudent() {
    if (array.length === 0) {
        console.log("Danh sách sinh viên hiện tại rỗng.");
    } else {
        console.log("Danh sách sinh viên:");
        array.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
    }
}

function search() {
    let name = prompt("Nhập tên sinh viên cần tìm:");
    let found = false;
    array.forEach((student) => {
        if (student.toLowerCase() === name.toLowerCase()) {
            console.log(`Tìm thấy sinh viên: ${student}`);
            found = true;
        }
    });
    if (!found) {
        console.log("Sinh viên không có trong danh sách.");
    }
}

function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa:");
    let found = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === name.toLowerCase()) {
            array.splice(i, 1);
            console.log(`Đã xóa sinh viên: ${name}`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Sinh viên không có trong danh sách.");
    }
}

let choice;
do {
    choice = prompt(`
        Mời bạn nhập:
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên.
        4. Xóa sinh viên khỏi danh sách.
        5. Thoát.
    `);

    switch (choice) {
        case '1':
            input();
            break;
        case '2':
            listStudent();
            break;
        case '3':
            search();
            break;
        case '4':
            deleteStudent();
            break;
        case '5':
            console.log("Thoát khỏi chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== '5');
