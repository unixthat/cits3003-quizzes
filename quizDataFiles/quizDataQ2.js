const quizData = {
    title: "Master Quiz 2",
    questions: [
      {
        type: "true-false",
        text: "The appearance (color and brightness) of objects in a rendered scene is affected by the scene's light sources and material properties.",
        correctAnswerIndex: 0,
        explanation: "If a scene in OpenGL has no light sources, objects rendered with a typical lighting shader will appear black. The appearance of objects is indeed affected by both the light sources in the scene and the material properties of the objects themselves. This is a fundamental principle of computer graphics rendering."
      },
      {
        type: "true-false",
        text: "**Rod** cells in the human eye enable night (low-light) vision but do not contribute to color perception, whereas **cone** cells are responsible for color vision under brighter light.",
        correctAnswerIndex: 0,
        explanation: "Rod cells are specialized for low-light vision (scotopic vision) but cannot distinguish colors. Cone cells, which come in three types (roughly corresponding to red, green, and blue sensitivity), enable color vision but require more light to function effectively. This accurately describes the division of labor between rods and cones in human vision."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is an **additive** primary color used in displays?",
        options: [
          "Red",
          "Yellow",
          "Cyan",
          "Magenta"
        ],
        correctAnswerIndex: 0,
        explanation: "Red is one of the three additive primary colors (along with green and blue) used in displays. Yellow, cyan, and magenta are subtractive primaries used in printing. Displays use RGB because they emit light (additive color mixing), while printers use CMY(K) because they absorb light (subtractive color mixing)."
      },
      {
        type: "multiple-choice",
        text: "Which statement about modern OpenGL (Core profile 3.3+ and above) is **true**?",
        options: [
          "You can render without shaders using the old fixed-function pipeline if you prefer.",
          "You must use Vertex Array Objects (VAOs) and buffer objects to send geometry data to the GPU.",
          "The `glBegin/glEnd` immediate mode is still commonly used for efficiency.",
          "The projection and modelview matrices are built-in and managed by OpenGL automatically."
        ],
        correctAnswerIndex: 1,
        explanation: "Modern OpenGL (core profile) requires the use of Vertex Array Objects and buffer objects for sending vertex data to the GPU. The other options are false: You cannot use the fixed-function pipeline in core profile (a). Immediate mode (glBegin/End) is removed in core profile (c). Matrices are not built-in; you must manage them yourself (d)."
      },
      {
        type: "multiple-choice",
        text: "Which of these statements about GLUT is **false**?",
        options: [
          "GLUT provides a cross-platform way to create an OpenGL window and context.",
          "GLUT handles keyboard and mouse input and exposes them via callbacks.",
          "GLUT is part of the official OpenGL specification and library.",
          "GLUT is intended for simple demos and is not a full-fledged GUI toolkit."
        ],
        correctAnswerIndex: 2,
        explanation: "GLUT is a separate utility library, not part of the OpenGL specification. The other statements are true: GLUT does provide cross-platform window creation (a). It does handle input via callbacks (b). It is indeed a simple toolkit, not a full GUI framework (d)."
      },
      {
        type: "multiple-choice",
        text: "Which OpenGL primitive should be used to draw a connected series of line segments (each vertex connected to the next in order)?",
        options: [
          "GL_LINE_LOOP",
          "GL_TRIANGLE_FAN",
          "GL_LINE_STRIP",
          "GL_LINES"
        ],
        correctAnswerIndex: 2,
        explanation: "GL_LINE_STRIP is exactly what's needed to draw connected line segments where each vertex is connected to the next in sequence. GL_LINE_LOOP would add an extra line back to the start, GL_TRIANGLE_FAN is for triangles, and GL_LINES treats each pair of vertices as a separate line segment."
      },
      {
        type: "multiple-choice",
        text: "What must an application do to render a **concave** polygon (one that is not convex) in OpenGL?",
        options: [
          "Tessellate the polygon into a set of triangles before rendering.",
          "Use a special OpenGL primitive for concave polygons.",
          "Render it as a single GL_POLYGON without modification.",
          "OpenGL automatically detects and subdivides concave polygons."
        ],
        correctAnswerIndex: 0,
        explanation: "OpenGL (especially modern OpenGL) works primarily with triangles. To render a concave polygon, you must break it down into triangles first. There is no built-in concave polygon primitive (b), GL_POLYGON requires convex shapes (c), and OpenGL doesn't automatically handle concave shapes (d)."
      },
      {
        type: "multiple-choice",
        text: "During the rendering pipeline, how are primitives partly outside the view frustum handled?",
        options: [
          "They are completely discarded (not drawn at all).",
          "They are **clipped**, so only the portions inside the view volume are kept and drawn.",
          "They are drawn in full, but the parts outside simply aren't visible on screen.",
          "The pipeline renders them at lower resolution outside the frustum."
        ],
        correctAnswerIndex: 1,
        explanation: "When a primitive partially extends outside the view volume, OpenGL clips it at the boundaries of the view volume, keeping only the portion inside. It doesn't completely discard partially visible primitives (a), doesn't draw the full primitive (c), and doesn't use lower resolution outside the frustum (d)."
      },
      {
        type: "multiple-choice",
        text: "In normalized device coordinates (after perspective division), what is the range of X, Y, and Z for points that are inside the view volume?",
        options: [
          "0 to 1",
          "–1 to 1",
          "–0.5 to 0.5",
          "–100 to 100"
        ],
        correctAnswerIndex: 1,
        explanation: "After the perspective divide, coordinates in NDC (Normalized Device Coordinates) range from -1 to +1 in all three dimensions. This is the standard range for the canonical view volume in OpenGL. Values outside this range are clipped."
      },
      {
        type: "multiple-choice",
        text: "Which transformation is **not rigid** (i.e. does **not** preserve both shape and size)?",
        options: [
          "Rotation about the origin",
          "Translation along an axis",
          "Uniform scaling (same scale factor in all directions)",
          "Non-uniform scaling (different scale factors for axes)"
        ],
        correctAnswerIndex: 3,
        explanation: "Non-uniform scaling (different scale factors for different axes) changes both shape and size, making it non-rigid. Rotation (a) and translation (b) are rigid transformations that preserve both shape and size. Uniform scaling (c) changes size but preserves shape (it's a similarity transform)."
      },
      {
        type: "multiple-choice",
        text: "To define a **coordinate frame** in 3D space, you need:",
        options: [
          "One origin point and three mutually perpendicular basis vectors.",
          "One reference point and one direction vector.",
          "Any three non-collinear points.",
          "A grid drawn along each axis."
        ],
        correctAnswerIndex: 0,
        explanation: "A 3D coordinate frame requires an origin point and three orthonormal basis vectors (typically labeled i, j, k or x, y, z). One point and one vector (b) isn't enough, three non-collinear points (c) don't define a standard frame, and a grid (d) is just a visualization tool."
      },
      {
        type: "multiple-choice",
        text: "In homogeneous coordinates, how is a translation by (t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub>) typically represented as a matrix (using column-vector convention)?",
        options: [
          "A 3×3 matrix added to the point coordinates after transformation.",
          "A 4×4 matrix with t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub> in the **last column**, and 1 in the bottom-right corner.",
          "A 4×4 matrix with t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub> in the bottom row.",
          "It's impossible to represent translation with a matrix multiplication."
        ],
        correctAnswerIndex: 1,
        explanation: "In homogeneous coordinates using column vectors, a translation matrix has the form:\n```\n| 1 0 0 tx |\n| 0 1 0 ty |\n| 0 0 1 tz |\n| 0 0 0 1  |\n```\nThe translation components go in the last column (not bottom row), with 1 in the bottom-right corner."
      },
      {
        type: "multiple-choice",
        text: "In GLSL, a `uniform` variable declared in a shader…",
        options: [
          "…stays constant for all vertices/fragments for a given draw call, and is set by the application (not by the shader code).",
          "…has the same meaning as a C `static` variable and cannot be changed at runtime.",
          "…is a variable that linearly interpolates between vertices.",
          "…must be an integer type."
        ],
        correctAnswerIndex: 0,
        explanation: "A uniform variable in GLSL is set by the application and remains constant for all vertices/fragments during a draw call. It's not like C's static (b), doesn't interpolate (c), and can be any basic GLSL type, not just integers (d)."
      },
      {
        type: "multiple-choice",
        text: "Which of these is **NOT** a built-in variable provided by GLSL (assuming modern shader usage)?",
        options: [
          "`gl_Position` (in vertex shader)",
          "`gl_FragCoord` (in fragment shader)",
          "`gl_FragColor` (fragment color output)",
          "`gl_VertexPointer`"
        ],
        correctAnswerIndex: 3,
        explanation: "There is no built-in GLSL variable called gl_VertexPointer. The others are real: gl_Position is the built-in output for vertex position, gl_FragCoord gives fragment window coordinates, and gl_FragColor was the traditional fragment output (though modern GLSL prefers user-defined outputs)."
      },
      {
        type: "multiple-choice",
        text: "What is the **main output** of a fragment shader in the OpenGL pipeline?",
        options: [
          "The final color (and optionally depth) for the fragment.",
          "A transformed vertex position.",
          "A new set of vertices to add to the scene.",
          "There is no output; fragment shaders only perform calculations with no output."
        ],
        correctAnswerIndex: 0,
        explanation: "The main purpose of a fragment shader is to compute the color of each fragment. It can also optionally write a custom depth value. It doesn't output vertex positions (b), can't create new vertices (c), and must produce some output (d)."
      },
      {
        type: "multiple-choice",
        text: "A vertex shader **cannot** do which of the following?",
        options: [
          "Transform the position of a vertex.",
          "Output a custom varying (out) variable (e.g., a color) for interpolation.",
          "Discard an entire primitive on its own.",
          "Access a uniform variable provided by the application."
        ],
        correctAnswerIndex: 2,
        explanation: "A vertex shader processes one vertex at a time and cannot see or affect other vertices or the whole primitive. It can transform vertices (a), output varying variables (b), and access uniforms (d), but cannot discard primitives – that would require a geometry shader."
      },
      {
        type: "true-false",
        text: "Calling `glGenBuffers(1, &bufferID)` in OpenGL immediately allocates GPU memory for a new buffer object.",
        correctAnswerIndex: 1,
        explanation: "glGenBuffers only generates a name (ID) for a buffer object. It doesn't allocate any GPU memory – that happens later when you call glBufferData. The statement is false because generation and allocation are separate steps."
      },
      {
        type: "multiple-choice",
        text: "Typically, what is stored in a **Vertex Buffer Object (VBO)**?",
        options: [
          "Vertex attribute data such as positions, normals, texture coordinates, etc.",
          "Compiled shader programs.",
          "CPU-based arrays of vertices that are accessed directly by the CPU during drawing.",
          "The list of OpenGL commands (display list) for rendering a scene."
        ],
        correctAnswerIndex: 0,
        explanation: "VBOs typically store vertex data like positions, normals, colors, and texture coordinates. They don't store shader programs (b), aren't CPU-side arrays (c), and aren't display lists (d). VBOs are GPU memory buffers for vertex attributes."
      },
      {
        type: "multiple-choice",
        text: "Which logical input device category best describes standard **keyboard input** in an interactive graphics program?",
        options: [
          "**String** device (returns characters or strings)",
          "**Locator** device (returns a position)",
          "**Pick** device (returns an ID of a selected item)",
          "**Valuator** device (returns a continuous value)"
        ],
        correctAnswerIndex: 0,
        explanation: "A keyboard is logically a string device because it returns character data (text input). It's not a locator (position), pick (selection), or valuator (continuous value) device. The logical classification is based on the type of data returned."
      },
      {
        type: "multiple-choice",
        text: "Which GLUT function registers a callback to handle **window redraw** requests (i.e., painting the window's contents)?",
        options: [
          "`glutDisplayFunc(myDisplayFunc)`",
          "`glutIdleFunc(myIdleFunc)`",
          "`glutReshapeFunc(myReshapeFunc)`",
          "`glutMotionFunc(myMotionFunc)`"
        ],
        correctAnswerIndex: 0,
        explanation: "The display callback (registered with glutDisplayFunc) is called whenever the window needs to be redrawn. The other functions serve different purposes: glutIdleFunc is for background processing, glutReshapeFunc handles window resizing, and glutMotionFunc handles mouse movement."
      },
      {
        type: "true-false",
        text: "The GLUT **idle** callback (registered via `glutIdleFunc`) can be used to continuously update or animate the scene when no other events are happening.",
        correctAnswerIndex: 0,
        explanation: "The idle callback is indeed called when no other events are pending, making it perfect for continuous updates or animation. You can use it to update object positions or states and trigger redraws. The statement accurately describes its purpose."
      },
      {
        type: "true-false",
        text: "In a double-buffered OpenGL context using GLUT, you typically call `glutSwapBuffers()` at the end of your display callback to swap the drawn frame to the screen.",
        correctAnswerIndex: 0,
        explanation: "In double buffering, you draw to a back buffer and then swap it with the front buffer to display the frame. glutSwapBuffers() performs this swap, and it's typically called at the end of the display callback. This is standard practice for smooth animation."
      },
      {
        type: "true-false",
        text: "A rotation about the Z-axis (by some angle θ) will affect the x- and y-coordinates of a point but leave its z-coordinate unchanged.",
        correctAnswerIndex: 0,
        explanation: "A rotation around the Z-axis only affects X and Y coordinates. The transformation matrix for Z-rotation has the form:\n```\n| cos θ  -sin θ  0 |\n| sin θ   cos θ  0 |\n|   0      0     1 |\n```\nThis clearly shows that the Z coordinate remains unchanged."
      },
      {
        type: "true-false",
        text: "Enabling depth testing (e.g., via `glEnable(GL_DEPTH_TEST)`) is necessary to ensure that closer objects correctly occlude farther objects in a 3D scene.",
        correctAnswerIndex: 0,
        explanation: "Depth testing is essential for proper 3D rendering. Without it, objects would be drawn in the order they're submitted, regardless of their actual depth in the scene. GL_DEPTH_TEST enables the depth buffer to ensure proper occlusion."
      },
      {
        type: "true-false",
        text: "The function `glClearColor(r, g, b, a)` sets the color to be used when clearing the window.",
        correctAnswerIndex: 0,
        explanation: "glClearColor sets the color values used when clearing the color buffer with glClear(GL_COLOR_BUFFER_BIT). This is how you set the background color for your scene. The statement accurately describes the function's purpose."
      }
    ]
  
};

export default quizData; 