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