(function() {
    const katexCSS = document.createElement('link');
    katexCSS.rel = 'stylesheet';
    katexCSS.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
    document.head.appendChild(katexCSS);

    const katexJS = document.createElement('script');
    katexJS.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js';
    katexJS.defer = true;
    document.head.appendChild(katexJS);

    const renderJS = document.createElement('script');
    renderJS.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js';
    renderJS.defer = true;
    renderJS.onload = initLatexPreview;
    document.head.appendChild(renderJS);
})();

let activeInputId = "latexInput"; // default target is the main textarea

function setActiveInput(id) {
  activeInputId = id;
}

function insertLatexSnippet(_ignored, snippet) {
    const input = document.getElementById(activeInputId);
    if (!input) return;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    input.value = input.value.slice(0, start) + snippet + input.value.slice(end);

    const firstBrace = snippet.indexOf("{}");
    if (firstBrace !== -1) {
        const pos = start + firstBrace + 1;
        input.setSelectionRange(pos, pos);
    } else {
        input.setSelectionRange(start + snippet.length, start + snippet.length);
    }

    input.focus();
    input.dispatchEvent(new Event("input")); // update preview
}


function initLatexPreview() {
    const latexInput = document.getElementById('latexInput');
    const latexPreview = document.getElementById('latexPreview');

    function updatePreview() {
        let previewHTML = "";

        // Main problem
        if (latexInput.value.trim()) {
            previewHTML += `<div><strong>ამოცანა:</strong><br>$$ ${latexInput.value} $$</div><br>`;
        }

        // Options
        let i = 0;
        let optionsHTML = "";
        while (true) {
            const field = document.getElementById("latexOption" + i);
            if (!field) break;
            const value = field.value.trim();
            if (value) {
                const isCorrect = document.querySelector(`input[name="latexCorrect"][value="${i}"]`)?.checked;
                optionsHTML += `<div${isCorrect ? ' style="font-weight:bold;color:green;"' : ''}>
                    (${String.fromCharCode(65 + i)}) $$ ${value} $$</div>`;
            }
            i++;
        }
        if (optionsHTML) {
            previewHTML += `<div><strong>ვარიანტები:</strong><br>${optionsHTML}</div>`;
        }

        latexPreview.innerHTML = previewHTML;

        // Render LaTeX visually
        renderMathInElement(latexPreview, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "\\[", right: "\\]", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false }
            ],
            throwOnError: false
        });
    }

    // Update when problem changes
    latexInput.addEventListener('input', updatePreview);

    // Update when options change
    document.addEventListener('input', e => {
        if (e.target.id && e.target.id.startsWith("latexOption")) {
            updatePreview();
        }
    });

    // Update when correct answer is selected
    document.addEventListener('change', e => {
        if (e.target.name === "latexCorrect") {
            updatePreview();
        }
    });

    // Initial render
    updatePreview();
}

function toggleTypeButtons() {
  const typeButtons = document.getElementById("typeButtons");
  const commonFields = document.getElementById("commonFields");

  if (typeButtons.style.display === "none" || typeButtons.style.display === "") {
    typeButtons.style.display = "block";
    commonFields.style.display = "block";
  } else {
    typeButtons.style.display = "none";
    commonFields.style.display = "none";
    // სურვილისამებრ — დამალე ყველა ფორმა
    document.getElementById("formImage").style.display = "none";
    document.getElementById("formWord").style.display = "none";
    document.getElementById("formLatex").style.display = "none";
  }
}

function showForm(type) {
  // დამალე ყველა ფორმა
  document.getElementById("formImage").style.display = "none";
  document.getElementById("formWord").style.display = "none";
  document.getElementById("formLatex").style.display = "none";

  if (type === "image") {
    document.getElementById("formImage").style.display = "block";
  } else if (type === "word") {
    document.getElementById("formWord").style.display = "block";
  } else if (type === "latex") {
    document.getElementById("formLatex").style.display = "block";
  }
}

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
  const container = document.getElementById("problemList");
  container.innerHTML = "";
  problems = [];

  fetch("/api/problems")
    .then(res => res.json())
    .then(data => {
      data.forEach(p => {
        const tagsArray = p.tags ? p.tags.split(",").map(t => t.trim()) : [];

        // Parse options if it's a LaTeX problem
        let optionsArray = [];
        if (p.options) {
          try {
            optionsArray = JSON.parse(p.options);
          } catch (err) {
            console.error("Failed to parse options for problem", p.id, err);
          }
        }

        const card = createProblemCard(
          p.id,
          p.difficulty,
          tagsArray,
          p.image_url,
          p.source,
          p.word_content,
          p.latex_content,
          optionsArray // ✅ pass parsed options here
        );

        container.appendChild(card);

        problems.push({
          id: p.id,
          difficulty: p.difficulty,
          tags: tagsArray,
          imageUrl: p.image_url,
          source: p.source,
          word_content: p.word_content,
          latex_content: p.latex_content,
          options: optionsArray, // store for later if needed
          element: card
        });

        // Render LaTeX if exists
        if (p.latex_content && p.latex_content.trim() !== "" && window.MathJax && window.MathJax.typesetPromise) {
          MathJax.typesetPromise([card])
            .then(() => console.log(`MathJax rendered for problem ${p.id}`))
            .catch(err => console.error("MathJax error:", err));
        }
      });

      applyFilters();
    })
    .catch(err => console.error("Error loading problems:", err));
}



