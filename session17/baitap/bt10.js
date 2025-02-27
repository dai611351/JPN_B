let n = +prompt(" ") ;
let number = Math.sqrt(n);
let binhPhuonh = Number.isInteger(number);
n = binhPhuonh ? document.write(n, " là số chính phương"): document.write(n, " không phải số chính phương");
