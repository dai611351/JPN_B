let text1 = [3,5,2,33,2,5,55,3,56,22,];
let text2=[];
let text3= "asljklh"
function filter(arr){
if(Array.isArray(arr)){
    if(arr.length==0){
        console.log("mangr khoong vhauw phan tu");
        return;
        
    }
    let result= arr.filter((item)=>{
        return item>10;


    })
    console.log(result);

    
    
}else{
    console.log("duwx lieeyuj khong howpj le");
    
}
}
filter(text1);
filter(text2);
filter(text3);