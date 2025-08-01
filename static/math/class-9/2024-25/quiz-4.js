const quizData = [
  //1
  {
    question: "ცნობილია, რომ $P(A) = 0{,}8$; $P(B) = 0{,}7$; ხოლო $A$ და $B$ ხდომილობების სხვაობის ალბათობაა $P(A\\backslash B) = 0{,}2$. იპოვეთ რისი ტოლია $A$ და $B$ ხდომილობების გაერთიანება $P(A \\cup B) =?$",
    options: ["$0{,}75$", "$0{,}9$", "$0{,}85$", "$0{,}5$", "$0{,}95$", "$0{,}6$"],
    correct: 1,
    tags: []
  },

  //2
  {
    question: "მოცემულია $b_n = \\frac{2^n}{256}$ გეომეტრიული პროგრესია. იპოვეთ $n$-ის ის უდიდესი მნიშვნელობა, რომლისთვისაც $b_n \\leq 7$.",
    options: ["$7$", "$8$", "$9$", "$10$", "$11$", "$12$"],
    correct: 3,
    tags: []
  },

  //3
  {
    question: "მოცემულია რვა ცალი ისეთი მომდევნო რიცხვი, რომლებიც $4$ -ზე გაყოფისას ნაშთს $3$ გვაძლევენ. მათი საშუალო $17$-ით მეტია ამ რიცხვების გაბნევის დიაპაზონზე. იპოვეთ ამ რიცხვების საშუალო.",
    options: ["$12$", "$24$", "$35$", "$42$", "$45$", "$56$"],
    correct: 4,
    tags: []
  },

  //4
  {
    question: "იპოვეთ $n$, თუ $\\vec{a}(2; n + 4)$ და $\\vec{b}(12; 8)$ ვექტორები მართობულია.",
    options: ["$-7$", "$-4$", "$-3$", "$1$", "$5$", "$12$"],
    correct: 0,
    tags: []
  },

  //5
  {
    question: "იპოვეთ მანძილი $(2; -2)$ წერტილიდან $3x - 4y + 6 = 0$ წრფემდე.",
    options: ["$1$", "$2$", "$4$", "$6$", "$8$", "$9$"],
    correct: 2,
    tags: []
  },

  //6
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $a_n = 3n - 199$ არითმეტიკული პროგრესიის პირველი $197$ წევრის ჯამი?",
    options: ["$199 \\cdot 197$", "$180 \\cdot 197$", "$64 \\cdot 197$", "$72 \\cdot 197$", "$19 \\cdot 197$", "$98 \\cdot 197$"],
    correct: 5,
    tags: []
  },

  //7
  {
    question: "გამოთვალეთ  $8 + 2 + \\frac{1}{2} + \\frac{1}{8} + \\cdots + \\frac{1}{2^{2n-3}}$ უსასრულო ჯამი.",
    options: ["$11 \\frac{1}{3}$", "$14 \\frac{1}{3}$", "$12 \\frac{2}{3}$", "$10 \\frac{2}{3}$", "$8 \\frac{1}{3}$", "$9 \\frac{2}{3}$"],
    correct: 3,
    tags: []
  },

  //8
  {
    question: "ალბათობა იმისა, რომ ოთხი გასროლიდან ერთი მაინც მოხვდება მიზანს არის $0{,}9984$. იპოვეთ ერთი გასროლით მიზანში მოხვედრის ალბათობა.",
    options: ["$0{,}8$", "$0{,}2$", "$0{,}0016$", "$0{,}5$", "$0{,}16$", "$0{,}4$"],
    correct: 0,
    tags: []
  },

  //9
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $m$, თუ $\\vec{a}(m; 2m - 1)$ ვექტორი $\\vec{b} = 6i + 10j$ ვექტორის კოლინეარულია.",
    options: ["$20$", "$2$", "$11$", "$17$", "$3$", "$12$"],
    correct: 4,
    tags: []
  },

  //10
  {
    question: "$M$ წერტილი $ABC$ სამკუთხედის $BC$ გვერდს ყოფს შეფარდებით $2:5$ ($B$ წვეროს მხრიდან). ცნობილია, რომ $\\vec{AB} = \\vec{a}$ და $\\vec{AC} = \\vec{b}$. იპოვეთ $\\vec{AM}$ ვექტორი.",
    options: ["$5\\vec{a} - 2\\vec{b}$", "$5\\vec{b} - 2\\vec{a}$", "$\\frac{5}{7}\\vec{a} + \\frac{2}{7}\\vec{b}$", "$\\frac{3}{5}\\vec{a} + \\frac{2}{5}\\vec{b}$", "$\\frac{2}{7}\\vec{a} - \\frac{5}{7}\\vec{b}$", "$5\\vec{a} + 2\\vec{b}$"],
    correct: 2,
    tags: []
  },
  
  //11
  {
    question: "მოცემულია არითმეტიკული პროგრესიის ორი წევრი $a_1 = 17{,}9$; $a_3 = 16{,}5$. იპოვეთ $n$-ის მნიშვნელობა, თუ $a_n$ არის ამ პროგრესიის უდიდესი უარყოფითი წევრი.",
    options: ["$7$", "$18$", "$27$", "$34$", "$45$", "შეუძლებელია განსაზღვრა"],
    correct: 2,
    tags: []
  },

  //12
  {
    question: "სპორტულ შეჯიბრებაში მხოლოდ სამი სახის მედალი გათამაშდა. ოქრო იყო მედლების $20\\%$, ვერცხლი - $35\\%$, დანარჩენი კი ბრინჯაო. იპოვეთ წრიულ დიაგრამაზე ბრინჯაოს მედლების შესაბამისი სექტორის კუთხე.",
    options: ["$30^\\circ$", "$45^\\circ$", "$132^\\circ$", "$234^\\circ$", "$178^\\circ$", "$162^\\circ$"],
    correct: 5,
    tags: []
  },

  //13
  {
    question: "მოსწავლის მიერ გამოცდაზე მათემატიკის ჩაბარების ალბათობა $0{,}9$-ის ტოლია, ხოლო მათემატიკისგან დამოუკიდებლად ფიზიკის ჩაბარების ალბათობა კი $0{,}8$-ის ტოლია. რა არის ალბათობა იმისა, რომ ეს მოსწავლე ამ ორი გამოცდიდან ერთ-ერთს მაინც ჩააბარებს?",
    options: ["$1{,}7$", "$0{,}1$", "$0{,}98$", "$0{,}89$", "$0{,}72$", "$0{,}28$"],
    correct: 2,
    tags: []
  },

  //14
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $n$, თუ $a$, $a_n$ და $an^2$ სამკუთხედის გვერდებია.",
    options: ["$\\frac{3}{2}$", "$\\frac{17}{10}$", "$\\frac{18}{7}$", "$\\frac{7}{3}$", "$\\frac{11}{2}$", "$\\frac{9}{5}$"],
    correct: 0,
    tags: []
  },

  //15
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $\\vec{a}(1; 3)$ ვექტორსა და $2x + y + 3 = 0$ წრფის პარალელურ ვექტორს შორის კუთხის კოსინუსი.",
    options: ["$\\frac{1}{3}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{2}{3}$", "$\\frac{1}{\\sqrt{2}}$", "$\\frac{1}{\\sqrt{5}}$"],
    correct: 4,
    tags: []
  },

  //16
  {
    question: "ცნობილია, რომ არითმეტიკულ პროგრესიაში $a_4 = 2$; ჩამოთვლილთაგან რისი ტოლია $a_5 \\cdot a_3 + a_1 \\cdot a_3 + a_1 \\cdot a_5$ გამოსახულების უდიდესი მნიშვნელობა?",
    options: ["$32$", "$44$", "$48$", "$56$", "$64$", "$72$"],
    correct: 2,
    tags: []
  },

  //17
  {
    question: "პირველ ყუთში $1$ თეთრი და $5$ შავი ბურთულაა. მეორეში $8$ თეთრი და $4$ შავი ბურთულა. თითოეული ყუთიდან ამოიღეს თითო-თითო ბურთულა. რა არის ალბათობა იმისა, რომ ამოღებული ბურთულებიდან ერთი თეთრია და ერთი შავი?",
    options: ["$\\frac{1}{9}$", "$\\frac{2}{5}$", "$\\frac{9}{17}$", "$\\frac{11}{18}$", "$\\frac{7}{20}$", "$\\frac{2}{15}$"],
    correct: 3,
    tags: []
  },

  //18
  {
    question: "მოცემულია ნატურალურ რიცხვთა მიმდევრობა $a$; $b$; $c$; $d$; $7$; $2$; $9$. ჩამოთვლილთაგან რისი ტოლია მოდისა და მედიანის ჯამი თუ ცნობილია, რომ მოდა $2$-ით ნაკლებია მედიანაზე.",
    options: ["$4$", "$11$", "$14$", "$15$", "$18$", "$23$"],
    correct: 0,
    tags: []
  },

  //19
  {
    question: "იპოვეთ $ABCD$ ამოზნექილი ოთხკუთხედის $AB$ და $CD$ გვერდების შუა წერტილების შემაერთებელი $MN$ მონაკვეთის სიგრძე, თუ $AD = 3$, $BC = 5$, ხოლო $\\vec{BC}$ და $\\vec{AD}$ ვექტორებს შორის კუთხე $60^{\\circ}$-ია.",
    options: ["$3$", "$4$", "$5$", "$\\frac{7}{2}$", "$\\frac{9}{2}$", "$\\frac{8}{3}$"],
    correct: 3,
    tags: []
  },

  //20
  {
    question: "$R = \\sqrt{5}$ რადიუსის წრეწირი $x - 2y - 1 = 0$ წრფეს ეხება $A(3; 1)$ წერტილში. ჩამოთვლილთაგან რისი ტოლია ამ წრეწირის ცენტრის კოორდინატები?",
    options: ["$(5; 1)$", "$(-2; 0)$", "$(4; 1)$", "$(1; 2)$", "$(2; 3)$", "$(1; 3)$"],
    correct: 4,
    tags: []
  },

  //21
  {
    question: "გეომეტრიული პროგრესიის მეორე წევრია $12$, ხოლო მეხუთე $324$. იპოვეთ მეექვსე წევრი.",
    options: ["$412$", "$972$", "$524$", "$632$", "$1024$", "$824$"],
    correct: 1,
    tags: []
  },

  //22
  {
    question: "$k_n$ მიმდევრობა შედგება $50$ განსხვავებული ნატურალური რიცხვისგან, მათ შორის $25$ წევრი არ აღემატება $50$-ს, ხოლო დანარჩენი მეტია $50$-ზე, მაგრამ არ აღემატება $100$-ს. ამასთან $k_p - k_m \\neq 50$ (ნებისმიერი $m$ და $p$ რიცხვებისათვის). ჩამოთვლილთაგან რისი ტოლია ამ მიმდევრობის ყველა წევრის ჯამი.",
    options: ["$1225$", "$2525$", "$2550$", "$2750$", "$3025$", "$3500$"],
    correct: 1,
    tags: []
  },

  //23
  {
    question: "მოცემულია მიმდევრობა $1 \\cdot 7$; $2 \\cdot 7^2$; $3 \\cdot 7^3$; $\\cdots$ $n \\cdot 7^n$. ჩამოთვლილთაგან რისი ტოლია ამ მიმდევრობის პირველი $12$ წევრის ჯამი?",
    options: ["$\\frac{71 \\cdot 7^{13} + 7}{36}$", "$\\frac{48 \\cdot 7^{12} + 7}{18}$", "$\\frac{12 \\cdot 7^{13} + 7}{48}$", "$\\frac{53 \\cdot 7^{12} + 7}{64}$", "$12 \\cdot 7^{13} + 7$", "$7^{14} + 7$"],
    correct: 0,
    tags: []
  },

  //24
  {
    question: "ჩამოთვლილთაგან რომლის მართობულია $\\vec{c}$ ვექტორი სიბრტყეზე მდებარე ნებისმიერი სამი $\\vec{a}$, $\\vec{b}$ და $\\vec{c}$ ვექტორისათვის?",
    options: ["$(\\vec{b} \\cdot \\vec{c})\\vec{a} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$", "$2\\vec{a} + \\vec{b}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} - (\\vec{a} \\cdot \\vec{c})\\vec{b}$", "$(\\vec{a} \\cdot \\vec{b})\\vec{c} + \\vec{c}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} + (\\vec{a} \\cdot \\vec{b})\\vec{c}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} + \\vec{c}$"],
    correct: 2,
    tags: []
  },

  //25
  {
    question: "მახვილკუთხა $ABC$ სამკუთხედში, რომლის გვერდებია $AB = c$, $BC = a$ და $AC = b$ შემოხაზულია $R$ რადიუსის მქონე წრეწირი, რომლის ცენტრია $O$. $D$ წერტილი $O$ წერტილის სიმეტრიულია $AB$ გვერდის მიმართ. ჩამოთვლითაგან რისი ტოლია $\\vec{CD}^ 2$.",
    options: ["$R^2 + a^2 - b^2 + c^2$", "$R^2 + a^2 + b^2 - c^2$", "$R^2 - a^2 + b^2 + c^2$", "$2R^2 + a^2 - b^2 - c^2$", "$2R^2 + a^2 + b^2 + c^2$", "$2R^2 - a^2 - b^2 + c^2$"],
    correct: 1,
    tags: []
  },
];
