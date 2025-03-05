

let a = +prompt("Nhập số nguyên 1");
let b = +prompt("Nhập số nguyên 2");
let c = prompt("Nhập số nguyên 3");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.write("Dữ liệu nhập vào không hợp lệ");
} else {
    let denta = b * b - 4 * a * c;

    if (denta > 0) {
        let x1 = (-b + Math.sqrt(denta)) / (2 * a);
        let x2 = (-b - Math.sqrt(denta)) / (2 * a);
        document.write("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2);
    } else if (denta === 0) {
        let x = -b / (2 * a);
        document.write("Phương trình có nghiệm kép: x = " + x);
    } else {
        document.write("Phương trình vô nghiệm");
    }
}
