# Master Quiz 2 Answer Key

1. **a) True.** If a scene in OpenGL has no light sources, objects rendered with a typical lighting shader will appear black. The appearance of objects is indeed affected by both the light sources in the scene and the material properties of the objects themselves. This is a fundamental principle of computer graphics rendering.

2. **a) True.** Rod cells are specialized for low-light vision (scotopic vision) but cannot distinguish colors. Cone cells, which come in three types (roughly corresponding to red, green, and blue sensitivity), enable color vision but require more light to function effectively. This accurately describes the division of labor between rods and cones in human vision.

3. **a) Red.** Red is one of the three additive primary colors (along with green and blue) used in displays. Yellow, cyan, and magenta are subtractive primaries used in printing. Displays use RGB because they emit light (additive color mixing), while printers use CMY(K) because they absorb light (subtractive color mixing).

4. **b) You must use VAOs and buffer objects.** Modern OpenGL (core profile) requires the use of Vertex Array Objects and buffer objects for sending vertex data to the GPU. The other options are false:
   - You cannot use the fixed-function pipeline in core profile (a).
   - Immediate mode (glBegin/End) is removed in core profile (c).
   - Matrices are not built-in; you must manage them yourself (d).

5. **c) GLUT is part of the official OpenGL specification.** This is false. GLUT is a separate utility library, not part of the OpenGL specification. The other statements are true:
   - GLUT does provide cross-platform window creation (a).
   - It does handle input via callbacks (b).
   - It is indeed a simple toolkit, not a full GUI framework (d).

6. **c) GL_LINE_STRIP.** GL_LINE_STRIP is exactly what's needed to draw connected line segments where each vertex is connected to the next in sequence. GL_LINE_LOOP would add an extra line back to the start, GL_TRIANGLE_FAN is for triangles, and GL_LINES treats each pair of vertices as a separate line segment.

7. **a) Tessellate into triangles.** OpenGL (especially modern OpenGL) works primarily with triangles. To render a concave polygon, you must break it down into triangles first. There is no built-in concave polygon primitive (b), GL_POLYGON requires convex shapes (c), and OpenGL doesn't automatically handle concave shapes (d).

8. **b) They are clipped.** When a primitive partially extends outside the view volume, OpenGL clips it at the boundaries of the view volume, keeping only the portion inside. It doesn't completely discard partially visible primitives (a), doesn't draw the full primitive (c), and doesn't use lower resolution outside the frustum (d).

9. **b) –1 to 1.** After the perspective divide, coordinates in NDC (Normalized Device Coordinates) range from -1 to +1 in all three dimensions. This is the standard range for the canonical view volume in OpenGL. Values outside this range are clipped.

10. **d) Non-uniform scaling.** Non-uniform scaling (different scale factors for different axes) changes both shape and size, making it non-rigid. Rotation (a) and translation (b) are rigid transformations that preserve both shape and size. Uniform scaling (c) changes size but preserves shape (it's a similarity transform).

11. **a) One origin point and three mutually perpendicular basis vectors.** A 3D coordinate frame requires an origin point and three orthonormal basis vectors (typically labeled i, j, k or x, y, z). One point and one vector (b) isn't enough, three non-collinear points (c) don't define a standard frame, and a grid (d) is just a visualization tool.

12. **b) A 4×4 matrix with translation in the last column.** In homogeneous coordinates using column vectors, a translation matrix has the form:
    ```
    | 1 0 0 tx |
    | 0 1 0 ty |
    | 0 0 1 tz |
    | 0 0 0 1  |
    ```
    The translation components go in the last column (not bottom row), with 1 in the bottom-right corner.

13. **a) Stays constant for all vertices/fragments.** A uniform variable in GLSL is set by the application and remains constant for all vertices/fragments during a draw call. It's not like C's static (b), doesn't interpolate (c), and can be any basic GLSL type, not just integers (d).

14. **d) gl_VertexPointer.** There is no built-in GLSL variable called gl_VertexPointer. The others are real:
    - gl_Position is the built-in output for vertex position
    - gl_FragCoord gives fragment window coordinates
    - gl_FragColor was the traditional fragment output (though modern GLSL prefers user-defined outputs)

15. **a) The final color (and optionally depth).** The main purpose of a fragment shader is to compute the color of each fragment. It can also optionally write a custom depth value. It doesn't output vertex positions (b), can't create new vertices (c), and must produce some output (d).

16. **c) Discard an entire primitive.** A vertex shader processes one vertex at a time and cannot see or affect other vertices or the whole primitive. It can transform vertices (a), output varying variables (b), and access uniforms (d), but cannot discard primitives – that would require a geometry shader.

17. **b) False.** glGenBuffers only generates a name (ID) for a buffer object. It doesn't allocate any GPU memory – that happens later when you call glBufferData. The statement is false because generation and allocation are separate steps.

18. **a) Vertex attribute data.** VBOs typically store vertex data like positions, normals, colors, and texture coordinates. They don't store shader programs (b), aren't CPU-side arrays (c), and aren't display lists (d). VBOs are GPU memory buffers for vertex attributes.

19. **a) String device.** A keyboard is logically a string device because it returns character data (text input). It's not a locator (position), pick (selection), or valuator (continuous value) device. The logical classification is based on the type of data returned.

20. **a) glutDisplayFunc.** The display callback (registered with glutDisplayFunc) is called whenever the window needs to be redrawn. The other functions serve different purposes:
    - glutIdleFunc is for background processing
    - glutReshapeFunc handles window resizing
    - glutMotionFunc handles mouse movement

21. **a) True.** The idle callback is indeed called when no other events are pending, making it perfect for continuous updates or animation. You can use it to update object positions or states and trigger redraws. The statement accurately describes its purpose.

22. **a) True.** In double buffering, you draw to a back buffer and then swap it with the front buffer to display the frame. glutSwapBuffers() performs this swap, and it's typically called at the end of the display callback. This is standard practice for smooth animation.

23. **a) True.** A rotation around the Z-axis only affects X and Y coordinates. The transformation matrix for Z-rotation has the form:
    ```
    | cos θ  -sin θ  0 |
    | sin θ   cos θ  0 |
    |   0      0     1 |
    ```
    This clearly shows that the Z coordinate remains unchanged.

24. **a) True.** Depth testing is essential for proper 3D rendering. Without it, objects would be drawn in the order they're submitted, regardless of their actual depth in the scene. GL_DEPTH_TEST enables the depth buffer to ensure proper occlusion.

25. **a) True.** glClearColor sets the color values used when clearing the color buffer with glClear(GL_COLOR_BUFFER_BIT). This is how you set the background color for your scene. The statement accurately describes the function's purpose. 