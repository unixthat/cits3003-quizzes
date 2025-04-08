const quizData = {
    title: "Week 1 Quiz: Introduction & Image Formation, Programming with OpenGL",
    questions: [
        {
            type: "true-false",
            text: "Computer graphics deals solely with generating images and is not concerned with how light or physics affect the appearance of objects.",
            correctAnswerIndex: 1,
            explanation: "Computer graphics is concerned with both generating images and simulating how light and physics affect the appearance of objects. This includes modeling light behavior, materials, and physical properties to create realistic or stylized visual representations."
        },
        {
            type: "true-false",
            text: "An ideal pinhole camera exhibits an infinite depth of field, but in practice it requires very long exposure times to capture enough light.",
            correctAnswerIndex: 0,
            explanation: "An ideal pinhole camera does have an infinite depth of field (everything is in focus), but the small aperture means very little light enters, requiring long exposure times. This is a fundamental trade-off in pinhole photography."
        },
        {
            type: "multiple-choice",
            text: "In the context of color models, which statement is correct?",
            options: [
                "Additive color mixing (RGB) is used by emissive displays and lighting (e.g., monitors, projectors).",
                "Subtractive color mixing (CMY/CMYK) is used in devices like computer monitors.",
                "Additive color mixing is primarily used in print media (ink on paper).",
                "Subtractive color mixing is suitable for combining colored lights on a screen."
            ],
            correctAnswerIndex: 0,
            explanation: "Additive color mixing (RGB) is used by emissive displays like monitors and projectors because they emit light. Subtractive color mixing (CMY/CMYK) is used in print media where light is reflected off surfaces."
        },
        {
            type: "multiple-choice",
            text: "The OpenGL synthetic camera model differs from a real pinhole camera. Which of the following is true about the synthetic camera used in OpenGL?",
            options: [
                "It places the image plane behind the center of projection, causing rendered images to appear upside down by default.",
                "It places the image plane in front of the center of projection so that the rendered image appears upright (not inverted).",
                "It cannot simulate perspective projection since it is not a physical camera.",
                "It does not allow separate control of objects, viewer, and light sources."
            ],
            correctAnswerIndex: 1,
            explanation: "The OpenGL synthetic camera places the image plane in front of the center of projection, which means the rendered image appears upright (not inverted like a real pinhole camera). This is a key difference from physical cameras and makes the rendering more intuitive for developers."
        },
        {
            type: "multiple-choice",
            text: "Which of the following is not an advantage of the synthetic camera model in graphics APIs like OpenGL?",
            options: [
                "Objects, camera (viewer), and light sources can be defined independently and combined to produce the final image.",
                "It leads to a simple software API and fast hardware implementations for rendering.",
                "Two-dimensional graphics cannot be handled by the synthetic camera model (it only works for 3D).",
                "The same model can be used for both real-time rendering (OpenGL) and offline rendering (with appropriate algorithms)."
            ],
            correctAnswerIndex: 2,
            explanation: "This is incorrect - the synthetic camera model can indeed handle 2D graphics. While it's often used for 3D rendering, it can be used for 2D by simply working in a plane. The other options correctly describe advantages of the synthetic camera model."
        },
        {
            type: "multiple-choice",
            text: "Which statement about OpenGL is correct?",
            options: [
                "OpenGL is an open-source software library you install separately; it is not tied to your graphics hardware or driver.",
                "OpenGL is a cross-platform graphics API specification, and its implementation is typically provided by graphics card drivers.",
                "OpenGL provides high-level GUI elements (windows, buttons) as part of its core functionality.",
                "Modern OpenGL (3.2 and above) still uses the fixed-function pipeline by default for compatibility."
            ],
            correctAnswerIndex: 1,
            explanation: "OpenGL is a specification for a graphics API, and hardware vendors provide implementations through their graphics drivers. It's not an open-source library, doesn't include GUI elements (that's what GLUT/GLFW are for), and modern OpenGL uses a programmable pipeline."
        },
        {
            type: "multiple-choice",
            text: "Which of the following is not a primitive type provided by OpenGL for drawing?",
            options: [
                "GL_POINTS",
                "GL_TRIANGLES",
                "GL_TRIANGLE_STRIP",
                "GL_TRIANGLE_LOOP",
                "GL_LINE_LOOP"
            ],
            correctAnswerIndex: 3,
            explanation: "GL_TRIANGLE_LOOP is not a valid OpenGL primitive type. The valid primitive types include GL_POINTS, GL_TRIANGLES, GL_TRIANGLE_STRIP, and GL_LINE_LOOP."
        },
        {
            type: "multiple-choice",
            text: "In OpenGL, a polygon (filled shape) to be rendered must meet certain criteria. Which option correctly describes a valid polygon for rendering without needing further processing?",
            options: [
                "The polygon must be simple (no self-intersecting edges) and convex.",
                "The polygon can be concave but must lie in a single plane (flat).",
                "The polygon may have crossing edges as long as it is convex.",
                "Any arbitrary 2D shape is acceptable; OpenGL automatically tessellates all polygons."
            ],
            correctAnswerIndex: 0,
            explanation: "OpenGL requires polygons to be simple (non-self-intersecting) and convex for direct rendering. Concave or self-intersecting polygons must be triangulated (broken into triangles) before rendering."
        },
        {
            type: "true-false",
            text: "In the OpenGL graphics pipeline, only the fragment shader (fragment processing stage) can determine the final color of a pixel; the vertex shader cannot influence vertex colors at all.",
            correctAnswerIndex: 1,
            explanation: "Both vertex and fragment shaders can influence the final color of pixels. The vertex shader can output colors that are interpolated across primitives and used by the fragment shader. The fragment shader makes the final color decision but can use inputs from the vertex shader."
        },
        {
            type: "multiple-choice",
            text: "Which of the following statements about OpenGL and its related libraries is incorrect?",
            options: [
                "GLUT (OpenGL Utility Toolkit) is a library to manage window creation, input, and events, but it does not provide advanced GUI widgets like sliders or menus by itself.",
                "GLEW/GLAD are libraries for loading modern OpenGL function pointers (extensions) and are often needed alongside OpenGL.",
                "Every window created using GLUT has its own OpenGL rendering context (state machine) associated with it.",
                "OpenGL itself includes functions for creating windows and handling user input events."
            ],
            correctAnswerIndex: 3,
            explanation: "This is incorrect. OpenGL does not include window management or input handling - these are handled by separate libraries like GLUT or GLFW. OpenGL focuses solely on rendering graphics."
        },
        {
            type: "multiple-choice",
            text: "You are using an interactive OpenGL program. Explain what a callback function is in this context and give an example of an event you might handle with a callback.",
            options: [
                "A callback function is a function that you write and register with the graphics system, which will be called automatically when specific events occur. For example, a display callback is called when the window needs to be redrawn, or a keyboard callback is called when a key is pressed.",
                "A callback function is a special type of shader that runs on the GPU.",
                "A callback function is used to create 3D models in OpenGL.",
                "A callback function is a way to synchronize multiple OpenGL contexts."
            ],
            correctAnswerIndex: 0,
            explanation: "A callback function is a function that you write and register with the graphics system, which will be called automatically when specific events occur. For example, a display callback is called when the window needs to be redrawn, or a keyboard callback is called when a key is pressed. This allows the program to respond to events asynchronously without constantly checking for them."
        },
        {
            type: "multiple-choice",
            text: "Suppose you have an OpenGL program where nothing appears on screen, and you suspect it's because of how OpenGL's state machine was initialized. What are two initialization steps or states that must be set correctly for any basic OpenGL program to draw something on the window?",
            options: [
                "Setting up the clear color and clearing the color buffer (using glClearColor and glClear), and setting up the viewport dimensions to match the window size (using glViewport).",
                "Creating a window and initializing the OpenGL context.",
                "Loading shaders and compiling them.",
                "Setting up vertex buffers and attribute pointers."
            ],
            correctAnswerIndex: 0,
            explanation: "Two critical initialization steps are: 1) Setting up the clear color and clearing the color buffer (using glClearColor and glClear), and 2) Setting up the viewport dimensions to match the window size (using glViewport). Additional important steps might include enabling depth testing, creating and binding shader programs, or setting up vertex buffers."
        },
        {
            type: "multiple-choice",
            text: "Modern OpenGL is often described as a state machine. Which scenario best illustrates what that means?",
            options: [
                "OpenGL has a fixed set of states (like current color, current shader program, etc.) that persist between function calls until changed, and function calls affect these states.",
                "OpenGL functions execute independently without any lasting side effects; you must specify all parameters every time.",
                "OpenGL uses a finite-state automaton internally to decide which drawing command to run next.",
                "The only state OpenGL preserves is the content of the frame buffer (drawn pixels)."
            ],
            correctAnswerIndex: 0,
            explanation: "OpenGL maintains various states (current shader, current texture, current color, etc.) that persist until explicitly changed. Function calls both read and modify these states, making OpenGL a state machine."
        },
        {
            type: "true-false",
            text: "In the default OpenGL coordinate system (before any transformations), the camera is located at the origin of the scene and looks down the negative Z-axis by default.",
            correctAnswerIndex: 0,
            explanation: "In OpenGL's default coordinate system, before any viewing transformations are applied, the camera is positioned at the origin (0,0,0) looking down the negative Z-axis, with positive Y being up."
        },
        {
            type: "multiple-choice",
            text: "When starting to program with modern OpenGL (Core profile), which of the following is not typically required?",
            options: [
                "Writing and compiling a vertex shader and a fragment shader (at minimum) to handle rendering.",
                "Sending vertex attribute data (like positions, colors) to the GPU via buffer objects.",
                "Setting up a rendering window and an OpenGL context (often using a library like GLFW or GLUT).",
                "Calling glBegin() and glEnd() for each triangle to draw it on screen."
            ],
            correctAnswerIndex: 3,
            explanation: "In modern OpenGL (Core profile), the immediate mode functions like glBegin() and glEnd() are deprecated and unavailable. Instead, you must use vertex buffers and shaders for rendering."
        }
    ]
};

export default quizData; 