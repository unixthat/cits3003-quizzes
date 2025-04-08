// Import quiz data
import quizData from './quizData.js';

/**
 * @typedef {Object} State
 * @property {number|null} currentQuiz - Current quiz number
 * @property {number} currentQuestionIndex - Current question index
 * @property {Array} userAnswers - User's answers for the current quiz
 * @property {Array} shuffledQuestions - The shuffled questions array for the current quiz
 * @property {Array} optionMappings - Maps original option indices to shuffled indices
 */

/** @type {State} */
const state = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    shuffledQuestions: [],
    optionMappings: []
};

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param {Array} array - The array to shuffle
 * @returns {Array} The shuffled array
 */
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Creates a mapping between original and shuffled indices
 * @param {Array} originalArray - The original array
 * @param {Array} shuffledArray - The shuffled array
 * @returns {Array} Mapping from original to shuffled indices
 */
const createIndexMapping = (originalArray, shuffledArray) => {
    const mapping = new Array(originalArray.length);
    for (let i = 0; i < originalArray.length; i++) {
        mapping[i] = shuffledArray.indexOf(originalArray[i]);
    }
    return mapping;
};

/**
 * Creates a reverse mapping from shuffled to original indices
 * @param {Array} originalArray - The original array
 * @param {Array} shuffledArray - The shuffled array
 * @returns {Array} Mapping from shuffled to original indices
 */
const createReverseMapping = (originalArray, shuffledArray) => {
    const mapping = new Array(originalArray.length);
    for (let i = 0; i < originalArray.length; i++) {
        mapping[shuffledArray.indexOf(originalArray[i])] = i;
    }
    return mapping;
};

/**
 * Saves the current quiz progress to localStorage
 */
const saveProgress = () => {
    if (state.currentQuiz !== null && state.userAnswers.length > 0) {
        try {
            localStorage.setItem(
                `quiz${state.currentQuiz}_answers`,
                JSON.stringify(state.userAnswers)
            );
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    }
};

// Expose functions to window object immediately
window.loadQuiz = (quizNumber) => {
    const quiz = quizData[quizNumber];
    if (!quiz) {
        throw new Error('Quiz not found!');
    }

    // Reset state and shuffle questions
    state.currentQuiz = quizNumber;
    state.currentQuestionIndex = 0;
    state.userAnswers = [];

    // Shuffle questions
    state.shuffledQuestions = shuffleArray(quiz.questions);

    // Create option mappings for multiple-choice questions
    state.optionMappings = state.shuffledQuestions.map(question => {
        if (question.type === 'multiple-choice') {
            const shuffledOptions = shuffleArray(question.options);
            const originalToShuffled = createIndexMapping(question.options, shuffledOptions);
            const shuffledToOriginal = createReverseMapping(question.options, shuffledOptions);

            // Update the question with shuffled options
            question.shuffledOptions = shuffledOptions;
            question.originalToShuffled = originalToShuffled;
            question.shuffledToOriginal = shuffledToOriginal;

            return {
                originalToShuffled,
                shuffledToOriginal
            };
        }
        return null;
    });

    // Try to load saved progress
    try {
        const savedAnswers = localStorage.getItem(`quiz${quizNumber}_answers`);
        if (savedAnswers) {
            state.userAnswers = JSON.parse(savedAnswers);
        }
    } catch (error) {
        console.error('Failed to load saved progress:', error);
    }

    renderQuiz(quiz);
};

window.showQuizList = () => {
    const container = document.querySelector('.container');
    if (!container) return;

    container.innerHTML = `
        <header>
            <h1>CITS3003 Computer Graphics Practice Tests</h1>
            <p>Select a practice test to begin</p>
        </header>
        
        <div class="quiz-list">
            ${Object.entries(quizData).map(([id, quiz]) => `
                <div class="quiz-card" onclick="loadQuiz(${id})">
                    <h2>${quiz.title}</h2>
                </div>
            `).join('')}
        </div>
    `;
};

window.selectAnswer = (answer) => {
    const question = state.shuffledQuestions[state.currentQuestionIndex];

    // For multiple-choice questions, map the shuffled index back to the original
    if (question.type === 'multiple-choice') {
        const originalIndex = question.shuffledToOriginal[answer];
        state.userAnswers[state.currentQuestionIndex] = originalIndex;
    } else {
        state.userAnswers[state.currentQuestionIndex] = answer;
    }

    highlightSelectedAnswer(answer);
    saveProgress();
};

window.previousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        showQuestion();
    }
};

window.nextQuestion = () => {
    const quiz = quizData[state.currentQuiz];
    if (!quiz) return;

    if (state.currentQuestionIndex < quiz.questions.length - 1) {
        state.currentQuestionIndex++;
        showQuestion();
    } else {
        // If we're on the last question and clicking next, submit the quiz
        submitQuiz();
    }
};

window.submitQuiz = () => {
    const quiz = quizData[state.currentQuiz];
    const score = calculateScore(quiz);
    const percentage = (score / quiz.questions.length) * 100;

    renderResults(score, quiz.questions.length, percentage);

    // Clear saved progress after submission
    try {
        localStorage.removeItem(`quiz${state.currentQuiz}_answers`);
    } catch (error) {
        console.error('Failed to clear saved progress:', error);
    }
};