function createProblemCard(id, difficulty, tags, imageUrl, source, wordContent = null, latexContent = null, options = []) {
  const card = document.createElement("div");
  card.className = "problem-card";

  let contentHTML = "";

  if (imageUrl) {
    contentHTML = `<img src="${imageUrl}" alt="Problem Image" class="problem-img">`;
  } 
  else if (latexContent && latexContent.trim() !== "") {
    contentHTML = `<div class="latex-content">\\[${latexContent}\\]</div>`;
  }
  else if (wordContent && wordContent.trim() !== "") {
    contentHTML = `<div class="word-content">${wordContent}</div>`;
  } 
  else {
    contentHTML = `<p style="color:red;">ამოცანის შინაარსი ვერ ჩაიტვირთა.</p>`;
  }

  // Options HTML for LaTeX problems
  let optionsHTML = "";
  if (options && options.length > 0) {
    optionsHTML = `
      <div class="latex-options">
        <strong>პასუხის ვარიანტები:</strong>
        <div class="options-row">
          ${options.map((opt, i) => `<p>${['ა','ბ','გ','დ','ე','ვ'][i]}) ${opt}</p>`).join("")}
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    <input type="checkbox" class="quiz-select">
    <button onclick="toggleSpoiler(this)">გახსენით ამოცანა</button>
    <div class="spoiler-content" style="display:none;">
      ${contentHTML}
      ${optionsHTML}
    </div>
    <p><strong>სირთულე:</strong> ${difficulty}</p>
    <p><strong>თემები:</strong> ${tags.map(t => `<span class="tag">${t}</span>`).join(", ")}</p>
    <p><strong>წყარო:</strong> ${source === "personal" ? "პირადი" : "საჯარო"}</p>
    <button class="delete-button" style="margin-top:5px;background:#f44336;color:white;">წაშლა</button>
  `;

  card.querySelector(".delete-button").addEventListener("click", () => {
    deleteProblem(id, card, source);
  });

  // MathJax render
  if (latexContent && latexContent.trim() !== "" && window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([card])
      .then(() => console.log(`MathJax rendered for problem ${id}`))
      .catch(err => console.error("MathJax error:", err));
  }

  return card;
}





function addProblem() {
  const imageInput = document.getElementById("problemImage");
  const tags = document.getElementById("tags").value;
  const difficulty = document.getElementById("difficulty").value;
  const target = document.getElementById("problemTarget").value; // public / personal

  if (!imageInput.files[0]) {
    alert("Please upload an image.");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageInput.files[0]);
  formData.append("tags", tags);
  formData.append("difficulty", difficulty);
  formData.append("is_private", target === "personal"); // ✅ აი აქ ხდება გადაცემა

  fetch("/upload_problem", {
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
      imageInput.value = "";
      document.getElementById("tags").value = "";
      document.getElementById("difficulty").value = "3";
    })
    .catch(err => alert(err.message));
}

function submitProblem() {
  const type = document.getElementById("problemType").value;

  if (type === "image") {
    addProblemImage();
  } else if (type === "word") {
    addProblemWord();
  } else if (type === "latex") {
    addProblemLatex();
  }
}


function addProblemImage() {
  const imageInput = document.getElementById("problemImage");
  const tags = document.getElementById("tags").value;
  const difficulty = document.getElementById("difficulty").value;
  const target = document.getElementById("problemTarget").value;

  if (!imageInput.files[0]) {
    alert("გთხოვ ატვირთე სურათი.");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageInput.files[0]);
  formData.append("tags", tags);
  formData.append("difficulty", difficulty);
  formData.append("is_private", target === "personal");

  fetch("/upload_problem", {
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
      imageInput.value = "";
      document.getElementById("tags").value = "";
      document.getElementById("difficulty").value = "3";
    })
    .catch(err => alert(err.message));
}

