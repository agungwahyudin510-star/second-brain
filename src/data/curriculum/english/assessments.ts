import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

type QuestionDraft = [string, string, string[], number, string];
type EssayDraft = [string, string[]];

const chapterQuestions: QuestionDraft[][] = [
  [
    ["Alphabet sounds", "Which statement is correct about English spelling and pronunciation?", ["Every letter has only one sound.", "The same letter can represent different sounds.", "English words are always pronounced as written.", "Vowels are silent in every word."], 1, "English spelling does not map one-to-one to sounds; compare words and use audio models."],
    ["Greetings", "You meet someone for the first time. What is a natural response?", ["Nice to meet you, too.", "Good night, too.", "I am fine, thanks.", "See you yesterday."], 0, "“Nice to meet you, too” is a natural response when meeting someone for the first time."],
    ["Pronunciation", "Which pair differs by the final consonant sound?", ["book / books", "cap / cab", "name / names", "red / red"], 1, "The final sounds in cap and cab are /p/ and /b/."],
    ["Subject pronouns", "Maya and I are friends. ___ study English together.", ["They", "We", "She", "It"], 1, "“Maya and I” includes the speaker, so use the subject pronoun “we.”"],
    ["Classroom English", "You did not hear the teacher. What can you say politely?", ["Could you repeat that, please?", "What are you?", "Repeat now!", "You don't listen."], 0, "This is a polite, useful request for repetition."],
    ["Greetings", "Choose the suitable morning greeting.", ["Good morning.", "Good midnight.", "Good afternoon yesterday.", "Nice evening morning."], 0, "“Good morning” is the conventional greeting in the morning."],
    ["Pronouns", "Which sentence uses the subject pronoun correctly?", ["Her is my friend.", "She is my friend.", "Hers is my friend.", "Them is my friend."], 1, "Use “she” as the subject before the verb “is.”"],
    ["Spelling aloud", "Someone asks how to spell “Rani.” What should you do?", ["Say each letter clearly.", "Translate the name.", "Add an article.", "Use a plural ending."], 0, "Spelling a name means saying its letters clearly."],
  ],
  [
    ["Be: affirmative", "Choose the correct sentence.", ["I is from Bali.", "I am from Bali.", "I are from Bali.", "I be from Bali."], 1, "Use “am” with the subject “I.”"],
    ["Be: question", "Choose the correct question.", ["Where you are from?", "Where are you from?", "Where from you are?", "Where do you from?"], 1, "Move “are” before “you” in this question with be."],
    ["Be: negative", "“He ___ a teacher; he is a student.”", ["aren't", "am not", "isn't", "don't"], 2, "Use “isn't” with “he” to make a negative sentence with be."],
    ["Short answers", "“Are you a student?” — “Yes, ___.”", ["I am", "I do", "I is", "I'm student"], 0, "A short answer to “Are you…?” repeats the verb be: “Yes, I am.”"],
    ["Possessive adjectives", "Dina has a brother. ___ brother is a chef.", ["His", "Her", "Their", "Our"], 1, "“Her” shows possession by Dina; it comes before the noun “brother.”"],
    ["Personal information", "Choose a natural answer to “Where are you from?”", ["I am from Indonesia.", "I am Indonesia.", "I from in Indonesia.", "I do from Indonesia."], 0, "Use “be from + place” to say where you are from."],
    ["Be vs do", "Choose the correct negative sentence.", ["She doesn't be tired.", "She isn't tired.", "She don't tired.", "She not is tired."], 1, "Use be + not; do-support is not used to negate be."],
    ["Possessives", "Complete: “We live in Bandung. ___ home is near the station.”", ["Our", "We", "Us", "Ours"], 0, "“Our” is the possessive adjective before the noun “home.”"],
  ],
  [
    ["Articles", "Choose the correct phrase.", ["a apple", "an apple", "the apple" , "apple an"], 1, "“Apple” begins with a vowel sound, so use “an” for a nonspecific singular item."],
    ["Plural nouns", "There are two ___.", ["box", "boxs", "boxes", "boxies"], 2, "Nouns ending in the sound/spelling pattern of “x” commonly add -es: boxes."],
    ["Demonstratives", "You point to two nearby books. “___ are my books.”", ["This", "That", "These", "It"], 2, "Use “these” for nearby plural nouns."],
    ["Time", "Choose the natural phrase for 7:30.", ["half past seven", "half to seven", "seven half o'clock", "thirty past half"], 0, "“Half past seven” is a common way to say 7:30."],
    ["Demonstratives", "One object is far away. Choose the correct word.", ["These", "This", "Those", "That"], 3, "Use “that” for one object farther away."],
    ["Articles", "Choose the natural sentence.", ["She is a teacher.", "She is teacher.", "She is an teacher.", "She a is teacher."], 0, "A singular countable job noun usually takes an article: “a teacher.”"],
    ["Adjective order", "Choose the correct phrase.", ["a bag red", "a red bag", "red a bag", "bag a red"], 1, "In a simple noun phrase, the adjective normally comes before the noun."],
    ["Dates", "Which word is conventionally capitalized?", ["monday", "Monday", "MONday", "monDay"], 1, "Days of the week are capitalized in English."],
  ],
  [
    ["Simple present", "My sister ___ to work every day.", ["go", "goes", "is go", "going"], 1, "With he/she/it, the simple-present affirmative verb usually takes -s/-es."],
    ["Do/does", "___ you have breakfast at home?", ["Does", "Are", "Do", "Is"], 2, "Use “do” to form simple-present questions with “you.”"],
    ["Negative", "He ___ coffee.", ["don't drink", "doesn't drinks", "doesn't drink", "isn't drink"], 2, "After “doesn't,” use the base verb “drink.”"],
    ["Adverbs of frequency", "Choose the natural word order.", ["I walk usually to work.", "I usually walk to work.", "Usually I am walk to work.", "I walk to usually work."], 1, "Frequency adverbs usually come before the main verb."],
    ["Be + frequency", "She ___ busy on Mondays.", ["often is", "is often", "often be", "does often"], 1, "With be, the frequency adverb usually follows the verb: “is often.”"],
    ["Time", "Choose the correct phrase.", ["at six o'clock", "on six o'clock", "in six o'clock", "every at six"], 0, "Use “at” with clock times."],
    ["Questions", "___ your brother study English?", ["Do", "Does", "Is", "Are"], 1, "Use “does” with the third-person singular subject “your brother.”"],
    ["Routine context", "A routine happens every morning. Which tense is most suitable?", ["Simple present", "Present continuous only", "Past simple", "Present perfect"], 0, "Simple present is commonly used for repeated habits and routines."],
  ],
  [
    ["There is/are", "___ two cafes near my home.", ["There is", "There are", "They is", "It are"], 1, "Use “there are” with a plural noun phrase."],
    ["Prepositions", "The keys are ___ the table surface.", ["on", "between", "behind", "across"], 0, "“On” describes something resting on a surface."],
    ["There is/are", "___ a pharmacy near here?", ["Are there", "Is there", "Do there", "Does there"], 1, "Use “Is there…?” to ask about one place."],
    ["Directions", "“Go straight and turn ___ at the bank.”", ["left", "between", "under", "in"], 0, "“Turn left” is a standard direction instruction."],
    ["Prepositions", "The cafe is on the other side of the road from the bank. It is ___ the bank.", ["across from", "inside", "under", "between"], 0, "“Across from” describes a place on the opposite side."],
    ["Imperatives", "Which is a clear direction?", ["You goes straight.", "Go straight.", "Going straight.", "Are straight go."], 1, "An imperative uses the base verb, often without an expressed subject."],
    ["Places", "Where can you usually borrow books?", ["At a library", "At a pharmacy", "At a bus stop", "At a bakery"], 0, "A library is a place where people can read or borrow books."],
    ["Polite questions", "Choose a polite way to ask for directions.", ["Excuse me, how do I get to the station?", "Station where now?", "Tell me station!", "You go station?"], 0, "“Excuse me” and a complete question make the request polite and clear."],
  ],
  [
    ["Countable nouns", "Choose the natural phrase.", ["two rice", "two slices of bread", "two breads", "a waters"], 1, "Bread is normally uncountable; count portions with a unit such as “slices.”"],
    ["Much/many", "How ___ apples do we need?", ["much", "many", "any", "some"], 1, "Use “many” with plural countable nouns such as apples."],
    ["Much/many", "How ___ milk is in the fridge?", ["many", "much", "few", "number"], 1, "Use “much” with uncountable nouns such as milk."],
    ["Some/any", "We need ___ eggs for breakfast.", ["some", "any", "much", "a"], 0, "“Some” is common in affirmative statements about an unspecified amount."],
    ["Polite requests", "Choose a polite request in a cafe.", ["Could I have some water, please?", "Give water now.", "I could water have?", "Water you give."], 0, "“Could I have…?” is a polite request; “please” adds courtesy."],
    ["Price", "You want to ask the cost of one sandwich. Say:", ["How many is this sandwich?", "How much is this sandwich?", "How much are this sandwich?", "What many cost?"], 1, "Use “How much is…?” to ask the price of a singular item."],
    ["Some/any", "There aren't ___ oranges in the bowl.", ["some", "any", "much", "a"], 1, "“Any” is common in negative sentences with plural count nouns."],
    ["Quantities", "Which phrase is correct?", ["a bottle of water", "a water of bottle", "a waters bottle", "bottle a water"], 0, "Use a container phrase such as “a bottle of water” to count an uncountable noun."],
  ],
  [
    ["Present continuous", "Look! The children ___ in the garden.", ["play", "are playing", "plays", "is play"], 1, "Use be + verb-ing for an action happening now; “children” takes “are.”"],
    ["Present continuous form", "Choose the correct sentence.", ["He is work now.", "He working now.", "He is working now.", "He are working now."], 2, "Present continuous requires the correct form of be plus verb-ing."],
    ["Tense contrast", "She usually walks, but today she ___ the bus.", ["takes", "is taking", "take", "taking"], 1, "The temporary action today contrasts with the usual routine."],
    ["Spelling -ing", "What is the -ing form of “write”?", ["writeing", "writting", "writing", "writed"], 2, "For many verbs ending in silent -e, drop the e before adding -ing."],
    ["Simple present", "He ___ glasses every day.", ["wear", "wears", "is wear", "wearing"], 1, "Simple present describes a general habit/circumstance; “he” takes -s."],
    ["Present continuous", "“They ___ a film at the moment.”", ["watch", "watches", "are watching", "is watching"], 2, "“At the moment” indicates an action in progress; plural “they” takes “are.”"],
    ["Tense choice", "Which sentence describes a regular habit?", ["I am reading now.", "I read before bed every night.", "I am read every night.", "I reading now."], 1, "“Every night” signals a routine, so simple present is suitable."],
    ["Clothes", "The person has a jacket on now. Choose:", ["She wears a blue jacket now.", "She is wearing a blue jacket.", "She wearing a blue jacket.", "She does wearing a blue jacket."], 1, "Use present continuous to describe what someone is wearing now."],
  ],
  [
    ["Introductions", "Choose the complete, natural introduction.", ["Hi, I’m Rani. I’m from Medan.", "Hi, from Rani Medan.", "I Rani from is Medan.", "Hello, am from."], 0, "The model uses a subject and the correct form of be for a clear introduction."],
    ["Asking for help", "You do not understand a word. What can you ask?", ["What does this word mean?", "What mean this word does?", "This word means what do?", "How word this?"], 0, "This is a grammatical way to ask for a word's meaning."],
    ["Reading detail", "“The club meets at four on Friday in Room 2.” When does it meet?", ["At four on Friday", "At two on Monday", "On Friday in Room 4", "At four on Tuesday"], 0, "The message states the time and day directly."],
    ["Profile writing", "Which sentence is grammatically complete?", ["I student from Bali.", "I am a student from Bali.", "I is student Bali.", "Am from student."], 1, "Use subject + be + article + singular countable occupation/status."],
    ["Clarification", "What is a useful phrase when you did not hear?", ["Could you repeat that, please?", "I am repeat you.", "What you hear?", "Repeat it yesterday."], 0, "This polite question asks the speaker to say the message again."],
    ["Reading reference", "In “The club meets in Room 2. See you there!”, what does “there” refer to?", ["Room 2", "Friday", "The notebook", "Rina"], 0, "“There” refers to the previously mentioned place, Room 2."],
    ["Present simple", "Choose the correct sentence about a regular activity.", ["I study English every week.", "I am study English every week.", "I studies English every week.", "I studying English every week."], 0, "Use simple present with “I” to describe a routine."],
    ["Personal profile", "Which detail is appropriate to include only if you are comfortable sharing it?", ["A personal address", "A greeting", "A hobby", "A first name"], 0, "A personal profile should respect privacy; sharing a home address is not necessary."],
  ],
];

