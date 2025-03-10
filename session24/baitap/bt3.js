console.log("============================ MENU ============================");
console.log("1. Nhập mảng 2 chiều");
console.log("2. Hiển thị mảng 2 chiều");
console.log("3. Tính tổng các phần tử trong mảng");
console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
console.log("6. Đảo ngược các hàng trong mảng");
console.log("7. Thoát chương trình");
console.log("==============================================================");

let list = [];
let choice;

do {
    choice = +prompt("Nhập lựa chọn:");

    switch (choice) {
        case 1: {
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");

            for (let i = 0; i < rows; i++) {
                let number = prompt(Nhập hàng ${i + 1});
                if (number.length !== cols) {
                    console.log("Số lượng phần tử không khớp! Nhập lại.");
                    break;
                }
                list.push(number);
            }
            break;
        }
        case 2: {
            for (let i = 0; i < list.length; i++) {
                console.log(list[${i}] = ${list[i]});
            }
            break;
        }
        case 3: {
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < list[i].length; j++) {
                    sum += list[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là ", sum);
            break;
        }
        case 4: {
            let max = list[0];
            let addressMax = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                    addressMax = i;
                }
            }
            console.log("Số lớn nhất là " + max);
            console.log("Vị trí số lớn nhất là " + addressMax);
            break;
        }
        case 5: {
            let Average = +prompt("Nhập chỉ số hàng cần tính trung bình");
            if (Average >= 0 && Average < list.length) {
                let sum = 0;
                for (let j = 0; j < list[Average].length; j++) {
                    sum += list[Average][j];
                }
                console.log(Trung bình cộng của hàng ${Average}:, sum / list[Average].length);
            } else {
                console.log("Không hợp lệ");
            }
            break;
        }
        case 6: {
            for (let i = 0; i < list.length; i++) {
                list[i].reverse();
            }
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < list.length; i++) {
                console.log(list[i].join(" "));
            }
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("kết thúc");
    }
} while (choice !== '7')