function addProblemWord() {
  const text = tinymce.get("problemText").getContent();
  const tags = document.getElementById("tags").value;
  const difficulty = document.getElementById("difficulty").value;
  const target = document.getElementById("problemTarget").value;

  const formData = new FormData();
  formData.append("word_content", text);
  formData.append("tags", tags);
  formData.append("difficulty", difficulty);
  formData.append("is_private", target === "personal");

  fetch("/upload_problem", {
    method: "POST",
    body: formData
  })
    .then(res => {
      if (!res.ok) throw new Error("ამოცანის დამატება ვერ განხორციელდა.");
      return res.text();
    })
    .then(() => {
      alert("Word-ის ამოცანა დაემატა!");
      tinymce.get("problemText").setContent("");
    })
    .catch(err => alert(err.message));
}

let latexOptionCount = 4;

function addProblemLatex() {
  const latex = document.getElementById("latexInput").value.trim();
  const tags = document.getElementById("tags").value.trim();
  const difficulty = document.getElementById("difficulty").value;
  const target = document.getElementById("problemTarget").value;

  // Collect options
  let options = [];
  let i = 0;
  while (true) {
    const field = document.getElementById("latexOption" + i);
    if (!field) break;
    const value = field.value.trim();
    if (value) options.push(value);
    i++;
  }

  // Correct answer index
  let correctIndex = document.querySelector('input[name="latexCorrect"]:checked');
  correctIndex = correctIndex ? parseInt(correctIndex.value) : null;

  if (!latex) {
    alert("გთხოვთ შეიყვანოთ ამოცანა (LaTeX).");
    return;
  }
  if (options.length < 2) {
    alert("გთხოვთ შეიყვანოთ მინიმუმ ორი ვარიანტი.");
    return;
  }
  if (correctIndex === null) {
    alert("გთხოვთ მონიშნოთ სწორი პასუხი.");
    return;
  }

  // Build FormData
  const formData = new FormData();
  formData.append("latex_content", latex);
  formData.append("tags", tags);
  formData.append("difficulty", difficulty);
  formData.append("is_private", target === "personal");

  // Store options as JSON
  formData.append("options", JSON.stringify(options));
  formData.append("correct", correctIndex);

  fetch("/upload_problem", {
    method: "POST",
    body: formData
  })
    .then(async res => {
      const text = await res.text();
      console.log("Server response:", res.status, text); // 🔍 debug
      if (!res.ok) throw new Error(text || "ამოცანის დამატება ვერ განხორციელდა.");
      alert("LaTeX ამოცანა დაემატა!");
      document.getElementById("latexInput").value = "";
      options.forEach((_, idx) => {
        const f = document.getElementById("latexOption" + idx);
        if (f) f.value = "";
      });
      document.querySelectorAll('input[name="latexCorrect"]').forEach(r => (r.checked = false));
    })
    .catch(err => alert(err.message));
}



function deleteProblem(problemId, card, source) {
  if (!confirm("ნამდვილად გსურთ ამ ამოცანის წაშლა?")) return;

  fetch(`/api/delete_problem/${problemId}`, { method: "DELETE" })
    .then(async res => {
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`წაშლა ვერ განხორციელდა: ${errorText}`);
      }
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

  // ⬇️ LaTeX MathJax რენდერი, როცა spoiler იხსნება
  if (!shown && window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([content])
      .then(() => console.log("MathJax rendered in spoiler"))
      .catch(err => console.error("MathJax error:", err));
  }
}

function applyFilters() {
  const minDiff = parseInt(document.getElementById("filterMinDifficulty").value);
  const maxDiff = parseInt(document.getElementById("filterMaxDifficulty").value);
  const tagFilter = document.getElementById("filterTags").value
    .toLowerCase()
    .split(",")
    .map(t => t.trim())
    .filter(t => t);

  const sourceFilter = document.getElementById("filterSource").value;
  const container = document.getElementById("problemList");
  container.innerHTML = "";
  const sorted = [...problems];
  if (sourceFilter === "both") {
    sorted.sort((a, b) => (a.source === "personal" ? -1 : 1));
  }
  sorted.forEach(p => {
    const matchesDifficulty = p.difficulty >= minDiff && p.difficulty <= maxDiff;
    const matchesTags =
      tagFilter.length === 0 ||
      tagFilter.every(tag => p.tags.map(t => t.toLowerCase()).includes(tag));
    const matchesSource =
      sourceFilter === "both" || p.source === sourceFilter;

    const visible = matchesDifficulty && matchesTags && matchesSource;
    p.element.style.display = visible ? "block" : "none";
    if (visible) container.appendChild(p.element);
  });
}


