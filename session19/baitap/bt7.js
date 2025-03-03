let a = parseFloat(prompt("Nhập vào số thứ nhất:"));
let b = parseFloat(prompt("Nhập vào số thứ hai:"));
let c = parseFloat(prompt("Nhập vào số thứ ba:"));
let maxNumber = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
document.write("Số lớn nhất là: " + maxNumber);


