let n = +prompt("nhập 1 số bất kì");
if(n>0 && Number.isInteger){
    for(let i = 1; i <= n; i++){
        i % 5 == 0 ? document.write(i,"," )   :document.write("   ")
        
    }
    
}else{
    document.write(" không hợp lệ")

}
