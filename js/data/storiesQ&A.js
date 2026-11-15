// ==================== SPRINT STORIES WITH Q&A ====================
const sprintStoriesWithQA = [
  {
    id: 1,
    title: "Sprint 01: 田中さんの一日",
    titleEn: "Sprint 01: Tanaka's Day",
    theme: "Time, Daily Routine, Weather, Transport",
    sentences: [
      // ===== Layer 1 — Setup (sentences 0–3) =====
      {
        jp: "田中（たなか）さんは毎朝（まいあさ）六時（ろくじ）に起（お）きます。",
        en: "Tanaka wakes up at 6 every morning.",
      },
      {
        jp: "朝（あさ）ごはんを食（た）べてから、歯（は）を磨（みが）きます。",
        en: "After eating breakfast, he brushes his teeth.",
      },
      {
        jp: "それから、八時（はちじ）に会社（かいしゃ）へ行（い）きます。",
        en: "Then, at 8, he goes to the office.",
      },
      {
        jp: "会社（かいしゃ）は駅（えき）から近（ちか）いです。",
        en: "The office is close to the station.",
      },

      // ===== Layer 2 — Complication (sentences 4–6) =====
      {
        jp: "でも、昨日（きのう）は雨（あめ）でした。",
        en: "But yesterday it rained.",
      },
      {
        jp: "雨（あめ）の日（ひ）は、歩（ある）くのが大変（たいへん）です。",
        en: "On rainy days, walking is tough.",
      },
      {
        jp: "それに、傘（かさ）もありませんでした。",
        en: "Besides, he didn't have an umbrella either.",
      },

      // ===== Layer 3 — Response (sentences 7–9) =====
      { jp: "だから、バスで行（い）きました。", en: "So he went by bus." },
      {
        jp: "バスは少（すこ）し高（たか）かったですが、速（はや）かったです。",
        en: "The bus was a little expensive, but it was fast.",
      },
      {
        jp: "会社（かいしゃ）に十分（じゅっぷん）で着（つ）きました。",
        en: "He arrived at the office in ten minutes.",
      },

      // ===== Layer 4 — Resolution (sentences 10–11) =====
      {
        jp: "いつもは二十分（にじゅっぷん）かかりますから、今日（きょう）は早（はや）かったです。",
        en: "It usually takes twenty minutes, so today was fast.",
      },
      {
        jp: "田中（たなか）さんは「バスは便利（べんり）だなあ」と思（おも）いました。",
        en: 'Tanaka thought, "The bus is convenient."',
      },
    ],
    questions: [
      // ===== 3 direct recall =====
      {
        question:
          "田中（たなか）さんは毎朝（まいあさ）何時（なんじ）に起（お）きますか。",
        questionEn: "What time does Tanaka wake up every morning?",
        contextRange: [0, 0],
        answerSentence: 0,
        choices: [
          "六時（ろくじ）",
          "七時（しちじ）",
          "八時（はちじ）",
          "十時（じゅうじ）",
        ],
        choicesEn: ["6 o'clock", "7 o'clock", "8 o'clock", "10 o'clock"],
        answer: 0,
        requiresInference: false,
        note: "毎朝六時に起きます。",
        noteEn: "He wakes at 6 every morning.",
      },
      {
        question:
          "田中（たなか）さんの会社（かいしゃ）は駅（えき）から近（ちか）いですか。",
        questionEn: "Is Tanaka's office close to the station?",
        contextRange: [3, 3],
        answerSentence: 3,
        choices: [
          "はい、近いです",
          "いいえ、遠いです",
          "はい、とても遠いです",
          "いいえ、近くないです",
        ],
        choicesEn: [
          "Yes, it's close",
          "No, it's far",
          "Yes, it's very far",
          "No, it's not close",
        ],
        answer: 0,
        requiresInference: false,
        note: "会社は駅から近いです。",
        noteEn: "The office is close to the station.",
      },
      {
        question: "昨日（きのう）の天気（てんき）はどうでしたか。",
        questionEn: "What was the weather like yesterday?",
        contextRange: [4, 4],
        answerSentence: 4,
        choices: [
          "雨（あめ）でした",
          "晴（は）れでした",
          "雪（ゆき）でした",
          "曇（くも）りでした",
        ],
        choicesEn: ["It rained", "It was sunny", "It snowed", "It was cloudy"],
        answer: 0,
        requiresInference: false,
        note: "でも、昨日は雨でした。",
        noteEn: "But yesterday it rained.",
      },

      // ===== 3 inference / cause-effect =====
      {
        question: "田中（たなか）さんはなぜバスで行（い）きましたか。",
        questionEn: "Why did Tanaka go by bus?",
        contextRange: [4, 8],
        answerSentence: 7,
        choices: [
          "雨（あめ）でしたから",
          "車（くるま）がありませんでしたから",
          "歩（ある）きたくなかったから",
          "会社（かいしゃ）が遠（とお）いから",
        ],
        choicesEn: [
          "Because it rained",
          "Because he didn't have a car",
          "Because he didn't want to walk",
          "Because the office is far",
        ],
        answer: 0,
        requiresInference: true,
        note: "雨でしたから、バスで行きました。",
        noteEn:
          "Because it rained, he went by bus. (Sentence 4 → 7: cause → response)",
      },
      {
        question: "雨（あめ）の日（ひ）はどうして大変（たいへん）ですか。",
        questionEn: "Why are rainy days tough?",
        contextRange: [4, 6],
        answerSentence: 5,
        choices: [
          "歩（ある）くのが大変（たいへん）ですから",
          "バスが高（たか）いですから",
          "会社（かいしゃ）が遠（とお）いですから",
          "電車（でんしゃ）が遅（おそ）いですから",
        ],
        choicesEn: [
          "Because walking is tough",
          "Because the bus is expensive",
          "Because the office is far",
          "Because the train is slow",
        ],
        answer: 0,
        requiresInference: true,
        note: "雨の日は、歩くのが大変です。",
        noteEn:
          "On rainy days, walking is tough. (Cause stated directly, but requires reading past the rain fact.)",
      },
      {
        question:
          "田中（たなか）さんはなぜバスが便利（べんり）だと思（おも）いましたか。",
        questionEn: "Why did Tanaka think the bus was convenient?",
        contextRange: [7, 11],
        answerSentence: 11,
        choices: [
          "いつもより早（はや）く着（つ）いたから",
          "バスが安（やす）かったから",
          "雨（あめ）が止（や）んだから",
          "会社（かいしゃ）が近（ちか）くなったから",
        ],
        choicesEn: [
          "Because he arrived earlier than usual",
          "Because the bus was cheap",
          "Because the rain stopped",
          "Because the office got closer",
        ],
        answer: 0,
        requiresInference: true,
        note: "いつもは二十分かかりますが、今日は十分で着きました。だから便利だと思いました。",
        noteEn:
          "It usually takes 20 min, but today took 10. That's why he found it convenient. (Requires linking sentence 10 to sentence 11.)",
      },

      // ===== 2 sequence =====
      {
        question:
          "田中（たなか）さんは朝（あさ）ごはんを食（た）べてから何（なに）をしますか。",
        questionEn: "What does Tanaka do after eating breakfast?",
        contextRange: [1, 1],
        answerSentence: 1,
        choices: [
          "歯（は）を磨（みが）きます",
          "会社（かいしゃ）へ行（い）きます",
          "バスに乗（の）ります",
          "新聞（しんぶん）を読（よ）みます",
        ],
        choicesEn: [
          "He brushes his teeth",
          "He goes to the office",
          "He rides the bus",
          "He reads the newspaper",
        ],
        answer: 0,
        requiresInference: false,
        note: "朝ごはんを食べてから、歯を磨きます。",
        noteEn:
          "After breakfast, he brushes his teeth. (〜てから signals sequence.)",
      },
      {
        question:
          "田中（たなか）さんはバスで会社（かいしゃ）までどのくらいかかりましたか。",
        questionEn: "How long did it take Tanaka to get to the office by bus?",
        contextRange: [9, 10],
        answerSentence: 9,
        choices: [
          "十分（じゅっぷん）",
          "二十分（にじゅっぷん）",
          "三十分（さんじゅっぷん）",
          "一時間（いちじかん）",
        ],
        choicesEn: ["10 minutes", "20 minutes", "30 minutes", "1 hour"],
        answer: 0,
        requiresInference: false,
        note: "会社に十分で着きました。いつもは二十分かかります。",
        noteEn:
          "He arrived in 10 min. It usually takes 20. (Contrast test — 十分 vs 二十分.)",
      },

      // ===== 1 evaluative =====
      {
        question: "バスはどうでしたか。",
        questionEn: "How was the bus?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "少（すこ）し高（たか）かったですが、速（はや）かったです",
          "安（やす）くて速（はや）かったです",
          "高（たか）くて遅（おそ）かったです",
          "安（やす）かったですが遅（おそ）かったです",
        ],
        choicesEn: [
          "A little expensive, but fast",
          "Cheap and fast",
          "Expensive and slow",
          "Cheap but slow",
        ],
        answer: 0,
        requiresInference: false,
        note: "バスは少し高かったですが、速かったです。",
        noteEn:
          "The bus was a little expensive, but fast. (Tests が-contrast comprehension.)",
      },
    ],
  },
  // ============================================================
  // SPRINT 02 — Family & People
  // ============================================================
  {
    id: 2,
    title: "Sprint 02: マリアさんの家族",
    titleEn: "Sprint 02: Maria's Family",
    theme: "Family, People, Descriptions",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "マリア（まりあ）さんはブラジル（ぶらじる）から来（き）ました。",
        en: "Maria came from Brazil.",
      },
      {
        jp: "今（いま）、日本（にほん）の大学（だいがく）で英語（えいご）を勉強（べんきょう）しています。",
        en: "Now she is studying English at a Japanese university.",
      },
      {
        jp: "家族（かぞく）は五人（ごにん）です。",
        en: "Her family has five people.",
      },
      {
        jp: "父（ちち）と母（はは）と兄（あに）と妹（いもうと）とマリアさんです。",
        en: "Her father, mother, older brother, younger sister, and Maria.",
      },

      // Layer 2 — Complication
      {
        jp: "父（ちち）は医者（いしゃ）で、母（はは）は先生（せんせい）です。",
        en: "Her father is a doctor, and her mother is a teacher.",
      },
      {
        jp: "兄（あに）は東京（とうきょう）の会社（かいしゃ）で働（はたら）いています。",
        en: "Her older brother works at a company in Tokyo.",
      },
      {
        jp: "でも、兄（あに）は忙（いそが）しいですから、あまり家（いえ）に帰（かえ）りません。",
        en: "But he is busy, so he doesn't come home much.",
      },

      // Layer 3 — Response
      {
        jp: "それで、マリア（まりあ）さんは毎週（まいしゅう）兄（あに）に電話（でんわ）をかけます。",
        en: "So Maria calls her brother every week.",
      },
      {
        jp: "電話（でんわ）で、兄（あに）はいつも「元気（げんき）だよ」と言（い）います。",
        en: 'On the phone, her brother always says, "I\'m fine."',
      },

      // Layer 4 — Resolution
      {
        jp: "妹（いもうと）はまだ高校生（こうこうせい）で、ピアノ（ぴあの）が上手（じょうず）です。",
        en: "Her younger sister is still a high school student, and she is good at piano.",
      },
      {
        jp: "マリア（まりあ）さんは家族（かぞく）がとても好（す）きです。",
        en: "Maria loves her family very much.",
      },
      {
        jp: "来年（らいねん）、家族（かぞく）に会（あ）いにブラジル（ぶらじる）へ帰（かえ）ります。",
        en: "Next year, she will go back to Brazil to see her family.",
      },
    ],
    questions: [
      // direct × 3
      {
        question:
          "マリア（まりあ）さんの家族（かぞく）は何人（なんにん）ですか。",
        questionEn: "How many people are in Maria's family?",
        contextRange: [2, 3],
        answerSentence: 2,
        choices: [
          "五人（ごにん）",
          "四人（よにん）",
          "六人（ろくにん）",
          "三人（さんにん）",
        ],
        choicesEn: ["Five", "Four", "Six", "Three"],
        answer: 0,
        requiresInference: false,
        note: "家族は五人です。父と母と兄と妹とマリアさんです。",
        noteEn:
          "Five people: father, mother, older brother, younger sister, and Maria.",
      },
      {
        question:
          "マリア（まりあ）さんは今（いま）何（なに）を勉強（べんきょう）していますか。",
        questionEn: "What is Maria studying now?",
        contextRange: [1, 1],
        answerSentence: 1,
        choices: [
          "英語（えいご）",
          "日本語（にほんご）",
          "ブラジル語（ご）",
          "ピアノ（ぴあの）",
        ],
        choicesEn: ["English", "Japanese", "Brazilian Portuguese", "Piano"],
        answer: 0,
        requiresInference: false,
        note: "大学で英語を勉強しています。",
        noteEn: "She is studying English at university.",
      },
      {
        question:
          "マリア（まりあ）さんの父（ちち）の仕事（しごと）は何（なん）ですか。",
        questionEn: "What is Maria's father's job?",
        contextRange: [4, 4],
        answerSentence: 4,
        choices: [
          "医者（いしゃ）",
          "先生（せんせい）",
          "会社員（かいしゃいん）",
          "高校生（こうこうせい）",
        ],
        choicesEn: [
          "Doctor",
          "Teacher",
          "Office worker",
          "High school student",
        ],
        answer: 0,
        requiresInference: false,
        note: "父は医者で、母は先生です。",
        noteEn: "Father is a doctor; mother is a teacher.",
      },

      // inference × 3
      {
        question:
          "マリア（まりあ）さんの兄（あに）はなぜあまり家（いえ）に帰（かえ）りませんか。",
        questionEn: "Why doesn't Maria's older brother come home much?",
        contextRange: [5, 7],
        answerSentence: 6,
        choices: [
          "忙（いそが）しいですから",
          "東京（とうきょう）が嫌（きら）いですから",
          "家族（かぞく）が遠（とお）いですから",
          "医者（いしゃ）ですから",
        ],
        choicesEn: [
          "Because he's busy",
          "Because he dislikes Tokyo",
          "Because the family is far",
          "Because he's a doctor",
        ],
        answer: 0,
        requiresInference: true,
        note: "兄は忙しいですから、あまり家に帰りません。",
        noteEn:
          "Because he's busy, he rarely comes home. (Sentence 6 → 7: cause → effect)",
      },
      {
        question:
          "マリア（まりあ）さんはなぜ毎週（まいしゅう）兄（あに）に電話（でんわ）をかけますか。",
        questionEn: "Why does Maria call her older brother every week?",
        contextRange: [5, 8],
        answerSentence: 8,
        choices: [
          "兄（あに）があまり家（いえ）に帰（かえ）りませんから",
          "兄（あに）が忙（いそが）しくないですから",
          "電話（でんわ）が安（やす）いですから",
          "母（はは）に頼（たの）まれましたから",
        ],
        choicesEn: [
          "Because he doesn't come home much",
          "Because he isn't busy",
          "Because calls are cheap",
          "Because her mother asked her to",
        ],
        answer: 0,
        requiresInference: true,
        note: "兄はあまり帰りません。それで、マリアさんは毎週電話をかけます。",
        noteEn:
          "He rarely comes home. So she calls weekly. (Requires linking 6–7 to 8: それで = therefore.)",
      },
      {
        question:
          "マリア（まりあ）さんの妹（いもうと）はどんな人（ひと）ですか。",
        questionEn: "What kind of person is Maria's younger sister?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "高校生（こうこうせい）で、ピアノ（ぴあの）が上手（じょうず）です",
          "大学生（だいがくせい）で、英語（えいご）が上手（じょうず）です",
          "医者（いしゃ）で、忙（いそが）しいです",
          "会社員（かいしゃいん）で、東京（とうきょう）にいます",
        ],
        choicesEn: [
          "A high school student who is good at piano",
          "A university student who is good at English",
          "A doctor who is busy",
          "An office worker in Tokyo",
        ],
        answer: 0,
        requiresInference: false,
        note: "妹はまだ高校生で、ピアノが上手です。",
        noteEn: "She's still a high school student and good at piano.",
      },

      // sequence × 2
      {
        question:
          "マリア（まりあ）さんの兄（あに）は電話（でんわ）でいつも何（なに）と言（い）いますか。",
        questionEn: "What does Maria's brother always say on the phone?",
        contextRange: [8, 9],
        answerSentence: 9,
        choices: [
          "「元気（げんき）だよ」",
          "「忙（いそが）しいよ」",
          "「帰（かえ）るよ」",
          "「電話（でんわ）してね」",
        ],
        choicesEn: [
          '"I\'m fine"',
          '"I\'m busy"',
          '"I\'ll come home"',
          '"Call me"',
        ],
        answer: 0,
        requiresInference: false,
        note: "兄はいつも「元気だよ」と言います。",
        noteEn: 'He always says, "I\'m fine."',
      },
      {
        question:
          "マリア（まりあ）さんは来年（らいねん）何（なに）をしますか。",
        questionEn: "What will Maria do next year?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "家族（かぞく）に会（あ）いにブラジル（ぶらじる）へ帰（かえ）ります",
          "日本（にほん）で働（はたら）きます",
          "東京（とうきょう）へ行（い）きます",
          "大学（だいがく）を卒業（そつぎょう）します",
        ],
        choicesEn: [
          "Go back to Brazil to see her family",
          "Work in Japan",
          "Go to Tokyo",
          "Graduate from university",
        ],
        answer: 0,
        requiresInference: false,
        note: "来年、家族に会いにブラジルへ帰ります。",
        noteEn: "Next year she'll return to Brazil to see her family.",
      },

      // evaluative × 1
      {
        question:
          "マリア（まりあ）さんは家族（かぞく）についてどう思（おも）っていますか。",
        questionEn: "How does Maria feel about her family?",
        contextRange: [11, 12],
        answerSentence: 11,
        choices: [
          "家族（かぞく）がとても好（す）きです",
          "家族（かぞく）が少（すこ）し嫌（きら）いです",
          "家族（かぞく）に会（あ）いたくないです",
          "家族（かぞく）が遠（とお）くて寂（さび）しいです",
        ],
        choicesEn: [
          "She loves her family very much",
          "She dislikes her family a little",
          "She doesn't want to see her family",
          "Her family is far and she's lonely",
        ],
        answer: 0,
        requiresInference: false,
        note: "マリアさんは家族がとても好きです。",
        noteEn: "Maria loves her family very much.",
      },
    ],
  },

  // ============================================================
  // SPRINT 03 — Location, Direction, Transport
  // ============================================================
  {
    id: 3,
    title: "Sprint 03: 駅までの道",
    titleEn: "Sprint 03: The Way to the Station",
    theme: "Location, Directions, Transport",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "リー（りー）さんは駅（えき）の近（ちか）くに住（す）んでいます。",
        en: "Lee lives near the station.",
      },
      {
        jp: "でも、駅（えき）まで歩（ある）くと十五分（じゅうごふん）かかります。",
        en: "But walking to the station takes fifteen minutes.",
      },
      {
        jp: "今日（きょう）は友達（ともだち）と映画（えいが）を見（み）に行（い）きます。",
        en: "Today he's going to see a movie with a friend.",
      },

      // Layer 2 — Complication
      {
        jp: "映画（えいが）は十時（じゅうじ）に始（はじ）まります。",
        en: "The movie starts at 10.",
      },
      { jp: "今（いま）は九時（くじ）です。", en: "It's 9 now." },
      {
        jp: "でも、道（みち）が分（わ）かりません。",
        en: "But he doesn't know the way.",
      },
      {
        jp: "地図（ちず）を見（み）ながら歩（ある）きますが、迷（まよ）いました。",
        en: "He walks while looking at the map, but he gets lost.",
      },

      // Layer 3 — Response
      {
        jp: "交番（こうばん）でお巡（まわ）りさんに聞（き）きました。",
        en: "He asked a police officer at the police box.",
      },
      {
        jp: "「この道（みち）をまっすぐ行（い）って、次（つぎ）の角（かど）を右（みぎ）です。」",
        en: '"Go straight on this road and turn right at the next corner."',
      },
      {
        jp: "お巡（まわ）りさんは親切（しんせつ）に教（おし）えてくれました。",
        en: "The officer kindly explained.",
      },

      // Layer 4 — Resolution
      {
        jp: "リー（りー）さんは走（はし）って、五分（ごふん）で駅（えき）に着（つ）きました。",
        en: "Lee ran and arrived at the station in five minutes.",
      },
      {
        jp: "映画（えいが）に間（ま）に合（あ）って、とても嬉（うれ）しかったです。",
        en: "He made it to the movie and was very happy.",
      },
    ],
    questions: [
      // direct × 3
      {
        question: "リー（りー）さんの家（いえ）はどこにありますか。",
        questionEn: "Where is Lee's house?",
        contextRange: [0, 0],
        answerSentence: 0,
        choices: [
          "駅（えき）の近（ちか）く",
          "駅（えき）の中（なか）",
          "学校（がっこう）の前（まえ）",
          "交番（こうばん）の隣（となり）",
        ],
        choicesEn: [
          "Near the station",
          "Inside the station",
          "In front of the school",
          "Next to the police box",
        ],
        answer: 0,
        requiresInference: false,
        note: "リーさんは駅の近くに住んでいます。",
        noteEn: "Lee lives near the station.",
      },
      {
        question: "映画（えいが）は何時（なんじ）に始（はじ）まりますか。",
        questionEn: "What time does the movie start?",
        contextRange: [3, 3],
        answerSentence: 3,
        choices: [
          "十時（じゅうじ）",
          "九時（くじ）",
          "十一時（じゅういちじ）",
          "八時（はちじ）",
        ],
        choicesEn: ["10 o'clock", "9 o'clock", "11 o'clock", "8 o'clock"],
        answer: 0,
        requiresInference: false,
        note: "映画は十時に始まります。",
        noteEn: "The movie starts at 10.",
      },
      {
        question:
          "リー（りー）さんは誰（だれ）に道（みち）を聞（き）きましたか。",
        questionEn: "Who did Lee ask for directions?",
        contextRange: [7, 7],
        answerSentence: 7,
        choices: [
          "お巡（まわ）りさん",
          "友達（ともだち）",
          "駅員（えきいん）さん",
          "映画館（えいがかん）の人（ひと）",
        ],
        choicesEn: [
          "A police officer",
          "A friend",
          "A station attendant",
          "A movie theater employee",
        ],
        answer: 0,
        requiresInference: false,
        note: "交番でお巡りさんに聞きました。",
        noteEn: "He asked a police officer at the police box.",
      },

      // inference × 3
      {
        question:
          "リー（りー）さんはなぜ交番（こうばん）へ行（い）きましたか。",
        questionEn: "Why did Lee go to the police box?",
        contextRange: [3, 7],
        answerSentence: 6,
        choices: [
          "道（みち）が分（わ）かりませんでしたから",
          "映画（えいが）が嫌（きら）いでしたから",
          "友達（ともだち）が待（ま）っていましたから",
          "お巡（まわ）りさんに会（あ）いたかったから",
        ],
        choicesEn: [
          "Because he didn't know the way",
          "Because he disliked the movie",
          "Because his friend was waiting",
          "Because he wanted to meet an officer",
        ],
        answer: 0,
        requiresInference: true,
        note: "道が分かりませんでしたから、交番で聞きました。",
        noteEn:
          "He didn't know the way, so he asked at the police box. (Sentences 5–6 → 7: cause → response)",
      },
      {
        question: "リー（りー）さんはなぜ走（はし）りましたか。",
        questionEn: "Why did Lee run?",
        contextRange: [4, 10],
        answerSentence: 10,
        choices: [
          "映画（えいが）に間（ま）に合（あ）いたかったから",
          "雨（あめ）が降（ふ）っていましたから",
          "お巡（まわ）りさんが走（はし）っていましたから",
          "家（いえ）に帰（かえ）りたかったから",
        ],
        choicesEn: [
          "Because he wanted to make it to the movie",
          "Because it was raining",
          "Because the officer was running",
          "Because he wanted to go home",
        ],
        answer: 0,
        requiresInference: true,
        note: "映画は十時、今は九時、道に迷いました。だから走りました。",
        noteEn:
          "Movie at 10, it's 9, and he got lost — so he ran. (Requires linking 4–6 to 10.)",
      },
      {
        question: "お巡（まわ）りさんはどんな人（ひと）でしたか。",
        questionEn: "What kind of person was the police officer?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "親切（しんせつ）な人（ひと）",
          "忙（いそが）しい人（ひと）",
          "厳（きび）しい人（ひと）",
          "静（しず）かな人（ひと）",
        ],
        choicesEn: [
          "A kind person",
          "A busy person",
          "A strict person",
          "A quiet person",
        ],
        answer: 0,
        requiresInference: false,
        note: "お巡りさんは親切に教えてくれました。",
        noteEn: "The officer kindly explained.",
      },

      // sequence × 2
      {
        question: "お巡（まわ）りさんはどう行（い）けと言（い）いましたか。",
        questionEn: "How did the officer say to go?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "この道（みち）をまっすぐ行（い）って、次（つぎ）の角（かど）を右（みぎ）です",
          "この道（みち）を左（ひだり）に曲（ま）がってください",
          "駅（えき）の前（まえ）で止（と）まってください",
          "交番（こうばん）の後（うし）ろを歩（ある）いてください",
        ],
        choicesEn: [
          "Go straight on this road, turn right at the next corner",
          "Turn left on this road",
          "Stop in front of the station",
          "Walk behind the police box",
        ],
        answer: 0,
        requiresInference: false,
        note: "「この道をまっすぐ行って、次の角を右です。」",
        noteEn: "Go straight, turn right at the next corner.",
      },
      {
        question: "リー（りー）さんは駅（えき）までどのくらいかかりましたか。",
        questionEn: "How long did it take Lee to reach the station?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "五分（ごふん）",
          "十分（じゅっぷん）",
          "十五分（じゅうごふん）",
          "二十分（にじゅっぷん）",
        ],
        choicesEn: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
        answer: 0,
        requiresInference: false,
        note: "走って、五分で駅に着きました。",
        noteEn: "He ran and arrived in five minutes.",
      },

      // evaluative × 1
      {
        question: "リー（りー）さんの気持（きも）ちはどうでしたか。",
        questionEn: "How did Lee feel?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "とても嬉（うれ）しかったです",
          "とても悲（かな）しかったです",
          "とても眠（ねむ）かったです",
          "とても怒（おこ）っていました",
        ],
        choicesEn: ["Very happy", "Very sad", "Very sleepy", "Very angry"],
        answer: 0,
        requiresInference: false,
        note: "映画に間に合って、とても嬉しかったです。",
        noteEn: "He made it to the movie and was very happy.",
      },
    ],
  },

  // ============================================================
  // SPRINT 04 — Food, Shopping, Quantities
  // ============================================================
  {
    id: 4,
    title: "Sprint 04: スーパーで",
    titleEn: "Sprint 04: At the Supermarket",
    theme: "Food, Shopping, Quantities, Counters",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "土曜日（どようび）、ユキ（ゆき）さんはスーパー（すーぱー）へ行（い）きました。",
        en: "On Saturday, Yuki went to the supermarket.",
      },
      {
        jp: "夜（よる）、友達（ともだち）が家（いえ）に来（き）ますから、料理（りょうり）をします。",
        en: "Friends are coming over at night, so she'll cook.",
      },
      {
        jp: "メニュー（めにゅー）はカレー（かれー）です。",
        en: "The menu is curry.",
      },

      // Layer 2 — Complication
      {
        jp: "スーパー（すーぱー）で肉（にく）を三百（さんびゃく）グラム（ぐらむ）と、野菜（やさい）を五（いつ）つ買（か）いました。",
        en: "At the supermarket she bought 300 grams of meat and five vegetables.",
      },
      {
        jp: "それから、りんご（りんご）も三（みっ）つ買（か）いました。",
        en: "She also bought three apples.",
      },
      {
        jp: "でも、レジ（れじ）でお金（かね）が足（た）りませんでした。",
        en: "But at the register, she didn't have enough money.",
      },
      {
        jp: "財布（さいふ）にお金（かね）が千円（せんえん）しかありませんでした。",
        en: "She only had 1,000 yen in her wallet.",
      },

      // Layer 3 — Response
      {
        jp: "それで、店員（てんいん）さんにりんご（りんご）を一（ひと）つ返（かえ）しました。",
        en: "So she returned one apple to the clerk.",
      },
      {
        jp: "店員（てんいん）さんは「クレジットカード（くれじっとかーど）は使（つか）えますよ」と言（い）いました。",
        en: 'The clerk said, "You can use a credit card."',
      },
      {
        jp: "ユキ（ゆき）さんはカード（かーど）で払（はら）いました。",
        en: "Yuki paid by card.",
      },

      // Layer 4 — Resolution
      {
        jp: "家（いえ）に帰（かえ）って、カレー（かれー）を作（つく）りました。",
        en: "She went home and made curry.",
      },
      {
        jp: "友達（ともだち）は「美味（おい）しい！」と言（い）って、たくさん食（た）べました。",
        en: 'Her friends said, "Delicious!" and ate a lot.',
      },
    ],
    questions: [
      // direct × 3
      {
        question: "ユキ（ゆき）さんは何（なに）を作（つく）りますか。",
        questionEn: "What will Yuki make?",
        contextRange: [2, 2],
        answerSentence: 2,
        choices: [
          "カレー（かれー）",
          "寿司（すし）",
          "ラーメン（らーめん）",
          "サラダ（さらだ）",
        ],
        choicesEn: ["Curry", "Sushi", "Ramen", "Salad"],
        answer: 0,
        requiresInference: false,
        note: "メニューはカレーです。",
        noteEn: "The menu is curry.",
      },
      {
        question:
          "ユキ（ゆき）さんは肉（にく）をどのくらい買（か）いましたか。",
        questionEn: "How much meat did Yuki buy?",
        contextRange: [3, 3],
        answerSentence: 3,
        choices: [
          "三百（さんびゃく）グラム（ぐらむ）",
          "五百（ごひゃく）グラム（ぐらむ）",
          "二百（にひゃく）グラム（ぐらむ）",
          "一（いっ）キロ（きろ）",
        ],
        choicesEn: ["300 grams", "500 grams", "200 grams", "1 kilogram"],
        answer: 0,
        requiresInference: false,
        note: "肉を三百グラム買いました。",
        noteEn: "She bought 300 grams of meat.",
      },
      {
        question: "ユキ（ゆき）さんはどうやって払（はら）いましたか。",
        questionEn: "How did Yuki pay?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "カード（かーど）で",
          "現金（げんきん）で",
          "スマホ（すまほ）で",
          "友達（ともだち）に",
        ],
        choicesEn: ["By card", "In cash", "By smartphone", "Her friend paid"],
        answer: 0,
        requiresInference: false,
        note: "ユキさんはカードで払いました。",
        noteEn: "Yuki paid by card.",
      },

      // inference × 3
      {
        question:
          "ユキ（ゆき）さんはなぜりんご（りんご）を一（ひと）つ返（かえ）しましたか。",
        questionEn: "Why did Yuki return one apple?",
        contextRange: [5, 7],
        answerSentence: 6,
        choices: [
          "お金（かね）が足（た）りませんでしたから",
          "りんご（りんご）が嫌（きら）いでしたから",
          "りんご（りんご）が古（ふる）かったから",
          "店員（てんいん）さんに頼（たの）まれましたから",
        ],
        choicesEn: [
          "Because she didn't have enough money",
          "Because she dislikes apples",
          "Because the apples were old",
          "Because the clerk asked her to",
        ],
        answer: 0,
        requiresInference: true,
        note: "お金が足りませんでした。財布には千円しかありませんでした。だから一つ返しました。",
        noteEn:
          "She was short on money. Only 1,000 yen in her wallet. So she returned one. (Sentences 5–6 → 7: cause → response)",
      },
      {
        question:
          "ユキ（ゆき）さんはなぜカード（かーど）で払（はら）いましたか。",
        questionEn: "Why did Yuki pay by card?",
        contextRange: [5, 9],
        answerSentence: 9,
        choices: [
          "店員（てんいん）さんがカード（かーど）が使（つか）えると言（い）いましたから",
          "現金（げんきん）が好（す）きでしたから",
          "カード（かーど）のほうが安（やす）いですから",
          "友達（ともだち）がカード（かーど）をくれましたから",
        ],
        choicesEn: [
          "Because the clerk said she could use a card",
          "Because she likes cash",
          "Because cards are cheaper",
          "Because her friend gave her a card",
        ],
        answer: 0,
        requiresInference: true,
        note: "店員さんは「カードは使えますよ」と言いました。それで、カードで払いました。",
        noteEn:
          "The clerk said cards are accepted, so she paid by card. (Sentence 8 → 9: cause → response)",
      },
      {
        question:
          "ユキ（ゆき）さんは全部（ぜんぶ）で何（なに）を買（か）きましたか。",
        questionEn: "What did Yuki buy in total?",
        contextRange: [3, 5],
        answerSentence: 4,
        choices: [
          "肉（にく）と野菜（やさい）とりんご（りんご）",
          "肉（にく）と果物（くだもの）だけ",
          "野菜（やさい）とお茶（ちゃ）とりんご（りんご）",
          "肉（にく）とカレー（かれー）のルー（るー）",
        ],
        choicesEn: [
          "Meat, vegetables, and apples",
          "Only meat and fruit",
          "Vegetables, tea, and apples",
          "Meat and curry roux",
        ],
        answer: 0,
        requiresInference: true,
        note: "肉と野菜を五つ、それからりんごも三つ買いました。",
        noteEn:
          "Meat, five vegetables, and three apples. (Requires combining 3–4.)",
      },

      // sequence × 2
      {
        question:
          "ユキ（ゆき）さんは店員（てんいん）さんに何（なに）を返（かえ）しましたか。",
        questionEn: "What did Yuki return to the clerk?",
        contextRange: [7, 7],
        answerSentence: 7,
        choices: [
          "りんご（りんご）を一（ひと）つ",
          "肉（にく）を三百（さんびゃく）グラム（ぐらむ）",
          "野菜（やさい）を五（いつ）つ",
          "カレー（かれー）を一（ひと）つ",
        ],
        choicesEn: [
          "One apple",
          "300 grams of meat",
          "Five vegetables",
          "One curry",
        ],
        answer: 0,
        requiresInference: false,
        note: "店員さんにりんごを一つ返しました。",
        noteEn: "She returned one apple.",
      },
      {
        question:
          "ユキ（ゆき）さんは家（いえ）に帰（かえ）ってから何（なに）をしましたか。",
        questionEn: "What did Yuki do after going home?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "カレー（かれー）を作（つく）りました",
          "友達（ともだち）に電話（でんわ）をかけました",
          "すぐ寝（ね）ました",
          "スーパー（すーぱー）へ戻（もど）りました",
        ],
        choicesEn: [
          "Made curry",
          "Called her friend",
          "Went straight to bed",
          "Went back to the supermarket",
        ],
        answer: 0,
        requiresInference: false,
        note: "家に帰って、カレーを作りました。",
        noteEn: "She went home and made curry.",
      },

      // evaluative × 1
      {
        question:
          "友達（ともだち）はカレー（かれー）についてどう言（い）いましたか。",
        questionEn: "What did the friends say about the curry?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "「美味（おい）しい！」",
          "「辛（から）い！」",
          "「冷（つめ）たい！」",
          "「高（たか）い！」",
        ],
        choicesEn: ['"Delicious!"', '"Spicy!"', '"Cold!"', '"Expensive!"'],
        answer: 0,
        requiresInference: false,
        note: "友達は「美味しい！」と言って、たくさん食べました。",
        noteEn: 'They said, "Delicious!" and ate a lot.',
      },
    ],
  },

  // ============================================================
  // SPRINT 05 — Weather, Adjectives, Feelings
  // ============================================================
  {
    id: 5,
    title: "Sprint 05: ピクニックの日",
    titleEn: "Sprint 05: Picnic Day",
    theme: "Weather, Adjectives, Feelings",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "日曜日（にちようび）、ケン（けん）さんと友達（ともだち）は公園（こうえん）でピクニック（ぴくにっく）をしました。",
        en: "On Sunday, Ken and his friends had a picnic in the park.",
      },
      {
        jp: "朝（あさ）はとてもいい天気（てんき）でした。",
        en: "The morning weather was very nice.",
      },
      {
        jp: "空（そら）は青（あお）くて、風（かぜ）が気持（きも）ちよかったです。",
        en: "The sky was blue and the wind felt good.",
      },

      // Layer 2 — Complication
      {
        jp: "でも、昼（ひる）ごろ、急（きゅう）に空（そら）が暗（くら）くなりました。",
        en: "But around noon, the sky suddenly got dark.",
      },
      {
        jp: "天気予報（てんきよほう）によると、午後（ごご）は雨（あめ）が降（ふ）るそうです。",
        en: "According to the forecast, it would rain in the afternoon.",
      },
      {
        jp: "それに、風（かぜ）も強（つよ）くなりました。",
        en: "Also, the wind got stronger.",
      },

      // Layer 3 — Response
      {
        jp: "それで、ケン（けん）さんたちは急（いそ）いで荷物（にもつ）を片付（かたづ）けました。",
        en: "So Ken and his friends hurried to pack up their things.",
      },
      {
        jp: "そして、近（ちか）くのカフェ（かふぇ）に入（はい）りました。",
        en: "And they went into a nearby café.",
      },
      {
        jp: "カフェ（かふぇ）で温（あたた）かいコーヒー（こーひー）を飲（の）みながら、話（はな）しました。",
        en: "They talked while drinking warm coffee at the café.",
      },

      // Layer 4 — Resolution
      {
        jp: "外（そと）は寒（さむ）かったですが、カフェ（かふぇ）の中（なか）は暖（あたた）かかったです。",
        en: "Outside was cold, but inside the café was warm.",
      },
      {
        jp: "ケン（けん）さんは「ピクニック（ぴくにっく）はできなかったけど、楽（たの）しかった」と言（い）いました。",
        en: 'Ken said, "We couldn\'t have a picnic, but it was fun."',
      },
    ],
    questions: [
      // direct × 3
      {
        question: "朝（あさ）の天気（てんき）はどうでしたか。",
        questionEn: "How was the morning weather?",
        contextRange: [1, 2],
        answerSentence: 1,
        choices: [
          "とてもいい天気（てんき）でした",
          "雨（あめ）でした",
          "雪（ゆき）でした",
          "とても寒（さむ）かったです",
        ],
        choicesEn: ["Very nice", "Rainy", "Snowy", "Very cold"],
        answer: 0,
        requiresInference: false,
        note: "朝はとてもいい天気でした。",
        noteEn: "The morning was very nice.",
      },
      {
        question: "午後（ごご）は何（なに）が降（ふ）るそうですか。",
        questionEn: "What was forecast to fall in the afternoon?",
        contextRange: [4, 4],
        answerSentence: 4,
        choices: ["雨（あめ）", "雪（ゆき）", "葉（は）", "ゴミ（ごみ）"],
        choicesEn: ["Rain", "Snow", "Leaves", "Trash"],
        answer: 0,
        requiresInference: false,
        note: "天気予報によると、午後は雨が降るそうです。",
        noteEn: "According to the forecast, it would rain in the afternoon.",
      },
      {
        question: "ケン（けん）さんたちはどこに入（はい）りましたか。",
        questionEn: "Where did Ken and his friends go in?",
        contextRange: [7, 7],
        answerSentence: 7,
        choices: [
          "近（ちか）くのカフェ（かふぇ）",
          "公園（こうえん）のベンチ（べんち）",
          "家（いえ）",
          "レストラン（れすとらん）",
        ],
        choicesEn: ["A nearby café", "A park bench", "Home", "A restaurant"],
        answer: 0,
        requiresInference: false,
        note: "近くのカフェに入りました。",
        noteEn: "They went into a nearby café.",
      },

      // inference × 3
      {
        question:
          "ケン（けん）さんたちはなぜ急（いそ）いで荷物（にもつ）を片付（かたづ）けましたか。",
        questionEn: "Why did Ken and his friends hurry to pack up?",
        contextRange: [3, 6],
        answerSentence: 5,
        choices: [
          "雨（あめ）が降（ふ）りそうでしたから",
          "公園（こうえん）が閉（し）まりましたから",
          "友達（ともだち）が帰（かえ）りましたから",
          "お腹（なか）が空（す）きましたから",
        ],
        choicesEn: [
          "Because it looked like it would rain",
          "Because the park closed",
          "Because a friend went home",
          "Because they were hungry",
        ],
        answer: 0,
        requiresInference: true,
        note: "空が暗くなって、雨が降るそうで、風も強くなりました。だから急いで片付けました。",
        noteEn:
          "The sky darkened, rain was forecast, and the wind picked up — so they hurried. (Sentences 3–5 → 6: cause → response)",
      },
      {
        question:
          "ケン（けん）さんたちはなぜカフェ（かふぇ）に入（はい）りましたか。",
        questionEn: "Why did Ken and his friends go into the café?",
        contextRange: [3, 7],
        answerSentence: 7,
        choices: [
          "雨（あめ）が降（ふ）りそうでしたから",
          "コーヒー（こーひー）が飲（の）みたかったから",
          "友達（ともだち）が待（ま）っていましたから",
          "公園（こうえん）が寒（さむ）かったから",
        ],
        choicesEn: [
          "Because it looked like it would rain",
          "Because they wanted coffee",
          "Because a friend was waiting",
          "Because the park was cold",
        ],
        answer: 0,
        requiresInference: true,
        note: "天気が悪くなりました。それで、近くのカフェに入りました。",
        noteEn:
          "The weather turned bad, so they went into a nearby café. (Sentences 3–6 → 7)",
      },
      {
        question: "カフェ（かふぇ）の中（なか）はどうでしたか。",
        questionEn: "How was it inside the café?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "暖（あたた）かかったです",
          "寒（さむ）かったです",
          "暑（あつ）かったです",
          "暗（くら）かったです",
        ],
        choicesEn: ["Warm", "Cold", "Hot", "Dark"],
        answer: 0,
        requiresInference: false,
        note: "外は寒かったですが、カフェの中は暖かかったです。",
        noteEn: "It was cold outside, but warm inside the café.",
      },

      // sequence × 2
      {
        question:
          "ケン（けん）さんたちは荷物（にもつ）を片付（かたづ）けてから何（なに）をしましたか。",
        questionEn: "What did Ken and his friends do after packing up?",
        contextRange: [6, 7],
        answerSentence: 7,
        choices: [
          "近（ちか）くのカフェ（かふぇ）に入（はい）りました",
          "家（いえ）に帰（かえ）りました",
          "公園（こうえん）で遊（あそ）びました",
          "写真（しゃしん）を撮（と）りました",
        ],
        choicesEn: [
          "Went into a nearby café",
          "Went home",
          "Played in the park",
          "Took photos",
        ],
        answer: 0,
        requiresInference: false,
        note: "急いで片付けて、そして近くのカフェに入りました。",
        noteEn: "They packed up, then went into a nearby café.",
      },
      {
        question:
          "ケン（けん）さんたちはカフェ（かふぇ）で何（なに）をしましたか。",
        questionEn: "What did they do at the café?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "コーヒー（こーひー）を飲（の）みながら話（はな）しました",
          "昼（ひる）ごはんを食（た）べました",
          "映画（えいが）を見（み）ました",
          "勉強（べんきょう）しました",
        ],
        choicesEn: [
          "Talked while drinking coffee",
          "Ate lunch",
          "Watched a movie",
          "Studied",
        ],
        answer: 0,
        requiresInference: false,
        note: "カフェで温かいコーヒーを飲みながら、話しました。",
        noteEn: "They talked while drinking warm coffee.",
      },

      // evaluative × 1
      {
        question:
          "ケン（けん）さんはピクニック（ぴくにっく）についてどう思（おも）いましたか。",
        questionEn: "How did Ken feel about the picnic?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "できなかったけど、楽（たの）しかった",
          "できなくて、とても悲（かな）しかった",
          "できて、とても嬉（うれ）しかった",
          "つまらなかった",
        ],
        choicesEn: [
          "It didn't happen, but it was fun",
          "It didn't happen, and he was very sad",
          "It happened, and he was very happy",
          "It was boring",
        ],
        answer: 0,
        requiresInference: false,
        note: "「ピクニックはできなかったけど、楽しかった」と言いました。",
        noteEn: 'He said, "We couldn\'t have a picnic, but it was fun."',
      },
    ],
  },

  // ============================================================
  // SPRINT 06 — Hobbies, Giving/Receiving
  // ============================================================
  {
    id: 6,
    title: "Sprint 06: 誕生日プレゼント",
    titleEn: "Sprint 06: A Birthday Present",
    theme: "Hobbies, Giving/Receiving",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "来週（らいしゅう）の水曜日（すいようび）は、サラ（さら）さんの誕生日（たんじょうび）です。",
        en: "Next Wednesday is Sarah's birthday.",
      },
      {
        jp: "サラ（さら）さんの趣味（しゅみ）は写真（しゃしん）を撮（と）ることです。",
        en: "Sarah's hobby is taking photos.",
      },
      {
        jp: "それに、日本（にほん）の文化（ぶんか）も大好（だいす）きです。",
        en: "She also loves Japanese culture.",
      },

      // Layer 2 — Complication
      {
        jp: "友達（ともだち）のアレックス（あれっくす）さんは、プレゼント（ぷれぜんと）を何（なに）にしようか考（かんが）えています。",
        en: "Her friend Alex is thinking about what to get as a present.",
      },
      {
        jp: "カメラ（かめら）は高（たか）すぎます。",
        en: "A camera is too expensive.",
      },
      {
        jp: "お菓子（かし）はありきたりです。",
        en: "Sweets are too ordinary.",
      },

      // Layer 3 — Response
      {
        jp: "それで、アレックス（あれっくす）さんは本屋（ほんや）へ行（い）きました。",
        en: "So Alex went to a bookstore.",
      },
      {
        jp: "写真（しゃしん）の技術（ぎじゅつ）の本（ほん）を見（み）つけました。",
        en: "He found a book on photography technique.",
      },
      {
        jp: "その本（ほん）は千五百円（せんごひゃくえん）でした。",
        en: "The book was 1,500 yen.",
      },
      {
        jp: "アレックス（あれっくす）さんはその本（ほん）を買（か）って、サラ（さら）さんにあげました。",
        en: "Alex bought the book and gave it to Sarah.",
      },

      // Layer 4 — Resolution
      {
        jp: "サラ（さら）さんは「わあ、ありがとう！ずっと欲（ほ）しかった本（ほん）です」と言（い）いました。",
        en: 'Sarah said, "Wow, thank you! I\'ve wanted this book for a long time."',
      },
      {
        jp: "アレックス（あれっくす）さんはとても嬉（うれ）しそうでした。",
        en: "Alex looked very happy.",
      },
    ],
    questions: [
      // direct × 3
      {
        question: "サラ（さら）さんの誕生日（たんじょうび）はいつですか。",
        questionEn: "When is Sarah's birthday?",
        contextRange: [0, 0],
        answerSentence: 0,
        choices: [
          "来週（らいしゅう）の水曜日（すいようび）",
          "今週（こんしゅう）の金曜日（きんようび）",
          "来月（らいげつ）の月曜日（げつようび）",
          "今日（きょう）",
        ],
        choicesEn: [
          "Next Wednesday",
          "This Friday",
          "Next month's Monday",
          "Today",
        ],
        answer: 0,
        requiresInference: false,
        note: "来週の水曜日は、サラさんの誕生日です。",
        noteEn: "Next Wednesday is Sarah's birthday.",
      },
      {
        question: "サラ（さら）さんの趣味（しゅみ）は何（なん）ですか。",
        questionEn: "What is Sarah's hobby?",
        contextRange: [1, 1],
        answerSentence: 1,
        choices: [
          "写真（しゃしん）を撮（と）ること",
          "料理（りょうり）をすること",
          "音楽（おんがく）を聞（き）くこと",
          "本（ほん）を読（よ）むこと",
        ],
        choicesEn: [
          "Taking photos",
          "Cooking",
          "Listening to music",
          "Reading books",
        ],
        answer: 0,
        requiresInference: false,
        note: "サラさんの趣味は写真を撮ることです。",
        noteEn: "Sarah's hobby is taking photos.",
      },
      {
        question:
          "アレックス（あれっくす）さんはプレゼント（ぷれぜんと）をいくらで買（か）いましたか。",
        questionEn: "How much did Alex pay for the present?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "千五百円（せんごひゃくえん）",
          "千円（せんえん）",
          "二千円（にせんえん）",
          "五百円（ごひゃくえん）",
        ],
        choicesEn: ["1,500 yen", "1,000 yen", "2,000 yen", "500 yen"],
        answer: 0,
        requiresInference: false,
        note: "その本は千五百円でした。",
        noteEn: "The book was 1,500 yen.",
      },

      // inference × 3
      {
        question:
          "アレックス（あれっくす）さんはなぜカメラ（かめら）を買（か）いませんでしたか。",
        questionEn: "Why didn't Alex buy a camera?",
        contextRange: [3, 4],
        answerSentence: 4,
        // ============ CONTINUATION of Sprint 06 (from where it was cut off) ============
        choices: [
          "高（たか）すぎますから",
          "カメラ（かめら）が嫌（きら）いですから",
          "店（みせ）にカメラ（かめら）がありませんでしたから",
          "サラ（さら）さんはカメラ（かめら）を持（も）っていますから",
        ],
        choicesEn: [
          "Because it's too expensive",
          "Because he dislikes cameras",
          "Because the store had no cameras",
          "Because Sarah already has a camera",
        ],
        answer: 0,
        requiresInference: true,
        note: "カメラは高すぎます。だから、カメラを買いませんでした。",
        noteEn:
          "The camera was too expensive, so he didn't buy it. (Sentence 4: cause → response)",
      },
      {
        question:
          "アレックス（あれっくす）さんはなぜ写真（しゃしん）の本（ほん）を選（えら）びましたか。",
        questionEn: "Why did Alex choose the photography book?",
        contextRange: [1, 7],
        answerSentence: 7,
        choices: [
          "サラ（さら）さんの趣味（しゅみ）が写真（しゃしん）ですから",
          "本（ほん）が安（やす）かったから",
          "自分（じぶん）が欲（ほ）しかったから",
          "店員（てんいん）さんに勧（すす）められましたから",
        ],
        choicesEn: [
          "Because Sarah's hobby is photography",
          "Because the book was cheap",
          "Because he wanted it himself",
          "Because the clerk recommended it",
        ],
        answer: 0,
        requiresInference: true,
        note: "サラさんの趣味は写真を撮ることです。だから、写真の技術の本を買いました。",
        noteEn:
          "Sarah's hobby is photography, so he bought a photography book. (Sentence 1 → 7: cause → response)",
      },
      {
        question:
          "サラ（さら）さんはその本（ほん）についてどう言（い）いましたか。",
        questionEn: "What did Sarah say about the book?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "「ずっと欲（ほ）しかった本（ほん）です」",
          "「もう持（も）っています」",
          "「難（むずか）しすぎます」",
          "「高（たか）すぎます」",
        ],
        choicesEn: [
          '"I\'ve wanted this book for a long time"',
          '"I already have it"',
          '"It\'s too difficult"',
          '"It\'s too expensive"',
        ],
        answer: 0,
        requiresInference: false,
        note: "サラさんは「ずっと欲しかった本です」と言いました。",
        noteEn: 'Sarah said, "I\'ve wanted this book for a long time."',
      },
      // sequence × 2
      {
        question:
          "アレックス（あれっくす）さんは本屋（ほんや）で何（なに）をしましたか。",
        questionEn: "What did Alex do at the bookstore?",
        contextRange: [6, 8],
        answerSentence: 7,
        choices: [
          "写真（しゃしん）の技術（ぎじゅつ）の本（ほん）を見（み）つけました",
          "カメラ（かめら）を買（か）いました",
          "お菓子（かし）を買（か）いました",
          "サラ（さら）さんに電話（でんわ）をかけました",
        ],
        choicesEn: [
          "He found a photography technique book",
          "He bought a camera",
          "He bought sweets",
          "He called Sarah",
        ],
        answer: 0,
        requiresInference: false,
        note: "本屋で写真の技術の本を見つけました。",
        noteEn: "He found a photography technique book at the bookstore.",
      },
      {
        question:
          "アレックス（あれっくす）さんは本（ほん）を買（か）ってから何（なに）をしましたか。",
        questionEn: "What did Alex do after buying the book?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "サラ（さら）さんにあげました",
          "自分（じぶん）で読（よ）みました",
          "家（いえ）に置（お）きました",
          "店（みせ）に返（かえ）しました",
        ],
        choicesEn: [
          "He gave it to Sarah",
          "He read it himself",
          "He left it at home",
          "He returned it to the store",
        ],
        answer: 0,
        requiresInference: false,
        note: "本を買って、サラさんにあげました。",
        noteEn: "He bought the book and gave it to Sarah.",
      },
      // evaluative × 1
      {
        question:
          "アレックス（あれっくす）さんの気持（きも）ちはどうでしたか。",
        questionEn: "How did Alex feel?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "とても嬉（うれ）しそうでした",
          "とても悲（かな）しそうでした",
          "とても怒（おこ）っていました",
          "とても疲（つか）れていました",
        ],
        choicesEn: [
          "He looked very happy",
          "He looked very sad",
          "He was very angry",
          "He was very tired",
        ],
        answer: 0,
        requiresInference: false,
        note: "アレックスさんはとても嬉しそうでした。",
        noteEn: "Alex looked very happy.",
      },
    ],
  },

  // ============================================================
  // SPRINT 07 — School, Study, Plans
  // ============================================================
  {
    id: 7,
    title: "Sprint 07: 日本語のテスト",
    titleEn: "Sprint 07: The Japanese Test",
    theme: "School, Study, Plans, Ability",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "ミゲル（みげる）さんは日本語（にほんご）の学校（がっこう）に通（かよ）っています。",
        en: "Miguel attends a Japanese language school.",
      },
      {
        jp: "来月（らいげつ）、日本語（にほんご）のテストがあります。",
        en: "Next month there is a Japanese test.",
      },
      {
        jp: "テストは漢字（かんじ）と文法（ぶんぽう）と聴解（ちょうかい）です。",
        en: "The test covers kanji, grammar, and listening.",
      },

      // Layer 2 — Complication
      {
        jp: "ミゲル（みげる）さんは漢字（かんじ）が苦手（にがて）です。",
        en: "Miguel is weak at kanji.",
      },
      {
        jp: "それに、漢字（かんじ）を覚（おぼ）えるのに時間（じかん）がかかります。",
        en: "Also, it takes him time to memorize kanji.",
      },
      {
        jp: "毎日（まいにち）仕事（しごと）がありますから、勉強（べんきょう）する時間（じかん）が少（すく）ないです。",
        en: "He has work every day, so he has little time to study.",
      },

      // Layer 3 — Response
      {
        jp: "それで、ミゲル（みげる）さんは毎朝（まいあさ）一時間（いちじかん）、漢字（かんじ）を練習（れんしゅう）することにしました。",
        en: "So Miguel decided to practice kanji for one hour every morning.",
      },
      {
        jp: "友達（ともだち）のリン（りん）さんは、いい漢字（かんじ）のアプリ（あぷり）を教（おし）えてくれました。",
        en: "His friend Lin told him about a good kanji app.",
      },
      {
        jp: "ミゲル（みげる）さんはアプリ（あぷり）で毎日（まいにち）十（じゅう）の漢字（かんじ）を覚（おぼ）えています。",
        en: "Miguel memorizes ten kanji every day with the app.",
      },

      // Layer 4 — Resolution
      {
        jp: "三週間（さんしゅうかん）で、百（ひゃく）以上の漢字（かんじ）を覚（おぼ）えました。",
        en: "In three weeks, he memorized over a hundred kanji.",
      },
      {
        jp: "ミゲル（みげる）さんは「今（いま）は漢字（かんじ）が少（すこ）し楽（たの）しいです」と言（い）いました。",
        en: 'Miguel said, "Now kanji is a little fun."',
      },
    ],
    questions: [
      // direct × 3
      {
        question: "ミゲル（みげる）さんは何（なに）が苦手（にがて）ですか。",
        questionEn: "What is Miguel weak at?",
        contextRange: [3, 3],
        answerSentence: 3,
        choices: [
          "漢字（かんじ）",
          "文法（ぶんぽう）",
          "聴解（ちょうかい）",
          "会話（かいわ）",
        ],
        choicesEn: ["Kanji", "Grammar", "Listening", "Conversation"],
        answer: 0,
        requiresInference: false,
        note: "ミゲルさんは漢字が苦手です。",
        noteEn: "Miguel is weak at kanji.",
      },
      {
        question: "テストはいつありますか。",
        questionEn: "When is the test?",
        contextRange: [1, 1],
        answerSentence: 1,
        choices: [
          "来月（らいげつ）",
          "来週（らいしゅう）",
          "今日（きょう）",
          "来年（らいねん）",
        ],
        choicesEn: ["Next month", "Next week", "Today", "Next year"],
        answer: 0,
        requiresInference: false,
        note: "来月、日本語のテストがあります。",
        noteEn: "Next month there is a Japanese test.",
      },
      {
        question:
          "リン（りん）さんはミゲル（みげる）さんに何（なに）を教（おし）えてくれましたか。",
        questionEn: "What did Lin tell Miguel about?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "いい漢字（かんじ）のアプリ（あぷり）",
          "いい本（ほん）",
          "いい先生（せんせい）",
          "いい学校（がっこう）",
        ],
        choicesEn: [
          "A good kanji app",
          "A good book",
          "A good teacher",
          "A good school",
        ],
        answer: 0,
        requiresInference: false,
        note: "リンさんはいい漢字のアプリを教えてくれました。",
        noteEn: "Lin told him about a good kanji app.",
      },

      // inference × 3
      {
        question:
          "ミゲル（みげる）さんはなぜ勉強（べんきょう）する時間（じかん）が少（すく）ないですか。",
        questionEn: "Why does Miguel have little time to study?",
        contextRange: [5, 5],
        answerSentence: 5,
        choices: [
          "毎日（まいにち）仕事（しごと）がありますから",
          "学校（がっこう）が遠（とお）いですから",
          "友達（ともだち）と遊（あそ）びますから",
          "漢字（かんじ）が嫌（きら）いですから",
        ],
        choicesEn: [
          "Because he has work every day",
          "Because the school is far",
          "Because he plays with friends",
          "Because he dislikes kanji",
        ],
        answer: 0,
        requiresInference: true,
        note: "毎日仕事がありますから、勉強する時間が少ないです。",
        noteEn:
          "He works every day, so he has little study time. (Sentence 5: direct cause)",
      },
      {
        question:
          "ミゲル（みげる）さんはなぜ毎朝（まいあさ）漢字（かんじ）を練習（れんしゅう）することにしましたか。",
        questionEn: "Why did Miguel decide to practice kanji every morning?",
        contextRange: [3, 7],
        answerSentence: 7,
        choices: [
          "漢字（かんじ）が苦手（にがて）で、時間（じかん）が少（すく）ないですから",
          "朝（あさ）が好（す）きですから",
          "先生（せんせい）に言（い）われましたから",
          "友達（ともだち）も練習（れんしゅう）しますから",
        ],
        choicesEn: [
          "Because he's weak at kanji and has little time",
          "Because he likes mornings",
          "Because the teacher told him to",
          "Because his friend practices too",
        ],
        answer: 0,
        requiresInference: true,
        note: "漢字が苦手で、時間が少ないです。だから、毎朝練習することにしました。",
        noteEn:
          "He's weak at kanji and short on time, so he decided to practice every morning. (Sentences 3–6 → 7: cause → decision)",
      },
      {
        question:
          "ミゲル（みげる）さんは今（いま）どう思（おも）っていますか。",
        questionEn: "How does Miguel feel now?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "漢字（かんじ）が少（すこ）し楽（たの）しいです",
          "漢字（かんじ）がもっと嫌（きら）いになりました",
          "テスト（てすと）をやめたいです",
          "学校（がっこう）を辞（や）めたいです",
        ],
        choicesEn: [
          "Kanji is a little fun now",
          "He dislikes kanji even more now",
          "He wants to quit the test",
          "He wants to quit school",
        ],
        answer: 0,
        requiresInference: false,
        note: "「今は漢字が少し楽しいです」と言いました。",
        noteEn: 'He said, "Now kanji is a little fun."',
      },

      // sequence × 2
      {
        question:
          "ミゲル（みげる）さんはアプリ（あぷり）で毎日（まいにち）何（なん）の漢字（かんじ）を覚（おぼ）えていますか。",
        questionEn: "How many kanji does Miguel memorize daily with the app?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "十（じゅう）",
          "五（ご）",
          "二十（にじゅう）",
          "百（ひゃく）",
        ],
        choicesEn: ["Ten", "Five", "Twenty", "A hundred"],
        answer: 0,
        requiresInference: false,
        note: "毎日十の漢字を覚えています。",
        noteEn: "He memorizes ten kanji every day.",
      },
      {
        question:
          "三週間（さんしゅうかん）で、ミゲル（みげる）さんはどのくらい漢字（かんじ）を覚（おぼ）えましたか。",
        questionEn: "How many kanji did Miguel memorize in three weeks?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "百（ひゃく）以上（いじょう）",
          "五十（ごじゅう）",
          "十（じゅう）",
          "二百（にひゃく）",
        ],
        choicesEn: ["Over a hundred", "Fifty", "Ten", "Two hundred"],
        answer: 0,
        requiresInference: false,
        note: "三週間で、百以上の漢字を覚えました。",
        noteEn: "In three weeks he memorized over a hundred kanji.",
      },

      // evaluative × 1
      {
        question: "リン（りん）さんはどんな人（ひと）ですか。",
        questionEn: "What kind of person is Lin?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "親切（しんせつ）な人（ひと）",
          "厳（きび）しい人（ひと）",
          "忙（いそが）しい人（ひと）",
          "静（しず）かな人（ひと）",
        ],
        choicesEn: [
          "A kind person",
          "A strict person",
          "A busy person",
          "A quiet person",
        ],
        answer: 0,
        requiresInference: true,
        note: "リンさんはいいアプリを教えてくれました。親切な人です。",
        noteEn:
          "Lin told him about a good app — a kind person. (Requires inferring kindness from the helpful act.)",
      },
    ],
  },

  // ============================================================
  // SPRINT 08 — Health, Body, Advice
  // ============================================================
  {
    id: 8,
    title: "Sprint 08: 風邪をひいた日",
    titleEn: "Sprint 08: The Day of the Cold",
    theme: "Health, Body, Advice, Feelings",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "月曜日（げつようび）の朝（あさ）、ハナ（はな）さんは頭（あたま）が痛（いた）かったです。",
        en: "On Monday morning, Hana had a headache.",
      },
      { jp: "熱（ねつ）もありました。", en: "She also had a fever." },
      {
        jp: "でも、大切（たいせつ）な会議（かいぎ）がありましたから、会社（かいしゃ）へ行（い）きました。",
        en: "But she had an important meeting, so she went to the office.",
      },

      // Layer 2 — Complication
      {
        jp: "会社（かいしゃ）で、ハナ（はな）さんは何度（なんど）も咳（せき）をしました。",
        en: "At the office, Hana coughed many times.",
      },
      {
        jp: "顔（かお）も赤（あか）くなりました。",
        en: "Her face also turned red.",
      },
      {
        jp: "同僚（どうりょう）のトム（とむ）さんは「大丈夫（だいじょうぶ）ですか。病院（びょういん）へ行（い）ったほうがいいですよ」と言（い）いました。",
        en: 'Her colleague Tom said, "Are you okay? You should go to the hospital."',
      },

      // Layer 3 — Response
      {
        jp: "それで、ハナ（はな）さんは午後（ごご）病院（びょういん）へ行（い）きました。",
        en: "So Hana went to the hospital in the afternoon.",
      },
      {
        jp: "医者（いしゃ）は「風邪（かぜ）です。今日（きょう）は仕事（しごと）を休（やす）んで、早（はや）く寝（ね）てください」と言（い）いました。",
        en: 'The doctor said, "It\'s a cold. Rest from work today and go to bed early."',
      },
      {
        jp: "ハナ（はな）さんは薬（くすり）をもらいました。",
        en: "Hana received medicine.",
      },

      // Layer 4 — Resolution
      {
        jp: "家（いえ）に帰（かえ）って、薬（くすり）を飲（の）んで、すぐ寝（ね）ました。",
        en: "She went home, took the medicine, and went straight to bed.",
      },
      {
        jp: "次（つぎ）の日（ひ）、熱（ねつ）は下（さ）がって、元気（げんき）になりました。",
        en: "The next day, her fever went down and she felt better.",
      },
    ],
    questions: [
      // direct × 3
      {
        question: "ハナ（はな）さんは朝（あさ）どうでしたか。",
        questionEn: "How was Hana in the morning?",
        contextRange: [0, 1],
        answerSentence: 0,
        choices: [
          "頭（あたま）が痛（いた）くて、熱（ねつ）もありました",
          "お腹（なか）が痛（いた）かったです",
          "元気（げんき）でした",
          "眠（ねむ）かったです",
        ],
        choicesEn: [
          "She had a headache and a fever",
          "She had a stomachache",
          "She was fine",
          "She was sleepy",
        ],
        answer: 0,
        requiresInference: false,
        note: "朝、頭が痛くて、熱もありました。",
        noteEn: "She had a headache and a fever in the morning.",
      },
      {
        question:
          "ハナ（はな）さんの会社（かいしゃ）の同僚（どうりょう）は誰（だれ）ですか。",
        questionEn: "Who is Hana's colleague?",
        contextRange: [5, 5],
        answerSentence: 5,
        choices: [
          "トム（とむ）さん",
          "リン（りん）さん",
          "ミゲル（みげる）さん",
          "アレックス（あれっくす）さん",
        ],
        choicesEn: ["Tom", "Lin", "Miguel", "Alex"],
        answer: 0,
        requiresInference: false,
        note: "同僚のトムさんが心配しました。",
        noteEn: "Her colleague Tom was worried.",
      },
      {
        question:
          "ハナ（はな）さんは病院（びょういん）で何（なに）をもらいましたか。",
        questionEn: "What did Hana receive at the hospital?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "薬（くすり）",
          "お金（かね）",
          "本（ほん）",
          "食べ物（たべもの）",
        ],
        choicesEn: ["Medicine", "Money", "A book", "Food"],
        answer: 0,
        requiresInference: false,
        note: "ハナさんは薬をもらいました。",
        noteEn: "Hana received medicine.",
      },

      // inference × 3
      {
        question:
          "ハナ（はな）さんは熱（ねつ）がありましたが、なぜ会社（かいしゃ）へ行（い）きましたか。",
        questionEn: "Hana had a fever — why did she go to the office?",
        contextRange: [1, 2],
        answerSentence: 2,
        choices: [
          "大切（たいせつ）な会議（かいぎ）がありましたから",
          "病院（びょういん）が嫌（きら）いですから",
          "薬（くすり）がありませんでしたから",
          "会社（かいしゃ）が近（ちか）いですから",
        ],
        choicesEn: [
          "Because she had an important meeting",
          "Because she dislikes hospitals",
          "Because she had no medicine",
          "Because the office is close",
        ],
        answer: 0,
        requiresInference: true,
        note: "大切な会議がありましたから、会社へ行きました。",
        noteEn:
          "She had an important meeting, so she went to the office. (Sentence 2: cause → response)",
      },
      {
        question:
          "トム（とむ）さんはなぜハナ（はな）さんに病院（びょういん）へ行（い）ったほうがいいと言（い）いましたか。",
        questionEn: "Why did Tom tell Hana she should go to the hospital?",
        contextRange: [3, 5],
        answerSentence: 5,
        choices: [
          "咳（せき）をして、顔（かお）も赤（あか）かったから",
          "ハナ（はな）さんが病院（びょういん）で働（はたら）いていますから",
          "会議（かいぎ）が終（お）わりましたから",
          "自分（じぶん）も行（い）きたいですから",
        ],
        choicesEn: [
          "Because she was coughing and her face was red",
          "Because Hana works at a hospital",
          "Because the meeting ended",
          "Because he wanted to go too",
        ],
        answer: 0,
        requiresInference: true,
        note: "ハナさんは咳をして、顔も赤くなりました。それで、トムさんは病院を勧めました。",
        noteEn:
          "She coughed and her face turned red, so Tom suggested the hospital. (Sentences 3–4 → 5: observation → advice)",
      },
      {
        question:
          "医者（いしゃ）はハナ（はな）さんに何（なに）をしろと言（い）いましたか。",
        questionEn: "What did the doctor tell Hana to do?",
        contextRange: [7, 7],
        answerSentence: 7,
        choices: [
          "仕事（しごと）を休（やす）んで、早（はや）く寝（ね）ること",
          "たくさん運動（うんどう）すること",
          "会社（かいしゃ）へ戻（もど）ること",
          "水（みず）を飲（の）まないこと",
        ],
        choicesEn: [
          "Rest from work and go to bed early",
          "Exercise a lot",
          "Return to the office",
          "Not drink water",
        ],
        answer: 0,
        requiresInference: false,
        note: "「今日は仕事を休んで、早く寝てください」と言いました。",
        noteEn: 'The doctor said, "Rest from work today and go to bed early."',
      },

      // sequence × 2
      {
        question:
          "ハナ（はな）さんは病院（びょういん）へ行（い）ってから何（なに）をしましたか。",
        questionEn: "What did Hana do after going to the hospital?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "家（いえ）に帰（かえ）って、薬（くすり）を飲（の）んで寝（ね）ました",
          "会社（かいしゃ）に戻（もど）りました",
          "友達（ともだち）に会（あ）いました",
          "買（か）い物（もの）に行（い）きました",
        ],
        choicesEn: [
          "Went home, took medicine, and slept",
          "Went back to the office",
          "Met a friend",
          "Went shopping",
        ],
        answer: 0,
        requiresInference: false,
        note: "家に帰って、薬を飲んで、すぐ寝ました。",
        noteEn: "She went home, took medicine, and went straight to bed.",
      },
      {
        question: "次（つぎ）の日（ひ）、ハナ（はな）さんはどうなりましたか。",
        questionEn: "What happened to Hana the next day?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "熱（ねつ）が下（さ）がって、元気（げんき）になりました",
          "もっと具合（ぐあい）が悪（わる）くなりました",
          "また会社（かいしゃ）へ行（い）きました",
          "病院（びょういん）に戻（もど）りました",
        ],
        choicesEn: [
          "Her fever went down and she felt better",
          "She got worse",
          "She went to the office again",
          "She went back to the hospital",
        ],
        answer: 0,
        requiresInference: false,
        note: "次の日、熱は下がって、元気になりました。",
        noteEn: "The next day her fever went down and she felt better.",
      },

      // evaluative × 1
      {
        question: "トム（とむ）さんはどんな人（ひと）ですか。",
        questionEn: "What kind of person is Tom?",
        contextRange: [5, 5],
        answerSentence: 5,
        choices: [
          "心配（しんぱい）してくれる人（ひと）",
          "厳（きび）しい人（ひと）",
          "静（しず）かな人（ひと）",
          "冷（つめ）たい人（ひと）",
        ],
        choicesEn: [
          "A caring person",
          "A strict person",
          "A quiet person",
          "A cold person",
        ],
        answer: 0,
        requiresInference: true,
        note: "トムさんは「大丈夫ですか」と心配しました。",
        noteEn: 'Tom asked, "Are you okay?" — showing he cares.',
      },
    ],
  },

  // ============================================================
  // SPRINT 09 — Travel, Plans, Comparisons
  // ============================================================
  {
    id: 9,
    title: "Sprint 09: 夏休みの旅行",
    titleEn: "Sprint 09: Summer Vacation Trip",
    theme: "Travel, Plans, Comparisons, Preferences",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "夏休（なつやす）みに、ソフィア（そふぃあ）さんは友達（ともだち）と旅行（りょこう）に行（い）く予定（よてい）です。",
        en: "During summer vacation, Sophia plans to travel with a friend.",
      },
      {
        jp: "行（い）きたい所（ところ）は二（ふた）つあります。",
        en: "There are two places she wants to go.",
      },
      {
        jp: "京都（きょうと）と北海道（ほっかいどう）です。",
        en: "Kyoto and Hokkaido.",
      },

      // Layer 2 — Complication
      {
        jp: "京都（きょうと）はお寺（てら）が多（おお）くて、歴史（れきし）が好（す）きな人（ひと）にいいです。",
        en: "Kyoto has many temples and is good for people who like history.",
      },
      {
        jp: "北海道（ほっかいどう）は夏（なつ）でも涼（すず）しくて、自然（しぜん）がきれいです。",
        en: "Hokkaido is cool even in summer, and its nature is beautiful.",
      },
      {
        jp: "でも、友達（ともだち）はお寺（てら）より海（うみ）が好（す）きです。",
        en: "But her friend likes the sea more than temples.",
      },
      {
        jp: "それに、ソフィア（そふぃあ）さんは暑（あつ）い所（ところ）が苦手（にがて）です。",
        en: "Also, Sophia is not good with hot places.",
      },

      // Layer 3 — Response
      {
        jp: "それで、二人（ふたり）は北海道（ほっかいどう）に行（い）くことにしました。",
        en: "So the two decided to go to Hokkaido.",
      },
      {
        jp: "飛行機（ひこうき）のチケット（ちけっと）は新幹線（しんかんせん）より安（やす）かったです。",
        en: "The plane ticket was cheaper than the shinkansen.",
      },
      {
        jp: "ホテル（ほてる）は駅（えき）の近（ちか）くにしました。",
        en: "They chose a hotel near the station.",
      },

      // Layer 4 — Resolution
      {
        jp: "ソフィア（そふぃあ）さんは「海（うみ）が見（み）られるのが楽（たの）しみです」と言（い）いました。",
        en: 'Sophia said, "I\'m looking forward to being able to see the sea."',
      },
      {
        jp: "友達（ともだち）もとても喜（よろこ）んでいました。",
        en: "Her friend was very pleased too.",
      },
    ],
    questions: [
      // direct × 3
      {
        question:
          "ソフィア（そふぃあ）さんはどこに行（い）きたいと思（おも）っていますか。",
        questionEn: "Where does Sophia want to go?",
        contextRange: [1, 2],
        answerSentence: 2,
        choices: [
          "京都（きょうと）と北海道（ほっかいどう）",
          "京都（きょうと）だけ",
          "北海道（ほっかいどう）だけ",
          "沖縄（おきなわ）と東京（とうきょう）",
        ],
        choicesEn: [
          "Kyoto and Hokkaido",
          "Only Kyoto",
          "Only Hokkaido",
          "Okinawa and Tokyo",
        ],
        answer: 0,
        requiresInference: false,
        note: "行きたい所は二つあります。京都と北海道です。",
        noteEn: "There are two places: Kyoto and Hokkaido.",
      },
      {
        question: "北海道（ほっかいどう）は夏（なつ）どうですか。",
        questionEn: "How is Hokkaido in summer?",
        contextRange: [4, 4],
        answerSentence: 4,
        choices: [
          "涼（すず）しくて、自然（しぜん）がきれいです",
          "暑（あつ）いです",
          "寒（さむ）すぎます",
          "雨（あめ）が多（おお）いです",
        ],
        choicesEn: ["Cool, with beautiful nature", "Hot", "Too cold", "Rainy"],
        answer: 0,
        requiresInference: false,
        note: "北海道は夏でも涼しくて、自然がきれいです。",
        noteEn: "Hokkaido is cool even in summer, and its nature is beautiful.",
      },
      {
        question:
          "二人（ふたり）はどうやって北海道（ほっかいどう）へ行（い）きますか。",
        questionEn: "How will the two go to Hokkaido?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "飛行機（ひこうき）",
          "新幹線（しんかんせん）",
          "バス（ばす）",
          "車（くるま）",
        ],
        choicesEn: ["By plane", "By shinkansen", "By bus", "By car"],
        answer: 0,
        requiresInference: true,
        note: "飛行機のチケットは新幹線より安かったです。だから飛行機で行きます。",
        noteEn:
          "The plane was cheaper than the shinkansen, so they'll fly. (Sentence 8 implies the choice.)",
      },

      // inference × 3
      {
        question:
          "ソフィア（そふぃあ）さんはなぜ北海道（ほっかいどう）に行（い）くことにしましたか。",
        questionEn: "Why did Sophia decide on Hokkaido?",
        contextRange: [4, 7],
        answerSentence: 7,
        choices: [
          "友達（ともだち）は海（うみ）が好（す）きで、ソフィア（そふぃあ）さんは暑（あつ）い所（ところ）が苦手（にがて）ですから",
          "京都（きょうと）が遠（とお）いですから",
          "北海道（ほっかいどう）のほうが安（やす）いですから",
          "お寺（てら）が好（す）きですから",
        ],
        choicesEn: [
          "Because her friend likes the sea and Sophia dislikes hot places",
          "Because Kyoto is far",
          "Because Hokkaido is cheaper",
          "Because she likes temples",
        ],
        answer: 0,
        requiresInference: true,
        note: "友達は海が好きで、ソフィアさんは暑い所が苦手です。だから、北海道にしました。",
        noteEn:
          "Her friend likes the sea, and Sophia dislikes heat — so they chose Hokkaido. (Sentences 5–6 → 7: reasons → decision)",
      },
      {
        question:
          "ソフィア（そふぃあ）さんはなぜ京都（きょうと）より北海道（ほっかいどう）がいいと思（おも）いましたか。",
        questionEn: "Why did Sophia prefer Hokkaido over Kyoto?",
        contextRange: [3, 6],
        answerSentence: 6,
        choices: [
          "暑（あつ）い所（ところ）が苦手（にがて）ですから",
          "京都（きょうと）が嫌（きら）いですから",
          "北海道（ほっかいどう）が近（ちか）いですから",
          "お寺（てら）が好（す）きですから",
        ],
        choicesEn: [
          "Because she's not good with hot places",
          "Because she dislikes Kyoto",
          "Because Hokkaido is close",
          "Because she likes temples",
        ],
        answer: 0,
        requiresInference: true,
        note: "ソフィアさんは暑い所が苦手です。北海道は夏でも涼しいです。",
        noteEn:
          "She dislikes heat, and Hokkaido is cool even in summer. (Sentence 4 + 6)",
      },
      {
        question:
          "飛行機（ひこうき）と新幹線（しんかんせん）と、どちらが安（やす）いですか。",
        questionEn: "Which is cheaper — plane or shinkansen?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "飛行機（ひこうき）",
          "新幹線（しんかんせん）",
          "同（おな）じです",
          "分（わ）かりません",
        ],
        choicesEn: ["The plane", "The shinkansen", "The same", "Unknown"],
        answer: 0,
        requiresInference: false,
        note: "飛行機のチケットは新幹線より安かったです。",
        noteEn: "The plane ticket was cheaper than the shinkansen.",
      },

      // sequence × 2
      {
        question: "二人（ふたり）はホテル（ほてる）をどこにしましたか。",
        questionEn: "Where did they choose their hotel?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "駅（えき）の近（ちか）く",
          "海（うみ）の近（ちか）く",
          "空港（くうこう）の近（ちか）く",
          "山（やま）の中（なか）",
        ],
        choicesEn: [
          "Near the station",
          "Near the sea",
          "Near the airport",
          "In the mountains",
        ],
        answer: 0,
        requiresInference: false,
        note: "ホテルは駅の近くにしました。",
        noteEn: "They chose a hotel near the station.",
      },
      {
        question:
          "ソフィア（そふぃあ）さんは何（なに）を楽（たの）しみにしていますか。",
        questionEn: "What is Sophia looking forward to?",
        contextRange: [10, 10],
        answerSentence: 10,
        choices: [
          "海（うみ）が見（み）られること",
          "お寺（てら）を見（み）ること",
          "新幹線（しんかんせん）に乗（の）ること",
          "買（か）い物（もの）",
        ],
        choicesEn: [
          "Being able to see the sea",
          "Seeing temples",
          "Riding the shinkansen",
          "Shopping",
        ],
        answer: 0,
        requiresInference: false,
        note: "「海が見られるのが楽しみです」と言いました。",
        noteEn:
          'She said, "I\'m looking forward to being able to see the sea."',
      },

      // evaluative × 1
      {
        question:
          "友達（ともだち）は旅行（りょこう）についてどう思（おも）っていますか。",
        questionEn: "How does her friend feel about the trip?",
        contextRange: [11, 11],
        answerSentence: 11,
        choices: [
          "とても喜（よろこ）んでいます",
          "心配（しんぱい）しています",
          "怒（おこ）っています",
          "悲（かな）しんでいます",
        ],
        choicesEn: ["Very pleased", "Worried", "Angry", "Sad"],
        answer: 0,
        requiresInference: false,
        note: "友達もとても喜んでいました。",
        noteEn: "Her friend was very pleased too.",
      },
    ],
  },

  // ============================================================
  // SPRINT 10 — Mixed Revision (★)
  // ============================================================
  {
    id: 10,
    title: "Sprint 10 ★: 総復習 — 山田さんの週末",
    titleEn: "Sprint 10 ★: Revision — Yamada's Weekend",
    theme: "Mixed review: time, transport, food, feelings, giving/receiving",
    sentences: [
      // Layer 1 — Setup
      {
        jp: "山田（やまだ）さんは週末（しゅうまつ）が大好（だいす）きです。",
        en: "Yamada loves weekends.",
      },
      {
        jp: "先週（せんしゅう）の土曜日（どようび）、山田（やまだ）さんは朝（あさ）早（はや）く起（お）きました。",
        en: "Last Saturday, Yamada woke up early.",
      },
      {
        jp: "天気（てんき）がよかったですから、自転車（じてんしゃ）で公園（こうえん）へ行（い）きました。",
        en: "Because the weather was nice, he went to the park by bicycle.",
      },

      // Layer 2 — Complication
      {
        jp: "公園（こうえん）で、高校（こうこう）の友達（ともだち）に会（あ）いました。",
        en: "At the park, he ran into a high school friend.",
      },
      {
        jp: "友達（ともだち）は「一緒（いっしょ）に昼（ひる）ごはんを食（た）べませんか」と言（い）いました。",
        en: 'The friend said, "Shall we have lunch together?"',
      },
      {
        jp: "でも、山田（やまだ）さんは財布（さいふ）を家（いえ）に忘（わす）れました。",
        en: "But Yamada left his wallet at home.",
      },
      {
        jp: "それに、その日（ひ）は母（はは）の誕生日（たんじょうび）でした。",
        en: "Also, that day was his mother's birthday.",
      },

      // Layer 3 — Response
      {
        jp: "それで、山田（やまだ）さんは「ごめん、今日（きょう）は母（はは）の誕生日（たんじょうび）ですから、家（いえ）に帰（かえ）ります」と言（い）いました。",
        en: "So Yamada said, \"Sorry, today is my mother's birthday, so I'm going home.\"",
      },
      {
        jp: "友達（ともだち）は「そうか。じゃあ、また今度（こんど）」と言（い）いました。",
        en: 'The friend said, "I see. Well, next time then."',
      },
      {
        jp: "山田（やまだ）さんは家（いえ）へ帰（かえ）って、母（はは）に花（はな）をあげました。",
        en: "Yamada went home and gave his mother flowers.",
      },

      // Layer 4 — Resolution
      {
        jp: "母（はは）は「ありがとう。とても嬉（うれ）しい」と言（い）いました。",
        en: 'His mother said, "Thank you. I\'m very happy."',
      },
      {
        jp: "山田（やまだ）さんは友達（ともだち）に会（あ）えませんでしたが、いい一日（いちにち）でした。",
        en: "Yamada couldn't meet his friend, but it was a good day.",
      },
    ],
    questions: [
      // direct × 3
      {
        question:
          "山田（やまだ）さんは先週（せんしゅう）の土曜日（どようび）、どうやって公園（こうえん）へ行（い）きましたか。",
        questionEn: "How did Yamada go to the park last Saturday?",
        contextRange: [2, 2],
        answerSentence: 2,
        choices: [
          "自転車（じてんしゃ）で",
          "バス（ばす）で",
          "歩（ある）いて",
          "車（くるま）で",
        ],
        choicesEn: ["By bicycle", "By bus", "On foot", "By car"],
        answer: 0,
        requiresInference: false,
        note: "天気がよかったですから、自転車で公園へ行きました。",
        noteEn: "The weather was nice, so he went by bicycle.",
      },
      {
        question:
          "山田（やまだ）さんは公園（こうえん）で誰（だれ）に会（あ）いましたか。",
        questionEn: "Who did Yamada meet at the park?",
        contextRange: [3, 3],
        answerSentence: 3,
        choices: [
          "高校（こうこう）の友達（ともだち）",
          "母（はは）",
          "先生（せんせい）",
          "同僚（どうりょう）",
        ],
        choicesEn: [
          "A high school friend",
          "His mother",
          "A teacher",
          "A colleague",
        ],
        answer: 0,
        requiresInference: false,
        note: "公園で高校の友達に会いました。",
        noteEn: "He met a high school friend at the park.",
      },
      {
        question: "山田（やまだ）さんは母（はは）に何（なに）をあげましたか。",
        questionEn: "What did Yamada give his mother?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "花（はな）",
          "ケーキ（けーき）",
          "本（ほん）",
          "お金（かね）",
        ],
        choicesEn: ["Flowers", "Cake", "A book", "Money"],
        answer: 0,
        requiresInference: false,
        note: "母に花をあげました。",
        noteEn: "He gave his mother flowers.",
      },

      // inference × 3
      {
        question:
          "山田（やまだ）さんはなぜ友達（ともだち）と昼（ひる）ごはんを食（た）べませんでしたか。",
        questionEn: "Why didn't Yamada have lunch with his friend?",
        contextRange: [5, 7],
        answerSentence: 6,
        choices: [
          "母（はは）の誕生日（たんじょうび）でしたから",
          "友達（ともだち）が嫌（きら）いですから",
          "公園（こうえん）が遠（とお）いですから",
          "仕事（しごと）がありましたから",
        ],
        choicesEn: [
          "Because it was his mother's birthday",
          "Because he dislikes his friend",
          "Because the park is far",
          "Because he had work",
        ],
        answer: 0,
        requiresInference: true,
        note: "その日は母の誕生日でした。だから、家に帰りました。",
        noteEn:
          "It was his mother's birthday, so he went home. (Sentence 6 → 7: reason → response)",
      },
      {
        question:
          "山田（やまだ）さんはなぜ財布（さいふ）を忘（わす）れたことが問題（もんだい）でしたか。",
        questionEn: "Why was forgetting his wallet a problem?",
        contextRange: [4, 5],
        answerSentence: 5,
        choices: [
          "友達（ともだち）と昼（ひる）ごはんを食（た）べる予定（よてい）でしたから",
          "公園（こうえん）で何（なに）か買（か）いたかったから",
          "自転車（じてんしゃ）に乗（の）れませんから",
          "花（はな）を買（か）えませんでしたから",
        ],
        choicesEn: [
          "Because he was going to have lunch with his friend",
          "Because he wanted to buy something at the park",
          "Because he couldn't ride his bicycle",
          "Because he couldn't buy flowers",
        ],
        answer: 0,
        requiresInference: true,
        note: "友達が昼ごはんを食べませんかと言いましたが、財布がありませんでした。",
        noteEn:
          "The friend invited him to lunch, but he had no wallet. (Sentences 4–5: inference about the problem)",
      },
      {
        question:
          "山田（やまだ）さんはどうして「いい一日（いちにち）でした」と思（おも）いましたか。",
        questionEn: "Why did Yamada think it was a good day?",
        contextRange: [8, 10],
        answerSentence: 10,
        choices: [
          "母（はは）がとても嬉（うれ）しそうでしたから",
          "友達（ともだち）と昼（ひる）ごはんを食（た）べましたから",
          "公園（こうえん）で運動（うんどう）しましたから",
          "花（はな）が安（やす）かったから",
        ],
        choicesEn: [
          "Because his mother looked very happy",
          "Because he had lunch with his friend",
          "Because he exercised at the park",
          "Because the flowers were cheap",
        ],
        answer: 0,
        requiresInference: true,
        note: "母は「とても嬉しい」と言いました。だから、いい一日でした。",
        noteEn:
          "His mother said she was very happy — so it was a good day. (Requires linking 9 → 10.)",
      },

      // sequence × 2
      {
        question:
          "山田（やまだ）さんは友達（ともだち）に何（なに）と言（い）いましたか。",
        questionEn: "What did Yamada say to his friend?",
        contextRange: [7, 7],
        answerSentence: 7,
        choices: [
          "「今日（きょう）は母（はは）の誕生日（たんじょうび）ですから、家（いえ）に帰（かえ）ります」",
          "「一緒（いっしょ）に昼（ひる）ごはんを食（た）べましょう」",
          "「財布（さいふ）を貸（か）してください」",
          "「また明日（あした）会（あ）いましょう」",
        ],
        choicesEn: [
          "\"Today is my mother's birthday, so I'm going home\"",
          '"Let\'s have lunch together"',
          '"Please lend me your wallet"',
          '"Let\'s meet again tomorrow"',
        ],
        answer: 0,
        requiresInference: false,
        note: "「ごめん、今日は母の誕生日ですから、家に帰ります」と言いました。",
        noteEn:
          "He said, \"Sorry, today is my mother's birthday, so I'm going home.\"",
      },
      {
        question:
          "友達（ともだち）は山田（やまだ）さんに何（なに）と言（い）いましたか。",
        questionEn: "What did the friend say to Yamada?",
        contextRange: [8, 8],
        answerSentence: 8,
        choices: [
          "「そうか。じゃあ、また今度（こんど）」",
          "「一緒（いっしょ）に帰（かえ）りましょう」",
          "「花（はな）を買（か）いましょう」",
          "「母（はは）に電話（でんわ）しましょう」",
        ],
        choicesEn: [
          '"I see. Well, next time then"',
          '"Let\'s go home together"',
          '"Let\'s buy flowers"',
          '"Let\'s call your mother"',
        ],
        answer: 0,
        requiresInference: false,
        note: "友達は「そうか。じゃあ、また今度」と言いました。",
        noteEn: 'The friend said, "I see. Well, next time then."',
      },

      // evaluative × 1
      {
        question: "母（はは）は花（はな）についてどう言（い）いましたか。",
        questionEn: "What did his mother say about the flowers?",
        contextRange: [9, 9],
        answerSentence: 9,
        choices: [
          "「ありがとう。とても嬉（うれ）しい」",
          "「花（はな）が高（たか）いです」",
          "「花（はな）が好（す）きじゃないです」",
          "「もっと花（はな）が欲（ほ）しいです」",
        ],
        choicesEn: [
          '"Thank you. I\'m very happy"',
          '"The flowers are expensive"',
          '"I don\'t like flowers"',
          '"I want more flowers"',
        ],
        answer: 0,
        requiresInference: false,
        note: "母は「ありがとう。とても嬉しい」と言いました。",
        noteEn: 'His mother said, "Thank you. I\'m very happy."',
      },
    ],
  },
];

// ==================== END OF FILE ====================

// Export for use in the app
if (typeof module !== "undefined" && module.exports) {
  module.exports = sprintStoriesWithQA;
}

// Make it available globally
if (typeof window !== "undefined") {
  window.sprintStoriesWithQA = sprintStoriesWithQA;
}

console.log(`✅ Loaded ${sprintStoriesWithQA.length} stories with Q&A`);
