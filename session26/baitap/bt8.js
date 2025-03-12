let company = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filter(company) {
    if (Array.isArray(company)) {
        if (company.length == 0) {
            console.log("mảng không chứa phán tử");
            return;
        }
        let sum = company.filter(function (a) {
            if (a % 2 == 1) {
                if (a < 2) {
                    return false;
                }
                for (let i = 2; i * i <= a; i++) {
                    if (a % i === 0) return false;
                }
                return true;
            }
        })
        console.log("kết quả là", sum);
    } else {
        console.log("giá trị không hợp lệ");

    }

}
filter(company);