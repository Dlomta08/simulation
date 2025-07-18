const quizData = [
    {
        question: "გამოთვალეთ $f'(1)$, თუ $f(x) = 2x^3 + 5(3x-1)^2 + 4$.",
        options: [
            "$16$",
            "$26$",
            "$36$",
            "$46$",
            "$56$",
            "$66$"
        ],
        correct: 5, 
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $a$ და $b$, თუ ცნობილია, რომ $y=\\frac{x^2+ax+b}{2-x}$ ფუნქციის დახრილი ასიმპტოტია $y=7-x$ წრფე?",
        options: [
            "$a=1; b=199$",
            "$a=-9; b=11$",
            "$a=5; b=-4$",
            "$a=-5; b=0$",
            "$a=b=1$",
            "ასეთი $a$ და $b$ არ არსებობს."
        ],
        correct: 1, 
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "$(\\arcsin x + \\arccos x)' = $",
        options: [
            "$\\frac{1}{x}$",
            "$\\frac{2}{x}$",
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$\\frac{2}{\\sqrt{1-x^2}}$",
            "$\\frac{\\pi}{2}$",
            "$0$"
        ],
        correct: 5, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "იპოვეთ $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$ ელიფსის ექსცენტრისიტეტი.",
        options: [
            "$\\frac{9}{5}$",
            "$\\frac{2}{3}$",
            "$\\frac{1}{5}$",
            "$\\frac{3}{2}$",
            "$\\frac{3}{5}$",
            "$\\frac{1}{9}$"
        ],
        correct: 1, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ცნობილია, რომ $x-3y-12=0$ წრფე ეხება $\\frac{x^2}{36} + \\frac{y^2}{12} = 1$ ელიფსს. ჩამოთვლილთაგან რომელია შეხების წერტილის კოორდინატები.",
        options: [
            "$(6; -2)$",
            "$(3; -3)$",
            "$(4; 7)$",
            "$(-5; 2)$",
            "$(3;1)$",
            "$(-2;5)$"
        ],
        correct: 1, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "რამდენი ექსტრემუმის წერტილი გააჩნია $f(x) = \\sin^2x$ ფუნქციას $(0;3)$ შუალედში?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 2, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "გამოთვალეთ $f'\\left(\\frac{\\pi}{16}\\right)$, თუ $f(x) = \\tan^34x$.",
        options: [
            "$\\frac{\\pi}{4}$",
            "$6$",
            "$12$",
            "$24$",
            "$18$",
            "$4$"
        ],
        correct: 3, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "იპოვეთ $A(1;1;1)$ წერტილზე გამავალი იმ სიბრტყის განტოლება, რომელიც პარალელურია $\\vec{a} = (1;1;1)$ და $\\vec{b} = (-1; 1;2)$ ვექტორების.",
        options: [
            "$x+2y-3z=0$",
            "$2x-3y-z+2=0$",
            "$x+3y+2z-6=0$",
            "$x+y=2$",
            "$2y-z=1$",
            "$x-3y+2z=0$"
        ],
        correct: 5, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "რამდენი ამონახსნი აქვს $Ax=B$ განტოლებას, თუ $Ax+By+Cz+9=0$ სიბრტყე პარალელურია $Oxy$ სიბრტყის?",
        options: [
            "არცერთი",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$4$-ზე მეტი"
        ],
        correct: 5, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "რამდენი მხები გაივლება $\\frac{x^2}{20} + \\frac{y^2}{16} = 1$ ელიფსისადმი $A(1;2)$ წერტილიდან?",
        options: [
            "$1$",
            "$2$",
            "$4$",
            "$6$",
            "$8$",
            "არცერთი"
        ],
        correct: 5, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "გამოთვალეთ $f'(1)$, თუ $f(x) = \\sin(x\\cdot e^x)$.",
        options: [
            "$e\\cdot\\cos e$",
            "$\\cos e$",
            "$2e\\cdot\\cos e$",
            "$\\sin e$",
            "$e^2 \\cdot \\tan e$",
            "$e^e$"
        ],
        correct: 2, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "მოცემულია $[-1;2]$ შუალედში განსაზღვრული $f(x) = \\frac{x^3}{3} - 4x^2 + 7x + 5$ ფუნქცია და $[-2;4]$ შუალედში განსაზღვრული $g(x) = 3x^2 - ax$ ფუნქცია. ცნობილია, რომ $f(x)$ ფუნქცია მაქსიმალურ მნიშვნელობას და $g(x)$ ფუნქცია მინიმალურ მნიშვნელობას არგუმენტის ერთი და იგივე მნიშვნელობისათვის აღწევენ. იპოვეთ $a$.",
        options: [
            "$2$",
            "$1$",
            "$3$",
            "$-3$",
            "$0$",
            "$4$"
        ],
        correct: 0, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "გამოთვალეთ $f'\\left(\\sqrt{\\frac{\\pi}{6}}\\right)$, თუ $f(x) = \\sin^3\\left(x^2 + \\frac{\\pi}{6}\\right)$.",
        options: [
            "$1$",
            "$\\frac{9}{8}$",
            "$\\frac{1}{2}$",
            "$\\frac{9}{4}\\sqrt{\\frac{\\pi}{6}}$",
            "$\\frac{\\pi}{6}\\sqrt{\\frac{\\pi}{6}}$",
            "$\\frac{2\\pi}{3}$"
        ],
        correct: 3, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ჩამოთვლილთაგან რომელია $9x^2 - 16y^2 = 144$ ჰიპერბოლის ფოკუსი?",
        options: [
            "$(9; 0)$",
            "$(0; 9)$",
            "$(16; 0)$",
            "$(5; 0)$",
            "$(0; 12)$",
            "$(3; 0)$"
        ],
        correct: 3, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "მოცემულია პარაბოლა $y^2 = 12x$. იპოვეთ მანძილი $A(3;6)$ წერტილიდან პარაბოლის ფოკუსამდე.",
        options: [
            "$12$",
            "$3$",
            "$6$",
            "$24$",
            "$4$",
            "$8$"
        ],
        correct: 2, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {   
        warning: "ყველა პასუხი ჩათვლილია",
        question: "ჩამოთვლილთაგან რისი ტოლი უნდა იყოს $a$, რომ $f(x) = ax^3 + 3x^2 + x + 7$ ფუნქციას ჰქონდეს ერთადერთი ექსტრემუმის წერტილი?",
        options: [
            "$2$ ან $5$",
            "$1$ ან $4$",
            "$3$",
            "$0$ ან $3$",
            "$1$",
            "$0$ ან $7$"
        ],
        correct: [0,1,2,3,4,5], // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "იპოვეთ $f(x) = \\frac{x^4}{4} - 2\\cdot\\frac{x^3}{3} - 5\\cdot\\frac{x^2}{2} + 6x$ ფუნქციის ზრდადობის შუალედი.",
        options: [
            "$(-1; 4)$",
            "$(-2;1) \\cup (3;+\\infty)$",
            "$(-\\infty;2) \\cup (3; +\\infty)$",
            "$(-2; 5)$",
            "$(5; 7)$",
            "$(-1;9)$"
        ],
        correct: 1, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "$XOY$ საკოორდინატო სიბრტყეზე იპოვეთ უმოკლესი მანძილი $y=4x-7$ წრფესა და $f(x) = x^2$ ფუნქციის გრაფიკს შორის.",
        options: [
            "$\\frac{2}{3}$",
            "$\\frac{7}{4}$",
            "$\\frac{3}{\\sqrt{17}}$",
            "$\\frac{2\\sqrt{3}}{7}$",
            "$4$",
            "$7$"
        ],
        correct: 2, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ჩამოთვლილთაგან რომელია იმ სიბრტყის განტოლება, რომელიც $x+2y-2z+7=0$ სიბრტყის პარალელურია და დაშორებულია $A(4; 3;-2)$ წერტილიდან $d=7$ მანძილით.",
        options: [
            "$x+2y-2z-35=0$",
            "$x+2y-2z+12=0$",
            "$x+2y-2z-8=0$",
            "$2x+4y-4z+9=0$",
            "$3x+6y-6z+7=0$",
            "$3x+6y-2z+45=0$"
        ],
        correct: 0, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "$\\vec{a}$ ვექტორის გასწვრივ პარალელურმა გადატანამ $2x-3y+5z+7=0$ სიბრტყე თავის თავში ასახა. ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს $\\vec{a}$ ვექტორის კოორდინატები?",
        options: [
            "$(-1; 7; 3)$",
            "$(3; 1; 2)$",
            "$(1; 4; 2)$",
            "$(5; 1; 5)$",
            "$(5;-1;-2)$",
            "$(0; 7; 1)$"
        ],
        correct: 2, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ამოხსენით უტოლობა $f'(x) \\geq 0$, თუ $f(x) = \\log_{0.3}(x^2-4)$.",
        options: [
            "$[0; +\\infty)$",
            "$(-2;2)$",
            "$(2; +\\infty)$",
            "$(-\\infty; -2)$",
            "$[-2; 2]$",
            "$(-\\infty; 2) \\cup (2; +\\infty)$"
        ],
        correct: 3, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ჩამოთვლილთაგან რომელია $f(x) = \\frac{x^2+2x-1}{x}$ ფუნქციის დახრილი ასიმპტოტი.",
        options: [
            "$y=x+2$",
            "$y=x+5$",
            "$y=x-1$",
            "$y=2x+3$",
            "$y=2x-5$",
            "$y=3x-1$"
        ],
        correct: 0, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "რამდენი უწყვეტი წირისგან შედგება $f(x) = \\frac{x^3}{x^2-5}$ ფუნქციის გრაფიკი?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 3, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ქვემოთ ჩამოთვლილთაგან რომელი $a$-სთვის, მოიძებნება ისეთი $b$, რომ $(a-4)x+2y+tz+5=0$ და $x+bty+tz+9=0$ სიბრტყეებს შორის კუთხე იქნება მახვილი ნებისმიერი $t$-სთვის?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$-1$",
            "$5$",
            "$4$"
        ],
        correct: 4, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    },
    {
        question: "ჩამოთვლილთაგან რომელ წერტილში გადაკვეთს $Oz$ ღერძს ის სიბრტყე, რომელიც გადის $2x-2y+z-3=0$ და $x+2y-2z+12=0$ სიბრტყეების გადაკვეთის წრფეზე და მოცემულ სიბრტყეებით შექმნილ ორწახნაგა კუთხეს შუაზე ყოფს?",
        options: [
            "$(0; 0; -1)$",
            "$(0; 0; -3)$",
            "$(0; 0; 2)$",
            "$(0; 0; 3)$",
            "$(0; 0; 4)$",
            "$(0; 0; 5)$"
        ],
        correct: 5, // ე) πR³/√2 is the correct answer
        tags: ["სტერეომეტრია", "ცილინდრი"]
    }
];
