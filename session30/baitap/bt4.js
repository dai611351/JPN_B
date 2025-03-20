let str=" ";
let job=[
    {
        id:1
        name: "klasmnd"
    }
]
function them() {
    for (let i = 0; i < job.length; i++) {
        job+=   `
        <li> ${job[i].name}
         <button>sửa</button> <button onclick=deletejob() >xoá</button> </li>
        `     
    }

    
}
function deletejob(id) {
    let index = job.filter(item=> item.id==id);
    job.splice(index,1);
    re   

    
}