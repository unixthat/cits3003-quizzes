const quizData = {
    title: "Master Quiz 5",
    questions: [
      {
        type: "true-false",
        text: "In a rendered scene, the appearance of objects is not affected by the light sources present.",
        correctAnswerIndex: 1,
        explanation: "Light sources significantly affect the appearance of objects in a rendered scene through properties like diffuse reflection, specular highlights, and shadows."
      },
      {
        type: "true-false",
        text: "In OpenGL's camera model, objects, light sources, and the viewer (camera) can be defined separately — their combined interaction produces the final rendered image.",
        correctAnswerIndex: 0,
        explanation: "OpenGL's camera model allows independent definition of objects, light sources, and the viewer position, which together determine the final rendered image."
      },
      {
        type: "true-false",
        text: "Ray tracing produces highly realistic images by simulating rays of light, but it is generally more computationally expensive than OpenGL's real-time rasterization pipeline.",
        correctAnswerIndex: 0,
        explanation: "Ray tracing simulates light behavior more accurately but requires more computation than rasterization, making it less suitable for real-time applications."
      },
      {
        type: "true-false",
        text: "OpenGL is essentially a specification/API, and the actual implementation of OpenGL functions is provided by your graphics hardware's driver.",
        correctAnswerIndex: 0,
        explanation: "OpenGL is an API specification, and the actual implementation is provided by graphics drivers that interface with the hardware."
      },
      {
        type: "multiple-choice",
        text: "When you call a drawing command like glDrawArrays, where does the rendering work happen?",
        options: [
          "On the GPU (graphics processing unit) via the graphics driver.",
          "On the CPU in a separate thread created by OpenGL.",
          "In a software renderer that OpenGL provides by default.",
          "Directly on the display without involving the GPU or CPU."
        ],
        correctAnswerIndex: 0,
        explanation: "Modern OpenGL rendering is performed on the GPU through the graphics driver, which is optimized for parallel processing of graphics operations."
      },
      {
        type: "true-false",
        text: "Modern OpenGL uses a retained mode approach (with buffers and shaders) instead of the old immediate mode (specifying vertices on the fly each frame).",
        correctAnswerIndex: 0,
        explanation: "Modern OpenGL uses retained mode, storing vertex data in buffers and using shaders, which is more efficient than the deprecated immediate mode."
      },
      {
        type: "multiple-choice",
        text: "Which statement about GLUT is true?",
        options: [
          "GLUT makes OpenGL programs cross-platform by handling window creation and input events for you.",
          "GLUT provides advanced GUI widgets (buttons, menus) as part of its toolkit.",
          "GLUT is part of the core OpenGL library and is required to use OpenGL.",
          "GLUT can only be used with the C programming language."
        ],
        correctAnswerIndex: 0,
        explanation: "GLUT (OpenGL Utility Toolkit) provides cross-platform window creation and input handling, making it easier to write portable OpenGL applications."
      },
      {
        type: "multiple-choice",
        text: "Which stage of the OpenGL pipeline is responsible for breaking down primitives into fragments (pixels) for the fragment shader?",
        options: [
          "Primitive Assembly",
          "Fragment Shading",
          "Vertex Shading",
          "Rasterization stage"
        ],
        correctAnswerIndex: 3,
        explanation: "The rasterization stage converts primitives into fragments (potential pixels) that will be processed by the fragment shader."
      },
      {
        type: "true-false",
        text: "During rasterization, vertex outputs (varyings) like color or texture coordinates are interpolated to produce values for each fragment, before those fragments are processed by the fragment shader.",
        correctAnswerIndex: 0,
        explanation: "Rasterization interpolates vertex attributes across the primitive to generate per-fragment values that are passed to the fragment shader."
      },
      {
        type: "true-false",
        text: "Clip coordinates refer to the coordinates of vertices after the projection transformation has been applied but before the perspective divide by w.",
        correctAnswerIndex: 0,
        explanation: "Clip coordinates are the result of applying the projection matrix but before the perspective divide, which happens later in the pipeline."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is a property of an affine transformation in 3D?",
        options: [
          "It preserves straight lines (keeps points that were collinear still collinear after transformation).",
          "It preserves all angles between vectors.",
          "It cannot include translations (only rotation and scaling).",
          "It is a non-linear (curved) mapping."
        ],
        correctAnswerIndex: 0,
        explanation: "Affine transformations preserve straight lines and parallelism, but may change angles and distances."
      },
      {
        type: "true-false",
        text: "The order of transformations matters: for example, applying a rotation then a translation generally gives a different result than applying the translation first and then the rotation.",
        correctAnswerIndex: 0,
        explanation: "Matrix multiplication is not commutative, so the order of transformations affects the final result."
      },
      {
        type: "multiple-choice",
        text: "Shaders in modern OpenGL are most commonly written in:",
        options: [
          "GLSL (OpenGL Shading Language)",
          "C++",
          "Assembly language",
          "HLSL"
        ],
        correctAnswerIndex: 0,
        explanation: "GLSL (OpenGL Shading Language) is the standard shading language for OpenGL, specifically designed for writing vertex and fragment shaders."
      },
      {
        type: "true-false",
        text: "A vertex shader must output a clip-space position for each vertex (usually by writing to gl_Position).",
        correctAnswerIndex: 0,
        explanation: "The vertex shader must output a clip-space position for each vertex by writing to gl_Position, as this is required for proper rendering."
      },
      {
        type: "multiple-choice",
        text: "Which is NOT a valid storage qualifier or keyword in GLSL?",
        options: [
          "in",
          "out",
          "uniform",
          "static"
        ],
        correctAnswerIndex: 3,
        explanation: "GLSL uses 'in', 'out', and 'uniform' as storage qualifiers, but 'static' is not a valid GLSL keyword."
      },
      {
        type: "multiple-choice",
        text: "If you want to pass a computed value (e.g. a color) from your vertex shader to your fragment shader, you should:",
        options: [
          "Declare an output variable in the vertex shader and a matching input variable in the fragment shader to carry the value.",
          "Use a uniform for the value so the fragment shader can see it.",
          "Write it to a global variable that both shaders share automatically.",
          "You cannot pass data from the vertex shader to fragment shader in OpenGL."
        ],
        correctAnswerIndex: 0,
        explanation: "Data is passed between shaders using matching input/output variables, with the vertex shader output connecting to the fragment shader input."
      },
      {
        type: "true-false",
        text: "A Vertex Array Object (VAO) stores the setup of vertex attribute pointers and associated buffer bindings so that the configuration can be easily reused for drawing.",
        correctAnswerIndex: 0,
        explanation: "VAOs store vertex attribute configurations and buffer bindings, making it efficient to switch between different vertex setups."
      },
      {
        type: "multiple-choice",
        text: "Binding a buffer ID of 0 (e.g., glBindBuffer(GL_ARRAY_BUFFER, 0)) has what effect?",
        options: [
          "It unbinds the currently bound array buffer (no vertex buffer is bound after that).",
          "It binds a special default buffer with ID 0.",
          "It resets or clears the current buffer's data store.",
          "It results in an error, since 0 is not a valid buffer."
        ],
        correctAnswerIndex: 0,
        explanation: "Binding buffer ID 0 unbinds the current buffer from the specified target, effectively clearing the binding."
      },
      {
        type: "multiple-choice",
        text: "Which GLUT function allows you to handle special keyboard keys (like arrow keys or function keys) separately from regular character keys?",
        options: [
          "glutSpecialFunc",
          "glutKeyboardFunc",
          "glutMouseFunc",
          "glutArrowFunc"
        ],
        correctAnswerIndex: 0,
        explanation: "glutSpecialFunc is used to register a callback for special keys like arrow keys and function keys, while glutKeyboardFunc handles regular character keys."
      },
      {
        type: "true-false",
        text: "Calling glutMainLoop() hands control over to GLUT's event processing loop, and code after glutMainLoop() in your main() will not execute (until the program terminates).",
        correctAnswerIndex: 0,
        explanation: "glutMainLoop() starts GLUT's event loop and does not return until the program terminates, so code after it won't execute during normal operation."
      },
      {
        type: "true-false",
        text: "Without a registered display callback in a GLUT program, nothing will be drawn to the window (the window will remain blank or static).",
        correctAnswerIndex: 0,
        explanation: "The display callback is responsible for drawing the scene, so without it, nothing will be rendered to the window."
      },
      {
        type: "true-false",
        text: "Calling glutPostRedisplay() in an update or input callback will request a new frame draw, causing the display callback to be called on the next iteration of the event loop.",
        correctAnswerIndex: 0,
        explanation: "glutPostRedisplay() marks the window as needing to be redrawn, which triggers the display callback on the next event loop iteration."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is not an actual primitive mode you can use with glDrawArrays?",
        options: [
          "GL_POINTS",
          "GL_TRIANGLES",
          "GL_POLYGON (in compatibility, draws a single convex polygon)",
          "GL_SQUARES"
        ],
        correctAnswerIndex: 3,
        explanation: "GL_SQUARES is not a valid OpenGL primitive mode. Valid modes include GL_POINTS, GL_TRIANGLES, and GL_POLYGON (in compatibility profile)."
      },
      {
        type: "true-false",
        text: "glEnable(GL_DEPTH_TEST) is used to turn on depth buffering, so that fragments that are behind others (farther from the camera) are discarded.",
        correctAnswerIndex: 0,
        explanation: "Depth testing ensures that fragments that are behind others are discarded, creating proper 3D rendering with correct depth ordering."
      },
      {
        type: "multiple-choice",
        text: "Which function is used to set the clear color (the background color that the screen will be cleared to)?",
        options: [
          "glClearColor(r, g, b, a)",
          "glColor3f(r, g, b)",
          "glBackgroundColor(r, g, b, a)",
          "glClear(GL_COLOR_BUFFER_BIT, r, g, b)"
        ],
        correctAnswerIndex: 0,
        explanation: "glClearColor sets the color that will be used when clearing the color buffer with glClear."
      }
    ]
  
};

export default quizData; 