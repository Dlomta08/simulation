const quizData = [
//1
{
  question: "გამოთვალეთ: $\\dfrac{7{,}3^3 + 3 \\cdot 7{,}3^2 \\cdot 2{,}7 + 3 \\cdot 7{,}3 \\cdot 2{,}7^2 + 2{,}7^3}{5{,}5^2 − 4{,}5^2}$",
  options: ["$0{,}5$", "$25$", "$60$", "$100$", "$1$", "$125$"],
  correct: 3,
  tags: []
},

//2
{
  image: "math/class-7/images/image.19.png",
  question: "სიბრტყეზე მოცემულია წრფე და ორი მართკუთხედი, რომლის თითო წვერო ამ წრფეზე მდებარეობს (იხ. ნახაზი). იპოვეთ უცნობი კუთხის სიდიდე.",
  options: ["$135^\\circ$", "$110^\\circ$", "$120^\\circ$", "$140^\\circ$", "$130^\\circ$", "$115^\\circ$"],
  correct: 1,
  tags: []
},

//3
{
  question: "ნინომ კვირის დასაწყისში რამდენიმე კილოგრამი ვაშლი იყიდა, რაშიც სულ $10$ ლარი გადაიხადა. კვირის ბოლოს ვაშლი $20\\%$-ით იაფი ღირდა. ამიტომ ნინომ $30\\%$-ით მეტი წონის ვაშლის ყიდვა გადაწყვიტა. რამდენი ლარის გადახდა მოუწევს ნინოს?",
  options: ["$9{,}5$", "$10{,}2$", "$10{,}4$", "$10{,}6$", "$10{,}8$", "$11$"],
  correct: 2,
  tags: []
},

//4
{
  question: "რამდენი ამონახსნი აქვს $||x - 6| - 6| = 4$ განტოლებას?",
  options: ["$0$", "$1$", "$3$", "$2$", "$4$", "$5$"],
  correct: 4,
  tags: []
},

//5
{
  question: "იპოვეთ მანძილი $y = 4x - 8$ და $3x - 2y = 1$ განტოლებით მოცემული წრფეების გადაკვეთის წერტილიდან აბსცისათა ღერძამდე მანძილი.",
  options: ["$10$", "$6$", "$8$", "$12$", "$4$", "$5$"],
  correct: 4,
  tags: []
},

//6
{
  image: "math/class-7/images/image.20.png",  
  question: "$24$სმ-იანი მონაკვეთი წრეწირთან გადაკვეთის წერტილებით იყოფა შეფარდებით $1:2:3$. მიღებული ქორდა წრეწირის ცენტრიდან $60^\\circ$-იანი კუთხით ჩანს. რას უდრის წრეწირის დიამეტრი?",
  options: ["$10$", "$12$", "$16$", "$15$", "$14$", "$18$"],
  correct: 2,
  tags: []
},

//7
{
  question: "$y = 2x - 3$ ფუნქციის გრაფიკზე იპოვეთ წერტილი, რომლის ორდინატა $7$-ით ნაკლებია აბსცისაზე.",
  options: ["$(1; 8)$", "$(-1; 6)$", "$(-4; -11)$", "$(4; -1)$", "$(-5; 7)$", "$(5; -2)$"],
  correct: 2,
  tags: []
},

//8
{
  question: "ცნობილია, რომ $x^2 - 8x + 15$ გამოსახულება იშლება მამრავლებად:  $x^2 - 8x + 15 = (x + a)(x + b)$. იპოვეთ $|a + b|$ გამოსახულების მნიშვნელობა:",
  options: ["$8$", "$6$", "$10$", "$12$", "$4$", "$5$"],
  correct: 0,
  tags: []
},

//9
{
  question: "ცნობილია, რომ $f(x) = 4x - 7$. იპოვეთ $f(2x - 1) = f(x + 5)$ განტოლების ამონახსნი.",
  options: ["$6$", "$-4$", "$3$", "$-3$", "$4$", "$8$"],
  correct: 0,
  tags: []
},

//10
{
  question: "ცნობილია, რომ $a$ წრფის განტოლებაა $3x - 5y + 7 = 0$; $b$ წრფე პარალელურია $a$ წრფის და $oy$ ღერძს კვეთს $y = -3$ წერტილში. დაწერეთ $b$ წრფის განტოლება.",
  options: ["$y = -0{,}6x - 3$", "$y = 0{,}6x + 3$", "$y = 0{,}2x - 3$", "$y = 0{,}6x - 3$", "$y = 0{,}3x + 6$", "$y = -0{,}6x + 3$"],
  correct: 3,
  tags: []
},

//11
{
  question: "იპოვეთ $\\dfrac{14}{9x^2 - 12xy + 4y^2 + 7} + \\dfrac{12}{|5x - 3y - 1| + 3}$ გამოსახულების უდიდესი მნიშვნელობა.",
  options: ["$10$", "$6$", "$8$", "$12$", "$4$", "$5$"],
  correct: 1,
  tags: []
},

//12
{
  question: "$ABC$ სამკუთხედში ჩახაზული წრეწირი $AB$ გვერდს ეხება $M$ წერტილში. იპოვეთ $AC$ გვერდის სიგრძე, თუ $MB = 6$ $P_{ABC} = 42$.",
  options: ["$10$", "$13$", "$8$", "$12$", "$11$", "$15$"],
  correct: 5,
  tags: []
},

//13
{
  question: "წრეწირზე აღებულია სამი წერტილი $A$, $B$ და $C$ ისე, რომ $AB : BC : AC = 1 : 5 : 6$ (რკალის სიგრძეების შეფარდება). იპოვეთ $AQC$ კუთხის სიდიდე სადაც $Q$ არის $ABC$ სამკუთხედში ჩახაზული წრეწირის ცენტრი.",
  options: ["$135^\\circ$", "$110^\\circ$", "$120^\\circ$", "$140^\\circ$", "$130^\\circ$", "$115^\\circ$"],
  correct: 0,
  tags: []
},
//14
{
  task: "$N14,$ $N15$, $N16$ და $N17$ ამოცანებში ნახაზის მიხედვით იპოვეთ უცნობი კუთხის ან რკალის სიდიდე, რომლებიც $X$-ით ან კითხვის ნიშნითაა აღნიშნული (გაითვალისწინეთ, რომ ერთნაირად მონიშნული კუთხეები აუცილებლად ტოლ კუთხეებს არ ნიშნავს).",
  image: "math/class-7/images/image.21.png",
  question: "",
  options: ["$62^\\circ$", "$54^\\circ$", "$44^\\circ$", "$36^\\circ$", "$48^\\circ$", "$52^\\circ$"],
  correct: 1,
  tags: []
},

//15
{
  image: "math/class-7/images/image.22.png",
  question: "",
  options: ["$56^\\circ$", "$60^\\circ$", "$58^\\circ$", "$50^\\circ$", "$70^\\circ$", "$84^\\circ$"],
  correct: 4,
  tags: []
},

//16
{
  image: "math/class-7/images/image.23.png",
  question: "",
  options: ["$60^\\circ$", "$40^\\circ$", "$30^\\circ$", "$70^\\circ$", "$50^\\circ$", "$80^\\circ$"],
  correct: 5,
  tags: []
},

//17
{
  image: "math/class-7/images/image.24.png",
  question: "",
  options: ["$28^\\circ$", "$24^\\circ$", "$58^\\circ$", "$34^\\circ$", "$36^\\circ$", "$28^\\circ$"],
  correct: 4,
  tags: []
},

//18
{
  question: "მართკუთხა სამკუთხედში მართი კუთხის წვეროდან გავლებულ ბისექტრისასა და მედიანას შორის კუთხე $23^\\circ$-ია. იპოვეთ ამ სამკუთხედის მახვილი კუთხეებიდან უდიდესი.",
  options: ["$68^\\circ$", "$56^\\circ$", "$64^\\circ$", "$70^\\circ$", "$80^\\circ$", "$82^\\circ$"],
  correct: 0,
  tags: []
},

//19
{
  question: "თუთიისა და სპილენძის ორი შენადნობიდან, პირველში მათი მასები ისე შეეფარდება ერთმანეთს, შესაბამისად, როგორც $5:2$, ხოლო მეორეში - $3:4$. რამდენი კილოგრამი უნდა ავიღოთ პირველი შენადნობი, რომ მივიღოთ $28$ კგ ახალი შენადნობი, რომელშიც თუთია და სპილენძი ტოლად იქნება.",
  options: ["$5$კგ", "$6$კგ", "$7$კგ", "$8$კგ", "$10$კგ", "$5{,}5$კგ"],
  correct: 2,
  tags: []
},

//20
{
  question: "ჩამოთვლილთაგან რომელი ფუნქციის გრაფიკი არის მართკუთხა საკოორდინატო სიბრტყის $A(1; 4)$ და $B(-3; 0)$ წერტილებზე გამავალი წრფის პარალელური?",
  options: ["$y = x - 2$", "$y = -2x + 2$", "$y = 2x + 3$", "$y = -0{,}5x - 3$", "$y = -x + 7$", "$y = 1{,}2x - 3$"],
  correct: 0,
  tags: []
},

//21
{
  question: "სამკუთხედის კუთხეები ისე შეეფარდება ერთმანეთს, როგორც $2:7:9$. იპოვეთ ამ სამკუთხედზე შემოხაზული წრეწირის რადიუსი, თუ მისი უდიდესი გვერდი $8$-ის ტოლია.",
  options: ["$2$", "$2{,}5$", "$3$", "$3{,}5$", "$4$", "$4{,}5$"],
  correct: 4,
  tags: []
},

//22
{
  question: "მათემატიკის ოლიმპიადაზე გოგონების საშუალო ქულა $20\\%$-ით მეტია ბიჭების საშუალო ქულაზე. მაგრამ ბიჭების ჯამური ქულა $60\\%$-ით მეტია გოგონების ჯამურ ქულაზე. რამდენი პროცენტით მეტი ბიჭი მონაწილეობდა ოლიმპიადაზე, ვიდრე გოგო?",
  options: ["$20\\%$-ით", "$35\\%$-ით", "$43\\%$-ით", "$92\\%$-ით", "$57\\%$-ით", "$72\\%$-ით"],
  correct: 3,
  tags: []
},

//23
{
  question: "იპოვეთ უმცირესი რიცხვი, რომელიც შეიძლება წარმოვადგინოთ სამი განსხვავებული ნატურალური შედგენილი რიცხვის ჯამად.",
  options: ["$12$", "$15$", "$16$", "$18$", "$20$", "$22$"],
  correct: 3,
  tags: []
},

//24
{
  question: "ქვემოთ ჩამოთვლილთაგან რისი ტოლია $x + y$, თუ $x$ და $y$ ნატურალური რიცხვებია, ამასთან: $xy + 200 = (y + 1)^2$.",
  options: ["$200$", "$37$", "$199$", "$178$", "$402$", "$399$"],
  correct: 5,
  tags: []
},

//25
{
  question: "იპოვეთ $k$-ს მნიშვნელობები, რომლისთვისაც სისტემას აქვს ამონახსნთა უსასრულო სიმრავლე. <br><br> $\\begin{cases} 4x - 3y = 15 + kx \\\\ x + 2y = 5k - kx \\end{cases}$",
  options: ["$2$", "$3$", "$-1$", "$-3$", "$5$", "ასეთი $k$ არ არსებობს"],
  correct: 5,
  tags: []
}
];
