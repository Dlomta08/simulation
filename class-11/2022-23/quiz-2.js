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
    id: 1,
    question: 'რამდენი მთელი რიცხვი აკმაყოფილებს $$\\log_3(x - 3) \\leq 2$$ უტოლობას?',
    options: ['$3$', '$4$', '$6$', '$5$', '$9$', '$12$'],
    correct: 'ბ',
    tags: ['logarithms', 'inequality', 'integer']
  },
  {
    id: 2,
    question: 'ამოხსენით $$(\\sin\\frac{\\pi}{9})|x| > (\\sin\\frac{\\pi}{9})^2$$ უტოლობა.',
    options: ['$ (1; ∞) $', '$ (−2; 2) $', '$ (2; +∞) $', '$ (−1; 1) $', '$ (−\\frac{\\pi}{9}; \\frac{\\pi}{9}) $', '$ (−\\pi; \\pi) $'],
    correct: 'ა',
    tags: ['inequality', 'trigonometry']
  },
  {
    id: 3,
    question: 'ამოხსენით $$\\log_3^5(x + 7) < \\log_{\\sqrt{3}}^5 3^2$$ უტოლობა.',
    options: ['$ (−7; 2) $', '$ (−7; 0) $', '$ (−7; 1) $', '$ (0; +∞) $', '$ (1; +∞) $', '$ (1; 7) $'],
    correct: 'გ',
    tags: ['logarithms', 'inequality']
  },
  {
    id: 4,
    question: 'ბირთვის ზედაპირზე მოცემულია სამი წერტილი. მათ შორის მანძილებია 6სმ, 8სმ და 10სმ. ბირთვის რადიუსი 13სმ-ია. იპოვეთ მანძილი ბირთვის ცენტრიდან ამ სამ წერტილზე გამავალ სიბრტყემდე.',
    options: ['$4$', '$12$', '$9$', '$6$', '$8$', '$7$'],
    correct: 'დ',
    tags: ['geometry', '3D']
  },
  {
    id: 5,
    question: 'წაკვეთილი კონუსის ფუძის რადიუსებია 3სმ და 4 სმ, ხოლო მსახველი 7სმ. იპოვეთ ამ კონუსში ჩახაზული სფეროს რადიუსი.',
    options: ['$5$', '$2$', '$2.5$', '$2\\sqrt{3}$', '$3\\sqrt{2}$', '$2\\sqrt{7}$'],
    correct: 'გ',
    tags: ['geometry', 'cone']
  },
  {
    id: 6,
    question: 'ამოხსენით $$\\log_a(2x − 1) > \\log_a(x + 7)$$ უტოლობა, თუ $$x_0 = 5$$ ეკუთვნის ამ უტოლობის ამონახსნთა სიმრავლეს.',
    options: ['$ (8; +∞) $', '$ (0.5; 8) $', '$ (−∞; 8) $', '$ (1.5; 7) $', '$ (2; 8) $', '$ (\\frac{1}{2}; +∞) $'],
    correct: 'ვ',
    tags: ['logarithms', 'parameter']
  },
  {
    id: 7,
    question: 'ამოხსენით $$\\log_x(6 − x) \\geq 2$$ უტოლობა.',
    options: ['$ (0; 6) $', '$ (0; 5) $', '$ (1; 2] $', '$ (0; 3] $', '$ (1; 6) $', '$ (1; 3) $'],
    correct: 'გ',
    tags: ['logarithms', 'inequality']
  },
  {
    id: 8,
    question: 'იპოვეთ $$\\sqrt{2x + 3} \\geq x$$ უტოლობის მთელ ამონახსნთა ჯამი.',
    options: ['$5$', '$4$', '$3$', '$2$', '$1$', '$0$'],
    correct: 'ბ',
    tags: ['inequality', 'roots', 'integer']
  },
  {
    id: 9,
    question: 'ცილინდრის სიმაღლე 6სმ, ფუძის რადიუსია 5სმ. მოცემული 10 სმ სიგრძის მონაკვეთის ბოლოები ორივე ფუძის წრეწირებზე ძევს. იპოვეთ უმოკლესი მანძილი ამ მონაკვეთიდან ღერძამდე.',
    options: ['$1$', '$4$', '$6$', '$5$', '$3$', '$2$'],
    correct: 'ვ',
    tags: ['cylinder', '3D geometry']
  },
  {
    id: 10,
    question: 'კონუსის წვეროდან ფუძისადმი 45°-იანი კუთხით გავლებულია სიბრტყე, რომელიც კვეთს ფუძის წრეწირის მეოთხედს. კონუსის სიმაღლე უდრის 10 სმ-ს. იპოვეთ კვეთის ფართობი.',
    options: ['$100$', '$120$', '$96$', '$80\\sqrt{3}$', '$100\\sqrt{2}$', '$96\\sqrt{2}$'],
    correct: 'ვ',
    tags: ['cone', 'section', 'geometry']
  },
  {
    id: 11,
    question: 'ამოხსენით $$\\sqrt{2x − 8} \\geq \\cos x − 2$$ უტოლობა.',
    options: ['$ (3; 8) $', '$ [3; +∞) $', '$ (3; \\frac{8\\pi}{3}) $', '$ (\\pi; 2\\pi) $', '$ \\mathbb{R} $', '$ \\emptyset $'],
    correct: 'ბ',
    tags: ['inequality', 'roots', 'trig']
  },
  {
    id: 12,
    question: 'ჩამოთვლილთაგან რისი ტოლია $$a$$, თუ $$f(x) = \\frac{\\log_{x+a}(1−9x)}{x+15}$$ ფუნქციის განსაზღვრის არეა $$(n; p)$$ სახის ინტერვალია ($$n < p$$)?',
    options: ['$−7$', '$−5$', '$5$', '$9$', '$12$', '$18$'],
    correct: 'ბ',
    tags: ['function', 'domain', 'logarithms']
  },
  {
    id: 13,
    question: 'რამდენი მთელი რიცხვი აკმაყოფილებს $$(x^2 − 4x + 3)\\sqrt{9x − 14} − x^2 \\geq 0$$ უტოლობას?',
    options: ['$2$', '$3$', '$4$', '$5$', '$6$', '$7$'],
    correct: 'ბ',
    tags: ['inequality', 'roots']
  },
  {
    id: 14,
    question: 'წესიერ სამკუთა პრიზმაში, რომლის მოცულობა 9-ის ტოლია, ჩახაზულია ცილინდრი. ჩამოთვლილთაგან რომელ შუალედს ეკუთვნის ცილინდრის მოცულობა?',
    options: ['$ (2; 3) $', '$ (3; 4) $', '$ (4; 5) $', '$ (5; 6) $', '$ (6; 7) $', '$ (7; 8) $'],
    correct: 'ბ',
    tags: ['geometry', 'cylinder', 'volume']
  },
  {
    id: 15,
    question: 'მართკუთხა პარალელეპიპედის წიბოებია 4სმ, 6სმ და 12სმ. იპოვეთ შემოხაზული სფეროს რადიუსი.',
    options: ['$2$', '$4$', '$5$', '$6$', '$7$', '$9$'],
    correct: 'გ',
    tags: ['geometry', '3D', 'sphere']
  },
  {
    id: 16,
    question: 'ამოხსენით $$\\log_4(x + 11) < 7 − x$$ უტოლობა.',
    options: ['$ (−11; 7) $', '$ (−11; 5) $', '$ (0; \\log_4 11) $', '$ (−11; \\log_4 11) $', '$ (4; 7) $', '$ (−7; 4) $'],
    correct: 'დ',
    tags: ['logarithms', 'inequality']
  },
  {
    id: 17,
    question: 'რამდენი მთელი ამონახსნი აქვს $$3x + 12 \\cdot 3^\\sqrt{x} \\geq 4x \\cdot 3^\\sqrt{x} + 9$$ უტოლობას?',
    options: ['$0$', '$2$', '$4$', '$8$', '$15$', '$32$'],
    correct: 'ბ',
    tags: ['inequality', 'exponents']
  },
  {
    id: 18,
    question: 'ამოხსენით $$\\log_7(\\sqrt{x} − 2 + 7) \\cdot \\log_3(x^2 + x + 3) \\geq 2$$ უტოლობა.',
    options: ['$[2; 7]$', '$[2; 2\\log_3 7]$', '$[2; +∞)$', '$[2; 7\\log_7 3]$', '$[2; 4\\log_7 3]$', '$[2; 49\\log_7 3]$'],
    correct: 'ბ',
    tags: ['logarithms', 'inequality']
  },
  {
    id: 19,
    question: 'პირამიდის თითოეული გვერდითი წიბო 6-ის, ხოლო სიმაღლე 3-ის ტოლია. ჩამოთვლილთაგან რისია ტოლი პირამიდაზე შემოხაზული ბირთვის მოცულობა?',
    options: ['$124\\pi$', '$96\\pi$', '$288\\pi$', '$164\\pi$', '$216\\pi$', '$დადგენა შეუძლებელია$'],
    correct: 'ვ',
    tags: ['geometry', 'pyramid', 'sphere']
  },
  {
    id: 20,
    question: 'კონუსში, რომლის ფუძის რადიუსია 3, ხოლო სიმაღლე 4, ჩახაზულია სფერო. იპოვეთ სფეროს რადიუსი.',
    options: ['$1$', '$1.5$', '$2$', '$2.5$', '$3$', '$\\sqrt{2}$'],
    correct: 'ბ',
    tags: ['geometry', 'cone', 'sphere']
  },
  {
    id: 21,
    question: '$$A = \\{\\log_2 2; \\log_2 4; \\log_2 8; \\log_2 16; \\log_2 32; \\log_2 64\\}$$ სიმრავლის ყოველი ელემენტი множается $$B = \\{\\log_3 9; \\log_3 27; \\log_3 81\\}$$ სიმრავლის ყოველ ელემენტზე. მიღებულ 18 რიცხვს თითოეულს წინ ნებისმიერად ეწერება პლიუსი ან მინუსი და მიღებული რიცხვები იკრიბება. იპოვეთ ჯამის მოდულის უმცირესი და უდიდესი მნიშვნელობა.',
    options: ['$0 და 189$', '$0 და 199$', '$2 და 378$', '$1 და 189$', '$1 და 212$', '$2 და 211$'],
    correct: 'ა',
    tags: ['logarithms', 'set', 'sum']
  },
  {
    id: 22,
    question: '$$a$$ პარამეტრის რა მნიშვნელობისათვის იქნება $${\\log_3(x + 5) + y^2 = 2, \\log_5(2x − 3) − y^4 = a}$$ სისტემის $(x; y)$ ამონახსნთა რაოდენობა კენტი?',
    options: ['$−2$', '$0$', '$1$', '$4$', '$25$', '$ასეთი a არ არსებობს$'],
    correct: 'გ',
    tags: ['system', 'parameters']
  },
  {
    id: 23,
    question: 'საკოორდინატო სიბრტყეზე დაშტრიხეს $$\\log_{0.8^{−|x|}}(x^2 + 1) \\geq \\log_{0.8^{−|x|}}(9 − 2x), y \\leq 5x, y^2 \\leq 16$$ სისტემის ამონახსნთა სიმრავლე. იპოვეთ დაშტრიხული არის ფართობი.',
    options: ['$1.9$', '$3.5$', '$4.8$', '$6.4$', '$8.5$', '$19.9$'],
    correct: 'ბ',
    tags: ['system', 'area']
  },
  {
    id: 24,
    question: 'მართკუთხა ტრაპეცია, რომლის ფუძეებია 10სმ და 8სმ, ბრუნავს მცირე ფუძის გარშემო. იპოვეთ ბრუნვით მიღებული სხეულის მოცულობა, თუ ტრაპეციის ფართობია 36სმ².',
    options: ['$\\frac{448\\pi}{3}$', '$\\frac{640\\pi}{3}$', '$\\frac{224\\pi}{3}$', '$124\\pi$', '$144\\pi$', '$164\\pi$'],
    correct: 'გ',
    tags: ['volume', 'solid of revolution']
  },
  {
    id: 25,
    question: 'ABCD წესიერ ტეტრაედზე შემოხაზულია სფერო. ყველა წახნაგზე როგორც ფუძეზე აგებულია წესიერი პირამიდები, რომელთა წვეროები იმავე სფეროზეა. იპოვეთ კუთხე ABC₁ და ACD₁ სიბრტყეებს შორის.',
    options: ['$30°$', '$45°$', '$60°$', '$90°$', '$120°$', '$150°$'],
    correct: 'დ',
    tags: ['geometry', 'tetrahedron', 'angles']
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
  