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
    question: '\\( y = -x^3 \\) და \\( y = \\frac{1}{x^5} \\) ფუნქციათა გრაფიკების გადაკვეთის წერტილთა რაოდენობაა:',
    options: ['უამრავი', '4', '3', '2', '1', 'არცერთი','𝒚 = −𝒙^𝟑 და 𝒚 = 𝟏'],
    correct: '1',
    tags: ['ფუნქცია', 'გრაფიკი']
  },
  {
    question: 'ჩამოთვლილთაგან რომლის ტოლია \\( \\frac{\\sqrt{9}}{4} \\div \\frac{\\sqrt{81}}{6} \\) ?',
    options: [
      '\\( \\frac{\\sqrt{3}}{3} \\)',
      '\\( \\frac{\\sqrt{243}}{6 \\cdot 3} \\)',
      '\\( \\frac{\\sqrt{81}}{7 \\cdot 3} \\)',
      '\\( \\frac{\\sqrt{27}}{4 \\cdot 3} \\)',
      '\\( \\frac{\\sqrt{81}}{3 \\cdot 3} \\)',
      '\\( \\frac{\\sqrt{243}}{12 \\cdot 3} \\)'
    ],
    correct: '\\( \\frac{\\sqrt{3}}{3} \\)',
    tags: ['არითმეტიკა']
  },
  {
    question: 'მოცემული ფუნქციებიდან \\( f(x) = \\{x\\} - 1 \\), \\( g(x) = 2\\{x\\} + [x] \\) და \\( h(x) = \\left\\{\\frac{1}{2x}\\right\\} \\) რომელია პერიოდული?',
    options: [
      'მხოლოდ \\( f(x) \\)',
      'მხოლოდ \\( g(x) \\)',
      'მხოლოდ \\( h(x) \\)',
      '\\( f(x) \\) და \\( g(x) \\)',
      '\\( f(x) \\) და \\( h(x) \\)',
      '\\( g(x) \\) და \\( h(x) \\)'
    ],
    correct: '\\( f(x) \\) და \\( g(x) \\)',
    tags: ['ფუნქცია', 'პერიოდულობა']
  },
  {
    question: '\\( \\triangle ABC \\)-ში წერტილები \\( M \\) და \\( N \\) მდებარეობენ \\( BC \\) და \\( AC \\) გვერდებზე. თუ \\( BM:MC = 1:3 \\) და \\( MN \\parallel AB \\), იპოვეთ \\( \\triangle AMN \\) და \\( \\triangle ABC \\) ფართობთა შეფარდება.',
    options: ['\\( 1:4 \\)', '\\( 2:9 \\)', '\\( 3:13 \\)', '\\( 3:16 \\)', '\\( 5:18 \\)', '\\( 1:3 \\)'],
    correct: '\\( 1:4 \\)',
    tags: ['სამკუთხედი', 'ფართობი']
  },
  {
    question: 'სამკუთხედის ორი გვერდის სიგრძე 10 და 12. მესამე გვერდისადმი გავლებული მედიანის სიგრძე 5-ის ტოლია. იპოვეთ სამკუთხედის ფართობი.',
    options: ['60', '56', '30', '72', '36', '48'],
    correct: '48',
    tags: ['სამკუთხედი', 'მედიანა']
  },
  {
    question: 'იპოვეთ \\( \\sqrt{(x^2 + 6x + 9)^{24}} \\leq 4.9 \\) უტოლობის მთელ ამონახსნთა რაოდენობა.',
    options: ['4', '10', '9', '5', '11', '7'],
    correct: '5',
    tags: ['უწესობა']
  },
  {
    question: 'ჩამოთვლილთაგან რომლის ტოლია \\( \\frac{1}{2 - \\frac{\\sqrt{3}}{3}} - \\frac{6 + 3\\sqrt{3}}{3 \\cdot 5\\sqrt{9}} \\) ?',
    options: [
      '0.8',
      '\\( \\frac{0.8\\sqrt{3}}{3} \\)',
      '1',
      '\\( \\frac{0.4\\sqrt{9}}{3} \\)',
      '2',
      '\\( 0.8 - \\frac{0.4\\sqrt{3}}{3} \\)'
    ],
    correct: '1',
    tags: ['არითმეტიკა']
  },
  {
    question: 'იპოვეთ \\( \\left[ \\sqrt{\\frac{2023}{5}} \\right] \\cdot \\left\\{ -\\frac{199}{4} \\right\\} \\), სადაც \\([a]\\) მთელი ნაწილია, \\(\\{b\\}\\) წილადი ნაწილი.',
    options: ['2', '1', '\\( 1\\frac{1}{5} \\)', '\\( -1\\frac{1}{4} \\)', '\\( \\frac{3}{5} \\)', '\\( 3\\frac{1}{4} \\)'],
    correct: '1',
    tags: ['ნამრავფუნქციური']
  },
  {
    question: 'ტრაპეციაში \\( BC \\) და \\( AD \\) — ფუძეებია. \\( AC \\) და \\( BD \\) დიაგონალები კვეთს წერტილში \\( K \\). თუ \\( \\triangle ABK \\) ფართობი წარმოადგენს ტრაპეციის ფართობის \\( \\frac{3}{16} \\)-ს, იპოვეთ \\( BC : AD \\).',
    options: ['1:2', '2:3', '1:3', '3:5', '2:5', '3:4'],
    correct: '1:3',
    tags: ['ტრაპეცია']
  },
  {
    question: 'პარალელოგრამში წერტილი \\( M \\) მდებარეობს გვერდზე \\( BC \\). თუ \\( BM:MC = 2:5 \\), იპოვეთ \\( \\triangle ABM \\) და \\( \\triangle AMD \\) სამკუთხედების ფართობთა შეფარდება.',
    options: ['1:3', '3:11', '2:5', '2:7', '1:4', '1:6'],
    correct: '2:7',
    tags: ['პარალელოგრამი']
  },
  {
    question: 'იპოვეთ \\( x^2 + 4x - |x + 2| - 2 > 0 \\) უტოლობის ამონახსენი.',
    options: [
      '\\( (-3;2) \\)',
      '\\( (-\\infty;-1) \\cup (5;\\infty) \\)',
      '\\( (-1;4) \\)',
      '\\( (-\\infty;-2) \\cup (3;\\infty) \\)',
      '\\( (-\\infty;-5) \\cup (1;\\infty) \\)',
      '\\( \\emptyset \\)'
    ],
    correct: '\\( (-\\infty;-2) \\cup (3;\\infty) \\)',
    tags: ['უწესობა']
  },
  {
    question: 'იპოვეთ \\( x \\)-ის აბსცისა, რომლისთვისაც \\( y = x^2 + 2x \\), სადაც \\( x \\leq -1 \\), შექცეული ფუნქციის გრაფიკი კვეთს \\( y = -4 \\)-ს.',
    options: ['4', '-12', '8', '-6', '16', '-81'],
    correct: '-6',
    tags: ['ფუნქცია', 'ინვერსია']
  },
  {
    question: 'იპოვეთ \\( \\left| \\frac{2x-1}{x+1} \\right| \\geq 3 \\) უტოლობის მთელი ამონახსნების ჯამი.',
    options: ['0', '-10', '7', '-9', '11', '-6'],
    correct: '-9',
    tags: ['მოდული', 'უწესობა']
  },
  {
    question: 'ოთხკუთხედში \\( O \\) არის დიაგონალების გადაკვეთის წერტილი. \\( \\triangle BCD \\) ფართობი წარმოადგენს ოთხკუთხედის ფართობის \\( \\frac{5}{9} \\)-ს. იპოვეთ \\( AO:OC \\).',
    options: ['4:5', '3:4', '5:7', '3:5', '2:7', '2:3'],
    correct: '3:5',
    tags: ['ოთხკუთხედი']
  },
  {
    question: 'ტრაპეციაში დიაგონალების გადაკვეთის წერტილზე გავლებულია ფუძეთა პარალელური წრფე, რომელიც კვეთს ფერდებს წერტილებში \\( E \\) და \\( F \\). თუ \\( BC:AD = 1:2 \\), იპოვეთ \\( EBFC : AEFD \\) ფართობთა შეფარდება.',
    options: ['1:4', '5:16', '2:9', '3:16', '7:20', '3:16'],
    correct: '3:16',
    tags: ['ტრაპეცია']
  },
  {
    question: 'იპოვეთ \\( y = x^3 + 3x^2 + 3x - 1 \\) ფუნქციის შექცეული ფუნქცია.',
    options: [
      '\\( y = -\\sqrt[3]{x + 2} + 1 \\)',
      '\\( y = \\sqrt[3]{x - 2} + 1 \\)',
      '\\( y = -\\sqrt[3]{x + 1} - 2 \\)',
      '\\( y = \\sqrt[3]{x + 2} - 1 \\)',
      '\\( y = -\\sqrt[3]{x - 2} + 1 \\)',
      '\\( y = \\sqrt[3]{x + 1} - 2 \\)'
    ],
    correct: '\\( y = \\sqrt[3]{x + 2} - 1 \\)',
    tags: ['ინვერსია']
  },
  {
    question: 'თუ \\( f(x) = \\frac{5x - 5}{2x + 5} \\), რომელია ჭეშმარიტი?\nI. სიმეტრიის ცენტრია \\( K(-2.5; 2.5) \\)\nII. \\( f(x) \\) ზრდადია\nIII. \\( E(f) = \\mathbb{R} \\)\nIV. გრაფიკს არ კვეთს \\( y = 2.5 \\)',
    options: [
      'I და II',
      'II და III',
      'I და IV',
      'II და IV',
      'III და VI',
      'I და III'
    ],
    correct: 'I და IV',
    tags: ['ფუნქცია']
  },
  {
    question: 'პარალელოგრამში \\( AC = 39 \\), \\( BM = 30 \\), \\( BC = 26 \\), ხოლო \\( M \\) — წერტილია \\( AD \\)-ს შუაში. იპოვეთ პარალელოგრამის ფართობი.',
    options: ['480', '720', '640', '780', '900', '420'],
    correct: '780',
    tags: ['პარალელოგრამი']
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
  