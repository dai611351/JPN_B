// let number =[2,5,7,4,1,8,6];
// let random = +prompt("nhập số nguyên bất kì");
// let flag = 0;
// if(random>0 && Number.isInteger(random)){
//     for(let i=0; i <number.length;i++){
//         random==number[i]
//         ?flag++;
//         :flag

//     }
//     flag!==0?document.write("có số này trong mảng"):document.write("không có số này trong mảng");
// }else{
//     document.write("nhập số nguyên dương");
// }


let number = [2, 5, 7, 4, 1, 8, 6];
let random = +prompt("Nhập số nguyên bất kỳ:");
let flag = 0;

if (random > 0 && Number.isInteger(random)) {
    for (let i = 0; i < number.length; i++) {
        if (random === number[i]) {
            flag++;
        }
    }
    flag !== 0 ? document.write("bingo") : document.write("chúc bạn may mắn lần sau");
} else {
    document.write("Nhập số nguyên dương");
}
