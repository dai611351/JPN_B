    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    function add() {
        let id = 0;
        let name = document.getElementById("job").value.trim();
        if (name == "") {
            alert("vui lòng nhập thông tin");
            return;
        }
        if (jobs.length == 0) {
            id = 1
        } else {
            id = jobs[jobs.length - 1].id + 1;
        }
        let newJob = {
            id: id,
            name: name,
        }
        jobs.push(newJob);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        render();
        document.getElementById("job").value="";
    }
    function render() {
        let str = "";
        for (let i = 0; i < jobs.length; i++) {
            str+=`
            <p> ${jobs[i].name} <button onclick = remove(${jobs[i].id})>xoá</button> <button onclick = update(${jobs[i].id}) >xửa</button> </p>
            `
        }
        document.getElementById("list").innerHTML=str;
    }
    render();
    function remove(id) {
        for (let i = 0; i < jobs.length; i++) {
            if(jobs[i].id==id){
                let cofirm=confirm("bạn có muốn xoá hay không")
                if (cofirm==false) {
                    return;
                }
                jobs.splice(i,1);
                render();    
                localStorage.setItem("jobs",JSON.stringify(jobs));    
                

            }    
                
        }   
        
    }
   
    function update(id) {
        let index= jobs.findIndex((item)=>{
            return item.id==id;

        })
        let updateNew = prompt("chỉnh sửa cong viec");
        jobs.splice(index,1,{...jobs[index],name:updateNew});
        render()
        localStorage.setItem("jobs",JSON.stringify(jobs));
    }