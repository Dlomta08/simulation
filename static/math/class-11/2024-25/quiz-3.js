const quizData = [
  // 1
  {
    question: "$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1 + 2x} - 1}{5x} = $",
    options: ["$0{,}75$", "$0{,}4$", "$0{,}13$", "$0{,}25$", "$0{,}2$", "$0{,}1$"],
    correct: 4,
    tags: []
  },
  // 2
  {
    question: "თუ $A(3; 5)$, $B(−1; 8)$, $C(7; 5)$, იპოვეთ $ABC$ სამკუთხედის $C$ წვეროდან გავლებული სიმაღლის სიგრძე.",
    options: ["$1{,}8$", "$2$", "$2{,}2$", "$2{,}4$", "$\\sqrt{10}$", "$2\\sqrt{3}$"],
    correct: 3,
    tags: []
  },
  // 3
  {
    question: "თუ $f(x) = \\frac{18}{\\sqrt[3]{x}}$, რისი ტოლია $f'(x)$?",
    options: [
      "$-\\frac{6}{x \\sqrt[3]{x}}$",
      "$\\frac{6}{x \\sqrt[3]{x}}$",
      "$\\frac{18}{x \\sqrt[3]{x}}$",
      "$-\\frac{18}{x \\sqrt[3]{x}}$",
      "$\\frac{6}{\\sqrt[3]{x}}$",
      "$-\\frac{18}{\\sqrt[3]{x}}$"
    ],
    correct: 0,
    tags: []
  },
  // 4
  {
    question: "$O$ ცენტრის მქონე სფეროს რადიუსია $6$. ეს სფერო ეხება სამკუთხედის სამივე გვერდს. ამ სამკუთხედის გვერდების სიგრძეებია $15$, $15$ და $24$. იპოვეთ მანძილი $O$ წერტილიდან სამკუთხედის სიბრტყემდე.",
    options: ["$2\\sqrt{3}$", "$4$", "$3\\sqrt{2}$", "$2\\sqrt{5}$", "$5$", "$6$"],
    correct: 3,
    tags: []
  },
  // 5
  {
    question: "წაკვეთილი კონუსის ფუძეების რადიუსების შეფარდებაა $2:3$. ამ წაკვეთილ კონუსში ჩაიხაზება სფერო (სფერო ეხება წაკვეთილი კონუსის ორივე ფუძესა და გვერდით ზედაპირს). იპოვეთ სფეროს ზედაპირის ფართობის შეფარდება ამ წაკვეთილი კონუსის გვერდითი ზედაპირის ფართობთან.",
    options: ["$0{,}64$", "$0{,}3$", "$2{,}4$", "$\\sqrt{0{,}5}$", "$0{,}96$", "$\\sqrt{2}$"],
    correct: 4,
    tags: []
  },
    // 6
  {
    question: "$f(x) = \\frac{\\arccos x}{x^2 − 1}$, იპოვეთ $f'(0)$",
    options: ["$-1$", "$0$", "$1$", "$2$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{2}$"],
    correct: 2,
    tags: []
  },
  // 7
  {
    question: "თუ $f(x) = e^x \\cos x$, რისი ტოლია $f'(x)$?",
    options: [
      "$e^x(\\cos x − \\sin x)$",
      "$e^x(\\cos x + \\sin x)$",
      "$e^x(2\\cos x + \\sin x)$",
      "$e^x(\\sin x − \\cos x)$",
      "$e^x$",
      "$e^x \\sin x$"
    ],
    correct: 0,
    tags: []
  },
  // 8
  {
    warning: "ორი პასუხია ჩათვლილი",
    question: "წესიერი სამკუთხა პრიზმის გვერდითი ზედაპირის ფართობია $S$. იპოვეთ ამ პრიზმაზე შემოხაზული ცილინდრის ღერძული კვეთის ფართობი.",
    options: [
      "$\\frac{4}{3}S$",
      "$\\sqrt{2}S$",
      "$\\frac{2\\sqrt{2}}{9}S$",
      "$\\frac{2}{3\\sqrt{3}}S$",
      "$\\sqrt{3}S$",
      "$\\frac{2\\sqrt{3}}{9}S$"
    ],
    correct: [3,5],
    tags: []
  },
  // 9
  {
    question: "კონუსში მოიძებნება სამი, წყვილ-წყვილად ურთიერთმართობული მსახველი. რისი ტოლია კონუსის ფუძის ფართობის შეფარდება გვერდითი ზედაპირის ფართობასთან?",
    options: [
      "$0{,}5$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{6}}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "შეუძლებელია დადგენა"
    ],
    correct: 2,
    tags: []
  },
  // 10
  {
    question: "$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{\\cos x} − 1}{x} = $",
    options: ["$-1$", "$-0{,}5$", "$0{,}5$", "$0$", "$1$", "$1{,}5$"],
    correct: 3,
    tags: []
  },
  // 11
  {
    question: "იპოვეთ $\\lim\\limits_{x \\to 0} \\left( \\frac{1}{x^2} − \\frac{\\cot x}{x} \\right)$",
    options: ["$\\frac{1}{3}$", "$\\frac{3}{4}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{2}{7}$", "$1$"],
    correct: 0,
    tags: []
  },
  // 12
  {
    question: "$y = f(x)$ ფუნქციის განსაზღვრის არეა $\\mathbb{R}$ და იგი უწყვეტია ნებისმიერ წერტილში. ნებისმიერი ნატურალური $n$-ისთვის სრულდება: $f\\left(\\frac{1}{n}\\right) = \\frac{5n^2 + 1}{2n^2 − 2n + 1}$. რისი ტოლია $f(0)$?",
    options: ["$0$", "$0{,}5$", "$1$", "$2$", "$2{,}5$", "$5$"],
    correct: 4,
    tags: []
  },
  // 13
  {
    question: "$\\lim\\limits_{n \\to \\infty} \\left(\\frac{n+5}{n+4}\\right)^{2n−1} = $",
    options: ["$e$", "$e^2$", "$e^3$", "$e^4$", "$0$", "$1$"],
    correct: 1,
    tags: []
  },
  // 14
  {
    question: "$y = f(x)$ ფუნქციის განსაზღვრის არეა $\\mathbb{R}$ და ეს ფუნქცია დიფერენცირებადია (წარმოებადია) განსაზღვრის არეში ნებისმიერ წერტილში. ცნობილია, რომ ნებისმიერი $x$-თვის $f^3(x) + x^2f(x) + 1 = x$. იპოვეთ $f'(1)$",
    options: ["$0$", "$-1{,}4$", "$1$", "$-2$", "$-1$", "$2{,}3$"],
    correct: 2,
    tags: []
  },
  // 15
  {
    question: "$\\lim\\limits_{n \\to \\infty} \\left(n − \\sqrt{n^2 + n + 199}\\right) = $",
    options: ["$-0{,}5$", "$0$", "$-99{,}5$", "$1$", "$99{,}5$", "$199$"],
    correct: 0,
    tags: []
  },
  // 16
  {
    question: "ტოლფერდა ტრაპეცია, რომლის ფუძეებია $4$ და $6$, ხოლო მახვილი კუთხეა $60^{\\circ}$, ბრუნავს დიდი ფუძის შემცველი წრფის გარშემო. იპოვეთ მიღებული სხეულის მოცულობა.",
    options: ["$16\\pi$", "$10\\pi$", "$12\\pi$", "$18\\pi$", "$20\\pi$", "$14\\pi$"],
    correct: 5,
    tags: []
  },
  // 17
  {
    question: "თუ $\\lim\\limits_{x \\to \\sqrt{3}} \\frac{3\\arctan x − \\pi}{x − \\sqrt{3}} = \\frac{m}{n}$, სადაც $m$ და $n$ ურთიერთმარტივი ნატურალური რიცხვებია, მაშინ $m + n$",
    options: ["$3$", "$9$", "$100$", "$39$", "$199$", "$7$"],
    correct: 5,
    tags: []
  },
  // 18
  {
    question: "მოცემულია სამი წინადადება: I. $\\lim\\limits_{n \\to \\infty} \\frac{n^{199199}}{1{,}0001^n} = 0$. II. თუ $x_n = \\sin(a_n)$ მიმდევრობა კრებადია, მაშინ აუცილებლად $a_n$ მიმდევრობაც კრებადია. III. თუ $a_n$ მიმდევრობა კრებადია, მაშინ აუცილებლად $x_n = \\sin(a_n)$ მიმდევრობაც კრებადია. ამ სამი წინადადებიდან, რომელია ჭეშმარიტი?",
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ III",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "მხოლოდ II და III"
    ],
    correct: 5,
    tags: []
  },
  // 19
  {
    question: "ცილინდრის ორი კვეთა, რომელიც ერთი და იგივე მსახველზე გადის, ერთმანეთთან ადგენს მართ კუთხეს. ცილინდრის ღერძიდან ამ სიბრტყეებამდე მანძილებია $2{,}5$ და $6$. იპოვეთ ცილინდრის გვერდითი ზედაპირის ფართობი, თუ მისი სიმაღლე $4$-ის ტოლია.",
    options: ["$18\\pi$", "$52\\pi$", "$48\\pi$", "$\\frac{144}{3}\\pi$", "$64\\pi$", "$100\\pi$"],
    correct: 1,
    tags: []
  },
  // 20
  {
    question: "ტოლფერდა სამკუთხედის კუთხეა $120^{\\circ}$. ეს სამკუთხედი ბრუნავს ფერდის შემცველი წრფის გარშემო. იპოვეთ მიღებული სხეულის ზედაპირის ფართობის შეფარდება სამკუთხედის ფართობთან.",
    options: [
      "$(2\\sqrt{5} − 3)\\pi$",
      "$(2\\sqrt{3} + 2)\\pi$",
      "$\\sqrt{5}\\pi$",
      "$(8\\sqrt{3} + 6)\\pi$",
      "$\\sqrt{3}\\pi$",
      "$(\\sqrt{3} + 1)\\pi$"
    ],
    correct: 1,
    tags: []
  },
  // 21
  {
    question: "$f(x) = \\begin{cases} ax + b, & x < 1 \\\\ x^4 + x + 1, & x \\geq 1 \\end{cases}$ — ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $ab$, თუ $y=f(x)$ დიფერენცირებადია (წარმოებადია) განსაზღვრის არის ნებისმიერ წერტილში?",
    options: ["$8$", "$-5$", "$-10$", "$-15$", "$10$", "ყველა წინა პასუხი შესაძლებელია"],
    correct: 2,
    tags: []
  },
  // 22
  {
    question: "ოთხკუთხა პირამიდის ფუძეშია რომბი, რომლის გვერდია $7$ სმ, ხოლო ამ რომბის სიმაღლეა $4$ სმ. ამ პირამიდის თითოეული აპოთემა ფუძის სიბრტყესთან ადგენს $\\alpha$ კუთხეს. $\\sin\\alpha = \\frac{3}{5}$. პირამიდაში ჩახაზული სფეროს (ეხება ხუთივე წახნაგს) ზედაპირის ფართობია $\\frac{a}{b}\\pi$ სმ², სადაც $a$ და $b$ ურთიერთმარტივი ნატურალური რიცხვებია. იპოვეთ $a^2 + b^2$.",
    options: ["$96$", "$112$", "$170$", "$284$", "$136$", "$337$"],
    correct: 5,
    tags: []
  },
  // 23
  {
    question: "$f(x) = \\sqrt[3]{x}\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$; $g(x) = x\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$; $h(x) = x^2\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$. $f(0) = g(0) = h(0) = 0$. ამ სამი ფუნქციიდან რომელია დიფერენცირებადი (წარმოებადი) $x = 0$ წერტილში?",
    options: [
      "მხოლოდ $f(x)$",
      "მხოლოდ $g(x)$",
      "მხოლოდ $h(x)$",
      "მხოლოდ $f(x)$ და $g(x)$",
      "მხოლოდ $f(x)$ და $h(x)$",
      "სამივე"
    ],
    correct: 2,
    tags: []
  },
  // 24
  {
    question: "$a_n$ მიმდევრობა მოცემულია რეკურენტულად: $a_1 = 1$, $a_2 = \\sqrt[7]{2}$ და $a_n = a_{n−1} \\cdot a_{n−2}^2$, ნებისმიერი $n \\geq 3$ ნატურალური $n$-ისთვის. იპოვეთ უმცირესი ნატურალური $k > 1$ რიცხვი, რომლისთვისაც $a_1a_2 \\cdots a_k$ ნამრავლი იქნება მთელი რიცხვი.",
    options: ["$4$", "$6$", "$8$", "$10$", "$12$", "$14$"],
    correct: 1,
    tags: []
  },
  // 25
  {
    question: "$a$ წრფის განტოლებაა $x − y = 0$, $b$ წრფის განტოლებაა $3x + 5y − 16 = 0$. $c$ წრფე არის $b$ წრფის სიმეტრიული $a$ წრფის მიმართ. ქვემოთჩამოთვლილთაგან, რომელია $c$ წრფის განტოლება?",
    options: [
      "$2x + 5y − 14 = 0$",
      "$5x + 3y − 16 = 0$",
      "$5x + 2y − 14 = 0$",
      "$3x + 5y − 16 = 0$",
      "$x + 2y − 6 = 0$",
      "$2x + y − 6 = 0$"
    ],
    correct: 1,
    tags: []
  }
];
