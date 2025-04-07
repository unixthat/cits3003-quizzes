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
                type: "true-false",
                text: "In OpenGL's synthetic camera model, the camera is fixed at the origin looking down the negative Z-axis, so moving the camera is achieved by transforming (moving/rotating) the entire world instead.",
                correct: true
            },
            {
                type: "true-false",
                text: "In an orthographic projection, a far object appears smaller on the image plane than a near object of the same size.",
                correct: false
            },
            {
                type: "true-false",
                text: "The CPU (not the GPU) performs the vertex transformations and fragment shading in the modern OpenGL pipeline.",
                correct: false
            },
            {
                type: "true-false",
                text: "OpenGL is a state machine API, meaning that most of its functions modify a global state that persists until changed (rather than returning new data directly).",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a typical stage in the OpenGL graphics pipeline?",
                options: [
                    "Vertex Processing (Vertex Shader stage)",
                    "Clipping and Primitive Assembly",
                    "Rasterization",
                    "Garbage Collection"
                ],
                correct: 3
            },
            {
                type: "multiple-choice",
                text: "In the modern OpenGL programmable pipeline, which stage is responsible for computing the color and other attributes for each pixel fragment?",
                options: [
                    "Vertex Shader",
                    "Geometry Shader",
                    "Fragment Shader",
                    "Rasterizer"
                ],
                correct: 2
            },
            {
                type: "multiple-choice",
                text: "OpenGL's default camera/view orientation can be described as:",
                options: [
                    "Camera at the origin, looking toward -Z direction (into the screen), with +Y up and +X to the right.",
                    "Camera at the origin, looking toward +Z (out of the screen), with +Y up.",
                    "Camera at (0,0,1) looking toward the origin (0,0,0).",
                    "Camera at the origin, looking toward -Y (downwards), with +Z up."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "To rotate an object about its own center and then move it to a new position, which sequence of transformations should be applied?",
                options: [
                    "Rotate the object about its center, then Translate it to the new position.",
                    "Translate the object to the new position, then Rotate about the world origin.",
                    "Translate to origin, then Rotate, then Translate back (to original position).",
                    "The order of applying Rotate or Translate doesn't matter for the final result."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "What is the primary role of a vertex shader in the OpenGL pipeline?",
                options: [
                    "It determines the color of each pixel of a triangle.",
                    "It processes each vertex's attributes (position, normals, etc.), typically transforming vertex positions to clip space and passing data to the fragment stage.",
                    "It rasterizes primitives into fragments.",
                    "It handles user input events for each vertex."
                ],
                correct: 1
            }
        ]
    },
    2: {
        title: "Quiz 2 - Transformations, Matrices",
        questions: [
            {
                type: "true-false",
                text: "Adding two point positions (e.g., coordinates of two distinct points) together yields another meaningful point in space.",
                correct: false
            },
            {
                type: "true-false",
                text: "The Model matrix is used to transform coordinates from an object's local model space into the common world coordinate space.",
                correct: true
            },
            {
                type: "true-false",
                text: "The View matrix (camera transform) is generally the inverse of the camera's world transform – effectively converting world coordinates to a camera-centric coordinate system with the camera at the origin.",
                correct: true
            },
            {
                type: "true-false",
                text: "Using a negative scale factor (e.g., scaling by -1 on an axis) will mirror or reflect an object across the corresponding axis.",
                correct: true
            },
            {
                type: "true-false",
                text: "In a perspective projection, the farther an object is from the camera, the smaller it appears on the projected image.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "To rotate an object about an arbitrary point (pivot) in space (not at the origin), one typically must:",
                options: [
                    "Translate the object so that the pivot point aligns with the origin, then apply the rotation, then translate back to the original location.",
                    "Directly apply the rotation about that pivot in one step; no translation is ever needed for off-origin rotations.",
                    "Rotate the world instead of the object.",
                    "Convert the rotation to Euler angles first."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "In GLSL (OpenGL Shading Language), a uniform variable is one that:",
                options: [
                    "is set by the application and remains constant for all vertices/fragments for a draw call (e.g., a single overall transformation matrix or color).",
                    "varies for each vertex (like position inputs).",
                    "is an output from the fragment shader to the framebuffer.",
                    "has the same value across all applications (a built-in constant)."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "In the graphics pipeline, what is the perspective divide?",
                options: [
                    "The step where clip-space coordinates (x,y,z,w) are divided by w to produce normalized device coordinates.",
                    "Splitting the view frustum into near and far sections for LOD (level of detail).",
                    "Halving the field-of-view angle to simulate perspective.",
                    "A special matrix that handles perspective projection."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "Which of the following transformations is NOT an affine transform (i.e., does not preserve straight lines and parallelism)?",
                options: [
                    "Rotation",
                    "Non-uniform scaling",
                    "Translation",
                    "Perspective projection"
                ],
                correct: 3
            },
            {
                type: "multiple-choice",
                text: "What is the primary purpose of a depth buffer (Z-buffer) in rendering?",
                options: [
                    "To store the depth (distance) of each fragment/pixel and ensure that for overlapping objects, only the closest surface's fragment is ultimately drawn (hidden surface removal).",
                    "To hold the color of each pixel until display.",
                    "To double the frame rate by storing an extra frame.",
                    "To count how many fragments have been processed."
                ],
                correct: 0
            }
        ]
    },
    3: {
        title: "Quiz 3 - Rasterization, Shaders",
        questions: [
            {
                type: "true-false",
                text: "A fragment in OpenGL corresponds to a candidate pixel produced during rasterization, containing color, depth, and other interpolated data.",
                correct: true
            },
            {
                type: "true-false",
                text: "The old fixed-function OpenGL pipeline had built-in concepts like glMatrixMode, glTranslatef, and glRotatef for transformations, but these are not available in the modern core-profile pipeline.",
                correct: true
            },
            {
                type: "true-false",
                text: "In OpenGL, the winding order of a triangle's vertices (clockwise vs counter-clockwise as seen from the camera) can determine whether the triangle is considered a front-face or back-face.",
                correct: true
            },
            {
                type: "true-false",
                text: "A single call to glDrawArrays(GL_TRIANGLES, ...) with a proper vertex buffer can render multiple triangles.",
                correct: true
            },
            {
                type: "true-false",
                text: "In a typical vertex shader, you compute gl_Position by multiplying the vertex's position by the Model-View-Projection matrix.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "Which of these points (given in clip coordinates before perspective divide) would be completely outside the canonical view volume and thus get clipped?",
                options: [
                    "(0.5, 1.2, 0.3, 1) – where x=0.5, y=1.2",
                    "(-0.9, -0.5, 0.2, 1) – where x=-0.9, y=-0.5",
                    "(1.5, 0.0, 0.5, 2) – after divide this is (0.75, 0.0, 0.25)",
                    "(0.0, -0.7, -0.8, 1) – within range"
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "Which statement best describes world coordinates in the context of computer graphics?",
                options: [
                    "World coordinates are a common reference frame in which all objects in the scene are placed (the result after each object's model transform).",
                    "World coordinates are the coordinates relative to the camera's position and orientation.",
                    "World coordinates are the 2D pixel coordinates on the screen.",
                    "World coordinates refer to the object's local coordinate system before any transforms."
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "In OpenGL, normalized device coordinate (NDC) depth ranges from:",
                options: [
                    "-1 (at the near plane) to +1 (at the far plane)",
                    "0 (at the near plane) to 1 (at the far plane)",
                    "-∞ to +∞",
                    "0 to 255"
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "During rasterization, the GPU:",
                options: [
                    "Linearly interpolates vertex attributes across the primitive's surface",
                    "Computes lighting for each fragment",
                    "Performs depth testing",
                    "All of the above"
                ],
                correct: 0
            },
            {
                type: "multiple-choice",
                text: "To pass data from the vertex shader to the fragment shader, you:",
                options: [
                    "Declare an output in the vertex shader and a matching input in the fragment shader",
                    "Use a uniform variable",
                    "Use a fragment shader variable in the vertex shader",
                    "Pass the data through gl_Position"
                ],
                correct: 0
            }
        ]
    },
    4: {
        title: "Quiz 4 - Geometry, Viewing",
        questions: [
            {
                type: "true-false",
                text: "A vector has magnitude and direction but no fixed position in space, whereas a point specifies a location in space.",
                correct: true
            },
            {
                type: "true-false",
                text: "The sum of a point and a vector is a point (applying a displacement vector to a point moves it to another point).",
                correct: true
            },
            {
                type: "true-false",
                text: "The difference between two point positions is a vector.",
                correct: true
            },
            {
                type: "true-false",
                text: "To change a point's coordinate representation from one coordinate frame to another, we must account for the difference in origins (translation) between the frames.",
                correct: true
            },
            {
                type: "true-false",
                text: "OpenGL's viewport transformation maps normalized device coordinates to window (screen pixel) coordinates.",
                correct: true
            },
            {
                type: "multiple-choice",
                text: "Which of the following is NOT a valid operation in affine geometry?",
                options: [
                    "Adding a vector to a point",
                    "Subtracting two points to get a vector",
                    "Adding two points",
                    "Scaling a vector"
                ],
                correct: 2
            },
            {
                type: "multiple-choice",
                text: "In a typical OpenGL program, which of these operations would you typically do LAST in your rendering loop?",
                options: [
                    "Clear the buffers",
                    "Update uniform variables",
                    "Draw the geometry",
                    "Swap the buffers"
                ],
                correct: 3
            },
            {
                type: "multiple-choice",
                text: "Which statement about the Model-View-Projection (MVP) matrix is correct?",
                options: [
                    "It transforms vertices from model space directly to screen space",
                    "It combines the model transform, view transform, and projection transform into one matrix",
                    "It's only used in the fragment shader",
                    "It's automatically provided by OpenGL"
                ],
                correct: 1
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the purpose of a Vertex Array Object (VAO)?",
                options: [
                    "To store vertex data",
                    "To store the state of vertex attribute configurations",
                    "To store shader programs",
                    "To store texture data"
                ],
                correct: 1
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
    },
    5: {
        title: "Quiz 5 - Modern OpenGL, Buffers",
        questions: [
            {
                type: "true-false",
                text: "In OpenGL, the depth buffer is used to determine which fragments should be drawn when objects overlap.",
                correct: true
            },
            {
                type: "true-false",
                text: "The perspective projection matrix is always a 4x4 matrix that transforms points from eye space to clip space.",
                correct: true
            },
            {
                type: "true-false",
                text: "In modern OpenGL, shaders are written in GLSL (OpenGL Shading Language) and must be compiled before use.",
                correct: true
            },
            {
                type: "true-false",
                text: "The view matrix transforms vertices from world space to eye space, where the camera is at the origin looking down the negative z-axis.",
                correct: true
            },
            {
                type: "true-false",
                text: "In OpenGL, the stencil buffer can be used to create complex masking effects and control which fragments are drawn.",
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
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a valid uniform variable type in GLSL?",
                options: [
                    "mat4",
                    "vec3",
                    "sampler2D",
                    "array"
                ],
                correct: 3
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the correct way to handle window resizing?",
                options: [
                    "Automatically handled by OpenGL",
                    "Update the viewport with glViewport and recalculate the projection matrix",
                    "Recreate the window",
                    "Ignore the resize event"
                ],
                correct: 1
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

// Initialize the quiz list when the page loads
document.addEventListener('DOMContentLoaded', showQuizList); 