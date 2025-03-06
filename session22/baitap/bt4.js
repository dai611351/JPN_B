
let num = +prompt("Nhập số nguyên bất kỳ để lấy số lớn nhất");

if (num > 0 && Number.isInteger(num)) {
    
    let ary = num.toString().split("");
    
    
    let max = ary[0];
    for (let i = 1; i < ary.length; i++) {
        if (ary[i] > max) {
            max = ary[i];
        }
    }
        document.write("Số lớn nhất trong dãy số là: " + max);
} else {
    document.write("Vui lòng nhập số nguyên dương.");
}
