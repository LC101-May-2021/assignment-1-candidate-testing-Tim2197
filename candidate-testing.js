const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = String();

// console.log (typeof candidateName)


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = ("Who was the first American woman in space?: ");
let correctAnswer;
let candidateAnswer = String();
let questions;
let correctAnswers = "Sally Ride" ;
let candidateAnswers;

function askForName (){ 
  candidateName = input.question("What is your name?: ");

  // TODO 1.1b: Ask for candidate's name //
}

//console.log('Hello ${candidateName}!')

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question (question);

if (candidateAnswer === "Sally Ride") {
 console.log (`Your answer was "${candidateAnswer}". Your answer is correct.`);
} 
  else 
  console.log (`Your answer was "${candidateAnswer}". Your answer is incorrect.`);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;


  return grade;
}

function runProgram() {
  askForName();

  // TODO 1.1c: Ask for candidate's name //
  console.log (`Hello, ${candidateName}.`)

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};