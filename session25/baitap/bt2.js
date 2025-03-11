// function findmin(a,b){
//     if(Number.isInteger(a) && Number.isInteger(b)){
        
//         return a+b;


//     }else{
//         console.log("khong phai so nguyen");
//         return;
//     }

// }
// console.log("toongr cua 2 so la",findmin(2,5)); 
// findmin("2,sakdj");
// findmin(2,9,8);
function findmin(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b; // Trả về tổng của hai số nguyên
    } else {
        console.log("Không phải số nguyên");
        return;
    }
}

console.log("Tổng của hai số là:", findmin(2, 5));
findmin("2,sakdj");  
findmin(2, 9);  
