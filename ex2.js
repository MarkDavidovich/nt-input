import promptSync from "prompt-sync";
const prompt = promptSync();

const questions = [
  { q: "Question 1: What is 2+2? ", a: "4" },
  { q: "Question 2: What is the capital of France? ", a: "Paris" },
  { q: "Question 3: What year is it? ", a: "2026" },
];

let correctCount = 0;
let questionNum = 0;

for (let question of questions) {
  let answer = prompt(question.q);
  if (answer === question.a) {
    correctCount++;
  }
  questionNum++;
}

console.log(`Final Score: ${correctCount}/${questionNum} correct!`);
