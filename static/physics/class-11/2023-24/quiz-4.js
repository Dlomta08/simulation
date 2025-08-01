const quizData = [
  {
    intro : `საჭირო ინფორმაცია:  
$$
\\begin{aligned}
\\cdot &\\; თუ სპეციალური მითითება არ არის, ელექტრულ მომხმარებლებთან მიერთებული სადენების წინაღობა არ გაითვალისწინოთ. \\\\
\\cdot &\\; თუ სპეციალური მითითება არ არის, მექანიკური რხევების დროს ენერგიის დანაკარგები არ გაითვალისწინოთ. \\\\
\\cdot &\\; ჩათვალეთ, რომ რიცხობრივად\\ \\pi^2 = g = 10, სადაც\\ g\\ \\text{თავისუფალი ვარდნის აჩქარებაა}.
\\end{aligned}
$$`,
    question: "ორი, კოჰერენტული სინათლის წყარო ასხივებს $500\\,ნმ$ ტალღის სიგრძის სინათლეს. სინათლის წყაროებს შორის მანძილი $1\\,მმ$-ია, ხოლო სინათლის წყაროებიდან იმ ეკრანამდე მანძილი სადაც ინტერფერენცია მიიღება $1\\,მ$-ია. განსაზღვრეთ, პირველ და მესამე ინტერფერენციულ მაქსიმუმებს შორის მანძილი.",
    options: [
      "$50\\cdot10^{-3}\\,მ$",
      "$0,4\\cdot10^{-3}\\,მ$",
      "$10^{-4}\\,მ$",
      "$11\\cdot10^{-3}\\,მ$",
      "$10^{-3}\\,მ$"
    ],
    correct: 4,
    tag: "ინტერფერენცია"
  },
  {
    question: "ორ, კოჰერენტულ სინათლის წყაროებს შორის მანძილი $1\\,მმ$-ია, ხოლო სინათლის წყაროებიდან იმ ეკრანამდე მანძილი სადაც ინტერფერენცია მიიღება $2\\,მ$-ია. ეკრანზე მიღებულ პირველ და მე-12 მაქსიმუმს შორის მანძილი $14,4\\,მმ$-ია. განსაზღვრეთ მოცემულ სინათლის წყაროებიდან მე-12 მაქსიმუმში მისულ სხივებს შორის სვლათა სხვაობა.",
    options: [
      "$7,2\\,მკმ$",
      "$1,4\\,მკმ$",
      "$5,9\\,მკმ$",
      "$2,4\\,მკმ$",
      "$3,4\\,მკმ$"
    ],
    correct: 0,
    tag: "ინტერფერენცია"
  },
  {
    question: "განსაზღვრეთ, მოცემულ რადიაქტიულ ნივთიერებაში არსებული, საწყისი ატომის ბირთვების რაოდენობის რა ნაწილი დაიშლება იმ დროში, რომელიც ემთხვევა უძრავ ჭერზე ჩამოკიდებული, ერთი მეტრი სიგრძის მათემატიკური ქანქარას რხევის პარიოდს, თუ ამ ნივთიერების ნახევარდაშლის პერიოდი $0,5\\,წმ$-ის ტოლია (ჩათვალეთ, თვისუფალი ვარდნის აჩქარება $g=\\pi^2\\,მ/წმ^2$. ასევე, ნივთიერებაში ბირთვების რაოდენობა საკმარისად დიდია რადიოაქტიური დაშლის კანონის გამოსაყენებლად).",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{15}{16}$",
      "$\\frac{1}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{1}{18}$"
    ],
    correct: 1,
    tag: "რადიაქტიური დაშლა"
  },
  {
    question: "განსაზღვრეთ, მოცემული რადიაქტიული ნივთიერების ნახევარდაშლის პერიოდის რამდენ პროცენტს შეადგენს ის დრო, რომლის განმავლობაშიც ბირთვების $75\\%$ დაიშლება (ჩათვალეთ, რომ ნივთიერებაში ბირთვების რაოდენობა საკმარისად დიდია რადიოაქტიური დაშლის კანონის გამოსაყენებლად).",
    options: [
      "$25\\%$",
      "$50\\%$",
      "$200\\%$",
      "$100\\%$",
      "$150\\%$"
    ],
    correct: 2,
    tag: "რადიაქტიური დაშლა"
  },
  {
    question: "განსაზღვრეთ მოცემული ნივთიერების ფოტოეფექტის წითელი საზღვრის ტალღის სიგრძე, თუ მასზე დაცემული ფოტონის ენერგია $9\\times10^{-19}\\,ჯ$-ია, ხოლო ფოტოეფექტის შედეგად ამოტყორცნილი ფოტოელექტრონის კინეტიკური ენერგია $6\\times10^{-19}\\,ჯ$-ია (პლანკის მუდმივა $h=6,62\\times10^{-34}\\,ჯ\\cdotწმ$. სინათლის სიჩქარე $c=3\\times10^8\\,მ/წმ$).",
    options: [
      "$662\\,ნმ$",
      "$714\\,ნმ$",
      "$407\\,ნმ$",
      "$500\\,ნმ$",
      "$550\\,ნმ$"
    ],
    correct: 0,
    tag: "ფოტოეფექტი"
  },
  {
    question: "მოცემულ $a$ და $b$ ზედაპირებს ასხივებენ ერთიდაიმავე სიხშირის სინათლით, რის შედეგადაც ხდება ფოტოეფექტები. $a$ ზედაპირიდან ამოტყორცნილი ელექტრონის კინეტიკური ენერგია არის $E$, ხოლო $b$ ზედაპირიდან ამოტყორცნილის - $2E$. რისი ტოლია ზედაპირებზე დაცემული ფოტონის ენერგია, თუ ამ ზედაპირებიდან ელექტრონების გამოსვლის მუშაობების ჯამი არის $3E$?",
    options: [
      "$2E$",
      "$E$",
      "$4E$",
      "$1,5E$",
      "$3E$"
    ],
    correct: 4,
    tag: "ფოტოეფექტი"
  },
  {
    question: "შვეულ კედელს, $20\\,მ/წმ$ სიჩქარით ეჯახება ჰორიზონტალური წყლის ჭავლი, რომელიც დაჯახების შემდეგ კედელზე ვერტიკალურად ჩამოედინება. განსაზღვრეთ, რა წნევას წარმოქმნის წყალი კედელზე, დაჯახების ადგილას. (წყლის სიმკვრივე $\\rho=1000\\,კგ/მ^3$)",
    options: [
      "$3\\cdot10^4\\,პა$",
      "$2\\sqrt{3}\\cdot10^5\\,პა$",
      "$3\\sqrt{3}\\cdot10^4\\,პა$",
      "$4\\cdot10^5\\,პა$",
      "$2\\cdot10^5\\,პა$"
    ],
    correct: 3,
    tag: "ჰიდროდინამიკა"
  },
  {
    question: "ჰორიზონტალურად განლაგებულ ორი სხვადასხვა განივკვეთის ფართობის მქონე ერთმანეთთან შეერთებულ მილებში მიედინება სითხე. ფართო მილის განივკვეთის დიამეტრი 4-ჯერ მეტია ვიწრო მილის განივკვეთის რადიუსზე. განსაზღვრეთ, რა დროში გაივლის ვიწრო მილის 8 მეტრ სიგრძეში წყალი, თუ ფართო მილში წყალი მიედინება $10\\,მ/წმ$ მუდმივი სიჩქარით.",
    options: [
      "$0,16\\,წმ$",
      "$0,7\\,წმ$",
      "$0,04\\,წმ$",
      "$0,05\\,წმ$",
      "$0,2\\,წმ$"
    ],
    correct: 4,
    tag: "ჰიდროდინამიკა"
  },
  {
    question: "წყალსაცავში წყლის დონე დედამიწის ზედაპირიდან 20 მეტრზეა. დედამიწიდან 15 მეტრ სიმაღლეზე, წყალსაცავს მიაერთეს გარკვეული განივკვეთის ფართობის მქონე მილი. მილიდან გამოყვანილი წყალი დედამიწის ზედაპირიდან 5 მ სიმაღლეზე ჰორიზონტალურად გამოედინება. განსაზღვრეთ წყლის გამოსვლის სიჩქარე მილიდან გამოსვლის მომენტში. მილის განივკვეთის ფართობი ბევრად ნაკლებია წყალსაცავის ზედაპირის ფართობზე (ჩათვალეთ, ატმოსფერული წნევა მუდმივია. თვისუფალი ვარდნის აჩქარება $g=10\\,მ/წმ^2$).",
    options: [
      "$10\\sqrt{2}\\,მ/წმ$",
      "$20\\,მ/წმ$",
      "$40\\,მ/წმ$",
      "$15\\sqrt{3}\\,მ/წმ$",
      "$10\\sqrt{3}\\,მ/წმ$"
    ],
    correct: 4,
    tag: "ჰიდროდინამიკა"
  },
  {
    question: "დიდი ზომის ავზში წყალი ჩადის $1,5\\,დმ^2$ განივკვეთის ფართობის მქონე მილით, რომლიდანაც წყალი გამოედინება მუდმივი $2\\,დმ/წმ$ სიჩქარით. ავზს ფსკერზე აქვს $6\\,სმ^2$ ფართობის ნახვრეტი. დაკვირვების დაწყების მომენტში წყლის სიმაღლე ავზში არის 2 მეტრი, რომელიც დროის განმავლობაში თანდათან კლებულობს. გარკვეული დროის შემდეგ ავზში დამყარდა დინამიური წონასწორობა, რის შედეგად დონის ცვლილება შეწყდა. რამდენი მეტრით დაიწია წყლის დონემ ამ დროს?",
    options: [
      "$1,2\\,მ$",
      "$1,1\\,მ$",
      "$0,75\\,მ$",
      "$0,4\\,მ$",
      "$0,8\\,მ$"
    ],
    correct: 2,
    tag: "ჰიდროდინამიკა"
  },
  {
    question: "წყლით სავსე, 3 მეტრი სიმაღლის, დიდი ზომის ავზის გარკვეულ დონეზე ორ მოპირდაპირე წერტილში, ერთდროულად გააკეთეს მცირე ზომის ნახვრეტები, საიდანაც გამოსული ჰორიზონტალური წყლის ჭავლების ფარდობითი სიჩქარე (ერთმანეთის მიმართ), საწყის მომენტში არის $10\\,მ/წმ$. განსაზღვრეთ, ფსკერიდან რა სიმაღლეზე გაუკეთებიათ ნახვრეტები. ჭავლები ნახვრეტებიდან ურთიერთსაპირისპირო მიმართულებით გამოედინება (ჩათვალეთ, ატმოსფერული წნევა მუდმივია. თვისუფალი ვარდნის აჩქარება $g=10\\,მ/წმ^2$)",
    options: [
      "$1,75\\,მ$",
      "$2,1\\,მ$",
      "$0,6\\,მ$",
      "$2,5\\,მ$",
      "$1,25\\,მ$"
    ],
    correct: 0,
    tag: "ჰიდროდინამიკა"
  },
  {
    question: "წყალბადის ატომში, ელექტრონის პირველი დასაშვები ორბიტის რადიუსია $5\\cdot10^{-11}\\,მ$. განსაზღვრეთ მეხუთე დასაშვები ორბიტის რადიუსი.",
    options: [
      "$25\\cdot10^{-11}\\,მ$",
      "$1,4\\cdot10^{-11}\\,მ$",
      "$7\\cdot10^{-10}\\,მ$",
      "$125\\cdot10^{-11}\\,მ$",
      "$3,5\\cdot10^{-9}\\,მ$"
    ],
    correct: 3,
    tag: "ატომის სტრუქტურა"
  },
  {
    question: "წყალბადის ატომს, პირველ სტაციონალურ მდგომარეობაში შეესაბამება $E_0$ ენერგია. განსაზღვრეთ რამდენით შეიცვალება ატომის ენერგია, თუ ელექტრონი გადავა მე-3 ენერგეტიკული დონიდან მე-6 ენერგეტიკულ დონეზე.",
    options: [
      "$3E_0$-ით",
      "$25E_0$-ით",
      "$\\frac{E_0}{4}$-ით",
      "$\\frac{E_0}{6}$-ით",
      "$\\frac{E_0}{12}$-ით"
    ],
    correct: 4,
    tag: "ატომის სტრუქტურა"
  },
  {
    question: "წყალბადის ატომში, ელექტრონის პირველი დასაშვები ორბიტის რადიუსია $5\\times10^{-11}\\,მ$. განსაზღვრეთ მოცემულ ორბიტაზე ელექტრონის სიჩქარე (კულონის მუდმივა $K=9\\cdot10^9\\,ნმ^2/კ^2$, ელექტრონის მუხტის მოდული $q_e=16\\cdot10^{-20}\\,კ$, ელექტრონის მასა $m_e=9\\cdot10^{-31}\\,კგ$)",
    options: [
      "$2\\sqrt{3}\\cdot10^5\\,მ/წმ$",
      "$16\\sqrt{2}\\cdot10^5\\,მ/წმ$",
      "$6\\cdot10^5\\,მ/წმ$",
      "$7,1\\cdot10^5\\,მ/წმ$",
      "$16\\sqrt{2}\\cdot10^5\\,მ/წმ$"
    ],
    correct: 1,
    tag: "ატომის სტრუქტურა"
  },
  {
    question: "განსაზღვრეთ წყალბადის ატომის გამოსხივების ტალღის სიგრძე, როდესაც ატომი გადადის მე-4 სტაციონალური მდგომარეობიდან მე-2 სტაციონალურ მდგომარეობაში (ჩათვალეთ, რომ $\\frac{E_0}{h}=32\\cdot10^{14}\\,წმ^{-1}$, სადაც, $E_0$ - ატომის ენერგიის მოდულია პირველ სტაციონალურ მდგომარეობაში, $h$ - პლანკის მუდმივა. $c=3\\cdot10^8\\,მ/წმ$ - სინათლის სიჩქარე.)",
    options: [
      "$300\\,ნმ$",
      "$700\\,ნმ$",
      "$500\\,ნმ$",
      "$450\\,ნმ$",
      "$600\\,ნმ$"
    ],
    correct: 2,
    tag: "ატომის სტრუქტურა"
  },
  {
    question: "რადიაქტიული დაშლის თანმიმდევრული სერიის შედეგად $_{92}^{238}U$ ურანი გარდაიქმნა $_{82}^{206}Pb$ ტყვიად. განსაზღვრეთ რამდენი $\\alpha$ და რამდენი $\\beta$ გარდაქმნას განიცადა ბირთვმა ამ დროს.",
    options: [
      "$8\\alpha$, $8\\beta$",
      "$32\\alpha$, $10\\beta$",
      "$8\\alpha$, $9\\beta$",
      "$11\\alpha$, $7\\beta$",
      "$8\\alpha$, $6\\beta$"
    ],
    correct: 4,
    tag: "ბირთვული ფიზიკა"
  },
  {
    question: "წყლის ზედაპირზე დევს $0,03\\,მ$ წიბოს სიგრძის მქონე კუბი ისე, რომ მისი ზედა წახნაგი ჰორიზონტალურია. კუბისთვის წყალი დამსველებელი სითხეა. განსაზღვრეთ კუბზე მოქმედი ზედაპირული დაჭიმულობის ძალა (წყლის ზედაპირული დაჭიმულობის კოეფიციენტი $\\delta=73\\cdot10^{-3}\\,ნ/მ$)",
    options: [
      "$876\\cdot10^{-5}\\,ნ$",
      "$219\\cdot10^{-5}\\,ნ$",
      "$101\\cdot10^{-5}\\,ნ$",
      "$773\\cdot10^{-5}\\,ნ$",
      "$335\\cdot10^{-5}\\,ნ$"
    ],
    correct: 0,
    tag: "ზედაპირული დაჭიმულობა"
  },
  {
    question: "ვერტიკალური კაპილარული მილი, რომლის რადიუსია $10^{-4}\\,მ$, ჩაძირულია ვერცხლისწყალში, ჩათვალეთ, რომ ვერცხლისწყალი მილისთვის აბსოლუტურად არადამსველებელი სითხეა და განსაზღვრეთ ვერცხლისწყლის წნევა მილში უშუალოდ სითხის ამოზნექილი ზედაპირის ქვეშ (ზედაპირის სიმრუდის გამო წნევის ცვლილება არ გაითვალისწინოთ. ატმოსფერული წნევა არ გაითვალისწინოთ. ვერცხლისწყლის ზედაპირული დაჭიმულობის კოეფიციენტი $\\delta=470\\cdot10^{-3}\\,ნ/მ$)",
    options: [
      "$4700\\,პა$",
      "$5300\\,პა$",
      "$9400\\,პა$",
      "$776\\,პა$",
      "$6820\\,პა$"
    ],
    correct: 2,
    tag: "ზედაპირული დაჭიმულობა"
  },
  { 
    warning: "ყველა პასუხი ჩათვლილია",
    question: "ბირთვმა გამოასხივა $10^{-9}\\,სმ$ ტალღის სიგრძის სამი $\\gamma$ კვანტი. განსაზღვრეთ ბირთვის მიერ გამოსხივებული ენერგია (პლანკის მუდმივა $h$. სინათლის სიჩქარე $c=3\\cdot10^8\\,მ/წმ$)",
    options: [
      "$9h\\cdot10^{-19}\\,ჯ$",
      "$9h\\cdot10^{-15}\\,ჯ$",
      "$10h\\cdot10^{-18}\\,ჯ$",
      "$19h\\cdot10^{-17}\\,ჯ$",
      "$11h\\cdot10^{-19}\\,ჯ$"
    ],
    correct: [0,1,2,3,4],
    tag: "ბირთვული ფიზიკა"
  },
  {
    question: "ალუმინის ბირთვები $_{13}^{27}Al$ ჩაიჭერს $_{2}^{4}\\alpha$ ნაწილაკს და გამოასხივებს უცნობ ნაწილაკს. ამ რეაქციის შედეგად მიიღება ფოსფორის იზოტოპი $_{15}^{30}P$. განსაზღვრეთ რა უცნობი ნაწილაკი გამოსხივდა რეაქციის შედეგად.",
    options: [
      "პროტონი",
      "ნეიტრონი",
      "ელექტრონი",
      "გამა კვანტი",
      "ჰელიუმის ბირთვი"
    ],
    correct: 1,
    tag: "ბირთვული რეაქციები"
  },
  {
    question: "მზიან დღეს, სინათლის მხრიდან $0,5\\,მ^2$ ფართობზე, მოქმედებს $2\\times10^{-8}\\,ნ$ ძალა. განსაზღვრეთ, რა წნევას წარმოქნის მოცემულ ფართობზე სინათლე.",
    options: [
      "$4\\cdot10^{-2}\\,მგპა$",
      "$4\\cdot10^{-2}\\,მკპა$",
      "$2\\cdot10^{-2}\\,გპა$",
      "$3\\cdot10^{-8}\\,პა$",
      "$9\\cdot10^{-3}\\,მპა$"
    ],
    correct: 1,
    tag: "სინათლის წნევა"
  },
  {
    question: "გამოსახეთ $_{a}^{b}U$ რადიაქტიული ელემენტის ბმის ენერგია მოცემული $M_u$ ელემენტის მასით, $a$ რიგითი ნომერით, $b$ მასური რიცხვით, $m_p$ პროტონის მასით, $m_n$ ნეიტრონის მასით და $c$ სინათლის სიჩქარით.",
    options: [
      "$E_{ბმ}=(bm_n - am_p - M_u)c^2$",
      "$E_{ბმ}=(bm_n + am_p + M_u)c^2$",
      "$E_{ბმ}=(bm_p + am_n - M_u)c^2$",
      "$E_{ბმ}=(bm_n - 2a(m_n - m_p) - \\sqrt{2}M_u)c^2$",
      "$E_{ბმ}=(bm_n - a(m_n - m_p) - M_u)c^2$"
    ],
    correct: 4,
    tag: "ბირთვული ფიზიკა"
  },
  {
    question: "რა მინიმალური მუშაობა უნდა შევასრულოთ, რომ ნახშირბადის $_{6}^{12}C$ ატომბირთვი დავშალოთ სამ ჰელიუმის ატომბირთვად $_{2}^{4}He$. ნახშირბადის ატომბირთვის ბმის ენერგიაა 92 მევ, ჰელიუმის 28 მევ",
    options: [
      "28 მევ",
      "16 მევ",
      "24 მევ",
      "8 მევ",
      "32 მევ"
    ],
    correct: 3,
    tag: "ბირთვული ფიზიკა"
  },
  {
    question: "ბორის მოდელის თანახმად წყალბადის ატომში ელექტრონის პირველი ენერგეტიკული დონის ენერგია (სრული ენერგია) $-13,6\\,ევ$-ია. რისი ტოლია ელექტრონის ბირთვთან ურთიერთქმედების პოტენციალური ენერგია?",
    options: [
      "$-27,2\\,ევ$",
      "$-13,6\\,ევ$",
      "$-6,8\\,ევ$",
      "$6,8\\,ევ$",
      "$13,6\\,ევ$"
    ],
    correct: 0,
    tag: "ატომის სტრუქტურა"
  },
  {
    question: "ბორის დაკვანტვის წესია:",
    options: [
      "ატომური სისტემა შეიძლება იმყოფებოდეს მხოლოდ განსაკუთრებულ სტაციონარულ ანუ კვანტურ მდგომარეობაში.",
      "ატომი სტაციონარულ მდგომარეობაში არ ასხივებს.",
      "ელექტრონის იმპულსის ნამრავლი ორბიტის რადიუსზე პლანკის მუდმივას ჯერადია.",
      "ატომი შედგება დადებითად დამოხტული ატომბირთვისა და მის გარშემო მბრუნავი ელექტრონებისგან.",
      "ზემოთ მოყვანილებს შორის არ არის დაკვანტვის წესი."
    ],
    correct: 2,
    tag: "ატომის სტრუქტურა"
  }
];