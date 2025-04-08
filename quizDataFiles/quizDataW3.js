const quizData = {
    title: "Week 3 Quiz: OpenGL Pipeline Architecture, Example Program",
    questions: [
        {
            type: "multiple-choice",
            text: "Which statement about the OpenGL graphics pipeline is true?",
            options: [
                "The vertex processing stage handles transforming vertices between coordinate systems (object space to camera space, etc.) and can perform per-vertex lighting or color computations.",
                "The primitive assembly stage occurs after fragment shading, to group colored pixels into final geometric shapes.",
                "The rasterization stage converts geometric primitives into fragments (potential pixels) and interpolates vertex attributes like color across the primitive.",
                "The fragment processing stage only paints each fragment; it does not involve any tests (like depth test) or discarding of fragments."
            ],
            correctAnswerIndex: 0,
            explanation: "The vertex processing stage (vertex shader) is responsible for transforming vertex positions and computing per-vertex attributes. Primitive assembly happens before fragment shading, rasterization generates fragments with interpolated attributes, and fragment processing includes various tests like depth testing."
        },
        {
            type: "multiple-choice",
            text: "What happens to geometry that lies outside the viewing volume of the synthetic camera?",
            options: [
                "It is clipped or discarded before rasterization, so it won't appear in the final image.",
                "It is rasterized normally, but fragments are colored black.",
                "The vertex processor automatically moves it into the view frustum (view volume).",
                "OpenGL will throw an error if a primitive extends outside the view volume."
            ],
            correctAnswerIndex: 0,
            explanation: "Geometry outside the viewing volume is clipped before rasterization. This is an important optimization step that prevents unnecessary processing of fragments that wouldn't be visible anyway. The clipping stage removes or modifies primitives that extend beyond the view frustum."
        },
        {
            type: "multiple-choice",
            text: "OpenGL emphasizes triangles as the fundamental polygon for rendering. Why are triangles used as the basic primitive for complex surfaces?",
            options: [
                "Triangles are always planar (flat) and cannot be self-intersecting or concave, simplifying rendering.",
                "Rendering hardware only supports triangles and cannot draw lines or points.",
                "Triangles can approximate any surface when used in large numbers, and GPUs are optimized for triangle processing.",
                "Using triangles ensures that no clipping is ever needed during rendering."
            ],
            correctAnswerIndex: 2,
            explanation: "Triangles are used as the fundamental primitive because they can approximate any surface when tessellated into small enough pieces, and GPUs are highly optimized for processing triangles. While triangles do have nice properties like being always planar, that's not the primary reason for their use."
        },
        {
            type: "true-false",
            text: "If you want to draw a quadrilateral (four-sided polygon) in modern OpenGL, you must break it into two triangles first (or use an OpenGL function that does so), because OpenGL's core profile does not directly support drawing general quads.",
            correctAnswerIndex: 0,
            explanation: "Modern OpenGL (core profile) only supports points, lines, and triangles as basic primitives. To draw a quad, you must either break it into two triangles yourself or use a helper function that does this conversion for you. This is because triangles are the fundamental building block for all polygon rendering."
        },
        {
            type: "multiple-choice",
            text: "Consider the classic stages of the pipeline. Which pair of pipeline stages can both be programmed by the developer (via shaders) in modern OpenGL's programmable pipeline?",
            options: [
                "Primitive Assembly and Clipping stages.",
                "Vertex Processing and Fragment Processing stages.",
                "Rasterization and Framebuffer Output stages.",
                "The application stage and the depth-testing stage."
            ],
            correctAnswerIndex: 1,
            explanation: "In modern OpenGL's programmable pipeline, the vertex shader (Vertex Processing) and fragment shader (Fragment Processing) are the two main stages that developers can program. The other stages like primitive assembly, clipping, rasterization, and framebuffer operations are fixed-function stages that cannot be directly programmed."
        },
        {
            type: "multiple-choice",
            text: "Regarding coordinate systems in OpenGL, which is correct?",
            options: [
                "After the vertex shader runs, each vertex is typically in clip coordinates, which are then divided by w to yield normalized device coordinates (NDC).",
                "Object (model) coordinates and world coordinates are the same thing in all cases.",
                "The camera (eye) coordinate system places the camera at (1,1,1) looking toward the origin by default.",
                "Screen (window) coordinates range from -1 to +1 in X and Y by convention."
            ],
            correctAnswerIndex: 0,
            explanation: "The vertex shader outputs clip coordinates, which then undergo perspective division (dividing by w) to produce normalized device coordinates. The other options are incorrect: model and world coordinates are distinct, the camera is at (0,0,0) by default, and screen coordinates are in pixels."
        },
        {
            type: "multiple-choice",
            text: "Which of the following describes a difference between immediate mode and retained mode graphics in OpenGL?",
            options: [
                "Immediate mode: send each vertex with a function call (e.g., glVertex calls); Retained mode: store vertex data in buffers on the GPU and draw from those stored data.",
                "Immediate mode retains all vertices on the GPU for reuse, whereas retained mode sends vertices each time.",
                "In modern OpenGL, you typically use immediate mode for performance, and retained mode only for compatibility.",
                "There is no real difference; these are two names for the same OpenGL mechanism."
            ],
            correctAnswerIndex: 0,
            explanation: "This correctly describes the key difference between immediate and retained mode. Immediate mode involves sending vertices one at a time through function calls, while retained mode stores vertex data in GPU buffers for efficient reuse."
        },
        {
            type: "multiple-choice",
            text: "In a modern OpenGL example program, which of these steps is not necessary?",
            options: [
                "Generating one or more buffer objects (like VBOs) and uploading vertex data into them (e.g., with glBufferData).",
                "Setting up vertex attribute pointers (via glVertexAttribPointer) to describe how vertex data is laid out in the buffer.",
                "Explicitly calling a function to swap the front and back buffers if you are using double buffering (e.g., glSwapBuffers or letting GLUT handle it via glutSwapBuffers).",
                "Directly calling a function to draw pixels on the screen for each frame (e.g., plotting each pixel in a loop), instead of using OpenGL's draw call (like glDrawArrays)."
            ],
            correctAnswerIndex: 3,
            explanation: "In modern OpenGL, you never directly plot pixels in a loop. Instead, you use OpenGL's drawing commands (like glDrawArrays) to render primitives. The other steps (buffer objects, attribute pointers, buffer swapping) are all necessary parts of modern OpenGL rendering."
        },
        {
            type: "multiple-choice",
            text: "What is the purpose of a Vertex Buffer Object (VBO) in OpenGL?",
            options: [
                "To store vertex data (positions, colors, normals, etc.) on the GPU for efficient drawing.",
                "To store compiled shader programs on the GPU.",
                "To hold the rendered image (pixel data) before sending it to the screen.",
                "To group multiple shader programs together for switching between them quickly."
            ],
            correctAnswerIndex: 0,
            explanation: "VBOs are used to store vertex data (positions, colors, normals, texture coordinates, etc.) in GPU memory for efficient rendering. They are not used for shader storage, framebuffer storage, or shader program management."
        },
        {
            type: "multiple-choice",
            text: "What is a Vertex Array Object (VAO)?",
            options: [
                "An array that holds all the vertices of a single 3D model in system (CPU) memory.",
                "An OpenGL object that encapsulates the state needed to supply vertex data — for example, it stores the associations between VBOs and vertex attribute pointers.",
                "A special type of shader program for array-based calculations.",
                "A deprecated feature from legacy OpenGL replaced by VBOs."
            ],
            correctAnswerIndex: 1,
            explanation: "A VAO stores the state of vertex attribute configurations and their associations with VBOs. It acts as a container that remembers how vertex data is organized and which VBOs to use for each attribute."
        },
        {
            type: "true-false",
            text: "Calling glBufferSubData() allows you to update a subset of data in an existing buffer object without reallocating the entire buffer.",
            correctAnswerIndex: 0,
            explanation: "glBufferSubData allows you to update a portion of an existing buffer object's data without reallocating or recreating the entire buffer. This is useful for updating dynamic data efficiently."
        },
        {
            type: "multiple-choice",
            text: "In an OpenGL program using GLUT, what is typically the minimum set of callback functions you should register to ensure something gets drawn on the screen and the window is responsive?",
            options: [
                "Only a reshape callback (to adjust the viewport).",
                "Only a keyboard callback (so the program can exit on a key press).",
                "A display callback (for rendering), and usually an idle or timer callback to continuously redisplay, plus perhaps an input callback for interactivity.",
                "No callbacks at all – you can simply put your drawing code after glutMainLoop() and it will execute."
            ],
            correctAnswerIndex: 2,
            explanation: "At minimum, you need a display callback to render content. For animation or continuous updates, you typically also need an idle or timer callback. Input callbacks are needed for interactivity. The other options would not provide sufficient functionality."
        },
        {
            type: "multiple-choice",
            text: "You draw a triangle using OpenGL, but it appears white even though you intended it to be red. Assuming lighting is not enabled (so the color should come directly from your vertex data or fragment shader), what are two possible reasons in your OpenGL program that could result in the triangle showing up as white?",
            options: [
                "The vertex colors or uniform color values in the shader program are not properly set or bound, and the vertex attribute pointers for color data are not properly configured.",
                "The triangle is too small and the viewport is too large.",
                "The depth buffer is not properly initialized.",
                "The fragment shader is not properly compiled."
            ],
            correctAnswerIndex: 0,
            explanation: "Two possible reasons for a white triangle when red was intended: 1) The vertex colors or uniform color values in the shader program are not properly set or bound. 2) The vertex attribute pointers for color data are not properly configured, or the color attribute is not enabled."
        },
        {
            type: "multiple-choice",
            text: "Imagine you have configured a VBO and VAO for a triangle's vertices and colors, and written appropriate shaders. The triangle should be visible, but you see only a blank screen. What are some steps to debug this issue?",
            options: [
                "Check if the clear color is different from the triangle color, verify that the viewport dimensions are correct, ensure the vertex positions are within the visible range, check if the VAO is bound before drawing, and verify that the shader program is properly compiled and linked.",
                "Check if the window is properly created and if the OpenGL context is initialized.",
                "Check if the triangle is facing the camera and if the depth test is enabled.",
                "Check if the fragment shader is outputting the correct color."
            ],
            correctAnswerIndex: 0,
            explanation: "Steps to debug a blank screen with an invisible triangle: 1) Check if the clear color is different from the triangle color. 2) Verify that the viewport dimensions are correct. 3) Ensure the vertex positions are within the visible range (-1 to 1 in NDC). 4) Check if the VAO is bound before drawing. 5) Verify that the shader program is properly compiled, linked, and in use."
        },
        {
            type: "multiple-choice",
            text: "During the fragment processing stage, multiple fragments might map to the same pixel, especially when 3D objects overlap on screen. How does OpenGL decide which fragment's color gets written to the framebuffer in such cases?",
            options: [
                "It always takes the fragment that was generated last (from the primitive drawn last) and overwrites earlier fragments (painter's algorithm by default).",
                "It uses the depth buffer (Z-buffer) to keep track of fragment depths; only the fragment with the closest depth passes the depth test and is drawn, hiding fragments behind it.",
                "It averages the colors of all fragments for that pixel to produce a smooth blending by default.",
                "It randomly picks one of the fragments if more than one occupy the same pixel."
            ],
            correctAnswerIndex: 1,
            explanation: "When depth testing is enabled, OpenGL uses the depth buffer to determine which fragments are visible. Each fragment's depth is compared to the stored depth value, and only closer fragments pass the test and get drawn. This automatically handles hidden surface removal."
        }
    ]
};

export default quizData; 