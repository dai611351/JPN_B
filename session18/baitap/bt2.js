let number = +prompt("nhập điểm môn toán");
let number1 = +prompt("nhập điểm môn văn");
let number2 = +prompt("nhập điểm môn văn");
let total = (number1+number2+number)/3;
if(total >= 8.0){
    document.write("giỏi")
}else if(6.5<= total  && total <=7.9){
    document.write("khá")
}else if( total <= 6.4  && total>=5.){
    document.write("trung bình")
}else if( total<5.){
    document.write("yếu")
}