const essays: EssayDraft[][] = [
  [
    ["Speak a greeting and introduce your name. Spell your name as part of the response.", ["The greeting and name are understandable.", "Letters are stated in a clear order.", "A suitable introductory expression is used.", "The response is clear and complete."]],
    ["Write two short sentences introducing yourself to a new classmate.", ["The sentences have a clear subject and verb.", "Pronouns and basic vocabulary are suitable.", "The requested introduction details are included.", "Spelling and meaning are clear."]],
  ],
  [
    ["Write a short introduction with your name, hometown, and student/job status.", ["Forms of be agree with each subject.", "Personal-information vocabulary is accurate.", "All requested information is included.", "The introduction is easy to understand."]],
    ["Write one be-question and a suitable short answer to learn about a new classmate.", ["Question word order with be is correct.", "The short answer uses be correctly.", "The question is appropriate to the situation.", "Spelling and punctuation support clarity."]],
  ],
  [
    ["Describe three everyday objects using colors and this/that/these/those.", ["Articles and demonstratives are used appropriately.", "Singular/plural forms agree with quantity.", "Descriptions include the requested details.", "The sentences are understandable."]],
    ["Write two sentences about a day and time, then one sentence about a nearby object.", ["Day/time expressions are used appropriately.", "Vocabulary is suitable for the context.", "All three requested ideas are present.", "Capitalization and meaning are clear."]],
  ],
  [
    ["Write a four-sentence paragraph about your daily routine. Include a time and a frequency adverb.", ["Simple-present verb forms fit the subjects.", "Routine and time vocabulary is appropriate.", "All requested details are included in a logical order.", "The paragraph is understandable."]],
    ["Write one question about a friend's routine and two possible short answers.", ["Do/does and base-verb forms are correct.", "The question matches the intended meaning.", "Both short answers are formed appropriately.", "Spelling and punctuation are clear."]],
  ],
  [
    ["Give three simple directions from a bus stop to a place in your town.", ["Imperatives and direction phrases are used correctly.", "Place/preposition vocabulary fits the route.", "The route has three understandable steps.", "The directions are clear and safely phrased."]],
    ["Describe where two places are using there is/are and prepositions.", ["There is/are agrees with the noun.", "Prepositions describe the locations.", "Both places are included.", "The description is understandable."]],
  ],
  [
    ["Write a short shopping dialogue asking for a price and making a polite request.", ["Countable/uncountable forms are suitable.", "Price and request expressions are used correctly.", "Both speakers' turns complete the task.", "The dialogue is polite and clear."]],
    ["Write a shopping list with two countable items and two uncountable items, then ask one quantity question.", ["Noun types and quantity expressions are accurate.", "Food vocabulary is appropriate.", "The list and question meet the task.", "Spelling and meaning are clear."]],
  ],
  [
    ["Describe what two people are doing now and what one of them usually does.", ["Present continuous and simple present are distinguished.", "Verb forms and agreement are appropriate.", "The contrast between now and usual is clear.", "The description is understandable."]],
    ["Write three sentences about a scene, including one clothing description and two actions.", ["Present continuous forms are correctly built.", "Clothing/action vocabulary fits the scene.", "All requested details are included.", "The sentences are clear and readable."]],
  ],
  [
    ["Write a 4–6 sentence personal profile suitable for a language-class introduction.", ["Basic grammar, including be and present forms, is accurate.", "Vocabulary is appropriate for an A1 profile.", "The profile includes a greeting and relevant details.", "Ideas are clear and respectfully share only comfortable details."]],
    ["Read or write a short message about an event. State its activity, time, place, and what to bring.", ["Simple sentences and instructions are understood/formed.", "Time and place vocabulary is accurate.", "All four details are included.", "The response is clear and organized."]],
  ],
];

