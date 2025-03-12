function kiemtraSonguyen(number){

    if(Number.isInteger(number)){
        console.log("khong phai so nguyen");
        
      
    }
        
    let count=0;
    for(let i=2;i<=number;i++){
        if(number%i==0){
            count++;
            
        }
        count==2?console.log("la so nguyen to"):console.log("khong phai so nguyen to");
    }

}
kiemtraSonguyen(17);
kiemtraSonguyen(5);

kiemtraSonguyen(6);
kiemtraSonguyen("test");