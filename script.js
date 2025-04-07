// Quiz data structure
const quizzes = {
    1: {
        title: "Quiz 1 - OpenGL Basics, Rendering Pipeline",
        questions: [
            {
                type: "true-false",
                text: "In OpenGL, the depth buffer is used to determine which fragments should be drawn when objects overlap.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a typical stage in the OpenGL graphics pipeline?",
                options: [
                    "Vertex Shader",
                    "Rasterization",
                    "Fragment Shader",
                    "Memory Management"
                ],
                correct: 3
            },
            // Add more questions from quiz1_gift.txt
        ]
    },
    2: {
        title: "Quiz 2 - Transformations, Matrices",
        questions: [
            {
                type: "true-false",
                text: "The Model matrix transforms vertices from model space (local to the object) to world space.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a valid operation in affine geometry?",
                options: [
                    "Adding a vector to a point",
                    "Subtracting two points to get a vector",
                    "Adding two points",
                    "Scaling a vector"
                ],
                correct: 2
            }
        ]
    },
    3: {
        title: "Quiz 3 - Rasterization, Shaders",
        questions: [
            {
                type: "true-false",
                text: "In modern OpenGL, shaders are written in GLSL (OpenGL Shading Language) and must be compiled before use.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the w component in homogeneous coordinates?",
                options: [
                    "To represent time in animations",
                    "To distinguish between points and vectors",
                    "To store texture coordinates",
                    "To represent color intensity"
                ],
                correct: 1
            }
        ]
    },
    4: {
        title: "Quiz 4 - Geometry, Viewing",
        questions: [
            {
                type: "true-false",
                text: "The view matrix transforms vertices from world space to eye space, where the camera is at the origin looking down the negative z-axis.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "In a perspective projection, what happens to parallel lines in the scene?",
                options: [
                    "They remain parallel in the projected image",
                    "They converge to a vanishing point",
                    "They become curved",
                    "They disappear"
                ],
                correct: 1
            }
        ]
    },
    5: {
        title: "Quiz 5 - Modern OpenGL, Buffers",
        questions: [
            {
                type: "true-false",
                text: "In OpenGL, the stencil buffer can be used to create complex masking effects and control which fragments are drawn.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the stencil buffer in OpenGL?",
                options: [
                    "To store depth values",
                    "To store color values",
                    "To control which fragments are drawn",
                    "To store texture coordinates"
                ],
                correct: 2
            }
        ]
    }
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuiz(quizNumber) {
    currentQuiz = quizNumber;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    const quiz = quizzes[quizNumber];
    if (!quiz) {
        alert('Quiz not found!');
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="quiz-container">
            <h2>${quiz.title}</h2>
            <div id="question-container"></div>
            <button class="submit-btn" onclick="submitQuiz()">Submit Quiz</button>
        </div>
    `;

    showQuestion();
}

function showQuestion() {
    const quiz = quizzes[currentQuiz];
    const question = quiz.questions[currentQuestionIndex];
    const container = document.getElementById('question-container');

    let questionHTML = `
        <div class="question">
            <h3>Question ${currentQuestionIndex + 1} of ${quiz.questions.length}</h3>
            <p>${question.text}</p>
    `;

    if (question.type === 'true-false') {
        questionHTML += `
            <div class="options">
                <div class="option" onclick="selectAnswer(true)">True</div>
                <div class="option" onclick="selectAnswer(false)">False</div>
            </div>
        `;
    } else if (question.type === 'multiple-choice') {
        questionHTML += `
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectAnswer(${index})">${option}</div>
                `).join('')}
            </div>
        `;
    }

    questionHTML += '</div>';
    container.innerHTML = questionHTML;
}

function selectAnswer(answer) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    const selectedOption = event.target;
    selectedOption.classList.add('selected');
    
    userAnswers[currentQuestionIndex] = answer;
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
        if (currentQuestionIndex < quizzes[currentQuiz].questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }
    }, 500);
}

function submitQuiz() {
    const quiz = quizzes[currentQuiz];
    let score = 0;
    
    userAnswers.forEach((answer, index) => {
        const question = quiz.questions[index];
        if (question.type === 'true-false') {
            if (answer === question.correct) score++;
        } else if (question.type === 'multiple-choice') {
            if (answer === question.correct) score++;
        }
    });

    const percentage = (score / quiz.questions.length) * 100;
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="results">
            <h2>Quiz Results</h2>
            <div class="score">${score}/${quiz.questions.length} (${percentage.toFixed(1)}%)</div>
            <div class="feedback">
                ${getFeedback(percentage)}
            </div>
        </div>
    `;
}

function getFeedback(percentage) {
    if (percentage >= 90) return "Excellent! You've mastered this material!";
    if (percentage >= 70) return "Good job! You have a solid understanding.";
    if (percentage >= 50) return "You're getting there! Review the material and try again.";
    return "You might want to review the material and try again.";
}

function showQuizList() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <header>
            <h1>CITS3003 Computer Graphics Quizzes</h1>
            <p>Select a quiz to begin</p>
        </header>
        
        <div class="quiz-list">
            <div class="quiz-card" onclick="loadQuiz(1)">
                <h2>Quiz 1</h2>
                <p>Topics: OpenGL Basics, Rendering Pipeline</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(2)">
                <h2>Quiz 2</h2>
                <p>Topics: Transformations, Matrices</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(3)">
                <h2>Quiz 3</h2>
                <p>Topics: Rasterization, Shaders</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(4)">
                <h2>Quiz 4</h2>
                <p>Topics: Geometry, Viewing</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(5)">
                <h2>Quiz 5</h2>
                <p>Topics: Modern OpenGL, Buffers</p>
            </div>
        </div>
    `;
} 