function calculateStudentGrade(score) {
  if (score < 50) {
    return 'F';
  } else if (score < 69) {
    return 'D';
  } else if (score < 79) {
    return 'C';
  } else if (score < 89) {  
    return `b`;
  } else {
    return 'A';
  }
}
// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
