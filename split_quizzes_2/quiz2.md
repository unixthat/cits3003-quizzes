# Master Quiz 2

1. The appearance (color and brightness) of objects in a rendered scene is affected by the scene's light sources and material properties.  
    - a) True  
    - b) False

2. **Rod** cells in the human eye enable night (low-light) vision but do not contribute to color perception, whereas **cone** cells are responsible for color vision under brighter light.  
    - a) True  
    - b) False

3. Which of the following is an **additive** primary color used in displays?  
    - a) Red  
    - b) Yellow  
    - c) Cyan  
    - d) Magenta

4. Which statement about modern OpenGL (Core profile 3.3+ and above) is **true**?  
    - a) You can render without shaders using the old fixed-function pipeline if you prefer.  
    - b) You must use Vertex Array Objects (VAOs) and buffer objects to send geometry data to the GPU.  
    - c) The `glBegin/glEnd` immediate mode is still commonly used for efficiency.  
    - d) The projection and modelview matrices are built-in and managed by OpenGL automatically.

5. Which of these statements about GLUT is **false**?  
    - a) GLUT provides a cross-platform way to create an OpenGL window and context.  
    - b) GLUT handles keyboard and mouse input and exposes them via callbacks.  
    - c) GLUT is part of the official OpenGL specification and library.  
    - d) GLUT is intended for simple demos and is not a full-fledged GUI toolkit.

6. Which OpenGL primitive should be used to draw a connected series of line segments (each vertex connected to the next in order)?  
    - a) GL_LINE_LOOP  
    - b) GL_TRIANGLE_FAN  
    - c) GL_LINE_STRIP  
    - d) GL_LINES

7. What must an application do to render a **concave** polygon (one that is not convex) in OpenGL?  
    - a) Tessellate the polygon into a set of triangles before rendering.  
    - b) Use a special OpenGL primitive for concave polygons.  
    - c) Render it as a single GL_POLYGON without modification.  
    - d) OpenGL automatically detects and subdivides concave polygons.

8. During the rendering pipeline, how are primitives partly outside the view frustum handled?  
    - a) They are completely discarded (not drawn at all).  
    - b) They are **clipped**, so only the portions inside the view volume are kept and drawn.  
    - c) They are drawn in full, but the parts outside simply aren't visible on screen.  
    - d) The pipeline renders them at lower resolution outside the frustum.

9. In normalized device coordinates (after perspective division), what is the range of X, Y, and Z for points that are inside the view volume?  
    - a) 0 to 1  
    - b) –1 to 1  
    - c) –0.5 to 0.5  
    - d) –100 to 100

10. Which transformation is **not rigid** (i.e. does **not** preserve both shape and size)?  
    - a) Rotation about the origin  
    - b) Translation along an axis  
    - c) Uniform scaling (same scale factor in all directions)  
    - d) Non-uniform scaling (different scale factors for axes)

11. To define a **coordinate frame** in 3D space, you need:  
    - a) One origin point and three mutually perpendicular basis vectors.  
    - b) One reference point and one direction vector.  
    - c) Any three non-collinear points.  
    - d) A grid drawn along each axis.

12. In homogeneous coordinates, how is a translation by (t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub>) typically represented as a matrix (using column-vector convention)?  
    - a) A 3×3 matrix added to the point coordinates after transformation.  
    - b) A 4×4 matrix with t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub> in the **last column**, and 1 in the bottom-right corner.  
    - c) A 4×4 matrix with t<sub>x</sub>, t<sub>y</sub>, t<sub>z</sub> in the bottom row.  
    - d) It's impossible to represent translation with a matrix multiplication.

13. In GLSL, a `uniform` variable declared in a shader…  
    - a) …stays constant for all vertices/fragments for a given draw call, and is set by the application (not by the shader code).  
    - b) …has the same meaning as a C `static` variable and cannot be changed at runtime.  
    - c) …is a variable that linearly interpolates between vertices.  
    - d) …must be an integer type.

14. Which of these is **NOT** a built-in variable provided by GLSL (assuming modern shader usage)?  
    - a) `gl_Position` (in vertex shader)  
    - b) `gl_FragCoord` (in fragment shader)  
    - c) `gl_FragColor` (fragment color output)  
    - d) `gl_VertexPointer`

15. What is the **main output** of a fragment shader in the OpenGL pipeline?  
    - a) The final color (and optionally depth) for the fragment.  
    - b) A transformed vertex position.  
    - c) A new set of vertices to add to the scene.  
    - d) There is no output; fragment shaders only perform calculations with no output.

16. A vertex shader **cannot** do which of the following?  
    - a) Transform the position of a vertex.  
    - b) Output a custom varying (out) variable (e.g., a color) for interpolation.  
    - c) Discard an entire primitive on its own.  
    - d) Access a uniform variable provided by the application.

17. Calling `glGenBuffers(1, &bufferID)` in OpenGL immediately allocates GPU memory for a new buffer object.  
    - a) True  
    - b) False

18. Typically, what is stored in a **Vertex Buffer Object (VBO)**?  
    - a) Vertex attribute data such as positions, normals, texture coordinates, etc.  
    - b) Compiled shader programs.  
    - c) CPU-based arrays of vertices that are accessed directly by the CPU during drawing.  
    - d) The list of OpenGL commands (display list) for rendering a scene.

19. Which logical input device category best describes standard **keyboard input** in an interactive graphics program?  
    - a) **String** device (returns characters or strings)  
    - b) **Locator** device (returns a position)  
    - c) **Pick** device (returns an ID of a selected item)  
    - d) **Valuator** device (returns a continuous value)

20. Which GLUT function registers a callback to handle **window redraw** requests (i.e., painting the window's contents)?  
    - a) `glutDisplayFunc(myDisplayFunc)`  
    - b) `glutIdleFunc(myIdleFunc)`  
    - c) `glutReshapeFunc(myReshapeFunc)`  
    - d) `glutMotionFunc(myMotionFunc)`

21. The GLUT **idle** callback (registered via `glutIdleFunc`) can be used to continuously update or animate the scene when no other events are happening.  
    - a) True  
    - b) False

22. In a double-buffered OpenGL context using GLUT, you typically call `glutSwapBuffers()` at the end of your display callback to swap the drawn frame to the screen.  
    - a) True  
    - b) False

23. A rotation about the Z-axis (by some angle θ) will affect the x- and y-coordinates of a point but leave its z-coordinate unchanged.  
    - a) True  
    - b) False

24. Enabling depth testing (e.g., via `glEnable(GL_DEPTH_TEST)`) is necessary to ensure that closer objects correctly occlude farther objects in a 3D scene.  
    - a) True  
    - b) False

25. The function `glClearColor(r, g, b, a)` sets the color to be used when clearing the window.  
    - a) True  
    - b) False 