const quizData = [
  // 1
  {
    question: "თუ $5 < a < 15$ და $-5 < b < 16$, მაშინ $2a - b$ გამოსახულების მნიშვნელობა ჩამოთვლილთაგან რას არ შეიძლება, რომ გაუტოლდეს?",
    options: ["$-5$-ს", "$34$-ს", "$8$-ს", "$0$-ს", "$30$-ს", "$-7$-ს"],
    correct: 5,
    tags: []
  },
  // 2
  {
    question: "იპოვეთ $(a - b)^2$, თუ $a^{-1} + b^{-1} = 1{,}6$ და $a^{-1}b^{-1} = 0{,}2$.",
    options: ["$40$", "$22$", "$44$", "$36$", "$60$", "$16$"],
    correct: 2,
    tags: []
  },
  // 3
  {
    question: "იპოვეთ $12 \\cdot x$ რიცხვის ციფრთა ჯამი, თუ $x$ არის განტოლების ამონახსნი: $\\frac{x^2 - 8x}{x^2} = 8 - \\frac{7x}{x - 1}$.",
    options: ["$15$", "$8$", "$11$", "$9$", "$12$", "$10$"],
    correct: 0,
    tags: []
  },
  // 4
  {
    question: "ტოლფერდა ტრაპეციაში მახვილი კუთხე $45^\\circ$-ის ტოლია. შუახაზი დიაგონალით იყოფა შეფარდებით $2:5$. იპოვეთ ტრაპეციის სიმაღლის სიგრძე, თუ უმცირესი ფუძის სიგრძე $8$ სმ-ია.",
    options: ["$4$", "$5$", "$6$", "$3$", "$8$", "$2$"],
    correct: 2,
    tags: []
  },
  // 5
  {
    question: "იპოვეთ ამოზნექილ მრავალკუთხეში დიაგონალების რაოდენობა, თუ მისი კუთხეების ჯამი $720^\\circ$-ის ტოლია.",
    options: ["$5$", "$12$", "$6$", "$20$", "$9$", "$14$"],
    correct: 4,
    tags: []
  },
  // 6
  {
    question: "გამოთვალეთ: $\\frac{8^{-9} \\cdot 12^{-18} \\cdot 16^{11}}{9^{10} \\cdot 18^{-20}}$.",
    options: ["$4$", "$9$", "$12$", "$18$", "$16$", "$36$"],
    correct: 3,
    tags: []
  },
  // 7
  {
    question: "იპოვეთ $x$ ცვლადის რამდენი მნიშვნელობისთვის კარგავს აზრს გამოსახულება: $\\frac{2 - \\frac{x + 3}{x - 1}}{x + \\frac{5x}{x - 2}}$.",
    options: ["არცერთი", "$1$", "$2$", "$3$", "$4$", "$4$-ზე მეტი"],
    correct: 4,
    tags: []
  },
  // 8
  {
    question: "დაალაგეთ ზრდის მიხედვით შემდეგი რიცხვები: $A = (0{,}25)^{-1} \\cdot (\\frac{2}{3})^{-2}$, $B = (\\frac{2}{5})^{-4}$, $C = (0{,}3)^{-2} \\cdot (\\frac{8}{27})^0$, $D = \\frac{4^{-2}}{18^{-2}}$.",
    options: ["$A, B, C, D$", "$A, C, D, B$", "$A, D, C, B$", "$C, D, A, B$", "$C, A, B, D$", "$C, A, D, B$"],
    correct: 1,
    tags: []
  },
  // 9
  {
    question: "ტრაპეციაში მიმდევრობით აღებული კუთხეების შეფარდება ჩამოთვლილთაგან რომელ შემთხვევაშია შეუძლებელი?",
    options: ["$3:5:1:7$", "$2:4:3:5$", "$6:3:4:2$", "$8:7:13:12$", "$2:2:5:5$", "$3:6:6:3$"],
    correct: 2,
    tags: []
  },
  // 10
  {
    question: "$ABCD$ პარალელოგრამში $A$ და $B$ კუთხის წვეროდან გავლებული ბისექტრისები $K$ წერტილში იკვეთებიან. იპოვეთ $B$ ბლაგვი კუთხის წვეროდან გავლებული სიმაღლეებს შორის კუთხე, თუ $K$ წერტილიდან $AB$ გვერდის შუაწერტილამდე მანძილი პარალელოგრამის $AD$ გვერდის მიმართ გავლებული სიმაღლის სიგრძის ტოლია.",
    options: ["$45^\\circ$", "$90^\\circ$", "$15^\\circ$", "$60^\\circ$", "$30^\\circ$", "$120^\\circ$"],
    correct: 4,
    tags: []
  },
  // 11
  {
    question: "იპოვეთ $\\frac{x - 1}{3x} : \\left(\\frac{1}{3x - 6y} \\cdot (2y - x - \\frac{2y - x}{x})\\right)$ გამოსახულების მნიშვნელობა, თუ $x = 2025$ და $y = -199$.",
    options: ["$1$", "$-9$", "$8$", "$-1$", "$3$", "$0$"],
    correct: 3,
    tags: []
  },
  // 12
  {
    question: "$n$-ის რამდენი მთელი მნიშვნელობისთვის მიიღებს გამოსახულება $\\frac{2n - 1}{2n} - \\frac{2n}{2n - 1} - \\frac{1}{2n - 4n^2}$ ნატურალურ მნიშვნელობას?",
    options: ["არცერთი", "$1$", "$2$", "$3$", "$4$", "$8$"],
    correct: 1,
    tags: []
  },
  // 13
  {
    question: "$(x_1, y_1)$ და $(x_2, y_2)$ წყვილები მოცემული სისტემის ამონახსნებია: $\\begin{cases} 4x^2 + 1 = y^2 + 4x \\\\ y - x = 4 \\end{cases}$. იპოვეთ რისი ტოლია $x_1y_1 + x_2y_2$.",
    options: ["$42$", "$-18$", "$24$", "$-13$", "$36$", "$0$"],
    correct: 0,
    tags: []
  },
    // 14
  {
    question: "$A$ და $B$ წერტილები $a$ წრფის სხვადასხვა მხარეს მდებარეობენ და მისგან $60$ და $18$ ერთეულით არიან დაშორებული. იპოვეთ მანძილი $AB$ მონაკვეთის შუაწერტილიდან $a$ წრფემდე.",
    options: ["$24$", "$18$", "$16$", "$15$", "$21$", "$36$"],
    correct: 4,
    tags: []
  },
  // 15
  {
    question: "რომბის პერიმეტრი $24$-ის, ერთ-ერთი კუთხე კი $-$ $150^\\circ$-ის ტოლია. იპოვეთ მანძილი ამ რომბის დიაგონალების გადაკვეთის წერტილიდან რომბის გვერდამდე.",
    options: ["$1{,}8$", "$1$", "$1{,}2$", "$2$", "$1{,}5$", "$2{,}4$"],
    correct: 4,
    tags: []
  },
  // 16
  {
    question: "მოცემული წილადი $\\frac{2m + 17}{m - 1}$. ეს წილადი ქვემოთ ჩამოთვლილი პასუხებიდან რომელ რიცხვზეა შესაძლებელი შეიკვეცოს?",
    options: ["$7$", "$29$", "$11$", "$17$", "$31$", "$19$"],
    correct: 5,
    tags: []
  },
  // 17
  {
    question: "რამდენაირად შეგვიძლია $1010$ ფანქრის განაწილება $30$ და $40$ ადგილიან ყუთებში ისე, რომ ყველა ყუთი იყოს სავსე და არცერთი ფანქარი არ დარჩეს გაუნაწილებელი?",
    options: ["$10$", "$9$", "$8$", "$7$", "$5$", "$4$"],
    correct: 2,
    tags: []
  },
  // 18
  {
    question: "იპოვეთ $\\left(\\frac{x^{-3} + y^{-3}}{x^{-2} - y^{-2}} + (x - y)^{-1}\\right) : (x^{-1} - y^{-1})$ გამოსახულების მნიშვნელობა, თუ $x = 199$ და $y = 8$.",
    options: ["$-191$", "$1$", "$207$", "$24{,}125$", "$191$", "$-1$"],
    correct: 1,
    tags: []
  },
  // 19
  {
    question: "$A$ კუთხის შიგნით მდებარე $O$ წერტილიდან კუთხის გვერდებზე დაშვებულია $OC$ და $OB$ მართობები. იპოვეთ $\\angle ACB$, თუ $\\angle BAO = 48^\\circ$.",
    options: ["$44^\\circ$", "$58^\\circ$", "$42^\\circ$", "$32^\\circ$", "$48^\\circ$", "$64^\\circ$"],
    correct: 2,
    tags: []
  },
  // 20
  {
    question: "იპოვეთ პარალელოგრამის ერთ გვერდთან მდებარე კუთხეების შეფარდება, თუ მისი გვერდების შუაწერტილების შეერთებით მიღებულ ოთხკუთხედში ჩაიხაზება წრეწირი.",
    options: ["$1:1$", "$1:2$", "$1:3$", "$1:5$", "$2:7$", "შეუძლებელია დადგენა"],
    correct: 0,
    tags: []
  },
  // 21
  {
    question: "იპოვეთ $n + \\frac{1}{n}$ გამოსახულების მნიშვნელობა, თუ სამართლიანია ტოლობა: $\\frac{3n^2 - 5n + 3}{2n} = 8$.",
    options: ["$8$", "$11{,}5$", "$7$", "$12$", "$7{,}5$", "$8$"],
    correct: 2,
    tags: []
  },
  // 22
  {
    question: "ვერტმფრენი თბილისიდან მესტიამდე დაფრინავს ერთი და იმავე მუდმივი სიჩქარით. ერთ დღეს ხილვადობის გაუარესების გამო ვერტმფრენმა გზის პირველი ნახევარი გაიარა $30$ კმ/სთ-ით ნაკლები სიჩქარით. დანიშნულების ადგილას გეგმით, რომ ჩასულიყო გზის მეორე ნახევარი გაიარა გეგმით განსაზღვრულ სიჩქარეზე $35$ კმ/სთ-ით მეტი სიჩქარით. იპოვეთ რა სიჩქარით მოძრაობს გეგმით ვერტმფრენი?",
    options: ["$360$ კმ/სთ", "$420$ კმ/სთ", "$270$ კმ/სთ", "$400$ კმ/სთ", "$350$ კმ/სთ", "$280$ კმ/სთ"],
    correct: 1,
    tags: []
  },
  // 23
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა იმ მნიშვნელობის ნამრავლი, რომელთათვისაც განტოლებას $\\frac{1}{4x - 6} + \\frac{2x - a}{18 - 8x^2} - \\frac{1}{2x^2 + 3x} = 0$ არ ექნება ამონახსნი.",
    options: ["$-36$", "$18$", "$-24$", "$-15$", "$0$", "$12$"],
    correct: 3,
    tags: []
  },
  // 24
  {
    question: "პარალელოგრამის პერიმეტრი $36$-ის ტოლია. მისი შიგა კუთხეების ბისექტრისების გადაკვეთით მიღებული ოთხკუთხედის დიაგონალების ჯამი $16$-ის ტოლია. იპოვეთ პარალელოგრამის უდიდესი გვერდის სიგრძე.",
    options: ["$11$", "$15$", "$12$", "$9$", "$16$", "$13$"],
    correct: 5,
    tags: []
  },
  // 25
  {
    question: "$ABCD$ მართკუთხედი ისეთია, რომ $AB:BC = 2:3$. $M$ არის $AB$-ს შუა წერტილი, ხოლო $K$ წერტილი ისეა აღებული $AD$ გვერდზე, რომ $AK:KD = 2:1$. იპოვეთ რისი ტოლია $\\angle MCK$ კუთხის გრადუსული ზომა.",
    options: ["$30^\\circ$", "$40^\\circ$", "$45^\\circ$", "$50^\\circ$", "$55^\\circ$", "$60^\\circ$"],
    correct: 2,
    tags: []
  }
];