/**
 * Renders the quiz UI
 * @param {Object} quiz - The quiz object to render
 */
const renderQuiz = (quiz) => {
    const container = document.querySelector('.container');
    if (!container) return;

    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="quiz-container">
            <h2>${quiz.title}</h2>
            <div id="question-container"></div>
        </div>
    `;

    showQuestion();
};

/**
 * Shows the current question
 */
const showQuestion = () => {
    const quiz = quizData[state.currentQuiz];
    if (!quiz) return;

    const question = state.shuffledQuestions[state.currentQuestionIndex];
    const container = document.getElementById('question-container');
    if (!container || !question) return;

    container.innerHTML = `
        <div class="question">
            <h3>Question ${state.currentQuestionIndex + 1} of ${quiz.questions.length}</h3>
            <p>${question.text}</p>
            ${generateOptionsHTML(question)}
        </div>
        <div class="navigation-buttons">
            ${state.currentQuestionIndex > 0
            ? `<button class="nav-btn" onclick="previousQuestion()">Previous</button>`
            : ''}
            <button class="nav-btn" onclick="nextQuestion()">Next</button>
        </div>
    `;

    // Restore previous answer if it exists
    const savedAnswer = state.userAnswers[state.currentQuestionIndex];
    if (savedAnswer !== undefined) {
        highlightSelectedAnswer(savedAnswer);
    }
};

/**
 * Generates HTML for question options
 * @param {Object} question - The question object
 * @returns {string} The generated HTML
 */
const generateOptionsHTML = (question) => {
    if (question.type === 'true-false') {
        return `
            <div class="options">
                <div class="option" onclick="selectAnswer(true)">True</div>
                <div class="option" onclick="selectAnswer(false)">False</div>
            </div>
        `;
    } else {
        // Use shuffled options if available
        const options = question.shuffledOptions || question.options;
        return `
            <div class="options">
                ${options.map((option, index) => `
                    <div class="option" onclick="selectAnswer(${index})">${option}</div>
                `).join('')}
            </div>
        `;
    }
};

/**
 * Highlights the selected answer in the UI
 * @param {boolean|number} answer - The answer to highlight
 */
const highlightSelectedAnswer = (answer) => {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    if (typeof answer === 'boolean') {
        options[answer ? 0 : 1].classList.add('selected');
    } else {
        options[answer].classList.add('selected');
    }
};

/**
 * Calculates the quiz score
 * @param {Object} quiz - The quiz object
 * @returns {number} The calculated score
 */
const calculateScore = (quiz) => {
    return state.userAnswers.reduce((score, answer, index) => {
        const question = state.shuffledQuestions[index];
        return answer === question.correct ? score + 1 : score;
    }, 0);
};

/**
 * Renders the quiz results
 * @param {number} score - The quiz score
 * @param {number} total - Total number of questions
 * @param {number} percentage - Score percentage
 */
const renderResults = (score, total, percentage) => {
    const container = document.querySelector('.container');
    if (!container) return;

    const quiz = quizData[state.currentQuiz];
    const resultsTable = generateResultsTable(quiz);

    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="results">
            <h2>Quiz Results</h2>
            <div class="score">${score}/${total} (${percentage.toFixed(1)}%)</div>
            <div class="feedback">
                ${getFeedback(percentage)}
            </div>
            <div class="results-table-container">
                <h3>Detailed Results</h3>
                ${resultsTable}
            </div>
        </div>
    `;
};

/**
 * Generates a detailed results table
 * @param {Object} quiz - The quiz object
 * @returns {string} HTML table of results
 */
const generateResultsTable = (quiz) => {
    let tableHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Your Response</th>
                    <th>Correct Answer</th>
                    <th>Explanation</th>
                </tr>
            </thead>
            <tbody>
    `;

    state.shuffledQuestions.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        let userAnswerText = '';
        let correctAnswerText = '';

        if (question.type === 'true-false') {
            userAnswerText = userAnswer === true ? 'True' : 'False';
            correctAnswerText = question.correct === true ? 'True' : 'False';
        } else {
            // For multiple-choice, use the original options
            userAnswerText = question.options[userAnswer];
            correctAnswerText = question.options[question.correct];
        }

        tableHTML += `
            <tr class="${isCorrect ? 'correct' : 'incorrect'}">
                <td>${question.text}</td>
                <td>${userAnswerText}</td>
                <td>${correctAnswerText}</td>
                <td>${question.explanation}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    return tableHTML;
};

/**
 * Gets feedback based on score percentage
 * @param {number} percentage - Score percentage
 * @returns {string} Feedback message
 */
const getFeedback = (percentage) => {
    if (percentage >= 90) return "Excellent! You've mastered this material!";
    if (percentage >= 70) return "Good job! You have a solid understanding.";
    if (percentage >= 50) return "You're getting there! Review the material and try again.";
    return "You might want to review the material and try again.";
};

// Initialize the quiz list when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showQuizList();
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        saveProgress();
    }
});

window.addEventListener('beforeunload', saveProgress); 