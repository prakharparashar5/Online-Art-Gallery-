<form id="registerForm">
  <input name="username" required>
  <input name="email" type="email" required>
  <input name="password" type="password" required>
  <button type="submit">Register</button>
</form>
<script>
document.getElementById('registerForm').onsubmit = async function(e) {
  e.preventDefault();
  const data = {
    username: this.username.value,
    email: this.email.value,
    password: this.password.value
  };
  const res = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(JSON.stringify(result));
};
</script>