document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/whoami")
    .then(response => response.json())
    .then(data => {
      const role = data.role;
      const adminLink = document.getElementById("adminLink");

      if (adminLink && role !== "admin") {
        adminLink.style.display = "none";
      }
    })
    .catch(err => {
      console.error("Error fetching user role:", err);
    });
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/whoami")
    .then(res => res.json())
    .then(data => {
      const role = data.role;

      // Hide pending teacher approval link for non-admins
      const pendingLink = document.getElementById("pendingTeachersLink");
      if (pendingLink && role !== "admin") {
        pendingLink.style.display = "none";
      }
    })
    .catch(err => {
      console.error("Failed to fetch user info:", err);
    });
});
