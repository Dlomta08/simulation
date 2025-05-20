let timerInterval;
let timeLeft = 3 * 60 * 60; // 3 Hours 

function startQuiz(withTimer) {
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";

  if (withTimer) {
    document.getElementById("timer").style.display = "block";
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი დასრულებულია.");
        quizForm.requestSubmit(); // safely submits even if clicked from code
      }
    }, 1000);
  }
}

function updateTimerDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}


const quizData = [
  {
    question: "\\textbf{1.} მოქცეულია \\((-1; 1)\\) ინტერვალში განსაზღვრული ფუნქციები: \\\\ \\(F(x) = x^2\\), \\(G(x) = x^3\\), \\(T(x) = 3^x\\), \\(L(x) = \\sin x\\), \\(K(x) = \\cos x\\). \\\\ \\text{ჩამოთვლილთაგან რამდენ ფუნქციას გააჩნია შექცეული ფუნქცია?}",
    options: ["ა) არცერთს", "ბ) 1", "გ) 2", "დ) 3", "ე) 4", "ვ) 5"],
    correct: 3,
    tags: ["functions", "injectivity", "georgian"]
  },
  {
    question: "\\textbf{2.} რამდენი დადებითი ამონახსნი აქვს განტოლებას \\(3^x = \\sin\\left(\\frac{1}{3}x\\right)\\)?",
    options: ["ა) არცერთი", "ბ) ერთი", "გ) ორი", "დ) სამი", "ე) ოთხი", "ვ) ოთხზე მეტი"],
    correct: 1,
    tags: ["equation", "exponential", "trigonometry"]
  },
  {
    question: "\\textbf{3.} იპოვეთ \\( \\log_8(x^2 - 6x + 10) + 2 \\) გამოსახულების უმცირესი მნიშვნელობა.",
    options: ["ა) -1", "ბ) 0", "გ) 1", "დ) 2", "ე) \\(\\log_8 3\\)", "ვ) \\(\\log_8 10\\)"],
    correct: 1,
    tags: ["logarithm", "minimum"]
  },
  {
    question: "\\textbf{4.} მოცემულია კუბი \\(ABCDA_1B_1C_1D_1\\). იპოვეთ კუთხე \\(BCA_1\\) და \\(B_1C_1D\\) სიბრტყეებს შორის.",
    options: ["ა) 30°", "ბ) 45°", "გ) 60°", "დ) 90°", "ე) 120°", "ვ) 150°"],
    correct: 3,
    tags: ["geometry", "angles", "3D"]
  },
  {
    question: "\\textbf{5.} წესიერი ექვსკუთხა პირამიდის სიმაღლეა \\(\\sqrt{32}\\), ხოლო ფუძის გვერდი 8. იპოვეთ მცირე დიაგონალური კვეთის ფართობი.",
    options: ["ა) 4\\sqrt{6}", "ბ) 3\\sqrt{6}", "გ) 24", "დ) 32", "ე) 48", "ვ) 64"],
    correct: 3,
    tags: ["geometry", "area", "pyramid"]
  },
  {
    question: "\\textbf{6.} ამოხსენით განტოლება \\(3\\cos x \\cdot 5\\sin x = 15\\cos x\\), სადაც \\(n \\in \\mathbb{Z}\\).",
    options: [
      "ა) \\(x = \\frac{\\pi}{2} + \\pi n\\)",
      "ბ) \\(x = \\pi + \\pi n\\)",
      "გ) \\(x = \\frac{\\pi}{4} + \\pi n\\)",
      "დ) \\(x = \\frac{\\pi}{4} + 2\\pi n; x = \\frac{\\pi}{2} + 2\\pi n\\)",
      "ე) \\(x = \\pi n\\)",
      "ვ) \\(x = \\frac{\\pi}{4} + 4\\pi n\\)"
    ],
    correct: 3,
    tags: ["trigonometry", "equation"]
  },
  {
    question: "\\textbf{7.} რომელ მეოთხედში მდებარეობს ფუნქციის \\(f(x) = 5 - |x| - 5\\) გრაფიკი?",
    options: ["ა) I", "ბ) I-II", "გ) I-II-III", "დ) III-IV", "ე) II-IV", "ვ) I-II-III-IV"],
    correct: 3,
    tags: ["functions", "graphing"]
  },
  {
    question: "\\textbf{8.} მოცემულია: \\(a = 25^{\\frac{1}{\\log_{65}}}\\), \\(b = 2\\log_{\\sqrt{22\\sqrt{5}}}\\), \\(c = 3\\log_{91} 21\\), \\(d = \\left(\\frac{1}{2}\\right)^{\\log_{13} 81}\\). დაალაგეთ ზრდის მიხედვით.",
    options: ["ა) a; c; b; d", "ბ) c; d; b; a", "გ) c; d; a; b", "დ) d; c; a; b", "ე) b; d; c; a", "ვ) c; b; d; a"],
    correct: 2,
    tags: ["logarithm", "comparison"]
  },
  {
    question: "\\textbf{9.} წესიერი სამკუთხა პირამიდის სიმაღლეა \\(2\\sqrt{3}\\), ხოლო წახნაგი ფუძის სიბრტყესთან ქმნის 60°-იან კუთხეს. იპოვეთ მოცულობა.",
    options: ["ა) 12\\sqrt{3}", "ბ) 16", "გ) 8\\sqrt{3}", "დ) 18", "ე) 24", "ვ) 32"],
    correct: 0,
    tags: ["volume", "pyramid"]
  },
  {
    question: "\\textbf{10.} წესიერი სამკუთხა პირამიდის წვეროსთან მდებარე ბრტყელი კუთხეა 90°. იპოვეთ გვერდითი ზედაპირის ფართობის შეფარდება ფუძის ფართობთან.",
    options: ["ა) \\(\\sqrt{2}\\)", "ბ) 2", "გ) \\(\\sqrt{3}\\)", "დ) 1", "ე) 3", "ვ) \\(\\sqrt{5}\\)"],
    correct: 2,
    tags: ["geometry", "ratio", "surface-area"]
  },
  {
    question: "\\textbf{11.} იპოვეთ ამონახსნთა რაოდენობა განტოლებისთვის: \\(2x^2 - 4x + 5 = 1 + \\sin^2\\left(\\frac{\\pi x}{4}\\right)\\)",
    options: ["ა) 0", "ბ) 1", "გ) 2", "დ) 3", "ე) 4", "ვ) 5"],
    correct: 2,
    tags: ["trigonometry", "equation", "roots"]
  },
  {
    question: "\\textbf{12.} იპოვეთ გამოსახულების მნიშვნელობა \\(\\frac{f(x+2)}{f(x-7)}\\), თუ \\(f(x) = 8x + 1\\).",
    options: ["ა) 812", "ბ) 817", "გ) 85", "დ) 222", "ე) 227", "ვ) 230"],
    correct: 2,
    tags: ["functions", "substitution"]
  },
  {
    question: "\\textbf{13.} გამოთვალეთ: \\(6 \\cdot \\log_3 2 \\cdot \\log_4 3 \\cdot \\log_5 4 \\cdot \\log_6 5 \\cdot \\log_7 6 \\cdot \\log_8 7\\)",
    options: ["ა) 1", "ბ) 2", "გ) 3", "დ) 4", "ე) 5", "ვ) 6"],
    correct: 0,
    tags: ["logarithm", "product"]
  },
  {
    question: "\\textbf{14.} იპოვეთ წესიერი სამკუთხა პირამიდის გვერდითი ზედაპირის ფართობი, თუ მისი სიმაღლეა \\(4\\,\\text{სმ}\\), აპოთემა კი \\(8\\,\\text{სმ}\\).",
    options: ["ა) 144 სმ²", "ბ) 124 სმ²", "გ) 96 სმ²", "დ) 248 სმ²", "ე) 288 სმ²", "ვ) 324 სმ²"],
    correct: 2,
    tags: ["geometry", "surface-area", "pyramid"]
  },
  {
    question: "\\textbf{15.} პირამიდის ფუძეა რომბი გვერდით \\(6\\), მახვილი კუთხით \\(30^\\circ\\), და ფუძესთან მდებარე ყველა ორცახნაგა კუთხე ტოლია. \\nთუ პირამიდის გვერდითი ზედაპირის ფართობია 36, იპოვეთ ორცახნაგა კუთხის სიდიდე.",
    options: ["ა) 10°", "ბ) 20°", "გ) 30°", "დ) 40°", "ე) 45°", "ვ) 60°"],
    correct: 3,
    tags: ["geometry", "pyramid", "angle"]
  },
  {
    question: "\\textbf{16.} იპოვეთ ფესვთა ჯამი განტოლებისთვის: \\(199|x+6| - 199|x^2 + 4x - 12| = \\log_{199}(\\cot 225°)\\)",
    options: ["ა) -2", "ბ) -1", "გ) 0", "დ) 1", "ე) 3", "ვ) 19"],
    correct: 0,
    tags: ["absolute-value", "logarithm", "equation"]
  },
  {
    question: "\\textbf{17.} გამოთვალეთ \\(\\log_{10} 45\\), თუ \\(\\log_5 3 = a\\) და \\(\\log_5 2 = b\\).",
    options: [
      "ა) \\(\\frac{a + 1}{b - 1}\\)",
      "ბ) \\(\\frac{2a + 1}{b + 1}\\)",
      "გ) \\(\\frac{5a - b}{a - 1}\\)",
      "დ) \\(\\frac{a + b}{2b + 1}\\)",
      "ე) \\(\\frac{3a}{5b}\\)",
      "ვ) \\(\\frac{3a + 1}{5b}\\)"
    ],
    correct: 5,
    tags: ["logarithm", "expression"]
  },
  {
    question: "\\textbf{18.} ამოხსენით განტოლება: \\\\ \\(\\log_2(3x - 1) + \\log_{(3x - 1)^2} - \\log_2(3x - 1)^2 - \\log(3x - 1)^4 + 2 = 0\\)",
    options: [
      "ა) 1",
      "ბ) 1; \\(\\log_2 3\\)",
      "გ) 1; \\(\\log_3 2\\)",
      "დ) 1; \\(\\log_2 3\\); \\(\\log_3 4\\)",
      "ე) 1; \\(2 + \\log_2 3\\)",
      "ვ) 1; \\(\\log_3 2 + 1\\)"
    ],
    correct: 1,
    tags: ["logarithm", "equation"]
  },
  {
    question: "\\textbf{19.} პირამიდის ფუძეა \\(ABC\\) ტოლგვერდა სამკუთხედი გვერდით 2. თუ \\(ACD\\) წახნაგი მართობულია ფუძისადმი და \\(AD = CD = \\sqrt{6}\\), იპოვეთ \\(BD\\)-ის სიგრძე.",
    options: ["ა) \\(\\sqrt{6}\\)", "ბ) \\(\\sqrt{8}\\)", "გ) \\(\\sqrt{10}\\)", "დ) 3", "ე) 4", "ვ) \\(3\\sqrt{2}\\)"],
    correct: 2,
    tags: ["geometry", "pyramid", "distance"]
  },
  {
    question: "\\textbf{20.} წესიერი ოთხკუთხა პრიზმის გვერდითი წახნაგები კვადრატებია და მისი ზედაპირის ფართობი 144-ია. იპოვეთ მოცულობა იმ მრავალწახნაგას, რომლის წვეროები ჩახაზული წრეწირების ცენტრებშია.",
    options: ["ა) 12", "ბ) 16", "გ) \\(16\\sqrt{2}\\)", "დ) \\(18\\sqrt{2}\\)", "ე) 24", "ვ) 36"],
    correct: 1,
    tags: ["geometry", "volume", "prism"]
  },
  {
    question: "\\textbf{21.} ჩამოთვლილთაგან რომელი აკმაყოფილებს განტოლებას: \\(\\log_3(x^4) = \\log_\\frac{1}{3}(0.25)\\)?",
    options: ["ა) 2", "ბ) \\(\\sqrt{2}\\)", "გ) \\(2\\sqrt{2}\\)", "დ) \\(\\sqrt{\\frac{4}{3}}\\)", "ე) 4", "ვ) 6"],
    correct: 0,
    tags: ["logarithm", "equation"]
  },
  {
    question: "\\textbf{22.} ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს \\(x + y\\), თუ \\\\ \\(3^x \\cdot 2^y = 576\\), \\(\\log_{\\sqrt{2}}(y - x) = 4\\)?",
    options: ["ა) 8", "ბ) 6", "გ) 0", "დ) 1", "ე) 4", "ვ) 10"],
    correct: 1,
    tags: ["logarithm", "exponential", "systems"]
  },
  {
    question: "\\textbf{23.} რომელი აკმაყოფილებს განტოლებას: \\(2\\log_x 2 = \\frac{x}{\\log_4 x}\\)?",
    options: [
      "ა) \\(\\sqrt{2}\\)",
      "ბ) \\(4\\sqrt{2}\\)",
      "გ) \\(\\log_2 3\\)",
      "დ) \\(\\frac{1}{\\sqrt{2}}\\)",
      "ე) \\(2\\sqrt{2} - 1\\)",
      "ვ) \\(\\frac{2}{\\sqrt{2} + 1}\\)"
    ],
    correct: 0,
    tags: ["logarithm", "equation"]
  },
  {
    question: "\\textbf{24.} სამკუთხა პირამიდის ყველა გვერდითი წიბო უდრის \\(a\\)-ს და მის წვეროსთან მდებარე კუთხეებია 45°, 45° და 60°. იპოვეთ მოცულობა.",
    options: ["ა) \\(2a^3\\)", "ბ) \\(a^3\\)", "გ) \\(\\frac{1}{2}a^3\\)", "დ) \\(\\frac{1}{6}a^3\\)", "ე) \\(\\frac{3}{2}a^3\\)", "ვ) \\(\\frac{1}{12}a^3\\)"],
    correct: 5,
    tags: ["geometry", "volume", "pyramid"]
  },
  {
    question: "\\textbf{25.} მართი პარალელეპიპედის მოცულობაა 6 სმ³. იპოვეთ პირამიდის \\(AD_1CB_1\\) მოცულობა.",
    options: ["ა) 2 სმ³", "ბ) 3 სმ³", "გ) 4 სმ³", "დ) \\(\\frac{10}{3}\\) სმ³", "ე) \\(\\frac{11}{3}\\) სმ³", "ვ) \\(\\frac{13}{3}\\) სმ³"],
    correct: 1,
    tags: ["geometry", "volume", "pyramid"]
  }
];


  
  const form = document.getElementById("quizForm");
  
  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    fieldset.appendChild(legend);
  
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
  
    form.insertBefore(fieldset, form.querySelector("button"));
  });
  
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
      const explanation = document.createElement("div");
  
      const isCorrect = answer && parseInt(answer.value) === q.correct;
      if (isCorrect) score++;
  
      explanation.innerHTML = isCorrect
        ? `<span style="color: green;">Correct ✔️</span>`
        : `<span style="color: red;">Wrong ❌</span> – Correct answer: <strong>${q.options[q.correct]}</strong>`;
  
      q.tags.forEach(tag => {
        if (!tagStats[tag]) tagStats[tag] = { correct: 0, total: 0 };
        tagStats[tag].total++;
        if (isCorrect) tagStats[tag].correct++;
      });
  
      explanation.style.marginTop = "8px";
      fieldset.appendChild(explanation);
    });
  
    result.innerHTML = `<strong>Total Score: ${score} / ${quizData.length}</strong><br><h3>Score by Topic:</h3>`;
    for (let tag in tagStats) {
      const { correct, total } = tagStats[tag];
      const percentage = ((correct / total) * 100).toFixed(1);
      result.innerHTML += `<p>${tag}: ${correct} / ${total} (${percentage}%)</p>`;
    }
  
    form.querySelector("button").disabled = true;
  
    // Re-render math after result is shown
    if (window.MathJax) MathJax.typeset();
  });
  