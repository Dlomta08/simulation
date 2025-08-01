const quizData = [
  {
    question: "$3x^2 − 7x + 5 = 0$ განტოლების ფესვების ჯამია:",
    options: ["$7$", "$5$", "$\\frac{5}{3}$", "$-2$", "$-11$", "არც ერთი პასუხი არ არის სწორი"],
    correct: 5,
    tags: []
  },
  {
    question: "$x^2 − px + 45 = 0$ განტოლების ერთი ფესვი $9$-ის ტოლია. იპოვეთ მეორე ფესვისა და $p$ კოეფიციენტის ჯამი",
    options: ["$14$", "$17$", "$19$", "$21$", "$23$", "$25$"],
    correct: 2,
    tags: []
  },
  {
    question: "იპოვეთ $\\frac{7a + 1}{7a^2 − 6a − 1}$ გამოსახულების მნიშვნელობა, თუ $a = \\sqrt{5} + 1$",
    options: ["$\\frac{1}{2}$", "$\\frac{1}{\\sqrt{5}}$", "$\\frac{2}{3}$", "$\\sqrt{5} - 4$", "$\\frac{5}{6}$", "$\\frac{\\sqrt{5}}{3}$"],
    correct: 1,
    tags: []
  },
  {
    question: "იპოვეთ $\\frac{10}{x^2 − 4x − 5} + \\frac{x}{x + 1} = \\frac{3}{x − 5}$ განტოლების ამონახსენთა სხვაობის მოდული.",
    options: ["$6$", "$7$", "$8$", "$9$", "$8{,}5$", "$7{,}5$"],
    correct: 0,
    tags: []
  },
  {
    question: "$ax^2 + bx + c = 0$ მთელკოეფიციენტებიანი განტოლების ფესვებია $-0{,}3$ და $0{,}5$. ჩამოთვლილთაგან, რის ტოლი შეიძლება იყოს $a + b + c$?",
    options: ["$7$", "$9$", "$11$", "$13$", "$15$", "$17$"],
    correct: 3,
    tags: []
  },
  {
    question: "რამდენი ამონახსენი აქვს $x^4 + 5x^2 − 18 = 0$ განტოლებას?",
    options: ["$1$", "$2$", "$3$", "$4$", "არც ერთი", "უამრავი"],
    correct: 1,
    tags: []
  },
  {
    // ყველა პასუხი ჩათვლილია
    warning: "ყველა პასუხი ჩათვლილია",
    question: "ცნობილია, რომ კვადრატული განტოლების ფესვების ჯამი ტოლია $7$-ის, თან ეს ფესვები ურთიერთშებრუნებული რიცხვებია. ჩამოთვლილთაგან, რის ტოლი შეიძლება იყოს კოეფიციენტების ჯამი?",
    options: ["$5$", "$7$", "$9$", "$-3$", "$-5$", "$-7$"],
    correct: [0,1,2,3,4,5],
    tags: []
  },
  {
    question: "$x^2 − 10x + c = 0$ განტოლების ერთი ფესვი $8$-ით ნაკლებია მეორეზე. იპოვეთ ფესვებისა და $c$ კოეფიციენტის ნამრავლი.",
    options: ["$61$", "$65$", "$69$", "$73$", "$77$", "$81$"],
    correct: 5,
    tags: []
  },
  {
    question: "$x^2 − 8(\\sqrt{x})^2 − 9 = 0$ განტოლების ფესვებია:",
    options: ["$9, -1$", "$1, -9$", "$5, 3$", "$1$", "$9$", "$6, 2$"],
    correct: 4,
    tags: []
  },
  {
    question: "$\\frac{3x^2 − 9x}{2} − \\frac{6}{x^2 − 3x} = 0$ განტოლების ნატურალურ ამონახსენთა ნამრავლი:",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: []
  },
  {
    question: "თბომავალმა $1$ საათის განმავლობაში $16$კმ ტბაზე გაიარა ხოლო $18$კმ - მდინარეზე, რომელიც სათავეს ამ ტბიდან იღებს. იპოვეთ თბომავლის სიჩქარე მდგარ წყალში, თუმდინარის სიჩქარე $4$კმ/სთ-ია.",
    options: ["$28$კმ/სთ", "$30$კმ/სთ", "$32$კმ/სთ", "$34$კმ/სთ", "$36$კმ/სთ", "$40$კმ/სთ"],
    correct: 2,
    tags: []
  },
  {
    question: "სპილენძისა და ცინკის შენადნობს, რომელიც $10$კგ ცინკს შეიცავს, დაუმატეს $20$კგ ცინკი. შედეგად შენადნობში სპილენძის შემცველობა შემცირდა $25\\%$-ით. იპოვეთ შენადნობისთავდაპირველი მასა, თუ ცნობლია, რომ იგი არ იყო $30$კგ- ზე ნაკლები.",
    options: ["$32$კგ", "$34$კგ", "$36$კგ", "$38$კგ", "$40$კგ", "$42$კგ"],
    correct: 4,
    tags: []
  },
  {
    question: "იპოვეთ $x^2 − ax + a − 3 = 0$ განტოლების ფესვების კვადრატების ჯამის უმცირესი მნიშვნელობა.",
    options: ["$5$", "$6$", "$7$", "$1$", "$2$", "$3$"],
    correct: 0,
    tags: []
  },
  {
    question: "იპოვეთ $(\\frac{a + 1}{\\sqrt{a}} + \\frac{1}{a − \\sqrt{a}} − \\frac{a}{\\sqrt{a} + 1}) \\cdot \\frac{1 − a}{1 + a} + 2a$ გამოსახულების მნიშვნელობა, თუ $a = 2$.",
    options: ["$-2$", "$-1$", "$1$", "$3$", "$2$", "$4$"],
    correct: 3,
    tags: []
  },
  {
    question: "$x^2 − 20x + q = 0$ განტოლების ფესვები ისე შეეფარდება ერთმანეთს, როგორც $3 : 7$ . იპოვეთ $q$ კოეფიციენტი.",
    options: ["$72$", "$84$", "$76$", "$80$", "$88$", "$63$"],
    correct: 1,
    tags: []
  },
  {
    question: "მართკუთხა სამკუთხედში ერთ-ერთი მახვილი კუთხის სინუსი $\\frac{\\sqrt{3}}{3}$-ის ტოლია. იპოვეთ მეორე კუთხის სინუსისა და ტანგენსის ნამრავლი.",
    options: ["$\\frac{4}{\\sqrt{3}}$", "$\\frac{5}{(2\\sqrt{3})}$", "$\\frac{2}{\\sqrt{3}}$", "$\\sqrt{3}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$"],
    correct: 2,
    tags: []
  },
  {
    question: "\\(ABC\\) მართკუთხა სამკუთხედის მართი კუთხის წვეროდან გავლებულ სიმაღლეზე, როგორც დიამეტრზე აგებულია წრეწირი. ეს წრეწირი კათეტებიდან მოკვეთს $18$ სმ და $12$ სმ-ის ტოლ მონაკვეთებს. იპოვეთ $ABC$ სამკუთხედის კათეტების ჯამი.",
    options: ["$60$სმ", "$65$სმ", "$70$სმ", "$55$სმ", "$50$სმ", "$75$სმ"],
    correct: 1,
    tags: []
  },
  {
    question: "$3\\tan^2 30° + 4\\tan 45° + \\cos 30° \\cdot \\cot 30° =$",
    options: ["$3{,}5$", "$4{,}5$", "$5{,}5$", "$6{,}5$", "$4$", "$5$"],
    correct: 3,
    tags: []
  },
  {
    question: "\\(ABC\\) სამკუთხედის \\(AD\\) სიმაღლე \\(BC\\) გვერდს ყოფს $BD = 2\\sqrt{2}$ სმ და $CD = 5$ სმ სიგრძის მონაკვეთებად. იპოვეთ $AC$ გვერდი, თუ $\\angle B = 60°$.",
    options: ["$7$", "$35\\sqrt{2}$", "$8$", "$37\\sqrt{2}$", "$9$", "$38\\sqrt{2}$"],
    correct: 0,
    tags: []
  },
  {
    question: "ტოლფერდა სამკუთხედის წვეროსთან მდებარე კუთხე $120°$-ია, ფუძეზე დაშვებული სიმაღლე კი - $3\\sqrt{3}$სმ-ია. იპოვეთ მოცემული სამუთხედის პერიმეტრი.",
    options: ["$30$", "$45$", "$12\\sqrt{3} + 16$", "$36$", "$18 + 12\\sqrt{3}$", "$6\\sqrt{3} + 12$"],
    correct: 4,
    tags: []
  },
  {
    question: "მართკუთხა სამკუთხედის კათეტები ტოლია $30$სმ და $40$სმ-ის. იპოვეთ ამ სამკუთხედის მართი კუთხის წვეროდან გავლებულ სიმაღლესა და მედიანას შორის მოთავსებული კუთხის კოსინუსი.",
    options: ["$\\frac{3}{7}$", "$\\frac{11}{15}$", "$\\frac{22}{25}$", "$\\frac{1}{3}$", "$\\frac{3}{5}$", "$\\frac{24}{25}$"],
    correct: 5,
    tags: []
  },
  {
    question: "$ABC$ ტოლფერდა სამკუთხედში $AC$ ფუძეა. $\\angle A = 30°$, $CD$ - სიმაღლეა. იპოვეთ $B$ წვეროდან დაშვებული სიმაღლის სიგრძე, თუ $AD = 20$ სმ-ია.",
    options: ["$10$", "$\\frac{16}{3}$", "$\\frac{20}{3}$", "$7$", "$\\frac{20}{9}$", "$9$"],
    correct: 2,
    tags: []
  },
  {
    question: "პარალელოგრამის დიაგონალი მისი გვერდის მართობულია და $3$-ის ტოლია. იპოვეთ პარალელოგრამის ორი მეზობელი გვერდის ნამრავლი, თუ მისი ერთი კუთხე $30°$-ია",
    options: ["$18\\sqrt{3}$", "$30$", "$12\\sqrt{3}$", "$10\\sqrt{3}$", "$24$", "$24\\sqrt{3}$"],
    correct: 0,
    tags: []
  },
  {
    question: "$E$ წერტილი $CD$ ქორდას ყოფს $15$სმ და $16$ სმ სიგრძის მონაკვეთებად. იპოვეთ ამ წრეწირის რადიუსი, თუ მანძილი $E$ წერტილიდან წრეწირის ცენტრამდე $4$სმ-ია.",
    options: ["$11$", "$12$", "$13$", "$14$", "$15$", "$16$"],
    correct: 5,
    tags: []
  },
  {
    question: "მართკუთხა ტრაპეციის დიაგონალები ურთიერთმართობულებია და გადაკვეთის წერტილით დიდი დიაგონალი იყოფა $4$სმ და $9$სმ სიგრძის მონაკვეთებად. იპოვეთ მცირე დიაგონალის სიგრძე.",
    options: ["$6$", "$\\frac{23}{3}$", "$\\frac{26}{3}$", "$8$", "$\\frac{33}{5}$", "$\\frac{29}{4}$"],
    correct: 2,
    tags: []
  }
];