const RUBRIC_GUIDES: Record<number, string> = {
  1: "Penilaian mandiri 0–5 per kriteria (maksimal 20): 0 = kosong/tidak relevan; 1 = sulit dipahami; 2 = sebagian sesuai; 3 = cukup tepat dengan beberapa kesalahan; 4 = jelas dan sebagian besar tepat; 5 = lengkap, tepat untuk level A1, dan mudah dipahami.",
};

export const ENGLISH_A1_QUIZZES: Record<string, AssessmentQuestion[]> = Object.fromEntries(
  chapterQuestions.map((questions, chapterIndex) => {
    const chapterId = `eng-a1-${chapterIndex + 1}`;
    return [chapterId, questions.map(([concept, prompt, options, answer, explanation], questionIndex) => ({
      id: `${chapterId}-q${questionIndex + 1}`,
      concept,
      prompt,
      options,
      answer,
      explanation,
    }))];
  })
);

export const ENGLISH_A1_ESSAYS: Record<string, EssayPrompt[]> = Object.fromEntries(
  essays.map((chapterEssays, chapterIndex) => {
    const chapterId = `eng-a1-${chapterIndex + 1}`;
    return [chapterId, chapterEssays.map(([prompt, reviewPoints], essayIndex) => ({
      id: `${chapterId}-w${essayIndex + 1}`,
      prompt,
      rubric: RUBRIC_GUIDES[1],
      reviewPoints,
    }))];
  })
);
