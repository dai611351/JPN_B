// let values=0;
// function im() {
//     values+=10;
//     document.getElementById("progress").value=values;
//     if(values>=100){
//         values=100
//     }
// }
// function desc() {
//     values-=10;
//     document.getElementById("progress").value=values;
//     if(values=100){
//         values=0
//     } 
// }
let number=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let itemPage=0;
let pages=Math.ceil(number.length/itemPage);
let currentPage=1;
let start=0;
let end=4;
function showItem() {
    let str="";
    for (let i = 0; i < number.length; i++) {
        if(i>=start&&i<end){
            str+=`
            <li> ${number[i]} </li>
                 `  
        }
       
    }
    document.getElementById("item").innerHTML=str;
    
}
showItem()

function showPage() {
    let str="";
    for (let i = 0; i < pages; i++) {
       str=` <li> ${i+1} </li>`
        
    }
    document.getElementsByClassName("pages")[0].innerHTML=
    `
    <button>hi</button>
    ${str}
    <button>lo</button>
    
    `
}
function (params) {
    
}
