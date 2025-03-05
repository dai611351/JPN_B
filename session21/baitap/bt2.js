let odd = 0;
let even = 0;
for(let i=1; i<=5; i++){
    let so = +prompt("Nhập số nguyên thứ " + i + ":");
    if(so % 2 == 0){
        even ++
    } else {
        odd ++;
    }
    
}document.write(" chẵn là: " + even + "<br>");
document.write(" số lẻ là: " + odd+ "<br>");