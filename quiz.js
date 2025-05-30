let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;

function startQuiz(withTimer) {
  simulationMode = withTimer; 
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";
  renderQuiz();
  if (withTimer) {
    document.getElementById("timer").style.display = "block";
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
        quizForm.requestSubmit();
      }
    }, 1000);
  } else {
    document.getElementById("timer").style.display = "none";
  }
}

function updateTimerDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

function renderQuiz(){
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    fieldset.appendChild(legend);

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      label.appendChild(radio);
      label.append(` ${opt}`);
      fieldset.appendChild(label);
    });
    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.textContent = "შემოწმება";
    checkBtn.style.marginTop = "8px";
    checkBtn.addEventListener("click", () => {
      const selected = form.querySelector(`input[name="question${i}"]:checked`);
      if (!selected) {
        feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
      } else {
        const isCorrect = parseInt(selected.value) === q.correct;
        feedback.innerHTML = isCorrect
          ? `<span style="color: green;">პასუხი სწორია ✔️</span>`
          : `<span style="color: red;">პასუხი არასწორია ❌</span> – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>`;
      }
      if (window.MathJax) MathJax.typeset();
    });
    if(!simulationMode) fieldset.appendChild(checkBtn);
    fieldset.appendChild(feedback);
    form.appendChild(fieldset);
  });
  if (window.MathJax) MathJax.typeset();
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "დასრულება";
  submitBtn.style.marginTop = "20px";
  form.appendChild(submitBtn);
  const result = document.createElement("div");
  result.id = "result";
  result.style.marginTop = "12px";
  form.appendChild(result);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    let score = 0;
    const result = document.getElementById("result");
    result.innerHTML = "";

    const tagStats = {};

    quizData.forEach((q, i) => {
      const answer = form.querySelector(`input[name="question${i}"]:checked`);
      const fieldset = form.querySelectorAll("fieldset")[i];
      const feedback = fieldset.querySelector(".feedback");
      const isCorrect = answer && parseInt(answer.value) === q.correct;
      if (isCorrect) score++;
      if(!answer){
        feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
      }else{
        feedback.innerHTML = isCorrect
        ? `<span style="color: green;">პასუხი სწორია ✔️</span>`
        : `<span style="color: red;">პასუხი არასწორია ❌</span> – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>`;
      }
      // q.tags.forEach(tag => {
      //   if (!tagStats[tag]) tagStats[tag] = { correct: 0, total: 0 };
      //   tagStats[tag].total++;
      //   if (isCorrect) tagStats[tag].correct++;
      // });
      fieldset.appendChild(feedback);
    });

    result.innerHTML = `<strong>ქულა: ${score} / ${quizData.length}`;
    for (let tag in tagStats) {
      const { correct, total } = tagStats[tag];
      const percentage = ((correct / total) * 100).toFixed(1);
      result.innerHTML += `<p>${tag}: ${correct} / ${total} (${percentage}%)</p>`;
    }

    if(simulationMode) form.querySelector("button[type='submit']").disabled = true;
    // Re-render math after result is shown
    if (window.MathJax) MathJax.typeset();
  });
}