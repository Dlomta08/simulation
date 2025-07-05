fetch('/api/whoami')
  .then(response => response.json())
  .then(data => {
    const el = document.getElementById('account-info');
    if (data.username) {
      el.innerHTML = `
     <a href="/profile"><strong>${data.username}</strong></a>
      <a href="/logout">Log out</a>
    `;
    } else {
      el.innerHTML = `
        <a href="/login">Log in</a> |
        <a href="/register">Register</a>
      `;
    }
  })
  .catch(err => {
    console.error('Error fetching user info:', err);
  });