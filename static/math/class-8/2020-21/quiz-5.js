const quizData = [
  {
    question: "$𝑥^2 + 14𝑥 + 𝑐$ სამწევრის დაშლით მიიღება $(𝑥 -1)(𝑥+15)$. იპოვეთ $c$.",
    options: ["$-18$", "$16$", "$-15$", "$12$", "$8$", "$10$"],
    correct: 2 ,
    tags: []
  },
  {
    question: "ცნობილია, რომ $2𝑥^2 + 12𝑥 + 𝑞 = 0$ განტოლების ფესვების სხვაობა $2$-ის ტოლია. იპოვეთ $\\frac{𝑞}{𝑥_1 + 𝑥_2}$, თუ $𝑥₁$ და $𝑥₂$ მოცემული განტოლების ფესვებია.",
    options: ["$7$", "$\\frac{4}{5}$", "$\\frac{-8}{3}$", "$-4$", "$\\frac{-2}{5}$", "$5$"],
    correct: 2,
    tags: []
  },
  { 
    // სამი პასუხი აქვს ჩათვლილი
    warning: "სამი პასუხია ჩათვლილი",
    question: "იპოვეთ $\\frac{3}{𝑥−4} + \\frac{5}{𝑥−2} = 2$ განტოლების ამონახსნი.",
    options: ["$4$", "$3$", "$2$", "$1$", "$7$", "არცერთი წინა პასუხი სწორი არ არის"],
    correct: [1,4,5],
    tags: []
  },
  {
    question: "იპოვეთ $|𝑥^2 + 6𝑥 + 3| = |𝑥^2 + 4𝑥 + 5|$ განტოლების ამონახსენთა ჯამი.",
    options: ["$-5$", "$-4$", "$4$", "$3$", "$-3$", "$5$"],
    correct: 1,
    tags: []
  },
  {
    question: "რამდენი განსხვავებული ამონახსნი აქვს განტოლებას ($a$ ფიქსირებულია რიცხვია)? $𝑥^4 + (𝑎^2 + 3)·𝑥^2 − (𝑎^2 + 4) = 0$",
    options: ["არცერთი", "$4$", "$3$", "$2$", "$1$", "შეუძლებელია დადგენა"],
    correct: 3,
    tags: []
  },
  {
    question: "$(1 − 𝑠𝑖𝑛^2𝛼)·𝑐𝑡𝑔^2𝛼 + 1 − 𝑐𝑡𝑔^2𝛼 = ?$",
    options: ["$1$", "$𝑠𝑖𝑛^2𝛼$", "$3$", "$𝑡𝑔^2𝛼$", "$𝑐𝑜𝑠^2𝛼$", "$𝑐𝑡𝑔^2𝛼$"],
    correct: 1,
    tags: []
  },
  {
    question: "იპოვეთ განტოლების ამონახსნთა ნამრავლი: $\\frac{3𝑥^2−9𝑥}{2} − \\frac{12}{𝑥^2−3𝑥} = 3$",
    options: ["$8$", "$6$", "$5$", "$-10$", "$10$", "$-8$"],
    correct: 5,
    tags: []
  },
  {
    question: "ერთი და იმავე პროცენტული მაჩვენებლით ფასების ორჯერ დაკლების შემდეგ ფოტოაპარატის ფასი $900$ ლარიდან $576$ ლარამდე დაეცა. რამდენი პროცენტით იკლებდა თითოეულ შემთხვევაში ფოტოაპარატის ფასი?",
    options: ["$15\\%$", "$18\\%$", "$20\\%$", "$22\\%$", "$25\\%$", "$28\\%$"],
    correct: 2,
    tags: []
  },
  {
    question: "თუ $𝑥_1$ და $𝑥_2$ არიან $𝑥^2 − 5𝑥 − 7 = 0$ განტოლების ფესვები, მაშინ $\\frac{𝑥_1}{𝑥_2} + \\frac{𝑥_2}{𝑥_1} = $",
    options: ["$\\frac{-39}{7}$", "$\\frac{-23}{7}$", "$\\frac{37}{7}$", "$\\frac{39}{7}$", "$\\frac{36}{7}$", "$\\frac{-33}{7}$"],
    correct: 0,
    tags: []
  },
  {
    question: "$(𝑥_1, 𝑦_1)$ და $(𝑥_2, 𝑦_2)$ არიან სისტემის ამონახსნები: $\\begin{cases} 𝑥^2 − 𝑥𝑦 + 𝑦^2 = 12 \\\\ 𝑥 + 𝑦 = 6 \\end{cases}$. იპოვეთ ნამრავლი $(𝑥_1·𝑦_1·𝑥_2·𝑦_2)$.",
    options: ["$56$", "$27$", "$36$", "$81$", "$64$", "$48$"],
    correct: 4,
    tags: []
  },
  {
    question: "$𝑥^2 + 20𝑥 + 𝑎 = 0$ განტოლების ფესვები ისე შეეფარდება ერთმანეთს, როგორც $7∶3$. იპოვეთ $\\frac{𝑎}{12}$.",
    options: ["$8$", "$3$", "$4$", "$5$", "$6$", "$7$"],
    correct: 5,
    tags: []
  },
  {
    question: "$p$-ს რა მნიშვნელობისთვის მოგვცემს $3x^4 + 4x^3 + 2x + p$მრავალწევრის $(x +2)$−ზე გაყოფა ნაშთს $7$-ს.",
    options: ["$7$", "$-5$", "$-4$", "$6$", "$-3$", "$5$"],
    correct: 1,
    tags: []
  },
  {
    question: "რამდენი განსხვავებული ფესვი გააჩნია $(𝑥^2 − 2𝑥)^2 + 𝑚(𝑥^2 − 2𝑥) + 𝑛 = 0$ განტოლებას, თუ $𝑥^2 + 𝑚𝑥 + 𝑛 = 0$ განტოლების ფესვებია $-1$ და $-2$.",
    options: ["არცერთი", "$1$", "$2$", "$3$", "$4$", "$6$"],
    correct: 1,
    tags: []
  },
  {
    question: "თუ წილადის მრიცხველსა და მნიშვნელს გავადიდებთ ერთი ერთეულით, მივიღებთ $\\frac{1}{2}$-ს, ხოლო თუ შევკრებთ თავდაპირველი წილადის მრიცხველისა და მნიშვნელის კვადრატებს, მივიღებთ $146$-ს. იპოვეთ თავდაპირველი წილადი.",
    options: ["$\\frac{7}{11}$", "$\\frac{7}{13}$", "$\\frac{9}{19}$", "$\\frac{5}{11}$", "$\\frac{3}{7}$", "$\\frac{6}{13}$"],
    correct: 3,
    tags: []
  },
  {
    question: "ხელოსანს გარკვეულ დროში $96$ დეტალი უნდა დაემზადებინა. ყოველდღიურად ის ამზადებდა $2$ დეტალით მეტს, ვიდრე დაგეგმილი ქონდა, ამიტომ სამუშაო $4$დღით ადრე დაამთავრა. ვთქვათ, ხელოსანი ყოველდღიურად $x$ დეტალს ამზადებდა. რომელი განტოლებაა ამოცანაში მოცემული სიტუაციის ამსახველი მათემატიკური მოდელი?",
    options: ["$\\frac{96}{x} - \\frac{96}{x-2} = 4$", "$\\frac{96}{x} + \\frac{96}{x+2} = 4$", "$\\frac{96}{x-2} - \\frac{96}{x} = 4$", "$\\frac{96}{x+4} - \\frac{96}{x} = 2$", "$\\frac{96}{x} - \\frac{96}{x-4} = 2$", "$\\frac{96}{x} - \\frac{96}{x-3} = 2$"],
    correct: 2,
    tags: []
  },
  {
    question: "სამკუთხედის ორი გვერდი, რომელთა შორის კუთხე $60^\\circ$-ია, ისე შეეფარდება ერთმანეთს, როგორც $5:8$, მესამე გვერდი კი $21$სმ-ია. იპოვეთ სამკუთხედის უცნობი გვერდების ჯამი.",
    options: ["$39$", "$41$", "$43$", "$42$", "$40$", "$38$"],
    correct: 0,
    tags: []
  },
  {
    question: "ტოლფერდა სამკუთხედის ფერდი $4$სმ-ია. იპოვეთ ამ სამკუთხედის ფუძის სიგრძე, თუ ფერდისადმი გავლებული მედიანა $3$სმ-ია.",
    options: ["$2\\sqrt{5}$", "$2{,}5$", "$2{,}8$", "$\\sqrt{10}$", "$3{,}5$", "$3\\sqrt{7}$"],
    correct: 3,
    tags: []
  },
  {
    question: "$ABC$ სამკუთხედის $B$ და $C$ წვეროებიდან გავლებული მედიანები შესაბამისად $6$სმ და $9$სმ-ის ტოლია და იკვეთებიან $M$ წერტილში. იპოვეთ სამკუთხედის $AC$ გვერდი, თუ $∠BMC=120^\\circ$.",
    options: ["$2\\sqrt{5}$", "$3\\sqrt{7}$", "$2{,}5$", "$2\\sqrt{5}$", "$4\\sqrt{7}$", "$9$"],
    correct: 4,
    tags: []
  },
  { 
    question: "მართკუთხა ტრაპეციის დიაგონალი ფერდის მართობულია და უდრის $15$ სმ-ს. იპოვეთ ტრაპეციის პერიმეტრი, თუ მისი მახვილი კუთხის კოსინუსი $\\frac{4}{5}$-ია.",
    options: ["$66$", "$64$", "$62$", "$60$", "$59$", "$68$"],
    correct: 0,
    tags: []
  },
  {
    question: "სამკუთხედის გვერდებია $5სმ$, $5სმ$ და $6სმ$. იპოვეთ ამ სამკუთხედზე შემოხაზული წრეწირის რადიუსი.",
    options: ["$2\\sqrt{2}$", "$\\frac{25}{8}$", "$\\frac{9}{\\sqrt{7}}$", "$3\\sqrt{3}$", "$\\frac{8}{3}$", "$3$"],
    correct: 1,
    tags: []
  },
  {
    question: "$ABC$ სამკუთხედში $AB=BC$. $AF$ სიმაღლე $2$-ჯერ ნაკლებია $BD$ სიმაღლეზე. იპოვეთ $\\cos\\angle BCA$.",
    options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{5}$", "$\\frac{2}{5}$", "$\\frac{3}{4}$", "$\\frac{1}{4}$"],
    correct: 5,
    tags: []
  },
  {
    //ფოტომასალა აქვს
    question: `$ABC$ სამკუთხედში $\\angle C=90^\\circ$, $\\angle B=\\beta$. $BC$ მონაკვეთზე აღებულია $D$ წერტილი ისე, რომ $BD = m$ და $\\angle ADC = \\alpha$, იპოვეთ $AC$ მონაკვეთის სიგრძე თუ $\\tan(\\alpha)=\\frac{2}{3}$, $\\tan(\\beta)=\\frac{1}{4}$.`,
    image:   "math/class-8/images/t.jpg.png",
  
    options: ["$\\frac{m}{3}$", "$\\frac{2m}{5}$", "$\\frac{2m}{3}$", "$\\frac{3m}{8}$", "$\\frac{m}{7}$", "$\\frac{3m}{5}$"],
    correct: 1,
    tags: []
  },
  {
    question: "$ABC$ მართკუთხა სამკუთხედში $AB$ ჰიპოტენუზაზე აღებულია $M$ წერტილი ისე, რომ $AM:MB=1:3$. იპოვეთ $CM$ მონაკვეთის სიგრძე, თუ $AC=CB=4$სმ-ს.",
    options: ["$2\\sqrt{5}$", "$2{,}5$", "$2{,}8$", "$\\sqrt{10}$", "$3{,}5$", "$3\\sqrt{7}$"],
    correct: 3,
    tags: []
  },
  {
    question: "იპოვეთ $ABCD$ ოთხკუთხედის $AC$ დიაგონალი, თუ ცნობილია, რომ მასზე შემოიხაზება წრეწირი და $AB = 3$სმ , $BC= 4$სმ, $CD = 5$სმ, $AD = 6$სმ.",
    options: ["$1$", "$\\sqrt{\\frac{247}{7}}$", "$23{,}5$", "$18$", "$\\sqrt{\\frac{237}{11}}$", "$20{,}5$"],
    correct: 1,
    tags: []
  },
  {
    question: "იპოვეთ $ABC$ სამკუთხედის $BC$ გვერდი, თუ $AB=5$, $AC=6$, $\\sin(A)=\\frac{\\sqrt{5}}{3}$ და $\\angle A$ ბლაგვია.",
    options: ["$10$", "$11$", "$\\sqrt{143}$", "$12$", "$\\sqrt{101}$", "$\\sqrt{115}$"],
    correct: 4,
    tags: []
  }
];
