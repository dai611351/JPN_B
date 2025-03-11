function demsoNguyenDuong(number){
    function demsoNguyenDuong(){
        let count=0;
        if(Array.isArray(number)){
            console.log("Không phải số nguyên dương");
            
        }
        for(let i=-1;i<=number.length-1;i++){
            if(Number.isInteger(number[i+1]) && number[i+1]>0){
                count++;
            }

        }
        count ? console.log("Số nguyên dương là",count):console.log("Không có số nguyên dương nào");
    }

}
songuyenDuong([1,2,3,4,5,6]);
songuyenDuong([1,2,3,4,5,-6]);
songuyenDuong("abc");