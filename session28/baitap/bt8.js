let choice;
let employees = []; 
function addEmployee(employees) {
    let id = prompt("Nhập id nhân viên");
    let name = prompt("Nhập tên nhân viên");
    let position = prompt("Nhập chức vụ nhân viên");
    let salary = +prompt("Nhập lương nhân viên");
    let employee = {
        id: id,
        name: name,
        position: position,
        salary: salary
    };
    employees.push(employee);
}
function deleteEmployee(employees) {
    let id = prompt("Nhập id nhân viên cần xóa");
    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });
    if (index !== -1) {
        employees.splice(index, 1);
        console.log(`Đã xóa nhân viên có id ${id}`);
    } else {
        console.log("Không tìm thấy nhân viên");
    }
}
function updateSalary(employees) {
    let id = prompt("Nhập id nhân viên cần cập nhật lương");
    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });
    if (index !== -1) {
        let newSalary = +prompt("Nhập lương mới");
        employees[index].salary = newSalary;
        console.log(`Đã cập nhật lương cho nhân viên có id ${id}`);
    } else {
        console.log("Không tìm thấy nhân viên");
    }
}
function searchEmployee(employees) {
    let name = prompt("Nhập tên nhân viên cần tìm");
    let result = employees.filter(function(employee) {
        return employee.name === name;
    });
    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:", result);
    } else {
        console.log("Không tìm thấy nhân viên");
    }
}
do {
    choice = +prompt("Nhập lựa chọn của bạn");

    alert("1. Thêm nhân viên mới");
    alert("2. Xóa nhân viên theo id");
    alert("3. Cập nhật mức lương của nhân viên theo id");
    ale("4. Tìm kiếm nhân viên theo tên");
    console.log("5. Thoát");
    
    switch (choice) {
        case 1:
            addEmployee(employees);
            break;
        case 2:
            deleteEmployee(employees);
            break;
        case 3:
            updateSalary(employees);
            break;
        case 4:
            searchEmployee(employees);
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
} while (choice !== 5);