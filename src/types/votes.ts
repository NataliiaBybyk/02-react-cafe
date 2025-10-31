// Cтвори тип VoteType – це перелік допустимих рядкових значень 'good' | 'neutral' | 'bad'
export type VoteType = "good" | "neutral" | "bad";

// Типізуй стан, який зберігатиме кількість голосів через інтерфейс Votes, який треба оголосити та експортувати
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
