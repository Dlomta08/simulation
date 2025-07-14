function toggleForm() {
  const form = document.getElementById("problemForm");
  form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

function toggleFilter() {
  const filterSection = document.getElementById("filterSection");
  const btn = event.target;
  if (filterSection.style.display === "none" || filterSection.style.display === "") {
    filterSection.style.display = "block";
    btn.textContent = "ფილტრის დამალვა";
  } else {
    filterSection.style.display = "none";
    btn.textContent = "ამოცანების ფილტრი";
  }
}

let problems = [];
let quizPreviewProblems = [];

// Load problems from server on page load
window.onload = () => {
  loadProblems();
  Sortable.create(document.getElementById('quizPreview'), {
    animation: 150,
    onEnd: function () {
      refreshQuizPreview();
    }
  });
};

function loadProblems() {
  fetch("/api/personal_problems")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("problemList");
      container.innerHTML = "";
      problems = [];

      data.forEach(p => {
        const tagsArray = p.tags ? p.tags.split(",").map(t => t.trim()) : [];
        const card = createProblemCard(p.id, p.difficulty, tagsArray, p.image_url);
        container.appendChild(card);
        problems.push({
          id: p.id,
          difficulty: p.difficulty,
          tags: tagsArray,
          imageUrl: p.image_url,
          element: card
        });
      });

      applyFilters();
    })
    .catch(err => console.error("Error loading problems:", err));
}

function createProblemCard(id, difficulty, tags, imageUrl) {
  const card = document.createElement("div");
  card.className = "problem-card";

  card.innerHTML = `
    <input type="checkbox" class="quiz-select">
    <button onclick="toggleSpoiler(this)">გახსენით ამოცანა</button>
    <div class="spoiler-content" style="display:none;">
      <img src="${imageUrl}" alt="Problem Image" class="problem-img">
    </div>
    <p><strong>სირთულე:</strong> ${difficulty}</p>
    <p><strong>თემები:</strong> ${tags.map(t => `<span class="tag">${t}</span>`).join(", ")}</p>
    <button class="delete-button" style="margin-top:5px;background:#f44336;color:white;">წაშლა</button>
  `;

  card.querySelector(".delete-button").addEventListener("click", () => {
    deleteProblem(id, card);
  });

  return card;
}

function addProblem() {
  const imageInput = document.getElementById("problemImage");
  const tags = document.getElementById("tags").value;
  const difficulty = document.getElementById("difficulty").value;

  if (!imageInput.files[0]) {
    alert("Please upload an image.");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageInput.files[0]);
  formData.append("tags", tags);
  formData.append("difficulty", difficulty);

  fetch("/upload_personal_problem", {
    method: "POST",
    body: formData
  })
    .then(res => {
      if (!res.ok) throw new Error("ამოცანის დამატება ვერ განხორციელდა.");
      return res.text();
    })
    .then(() => {
      alert("ამოცანა დამატებულია!");
      loadProblems();
      // Reset form inputs
      imageInput.value = "";
      document.getElementById("tags").value = "";
      document.getElementById("difficulty").value = "3";
    })
    .catch(err => alert(err.message));
}

function deleteProblem(problemId, card) {
  if (!confirm("ნამდვილად გსურთ ამ ამოცანის წაშლა?")) return;

  fetch(`/api/delete_problem/${problemId}`, { method: "POST" })
    .then(res => {
      if (!res.ok) throw new Error("წაშლა ვერ განხორციელდა.");
      // Remove from DOM and array
      card.remove();
      problems = problems.filter(p => p.id !== problemId);
      renderQuizPreview();
      alert("ამოცანა წაიშალა.");
    })
    .catch(err => alert(err.message));
}

function toggleSpoiler(button) {
  const content = button.nextElementSibling;
  const shown = content.style.display === "block";
  content.style.display = shown ? "none" : "block";
  button.textContent = shown ? "გახსენით ამოცანა" : "დახურეთ ამოცანა";
}

