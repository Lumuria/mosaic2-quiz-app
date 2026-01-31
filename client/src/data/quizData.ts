export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  unitId: string;
}

export interface Unit {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  content: string;
  topics: string[];
  questions: Question[];
}

export const quizData: Unit[] = [
  {
    id: "unit1",
    title: "Past Simple & Used to / Would",
    arabicTitle: "الوحدة 1: الماضي البسيط و Used to / Would",
    description: "Learn about past simple tense and habitual past actions",
    content: `
## الماضي البسيط (Past Simple)

### الاستخدام:
- التعبير عن أحداث انتهت في وقت محدد في الماضي
- وصف سلسلة من الأحداث الماضية

### كلمات الدلالة:
ago, yesterday, last week/month/year, in 2010, first, then, later, finally

### أمثلة:
- Joe came to Canada three months ago. (حدث منذ 3 أشهر)
- On August 20, he entered the English program. (تاريخ محدد)
- Helen Keller was born a healthy child. (حالة في الماضي)

---

## Used to vs. Would

### Used to + verb:
1. **عادات ماضية مكررة**
2. **حالات أو مواقف مستمرة في الماضي** (لا توجد الآن)

مثال: Helen used to love to study languages. (كانت تحب الدراسة في الماضي)

### Would + verb:
- **عادات ماضية مكررة فقط** (لا تستخدم للحالات)
- لا تستخدم مع أفعال حالة مثل: love, be, have, know

مثال: They would frequently take walks. (كانوا يمشون بتكرار)

### الفرق المهم:
- I used to like coffee. (كنت أحب القهوة في الماضي، لا أحبها الآن)
- I would like coffee. (طلب مهذب - أود قهوة الآن)
    `,
    topics: [
      "Past Simple Formation",
      "Used to for Habitual Actions",
      "Would for Repeated Actions",
      "Difference between Used to and Would"
    ],
    questions: [
      {
        id: "q1-1",
        question: "Helen Keller _____ born a healthy child.",
        options: ["was", "were", "been", "being"],
        correctAnswer: 0,
        explanation: "نستخدم 'was' مع الضمير المفرد 'Helen' (she) في الماضي البسيط. الجملة تصف حالة في الماضي.",
        unitId: "unit1"
      },
      {
        id: "q1-2",
        question: "As a baby, she _____ to play.",
        options: ["liked", "likes", "liking", "like"],
        correctAnswer: 0,
        explanation: "نستخدم الماضي البسيط 'liked' لأن الحدث انتهى في الماضي (كانت طفلة).",
        unitId: "unit1"
      },
      {
        id: "q1-3",
        question: "Helen _____ a fever at 19 months old.",
        options: ["developed", "develops", "developing", "develop"],
        correctAnswer: 0,
        explanation: "الماضي البسيط 'developed' يصف حدث محدد في الماضي (عندما كانت عمرها 19 شهر).",
        unitId: "unit1"
      },
      {
        id: "q1-4",
        question: "They _____ frequently take walks. (اختر الخيار الأفضل لوصف عادة ماضية)",
        options: ["would", "used to", "both are correct", "neither is correct"],
        correctAnswer: 2,
        explanation: "كل من 'would' و 'used to' يمكن استخدامهما لوصف عادة ماضية مكررة. 'They would frequently take walks' و 'They used to frequently take walks' كلاهما صحيح.",
        unitId: "unit1"
      },
      {
        id: "q1-5",
        question: "Which sentence is correct?",
        options: [
          "I used to like coffee. (I don't like it now)",
          "I would like coffee. (I don't like it now)",
          "Both are correct",
          "Neither is correct"
        ],
        correctAnswer: 0,
        explanation: "الجملة الأولى صحيحة. 'Used to' تستخدم للحالات والعادات الماضية التي لا توجد الآن. 'Would like' تعني طلب مهذب في الحاضر.",
        unitId: "unit1"
      },
      {
        id: "q1-6",
        question: "Helen _____ a dog, and she _____ for hours with her dog.",
        options: [
          "had / sat",
          "has / sits",
          "having / sitting",
          "have / sit"
        ],
        correctAnswer: 0,
        explanation: "نستخدم الماضي البسيط 'had' و 'sat' لأن الجملة تصف أحداث في الماضي.",
        unitId: "unit1"
      }
    ]
  },
  {
    id: "unit2",
    title: "Articles Revision",
    arabicTitle: "الوحدة 2: مراجعة أدوات التعريف والتنكير",
    description: "Master the use of articles: a, an, the, and when to omit them",
    content: `
## أدوات التنكير (Indefinite Articles)

### A / An:
- تستخدم قبل الأسماء المفردة المعدودة
- A: قبل الأسماء التي تبدأ بصوت **ساكن**
  - a sailor, a house, a European (الـ E تنطق كـ /j/ وهو صوت ساكن)
- An: قبل الأسماء التي تبدأ بصوت **متحرك**
  - an island, an hour (الـ H لا تنطق)

---

## أداة التعريف (Definite Article)

### The مع الأسماء المعدودة:
تستخدم 'the' عندما يكون الاسم:
1. **محدد وفورعم** (معروف من السياق)
   - They bought a boat, but **the boat** sank.
2. **متبوع بجملة وصفية أو جار ومجرور**
   - the man in the hallway
   - the man who came to dinner
3. **متبوع بصيغة التفضيل**
   - the most dramatic period

### عدم استخدام The:
- عندما نتحدث بشكل عام
  - Cars can be more convenient than bicycles.
  - Faith, hope, and courage are important virtues.

### The مع الأسماء غير المعدودة:
- عادة لا نستخدم أداة مع الأسماء غير المعدودة
  - Pepper was very important to Europeans.
- لكن نستخدم 'the' عندما تكون محددة:
  - **The pepper from India** was treasured.
  - **The pepper that was sold** in European markets was valuable.
    `,
    topics: [
      "Indefinite Articles (a, an)",
      "Definite Article (the)",
      "Articles with Count Nouns",
      "Articles with Noncount Nouns",
      "Omitting Articles"
    ],
    questions: [
      {
        id: "q2-1",
        question: "I like _____ blue T-shirt over there better than _____ red one.",
        options: ["a / the", "the / a", "an / the", "the / the"],
        correctAnswer: 1,
        explanation: "نستخدم 'the' قبل 'blue T-shirt' لأنها محددة (التي نشير إليها). ونستخدم 'a' قبل 'red one' لأنها غير محددة (أي واحدة حمراء).",
        unitId: "unit2"
      },
      {
        id: "q2-2",
        question: "Their car does 150 miles _____ hour.",
        options: ["an", "a", "the", "X (no article)"],
        correctAnswer: 1,
        explanation: "نستخدم 'a' قبل 'hour' لأنها تبدأ بصوت ساكن (/aʊ/ في كلمة 'hour').",
        unitId: "unit2"
      },
      {
        id: "q2-3",
        question: "Where's _____ USB drive I lent you last week?",
        options: ["a", "an", "the", "X (no article)"],
        correctAnswer: 2,
        explanation: "نستخدم 'the' لأن USB drive محددة (التي أقرضتها للشخص الأسبوع الماضي).",
        unitId: "unit2"
      },
      {
        id: "q2-4",
        question: "Do you still live in _____ Bristol?",
        options: ["a", "an", "the", "X (no article)"],
        correctAnswer: 3,
        explanation: "لا نستخدم أداة مع أسماء المدن والدول عادة. Bristol هي اسم مدينة محددة.",
        unitId: "unit2"
      },
      {
        id: "q2-5",
        question: "Is your mother working in _____ old office building?",
        options: ["a", "an", "the", "X (no article)"],
        correctAnswer: 0,
        explanation: "نستخدم 'an' قبل 'old' لأنها تبدأ بصوت متحرك (/oʊ/).",
        unitId: "unit2"
      },
      {
        id: "q2-6",
        question: "Carol's father works as _____ electrician.",
        options: ["a", "an", "the", "X (no article)"],
        correctAnswer: 0,
        explanation: "نستخدم 'an' قبل 'electrician' لأنها تبدأ بصوت متحرك (/ɪ/).",
        unitId: "unit2"
      }
    ]
  },
  {
    id: "unit4",
    title: "Relative Clauses",
    arabicTitle: "الوحدة 4: الجمل الموصولة والنسبية",
    description: "Learn how to use relative clauses to combine sentences and add information",
    content: `
## الجمل الموصولة (Relative Clauses)

### الجمل الموصولة التي تحل محل الفاعل:

عندما يكون الضمير في الجملة الثانية (He, She, It, They) هو **فاعل الفعل**، نستخدم:
- **Who / That** للأشخاص
- **Which / That** للحيوانات والأشياء

#### مثال:
- جملتان بسيطتان:
  - The man was named Stephens.
  - He found the ruins.
- جملة موصولة:
  - **The man who (that) found the ruins was named Stephens.**

---

### الجمل الموصولة التي تحل محل المفعول به:

عندما يكون الضمير في الجملة الثانية (him, her, it, them) هو **مفعول به**، نستخدم:
- **Whom / Who / That** للأشخاص (يمكن حذفها في الجمل المقيدة)
- **Which / That** للأشياء (يمكن حذفها في الجمل المقيدة)

#### مثال:
- جملتان بسيطتان:
  - The Nazca Indians lived some 3,000 years ago.
  - Scientists credit them with drawing the lines.
- جملة موصولة:
  - **The Nazca Indians, whom scientists credit with drawing the lines, lived some 3,000 years ago.**

---

### الجمل الموصولة والجار والمجرور:

عندما يأتي الضمير بعد **حرف جر** (in, with, about, etc.)، نستخدم:
- **Whom / Which** (الصيغة الرسمية - الحرف قبل الضمير)
- **Who / That** (الصيغة الأقل رسمية - الحرف في نهاية الجملة)

#### مثال:
- جملتان بسيطتان:
  - The gods are not depicted in the lines.
  - The Indians believed in them.
- جملة موصولة:
  - **The gods in whom the Indians believed are not depicted in the lines.** (رسمي)
  - **The gods whom the Indians believed in are not depicted in the lines.** (أقل رسمية)
  - **The gods who the Indians believed in are not depicted in the lines.** (غير رسمي)
  - **The gods that the Indians believed in are not depicted in the lines.** (غير رسمي)
  - **The gods the Indians believed in are not depicted in the lines.** (بدون ضمير موصول)
    `,
    topics: [
      "Relative Pronouns (Who, Which, That)",
      "Relative Clauses Replacing Subject",
      "Relative Clauses Replacing Object",
      "Prepositions in Relative Clauses",
      "Restrictive vs. Nonrestrictive Clauses"
    ],
    questions: [
      {
        id: "q4-1",
        question: "The man _____ found the ruins was named Stephens.",
        options: ["who", "which", "that", "both a and c"],
        correctAnswer: 3,
        explanation: "كل من 'who' و 'that' صحيح عندما تحل الجملة الموصولة محل الفاعل. 'Who' هو الأفضل للأشخاص، لكن 'that' مقبول أيضاً.",
        unitId: "unit4"
      },
      {
        id: "q4-2",
        question: "The pyramid _____ is the most famous is El Castillo.",
        options: ["that", "which", "who", "both a and b"],
        correctAnswer: 3,
        explanation: "كل من 'that' و 'which' صحيح للأشياء. 'That' أكثر شيوعاً في الجمل المقيدة.",
        unitId: "unit4"
      },
      {
        id: "q4-3",
        question: "The Nazca Indians, _____ scientists credit with drawing the lines, lived 3,000 years ago.",
        options: ["who", "whom", "that", "which"],
        correctAnswer: 1,
        explanation: "نستخدم 'whom' لأن الضمير هو مفعول به (scientists credit them). هذه جملة موصولة غير مقيدة (مع فواصل).",
        unitId: "unit4"
      },
      {
        id: "q4-4",
        question: "The figure _____ I like the most is of a hummingbird.",
        options: [
          "which",
          "that",
          "X (no relative pronoun)",
          "all are correct"
        ],
        correctAnswer: 3,
        explanation: "كل الخيارات صحيحة. يمكن استخدام 'which'، 'that'، أو حذف الضمير الموصول في الجمل المقيدة.",
        unitId: "unit4"
      },
      {
        id: "q4-5",
        question: "The gods _____ the Indians believed in are not depicted in the lines.",
        options: [
          "whom",
          "who",
          "that",
          "all are correct"
        ],
        correctAnswer: 3,
        explanation: "كل الخيارات صحيحة. يمكن استخدام 'whom' (رسمي)، 'who' (أقل رسمية)، أو 'that' (غير رسمي).",
        unitId: "unit4"
      },
      {
        id: "q4-6",
        question: "Choose the most formal version: The gods _____ the Indians believed in...",
        options: [
          "in whom",
          "whom",
          "who",
          "that"
        ],
        correctAnswer: 0,
        explanation: "الصيغة الأكثر رسمية هي وضع حرف الجر قبل الضمير الموصول: 'in whom'. هذا يعكس الأسلوب الأدبي الرسمي.",
        unitId: "unit4"
      }
    ]
  }
];
