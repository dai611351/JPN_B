let n = +prompt("nhập số nguyên");
let number = 0;
if(n>0 && Number.isInteger){
    for(let i=0; i<=n;i++ ){
        number+=i;
    }
    document.write(number);
    }else{
    document.write("dữ liệu nhập vào không hợp lệ");

    }







