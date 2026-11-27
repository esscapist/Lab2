const grades = require('./grades');
const calculateAverage = require('./calculateAverage');
const findTopStudent = require('./findTopStudent');
const filterFailed = require('./filterFailed');
const addLetterGrade = require('./addLetterGrade');

const average = calculateAverage(grades);
const topStudent = findTopStudent(grades);
const failed = filterFailed(grades, 60);
const withLetters = addLetterGrade(grades);

console.log("Средний балл группы:", average.toFixed(2));
console.log("Лучший студент:", topStudent);
console.log("Список должников:", failed);
console.log("Итоговый массив с буквенными оценками:", withLetters);

module.exports = { grades, calculateAverage, findTopStudent, filterFailed, addLetterGrade };