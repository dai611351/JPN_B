
let num = +prompt("Nhập số nguyên bất kỳ để tính tổng các chữ số chẵn và lẻ ");
let sumEven = 0;  
let sumOdd = 0; 

if (num > 0 && Number.isInteger(num)) {
    let ary = num.toString().split(""); 
    for (let i = 0; i < ary.length; i++) {
        let digit = +ary[i]; 
        if (digit % 2 === 0) {
            sumEven += digit; 
        } else {
            sumOdd += digit; 
        }
    }
    
    document.write("Tổng các số chẵn là: " + sumEven + "<br>");
    document.write("Tổng các số lẻ là: " + sumOdd);
} else {
    document.write("Vui lòng nhập một số nguyên hợp lệ.");
}
