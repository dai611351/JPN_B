
function login() {
    const fixedUsername = "huanrose@gmail.com";
    const fixedPassword = "123456";
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    if (usernameInput === fixedUsername && passwordInput === fixedPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại. Vui lòng thử lại.");
    }
}
