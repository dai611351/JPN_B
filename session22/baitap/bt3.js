let num = prompt("nhập số nguyên bất kì để đảo ngược");

if( Number.isInteger(+num)){
    let a = num.split("").reverse().join("");   
    document.write(a);    
    
}else{
    document.write("nhập số nguyên dương");
}



