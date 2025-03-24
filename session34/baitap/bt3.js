
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Lấy dữ liệu người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Kiểm tra tài khoản
    const validUser = users.find(user => user.email === email && user.password === password);
  
    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }
  
    if (validUser) {
      alert('Login successful!');
      window.location.href = 'home.html'; // Chuyển đến trang chủ
    } else {
      alert('Invalid email or password!');
    }
  });
  