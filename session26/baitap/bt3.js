let text1 =["daigmail.com", "minh@gmail. com","tuangmail@gmail.com","dai@gmai.com"]
let text2 =[];
let text3="kzjgd";
function dai (arr){
    if( Array.isArray(arr)){
        if(arr.length===0){
            console.log("mang rỗng");
            return;
        }else{

        let number  = arr.filter((email)=>{
            return email.includes("@") && !email.includes(" ");

        })
        if( number.length>0){
            console.log(number);
        }else{
            console.log("mang khong có gia trị nào hơppj le");
            
        }
            
        }
        
        
    }else{
        console.log("phần của mảng không có");
        
    }

}
dai(text1)
dai(text2)
dai(text3)
