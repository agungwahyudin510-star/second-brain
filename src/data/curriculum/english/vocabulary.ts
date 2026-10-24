export interface EnglishVocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
  collocation: string;
  topic: string;
}

export const ENGLISH_A1_VOCABULARY: EnglishVocabularyItem[] = [
  { id: "hello", word: "hello", partOfSpeech: "interjection", meaning: "halo", example: "Hello, my name is Ana.", collocation: "say hello", topic: "Greetings" },
  { id: "repeat", word: "repeat", partOfSpeech: "verb", meaning: "mengulang", example: "Could you repeat that, please?", collocation: "repeat a question", topic: "Greetings" },
  { id: "student", word: "student", partOfSpeech: "noun", meaning: "pelajar/mahasiswa", example: "I am a student.", collocation: "English student", topic: "Introductions" },
  { id: "from", word: "from", partOfSpeech: "preposition", meaning: "dari", example: "I am from Indonesia.", collocation: "be from a place", topic: "Introductions" },
  { id: "hobby", word: "hobby", partOfSpeech: "noun", meaning: "hobi", example: "My hobby is cooking.", collocation: "favorite hobby", topic: "Introductions" },
  { id: "brother", word: "brother", partOfSpeech: "noun", meaning: "saudara laki-laki", example: "Her brother is a chef.", collocation: "older brother", topic: "Family" },
  { id: "usually", word: "usually", partOfSpeech: "adverb", meaning: "biasanya", example: "I usually walk to work.", collocation: "usually do something", topic: "Routines" },
  { id: "wake-up", word: "wake up", partOfSpeech: "phrasal verb", meaning: "bangun tidur", example: "I wake up at six.", collocation: "wake up early", topic: "Routines" },
  { id: "breakfast", word: "breakfast", partOfSpeech: "noun", meaning: "sarapan", example: "We have breakfast at home.", collocation: "have breakfast", topic: "Routines" },
  { id: "often", word: "often", partOfSpeech: "adverb", meaning: "sering", example: "She is often busy on Mondays.", collocation: "often visit", topic: "Routines" },
  { id: "station", word: "station", partOfSpeech: "noun", meaning: "stasiun", example: "The bank is next to the station.", collocation: "train station", topic: "Places" },
  { id: "library", word: "library", partOfSpeech: "noun", meaning: "perpustakaan", example: "The cafe is across from the library.", collocation: "public library", topic: "Places" },
  { id: "straight", word: "straight", partOfSpeech: "adverb/adjective", meaning: "lurus", example: "Go straight and turn left.", collocation: "go straight", topic: "Directions" },
  { id: "across-from", word: "across from", partOfSpeech: "preposition", meaning: "di seberang", example: "The cafe is across from the bank.", collocation: "across from the bank", topic: "Directions" },
  { id: "rice", word: "rice", partOfSpeech: "noun", meaning: "nasi/beras", example: "We need some rice.", collocation: "a bowl of rice", topic: "Food" },
  { id: "slice", word: "slice", partOfSpeech: "noun", meaning: "irisan/potong", example: "I would like two slices of bread.", collocation: "a slice of bread", topic: "Food" },
  { id: "bottle", word: "bottle", partOfSpeech: "noun", meaning: "botol", example: "Could I have a bottle of water?", collocation: "a bottle of water", topic: "Shopping" },
  { id: "price", word: "price", partOfSpeech: "noun", meaning: "harga", example: "What is the price of this bag?", collocation: "ask the price", topic: "Shopping" },
  { id: "please", word: "please", partOfSpeech: "adverb", meaning: "tolong/silakan", example: "Could I have some water, please?", collocation: "Could I have..., please?", topic: "Shopping" },
  { id: "wear", word: "wear", partOfSpeech: "verb", meaning: "mengenakan", example: "She is wearing a blue jacket.", collocation: "wear a jacket", topic: "Clothes" },
  { id: "jacket", word: "jacket", partOfSpeech: "noun", meaning: "jaket", example: "He is wearing a jacket today.", collocation: "wear a jacket", topic: "Clothes" },
  { id: "now", word: "now", partOfSpeech: "adverb", meaning: "sekarang", example: "They are playing football now.", collocation: "right now", topic: "Activities" },
  { id: "bring", word: "bring", partOfSpeech: "verb", meaning: "membawa", example: "Bring your notebook to class.", collocation: "bring a notebook", topic: "Messages" },
  { id: "meet", word: "meet", partOfSpeech: "verb", meaning: "bertemu/berkumpul", example: "The English club meets on Friday.", collocation: "meet a friend", topic: "Messages" },
  { id: "help", word: "help", partOfSpeech: "verb/noun", meaning: "membantu/bantuan", example: "Could you help me, please?", collocation: "ask for help", topic: "Communication" },
  { id: "understand", word: "understand", partOfSpeech: "verb", meaning: "memahami", example: "I do not understand this question.", collocation: "understand a question", topic: "Communication" },
  { id: "meaning", word: "meaning", partOfSpeech: "noun", meaning: "arti/makna", example: "What is the meaning of this word?", collocation: "word meaning", topic: "Communication" },
  { id: "friend", word: "friend", partOfSpeech: "noun", meaning: "teman", example: "You are my friend.", collocation: "make a friend", topic: "Introductions" },
  { id: "near", word: "near", partOfSpeech: "preposition/adjective", meaning: "dekat", example: "There is a pharmacy near here.", collocation: "near here", topic: "Places" },
  { id: "corner", word: "corner", partOfSpeech: "noun", meaning: "sudut/persimpangan", example: "Turn right at the corner.", collocation: "at the corner", topic: "Directions" },
  { id: "enjoy", word: "enjoy", partOfSpeech: "verb", meaning: "menikmati/suka", example: "I enjoy cooking.", collocation: "enjoy reading", topic: "Introductions" },
  { id: "together", word: "together", partOfSpeech: "adverb", meaning: "bersama-sama", example: "We study English together.", collocation: "work together", topic: "Routines" },
];
