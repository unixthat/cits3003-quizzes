const quizData = {
    title: "Master Quiz 3",
    questions: [
      {
        type: "true-false",
        text: "If a scene in OpenGL has **no light sources**, objects rendered with a typical lighting shader will appear completely black.",
        correctAnswerIndex: 0,
        explanation: "In a typical lighting shader, if there are no light sources defined, the objects will appear black because there's no light to reflect or illuminate them. This assumes a standard lighting model where object visibility depends on light sources. (Some basic shaders might still show objects without lights, but in a proper lighting setup, no lights means no illumination.)"
      },
      {
        type: "true-false",
        text: "Printing devices (e.g., an inkjet printer) use the **Cyan, Magenta, Yellow** color system, which is a subtractive color model.",
        correctAnswerIndex: 0,
        explanation: "Printers use CMY(K) which is indeed a subtractive color model. The inks subtract (absorb) certain wavelengths from white light, leaving only the desired colors to be reflected. This is in contrast to additive color (RGB) used by displays that emit light."
      },
      {
        type: "multiple-choice",
        text: "Which statement about **color vision** is true?",
        options: [
          "Humans have three types of cone cells, each sensitive to different ranges of wavelengths (roughly corresponding to red, green, and blue light).",
          "Rod cells in the eye are responsible for perceiving colors in bright light.",
          "We need a distinct primary color for every possible visible wavelength to reproduce all colors.",
          "Humans have four primary color receptors, which is why CMYK is used for all displays."
        ],
        correctAnswerIndex: 0,
        explanation: "The human retina has three types of cone cells (photoreceptors) that are most sensitive to long (red), medium (green), and short (blue) wavelengths. This trichromatic vision is why RGB works well for displays. The other options are incorrect: Rod cells handle low-light vision, not color (b). We don't need a primary for each wavelength due to metamerism (c). We have three, not four, types of cone cells; CMYK is for printing, not displays (d)."
      },
      {
        type: "true-false",
        text: "OpenGL's camera uses a synthetic pinhole model where the projection plane is placed in front of the camera's center of projection, resulting in an upright (non-inverted) image.",
        correctAnswerIndex: 0,
        explanation: "OpenGL uses a synthetic camera model where the projection plane is indeed placed in front of the center of projection, unlike a real pinhole camera where the image plane is behind the pinhole. This design choice results in an upright image without the need for inversion."
      },
      {
        type: "true-false",
        text: "OpenGL is often described as a **state machine** API: functions like `glEnable` or `glColor3f` set persistent states that remain until changed, affecting subsequent rendering calls.",
        correctAnswerIndex: 0,
        explanation: "OpenGL is a state machine – when you call functions like glEnable or set colors/materials, those settings remain in effect until explicitly changed. This state persists and affects all subsequent rendering operations until modified."
      },
      {
        type: "multiple-choice",
        text: "Which of the following statements about OpenGL is **false**?",
        options: [
          "OpenGL commands are executed on the GPU (via the graphics driver).",
          "OpenGL can be used for both 2D and 3D graphics rendering.",
          "OpenGL automatically handles physics and collision simulations for rendered objects.",
          "OpenGL is cross-platform, available on various operating systems given appropriate drivers."
        ],
        correctAnswerIndex: 2,
        explanation: "OpenGL automatically handles physics... is false. OpenGL is purely a graphics API; it doesn't handle physics, collision detection, or game logic. Those must be implemented separately. The other statements are true: OpenGL commands do run on the GPU (a). It can handle both 2D and 3D graphics (b). It is cross-platform (d)."
      },
      {
        type: "true-false",
        text: "GLUT (OpenGL Utility Toolkit) is a library used to create windows and handle input events in OpenGL programs in a platform-independent way.",
        correctAnswerIndex: 0,
        explanation: "GLUT is indeed a utility library that provides cross-platform window creation and input handling for OpenGL applications. It abstracts away the platform-specific details of window management and event handling."
      },
      {
        type: "multiple-choice",
        text: "To draw a connected series of line segments between a list of points (each point connected to the next), you should use:",
        options: [
          "`GL_LINE_LOOP`",
          "`GL_LINE_STRIP`",
          "`GL_TRIANGLE_STRIP`",
          "`GL_LINES`"
        ],
        correctAnswerIndex: 1,
        explanation: "GL_LINE_STRIP is the correct primitive type for drawing connected line segments. It connects each vertex to the next in sequence. GL_LINE_LOOP would add an extra line back to the start, GL_TRIANGLE_STRIP is for triangles, and GL_LINES draws separate, unconnected line segments."
      },
      {
        type: "true-false",
        text: "Any three non-collinear points define a triangle, and a triangle is always a simple, convex polygon.",
        correctAnswerIndex: 0,
        explanation: "Three non-collinear points always define a unique triangle, and any triangle is inherently both simple (no self-intersections) and convex (all interior angles < 180°). This is why triangles are so fundamental in computer graphics."
      },
      {
        type: "true-false",
        text: "OpenGL core (modern OpenGL) does not directly support drawing arbitrary filled polygons with more than three vertices; all complex surfaces must be composed of triangles.",
        correctAnswerIndex: 0,
        explanation: "Modern OpenGL core profile requires all polygons to be broken down into triangles. There is no direct support for arbitrary polygons with more than three vertices. Even if you're drawing a quad, it must be composed of two triangles."
      },
      {
        type: "multiple-choice",
        text: "Which pipeline stage is responsible for applying **model and view transformations** to vertices (typically combining them into a model-view transform)?",
        options: [
          "The application (CPU) before sending vertices",
          "The Vertex Processing stage (Vertex Shader)",
          "The Rasterizer stage",
          "The Fragment Processing stage"
        ],
        correctAnswerIndex: 1,
        explanation: "The vertex shader (vertex processing stage) is responsible for transforming vertices from model space through view space. While the application could do this on the CPU (a), it's typically done in the vertex shader for better performance. Rasterization (c) and fragment processing (d) happen later in the pipeline."
      },
      {
        type: "true-false",
        text: "The **view transformation** (camera transform) is effectively the inverse of the camera's movement and brings world coordinates into the camera's coordinate system (eye space).",
        correctAnswerIndex: 0,
        explanation: "The view transformation is indeed the inverse of the camera's transformation. If the camera moves right, the view transform moves the world left, effectively bringing everything into the camera's coordinate system (eye space)."
      },
      {
        type: "multiple-choice",
        text: "After projection and the perspective divide, which coordinate space are vertices in?",
        options: [
          "Model space",
          "World space",
          "Normalized Device Coordinate (NDC) space",
          "Eye (camera) space"
        ],
        correctAnswerIndex: 2,
        explanation: "After projection and the perspective divide (division by w), vertices are in NDC space where coordinates range from -1 to +1 in all dimensions. This is before the viewport transform converts them to window coordinates."
      },
      {
        type: "multiple-choice",
        text: "Which transformation is **affine** but *not* rigid?",
        options: [
          "Rotation about the origin",
          "Translation",
          "Uniform scaling (same scale on X, Y, Z)",
          "Non-uniform scaling (different scales, e.g., stretch)"
        ],
        correctAnswerIndex: 3,
        explanation: "Non-uniform scaling is affine (can be represented by a matrix) but not rigid because it changes the shape of objects. Rotation (a) and translation (b) are rigid transformations. Uniform scaling (c) changes size but preserves shape (it's a similarity transform, but not rigid)."
      },
      {
        type: "true-false",
        text: "In homogeneous coordinates, a vector (direction) can be represented with **w = 0**, indicating it has no fixed position (points at infinity).",
        correctAnswerIndex: 0,
        explanation: "In homogeneous coordinates, setting w=0 for a vector indicates it represents a direction rather than a position. This makes sense mathematically because translations don't affect vectors (directions), and setting w=0 achieves this property."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is a valid data type in GLSL?",
        options: [
          "`vec5` (5-component vector)",
          "`mat3` (3×3 matrix)",
          "`int3` (3-component integer vector)",
          "`bool4` (4-component boolean vector)"
        ],
        correctAnswerIndex: 1,
        explanation: "Among the options, only `mat3` (3×3 matrix) is a valid GLSL data type. The others are invalid: There is no `vec5` (vectors are limited to 4 components). Use `ivec3` for integer vectors, not `int3`. Use `bvec4` for boolean vectors, not `bool4`."
      },
      {
        type: "multiple-choice",
        text: "Which statement is **true** regarding the order of shader execution in the pipeline?",
        options: [
          "The fragment shader executes once per triangle.",
          "The fragment shader runs after rasterization to determine each fragment's color.",
          "The vertex shader can access the results of the fragment shader.",
          "The vertex shader can emit new primitives on its own."
        ],
        correctAnswerIndex: 1,
        explanation: "The fragment shader runs after rasterization. This is correct. The pipeline order is: vertex shader → rasterization → fragment shader. The fragment shader processes each fragment (potential pixel) after rasterization. The other statements are false: Fragment shaders run per fragment, not per triangle (a). Vertex shaders can't see fragment shader results (c). Vertex shaders can't emit new primitives (d)."
      },
      {
        type: "true-false",
        text: "GLSL (the OpenGL Shading Language) does not support pointer arithmetic or explicit memory address manipulation.",
        correctAnswerIndex: 0,
        explanation: "GLSL does not support pointer arithmetic or explicit memory address manipulation. This is a safety feature of the language, as shaders run on the GPU and direct memory manipulation could lead to undefined behavior or security issues."
      },
      {
        type: "multiple-choice",
        text: "What **must** a vertex shader do to ensure a vertex is correctly placed in the scene?",
        options: [
          "Compute and set the special built-in variable `gl_Position` (clip-space position of the vertex).",
          "Compute and set `gl_FragColor` for that vertex.",
          "Sample textures to get the vertex coordinates.",
          "Output a point size via `gl_PointSize` for every vertex, regardless of primitive type."
        ],
        correctAnswerIndex: 0,
        explanation: "Every vertex shader must output the clip-space position via gl_Position. This is the minimum requirement for a vertex shader. The other options are incorrect: gl_FragColor is for fragment shaders (b). Texture sampling isn't required (c). gl_PointSize is only needed for point primitives (d)."
      },
      {
        type: "true-false",
        text: "To use a Vertex Array Object (VAO) in OpenGL, you must bind it with `glBindVertexArray` before setting up vertex attribute pointers or drawing with it.",
        correctAnswerIndex: 0,
        explanation: "You must bind a VAO before configuring vertex attributes or drawing. The VAO stores the configuration of vertex attributes and their associations with VBOs, so it needs to be bound when setting these up or using them."
      },
      {
        type: "multiple-choice",
        text: "Selecting an item from a menu (where the program receives an identifier for the chosen item) is an example of which logical input device type?",
        options: [
          "**Choice** device",
          "**Pick** device",
          "**Locator** device",
          "**String** device"
        ],
        correctAnswerIndex: 0,
        explanation: "A menu selection is a classic example of a choice device – it returns one option from a predefined set of choices. It's not a pick device (which selects objects in the scene), not a locator (which returns positions), and not a string device (which returns text)."
      },
      {
        type: "true-false",
        text: "A **locator** device is one that provides a coordinate in space, typically from a pointing device (like a mouse giving an (x,y) position).",
        correctAnswerIndex: 0,
        explanation: "A locator device does indeed provide spatial coordinates, typically from a pointing device like a mouse. The name comes from its function of 'locating' or specifying a position in space."
      },
      {
        type: "multiple-choice",
        text: "The GLUT reshape callback (registered via `glutReshapeFunc`) is called when:",
        options: [
          "The window is resized, providing the new width and height.",
          "A timer event occurs after a specified interval.",
          "The mouse is moved.",
          "A key is pressed on the keyboard."
        ],
        correctAnswerIndex: 0,
        explanation: "The reshape callback is triggered when the window changes size, receiving the new dimensions as parameters. This allows the application to adjust the viewport and projection matrix to maintain proper aspect ratio."
      },
      {
        type: "true-false",
        text: "If you do **not** register a display callback with GLUT (i.e., never call `glutDisplayFunc`), the window will either remain blank or not update because no rendering function is defined.",
        correctAnswerIndex: 0,
        explanation: "Without a display callback, GLUT doesn't know what to draw in the window. The display callback is essential as it contains the rendering code that determines what appears in the window."
      },
      {
        type: "true-false",
        text: "A 'stroke' logical input device is one that returns a series of points (for example, tracing the path of a stylus or mouse drag).",
        correctAnswerIndex: 0,
        explanation: "A stroke device provides a sequence of positions that trace out a path, like the points along a pen stroke or mouse drag. This is useful for freehand drawing or gesture recognition."
      }
    ]
  
};

export default quizData; 