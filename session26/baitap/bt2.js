let text1 = ["daiiiii", "dunggg ","duc","chiennnn","ajsd","ahj","ajksbjhjvdb","asjdn","san d",];
let text2 = [];
let text3 = "shgd"
function filter(arr){
    if (Array.isArray(arr)){
       if(arr.length==0) {console.log("mang khong chauw phan tu nao");
        return;    
       }
    let result = arr.filter((item)=>{

        return item.length>=5
    })
    console.log(result)

    }else{
        console.log("du lieu khong hop le");
        
    }
}
filter(text1);
