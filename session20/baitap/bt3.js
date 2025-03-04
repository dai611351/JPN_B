

let n = +prompt("Nhập số: ");
 

if (n > 0 && Number.isInteger(n)) {
    let str = String(n);  
    let flag = 0;  
    
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            flag = 1; 
            break;
        }
    }

    if (flag==1) {
        document.write("Đây khong là số đối xứng.");
    } else {
        document.write("Đây  là số đối xứng.");
    }
} else {
    document.write("Vui lòng nhập một số");
}
