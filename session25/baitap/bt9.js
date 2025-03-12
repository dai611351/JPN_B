let user = ["123@gmail.com","nnn@gmail.com"];

function checkEmail(email){
    let flag = 0;
    for (let i=0; i<user.length; i++){
        if(user[i]===email){
            flag=1;
            break;
        }
    }
    if(flag===0){
        if(email.includes("@") && (email.includes(".com")|| email.endsWith(".vn"))){
            console.log("tài hợp lệ");

        }else{
            console.log("tài khoản PHẢI chua @ hợp lệ");
        }
}else{
    console.log("tài khoản đã tồn tại");
}
}
checkEmail("nnn@gmail.com")
checkEmail("ádasd@gmail.com")





































