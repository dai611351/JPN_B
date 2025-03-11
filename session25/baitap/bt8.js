function isStrongPassword(password) {
    // Kiểm tra độ dài mật khẩu (ít nhất 8 ký tự)
    if (password.length < 8) {
        return false;
    }

    // Kiểm tra có ít nhất một chữ hoa
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Kiểm tra có ít nhất một chữ thường
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Kiểm tra có ít nhất một số
    if (!/\d/.test(password)) {
        return false;
    }

    // Nếu tất cả điều kiện đều thỏa mãn, trả về true
    return true;
}

// Kiểm tra ví dụ
console.log(isStrongPassword("Password123")); // true
console.log(isStrongPassword("password")); // false
console.log(isStrongPassword("12345678")); // false
console.log(isStrongPassword("P@ssw0rd")); // true
