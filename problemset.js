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
  Sortable.create(document.getElementById('quizPreview'), {
    animation: 150,
    onEnd: function () {
      refreshQuizPreview();
    }
  });
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
    <input type="checkbox" class="quiz-select">
    <button onclick="toggleSpoiler(this)">გახსენით ამოცანა</button>
    <div class="spoiler-content" style="display:none;">
      <img src="${imageDataUrl}" alt="Problem Image" class="problem-img">
    </div>
    <p><strong>სირთულე:</strong> ${difficulty}</p>
    <p><strong>თემები:</strong> ${tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</p>
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

    // Update quiz preview for new selection
    renderQuizPreview();
  };

  reader.readAsDataURL(imageInput.files[0]);
}

function deleteProblem(card) {
  card.remove();
  problems = problems.filter(p => p.element !== card);
  saveProblems();

  // Update quiz preview after delete
  renderQuizPreview();
}

function toggleSpoiler(button) {
  const content = button.nextElementSibling;
  const shown = content.style.display === "block";
  content.style.display = shown ? "none" : "block";
  button.textContent = shown ? "გახსენით ამოცანა" : "დახურეთ ამოცანა";
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

// Render quiz preview from selected problems
function renderQuizPreview() {
  const preview = document.getElementById('quizPreview');
  preview.innerHTML = '';

  const selected = problems.filter(p => p.element.querySelector('.quiz-select')?.checked);
  selected.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-preview-item';
    div.style.border = '1px solid #aaa';
    div.style.padding = '8px';
    div.style.marginBottom = '5px';
    div.style.cursor = 'move';
    div.dataset.index = problems.indexOf(p);

    // Create label
    const label = document.createElement('div');
    label.className = 'label';
    label.innerHTML = `<strong> ამოცანა N${i + 1}:</strong> სირთულე: ${p.difficulty} – თემები: ${p.tags.join(', ')}`;

    // Create image (hidden by default)
    const img = document.createElement('img');
    img.src = p.imageDataUrl;
    img.style.display = 'none';
    img.style.maxWidth = '100%';
    img.style.marginTop = '10px';

    // Toggle image on click
    div.addEventListener('click', () => {
      img.style.display = img.style.display === 'none' ? 'block' : 'none';
    });

    // Append label and image
    div.appendChild(label);
    div.appendChild(img);
    preview.appendChild(div);
  });

  refreshQuizPreview();
}


function refreshQuizPreview() {
  const preview = document.getElementById('quizPreview');
  const items = Array.from(preview.children);

  items.forEach((item, i) => {
    const index = item.dataset.index;
    const problem = problems[index];
    const label = item.querySelector(".label");
    if (label) {
      label.innerHTML = `<strong>ამოცანა N${i + 1}:</strong> სირთულე: ${problem.difficulty} – თემები: ${problem.tags.join(', ')}`;
    }
  });
}

// Shuffle quiz preview items randomly
function shuffleQuiz() {
  const preview = document.getElementById('quizPreview');
  const items = Array.from(preview.children);
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  preview.innerHTML = '';
  items.forEach(item => preview.appendChild(item));
  refreshQuizPreview(); // Just update labels
}


// Generate quiz PDF from preview order
function generateQuizPDF() {
  const preview = document.getElementById('quizPreview');
  if(preview.children.length === 0) {
    alert("No problems in quiz preview");
    return;
  }
  const orderedProblems = [];
  for (const child of preview.children) {
    const idx = parseInt(child.dataset.index, 10);
    if (!isNaN(idx)) {
      orderedProblems.push(problems[idx]);
    }
  }
  openQuizWindow(orderedProblems);
}

// Open quiz window and display problems with PDF download button
function openQuizWindow(selectedProblems) {
  const quizTitle = document.getElementById("quizTitle")?.value.trim() || "Quiz";
  const quizWindow = window.open("", "_blank");

  quizWindow.document.write(`
    <html>
    <head>
      <title>${quizTitle}</title>
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
        <img src="${p.imageDataUrl}" alt="Problem Image">
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
            filename: "${quizTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf",
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
