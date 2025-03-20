function addSubject() {
    const input = document.getElementById("subjectInput");
    const subject = input.value.trim(); 
    
    if (subject === "" ) {
        alert("Tên môn học không hợp lệ");
        return;
    }
    const list = document.getElementById("subjectList");
    const newItem = document.createElement("li");
    newItem.textContent = subject;
    list.appendChild(newItem);
    input.value = "";
}