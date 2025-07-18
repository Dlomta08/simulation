const quizData = [
// 1
{
  question: "ამოხსენით $\\sqrt{x + 5} \\geq -5$ უტოლობა.",
  options: ["\∅", "$[-5; +\\infty)$", "$(-\\infty; 5]$", "$[-5; 20]$", "$[20; +\\infty)$", "$\\mathbb{R}$"],
  correct: 1,
  tags: []
},

// 2
{
  question: "რამდენი ოთხნიშნა რიცხვი არსებობს, რომელიც იყოფა $5$-ზე.",
  options: ["$2450$", "$1800$", "$1600$", "$9000$", "$3000$", "$1500$"],
  correct: 1,
  tags: []
},

// 3
{
  question: "რა მიიღება $\\sqrt{x^2 - 2x - 2} = \\sqrt{2x^2 - 7x + 4}$ განტოლების ყველა ამონახსნი რომ შევკრიბოთ?",
  options: ["$1$", "$2$", "$9$", "$3$", "$5$", "$6$"],
  correct: 3,
  tags: []
},

// 4
{
  question: "მოცემულია $|\\vec{a}| = 7$, $|\\vec{b}| = 11$, $|\\vec{a} - \\vec{b}| = 14$. იპოვეთ $|\\vec{a} + \\vec{b}|$.",
  options: ["$18$", "$14$", "$12$", "$21$", "$3$", "$23$"],
  correct: 2,
  tags: []
},

// 5
{
  question: "რომელ წერტილში გადაიყვანს $B(1; 3)$ წერტილს ჰომოთეტია, რომლის ცენტრია $O(2; 7)$ წერტილი და რომლის კოეფიციენტია $k = 3$?",
  options: ["$(-1; -5)$", "$(6; 21)$", "$(-6; -21)$", "$(3; 10)$", "$(-2; 9)$", "$(4; -6)$"],
  correct: 0,
  tags: []
},

// 6
{
  question: "გამოთვალეთ $\\frac{C_{16}^{6}}{C_{14}^{5} + C_{14}^{6} + C_{15}^{5}}$ გამოსახულების მნიშვნელობა.",
  options: ["$2$", "$1$", "$5$", "$6$", "$3$", "$15$"],
  correct: 1,
  tags: []
},

// 7
{
  question: "მოცემულია $M(1; 2; 3)$ და $N(3; 4; 7)$ წერტილები. იპოვეთ $K$ წერტილის კოორდინატები, რომელიც $MN$ მონაკვეთს ყოფს $MK : KN = 3 : 5$ შეფარდებით.",
  options: [
    "$(\\frac{7}{4}; \\frac{11}{4}; \\frac{9}{2})$",
    "$(\\frac{3}{5}; \\frac{1}{4}; \\frac{7}{3})$",
    "$(\\frac{4}{7}; \\frac{13}{4}; \\frac{1}{3})$",
    "$(\\frac{3}{5}; \\frac{1}{4}; \\frac{5}{11})$",
    "$(2; 3; 5)$",
    "$(4; 5; 10)$"
  ],
  correct: 0,
  tags: []
},

// 8
{
  question: "ამოხსენით უტოლობა $\\sqrt{2x + 5} < x + 1$.",
  options: [
    "$(-2; 2)$",
    "$(-1; 2)$",
    "$(-\\infty; 2)$",
    "$(-\\frac{5}{2}; 2)$",
    "$(2; +\\infty)$",
    "$(-2.5; -1)$"
  ],
  correct: 4,
  tags: []
},

// 9
{
  question: "იპოვეთ $\\vec{x}$ ვექტორი, რომელიც $\\vec{a}(1; 2; -3)$ ვექტორის კოლინიალურია და აკმაყოფილებს $\\vec{x} \\cdot \\vec{a} = 28$ პირობას.",
  options: [
    "$(3; 6; 9)$",
    "$(-1; -2; 3)$",
    "$(2; 4; -6)$",
    "$(4; 8; 12)$",
    "$(-12; 8; 4)$",
    "$(5; 7; 9)$"
  ],
  correct: 2,
  tags: []
},

// 10
{
  question: "წესიერი ექვსკუთხა პრიზმის ფუძის გვერდია $2$. სიმაღლე $\\sqrt{3}$. იპოვეთ მოცულობა.",
  options: [
    "$6\\sqrt{3}$",
    "$18$",
    "$12$",
    "$24$",
    "$6$",
    "$32$"
  ],
  correct: 1,
  tags: []
},

// 11
{
  question: "იპოვეთ $(x + 3)^7$ ნიუტონის ბინომის განაშალის მესამე ($T_2$) წევრი.",
  options: [
    "$81x^5$",
    "$49x^5$",
    "$210x^5$",
    "$21x^5$",
    "$189x^5$",
    "$42x^5$"
  ],
  correct: 4,
  tags: []
},
// 12
{
  question: "ამოხსენით $\\frac{A_{x}^{4} \\cdot {P_{x - 4}}}{P_{x - 2}} = 42$ განტოლება $(P_n = n!)$.",
  options: ["$1$", "$2$", "$9$", "$7$", "$5$", "$13$"],
  correct: 3,
  tags: []
},

// 13
{
  question: "იპოვეთ $a$-ს ყველა მნიშვნელობა, რომელთათვისაც $\\sqrt{x-3} = a$ განტოლება და $\\sqrt{x-7} < -x^2 + 2x - 3$ უტოლობა ტოლფასია.",
  options: [
    "$(3; 7)$",
    "$(-\\infty; 0)$",
    "$(7; +\\infty)$",
    "$(-\\infty; 3)$",
    "$(-3; 12)$",
    "$(3; 12)$"
  ],
  correct: 1,
  tags: []
},

// 14
{
  question: "იპოვეთ $\\vec{a}(2; -3; 5)$ და $\\vec{b}(4; 2; -6)$ ვექტორების ვექტორული ნამრავლი.",
  options: [
    "$(2; 5; 17)$",
    "$(8; -6; -30)$",
    "$(8; 32; 16)$",
    "$(2; -6; 12)$",
    "$(-4; 6; 14)$",
    "$(12; 6; 4)$"
  ],
  correct: 2,
  tags: []
},

// 15
{
  question: "მოცემულია $\\vec{a}$, $\\vec{b}$ და $\\vec{c}$ სამი კოლინეარული ვექტორი. ჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $\\vec{a} + 2\\vec{b} + 3\\vec{c}$ ვექტორის სიგრძე, თუ $|\\vec{a}| = 199$, $|\\vec{b}| = 19$, $|\\vec{c}| = 9$?",
  options: ["$124$", "$254$", "$211$", "$188$", "$227$", "$199$"],
  correct: 3,
  tags: []
},

// 16
{
  question: "იპოვეთ ალბათობა იმისა, რომ $A = \\{2; 4; 7; 1; 3; 8; -2; -6\\}$ სიმრავლიდან შემთხვევით არჩეული ერთი ელემენტი $(x - 3)\\sqrt{x^2 - 5x + 4} = 0$ განტოლების ფესვია.",
  options: ["$\\frac{1}{8}$", "$\\frac{2}{8}$", "$\\frac{\\sqrt{5}}{8}$", "$\\frac{4}{8}$", "$\\frac{5}{8}$", "$\\frac{6}{8}$"],
  correct: 1,
  tags: []
},
// 17
{
  question: "ამოხსენით $\\sqrt{3x^3 - 13x^2 + 4x + 4} = x - 2$ განტოლება.",
  options: [
    "$6;\\ 2$",
    "$2\\sqrt[3]{2};\\ 4$",
    "$4$",
    "$2\\frac{2}{3};\\ 2\\sqrt[3]{2}$",
    "$\\frac{2}{3}$",
    "$2\\sqrt[3]{2};\\ 4\\sqrt[6]{3};\\ 4$"
  ],
  correct: 2,
  tags: []
},

// 18
{
  question: "$(\\sqrt[3]{4} + \\sqrt[5]{3})^{50}$ ნიუტონის ბინომის განაშალის $51$ შესაკრებიდან რამდენია ნატურალური?",
  options: ["$3$", "$4$", "$5$", "$7$", "$8$", "$9$"],
  correct: 1,
  tags: []
},

// 19
{
  question: "$\\vec{a}$ ვექტორი $Oy$ და $Oz$ ღერძების დადებით მიმართულებებთან ქმნის $60^\\circ$-იან კუთხეს. იპოვეთ ამ ვექტორის მიერ $Ox$ ღერძის დადებით მიმართულებასთან შექმნილი კუთხის კოსინუსი.",
  options: [
    "$\\pm \\frac{\\sqrt{3}}{2}$",
    "$\\pm \\frac{\\sqrt{3}}{3}$",
    "$\\pm \\frac{1}{2}$",
    "$\\pm \\frac{\\sqrt{2}}{2}$",
    "$0$",
    "$\\pm 1$"
  ],
  correct: 3,
  tags: []
},

// 20
{
  question: "დახრილი სამკუთხა პრიზმის გვერდითი წიბო $8$-ის ტოლია. ამ წიბოს მართობული კვეთა სამკუთხედია, რომლის ფართობი $5$-ის ტოლია. იპოვეთ პრიზმის მოცულობა.",
  options: ["$16$", "$20$", "$10$", "$40$", "$24$", "$8\\sqrt{3}$"],
  correct: 3,
  tags: []
},

// 21
{
  question: "$A = (\\sqrt{5} - 2)^{2022} + (\\sqrt{5} + 2)^{2022}$, $B = (\\sqrt{6} - 3)^{2021} + (\\sqrt{6} + 3)^{2021}$ და $C = (\\sqrt{5} - 2)^{2022} \\cdot (\\sqrt{5} + 2)^{2021}$. რიცხვებიდან რომელია ირაციონალური?",
  options: [
    "მხოლოდ $B$",
    "მხოლოდ $C$",
    "მხოლოდ $A$ და $C$",
    "მხოლოდ $A$ და $B$",
    "მხოლოდ $B$ და $C$",
    "სამივე"
  ],
  correct: 4,
  tags: []
},
// 22
{
  question: "ქვიზისთვის გვაქვს $6$ განსხვავებული საკითხი. ქვიზის ბილეთი შეიძლება შედგებოდეს ერთი ან რამდენიმე საკითხისგან. ამ $6$ საკითხისგან სულ რამდენი განსხვავებული ბილეთის შედგენაა შესაძლებელი, თუ საკითხების გადანაცვლებით ბილეთები არ განსხვავდებიან?",
  options: ["$6$", "$32$", "$33$", "$720$", "$63$", "$65$"],
  correct: 4,
  tags: []
},

// 23
{
  question: "პირველი ქარხანა უშვებს $30\\%$ სედანს და $70\\%$ ჯიპს. მეორე ქარხანა $60\\%$ სედანს და $40\\%$ ჯიპს. ავტოსალონში მხოლოდ ამ ორი ქარხნის პროდუქციაა წარმოდგენილი, სადაც $40\\%$ სედანია. იპოვეთ ალბათობა იმისა, რომ შემთხვევით შერჩეული სედანი პირველი ქარხნის ნაწარმია.",
  options: [
    "$\\frac{3}{25}$",
    "$\\frac{3}{10}$",
    "$\\frac{1}{2}$",
    "$\\frac{2}{3}$",
    "$\\frac{8}{21}$",
    "$\\frac{3}{5}$"
  ],
  correct: 2,
  tags: []
},

// 24
{
  question: "დაწერეთ $y = 2x$ წრფის სიმეტრიული წრფის განტოლება $y = x$ წრფის მიმართ.",
  options: [
    "$y = -x$",
    "$y = 2x + 2$",
    "$y = \\frac{1}{2}x + \\frac{1}{2}$",
    "$y = 5x$",
    "$y = \\frac{1}{5}x + 1$",
    "$y = \\frac{1}{2}x$"
  ],
  correct: 5,
  tags: []
},

// 25
{
  question: "$O$ არის $ABCD$ პარალელოგრამის დიაგონალების გადაკვეთის წერტილი. $M$ არის $O$-სგან განსხვავებული სივრცის ნებისმიერი წერტილი. იპოვეთ ისეთი $k$ რიცხვი, რომლისთვისაც სამართლიანია ტოლობა $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = k \\cdot \\vec{MO}.$",
  options: ["$1$", "$4$", "$2$", "$3$", "$\\frac{4}{3}$", "$\\frac{16}{5}$"],
  correct: 1,
  tags: []
}
];
