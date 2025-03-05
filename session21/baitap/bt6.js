    let num=+prompt("nhập số nguyên bất kì");
    if(Number.isInteger(num)){
        for(let i=1;i<=Math.abs(num);i++){
            if(num%i==0){
            console.log(i)
            }
        }
    }

