// Import all quiz data files
import quizDataW1 from './quizDataFiles/quizDataW1.js';
import quizDataW2 from './quizDataFiles/quizDataW2.js';
import quizDataW3 from './quizDataFiles/quizDataW3.js';
import quizDataW4 from './quizDataFiles/quizDataW4.js';
import quizDataW5 from './quizDataFiles/quizDataW5.js';
import quizDataW6 from './quizDataFiles/quizDataW6.js';
import quizDataQ1 from './quizDataFiles/quizDataQ1.js';
import quizDataQ2 from './quizDataFiles/quizDataQ2.js';
import quizDataQ3 from './quizDataFiles/quizDataQ3.js';
import quizDataQ4 from './quizDataFiles/quizDataQ4.js';
import quizDataQ5 from './quizDataFiles/quizDataQ5.js';



// Create a new quiz data object with the correct structure
const quizData = {
    // Week quizzes with number keys
    1: quizDataW1,
    2: quizDataW2,
    3: quizDataW3,
    4: quizDataW4,
    5: quizDataW5,
    6: quizDataW6,
    7: quizDataQ1,
    8: quizDataQ2,
    9: quizDataQ3,
    10: quizDataQ4,
    11: quizDataQ5
};





// Export the combined quiz data
export default quizData; 

// Modify quizDataLoader.js to include this at the bottom
// Loop through all quizzes and print their titles
Object.values(quizData).forEach(quiz => {
    console.log(quiz.title);
});