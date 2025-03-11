function checkNumber(array) {
    let arrayNew = [];
    
    if (!Array.isArray(array)) {
        console.log("Không phải mảng");
        return;
    }
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            arrayNew.push(array[i]);
        }
    }
   if (arrayNew.length > 0) {
        console.log(arrayNew);
    } else {
        console.log("Không có số chẵn nào");
    }
}

checkNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [10, 8, 6, 4, 2]
checkNumber("abc"); // Không phải mảng
