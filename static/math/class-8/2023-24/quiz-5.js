const quizData = [
  // 1
  {
    question: "იპოვეთ $\\sqrt{|x - 3|} = 1$ განტოლების ფესვების ჯამი.",
    options: ["$4$", "$6$", "$7$", "$5$", "$0$", "$3$"],
    correct: 1,
    tags: []
  },
  // 2
  {
    question: "გამოთვალეთ $\\sqrt{12} + \\sqrt{27} - \\sqrt{75}$.",
    options: ["$-\\sqrt{5}$", "$-2\\sqrt{3}$", "$-\\sqrt{15}$", "$0$", "$1$", "$2$"],
    correct: 3,
    tags: []
  },
  // 3
  {
    question: "იპოვეთ $\\frac{a\\sqrt{a} - b\\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} - \\sqrt{ab}$ გამოსახულების მნიშვნელობა, თუ $a = 5$ და $b = 3$.",
    options: ["$8$", "$2$", "$6$", "$4$", "$15$", "$12$"],
    correct: 0,
    tags: []
  },
  // 4
  {
    question: "ტრაპეციის შუახაზი დიაგონალით იყოფა $5$ და $7$ სიგრძის მონაკვეთებად. იპოვეთ ტრაპეციის ფუძეების სხვაობის მოდული.",
    options: ["$1$", "$2$", "$3$", "$4$", "$6$", "$8$"],
    correct: 3,
    tags: []
  },
  // 5
  {
    question: "მართკუთხედის გვერდების შუა წერტილების შეერთებით მიღებული ოთხკუთხედის პერიმეტრი $48$-ის ტოლია. იპოვეთ მართკუთხედის დიაგონალი.",
    options: ["$12$", "$24$", "$48$", "$16$", "$36$", "$32$"],
    correct: 1,
    tags: []
  },
  // 6
  {
    question: "იპოვეთ $2 - x^2 + 6x$ სამწევრის უდიდესი მნიშვნელობა.",
    options: ["$2$", "$3$", "$5$", "$6$", "$9$", "$11$"],
    correct: 5,
    tags: []
  },
  // 7
  {
    question: "იპოვეთ $x$ ცვლადის იმ მნიშვნელობათა ჯამი, რომელთათვისაც $f(x) = \\frac{x - 5}{x^2 - 3x + 2}$ ფუნქცია არ არის განსაზღვრული.",
    options: ["$-5$", "$-2$", "$0$", "$1$", "$2$", "$3$"],
    correct: 5,
    tags: []
  },
  // 8
  {
    question: "თუ $a = 10111$ და $b = 1100$ ორობით სისტემაში, მაშინ რისი ტოლია $a + b$ ათობით სისტემაში?",
    options: ["$23$", "$35$", "$42$", "$27$", "$47$", "$36$"],
    correct: 1,
    tags: []
  },
  // 9
  {
    question: "წრეწირში ჩახაზული $ABCD$ ტრაპეციის $AC$ დიაგონალი $12$-ის ტოლია. ტრაპეციის თითოეული ფერდი შემოხაზული წრეწირის ცენტრიდან $120^\\circ$-იანი კუთხით მოჩანს. იპოვეთ ტრაპეციის შუახაზი.",
    options: ["$12$", "$6$", "$4$", "$8$", "$4\\sqrt{2}$", "$3\\sqrt{6}$"],
    correct: 1,
    tags: []
  },
  // 10
  {
    question: "მახვილკუთხა $ABC$ სამკუთხედზე შემოხაზული წრეწირის ცენტრია $O$. სამკუთხედის $A$ წვეროდან გავლებულია $AH$ სიმაღლე. იპოვეთ $\\angle OAC$ კუთხე, თუ $\\angle BAH = 40^\\circ$.",
    options: ["$20^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$", "$40^\\circ$", "$80^\\circ$"],
    correct: 4,
    tags: []
  },
  // 11
  {
    question: "$a$ პარამეტრის რომელი მნიშვნელობისთვის იქნებიან $x^3 + 4x = 0$ და $|x^5 + 4x| = a$ განტოლებები ტოლფასი?",
    options: ["$a = -1$", "$a = 0$", "$a = 1$", "$a = 2$", "$a = 4$", "$a > 4$"],
    correct: 1,
    tags: []
  },
  // 12
  {
    question: "იპოვეთ $(m - n)^2$, თუ $m$ და $n$ რიცხვები $x^2 - 5x + 3 = 0$ განტოლების ამონახსნებია.",
    options: ["$7$", "$8$", "$13$", "$15$", "$16$", "$18$"],
    correct: 2,
    tags: []
  },
  // 13
  {
    question: "რომელიღაც მახვილი $\\alpha$ კუთხისათვის $ax^2 + bx + c = 0$ განტოლებას აქვს ორი ამონახსნი $x_1 = \\sin^2\\alpha$ და $x_2 = \\cos^2\\alpha$. ჩამოთვლილთაგან რომელი ტოლობაა აუცილებლად ჭეშმარიტი?",
    options: ["$a = 2b$", "$b = c$", "$a^2 = 2b^2$", "$a = c$", "$a + b = 0$", "$a^2 + b^2 = 0$"],
    correct: 4,
    tags: []
  },
  // 14
  {
    question: "$ABC$ სამკუთხედის პერიმეტრი $35$-ის ტოლია, ხოლო $AC = 8$. რა უდიდესი მნიშვნელობა შეიძლება ჰქონდეს $BD$ მედიანის სიგრძეს, თუ ის ნატურალური რიცხვით გამოისახება.",
    options: ["$4$", "$15$", "$9$", "$11$", "$13$", "$14$"],
    correct: 4,
    tags: []
  },
  // 15
  {
    question: "ქვემოთ ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს წრეწირში ჩახაზული იმ ტრაპეციის პერიმეტრი, რომლის ორი გვერდია $6$ და $8$, ხოლო მახვილი კუთხე $60^{\\circ}$-ია.",
    options: ["$34$", "$20$", "$24$", "$30$", "$32$", "$38$"],
    correct: 0,
    tags: []
  },
  // 16
  {
    question: "ამოხსენით $\\frac{5|x+3|+2}{2} - |x + 3| < 10$ უტოლობა.",
    options: ["$-3 < x < 3$", "$-9 < x < 3$", "$-1 < x < 5$", "$1< x < 3$", "$0< x < 10$", "$2< x < 6$"],
    correct: 1,
    tags: []
  },
  // 17
  {
    question: "იპოვეთ $\\frac{x^2 + 8}{x}$ გამოსახულების უმცირესი მთელი დადებითი მნიშვნელობა.",
    options: ["$1$", "$2$", "$4$", "$6$", "$8$", "$12$"],
    correct: 3,
    tags: []
  },
  // 18
  {
    question: "თუ $\\frac{\\sqrt{ab} + \\sqrt{ac}}{\\sqrt{a^3b} + \\sqrt{a^3c}} + \\frac{1}{a} = 0$, მაშინ ქვემოთ ჩამოთვლილთაგან რომელია აუცილებლად ჭეშმარიტი.",
    options: ["$a = 2b$", "$2a = b$", "$b + c < 0$", "$a + b > 0$", "$a^2b > 0$", "$cb < 0$"],
    correct: 2,
    tags: []
  },
  // 19
  {
    question: "მოცემულია ორი მონაკვეთი, რომელთა სიგრძეებია $a$ და $b$. ცნობილია, რომ არსებობს სამკუთხედი, რომლის გვერდებია $3a + 2b$, $a + 3b$ და $3a + 6b$. ქვემოთ ჩამოთვლილთაგან რომელია აუცილებლად ჭეშმარიტი?",
    options: ["სამკუთხედი ტოლგვერდაა", "სამკუთხედი ტოლფერდაა", "სამკუთხედი მართკუთხაა", "$a = b$", "$a > b$", "$a < b$"],
    correct: 4,
    tags: []
  },
  // 20
  {
    question: "$ABC$ მართკუთხა სამკუთხედის $BC$ კათეტზე როგორც დიამეტრზე შემოხაზული წრეწირი ჰიპოტენუზას გადაკვეთს $D$ წერტილში ისე, რომ $AD : BD = 1 : 3$. მართი $C$ წვეროდან ჰიპოტენუზაზე დაშვებული სიმაღლის სიგრძეა $3$. იპოვეთ $BC$ კათეტის სიგრძე.",
    options: ["$3\\sqrt{2}$", "$2\\sqrt{3}$", "$4$", "$5$", "$6$", "$9$"],
    correct: 4,
    tags: []
  },
  // 21
  {
    question: `ჩამოთვლილი ექვსი ტოლობიდან რამდენი სრულდება ნებისმიერი $\\alpha$ მახვილი კუთხისათვის? <br><br>
    \n $1)$$2 + \\tan^2\\alpha = \\frac{\\cos^2\\alpha + 1}{\\cos^2\\alpha}$\n &emsp; $2)$$\\tan\\alpha \\cdot \\cot\\alpha = 1$\n &emsp; $3)$$1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}$\n <br><br>
    $4)$$\\frac{\\sin\\alpha - 3\\cos\\alpha}{2\\sin\\alpha - 2\\cos\\alpha} = \\frac{1}{2}$\n &emsp; $5)$$\\sin^2\\alpha + \\cos^2\\alpha = 1$\n &emsp; $6)$$(\\sin\\alpha + \\cos\\alpha)^2 = 1 + 2\\sin\\alpha \\cdot \\cos\\alpha$`,
    options: ["ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი"],
    correct: 4,
    tags: []
  },
  // 22
  {
    question: "იპოვეთ $2x^3 + x^2 - 5x + 2 = 0$ განტოლების უდიდესი და უმცირესი ამონახსნების სხვაობა.",
    options: ["$1$", "$1.5$", "$2$", "$2{,}5$", "$3$", "$4$"],
    correct: 4,
    tags: []
  },
  // 23
  {
    question: "იპოვეთ $a$ პარამეტრის უმცირესი მნიშვნელობა, რომლისათვისაც $\\frac{x^2 - 8x + a}{x^2 - 9} = 0$ განტოლებას ექნება ერთი ამონახსი.",
    options: ["$-64$", "$-33$", "$-12$", "$6$", "$16$", "$24$"],
    correct: 1,
    tags: []
  },
  // 24
  {
    question: "$M$ და $N$ წერტილები $ABCD$ ოთხკუთხედის შესაბამისად $BC$ და $AD$ გვერდების შუა წერტილებია. ცნობილია, რომ $AB = 5$, $CD = 9$ და $MN = 7$. იპოვეთ $\\angle ABC$, თუ $\\angle DCB = 60^{\\circ}$.",
    options: ["$90^{\\circ}$", "$60^{\\circ}$", "$120^{\\circ}$", "$80^{\\circ}$", "$150^{\\circ}$", "$30^{\\circ}$"],
    correct: 2,
    tags: []
  },
  // 25
  {
    question: "$ABC$ სამკუთხედზე შემოხაზულ წრეწირს $A$ წვეროდან გავლებული მედიანის გაგრძელება $M$ წერტილში გადაკვეთს. იპოვეთ $BC$, თუ $AC = MC = 4$.",
    options: ["$4$", "$6$", "$4\\sqrt{2}$", "$2\\sqrt{2}$", "$3\\sqrt{2}$", "$8$"],
    correct: 2,
    tags: []
  }
];