function renderQuizPreview() {
  const preview = document.getElementById('quizPreview');

  // Get all selected problems
  const selected = problems.filter(p => p.element.querySelector('.quiz-select')?.checked);

  // Add new selected problems
  selected.forEach(p => {
    if (!quizPreviewProblems.includes(p)) quizPreviewProblems.push(p);
  });

  // Remove unselected problems
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

    div.dataset.image = p.imageUrl || "";
    div.dataset.difficulty = p.difficulty;
    div.dataset.tags = JSON.stringify(p.tags);

    // Label with problem number (always visible)
    const label = document.createElement('div');
    label.className = 'label';
    label.innerHTML = `<strong>ამოცანა N${i + 1}</strong>`;

    // Button to toggle content
    const button = document.createElement('button');
    button.textContent = "გახსენით ამოცანა";
    button.style.margin = "5px 0";

    // Content (everything hidden initially)
    const contentEl = document.createElement('div');
    contentEl.className = 'spoiler-content';
    contentEl.style.display = 'none';
    contentEl.style.marginTop = '10px';

    // Problem statement
    if (p.imageUrl) {
        const img = document.createElement('img');
        img.src = p.imageUrl;
        img.style.maxWidth = '100%';
        contentEl.appendChild(img);
    } else if (p.word_content) {
        contentEl.innerHTML += `<div>${p.word_content}</div>`;
    } else if (p.latex_content) {
        contentEl.innerHTML += `<div>\\[${p.latex_content}\\]</div>`;
    } else {
        contentEl.innerHTML += '<p style="color:red;">ამოცანის შინაარსი ვერ ჩაიტვირთა.</p>';
    }

    // Options (if exist)
    if (p.options && p.options.length > 0) {
        const optionsHTML = p.options.map((opt, idx) => {
            const letter = ['ა','ბ','გ','დ','ე','ვ'][idx] || `Option ${idx+1}`;
            return `<div>(${letter}) ${opt}</div>`;
        }).join("");
        contentEl.innerHTML += `<div class="latex-options"><strong>პასუხის ვარიანტები:</strong>${optionsHTML}</div>`;
    }

    // Difficulty & tags
    contentEl.innerHTML += `<p><strong>სირთულე:</strong> ${p.difficulty}</p>`;
    contentEl.innerHTML += `<p><strong>თემები:</strong> ${p.tags.join(', ')}</p>`;

    // Toggle content visibility
    button.addEventListener('click', () => {
        const isShown = contentEl.style.display === 'block';
        contentEl.style.display = isShown ? 'none' : 'block';
        button.textContent = isShown ? "გახსენით ამოცანა" : "დახურეთ ამოცანა";

        // Render LaTeX when shown
        if (!isShown && window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([contentEl])
              .then(() => console.log("MathJax rendered"))
              .catch(err => console.error(err));
        }
    });

    div.appendChild(label);
    div.appendChild(button);
    div.appendChild(contentEl);
    preview.appendChild(div);
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

function addLatexOption() {
  try {
    const latexOptionsEl = document.getElementById('latexOptions');
    if (!latexOptionsEl) {
      console.error('addLatexOption: #latexOptions not found');
      return;
    }

    const row = latexOptionsEl.querySelector('.options-row');
    if (!row) {
      console.error('addLatexOption: .options-row not found inside #latexOptions');
      return;
    }

    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = `
      <input type="radio" name="latexCorrect" value="${latexOptionCount}">
      <input type="text" id="latexOption${latexOptionCount}" placeholder="ვარიანტი ${String.fromCharCode(65 + latexOptionCount)}" onfocus="setActiveInput('latexOption${latexOptionCount}')">
    `;

    row.appendChild(div);

    const textInput = div.querySelector('input[type=text]');
    if (textInput) {
      // focus the new input so user can type immediately
      textInput.focus();
      // when user types, existing preview listeners will pick up this input via dispatched event
      textInput.addEventListener('input', () => {
        const evt = new Event('input');
        document.getElementById('latexInput')?.dispatchEvent(evt);
      });

      // trigger an immediate preview update
      const evt = new Event('input');
      document.getElementById('latexInput')?.dispatchEvent(evt);
    }

    console.log(`Added latex option ${latexOptionCount}`);
    latexOptionCount++;
  } catch (err) {
    console.error('addLatexOption error', err);
  }
}

console.log('Attaching addLatexOption to window');
window.addLatexOption = addLatexOption;
