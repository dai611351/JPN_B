let users= JSON.parse(localStorage.getItem("users"))||[];
function register () {
    let email=document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword=document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        console.log("Passwords không khớp ");
        return; 
    }
    let user={
        id:Math.floor(Math.random()*23432423),
        email:email,
        password:password,
        
    }
    
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Passwords hợp lệ");
}
