document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    if (!email || !password || !confirmPassword) {
      message.textContent = 'All fields are required!';
      return;
    }
    if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match!';
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isEmailExist = users.some(user => user.email === email);
    if (isEmailExist) {
      message.textContent = 'Email is already registered!';
      return;
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
  
    document.getElementById('registerForm').reset();

    setTimeout(() => (message.textContent = ''), 3000);
  });
  