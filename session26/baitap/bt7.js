//Viết chương trình nhập vào mảng số nguyên 10 phần tử, sử dụng các hàm có sẵn trong array methods để các phần tử trong mảng bình phương lên và lọc ra những giá trị là số chẵn

let company = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filter(company) {
    if (Array.isArray(company)) {
        if (company.length == 0) {
            console.log("mảng không chứa phán tử");
            return;
        }
        let sum = company.map(function (a) {
            return a * a;

        }).filter(function (a) {
            return a % 2 == 0;
        })
        console.log("kết quả là", sum);
    } else {
        console.log("giá trị không hợp lệ");

    }

}
filter(company);