function applyFilters() {
  const minDiff = parseInt(document.getElementById("filterMinDifficulty").value);
  const maxDiff = parseInt(document.getElementById("filterMaxDifficulty").value);

  const tagFilter = document.getElementById("filterTags").value
    .toLowerCase()
    .split(",")
    .map(t => t.trim())
    .filter(t => t);

  problems.forEach(p => {
    let matchesDifficulty = p.difficulty >= minDiff && p.difficulty <= maxDiff;
    let matchesTags =
      tagFilter.length === 0 ||
      tagFilter.every(tag => p.tags.map(t => t.toLowerCase()).includes(tag));

    p.element.style.display = (matchesDifficulty && matchesTags) ? "block" : "none";
  });
}

function renderQuizPreview() {
  const preview = document.getElementById('quizPreview');
  const selected = problems.filter(p => p.element.querySelector('.quiz-select')?.checked);

  selected.forEach(p => {
    if (!quizPreviewProblems.includes(p)) {
      quizPreviewProblems.push(p);
    }
  });

  quizPreviewProblems = quizPreviewProblems.filter(p =>
    p.element.querySelector('.quiz-select')?.checked
  );

  preview.innerHTML = '';
  quizPreviewProblems.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-preview-item';
    div.style.border = '1px solid #aaa';
    div.style.padding = '8px';
    div.style.marginBottom = '5px';
    div.style.cursor = 'move';

    div.dataset.image = p.imageUrl;
    div.dataset.difficulty = p.difficulty;
    div.dataset.tags = JSON.stringify(p.tags);

    const label = document.createElement('div');
    label.className = 'label';
    label.innerHTML = `<strong>ამოცანა N${i + 1}:</strong> სირთულე: ${p.difficulty} – თემები: ${p.tags.join(', ')}`;

    const img = document.createElement('img');
    img.src = p.imageUrl;
    img.style.display = 'none';
    img.style.maxWidth = '100%';
    img.style.marginTop = '10px';

    div.addEventListener('click', () => {
      img.style.display = img.style.display === 'none' ? 'block' : 'none';
    });

    div.appendChild(label);
    div.appendChild(img);
    preview.appendChild(div);
  });
}

function refreshQuizPreview() {
  const preview = document.getElementById('quizPreview');
  const items = Array.from(preview.children);

  items.forEach((item, i) => {
    const difficulty = item.dataset.difficulty;
    const tags = JSON.parse(item.dataset.tags || "[]");
    const label = item.querySelector(".label");
    if (label) {
      label.innerHTML = `<strong>ამოცანა N${i + 1}:</strong> სირთულე: ${difficulty} – თემები: ${tags.join(', ')}`;
    }
  });
}

function shuffleQuiz() {
  for (let i = quizPreviewProblems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizPreviewProblems[i], quizPreviewProblems[j]] = [quizPreviewProblems[j], quizPreviewProblems[i]];
  }
  renderQuizPreview();
}

function generateQuizPDF() {
  if (quizPreviewProblems.length === 0) {
    alert("No problems selected.");
    return;
  }

  const orderedProblems = quizPreviewProblems.map(p => ({
    imageUrl: p.imageUrl,
    difficulty: p.difficulty,
    tags: p.tags
  }));

  openQuizWindow(orderedProblems);
}

function openQuizWindow(selectedProblems) {
  const quizWindow = window.open("", "_blank");
  quizWindow.document.write(`
    <html>
    <head>
      <title>Quiz</title>
      <style>
        body { font-family: sans-serif; padding: 20px; }
        .problem { margin-bottom: 30px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        .problem img { max-width: 100%; margin-top: 10px; }
      </style>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    </head>
    <body>
      <button onclick="downloadQuizPDF()">PDF-ის გადმოწერა</button>
      <div id="quizContent">
  `);

  selectedProblems.forEach((p, i) => {
    quizWindow.document.write(`
      <div class="problem">
        <h3>${i + 1}.</h3>
        <img src="${p.imageUrl}" alt="Problem Image">
      </div>
    `);
  });

  quizWindow.document.write(`
      </div>
      <script>
        function downloadQuizPDF() {
          const element = document.getElementById("quizContent");
          const opt = {
            margin: 10,
            filename: "quiz.pdf",
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
        }
      </script>
    </body>
    </html>
  `);

  quizWindow.document.close();
}

document.addEventListener('change', e => {
  if (e.target.classList.contains('quiz-select')) {
    renderQuizPreview();
  }
});
