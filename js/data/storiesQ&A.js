// ==================== SPRINT STORIES WITH Q&A ====================
// 10 stories, 10 questions each (100 total)
// Q1-Q5: Basic Comprehension
// Q6-Q10: Advanced Inference & Context

const sprintStoriesWithQA = [
  // ============================================================
  // SPRINT 01: Time, Daily Routine
  // ============================================================
  {
    id: 1,
    title: "A Typical Day",
    storyJp: `まず、私（わたし）は毎朝（まいあさ）六時（ろくじ）に起（お）きます。それから、朝（あさ）ごはんを食（た）べてから、歯（は）を磨（みが）きます。八時（はちじ）になったら、会社（かいしゃ）へ行（い）きます。時々（ときどき）、友達（ともだち）と図書館（としょかん）で勉強（べんきょう）します。でも、昨日（きのう）はとても疲（つか）れました。なぜなら、十時間（じゅうじかん）も働（はたら）いたからです。今週（こんしゅう）の日曜日（にちようび）には映画（えいが）を見（み）る予定（よてい）です。私（わたし）の家族（かぞく）は両親（りょうしん）と妹（いもうと）です。母（はは）は野菜（やさい）を切（き）りながら料理（りょうり）します。先週（せんしゅう）、公園（こうえん）で小（ちい）さい犬（いぬ）を見（み）ました。この町（まち）には大（おお）きな図書館（としょかん）があります。新幹線（しんかんせん）は速（はや）いですが、少（すこ）し高（たか）いです。駅（えき）で切符（きっぷ）を買（か）って電車（でんしゃ）に乗（の）ります。昨日（きのう）、雨（あめ）が降（ふ）ったので、家（いえ）で本（ほん）を読（よ）みました。週末（しゅうまつ）は何（なに）をしますか。私（わたし）はよく音楽（おんがく）を聞（き）きながら散歩（さんぽ）します。夏（なつ）は冷（つめ）たいアイスクリームが一番（いちばん）好（す）きです。毎日（まいにち）コーヒーを二杯（にはい）飲（の）みます。でも、鍵（かぎ）を忘（わす）れたので、部屋（へや）に入（はい）れませんでした。この料理（りょうり）は少（すこ）し辛（から）いですが、美味（おい）しいです。先週（せんしゅう）、友達（ともだち）に誕生日（たんじょうび）プレゼントをもらいました。嬉（うれ）しかったです。図書館（としょかん）の前（まえ）に郵便局（ゆうびんきょく）があります。日本語（にほんご）の授業（じゅぎょう）は楽（たの）しいです。銀行（ぎんこう）まで歩（ある）いて十分（じゅっぷん）です。明日（あした）試験（しけん）があるので、今晩（こんばん）勉強（べんきょう）します。スーパーで肉（にく）と魚（さかな）を買（か）いました。子供（こども）の頃（ころ）、よく川（かわ）で泳（およ）ぎました。彼女（かのじょ）は赤（あか）い車（くるま）を持（も）っています。飲（の）み物（もの）を買（か）いにコンビニへ行（い）きます。このレストランは値段（ねだん）が高（たか）いですが、とても人気（にんき）です。`,
    storyEn: `First, I wake up at 6 o'clock every morning. After that, I eat breakfast and then brush my teeth. When it becomes 8 o'clock, I go to the office. Sometimes, I study at the library with my friend. But yesterday I was very tired. Because I worked for 10 hours. I plan to watch a movie this Sunday. My family is my parents and my younger sister. My mother cooks while cutting vegetables. Last week, I saw a small dog in the park. There is a big library in this town. The Shinkansen is fast but a little expensive. I buy a ticket at the station and board the train. Because it rained yesterday, I read a book at home. What do you do on weekends? I often take a walk while listening to music. In summer, I like cold ice cream the most. I drink two cups of coffee every day. But I forgot my key, so I couldn't enter the room. This dish is a little spicy but delicious. Last week, I got a birthday present from my friend. I was happy. In front of the library, there is a post office. Japanese class is fun. It's a 10-minute walk to the bank. I have an exam tomorrow, so I'll study tonight. I bought meat and fish at the supermarket. When I was a child, I often swam in the river. She has a red car. I go to the convenience store to buy a drink. This restaurant is expensive but very popular.`,
    questions: [
      {
        id: "s1q1", question: "毎朝何時に起きますか。",
        questionHtml: "<ruby>毎朝<rt>まいあさ</rt></ruby>何時に<ruby>起<rt>お</rt></ruby>きますか。",
        questionEn: "What time do you wake up every morning?",
        choices: ["5時", "6時", "7時", "8時"],
        choicesEn: ["5 o'clock", "6 o'clock", "7 o'clock", "8 o'clock"],
        choicesHtml: ["<ruby>5時<rt>ごじ</rt></ruby>", "<ruby>6時<rt>ろくじ</rt></ruby>", "<ruby>7時<rt>しちじ</rt></ruby>", "<ruby>8時<rt>はちじ</rt></ruby>"],
        answer: 1, note: "「六時」に起きます。", noteEn: "I wake up at \"six o'clock.\"", transcriptEn: "First, I wake up at 6 o'clock every morning."
      },
      {
        id: "s1q2", question: "昨日何時間働きましたか。",
        questionHtml: "<ruby>昨日<rt>きのう</rt></ruby>何<ruby>時間<rt>じかん</rt></ruby><ruby>働<rt>はたら</rt></ruby>きましたか。",
        questionEn: "How many hours did you work yesterday?",
        choices: ["8時間", "9時間", "10時間", "11時間"],
        choicesEn: ["8 hours", "9 hours", "10 hours", "11 hours"],
        choicesHtml: ["<ruby>8時間<rt>はちじかん</rt></ruby>", "<ruby>9時間<rt>きゅうじかん</rt></ruby>", "<ruby>10時間<rt>じゅうじかん</rt></ruby>", "<ruby>11時間<rt>じゅういちじかん</rt></ruby>"],
        answer: 2, note: "「十時間」働きました。", noteEn: "I worked \"ten hours.\"", transcriptEn: "Because I worked for 10 hours."
      },
      {
        id: "s1q3", question: "今週の日曜日に何をしますか。",
        questionHtml: "<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>に何をしますか。",
        questionEn: "What will you do this Sunday?",
        choices: ["本を読む", "映画を見る", "散歩する", "友達と遊ぶ"],
        choicesEn: ["Read a book", "Watch a movie", "Take a walk", "Play with friends"],
        choicesHtml: ["<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む", "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>る", "<ruby>散歩<rt>さんぽ</rt></ruby>する", "<ruby>友達<rt>ともだち</rt></ruby>と<ruby>遊<rt>あそ</rt></ruby>ぶ"],
        answer: 1, note: "「映画を見る」予定です。", noteEn: "I plan to \"watch a movie.\"", transcriptEn: "I plan to watch a movie this Sunday."
      },
      {
        id: "s1q4", question: "家族は誰ですか。",
        questionHtml: "<ruby>家族<rt>かぞく</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。",
        questionEn: "Who is in your family?",
        choices: ["両親と兄", "両親と妹", "母と父", "一人っ子"],
        choicesEn: ["Parents and older brother", "Parents and younger sister", "Mother and father", "Only child"],
        choicesHtml: ["<ruby>両親<rt>りょうしん</rt></ruby>と<ruby>兄<rt>あに</rt></ruby>", "<ruby>両親<rt>りょうしん</rt></ruby>と<ruby>妹<rt>いもうと</rt></ruby>", "<ruby>母<rt>はは</rt></ruby>と<ruby>父<rt>ちち</rt></ruby>", "<ruby>一人<rt>ひとり</rt></ruby>っ子"],
        answer: 1, note: "家族は両親と妹です。", noteEn: "My family is my parents and my younger sister.", transcriptEn: "My family is my parents and my younger sister."
      },
      {
        id: "s1q5", question: "母は何をしながら料理しますか。",
        questionHtml: "<ruby>母<rt>はは</rt></ruby>は何をしながら<ruby>料理<rt>りょうり</rt></ruby>しますか。",
        questionEn: "While doing what does your mother cook?",
        choices: ["音楽を聞く", "野菜を切る", "テレビを見る", "本を読む"],
        choicesEn: ["Listening to music", "Cutting vegetables", "Watching TV", "Reading a book"],
        choicesHtml: ["<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く", "<ruby>野菜<rt>やさい</rt></ruby>を<ruby>切<rt>き</rt></ruby>る", "テレビを<ruby>見<rt>み</rt></ruby>る", "<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む"],
        answer: 1, note: "「野菜を切りながら料理します」。", noteEn: "She cooks \"while cutting vegetables.\"", transcriptEn: "My mother cooks while cutting vegetables."
      },
      {
        id: "s1q6", question: "なぜ昨日とても疲れましたか。",
        questionHtml: "なぜ<ruby>昨日<rt>きのう</rt></ruby>とても<ruby>疲<rt>つか</rt></ruby>れましたか。",
        questionEn: "Why were you very tired yesterday?",
        choices: ["十時間働いたから", "雨が降ったから", "映画を見たから", "図書館で勉強したから"],
        choicesEn: ["Because I worked 10 hours", "Because it rained", "Because I watched a movie", "Because I studied at the library"],
        choicesHtml: ["<ruby>十時間<rt>じゅうじかん</rt></ruby><ruby>働<rt>はたら</rt></ruby>いたから", "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったから", "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たから", "<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>したから"],
        answer: 0, note: "「十時間も働いたからです」。", noteEn: "Because I worked for 10 hours.", transcriptEn: "But yesterday I was very tired. Because I worked for 10 hours."
      },
      {
        id: "s1q7", question: "鍵を忘れたので、どうなりましたか。",
        questionHtml: "<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れたので、どうなりましたか。",
        questionEn: "What happened because you forgot your key?",
        choices: ["部屋に入れませんでした", "会社に遅刻しました", "友達に会えませんでした", "雨に濡れました"],
        choicesEn: ["Could not enter the room", "Was late to work", "Could not meet a friend", "Got wet in the rain"],
        choicesHtml: ["<ruby>部屋<rt>へや</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れませんでした", "<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>しました", "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>えませんでした", "<ruby>雨<rt>あめ</rt></ruby>に<ruby>濡<rt>ぬ</rt></ruby>れました"],
        answer: 0, note: "「鍵を忘れたので、部屋に入れませんでした」。", noteEn: "Because I forgot my key, I couldn't enter the room.", transcriptEn: "But I forgot my key, so I couldn't enter the room.", inferenceHint: "The word 'ので' (because) shows that forgetting the key directly caused the result of not being able to enter."
      },
      {
        id: "s1q8", question: "散歩する時、何をしますか。",
        questionHtml: "<ruby>散歩<rt>さんぽ</rt></ruby>する<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしますか。",
        questionEn: "What do you do when you take a walk?",
        choices: ["音楽を聞きます", "本を読みます", "写真を撮ります", "コーヒーを飲みます"],
        choicesEn: ["Listen to music", "Read a book", "Take photos", "Drink coffee"],
        choicesHtml: ["<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きます", "<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます", "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります", "コーヒーを<ruby>飲<rt>の</rt></ruby>みます"],
        answer: 0, note: "「音楽を聞きながら散歩します」。", noteEn: "I take a walk while listening to music.", transcriptEn: "I often take a walk while listening to music."
      },
      {
        id: "s1q9", question: "今夜、何をしますか。",
        questionHtml: "<ruby>今夜<rt>こんや</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしますか。",
        questionEn: "What will you do tonight?",
        choices: ["友達と食事します", "映画を見ます", "勉強します", "早く寝ます"],
        choicesEn: ["Eat with friends", "Watch a movie", "Study", "Sleep early"],
        choicesHtml: ["<ruby>友達<rt>ともだち</rt></ruby>と<ruby>食事<rt>しょくじ</rt></ruby>します", "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます", "<ruby>勉強<rt>べんきょう</rt></ruby>します", "<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>ます"],
        answer: 2, note: "「明日試験があるので、今晩勉強します」。", noteEn: "Because I have an exam tomorrow, I will study tonight.", transcriptEn: "I have an exam tomorrow, so I'll study tonight.", inferenceHint: "今晩 (tonight) and 今夜 (tonight) are the same. The text says 今晩勉強します (will study tonight)."
      },
      {
        id: "s1q10", question: "子供の頃、どこで泳ぎましたか。",
        questionHtml: "<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>、どこで<ruby>泳<rt>およ</rt></ruby>ぎましたか。",
        questionEn: "Where did you swim when you were a child?",
        choices: ["海", "川", "プール", "湖"],
        choicesEn: ["Ocean", "River", "Pool", "Lake"],
        choicesHtml: ["<ruby>海<rt>うみ</rt></ruby>", "<ruby>川<rt>かわ</rt></ruby>", "プール", "<ruby>湖<rt>みずうみ</rt></ruby>"],
        answer: 1, note: "「子供の頃、よく川で泳ぎました」。", noteEn: "When I was a child, I often swam in the river.", transcriptEn: "When I was a child, I often swam in the river."
      }
    ]
  },

  // ============================================================
  // SPRINT 02: Family & People
  // ============================================================
  {
    id: 2,
    title: "My Family and the People Around Me",
    storyJp: `私（わたし）の家族（かぞく）について話（はな）しましょう。父（ちち）は医者（いしゃ）です。母（はは）は毎朝（まいあさ）新聞（しんぶん）を読（よ）みます。兄（あに）は大学（だいがく）で英語（えいご）を勉強（べんきょう）しています。妹（いもうと）は小（ちい）さい時（とき）からピアノを弾（ひ）きます。とても上手（じょうず）です。祖父（そふ）と祖母（そぼ）は田舎（いなか）に住（す）んでいます。時々（ときどき）、遊（あそ）びに行（い）きます。叔父（おじ）さんは車（くるま）で会社（かいしゃ）へ行（い）きます。従兄弟（いとこ）は来年（らいねん）結婚（けっこん）します。新（あたら）しい隣人（りんじん）はとても親切（しんせつ）です。彼（かれ）は毎日（まいにち）一時間（いちじかん）日本語（にほんご）を練習（れんしゅう）します。彼女（かのじょ）は綺麗（きれい）な声（こえ）で歌（うた）います。先週（せんしゅう）、赤（あか）ちゃんが生（う）まれました。今（いま）、その赤（あか）ちゃんは寝（ね）ています。先生（せんせい）は学生（がくせい）に宿題（しゅくだい）を出（だ）しました。友達（ともだち）と一緒（いっしょ）にご飯（はん）を食（た）べました。楽（たの）しかったです。同僚（どうりょう）は風邪（かぜ）を引（ひ）いて会社（かいしゃ）を休（やす）みました。店員（てんいん）さんは親切（しんせつ）に説明（せつめい）してくれました。隣（となり）の人は毎晩（まいばん）遅（おそ）くまで起（お）きています。娘（むすめ）は学校（がっこう）で友達（ともだち）を待（ま）ちます。息子（むすこ）は野球（やきゅう）が好（す）きです。両親（りょうしん）は旅行（りょこう）が大好（だいす）きです。先週（せんしゅう）、赤（あか）ちゃんが泣（な）いているのを聞（き）きました。彼（かれ）はとても真面目（まじめ）な人間（にんげん）です。子供（こども）たちは公園（こうえん）で楽（たの）しそうに遊（あそ）んでいます。祖母（そぼ）はいつも笑顔（えがお）で話（はな）します。兄（あに）は私（わたし）より背（せ）が高（たか）いです。`,
    storyEn: `Let me talk about my family. My father is a doctor. My mother reads the newspaper every morning. My older brother is studying English at university. My younger sister has played piano since she was small. She is very good. My grandparents live in the countryside. Sometimes, I go to visit them. My uncle goes to the office by car. My cousin will get married next year. The new neighbor is very kind. He practices Japanese for one hour every day. She sings with a beautiful voice. Last week, a baby was born. Now, that baby is sleeping. The teacher gave homework to the students. I ate a meal together with my friend. It was fun. My colleague caught a cold and took a day off work. The clerk kindly explained for me. The neighbor stays up late every night. My daughter waits for her friend at school. My son likes baseball. My parents love traveling. Last week, I heard a baby crying. He is a very serious person. The children are playing happily in the park. My grandmother always speaks with a smile. My older brother is taller than me.`,
    questions: [
      {
        id: "s2q1", question: "父は何をしていますか。", questionHtml: "<ruby>父<rt>ちち</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしていますか。", questionEn: "What does your father do?",
        choices: ["先生", "医者", "会社員", "学生"], choicesEn: ["Teacher", "Doctor", "Office worker", "Student"],
        choicesHtml: ["<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>医者<rt>いしゃ</rt></ruby>", "<ruby>会社員<rt>かいしゃいん</rt></ruby>", "<ruby>学生<rt>がくせい</rt></ruby>"],
        answer: 1, note: "父は「医者」です。", noteEn: "My father is a \"doctor.\"", transcriptEn: "My father is a doctor."
      },
      {
        id: "s2q2", question: "妹は何が上手ですか。", questionHtml: "<ruby>妹<rt>いもうと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですか。", questionEn: "What is your younger sister good at?",
        choices: ["ピアノ", "歌", "絵", "料理"], choicesEn: ["Piano", "Singing", "Drawing", "Cooking"],
        choicesHtml: ["ピアノ", "<ruby>歌<rt>うた</rt></ruby>", "<ruby>絵<rt>え</rt></ruby>", "<ruby>料理<rt>りょうり</rt></ruby>"],
        answer: 0, note: "妹は「ピアノ」が上手です。", noteEn: "My younger sister is good at \"piano.\"", transcriptEn: "My younger sister has played piano since she was small. She is very good."
      },
      {
        id: "s2q3", question: "先週誰が生まれましたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby><ruby>誰<rt>だれ</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれましたか。", questionEn: "Who was born last week?",
        choices: ["犬", "猫", "赤ちゃん", "友達"], choicesEn: ["A dog", "A cat", "A baby", "A friend"],
        choicesHtml: ["<ruby>犬<rt>いぬ</rt></ruby>", "<ruby>猫<rt>ねこ</rt></ruby>", "<ruby>赤<rt>あか</rt></ruby>ちゃん", "<ruby>友達<rt>ともだち</rt></ruby>"],
        answer: 2, note: "「赤ちゃん」が生まれました。", noteEn: "A \"baby\" was born.", transcriptEn: "Last week, a baby was born."
      },
      {
        id: "s2q4", question: "同僚はなぜ会社を休みましたか。", questionHtml: "<ruby>同僚<rt>どうりょう</rt></ruby>はなぜ<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みましたか。", questionEn: "Why did your colleague take a day off work?",
        choices: ["用事", "風邪", "旅行", "結婚"], choicesEn: ["An errand", "A cold", "Travel", "Marriage"],
        choicesHtml: ["<ruby>用事<rt>ようじ</rt></ruby>", "<ruby>風邪<rt>かぜ</rt></ruby>", "<ruby>旅行<rt>りょこう</rt></ruby>", "<ruby>結婚<rt>けっこん</rt></ruby>"],
        answer: 1, note: "「風邪を引いて」会社を休みました。", noteEn: "He caught a \"cold\" and took a day off.", transcriptEn: "My colleague caught a cold and took a day off work."
      },
      {
        id: "s2q5", question: "隣の人は毎晩何をしますか。", questionHtml: "<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>毎晩<rt>まいばん</rt></ruby><ruby>何<rt>なに</rt></ruby>をしますか。", questionEn: "What does your neighbor do every night?",
        choices: ["早く寝る", "遅くまで起きる", "早く起きる", "遅く寝る"], choicesEn: ["Go to bed early", "Stay up late", "Wake up early", "Go to bed late"],
        choicesHtml: ["<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>る", "<ruby>遅<rt>おそ</rt></ruby>くまで<ruby>起<rt>お</rt></ruby>きる", "<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きる", "<ruby>遅<rt>おそ</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>る"],
        answer: 1, note: "「遅くまで起きています」。", noteEn: "He \"stays up late.\"", transcriptEn: "The neighbor stays up late every night."
      },
      {
        id: "s2q6", question: "従兄弟はいつ結婚しますか。", questionHtml: "<ruby>従兄弟<rt>いとこ</rt></ruby>はいつ<ruby>結婚<rt>けっこん</rt></ruby>しますか。", questionEn: "When will your cousin get married?",
        choices: ["今年", "来年", "再来年", "去年"], choicesEn: ["This year", "Next year", "Year after next", "Last year"],
        choicesHtml: ["<ruby>今年<rt>ことし</rt></ruby>", "<ruby>来年<rt>らいねん</rt></ruby>", "<ruby>再来年<rt>さらいねん</rt></ruby>", "<ruby>去年<rt>きょねん</rt></ruby>"],
        answer: 1, note: "「来年結婚します」。", noteEn: "My cousin will get married next year.", transcriptEn: "My cousin will get married next year."
      },
      {
        id: "s2q7", question: "新しい隣人はどんな人ですか。", questionHtml: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>隣人<rt>りんじん</rt></ruby>はどんな<ruby>人<rt>ひと</rt></ruby>ですか。", questionEn: "What kind of person is the new neighbor?",
        choices: ["厳しい", "親切", "静か", "うるさい"], choicesEn: ["Strict", "Kind", "Quiet", "Noisy"],
        choicesHtml: ["<ruby>厳<rt>きび</rt></ruby>しい", "<ruby>親切<rt>しんせつ</rt></ruby>", "<ruby>静<rt>しず</rt></ruby>か", "うるさい"],
        answer: 1, note: "「とても親切です」。", noteEn: "The new neighbor is very kind.", transcriptEn: "The new neighbor is very kind."
      },
      {
        id: "s2q8", question: "彼女はどんな声で歌いますか。", questionHtml: "<ruby>彼女<rt>かのじょ</rt></ruby>はどんな<ruby>声<rt>こえ</rt></ruby>で<ruby>歌<rt>うた</rt></ruby>いますか。", questionEn: "With what kind of voice does she sing?",
        choices: ["大きい声", "小さい声", "綺麗な声", "変な声"], choicesEn: ["Loud voice", "Quiet voice", "Beautiful voice", "Strange voice"],
        choicesHtml: ["<ruby>大<rt>おお</rt></ruby>きい<ruby>声<rt>こえ</rt></ruby>", "<ruby>小<rt>ちい</rt></ruby>さい<ruby>声<rt>こえ</rt></ruby>", "<ruby>綺麗<rt>きれい</rt></ruby>な<ruby>声<rt>こえ</rt></ruby>", "<ruby>変<rt>へん</rt></ruby>な<ruby>声<rt>こえ</rt></ruby>"],
        answer: 2, note: "「綺麗な声で歌います」。", noteEn: "She sings with a beautiful voice.", transcriptEn: "She sings with a beautiful voice."
      },
      {
        id: "s2q9", question: "先生は学生に何を出しましたか。", questionHtml: "<ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しましたか。", questionEn: "What did the teacher give to the students?",
        choices: ["テスト", "宿題", "本", "ノート"], choicesEn: ["A test", "Homework", "A book", "A notebook"],
        choicesHtml: ["テスト", "<ruby>宿題<rt>しゅくだい</rt></ruby>", "<ruby>本<rt>ほん</rt></ruby>", "ノート"],
        answer: 1, note: "「学生に宿題を出しました」。", noteEn: "The teacher gave homework to the students.", transcriptEn: "The teacher gave homework to the students."
      },
      {
        id: "s2q10", question: "祖母はどうやって話しますか。", questionHtml: "<ruby>祖母<rt>そぼ</rt></ruby>はどうやって<ruby>話<rt>はな</rt></ruby>しますか。", questionEn: "How does your grandmother speak?",
        choices: ["怒って", "泣きながら", "笑顔で", "早口で"], choicesEn: ["Angrily", "While crying", "With a smile", "Quickly"],
        choicesHtml: ["<ruby>怒<rt>おこ</rt></ruby>って", "<ruby>泣<rt>な</rt></ruby>きながら", "<ruby>笑顔<rt>えがお</rt></ruby>で", "<ruby>早口<rt>はやくち</rt></ruby>で"],
        answer: 2, note: "「いつも笑顔で話します」。", noteEn: "My grandmother always speaks with a smile.", transcriptEn: "My grandmother always speaks with a smile."
      }
    ]
  },

  // ============================================================
  // SPRINT 03: Location, Direction, Transport
  // ============================================================
  {
    id: 3,
    title: "Finding My Way Around Town",
    storyJp: `先週（せんしゅう）、私（わたし）は町（まち）で道（みち）に迷（まよ）いました。まず、駅（えき）はどこですかと聞（き）きました。誰（だれ）かが教（おし）えてくれました。「右（みぎ）に曲（ま）がって、直進（ちょくしん）してください。交差点（こうさてん）を渡（わた）って、左（ひだり）です。」と言（い）いました。銀行（ぎんこう）はスーパーの隣（となり）にあります。図書館（としょかん）は学校（がっこう）の向（む）かいです。郵便局（ゆうびんきょく）は角（かど）を曲（ま）がった所（ところ）にありました。バス停（てい）まで歩（ある）いて五分（ごふん）です。新幹線（しんかんせん）は東京（とうきょう）から大阪（おおさか）まで二時間半（にじかんはん）です。地下鉄（ちかてつ）に乗（の）って二駅（にえき）です。飛行機（ひこうき）は速（はや）いですが、少（すこ）し高（たか）いです。だから、タクシーで行（い）った方（ほう）がいいと思（おも）います。自転車（じてんしゃ）で駅（えき）まで十分（じゅっぷん）です。地図（ちず）を見（み）ながら歩（ある）きました。看板（かんばん）が見（み）えますか。まっすぐ行（い）ってください。ここで止（と）まってください。次（つぎ）の角（かど）を左（ひだり）です。まわりにコンビニがありますか。遠（とお）くに山（やま）が見（み）えます。エレベーターで三階（さんかい）に上（あ）がります。出口（でぐち）は左側（ひだりがわ）です。入口（いりぐち）で待（ま）ち合（あ）わせましょう。駐車場（ちゅうしゃじょう）は建物（たてもの）の後（うし）ろです。階段（かいだん）を上（あ）がって二階（にかい）です。`,
    storyEn: `Last week, I got lost in town. First, I asked where the station was. Someone told me, "Please turn right and go straight. Cross the intersection and it's on the left." The bank is next to the supermarket. The library is across from the school. The post office was around the corner. It's a five-minute walk to the bus stop. The Shinkansen takes 2.5 hours from Tokyo to Osaka. Take the subway for two stops. The airplane is fast but a little expensive. So, I think it's better to go by taxi. It's 10 minutes to the station by bicycle. I walked while looking at the map. Can you see the sign? Please go straight. Please stop here. At the next corner, it's on the left. Is there a convenience store around here? I can see mountains in the distance. Take the elevator up to the third floor. The exit is on the left side. Let's meet at the entrance. The parking lot is behind the building. Go up the stairs and it's the second floor.`,
    questions: [
      {
        id: "s3q1", question: "駅はどこですか。", questionHtml: "<ruby>駅<rt>えき</rt></ruby>はどこですか。", questionEn: "Where is the station?",
        choices: ["右に曲がって直進、左", "左に曲がって直進、右", "まっすぐ行って右", "まっすぐ行って左"], choicesEn: ["Turn right, go straight, on the left", "Turn left, go straight, on the right", "Go straight and turn right", "Go straight and turn left"],
        choicesHtml: ["<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がって<ruby>直進<rt>ちょくしん</rt></ruby>、<ruby>左<rt>ひだり</rt></ruby>", "<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がって<ruby>直進<rt>ちょくしん</rt></ruby>、<ruby>右<rt>みぎ</rt></ruby>", "まっすぐ<ruby>行<rt>い</rt></ruby>って<ruby>右<rt>みぎ</rt></ruby>", "まっすぐ<ruby>行<rt>い</rt></ruby>って<ruby>左<rt>ひだり</rt></ruby>"],
        answer: 0, note: "「右に曲がって直進、左」です。", noteEn: "\"Turn right, go straight, then it's on the left.\"", transcriptEn: "Someone told me, \"Please turn right and go straight. Cross the intersection and it's on the left.\""
      },
      {
        id: "s3q2", question: "銀行はどこにありますか。", questionHtml: "<ruby>銀行<rt>ぎんこう</rt></ruby>はどこにありますか。", questionEn: "Where is the bank?",
        choices: ["スーパーの隣", "スーパーの向かい", "スーパーの前", "スーパーの後ろ"], choicesEn: ["Next to the supermarket", "Across from the supermarket", "In front of the supermarket", "Behind the supermarket"],
        choicesHtml: ["スーパーの<ruby>隣<rt>となり</rt></ruby>", "スーパーの<ruby>向<rt>む</rt></ruby>かい", "スーパーの<ruby>前<rt>まえ</rt></ruby>", "スーパーの<ruby>後<rt>うし</rt></ruby>ろ"],
        answer: 0, note: "「スーパーの隣」にあります。", noteEn: "It is \"next to the supermarket.\"", transcriptEn: "The bank is next to the supermarket."
      },
      {
        id: "s3q3", question: "バス停まで何分かかりますか。", questionHtml: "バス<ruby>停<rt>てい</rt></ruby>まで<ruby>何分<rt>なんぷん</rt></ruby>かかりますか。", questionEn: "How many minutes does it take to the bus stop?",
        choices: ["3分", "5分", "10分", "15分"], choicesEn: ["3 minutes", "5 minutes", "10 minutes", "15 minutes"],
        choicesHtml: ["<ruby>3分<rt>さんぷん</rt></ruby>", "<ruby>5分<rt>ごふん</rt></ruby>", "<ruby>10分<rt>じゅっぷん</rt></ruby>", "<ruby>15分<rt>じゅうごふん</rt></ruby>"],
        answer: 1, note: "「五分」です。", noteEn: "It is \"five minutes.\"", transcriptEn: "It's a five-minute walk to the bus stop."
      },
      {
        id: "s3q4", question: "新幹線は東京から大阪までどのくらいかかりますか。", questionHtml: "<ruby>新幹線<rt>しんかんせん</rt></ruby>は<ruby>東京<rt>とうきょう</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>までどのくらいかかりますか。", questionEn: "How long does the Shinkansen take from Tokyo to Osaka?",
        choices: ["1時間", "2時間", "2時間半", "3時間"], choicesEn: ["1 hour", "2 hours", "2.5 hours", "3 hours"],
        choicesHtml: ["<ruby>1時間<rt>いちじかん</rt></ruby>", "<ruby>2時間<rt>にじかん</rt></ruby>", "<ruby>2時間半<rt>にじかんはん</rt></ruby>", "<ruby>3時間<rt>さんじかん</rt></ruby>"],
        answer: 2, note: "「二時間半」です。", noteEn: "It is \"two and a half hours.\"", transcriptEn: "The Shinkansen takes 2.5 hours from Tokyo to Osaka."
      },
      {
        id: "s3q5", question: "出口はどこにありますか。", questionHtml: "<ruby>出口<rt>でぐち</rt></ruby>はどこにありますか。", questionEn: "Where is the exit?",
        choices: ["右側", "左側", "正面", "後ろ"], choicesEn: ["Right side", "Left side", "Front", "Back"],
        choicesHtml: ["<ruby>右側<rt>みぎがわ</rt></ruby>", "<ruby>左側<rt>ひだりがわ</rt></ruby>", "<ruby>正面<rt>しょうめん</rt></ruby>", "<ruby>後<rt>うし</rt></ruby>ろ"],
        answer: 1, note: "「左側」です。", noteEn: "It's the \"left side.\"", transcriptEn: "The exit is on the left side."
      },
      {
        id: "s3q6", question: "どうしてタクシーで行ったほうがいいですか。", questionHtml: "どうしてタクシーで<ruby>行<rt>い</rt></ruby>ったほうがいいですか。", questionEn: "Why is it better to go by taxi?",
        choices: ["速いから", "安いから", "飛行機が高いから", "バスがないから"], choicesEn: ["Because it's fast", "Because it's cheap", "Because the airplane is expensive", "Because there is no bus"],
        choicesHtml: ["<ruby>速<rt>はや</rt></ruby>いから", "<ruby>安<rt>やす</rt></ruby>いから", "<ruby>飛行機<rt>ひこうき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いから", "バスがないから"],
        answer: 2, note: "「飛行機は速いですが、少し高いです。だから、タクシーで行った方がいいと思います」。", noteEn: "The airplane is fast but expensive, so a taxi is better.", transcriptEn: "The airplane is fast but a little expensive. So, I think it's better to go by taxi.",
        inferenceHint: "The text says the airplane is fast but expensive. Therefore, a taxi is a better alternative."
      },
      {
        id: "s3q7", question: "郵便局はどこにありますか。", questionHtml: "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>はどこにありますか。", questionEn: "Where is the post office?",
        choices: ["角を曲がった所", "スーパーの隣", "学校の向かい", "駅の中"], choicesEn: ["Around the corner", "Next to the supermarket", "Across from the school", "Inside the station"],
        choicesHtml: ["<ruby>角<rt>かど</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>がった<ruby>所<rt>ところ</rt></ruby>", "スーパーの<ruby>隣<rt>となり</rt></ruby>", "<ruby>学校<rt>がっこう</rt></ruby>の<ruby>向<rt>む</rt></ruby>かい", "<ruby>駅<rt>えき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>"],
        answer: 0, note: "「角を曲がった所にありました」。", noteEn: "The post office was around the corner.", transcriptEn: "The post office was around the corner."
      },
      {
        id: "s3q8", question: "どうやって駅まで行きますか。", questionHtml: "どうやって<ruby>駅<rt>えき</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きますか。", questionEn: "How do you get to the station?",
        choices: ["電車で", "バスで", "自転車で", "歩いて"], choicesEn: ["By train", "By bus", "By bicycle", "On foot"],
        choicesHtml: ["<ruby>電車<rt>でんしゃ</rt></ruby>で", "バスで", "<ruby>自転車<rt>じてんしゃ</rt></ruby>で", "<ruby>歩<rt>ある</rt></ruby>いて"],
        answer: 2, note: "「自転車で駅まで十分です」。", noteEn: "It's 10 minutes to the station by bicycle.", transcriptEn: "It's 10 minutes to the station by bicycle."
      },
      {
        id: "s3q9", question: "エレベーターで何階に行きますか。", questionHtml: "エレベーターで<ruby>何階<rt>なんかい</rt></ruby>に<ruby>行<rt>い</rt></ruby>きますか。", questionEn: "What floor do you go to by elevator?",
        choices: ["一階", "二階", "三階", "四階"], choicesEn: ["1st floor", "2nd floor", "3rd floor", "4th floor"],
        choicesHtml: ["<ruby>一階<rt>いっかい</rt></ruby>", "<ruby>二階<rt>にかい</rt></ruby>", "<ruby>三階<rt>さんかい</rt></ruby>", "<ruby>四階<rt>よんかい</rt></ruby>"],
        answer: 2, note: "「エレベーターで三階に上がります」。", noteEn: "Take the elevator up to the third floor.", transcriptEn: "Take the elevator up to the third floor."
      },
      {
        id: "s3q10", question: "駐車場はどこにありますか。", questionHtml: "<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>はどこにありますか。", questionEn: "Where is the parking lot?",
        choices: ["建物の前", "建物の後ろ", "建物の隣", "建物の中"], choicesEn: ["In front of the building", "Behind the building", "Next to the building", "Inside the building"],
        choicesHtml: ["<ruby>建物<rt>たてもの</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>", "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>後<rt>うし</rt></ruby>ろ", "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>", "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>中<rt>なか</rt></ruby>"],
        answer: 1, note: "「建物の後ろです」。", noteEn: "The parking lot is behind the building.", transcriptEn: "The parking lot is behind the building."
      }
    ]
  },

  // ============================================================
  // SPRINT 04: Food, Shopping, Quantities
  // ============================================================
  {
    id: 4,
    title: "A Day of Shopping and Eating",
    storyJp: `先週（せんしゅう）、私（わたし）はデパートへ買（か）い物（もの）に行（い）きました。店員（てんいん）さんが「いらっしゃいませ。何（なに）を探（さが）していますか。」と言（い）いました。「このりんごは一個（いっこ）いくらですか。」と聞（き）きました。「三本（さんぼん）で五百円（ごひゃくえん）です。」と答（こた）えました。でも、もっと安（やす）いのはありませんかと聞（き）きました。服（ふく）を試着（しちゃく）してもいいですか。サイズが合（あ）いませんでした。クレジットカードは使（つか）えますか。いいえ、現金（げんきん）だけです。袋（ふくろ）は有料（ゆうりょう）ですか。レシートをください。その後（ご）、レストランで食（た）べました。寿司（すし）が食（た）べたいです。ラーメンに卵（たまご）を入（い）れてください。この料理（りょうり）は何（なに）が入（はい）っていますか。もう少（すこ）し辛（から）くしてください。食（た）べ終（お）わったら、お会計（かいけい）をお願（ねが）いします。五枚（ごまい）ください。飲（の）み放題（ほうだい）はありますか。予約（よやく）をしたいのです。でも、満席（まんせき）でした。一階（いっかい）でお待（ま）ちください。アルコールはありますか。ちょうど一万円（いちまんえん）でした。お釣（つ）りが違（ちが）いました。ポイントカードは持（も）っていますか。次（つぎ）、どうぞ。`,
    storyEn: `Last week, I went shopping at a department store. The clerk said, "Welcome. What are you looking for?" I asked, "How much is this apple?" They answered, "Three bottles for 500 yen." But I asked if they had something cheaper. May I try this on? The size didn't fit. Can I use a credit card? No, cash only. Is there a fee for the bag? Please give me the receipt. After that, I ate at a restaurant. I want to eat sushi. Please add an egg to the ramen. What does this dish contain? Please make it a little spicier. When I finished eating, I asked for the check. Please give me five (flat things). Do you have all-you-can-drink? I'd like to make a reservation. But it was fully booked. Please wait on the first floor. Do you have alcohol? It was exactly 10,000 yen. The change was wrong. Do you have a point card? Next, please.`,
    questions: [
      {
        id: "s4q1", question: "りんごは一個いくらですか。", questionHtml: "りんごは<ruby>一個<rt>いっこ</rt></ruby>いくらですか。", questionEn: "How much is one apple?",
        choices: ["100円", "200円", "300円", "400円"], choicesEn: ["100 yen", "200 yen", "300 yen", "400 yen"],
        choicesHtml: ["<ruby>100円<rt>ひゃくえん</rt></ruby>", "<ruby>200円<rt>にひゃくえん</rt></ruby>", "<ruby>300円<rt>さんびゃくえん</rt></ruby>", "<ruby>400円<rt>よんひゃくえん</rt></ruby>"],
        answer: 0, note: "「一個100円」です。三本で500円は別の商品です。", noteEn: "It's \"100 yen each.\" Three bottles for 500 yen is a different product.", transcriptEn: "\"This is 100 yen each.\""
      },
      {
        id: "s4q2", question: "三本でいくらですか。", questionHtml: "<ruby>三本<rt>さんぼん</rt></ruby>でいくらですか。", questionEn: "How much are three bottles?",
        choices: ["300円", "400円", "500円", "600円"], choicesEn: ["300 yen", "400 yen", "500 yen", "600 yen"],
        choicesHtml: ["<ruby>300円<rt>さんびゃくえん</rt></ruby>", "<ruby>400円<rt>よんひゃくえん</rt></ruby>", "<ruby>500円<rt>ごひゃくえん</rt></ruby>", "<ruby>600円<rt>ろっぴゃくえん</rt></ruby>"],
        answer: 2, note: "「三本で五百円」です。", noteEn: "\"Three bottles for 500 yen.\"", transcriptEn: "\"Three bottles for 500 yen.\""
      },
      {
        id: "s4q3", question: "何を食べたいですか。", questionHtml: "何を<ruby>食<rt>た</rt></ruby>べたいですか。", questionEn: "What do you want to eat?",
        choices: ["ラーメン", "寿司", "カレー", "うどん"], choicesEn: ["Ramen", "Sushi", "Curry", "Udon"],
        choicesHtml: ["ラーメン", "<ruby>寿司<rt>すし</rt></ruby>", "カレー", "うどん"],
        answer: 1, note: "「寿司が食べたい」です。", noteEn: "I \"want to eat sushi.\"", transcriptEn: "I want to eat sushi."
      },
      {
        id: "s4q4", question: "お会計はいくらでしたか。", questionHtml: "<ruby>お会計<rt>かいけい</rt></ruby>はいくらでしたか。", questionEn: "How much was the bill?",
        choices: ["五千円", "八千円", "一万円", "一万二千円"], choicesEn: ["5,000 yen", "8,000 yen", "10,000 yen", "12,000 yen"],
        choicesHtml: ["<ruby>五千円<rt>ごせんえん</rt></ruby>", "<ruby>八千円<rt>はっせんえん</rt></ruby>", "<ruby>一万円<rt>いちまんえん</rt></ruby>", "<ruby>一万二千円<rt>いちまんにせんえん</rt></ruby>"],
        answer: 2, note: "「ちょうど一万円」でした。", noteEn: "It was \"exactly 10,000 yen.\"", transcriptEn: "It was exactly 10,000 yen."
      },
      {
        id: "s4q5", question: "レストランはどうでしたか。", questionHtml: "レストランはどうでしたか。", questionEn: "How was the restaurant?",
        choices: ["予約できた", "満席だった", "安かった", "空いていた"], choicesEn: ["I could make a reservation", "It was fully booked", "It was cheap", "It was empty"],
        choicesHtml: ["<ruby>予約<rt>よやく</rt></ruby>できた", "<ruby>満席<rt>まんせき</rt></ruby>だった", "<ruby>安<rt>やす</rt></ruby>かった", "<ruby>空<rt>す</rt></ruby>いていた"],
        answer: 1, note: "「満席」でした。", noteEn: "It was \"fully booked.\"", transcriptEn: "I'd like to make a reservation. But it was fully booked."
      },
      {
        id: "s4q6", question: "服のサイズはどうでしたか。", questionHtml: "<ruby>服<rt>ふく</rt></ruby>のサイズはどうでしたか。", questionEn: "How was the size of the clothes?",
        choices: ["合った", "大きかった", "合わなかった", "小さかった"], choicesEn: ["It fit", "It was big", "It didn't fit", "It was small"],
        choicesHtml: ["<ruby>合<rt>あ</rt></ruby>った", "<ruby>大<rt>おお</rt></ruby>きかった", "<ruby>合<rt>あ</rt></ruby>わなかった", "<ruby>小<rt>ちい</rt></ruby>さかった"],
        answer: 2, note: "「サイズが合いませんでした」。", noteEn: "The size didn't fit.", transcriptEn: "The size didn't fit."
      },
      {
        id: "s4q7", question: "何で払いましたか。", questionHtml: "何で<ruby>払<rt>はら</rt></ruby>いましたか。", questionEn: "What did you pay with?",
        choices: ["クレジットカード", "現金", "ポイントカード", "スマホ"], choicesEn: ["Credit card", "Cash", "Point card", "Smartphone"],
        choicesHtml: ["クレジットカード", "<ruby>現金<rt>げんきん</rt></ruby>", "ポイントカード", "スマホ"],
        answer: 1, note: "「現金だけです」と書いてあります。", noteEn: "The text says \"Cash only.\"", transcriptEn: "No, cash only.", inferenceHint: "The clerk said 'No' to the credit card and said 'Cash only'."
      },
      {
        id: "s4q8", question: "ラーメンに何を入れますか。", questionHtml: "ラーメンに<ruby>何<rt>なに</rt></ruby>を<ruby>入<rt>い</rt></ruby>れますか。", questionEn: "What do you put in the ramen?",
        choices: ["肉", "卵", "野菜", "チーズ"], choicesEn: ["Meat", "Egg", "Vegetables", "Cheese"],
        choicesHtml: ["<ruby>肉<rt>にく</rt></ruby>", "<ruby>卵<rt>たまご</rt></ruby>", "<ruby>野菜<rt>やさい</rt></ruby>", "チーズ"],
        answer: 1, note: "「ラーメンに卵を入れてください」。", noteEn: "Please add an egg to the ramen.", transcriptEn: "Please add an egg to the ramen."
      },
      {
        id: "s4q9", question: "お釣りはどうしましたか。", questionHtml: "<ruby>お釣<rt>おつ</rt></ruby>りはどうしましたか。", questionEn: "What happened with the change?",
        choices: ["多かった", "少なかった", "違った", "もらえなかった"], choicesEn: ["It was too much", "It was too little", "It was wrong", "I didn't receive it"],
        choicesHtml: ["<ruby>多<rt>おお</rt></ruby>かった", "<ruby>少<rt>すく</rt></ruby>なかった", "<ruby>違<rt>ちが</rt></ruby>った", "もらえなかった"],
        answer: 2, note: "「お釣りが違いました」。", noteEn: "The change was wrong.", transcriptEn: "The change was wrong."
      },
      {
        id: "s4q10", question: "飲み放題はありましたか。", questionHtml: "<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>はありましたか。", questionEn: "Did they have all-you-can-drink?",
        choices: ["はい", "いいえ", "少しあった", "わからない"], choicesEn: ["Yes", "No", "A little", "I don't know"],
        choicesHtml: ["はい", "いいえ", "少しあった", "わからない"],
        answer: 1, note: "「予約をしたいけど、満席でした。飲み放題はありますか」の文脈から、座れなかったので利用できませんでした。", noteEn: "The restaurant was fully booked, so they couldn't use the all-you-can-drink.", transcriptEn: "I'd like to make a reservation. But it was fully booked.", inferenceHint: "Because it was fully booked (満席), they could not stay to use the all-you-can-drink."
      }
    ]
  },

  // ============================================================
  // SPRINT 05: Weather, Adjectives, Feelings
  // ============================================================
  {
    id: 5,
    title: "Weather and Emotions",
    storyJp: `天気（てんき）は私（わたし）の気持（きも）ちに大（おお）きな影響（えいきょう）を与（あた）えます。今日（きょう）はとても暑（あつ）いです。でも、昨日（きのう）は涼（すず）しかったです。明日（あした）は寒（さむ）くなるでしょう。天気予報（てんきよほう）によると、雨（あめ）が降（ふ）ります。まず、曇（くも）りのち雨（あめ）で、その後（ご）晴（は）れのち曇（くも）りだそうです。風（かぜ）が強（つよ）いです。湿度（しつど）が高（たか）くて不快（ふかい）です。冬（ふゆ）には雪（ゆき）が降（ふ）っています。時々（ときどき）、台風（たいふう）が近（ちか）づいています。気温（きおん）は二十度（にじゅうど）です。暑（あつ）くて眠（ねむ）れません。暖房（だんぼう）をつけてください。でも、冷房（れいぼう）が効（き）きすぎです。花粉（かふん）で目（め）がかゆいです。彼（かれ）は嬉（うれ）しそうです。私（わたし）は緊張（きんちょう）して手（て）が震（ふる）えています。昨日（きのう）、悲（かな）しい映画（えいが）を見（み）て泣（な）きました。でも、先週（せんしゅう）の旅行（りょこう）は楽（たの）しかったです。先週（せんしゅう）の会議（かいぎ）は退屈（たいくつ）でした。今（いま）、疲（つか）れたので早（はや）く帰（かえ）ります。暇（ひま）な時（とき）は本（ほん）を読（よ）みます。忙（いそが）しいですか。大変（たいへん）でしたね。最後（さいご）に、素晴（すば）らしいアイデアがあります。`,
    storyEn: `Weather has a big influence on my feelings. Today is very hot. But yesterday was cool. It will probably get cold tomorrow. According to the weather forecast, it will rain. First, cloudy then rain, and after that, sunny then cloudy, they say. The wind is strong. The humidity is high and it's uncomfortable. In winter, it's snowing. Sometimes, a typhoon is approaching. The temperature is 20 degrees. It's so hot I can't sleep. Please turn on the heater. But the AC is too strong. My eyes are itchy due to pollen. He looks happy. I'm nervous and my hands are shaking. Yesterday, I watched a sad movie and cried. But last week's trip was fun. Last week's meeting was boring. Now, I'm tired, so I'll go home early. When I'm free, I read books. Are you busy? That was tough, wasn't it? Finally, I have a wonderful idea.`,
    questions: [
      {
        id: "s5q1", question: "今日の天気はどうですか。", questionHtml: "<ruby>今日<rt>きょう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>はどうですか。", questionEn: "How is the weather today?",
        choices: ["暑い", "寒い", "涼しい", "暖かい"], choicesEn: ["Hot", "Cold", "Cool", "Warm"],
        choicesHtml: ["<ruby>暑<rt>あつ</rt></ruby>い", "<ruby>寒<rt>さむ</rt></ruby>い", "<ruby>涼<rt>すず</rt></ruby>しい", "<ruby>暖<rt>あたた</rt></ruby>かい"],
        answer: 0, note: "「今日はとても暑い」です。", noteEn: "\"Today is very hot.\"", transcriptEn: "Today is very hot."
      },
      {
        id: "s5q2", question: "天気予報によると何が降りますか。", questionHtml: "<ruby>天気予報<rt>てんきよほう</rt></ruby>によると<ruby>何<rt>なに</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りますか。", questionEn: "According to the weather forecast, what will fall?",
        choices: ["雪", "雨", "雷", "雹"], choicesEn: ["Snow", "Rain", "Thunder", "Hail"],
        choicesHtml: ["<ruby>雪<rt>ゆき</rt></ruby>", "<ruby>雨<rt>あめ</rt></ruby>", "<ruby>雷<rt>かみなり</rt></ruby>", "<ruby>雹<rt>ひょう</rt></ruby>"],
        answer: 1, note: "「雨が降ります」と予報しています。", noteEn: "The forecast says \"it will rain.\"", transcriptEn: "According to the weather forecast, it will rain."
      },
      {
        id: "s5q3", question: "気温は何度ですか。", questionHtml: "<ruby>気温<rt>きおん</rt></ruby>は<ruby>何度<rt>なんど</rt></ruby>ですか。", questionEn: "What is the temperature?",
        choices: ["10度", "15度", "20度", "25度"], choicesEn: ["10 degrees", "15 degrees", "20 degrees", "25 degrees"],
        choicesHtml: ["<ruby>10度<rt>じゅうど</rt></ruby>", "<ruby>15度<rt>じゅうごど</rt></ruby>", "<ruby>20度<rt>にじゅうど</rt></ruby>", "<ruby>25度<rt>にじゅうごど</rt></ruby>"],
        answer: 2, note: "「気温は二十度」です。", noteEn: "\"The temperature is 20 degrees.\"", transcriptEn: "The temperature is 20 degrees."
      },
      {
        id: "s5q4", question: "なぜ眠れませんか。", questionHtml: "なぜ<ruby>眠<rt>ねむ</rt></ruby>れませんか。", questionEn: "Why can't you sleep?",
        choices: ["寒いから", "暑いから", "忙しいから", "疲れたから"], choicesEn: ["Because it's cold", "Because it's hot", "Because I'm busy", "Because I'm tired"],
        choicesHtml: ["<ruby>寒<rt>さむ</rt></ruby>いから", "<ruby>暑<rt>あつ</rt></ruby>いから", "<ruby>忙<rt>いそが</rt></ruby>しいから", "<ruby>疲<rt>つか</rt></ruby>れたから"],
        answer: 1, note: "「暑くて眠れません」と書いてあります。", noteEn: "It says, \"It's so hot I can't sleep.\"", transcriptEn: "It's so hot I can't sleep."
      },
      {
        id: "s5q5", question: "昨日何を見ましたか。", questionHtml: "<ruby>昨日<rt>きのう</rt></ruby><ruby>何<rt>なに</rt></ruby>を<ruby>見<rt>み</rt></ruby>ましたか。", questionEn: "What did you watch yesterday?",
        choices: ["ドラマ", "映画", "アニメ", "ニュース"], choicesEn: ["A drama", "A movie", "Anime", "The news"],
        choicesHtml: ["ドラマ", "<ruby>映画<rt>えいが</rt></ruby>", "アニメ", "ニュース"],
        answer: 1, note: "「悲しい映画を見ました」。", noteEn: "I watched a \"sad movie.\"", transcriptEn: "Yesterday, I watched a sad movie and cried."
      },
      {
        id: "s5q6", question: "冬は何が降っていますか。", questionHtml: "<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていますか。", questionEn: "What is falling in winter?",
        choices: ["雨", "雪", "雹", "花粉"], choicesEn: ["Rain", "Snow", "Hail", "Pollen"],
        choicesHtml: ["<ruby>雨<rt>あめ</rt></ruby>", "<ruby>雪<rt>ゆき</rt></ruby>", "<ruby>雹<rt>ひょう</rt></ruby>", "<ruby>花粉<rt>かふん</rt></ruby>"],
        answer: 1, note: "「冬には雪が降っています」。", noteEn: "In winter, it's snowing.", transcriptEn: "In winter, it's snowing."
      },
      {
        id: "s5q7", question: "どうして目がかゆいですか。", questionHtml: "どうして<ruby>目<rt>め</rt></ruby>がかゆいですか。", questionEn: "Why are your eyes itchy?",
        choices: ["風が強いから", "花粉だから", "台風だから", "雪だから"], choicesEn: ["Because the wind is strong", "Because of pollen", "Because of a typhoon", "Because of snow"],
        choicesHtml: ["<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>いから", "<ruby>花粉<rt>かふん</rt></ruby>だから", "<ruby>台風<rt>たいふう</rt></ruby>だから", "<ruby>雪<rt>ゆき</rt></ruby>だから"],
        answer: 1, note: "「花粉で目がかゆいです」。", noteEn: "My eyes are itchy due to pollen.", transcriptEn: "My eyes are itchy due to pollen."
      },
      {
        id: "s5q8", question: "彼はどんな様子ですか。", questionHtml: "<ruby>彼<rt>かれ</rt></ruby>はどんな<ruby>様子<rt>ようす</rt></ruby>ですか。", questionEn: "How does he look?",
        choices: ["悲しそう", "嬉しそう", "寂しそう", "眠そう"], choicesEn: ["Sad", "Happy", "Lonely", "Sleepy"],
        choicesHtml: ["<ruby>悲<rt>かな</rt></ruby>しそう", "<ruby>嬉<rt>うれ</rt></ruby>しそう", "<ruby>寂<rt>さび</rt></ruby>しそう", "<ruby>眠<rt>ねむ</rt></ruby>そう"],
        answer: 1, note: "「彼は嬉しそうです」。", noteEn: "He looks happy.", transcriptEn: "He looks happy."
      },
      {
        id: "s5q9", question: "先週の会議はどうでしたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>はどうでしたか。", questionEn: "How was last week's meeting?",
        choices: ["楽しかった", "退屈だった", "大変だった", "短かった"], choicesEn: ["Fun", "Boring", "Tough", "Short"],
        choicesHtml: ["<ruby>楽<rt>たの</rt></ruby>しかった", "<ruby>退屈<rt>たいくつ</rt></ruby>だった", "<ruby>大変<rt>たいへん</rt></ruby>だった", "<ruby>短<rt>みじか</rt></ruby>かった"],
        answer: 1, note: "「先週の会議は退屈でした」。", noteEn: "Last week's meeting was boring.", transcriptEn: "Last week's meeting was boring."
      },
      {
        id: "s5q10", question: "今、どうして早く帰りますか。", questionHtml: "<ruby>今<rt>いま</rt></ruby>、どうして<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>りますか。", questionEn: "Why are you going home early now?",
        choices: ["暇だから", "忙しいから", "疲れたから", "寒いから"], choicesEn: ["Because I'm free", "Because I'm busy", "Because I'm tired", "Because it's cold"],
        choicesHtml: ["<ruby>暇<rt>ひま</rt></ruby>だから", "<ruby>忙<rt>いそが</rt></ruby>しいから", "<ruby>疲<rt>つか</rt></ruby>れたから", "<ruby>寒<rt>さむ</rt></ruby>いから"],
        answer: 2, note: "「今、疲れたので早く帰ります」。", noteEn: "Now, I'm tired, so I'll go home early.", transcriptEn: "Now, I'm tired, so I'll go home early."
      }
    ]
  },

  // ============================================================
  // SPRINT 06: Hobbies, Giving/Receiving
  // ============================================================
  {
    id: 6,
    title: "Hobbies and Helping Others",
    storyJp: `私（わたし）の趣味（しゅみ）は写真（しゃしん）を撮（と）ることです。また、ギターを弾（ひ）くことができます。映画（えいが）を見（み）るのも好（す）きです。毎週（まいしゅう）ジョギングをしています。今（いま）、料理（りょうり）を習（なら）っています。先週（せんしゅう）、友達（ともだち）に本（ほん）を貸（か）しました。兄（あに）から時計（とけい）をもらいました。嬉（うれ）しかったです。彼女（かのじょ）の誕生日（たんじょうび）に花（はな）をあげました。彼女（かのじょ）は喜（よろこ）んでくれました。先生（せんせい）が丁寧（ていねい）に教（おし）えてくれました。友達（ともだち）が手伝（てつだ）ってくれました。祖母（そぼ）に手紙（てがみ）を書（か）きました。荷物（にもつ）を送（おく）ってあげます。褒（ほ）められて嬉（うれ）しかったです。先週（せんしゅう）の試合（しあい）に勝（か）ちました。でも、先々週（せんせんしゅう）のゲームには負（ま）けました。毎朝（まいあさ）瞑想（めいそう）をします。ヨガを習（なら）いたいです。キャンプに行（い）ったことがあります。釣（つ）りが好（す）きです。ダンスを踊（おど）るのが上手（じょうず）です。でも、歌（うた）うのが下手（へた）です。絵（え）を描（か）くことが楽（たの）しいです。犬（いぬ）の散歩（さんぽ）を頼（たの）まれました。百科事典（ひゃっかじてん）を引（ひ）きました。最後（さいご）に、交換（こうかん）してもらえますか。`,
    storyEn: `My hobby is taking photos. Also, I can play the guitar. I also like watching movies. I go jogging every week. I'm learning to cook now. Last week, I lent a book to my friend. I received a watch from my brother. I was happy. I gave her flowers for her birthday. She was pleased. The teacher taught me politely. My friend helped me. I wrote a letter to my grandmother. I'll send the package for you. I was happy to be praised. I won the match last week. But I lost the game the week before. I meditate every morning. I want to learn yoga. I have been camping before. I like fishing. I'm good at dancing. But I'm bad at singing. Drawing pictures is fun. I was asked to walk the dog. I looked up the encyclopedia. Finally, could you exchange it for me?`,
    questions: [
      {
        id: "s6q1", question: "趣味は何ですか。", questionHtml: "<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>ですか。", questionEn: "What is your hobby?",
        choices: ["写真を撮ること", "ギターを弾くこと", "映画を見ること", "料理をすること"], choicesEn: ["Taking photos", "Playing guitar", "Watching movies", "Cooking"],
        choicesHtml: ["<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ること", "ギターを<ruby>弾<rt>ひ</rt></ruby>くこと", "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ること", "<ruby>料理<rt>りょうり</rt></ruby>をすること"],
        answer: 0, note: "「写真を撮ること」が趣味です。", noteEn: "\"Taking photos\" is my hobby.", transcriptEn: "My hobby is taking photos."
      },
      {
        id: "s6q2", question: "何を習っていますか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>を<ruby>習<rt>なら</rt></ruby>っていますか。", questionEn: "What are you learning?",
        choices: ["英語", "料理", "ピアノ", "ギター"], choicesEn: ["English", "Cooking", "Piano", "Guitar"],
        choicesHtml: ["<ruby>英語<rt>えいご</rt></ruby>", "<ruby>料理<rt>りょうり</rt></ruby>", "ピアノ", "ギター"],
        answer: 1, note: "「料理を習っています」。", noteEn: "I'm learning \"cooking.\"", transcriptEn: "I'm learning to cook now."
      },
      {
        id: "s6q3", question: "友達に何を貸しましたか。", questionHtml: "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>貸<rt>か</rt></ruby>しましたか。", questionEn: "What did you lend to your friend?",
        choices: ["本", "ペン", "時計", "鍵"], choicesEn: ["A book", "A pen", "A watch", "A key"],
        choicesHtml: ["<ruby>本<rt>ほん</rt></ruby>", "ペン", "<ruby>時計<rt>とけい</rt></ruby>", "<ruby>鍵<rt>かぎ</rt></ruby>"],
        answer: 0, note: "「友達に本を貸しました」。", noteEn: "I lent \"a book\" to my friend.", transcriptEn: "Last week, I lent a book to my friend."
      },
      {
        id: "s6q4", question: "誰から時計をもらいましたか。", questionHtml: "<ruby>誰<rt>だれ</rt></ruby>から<ruby>時計<rt>とけい</rt></ruby>をもらいましたか。", questionEn: "From whom did you receive a watch?",
        choices: ["父", "母", "兄", "友達"], choicesEn: ["Father", "Mother", "Older brother", "Friend"],
        choicesHtml: ["<ruby>父<rt>ちち</rt></ruby>", "<ruby>母<rt>はは</rt></ruby>", "<ruby>兄<rt>あに</rt></ruby>", "<ruby>友達<rt>ともだち</rt></ruby>"],
        answer: 2, note: "「兄から時計をもらいました」。", noteEn: "I received a watch from my \"older brother.\"", transcriptEn: "I received a watch from my brother."
      },
      {
        id: "s6q5", question: "何が上手ですか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですか。", questionEn: "What are you good at?",
        choices: ["歌", "ダンス", "絵", "料理"], choicesEn: ["Singing", "Dancing", "Drawing", "Cooking"],
        choicesHtml: ["<ruby>歌<rt>うた</rt></ruby>", "ダンス", "<ruby>絵<rt>え</rt></ruby>", "<ruby>料理<rt>りょうり</rt></ruby>"],
        answer: 1, note: "「ダンスを踊るのが上手」です。", noteEn: "I'm good at \"dancing.\"", transcriptEn: "I'm good at dancing. But I'm bad at singing."
      },
      {
        id: "s6q6", question: "先週の試合はどうでしたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>はどうでしたか。", questionEn: "How was last week's match?",
        choices: ["勝った", "負けた", "引き分けだった", "中止だった"], choicesEn: ["Won", "Lost", "Tied", "Canceled"],
        choicesHtml: ["<ruby>勝<rt>か</rt></ruby>った", "<ruby>負<rt>ま</rt></ruby>けた", "<ruby>引<rt>ひ</rt></ruby>き<ruby>分<rt>わ</rt></ruby>けだった", "<ruby>中止<rt>ちゅうし</rt></ruby>だった"],
        answer: 0, note: "「先週の試合に勝ちました」。", noteEn: "I won the match last week.", transcriptEn: "I won the match last week. But I lost the game the week before."
      },
      {
        id: "s6q7", question: "彼女の誕生日に何をあげましたか。", questionHtml: "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をあげましたか。", questionEn: "What did you give her for her birthday?",
        choices: ["時計", "花", "本", "手紙"], choicesEn: ["A watch", "Flowers", "A book", "A letter"],
        choicesHtml: ["<ruby>時計<rt>とけい</rt></ruby>", "<ruby>花<rt>はな</rt></ruby>", "<ruby>本<rt>ほん</rt></ruby>", "<ruby>手紙<rt>てがみ</rt></ruby>"],
        answer: 1, note: "「彼女の誕生日に花をあげました」。", noteEn: "I gave her flowers for her birthday.", transcriptEn: "I gave her flowers for her birthday."
      },
      {
        id: "s6q8", question: "誰に手紙を書きましたか。", questionHtml: "<ruby>誰<rt>だれ</rt></ruby>に<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きましたか。", questionEn: "Who did you write a letter to?",
        choices: ["友達", "先生", "祖母", "兄"], choicesEn: ["A friend", "A teacher", "Grandmother", "Older brother"],
        choicesHtml: ["<ruby>友達<rt>ともだち</rt></ruby>", "<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>祖母<rt>そぼ</rt></ruby>", "<ruby>兄<rt>あに</rt></ruby>"],
        answer: 2, note: "「祖母に手紙を書きました」。", noteEn: "I wrote a letter to my grandmother.", transcriptEn: "I wrote a letter to my grandmother."
      },
      {
        id: "s6q9", question: "毎朝何をしますか。", questionHtml: "<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何<rt>なに</rt></ruby>をしますか。", questionEn: "What do you do every morning?",
        choices: ["瞑想", "ヨガ", "ジョギング", "釣り"], choicesEn: ["Meditation", "Yoga", "Jogging", "Fishing"],
        choicesHtml: ["<ruby>瞑想<rt>めいそう</rt></ruby>", "ヨガ", "ジョギング", "<ruby>釣<rt>つ</rt></ruby>り"],
        answer: 0, note: "「毎朝瞑想をします」。", noteEn: "I meditate every morning.", transcriptEn: "I meditate every morning."
      },
      {
        id: "s6q10", question: "誰に犬の散歩を頼まれましたか。", questionHtml: "<ruby>誰<rt>だれ</rt></ruby>に<ruby>犬<rt>いぬ</rt></ruby>の<ruby>散歩<rt>さんぽ</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>まれましたか。", questionEn: "Who asked you to walk the dog?",
        choices: ["友達", "先生", "家族", "誰かわからない"], choicesEn: ["A friend", "A teacher", "A family member", "Unknown"],
        choicesHtml: ["<ruby>友達<rt>ともだち</rt></ruby>", "<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>家族<rt>かぞく</rt></ruby>", "<ruby>誰<rt>だれ</rt></ruby>かわからない"],
        answer: 3, note: "テキストには「犬の散歩を頼まれました」とありますが、誰に頼まれたかは書いてありません。", noteEn: "The text says 'I was asked to walk the dog,' but doesn't specify who asked.", transcriptEn: "I was asked to walk the dog.", inferenceHint: "The text does not mention who asked, only that the action was requested."
      }
    ]
  },

  // ============================================================
  // SPRINT 07: Body, Health, Emergencies
  // ============================================================
  {
    id: 7,
    title: "Taking Care of My Health",
    storyJp: `昨日（きのう）、体調（たいちょう）が悪（わる）かったです。まず、頭（あたま）が痛（いた）かったです。それから、歯（は）も痛（いた）かったので歯医者（はいしゃ）に行（い）きました。熱（ねつ）がありました。咳（せき）も出（で）ました。くしゃみが止（や）まりませんでした。気分（きぶん）が悪（わる）かったです。病院（びょういん）に行（い）った方（ほう）がいいと思（おも）いました。薬（くすり）を飲（の）みましたか。医者（いしゃ）は安静（あんせい）にするように言（い）いました。パソコンを使（つか）いすぎて、目（め）が疲（つか）れました。先週（せんしゅう）、運動（うんどう）中（ちゅう）に足（あし）を捻（ねん）じました。とても痛（いた）かったです。もし大変（たいへん）な時（とき）は、救急車（きゅうきゅうしゃ）を呼（よ）んでください。去年（きょねん）、事故（じこ）に遭（あ）いました。保険証（ほけんしょう）は持（も）っていますか。診察（しんさつ）を受（う）けました。手術（しゅじゅつ）が必要（ひつよう）でした。注射（ちゅうしゃ）が怖（こわ）いです。最近（さいきん）、視力（しりょく）が悪（わる）くなりました。健康（けんこう）のために運動（うんどう）します。よく寝（ね）ることが大切（たいせつ）です。`,
    storyEn: `Yesterday, I wasn't feeling well. First, I had a headache. Then, I had a toothache too, so I went to the dentist. I had a fever. I also had a cough. My sneezing wouldn't stop. I felt sick. I thought I should go to the hospital. Did you take your medicine? The doctor told me to rest. I used the computer too much, so my eyes are tired. Last week, I sprained my ankle while exercising. It hurt a lot. If it's serious, please call an ambulance. Last year, I had an accident. Do you have your insurance card? I received a medical examination. Surgery was necessary. I'm afraid of injections. Recently, my eyesight has gotten worse. I exercise for my health. Getting enough sleep is important.`,
    questions: [
      {
        id: "s7q1", question: "昨日、何が痛かったですか。", questionHtml: "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>かったですか。", questionEn: "What hurt yesterday?",
        choices: ["頭と歯", "頭だけ", "歯だけ", "目"], choicesEn: ["Head and teeth", "Only the head", "Only the teeth", "Eyes"],
        choicesHtml: ["<ruby>頭<rt>あたま</rt></ruby>と<ruby>歯<rt>は</rt></ruby>", "<ruby>頭<rt>あたま</rt></ruby>だけ", "<ruby>歯<rt>は</rt></ruby>だけ", "<ruby>目<rt>め</rt></ruby>"],
        answer: 0, note: "「頭が痛くて、歯も痛かった」です。", noteEn: "\"My head hurt, and my teeth hurt too.\"", transcriptEn: "First, I had a headache. Then, I had a toothache too, so I went to the dentist."
      },
      {
        id: "s7q2", question: "何がありましたか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>がありましたか。", questionEn: "What did you have?",
        choices: ["熱と咳", "熱と鼻水", "咳と鼻水", "熱だけ"], choicesEn: ["Fever and cough", "Fever and runny nose", "Cough and runny nose", "Only fever"],
        choicesHtml: ["<ruby>熱<rt>ねつ</rt></ruby>と<ruby>咳<rt>せき</rt></ruby>", "<ruby>熱<rt>ねつ</rt></ruby>と<ruby>鼻水<rt>はなみず</rt></ruby>", "<ruby>咳<rt>せき</rt></ruby>と<ruby>鼻水<rt>はなみず</rt></ruby>", "<ruby>熱<rt>ねつ</rt></ruby>だけ"],
        answer: 0, note: "「熱があり、咳も出ました」。", noteEn: "\"I had a fever. I also had a cough.\"", transcriptEn: "I had a fever. I also had a cough."
      },
      {
        id: "s7q3", question: "医者は何と言いましたか。", questionHtml: "<ruby>医者<rt>いしゃ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", questionEn: "What did the doctor say?",
        choices: ["安静にする", "病院に行く", "薬を飲む", "運動する"], choicesEn: ["To rest", "To go to the hospital", "To take medicine", "To exercise"],
        choicesHtml: ["<ruby>安静<rt>あんせい</rt></ruby>にする", "<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>く", "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>む", "<ruby>運動<rt>うんどう</rt></ruby>する"],
        answer: 0, note: "「安静にするように言いました」。", noteEn: "The doctor said \"to rest.\"", transcriptEn: "The doctor told me to rest."
      },
      {
        id: "s7q4", question: "先週、何をしましたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしましたか。", questionEn: "What did you do last week?",
        choices: ["足を捻った", "手を怪我した", "頭を打った", "背中を痛めた"], choicesEn: ["Sprained my ankle", "Injured my hand", "Hit my head", "Hurt my back"],
        choicesHtml: ["<ruby>足<rt>あし</rt></ruby>を<ruby>捻<rt>ねん</rt></ruby>った", "<ruby>手<rt>て</rt></ruby>を<ruby>怪我<rt>けが</rt></ruby>した", "<ruby>頭<rt>あたま</rt></ruby>を<ruby>打<rt>う</rt></ruby>った", "<ruby>背中<rt>せなか</rt></ruby>を<ruby>痛<rt>いた</rt></ruby>めた"],
        answer: 0, note: "「運動中に足を捻りました」。", noteEn: "I \"sprained my ankle\" while exercising.", transcriptEn: "Last week, I sprained my ankle while exercising. It hurt a lot."
      },
      {
        id: "s7q5", question: "健康のために何が大切ですか。", questionHtml: "<ruby>健康<rt>けんこう</rt></ruby>のために<ruby>何<rt>なに</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>ですか。", questionEn: "What is important for your health?",
        choices: ["運動", "よく寝ること", "薬を飲む", "食べること"], choicesEn: ["Exercise", "Getting enough sleep", "Taking medicine", "Eating"],
        choicesHtml: ["<ruby>運動<rt>うんどう</rt></ruby>", "よく<ruby>寝<rt>ね</rt></ruby>ること", "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むこと", "<ruby>食<rt>た</rt></ruby>べること"],
        answer: 1, note: "「よく寝ることが大切です」。", noteEn: "\"Getting enough sleep\" is important.", transcriptEn: "Getting enough sleep is important."
      },
      {
        id: "s7q6", question: "どうして歯医者に行きましたか。", questionHtml: "どうして<ruby>歯医者<rt>はいしゃ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましたか。", questionEn: "Why did you go to the dentist?",
        choices: ["熱があったから", "歯が痛かったから", "目が疲れたから", "足を捻ったから"], choicesEn: ["Because I had a fever", "Because my tooth hurt", "Because my eyes were tired", "Because I sprained my ankle"],
        choicesHtml: ["<ruby>熱<rt>ねつ</rt></ruby>があったから", "<ruby>歯<rt>は</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>かったから", "<ruby>目<rt>め</rt></ruby>が<ruby>疲<rt>つか</rt></ruby>れたから", "<ruby>足<rt>あし</rt></ruby>を<ruby>捻<rt>ねん</rt></ruby>ったから"],
        answer: 1, note: "「歯も痛かったので歯医者に行きました」。", noteEn: "Because I had a toothache too, I went to the dentist.", transcriptEn: "Then, I had a toothache too, so I went to the dentist."
      },
      {
        id: "s7q7", question: "どうして目が疲れましたか。", questionHtml: "どうして<ruby>目<rt>め</rt></ruby>が<ruby>疲<rt>つか</rt></ruby>れましたか。", questionEn: "Why were your eyes tired?",
        choices: ["本を読みすぎたから", "テレビを見すぎたから", "パソコンを使いすぎたから", "寝すぎたから"], choicesEn: ["Because I read too many books", "Because I watched too much TV", "Because I used the computer too much", "Because I slept too much"],
        choicesHtml: ["<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みすぎたから", "テレビを<ruby>見<rt>み</rt></ruby>すぎたから", "パソコンを<ruby>使<rt>つか</rt></ruby>いすぎたから", "<ruby>寝<rt>ね</rt></ruby>すぎたから"],
        answer: 2, note: "「パソコンを使いすぎて、目が疲れました」。", noteEn: "I used the computer too much, so my eyes are tired.", transcriptEn: "I used the computer too much, so my eyes are tired."
      },
      {
        id: "s7q8", question: "大変な時はどうしますか。", questionHtml: "<ruby>大変<rt>たいへん</rt></ruby>な<ruby>時<rt>とき</rt></ruby>はどうしますか。", questionEn: "What do you do when it's serious?",
        choices: ["救急車を呼ぶ", "病院に行く", "薬を飲む", "寝る"], choicesEn: ["Call an ambulance", "Go to the hospital", "Take medicine", "Sleep"],
        choicesHtml: ["<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶ", "<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>く", "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>む", "<ruby>寝<rt>ね</rt></ruby>る"],
        answer: 0, note: "「もし大変な時は、救急車を呼んでください」。", noteEn: "If it's serious, please call an ambulance.", transcriptEn: "If it's serious, please call an ambulance."
      },
      {
        id: "s7q9", question: "去年、何に遭いましたか。", questionHtml: "<ruby>去年<rt>きょねん</rt></ruby>、<ruby>何<rt>なに</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>いましたか。", questionEn: "What did you encounter last year?",
        choices: ["事故", "台風", "地震", "火事"], choicesEn: ["An accident", "A typhoon", "An earthquake", "A fire"],
        choicesHtml: ["<ruby>事故<rt>じこ</rt></ruby>", "<ruby>台風<rt>たいふう</rt></ruby>", "<ruby>地震<rt>じしん</rt></ruby>", "<ruby>火事<rt>かじ</rt></ruby>"],
        answer: 0, note: "「去年、事故に遭いました」。", noteEn: "Last year, I had an accident.", transcriptEn: "Last year, I had an accident."
      },
      {
        id: "s7q10", question: "最近、どうなりましたか。", questionHtml: "<ruby>最近<rt>さいきん</rt></ruby>、どうなりましたか。", questionEn: "What happened recently?",
        choices: ["背が高くなった", "視力が悪くなった", "太った", "髪が短くなった"], choicesEn: ["Got taller", "Eyesight got worse", "Gained weight", "Hair got shorter"],
        choicesHtml: ["<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなった", "<ruby>視力<rt>しりょく</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなった", "<ruby>太<rt>ふと</rt></ruby>った", "<ruby>髪<rt>かみ</rt></ruby>が<ruby>短<rt>みじか</rt></ruby>くなった"],
        answer: 1, note: "「最近、視力が悪くなりました」。", noteEn: "Recently, my eyesight has gotten worse.", transcriptEn: "Recently, my eyesight has gotten worse."
      }
    ]
  },

  // ============================================================
  // SPRINT 08: House, Rooms, Objects
  // ============================================================
  {
    id: 8,
    title: "Around My House",
    storyJp: `私（わたし）の家（いえ）は駅（えき）から近（ちか）いです。とても便利（べんり）です。リビングにソファがあります。寝室（しんしつ）は二階（にかい）です。キッチンは狭（せま）いですが、綺麗（きれい）です。毎日（まいにち）、風呂（ふろ）に入（はい）ります。洗面所（せんめんじょ）で手（て）を洗（あら）います。先週（せんしゅう）、庭（にわ）に木（き）を植（う）えました。朝（あさ）、窓（まど）を開（あ）けて空気（くうき）を入（い）れます。夜（よる）、カーテンを閉（し）めます。電気（でんき）を消（け）してください。あっ！冷蔵庫（れいぞうこ）に牛乳（ぎゅうにゅう）がありません。電子レンジで温（あたた）めます。掃除機（そうじき）をかけてください。洗濯機（せんたくき）を回（まわ）します。毎週（まいしゅう）、ゴミを出（だ）してください。晴（は）れた日（ひ）は、ベランダに洗濯物（せんたくもの）を干（ほ）します。出（で）かける時（とき）、鍵（かぎ）をかけ忘（わす）れました。住所（じゅうしょ）を書（か）いてください。階段（かいだん）を上（のぼ）ります。エアコンをつけっぱなしにしないでください。`,
    storyEn: `My house is close to the station. It's very convenient. There is a sofa in the living room. The bedroom is on the second floor. The kitchen is small but clean. Every day, I take a bath. I wash my hands in the bathroom. Last week, I planted a tree in the garden. In the morning, I open the window to let in air. At night, I close the curtains. Please turn off the lights. Oh! There's no milk in the fridge. I heat it in the microwave. Please vacuum. I run the washing machine. Every week, please take out the trash. On sunny days, I hang the laundry on the balcony. When I left, I forgot to lock. Please write your address. Go up the stairs. Please don't leave the AC on.`,
    questions: [
      {
        id: "s8q1", question: "家は駅からどうですか。", questionHtml: "<ruby>家<rt>いえ</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>からどうですか。", questionEn: "How is your house from the station?",
        choices: ["近い", "遠い", "便利", "不便"], choicesEn: ["Close", "Far", "Convenient", "Inconvenient"],
        choicesHtml: ["<ruby>近<rt>ちか</rt></ruby>い", "<ruby>遠<rt>とお</rt></ruby>い", "<ruby>便利<rt>べんり</rt></ruby>", "<ruby>不便<rt>ふべん</rt></ruby>"],
        answer: 0, note: "「駅から近いです」。", noteEn: "It's \"close\" to the station.", transcriptEn: "My house is close to the station."
      },
      {
        id: "s8q2", question: "寝室はどこにありますか。", questionHtml: "<ruby>寝室<rt>しんしつ</rt></ruby>はどこにありますか。", questionEn: "Where is the bedroom?",
        choices: ["一階", "二階", "三階", "四階"], choicesEn: ["1st floor", "2nd floor", "3rd floor", "4th floor"],
        choicesHtml: ["<ruby>一階<rt>いっかい</rt></ruby>", "<ruby>二階<rt>にかい</rt></ruby>", "<ruby>三階<rt>さんかい</rt></ruby>", "<ruby>四階<rt>よんかい</rt></ruby>"],
        answer: 1, note: "「二階」にあります。", noteEn: "It is on the \"second floor.\"", transcriptEn: "The bedroom is on the second floor."
      },
      {
        id: "s8q3", question: "冷蔵庫に何がありませんか。", questionHtml: "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありませんか。", questionEn: "What is not in the fridge?",
        choices: ["水", "牛乳", "ジュース", "ビール"], choicesEn: ["Water", "Milk", "Juice", "Beer"],
        choicesHtml: ["<ruby>水<rt>みず</rt></ruby>", "<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>", "ジュース", "ビール"],
        answer: 1, note: "「牛乳がありません」。", noteEn: "There's no \"milk.\"", transcriptEn: "Oh! There's no milk in the fridge."
      },
      {
        id: "s8q4", question: "鍵をどうしましたか。", questionHtml: "<ruby>鍵<rt>かぎ</rt></ruby>をどうしましたか。", questionEn: "What happened with the key?",
        choices: ["忘れた", "なくした", "壊した", "落とした"], choicesEn: ["Forgot it", "Lost it", "Broke it", "Dropped it"],
        choicesHtml: ["<ruby>忘<rt>わす</rt></ruby>れた", "<ruby>無<rt>な</rt></ruby>くした", "<ruby>壊<rt>こわ</rt></ruby>した", "<ruby>落<rt>お</rt></ruby>とした"],
        answer: 0, note: "「鍵をかけ忘れました」。", noteEn: "I \"forgot to lock\" the door.", transcriptEn: "When I left, I forgot to lock."
      },
      {
        id: "s8q5", question: "何をしてはいけませんか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>をしてはいけませんか。", questionEn: "What must you not do?",
        choices: ["エアコンをつけっぱなし", "電気を消す", "窓を開ける", "ドアを閉める"], choicesEn: ["Leave the AC on", "Turn off the lights", "Open the window", "Close the door"],
        choicesHtml: ["エアコンを<ruby>付<rt>つ</rt></ruby>けっぱなし", "<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>す", "<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>ける", "<ruby>ドア<rt>どあ</rt></ruby>を<ruby>閉<rt>し</rt></ruby>める"],
        answer: 0, note: "「エアコンをつけっぱなしにしないでください」。", noteEn: "\"Please don't leave the AC on.\"", transcriptEn: "Please don't leave the AC on."
      },
      {
        id: "s8q6", question: "キッチンはどうですか。", questionHtml: "キッチンはどうですか。", questionEn: "How is the kitchen?",
        choices: ["広い", "狭い", "暗い", "汚い"], choicesEn: ["Spacious", "Narrow", "Dark", "Dirty"],
        choicesHtml: ["<ruby>広<rt>ひろ</rt></ruby>い", "<ruby>狭<rt>せま</rt></ruby>い", "<ruby>暗<rt>くら</rt></ruby>い", "<ruby>汚<rt>きたな</rt></ruby>い"],
        answer: 1, note: "「キッチンは狭いですが、綺麗です」。", noteEn: "The kitchen is small but clean.", transcriptEn: "The kitchen is small but clean."
      },
      {
        id: "s8q7", question: "先週、庭に何をしましたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>庭<rt>にわ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしましたか。", questionEn: "What did you do in the garden last week?",
        choices: ["木を植えた", "花を植えた", "草を刈った", "掃除した"], choicesEn: ["Planted a tree", "Planted flowers", "Cut the grass", "Cleaned"],
        choicesHtml: ["<ruby>木<rt>き</rt></ruby>を<ruby>植<rt>う</rt></ruby>えた", "<ruby>花<rt>はな</rt></ruby>を<ruby>植<rt>う</rt></ruby>えた", "<ruby>草<rt>くさ</rt></ruby>を<ruby>刈<rt>か</rt></ruby>った", "<ruby>掃除<rt>そうじ</rt></ruby>した"],
        answer: 0, note: "「先週、庭に木を植えました」。", noteEn: "Last week, I planted a tree in the garden.", transcriptEn: "Last week, I planted a tree in the garden."
      },
      {
        id: "s8q8", question: "晴れた日は何をしますか。", questionHtml: "<ruby>晴<rt>は</rt></ruby>れた<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか。", questionEn: "What do you do on sunny days?",
        choices: ["洗濯物を干す", "掃除をする", "庭で遊ぶ", "散歩する"], choicesEn: ["Hang the laundry", "Clean", "Play in the garden", "Take a walk"],
        choicesHtml: ["<ruby>洗濯物<rt>せんたくもの</rt></ruby>を<ruby>干<rt>ほ</rt></ruby>す", "<ruby>掃除<rt>そうじ</rt></ruby>をする", "<ruby>庭<rt>にわ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ぶ", "<ruby>散歩<rt>さんぽ</rt></ruby>する"],
        answer: 0, note: "「晴れた日は、ベランダに洗濯物を干します」。", noteEn: "On sunny days, I hang the laundry on the balcony.", transcriptEn: "On sunny days, I hang the laundry on the balcony."
      },
      {
        id: "s8q9", question: "ゴミはいつ出しますか。", questionHtml: "ゴミはいつ<ruby>出<rt>だ</rt></ruby>しますか。", questionEn: "When do you take out the trash?",
        choices: ["毎日", "毎週", "毎月", "時々"], choicesEn: ["Every day", "Every week", "Every month", "Sometimes"],
        choicesHtml: ["<ruby>毎日<rt>まいにち</rt></ruby>", "<ruby>毎週<rt>まいしゅう</rt></ruby>", "<ruby>毎月<rt>まいつき</rt></ruby>", "<ruby>時々<rt>ときどき</rt></ruby>"],
        answer: 1, note: "「毎週、ゴミを出してください」。", noteEn: "Every week, please take out the trash.", transcriptEn: "Every week, please take out the trash."
      },
      {
        id: "s8q10", question: "どうやって二階に行きますか。", questionHtml: "どうやって<ruby>二階<rt>にかい</rt></ruby>に<ruby>行<rt>い</rt></ruby>きますか。", questionEn: "How do you get to the second floor?",
        choices: ["エレベーター", "エスカレーター", "階段を上る", "ロープ"], choicesEn: ["By elevator", "By escalator", "Go up the stairs", "By rope"],
        choicesHtml: ["エレベーター", "エスカレーター", "<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上<rt>のぼ</rt></ruby>る", "ロープ"],
        answer: 2, note: "「階段を上ります」。", noteEn: "Go up the stairs.", transcriptEn: "Go up the stairs."
      }
    ]
  },

  // ============================================================
  // SPRINT 09: Work, School, Requests
  // ============================================================
  {
    id: 9,
    title: "A Busy Day at Work and School",
    storyJp: `今朝（けさ）、会社（かいしゃ）に遅刻（ちこく）しました。だから、残業（ざんぎょう）をしなければなりません。会議（かいぎ）は何時（なんじ）に終（お）わりますか。部長（ぶちょう）に報告（ほうこく）します。先週（せんしゅう）、メールを送（おく）りました。資料（しりょう）を準備（じゅんび）してください。しかし、コピー機（き）が故障（こしょう）しました。困（こま）りました。休暇（きゅうか）を取（と）りたいです。でも、今日（きょう）は授業（じゅぎょう）を欠席（けっせき）します。なぜなら、宿題（しゅくだい）を忘（わす）れたからです。先週（せんしゅう）の試験（しけん）に合格（ごうかく）しました。嬉（うれ）しかったです。今（いま）、課題（かだい）を提出（ていしゅつ）します。先生（せんせい）に質問（しつもん）があります。教科書（きょうかしょ）を開（ひら）いてください。ノートを取（と）っています。発音（はつおん）が難（むずか）しいです。もう一度（いちど）言（い）ってください。ゆっくり話（はな）してください。すみません、ペンを貸（か）してもらえますか。最後（さいご）に、手伝（てつだ）っていただけませんか。`,
    storyEn: `This morning, I was late for work. So, I have to work overtime. What time does the meeting end? I report to the department manager. Last week, I sent an email. Please prepare the documents. However, the copier broke down. I was in trouble. I want to take a vacation. But today, I will be absent from class. Because I forgot my homework. I passed the exam last week. I was happy. Now, I will submit the assignment. I have a question for the teacher. Please open your textbook. I am taking notes. Pronunciation is difficult. Please say it one more time. Please speak slowly. Excuse me, could you lend me a pen? Finally, could you please help me?`,
    questions: [
      {
        id: "s9q1", question: "今朝何をしましたか。", questionHtml: "<ruby>今朝<rt>けさ</rt></ruby><ruby>何<rt>なに</rt></ruby>をしましたか。", questionEn: "What did you do this morning?",
        choices: ["遅刻した", "残業した", "休んだ", "早退した"], choicesEn: ["Was late", "Worked overtime", "Took a day off", "Left early"],
        choicesHtml: ["<ruby>遅刻<rt>ちこく</rt></ruby>した", "<ruby>残業<rt>ざんぎょう</rt></ruby>した", "<ruby>休<rt>やす</rt></ruby>んだ", "<ruby>早退<rt>そうたい</rt></ruby>した"],
        answer: 0, note: "「会社に遅刻しました」。", noteEn: "I \"was late for work.\"", transcriptEn: "This morning, I was late for work."
      },
      {
        id: "s9q2", question: "残業をしなければなりませんか。", questionHtml: "<ruby>残業<rt>ざんぎょう</rt></ruby>をしなければなりませんか。", questionEn: "Do you have to work overtime?",
        choices: ["はい", "いいえ", "わからない", "たぶん"], choicesEn: ["Yes", "No", "I don't know", "Probably"],
        choicesHtml: ["はい", "いいえ", "わかりません", "たぶん"],
        answer: 0, note: "「残業をしなければなりません」。", noteEn: "\"I have to work overtime.\"", transcriptEn: "So, I have to work overtime."
      },
      {
        id: "s9q3", question: "コピー機はどうなりましたか。", questionHtml: "コピー<ruby>機<rt>き</rt></ruby>はどうなりましたか。", questionEn: "What happened to the copier?",
        choices: ["故障した", "壊れた", "動かない", "全部"], choicesEn: ["It broke down", "It broke", "It doesn't work", "All of the above"],
        choicesHtml: ["<ruby>故障<rt>こしょう</rt></ruby>した", "<ruby>壊<rt>こわ</rt></ruby>れた", "<ruby>動<rt>うご</rt></ruby>かない", "<ruby>全部<rt>ぜんぶ</rt></ruby>"],
        answer: 3, note: "「故障しました」「壊れました」「動きません」全て正解です。", noteEn: "\"It broke down,\" \"It broke,\" and \"It doesn't work\" are all correct.", transcriptEn: "However, the copier broke down. I was in trouble."
      },
      {
        id: "s9q4", question: "何に合格しましたか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>しましたか。", questionEn: "What did you pass?",
        choices: ["試験", "面接", "授業", "課題"], choicesEn: ["An exam", "An interview", "A class", "An assignment"],
        choicesHtml: ["<ruby>試験<rt>しけん</rt></ruby>", "<ruby>面接<rt>めんせつ</rt></ruby>", "<ruby>授業<rt>じゅぎょう</rt></ruby>", "<ruby>課題<rt>かだい</rt></ruby>"],
        answer: 0, note: "「試験に合格しました」。", noteEn: "I passed \"the exam.\"", transcriptEn: "I passed the exam last week. I was happy."
      },
      {
        id: "s9q5", question: "ペンを貸してもらえますか。", questionHtml: "ペンを<ruby>貸<rt>か</rt></ruby>してもらえますか。", questionEn: "Could you lend me a pen?",
        choices: ["はい、どうぞ", "いいえ", "ありません", "わかりません"], choicesEn: ["Yes, here you go", "No", "I don't have one", "I don't know"],
        choicesHtml: ["はい、どうぞ", "いいえ", "ありません", "わかりません"],
        answer: 0, note: "「ペンを貸してもらえますか」と丁寧にお願いしています。", noteEn: "They are politely asking, \"Could you lend me a pen?\"", transcriptEn: "Excuse me, could you lend me a pen?"
      },
      {
        id: "s9q6", question: "なぜ今日、授業を欠席しますか。", questionHtml: "なぜ<ruby>今日<rt>きょう</rt></ruby>、<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>欠席<rt>けっせき</rt></ruby>しますか。", questionEn: "Why are you absent from class today?",
        choices: ["病気だから", "宿題を忘れたから", "会社だから", "旅行するから"], choicesEn: ["Because I'm sick", "Because I forgot my homework", "Because of work", "Because I'm traveling"],
        choicesHtml: ["<ruby>病気<rt>びょうき</rt></ruby>だから", "<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れたから", "<ruby>会社<rt>かいしゃ</rt></ruby>だから", "<ruby>旅行<rt>りょこう</rt></ruby>するから"],
        answer: 1, note: "「なぜなら、宿題を忘れたからです」。", noteEn: "Because I forgot my homework.", transcriptEn: "But today, I will be absent from class. Because I forgot my homework."
      },
      {
        id: "s9q7", question: "先生に何がありますか。", questionHtml: "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありますか。", questionEn: "What do you have for the teacher?",
        choices: ["プレゼント", "質問", "宿題", "メール"], choicesEn: ["A present", "A question", "Homework", "An email"],
        choicesHtml: ["プレゼント", "<ruby>質問<rt>しつもん</rt></ruby>", "<ruby>宿題<rt>しゅくだい</rt></ruby>", "メール"],
        answer: 1, note: "「先生に質問があります」。", noteEn: "I have a question for the teacher.", transcriptEn: "I have a question for the teacher."
      },
      {
        id: "s9q8", question: "もう一度どうしてくださいと言っていますか。", questionHtml: "もう<ruby>一度<rt>いちど</rt></ruby>どうしてくださいと<ruby>言<rt>い</rt></ruby>っていますか。", questionEn: "What are they asking you to do one more time?",
        choices: ["言ってください", "書いてください", "読んでください", "聞いてください"], choicesEn: ["Say it", "Write it", "Read it", "Listen to it"],
        choicesHtml: ["<ruby>言<rt>い</rt></ruby>ってください", "<ruby>書<rt>か</rt></ruby>いてください", "<ruby>読<rt>よ</rt></ruby>んでください", "<ruby>聞<rt>き</rt></ruby>いてください"],
        answer: 0, note: "「もう一度言ってください」。", noteEn: "Please say it one more time.", transcriptEn: "Please say it one more time."
      },
      {
        id: "s9q9", question: "どうやって話してくださいと言っていますか。", questionHtml: "どうやって<ruby>話<rt>はな</rt></ruby>してくださいと<ruby>言<rt>い</rt></ruby>っていますか。", questionEn: "How are they asking you to speak?",
        choices: ["大きく", "小さく", "早く", "ゆっくり"], choicesEn: ["Loudly", "Quietly", "Fast", "Slowly"],
        choicesHtml: ["<ruby>大<rt>おお</rt></ruby>きく", "<ruby>小<rt>ちい</rt></ruby>さく", "<ruby>早<rt>はや</rt></ruby>く", "ゆっくり"],
        answer: 3, note: "「ゆっくり話してください」。", noteEn: "Please speak slowly.", transcriptEn: "Please speak slowly."
      },
      {
        id: "s9q10", question: "先週、何を送りましたか。", questionHtml: "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を<ruby>送<rt>おく</rt></ruby>りましたか。", questionEn: "What did you send last week?",
        choices: ["手紙", "メール", "荷物", "プレゼント"], choicesEn: ["A letter", "An email", "A package", "A present"],
        choicesHtml: ["<ruby>手紙<rt>てがみ</rt></ruby>", "メール", "<ruby>荷物<rt>にもつ</rt></ruby>", "プレゼント"],
        answer: 1, note: "「先週、メールを送りました」。", noteEn: "Last week, I sent an email.", transcriptEn: "Last week, I sent an email."
      }
    ]
  },

  // ============================================================
  // SPRINT 10: Mixed Review + N4 Bridges
  // ============================================================
  {
    id: 10,
    title: "Looking Back and Moving Forward",
    storyJp: `私（わたし）の日本語（にほんご）の勉強（べんきょう）について考（かんが）えてみましょう。もし時間（じかん）があれば、毎日（まいにち）勉強（べんきょう）に行（い）きます。でも、雨（あめ）が降（ふ）ったら試合（しあい）は中止（ちゅうし）です。しっかり勉強（べんきょう）すれば成績（せいせき）が上（あ）がります。彼（かれ）はまるでプロのように歌（うた）います。すごいです。先生（せんせい）は「この本（ほん）を読（よ）みなさい」と言（い）いました。でも、「行（い）くな」と言（い）われました。待（ま）たないで先（さき）に行（い）ってください。彼（かれ）は毎日（まいにち）運動（うんどう）するそうです。朝（あさ）、太陽（たいよう）が昇（のぼ）るのが見（み）えました。とても美（うつく）しかったです。彼女（かのじょ）の笑顔（えがお）を見（み）るだけで幸（しあわ）せです。その話（はなし）は考（かんが）えさせられます。もっと早（はや）く来（く）れば良（よ）かったと思（おも）います。彼（かれ）はまだ着（つ）いていないようです。この辺（へん）は静（しず）かでいいですね。健康（けんこう）のためにはバランスが大切（たいせつ）です。知（し）らない言葉（ことば）が出（で）てきたら辞書（じしょ）を引（ひ）きます。一人（ひとり）でできる限（かぎ）りやります。彼（かれ）の態度（たいど）に腹（はら）が立（た）った。その件（けん）はもう済（す）ませました。電車（でんしゃ）が混（こ）んでいるので次（つぎ）を待（ま）ちます。ここに名前（なまえ）を記入（きにゅう）してください。それは少（すこ）し問題（もんだい）かもしれません。申（もう）し込（こ）みは締（し）め切（き）られました。この商品（しょうひん）はお値打（ねう）ちです。どうぞお召（め）し上（あ）がりください。ご連絡（れんらく）いただければ幸（さいわ）いです。恐（おそ）れ入（い）りますが少（すこ）しお待（ま）ちください。勝手（かって）なことをしないでください。この機会（きかい）を逃（のが）さないでください。言葉（ことば）の壁（かべ）は高（たか）いですが、楽（たの）しいです。`,
    storyEn: `Let me think about my Japanese studies. If I have time, I go to study every day. But if it rains, the match is canceled. If I study properly, my grades will improve. He sings just like a pro. It's amazing. The teacher said, "Read this book!" But I was told not to go. Please go ahead without waiting. I hear he exercises every day. In the morning, I saw the sun rise. It was very beautiful. Just seeing her smile makes me happy. That story makes me think. I think I should have come earlier. It seems he hasn't arrived yet. This area is quiet and nice. For health, balance is important. When an unknown word comes up, I look it up. I'll do as much as I can by myself. I got angry at his attitude. I've already finished that matter. The train is crowded, so I'll wait for the next one. Please fill in your name here. That might be a bit of a problem. Applications have been closed. This product is a good value. Please enjoy your meal. I would appreciate it if you could contact me. I'm sorry, but please wait a moment. Please don't do anything selfish. Please don't miss this opportunity. The language barrier is high, but it's fun.`,
    questions: [
      {
        id: "s10q1", question: "もし雨が降ったらどうなりますか。", questionHtml: "もし<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったらどうなりますか。", questionEn: "What happens if it rains?",
        choices: ["試合は中止", "試合は続行", "試合は延期", "試合は中止または延期"], choicesEn: ["The match is canceled", "The match continues", "The match is postponed", "The match is canceled or postponed"],
        choicesHtml: ["<ruby>試合<rt>しあい</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>", "<ruby>試合<rt>しあい</rt></ruby>は<ruby>続行<rt>ぞっこう</rt></ruby>", "<ruby>試合<rt>しあい</rt></ruby>は<ruby>延期<rt>えんき</rt></ruby>", "<ruby>試合<rt>しあい</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>または<ruby>延期<rt>えんき</rt></ruby>"],
        answer: 0, note: "「雨が降ったら試合は中止」です。", noteEn: "\"If it rains, the match is canceled.\"", transcriptEn: "But if it rains, the match is canceled."
      },
      {
        id: "s10q2", question: "彼は何のように歌いますか。", questionHtml: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>のように<ruby>歌<rt>うた</rt></ruby>いますか。", questionEn: "How does he sing?",
        choices: ["プロ", "アマチュア", "歌手", "先生"], choicesEn: ["Like a pro", "Like an amateur", "Like a singer", "Like a teacher"],
        choicesHtml: ["プロ", "アマチュア", "<ruby>歌手<rt>かしゅ</rt></ruby>", "<ruby>先生<rt>せんせい</rt></ruby>"],
        answer: 0, note: "「まるでプロのように歌います」。", noteEn: "He sings \"just like a pro.\"", transcriptEn: "He sings just like a pro. It's amazing."
      },
      {
        id: "s10q3", question: "先生は何と言いましたか。", questionHtml: "<ruby>先生<rt>せんせい</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", questionEn: "What did the teacher say?",
        choices: ["本を読みなさい", "行くな", "静かにしなさい", "勉強しなさい"], choicesEn: ["Read this book", "Don't go", "Be quiet", "Study"],
        choicesHtml: ["<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みなさい", "<ruby>行<rt>い</rt></ruby>くな", "<ruby>静<rt>しず</rt></ruby>かにしなさい", "<ruby>勉強<rt>べんきょう</rt></ruby>しなさい"],
        answer: 0, note: "「この本を読みなさい」と言いました。", noteEn: "The teacher said, \"Read this book!\"", transcriptEn: "The teacher said, \"Read this book!\""
      },
      {
        id: "s10q4", question: "何が美しかったですか。", questionHtml: "<ruby>何<rt>なに</rt></ruby>が<ruby>美<rt>うつく</rt></ruby>しかったですか。", questionEn: "What was beautiful?",
        choices: ["太陽が昇る", "月が輝く", "花が咲く", "鳥が飛ぶ"], choicesEn: ["The sun rising", "The moon shining", "Flowers blooming", "Birds flying"],
        choicesHtml: ["<ruby>太陽<rt>たいよう</rt></ruby>が<ruby>昇<rt>のぼ</rt></ruby>る", "<ruby>月<rt>つき</rt></ruby>が<ruby>輝<rt>かがや</rt></ruby>く", "<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>く", "<ruby>鳥<rt>とり</rt></ruby>が<ruby>飛<rt>と</rt></ruby>ぶ"],
        answer: 0, note: "「太陽が昇るのが見えました。とても美しかったです。」", noteEn: "\"I saw the sun rise. It was very beautiful.\"", transcriptEn: "In the morning, I saw the sun rise. It was very beautiful."
      },
      {
        id: "s10q5", question: "言葉の壁はどうですか。", questionHtml: "<ruby>言葉<rt>ことば</rt></ruby>の<ruby>壁<rt>かべ</rt></ruby>はどうですか。", questionEn: "How is the language barrier?",
        choices: ["高いが楽しい", "低いが楽しい", "高いが悲しい", "低いが悲しい"], choicesEn: ["High but fun", "Low but fun", "High but sad", "Low but sad"],
        choicesHtml: ["<ruby>高<rt>たか</rt></ruby>いが<ruby>楽<rt>たの</rt></ruby>しい", "<ruby>低<rt>ひく</rt></ruby>いが<ruby>楽<rt>たの</rt></ruby>しい", "<ruby>高<rt>たか</rt></ruby>いが<ruby>悲<rt>かな</rt></ruby>しい", "<ruby>低<rt>ひく</rt></ruby>いが<ruby>悲<rt>かな</rt></ruby>しい"],
        answer: 0, note: "「言葉の壁は高いですが、楽しいです」。", noteEn: "\"The language barrier is high, but it's fun.\"", transcriptEn: "The language barrier is high, but it's fun."
      },
      {
        id: "s10q6", question: "朝、何が見えましたか。", questionHtml: "<ruby>朝<rt>あさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>が<ruby>見<rt>み</rt></ruby>えましたか。", questionEn: "What was visible in the morning?",
        choices: ["月", "星", "太陽", "山"], choicesEn: ["The moon", "Stars", "The sun", "Mountains"],
        choicesHtml: ["<ruby>月<rt>つき</rt></ruby>", "<ruby>星<rt>ほし</rt></ruby>", "<ruby>太陽<rt>たいよう</rt></ruby>", "<ruby>山<rt>やま</rt></ruby>"],
        answer: 2, note: "「朝、太陽が昇るのが見えました」。", noteEn: "In the morning, I saw the sun rise.", transcriptEn: "In the morning, I saw the sun rise. It was very beautiful."
      },
      {
        id: "s10q7", question: "どうして早く来れば良かったと思いますか。", questionHtml: "どうして<ruby>早<rt>はや</rt></ruby>く<ruby>来<rt>く</rt></ruby>れば<ruby>良<rt>よ</rt></ruby>かったと<ruby>思<rt>おも</rt></ruby>いますか。", questionEn: "Why do you think you should have come earlier?",
        choices: ["時間がなかったから", "電車が混んでいたから", "友達が待っていたから", "宿題があったから"], choicesEn: ["Because there was no time", "Because the train was crowded", "Because a friend was waiting", "Because there was homework"],
        choicesHtml: ["<ruby>時間<rt>じかん</rt></ruby>がなかったから", "<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>混<rt>こ</rt></ruby>んでいたから", "<ruby>友達<rt>ともだち</rt></ruby>が<ruby>待<rt>ま</rt></ruby>っていたから", "<ruby>宿題<rt>しゅくだい</rt></ruby>があったから"],
        answer: 1, note: "「電車が混んでいるので次を待ちます」とあり、混雑を避けるために早く来れば良かったという文脈です。", noteEn: "The text mentions the train is crowded, implying coming earlier would have avoided this.", transcriptEn: "The train is crowded, so I'll wait for the next one.",
        inferenceHint: "The speaker regrets not coming earlier because the train is crowded."
      },
      {
        id: "s10q8", question: "彼はもう着きましたか。", questionHtml: "<ruby>彼<rt>かれ</rt></ruby>はもう<ruby>着<rt>つ</rt></ruby>きましたか。", questionEn: "Has he arrived yet?",
        choices: ["はい", "いいえ", "わからない", "たぶん"], choicesEn: ["Yes", "No", "I don't know", "Probably"],
        choicesHtml: ["はい", "いいえ", "わからない", "たぶん"],
        answer: 1, note: "「彼はまだ着いていないようです」。", noteEn: "It seems he hasn't arrived yet.", transcriptEn: "It seems he hasn't arrived yet."
      },
      {
        id: "s10q9", question: "知らない言葉が出てきたらどうしますか。", questionHtml: "<ruby>知<rt>し</rt></ruby>らない<ruby>言葉<rt>ことば</rt></ruby>が<ruby>出<rt>で</rt></ruby>てきたらどうしますか。", questionEn: "What do you do when an unknown word comes up?",
        choices: ["先生に聞く", "辞書を引く", "友達に聞く", "無視する"], choicesEn: ["Ask the teacher", "Look it up in a dictionary", "Ask a friend", "Ignore it"],
        choicesHtml: ["<ruby>先生<rt>せんせい</rt></ruby>に<ruby>聞<rt>き</rt></ruby>く", "<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く", "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>聞<rt>き</rt></ruby>く", "<ruby>無視<rt>むし</rt></ruby>する"],
        answer: 1, note: "「知らない言葉が出てきたら辞書を引きます」。", noteEn: "When an unknown word comes up, I look it up.", transcriptEn: "When an unknown word comes up, I look it up."
      },
      {
        id: "s10q10", question: "この商品はどうですか。", questionHtml: "この<ruby>商品<rt>しょうひん</rt></ruby>はどうですか。", questionEn: "How is this product?",
        choices: ["高い", "安い", "お値打ち", "悪い"], choicesEn: ["Expensive", "Cheap", "Good value", "Bad"],
        choicesHtml: ["<ruby>高<rt>たか</rt></ruby>い", "<ruby>安<rt>やす</rt></ruby>い", "お<ruby>値打<rt>ねう</rt></ruby>ち", "<ruby>悪<rt>わる</rt></ruby>い"],
        answer: 2, note: "「この商品はお値打ちです」。", noteEn: "This product is a good value.", transcriptEn: "This product is a good value."
      }
    ]
  }
];

// Export for use in the app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sprintStoriesWithQA;
}

// Make it available globally
if (typeof window !== 'undefined') {
  window.sprintStoriesWithQA = sprintStoriesWithQA;
}

console.log(`✅ Loaded ${sprintStoriesWithQA.length} stories with Q&A`);