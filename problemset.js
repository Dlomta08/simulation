function toggleForm() {
  const form = document.getElementById("problemForm");
  form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

document.getElementById("problemImage").addEventListener("change", function () {
  const fileName = this.files[0] ? this.files[0].name : "No file chosen";
  document.getElementById("fileNameDisplay").textContent = fileName;
});

function toggleFilter() {
  const filterSection = document.getElementById("filterSection");
  const btn = event.target;
  if (filterSection.style.display === "none" || filterSection.style.display === "") {
    filterSection.style.display = "block";
    btn.textContent = "ამოცანების ფილტრი";
  } else {
    filterSection.style.display = "none";
    btn.textContent = "ამოცანების ფილტრი";
  }
}

let problems = [];

window.onload = () => {
  loadProblems();
};

function saveProblems() {
  const data = problems.map(p => ({
    difficulty: p.difficulty,
    tags: p.tags,
    imageDataUrl: p.imageDataUrl,
  }));
  localStorage.setItem("problemsetData", JSON.stringify(data));
}

function loadProblems() {
  const saved = localStorage.getItem("problemsetData");
  if (!saved) return;

  const savedProblems = JSON.parse(saved);
  savedProblems.forEach(p => {
    const card = createProblemCard(p.difficulty, p.tags, p.imageDataUrl);
    document.getElementById("problemList").appendChild(card);
    problems.push({
      difficulty: p.difficulty,
      tags: p.tags,
      imageDataUrl: p.imageDataUrl,
      element: card,
    });
  });
}

function createProblemCard(difficulty, tags, imageDataUrl) {
  const card = document.createElement("div");
  card.className = "problem-card";

  card.innerHTML = `
  <button onclick="toggleSpoiler(this)">👁️ Show Problem Image</button>
    <div class="spoiler-content" style="display:none;">
      <img src="${imageDataUrl}" alt="Problem Image" class="problem-img">
    </div>
    <p><strong>📊 Difficulty:</strong> ${difficulty}</p>
    <p><strong>🏷️ Tags:</strong> ${tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</p>
    <button class="delete-button">ამოცანის წაშლა</button>
  `;

  card.querySelector(".delete-button").addEventListener("click", () => {
    deleteProblem(card);
  });

  return card;
}

function addProblem() {
  const imageInput = document.getElementById("problemImage");
  const tags = document
    .getElementById("tags")
    .value.split(",")
    .map(t => t.trim())
    .filter(t => t);
  const difficulty = parseInt(document.getElementById("difficulty").value);

  if (!imageInput.files[0]) {
    alert("Please upload an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    const imageDataUrl = e.target.result;
    const card = createProblemCard(difficulty, tags, imageDataUrl);

    document.getElementById("problemList").appendChild(card);

    problems.push({
      difficulty,
      tags,
      imageDataUrl,
      element: card,
    });

    saveProblems();
    applyFilters();

    // Clear inputs
    imageInput.value = "";
    document.getElementById("fileNameDisplay").textContent = "No file chosen";
    document.getElementById("tags").value = "";
    document.getElementById("difficulty").value = "3";
    document.getElementById("difficultyValue").textContent = "3";
  };

  reader.readAsDataURL(imageInput.files[0]);
}

function deleteProblem(card) {
  card.remove();
  problems = problems.filter(p => p.element !== card);
  saveProblems();
}

function toggleSpoiler(button) {
  const content = button.nextElementSibling;
  const shown = content.style.display === "block";
  content.style.display = shown ? "none" : "block";
  button.textContent = shown ? "👁️ Show Problem Image" : "🙈 Hide Problem Image";
}

function applyFilters() {
  const minDiffStr = document.getElementById("filterMinDifficulty").value;
  const maxDiffStr = document.getElementById("filterMaxDifficulty").value;

  const minDiff = minDiffStr ? parseInt(minDiffStr) : undefined;
  const maxDiff = maxDiffStr ? parseInt(maxDiffStr) : undefined;

  const tagFilter = document.getElementById("filterTags").value
    .toLowerCase()
    .split(',')
    .map(t => t.trim())
    .filter(t => t);

  problems.forEach(p => {
    let matchesDifficulty = true;
    if (minDiff !== undefined && maxDiff !== undefined) {
      if (minDiff > maxDiff) {
        matchesDifficulty = true; // ignore filter if invalid range
      } else {
        matchesDifficulty = (p.difficulty >= minDiff && p.difficulty <= maxDiff);
      }
    }

    const matchesTags = tagFilter.length === 0 || tagFilter.every(tag =>
      p.tags.map(t => t.toLowerCase()).includes(tag)
    );

    p.element.style.display = (matchesDifficulty && matchesTags) ? "block" : "none";
  });
}
