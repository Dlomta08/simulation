fetch('/api/whoami')
  .then(response => response.json())
  .then(data => {
    const el = document.getElementById('account-info');
    if (data.username) {
      let pendingBadge = '';
      if (data.role === 'pending_teacher') {
        pendingBadge = `
          <span style="
            background-color: #f0ad4e;
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            margin-left: 6px;
            font-size: 0.9em;
          ">
            მასწავლებლის დამტკიცების მოლოდინში
          </span>`;
      }

      el.innerHTML = `
        <a href="/profile"><strong>${data.username}</strong></a>
        ${pendingBadge}
        <a href="/logout" style="margin-left:10px;">Log out</a>
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
