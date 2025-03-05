
let a = +prompt(" nhaapj so thu 1");
let b = +prompt("nhaapj so thu 2");
let c = +prompt("nhaapj so thu 3");
let sum = 0;

if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0) {
    document.write("Bạn nhập không hợp lệ");
    for(let i=100;i<=999;i++){
        let a= Math.floor(i/100);
        let b= Math.floor((i%100)/10);
        let c= i -a*100-b*10;
        let sum = Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
            
    }
    if(sum==i){
        document.write(i);
    }else{
        document.write("khong co so nao");
    }
}
  