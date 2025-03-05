
let a = +prompt("Nhập số tiền ban đầu");
let b = +prompt("Nhập số tháng");
let c = +prompt("Nhập lãi suất");

if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0) {
    document.write("Bạn nhập không hợp lệ");
} else {
    let d = 0;  
    let e = a;  

    for (let i = 1; i <= b; i++) {
        d += e * c / 100;-
        e = a + d;  
    }

    document.write("Số tiền lãi sau " + b + " tháng là: " + d + "<br>");
    document.write("Số tiền sau khi gửi là: " + e);
}
