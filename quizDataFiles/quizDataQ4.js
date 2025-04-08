const quizData = {
    title: "Master Quiz 4",
    questions: [
      {
        type: "multiple-choice",
        text: "What is the correct order of coordinate transformations for a vertex going from model space to screen space in OpenGL?",
        options: [
          "Model transform → View (camera) transform → Projection transform → Perspective divide (normalize) → Viewport mapping to screen",
          "View (camera) transform → Model transform → Projection transform → Viewport mapping → Perspective divide",
          "Model transform → Projection transform → View transform → Perspective divide → Viewport mapping",
          "Projection transform → Model transform → View transform → Viewport mapping → Perspective divide"
        ],
        correctAnswerIndex: 0,
        explanation: "The correct order is: First, model transformations (to world). Then view (camera) transformation (to eye coordinates). Then projection (to clip coordinates). Then perspective divide (to NDC). Then viewport mapping (to screen pixels). The other sequences are out of order."
      },
      {
        type: "true-false",
        text: "The visual appearance of a 3D object (how bright or what color it appears) typically depends on the lighting in the scene, the object's material properties, and the viewing position.",
        correctAnswerIndex: 0,
        explanation: "The final color of a rendered object usually comes from the lighting equation which considers light sources, material properties (like diffuse, specular reflectivity), and the viewer's position (for specular highlights, etc.). Without those factors, everything would look flat or not lit properly."
      },
      {
        type: "true-false",
        text: "In a **perspective projection**, objects that are farther from the camera appear smaller in the rendered image than those that are closer.",
        correctAnswerIndex: 0,
        explanation: "Perspective projection has foreshortening: far objects appear smaller. That's one of its defining features (which gives a sense of depth). Orthographic, by contrast, would not have that effect."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is a characteristic of **ray tracing** (and not a default feature of the basic OpenGL pipeline)?",
        options: [
          "Automatic calculation of reflections and refractions of light.",
          "Use of a depth buffer (z-buffer) to handle visibility.",
          "Transforming vertices by matrices to project them onto a view.",
          "Use of Gouraud or Phong shading for lighting."
        ],
        correctAnswerIndex: 0,
        explanation: "Ray tracing simulation includes rays bouncing off surfaces (reflections) or bending through transparent materials (refractions), which rasterization (OpenGL's default pipeline) does not inherently do. Depth buffer (b) is used in OpenGL rasterization for visibility. Matrix transforms (c) are common to both. Shading models like Gouraud/Phong (d) are used in rasterization."
      },
      {
        type: "true-false",
        text: "A real pinhole camera forms an inverted image on its film/sensor, whereas OpenGL's synthetic camera avoids image inversion by placing the projection plane in front of the camera.",
        correctAnswerIndex: 0,
        explanation: "This reiterates the earlier camera model concept. Real pinhole: image flips upside down on the film. Synthetic camera (OpenGL): we place a 'projection plane' in front so the image doesn't invert."
      },
      {
        type: "multiple-choice",
        text: "Which of these is **NOT** an actual OpenGL function or feature?",
        options: [
          "`glTranslatef` (translate transformation in old OpenGL)",
          "`glEnable(GL_DEPTH_TEST)`",
          "`glBegin(GL_TRIANGLES)`",
          "`glRenderObject()` (render an object automatically)"
        ],
        correctAnswerIndex: 3,
        explanation: "glRenderObject() is not a real function. The others are all real (though note glBegin is deprecated in modern OpenGL, it's still a function in older versions). glRenderObject() is made up for this question."
      },
      {
        type: "true-false",
        text: "OpenGL by itself does **not** provide functions for creating windows or capturing input events; those tasks are handled by toolkits like GLUT, GLFW, or the operating system.",
        correctAnswerIndex: 0,
        explanation: "Core OpenGL doesn't handle OS-specific tasks; you need a toolkit like GLUT or similar to create a window and capture keyboard/mouse events."
      },
      {
        type: "multiple-choice",
        text: "What is the purpose of the **depth buffer** (Z-buffer) in rendering?",
        options: [
          "To perform hidden-surface removal by tracking the closest fragment depth at each pixel.",
          "To store the color of each pixel on the screen.",
          "To handle transparency and blending of colors.",
          "To map texture coordinates to fragments."
        ],
        correctAnswerIndex: 0,
        explanation: "The depth buffer stores depth values for fragments and allows the system to keep track of the nearest surface at each pixel, discarding fragments that are behind something already stored (thus 'hidden surface removal'). This is the main purpose of a z-buffer. It's not for color (b), not inherently for blending (that's a separate stage), and not for texturing (d)."
      },
      {
        type: "true-false",
        text: "The model transformation moves objects from their local model coordinate space into the common world coordinate space.",
        correctAnswerIndex: 0,
        explanation: "Model transforms indeed take local coordinates to the shared world coords. If you have multiple objects, you apply each object's model matrix to bring them into the world coordinate system together."
      },
      {
        type: "multiple-choice",
        text: "Which transformation leaves both the shape and size of an object unchanged?",
        options: [
          "Rotation about the object's center",
          "Non-uniform scaling",
          "Uniform scaling",
          "Shear (skew)"
        ],
        correctAnswerIndex: 0,
        explanation: "A rotation around its own center does not distort or scale the object – it just changes its orientation. So shape and size remain same. Non-uniform scaling (b) changes shape. Uniform scaling (c) changes size (though keeps shape). Shear (d) definitely distorts shape."
      },
      {
        type: "true-false",
        text: "Any combination of rotations, translations, and scalings (with non-zero scale factors) results in an affine transformation that is invertible (can be reversed).",
        correctAnswerIndex: 0,
        explanation: "Rotations, translations, and scalings (if scale is not zero) are all affine transforms. They can be combined, and the result is an affine transform (represented by a 4x4 matrix). As long as no scale is zero (which would collapse dimension), the transform is invertible."
      },
      {
        type: "multiple-choice",
        text: "In a modern OpenGL program using shaders, vertex attribute data (positions, normals, etc.) is typically provided to the vertex shader via:",
        options: [
          "Buffer objects (VBOs) bound to vertex attribute pointers, set by the application.",
          "Built-in constant variables on the GPU that hold common shapes.",
          "The fragment shader, which passes them back to the vertex stage.",
          "Automatic generation by OpenGL for standard objects (cube, sphere, etc.)."
        ],
        correctAnswerIndex: 0,
        explanation: "Modern OpenGL uses VBOs to store vertex data. The application sets up these buffers and then uses glVertexAttribPointer calls (and glEnableVertexAttribArray) to tell OpenGL how to feed that data into the vertex shader's input variables. Built-in shapes don't exist on GPU (b). Fragment shader doesn't feed vertex shader (c). OpenGL doesn't auto-provide complex models (d)."
      },
      {
        type: "true-false",
        text: "The output of the vertex shader (e.g., varying variables like color or texture coordinates) is interpolated across the primitive during rasterization and passed into the fragment shader.",
        correctAnswerIndex: 0,
        explanation: "Yes, vertex shader outputs (like varying color, texture coords) get interpolated across the primitive's surface during rasterization. Each fragment shader invocation then gets an interpolated value. That's exactly how smooth shading works."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is **NOT** allowed in GLSL shader code?",
        options: [
          "Loop constructs like `for` and `while`.",
          "Recursive function calls (a function calling itself).",
          "Vector operations such as `dot(mat3, vec3)`.",
          "Built-in math functions like `sin()` or `pow()`."
        ],
        correctAnswerIndex: 1,
        explanation: "GLSL does not support recursion. Each shader invocation must be finite and cannot call itself or other functions cyclically. Loops are allowed (with some limits, they must be able to unroll or otherwise have a known maximum). Vector ops and built-in functions are allowed."
      },
      {
        type: "true-false",
        text: "In a fragment shader, `gl_FragCoord` is a built-in variable that gives the window (screen) coordinates of the fragment (including its depth value).",
        correctAnswerIndex: 0,
        explanation: "gl_FragCoord gives the window coordinates (x, y) of the fragment and also the depth in gl_FragCoord.z. w is 1/clip.w basically. So yes, it contains screen position and depth."
      },
      {
        type: "true-false",
        text: "`glBufferSubData` can be used to update a subset of data in an existing buffer object without reallocating the buffer.",
        correctAnswerIndex: 0,
        explanation: "glBufferSubData allows partial updates to an existing buffer's data store. This is exactly what the statement says."
      },
      {
        type: "multiple-choice",
        text: "Which function specifies the format and location of vertex attribute data in the currently bound VBO (for use by the vertex shader)?",
        options: [
          "`glVertexAttribPointer`",
          "`glBindVertexArray`",
          "`glEnableVertexAttribArray`",
          "`glBufferData`"
        ],
        correctAnswerIndex: 0,
        explanation: "glVertexAttribPointer defines the format of vertex data (like saying attribute index 0 is 3 floats per vertex, type float, stride X, offset Y in the currently bound VBO). It essentially tells OpenGL how to interpret memory in the bound VBO as vertex attributes, linking it to a specific attribute index (which is usually tied to a shader input). glBindVertexArray binds a VAO. glEnableVertexAttribArray enables a given attribute index. glBufferData allocates/initializes buffer memory."
      },
      {
        type: "true-false",
        text: "The GLUT **timer** callback, registered via `glutTimerFunc`, allows you to schedule a one-time callback after a specified delay (often used for animation timing).",
        correctAnswerIndex: 0,
        explanation: "glutTimerFunc(msec, func, value) triggers func(value) once after the given time in milliseconds. It's often used for triggering animation steps or events on a timed basis. After calling, if you want continuous periodic calls, you usually re-register it within the callback."
      },
      {
        type: "multiple-choice",
        text: "Which GLUT callback function is used to handle **mouse button press/release** events?",
        options: [
          "`glutMouseFunc`",
          "`glutMotionFunc`",
          "`glutPassiveMotionFunc`",
          "`glutKeyboardFunc`"
        ],
        correctAnswerIndex: 0,
        explanation: "glutMouseFunc sets a callback for mouse button events (presses and releases). The callback you pass to glutMouseFunc will be called with parameters like button, state (down/up), and mouse (x,y). MotionFunc is for movement while a button is pressed. PassiveMotionFunc is for movement with no buttons pressed. KeyboardFunc is keys, not mouse."
      },
      {
        type: "true-false",
        text: "The function passed to `glutKeyboardFunc` (for ASCII key events) receives, among other parameters, the (x, y) mouse coordinates at the time of the key press.",
        correctAnswerIndex: 0,
        explanation: "The keyboard callback (for standard keys) has signature like void func(unsigned char key, int x, int y). The x, y are the mouse coordinates at the time of the key event. GLUT provides that so you know where the mouse was when a key was pressed."
      },
      {
        type: "true-false",
        text: "When the user moves the mouse with a button pressed, GLUT can invoke the motion callback (registered via `glutMotionFunc`), whereas movement with no buttons pressed can trigger the passive motion callback (`glutPassiveMotionFunc`).",
        correctAnswerIndex: 0,
        explanation: "Exactly: glutMotionFunc handles dragged mouse movement (mouse move with a button held), and glutPassiveMotionFunc handles movement with no buttons. The statement is correct."
      },
      {
        type: "true-false",
        text: "Calling `glutPostRedisplay()` within an event callback will mark the window for redisplay, causing GLUT to call the display callback again on the next iteration of the event loop.",
        correctAnswerIndex: 0,
        explanation: "glutPostRedisplay() marks the current window as needing to redraw. GLUT will then call your display callback at the next opportunity (often next loop iteration). This is how you manually trigger redraws (especially in an idle or input callback)."
      },
      {
        type: "multiple-choice",
        text: "Which of the following is a valid OpenGL primitive mode for rendering via `glDrawArrays`?",
        options: [
          "GL_POINTS",
          "GL_CUBE",
          "GL_SPHERE",
          "GL_POLYGON_STRIP"
        ],
        correctAnswerIndex: 0,
        explanation: "GL_POINTS is valid. GL_CUBE and GL_SPHERE are not actual primitive enums (they don't exist, those would be made of triangles or something via user code). GL_POLYGON_STRIP doesn't exist (there's GL_TRIANGLE_STRIP, but not POLYGON_STRIP)."
      }
    ]
};

export default quizData; 