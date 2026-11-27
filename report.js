const grades = require('./grades');
const calculateAverage = require('./calculateAverage');
const findTopStudent = require('./findTopStudent');
const filterFailed = require('./filterFailed');
const addLetterGrade = require('./addLetterGrade');

console.log("=== ОТЧЁТ: Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades).toFixed(2));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));