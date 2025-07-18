const quizData = [
  // 1
  {
    question: "გამოთვალეთ: $\\frac{(-12)^{-6} \\cdot 16^3}{81^{-2}}$.",
    options: ["$4$", "$-\\frac{3}{8}$", "$\\frac{16}{27}$", "$9$", "$-\\frac{1}{8}$", "$6$"],
    correct: 3,
    tag: ""
  },
  // 2
  {
    question: "იპოვეთ $\\left\\{ \\begin{array}{l} 1 - x \\leq \\sqrt{199} \\\\ 2x \\leq \\sqrt{80} \\end{array} \\right.$ უტოლობათა სისტემის მთელი ამონახსნების რაოდენობა.",
    options: ["$23$", "$15$", "$18$", "$20$", "$22$", "$17$"],
    correct: 2,
    tag: ""
  },
  // 3
  {
    question: "ჩამოთვლილთაგან რომელი მიიღება $(a - \\frac{1}{b} - \\frac{1}{ab} + 1) : (1 - \\frac{1}{ab})$ გამოსახულების გამარტივებით?",
    options: ["$a + b$", "$b - 1$", "$a - b$", "$a + 1$", "$ab$", "$a$"],
    correct: 3,
    tag: ""
  },
  // 4
  {
    question: "$5$ სმ და $3$ სმ რადიუსიანი წრეწირების ცენტრებზე გამავალ წრფესა და საერთო გარე მხებს შორის კუთხის სინუსი $\\frac{1}{3}$-ის ტოლია. იპოვეთ საერთო გარე მხების წრეწირებთან შეხების წერტილებს შორის მანძილი.",
    options: ["$4\\sqrt{2}$", "$4$", "$2\\sqrt{6}$", "$6$", "$2\\sqrt{15}$", "$8$"],
    correct: 0,
    tag: ""
  },
  // 5
  {
    question: "$ABC$ სამკუთხედში $AM$ და $CN$ მედიანების სიგრძე შესაბამისად $9$-ისა და $12$-ის ტოლია. იპოვეთ $BK$ მედიანის სიგრძე, თუ $AC$ გვერდის სიგრძე $10$-ის ტოლია.",
    options: ["$18$", "$7{,}5$", "$24$", "$12$", "$10{,}8$", "$15$"],
    correct: 5,
    tag: ""
  },
  // 6
  {
    question: "იპოვეთ $\\left(\\frac{1}{(x - 1)^{-2}}\\right)^2$ გამოსახულების მნიშვნელობა, თუ $x$ არის $\\frac{1}{2x - 2} = \\frac{2x - 0{,}5}{x^3 - 1}$ განტოლების ამონახსნი.",
    options: ["$16$", "$\\frac{1}{256}$", "$81$", "$\\frac{81}{16}$", "$1$", "$\\frac{1}{16}$"],
    correct: 4,
    tag: ""
  },
  // 7
  {
    question: "თუ $x > 0$, მაშინ $\\left(\\frac{|x| + 1}{|x^2| + x}\\right)^{-1} + |{-x}|$ ტოლია:",
    options: ["$0$", "$2x$", "$-2x$", "$x$", "$-x$", "$1$"],
    correct: 1,
    tag: ""
  },
  // 8
  {
    question: "რისი ტოლია $\\left\\{ \\begin{array}{l} x^2 + y^2 = 6 \\frac{1}{4} \\\\ xy = -3 \\end{array} \\right.$ განტოლებათა სისტემის $(x; y)$ ამონახსენთა რაოდენობა?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tag: ""
  },
  // 9
  {
    question: "მართკუთხედში წვეროდან დიაგონალზე დაშვებული სიმაღლე დიაგონალს ყოფს $1:3$ შეფარდებით. იპოვეთ მართკუთხედზე შემოხაზული წრეწირის დიამეტრის სიგრძე, თუ მისი მცირე გვერდის სიგრძეა $8$.",
    options: ["$20$", "$18$", "$12$", "$16$", "$10$", "$24$"],
    correct: 3,
    tag: ""
  },
  // 10
  {
    question: "$AB$ მონაკვეთის ბოლოები $a$ წრფის მიმართ სხვადასხვა ნახევარსიბრტყეშია. რისი ტოლია $AB$ მონაკვეთის სიგრძე, თუ $A$ და $B$ წერტილებიდან $a$ წრფისადმი დაშვებული მართობთა სიგრძეები შესაბამისად $9$-ისა და $6$-ის ტოლია, ხოლო დაშვებული მართობთა ფუძეებს შორის მანძილი $8$-ის ტოლია.",
    options: ["$17$", "$16$", "$6\\sqrt{5}$", "$20$", "$15$", "$8\\sqrt{3}$"],
    correct: 0,
    tag: ""
  },
  // 11
  {
    question: "რისი ტოლია $a$ პარამეტრის მნიშვნელობა, თუ $x^2 + ax - 12 = 0$ განტოლების ფესვები აკმაყოფილებს $\\frac{1}{x_1} + \\frac{1}{x_2} = -\\frac{2}{3}$ პირობას?",
    options: ["$6$", "$-4$", "$12$", "$-8$", "$10$", "$-6$"],
    correct: 3,
    tag: ""
  },
  // 12
  {
    question: "რისი ტოლია $\\sqrt{(\\sqrt{3} + 2)^2} - \\sqrt{(\\sqrt{3} - 2)^2}$ გამოსახულების მნიშვნელობა?",
    options: ["$4$", "$3\\sqrt{3} - 4$", "$5$", "$2\\sqrt{3}$", "$\\sqrt{5}$", "$2\\sqrt{3} - 6$"],
    correct: 3,
    tag: ""
  },
  // 13
  {
    question: "წილადის მრიცხველი ერთით ნაკლებია მნიშვნელზე. მოცემული და მისი შებრუნებული წილადების ჯამი $2{,}05$-ის ტოლია. რისი ტოლია ამ წილადის და მისი შებრუნებული წილადის სხვაობის მოდული.",
    options: ["$0{,}8$", "$0{,}45$", "$0{,}9$", "$0{,}6$", "$0{,}65$", "$0{,}5$"],
    correct: 1,
    tag: ""
  },
  // 14
  {
    question: "ტოლფერდა ტრაპეციაში ჩაიხაზება წრეწირი. იპოვეთ ამ წრეწირის რადიუსის სიგრძე, თუ ერთ-ერთი ფუძის სიგრძე $2$-ის ტოლია, ხოლო დიაგონალების შუაწერტილების შემაერთებელი მონაკვეთის სიგრძე $3$-ის ტოლია.",
    options: ["$3$", "$1$", "$\\sqrt{5}$", "$2{,}5$", "$2$", "$\\sqrt{3}$"],
    correct: 4,
    tag: ""
  },
  // 15
  {
    question: "წრეწირი გადის $ABCD$ კვადრატის $A$ და $B$ წვეროებზე და $CD$ გვერდს ეხება $K$ წერტილში, ხოლო $AD$ და $BC$ გვერდებს კვეთს შესაბამისად $M$ და $N$ წერტილებში. რისი ტოლია ამ წრეწირის რადიუსი, თუ $DM = 2$.",
    options: ["$4$", "$2\\sqrt{7}$", "$3$", "$2\\sqrt{5}$", "$5$", "$4\\sqrt{2}$"],
    correct: 4,
    tag: ""
  },
  // 16
  {
    question: "იპოვეთ საკორდინატო სიბრტყეზე $|x| + |y| \\leq 2$ უტოლობით შემოსაზღვრული ფიგურის პერიმეტრი.",
    options: ["$8\\sqrt{2}$", "$8$", "$4\\sqrt{2}$", "$4$", "$6\\sqrt{2}$", "$16$"],
    correct: 0,
    tag: ""
  },
  // 17
  {
    question: "იპოვეთ $xy + 2y = 15 + 2x$ განტოლების მთელ ამონახსნთა $(x; y)$ წყვილების რაოდენობა.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tag: ""
  },
  // 18
  {
    question: "შეაფასეთ $\\frac{2}{b} - \\frac{1}{a}$ გამოსახულება, თუ $a \\in [3; 5]$ და $b \\in [1; 2]$.",
    options: [
      "$[1\\frac{1}{5};\\ 2\\frac{1}{3}]$",
      "$[\\frac{4}{5};\\ 1\\frac{1}{3}]$",
      "$[\\frac{2}{3};\\ 1\\frac{4}{5}]$",
      "$[\\frac{1}{5};\\ \\frac{2}{3}]$",
      "$[\\frac{5}{6};\\ 1\\frac{7}{10}]$",
      "$[2\\frac{1}{5};\\ 3\\frac{1}{3}]$"
    ],
    correct: 2,
    tag: ""
  },
  // 19
  {
    question: "$ABC$ სამკუთხედში $E$ და $F$ შესაბამისად $AB$ და $BC$ გვერდებზე მდებარეობენ. $EF$ სხივი $AC$ სხივს კვეთს $K$ წერტილში. იპოვეთ $EF$ და $FK$ მონაკვეთების სიგრძეთა შეფარდება, თუ $BF : FC = 5:3$ და $AC : CK = 4:3$.",
    options: ["$7:9$", "$13:10$", "$5:8$", "$5:9$", "$14:11$", "$6:13$"],
    correct: 3,
    tag: ""
  },
  // 20
  {
    question: `რომელიმე მონაცემებია საკმარისი პარალელოგრამის ასაგებად? <br><br>
    I. ორი მეზობელი გვერდი და ერთ-ერთი დიაგონალი.<br><br>
    II. დიაგონალები და მათ შორის მახვილი კუთხე.<br><br> 
    III. დიაგონალები და ერთ-ერთი გვერდი.`,
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "მხოლოდ II და III",
      "სამივე"
    ],
    correct: 5,
    tag: ""
  },
  // 21
  {
    question: "იპოვეთ $x^4 - 2x^2 - 8 = 0$ განტოლების ამონახსნთა რაოდენობა.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tag: ""
  },
  // 22
  {
    question: "იპოვეთ $\\frac{x^2 + 7}{x}$ გამოსახულების უმცირესი დადებითი მნიშვნელობა.",
    options: ["$2$", "$3 - \\sqrt{7}$", "$2\\sqrt{7}$", "$1 + 2\\sqrt{2}$", "$7$", "$1 + \\sqrt{7}$"],
    correct: 2,
    tag: ""
  },
  // 23
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა იმ მნიშვნელობათა სიმრავლე, რომელთათვისაც $\\left\\{ \\begin{array}{l} {a^{-1}}x \\leq 1 \\\\ \\sqrt{(x - 3)^2} > \\sqrt{(2 - x)^2} \\end{array} \\right.$ უტოლობათა სისტემის ამონახსნთა სიმრავლეში ზუსტად $8$ $მთელი$ რიცხვი ჩავარდება.",
    options: ["$(-7; -5]$", "$[-6; -4)$", "$(-5; -3)$", "$(2; 8]$", "$(-6; -5]$", "∅"],
    correct: 4,
    tag: ""
  },
  // 24
  {
    question: `თუ ტრაპეციაში ფერდების შაწერტილების შემაერთებელი მონაკვეთი ტოლია ფუძეების შუაწერტილების შემაერთებელი მონაკვეთის, მაშინ აუცილებლად სრულდება: <br><br>
    I. ტრაპეციაში ჩაიხაზება წრეწირი.<br><br>
    II. ტრაპეცია ტოლფერდაა.<br><br>
    III. დიაგონალები ურთიერთმართობულია.`,
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ III",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "სამივე"
    ],
    correct: 2,
    tag: ""
  },
  // 25
  {
    question: "$ABC$ ტოლფერდა სამკუთხედში $B$ კუთხე $120^\\circ$-ის ტოლია. $O$ წერტილი ბისექტრისების გადაკვეთის წერტილია. იპოვეთ ამ სამკუთხედში ჩახაზული წრეწირის რადიუსის სიგრძე, თუ $AOC$ სამკუთხედზე შემოხაზული წრეწირის რადიუსი $4\\sqrt{3}$-ის ტოლია.",
    options: ["$2$", "$4 - \\sqrt{3}$", "$\\sqrt{3}$", "$4\\sqrt{3} - 6$", "$1$", "$2\\sqrt{3} - 2$"],
    correct: 3,
    tag: ""
  }
];
