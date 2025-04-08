// test.js
import quizData from './quizDataLoader.js';

// Loop through all quizzes and print their titles
Object.values(quizData).forEach(quiz => {
    console.log(quiz.title);
});