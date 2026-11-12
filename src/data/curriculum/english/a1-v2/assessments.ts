import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

export const qe = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answerIndex: number,
  correctReason: string,
  distractorReasons: string[],
): AssessmentQuestion => {
  let distractorIndex = 0;
  const distractors = options
    .map((_, index) => index === answerIndex
      ? null
      : `${String.fromCharCode(65 + index)}. ${distractorReasons[distractorIndex++]}`)
    .filter(Boolean)
    .join(" ");

  return {
    id,
    concept,
    prompt,
    options,
    answer: answerIndex,
    explanation: `Jawaban benar: ${options[answerIndex]}. ${correctReason} Pengecoh: ${distractors}`,
  };
};

export const ENGLISH_A1_V2_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "eng-a1-1": [
    qe(
      "eng-a1-1-q01",
      "Pronunciation • Initial sound",
      "Which word begins with the same sound as “cat”?",
      ["city", "ship", "kite", "hour"],
      2,
      "Kite begins with the same initial sound as cat.",
      [
        "City begins with a different initial sound.",
        "Ship begins with a different initial sound.",
        "Hour begins with a vowel sound because its h is silent.",
      ],
    ),
    qe(
      "eng-a1-1-q02",
      "Pronunciation • Syllables",
      "How many syllables are in “banana”?",
      ["3 syllables", "2 syllables", "4 syllables", "1 syllable"],
      0,
      "Banana can be said in three syllables: ba-na-na.",
      [
        "Two syllables leaves out one spoken part of banana.",
        "Four syllables counts one extra part.",
        "One syllable combines all three spoken parts.",
      ],
    ),
    qe(
      "eng-a1-1-q03",
      "Grammar • Subject pronouns",
      "Budi and Rina are students. ___ are in my class.",
      ["We", "He", "It", "They"],
      3,
      "They replaces two people who are not the speaker.",
      [
        "We includes the speaker, but Budi and Rina do not include the speaker.",
        "He refers to one male person, not two students.",
        "It is used for one thing or animal, not two people.",
      ],
    ),
    qe(
      "eng-a1-1-q04",
      "Classroom English • Polite requests",
      "How can you politely ask your teacher to repeat something?",
      ["Say that one more time right now.", "Could you say that again, please?", "You need to say those words again.", "What words did you say just now?"],
      1,
      "Could you say that again, please? is a polite request for repetition.",
      [
        "This sounds like a direct command rather than a polite request.",
        "This tells the teacher what to do and sounds too forceful.",
        "This question does not use a polite request form.",
      ],
    ),
    qe(
      "eng-a1-1-q05",
      "Spelling • Names",
      "How do you spell “Rina”?",
      ["R-E-N-A", "R-I-N-E", "R-I-N-A", "A-N-I-R"],
      2,
      "The letters in Rina are R, I, N, and A, in that order.",
      [
        "This changes the second letter from I to E.",
        "This changes the final letter from A to E.",
        "This gives the letters in the wrong order.",
      ],
    ),
    qe(
      "eng-a1-1-q06",
      "Pronunciation • Final sounds",
      "Which pair differs in its final consonant sound?",
      ["cap / cab", "cat / hat", "red / red", "pen / pen"],
      0,
      "Cap and cab differ in their final consonant sounds.",
      [
        "Cat and hat differ at the beginning, not at the end.",
        "Red and red have the same final sound.",
        "Pen and pen have the same final sound.",
      ],
    ),
    qe(
      "eng-a1-1-q07",
      "Greetings • Responses",
      "Someone asks, “How are you?” What is a natural answer?",
      ["Nice to meet you. I am a student.", "I'm fine, thank you. And you?", "My name is Ana. I am from Bali.", "I'm from Jakarta. I am a student."],
      1,
      "I'm fine, thank you. And you? answers the question and asks politely in return.",
      [
        "This is a response to an introduction, not a question about how you are.",
        "This gives a student status, not how you feel.",
        "This gives your name and origin, not how you feel.",
      ],
    ),
    qe(
      "eng-a1-1-q08",
      "Classroom English • Instructions",
      "The teacher says, “Open your book to page ten.” What should you do?",
      ["Close your book and go to page ten.", "Write the number ten on your page.", "Say, 'Page ten,' and wait for help.", "Open the book and find page ten."],
      3,
      "The instruction asks you to open the book and go to page ten.",
      [
        "Closing the book is the opposite of the instruction.",
        "Writing the number does not follow the instruction.",
        "Saying the page number does not open the book to the page.",
      ],
    ),
    qe(
      "eng-a1-1-q09",
      "Greetings • Time and context",
      "Which greeting is suitable when you meet someone at night?",
      ["Good evening, my friend.", "Good morning, my friend.", "Good night, my friend.", "See you yesterday, friend."],
      0,
      "Good evening is a greeting used when meeting someone in the evening.",
      [
        "Good morning is used for a morning greeting.",
        "Good night is generally used when leaving or before sleep, not when meeting.",
        "See you yesterday is not a suitable greeting.",
      ],
    ),
    qe(
      "eng-a1-1-q10",
      "Reading • Personal information",
      "Read: “Hello, I'm Ana. I'm a student. I'm from Bandung.” Where is Ana from?",
      ["Jakarta", "Surabaya", "Bandung", "A student"],
      2,
      "The text says, “I'm from Bandung.”",
      [
        "Jakarta is not named as Ana's home in the text.",
        "Surabaya is not named as Ana's home in the text.",
        "A student describes Ana's status, not where she is from.",
      ],
    ),
  ],
};

const A1_V2_ESSAY_RUBRIC = "Penilaian mandiri 0–5 per kriteria (maksimal 20): 0 = kosong/tidak relevan; 1 = sulit dipahami; 2 = sebagian sesuai; 3 = cukup tepat dengan beberapa kesalahan; 4 = jelas dan sebagian besar tepat; 5 = lengkap, tepat untuk level A1, dan mudah dipahami.";

export const ENGLISH_A1_V2_ESSAYS: Record<string, EssayPrompt[]> = {
  "eng-a1-1": [
    {
      id: "eng-a1-1-w1",
      prompt: "Write a 3–4 sentence introduction. Include your name, status or job, and where you are from.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Use be accurately in simple sentences.",
        "Use suitable greeting or introduction vocabulary.",
        "Include a name, status or job, and place of origin.",
        "Make the introduction clear and easy to understand.",
      ],
    },
    {
      id: "eng-a1-1-w2",
      prompt: "Write a four-line dialogue between two people who meet for the first time. Include a greeting, names, and where they are from.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Use be accurately in simple sentences.",
        "Use suitable greeting and introduction vocabulary.",
        "Include both names and information about where they are from.",
        "Make the four lines clear and appropriate for a first meeting.",
      ],
    },
  ],
};
