let jobs = JSON.parse(localStorage.getItem("jobs"))||[];
function onButtunName() {
    
    let name = document.getElementById("name").value.trim();
    console.log(name);
    localStorage.setItem("name",name);  
    showName()
}
function showName() {
    let name1 = localStorage.getItem("name")
    document.getElementById("title").innerHTML= "chao ban, " +name1;
 
}
showName()
function offButtunname() {
    console.log("đổi");
    
    let name2= document.getElementById("name").value=localStorage.getItem("name");  
    onButtunName()
}   

