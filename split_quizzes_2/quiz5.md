# Master Quiz 5

1. In a rendered scene, the appearance of objects is **not affected** by the light sources present.  
    - a) True  
    - b) False

2. In OpenGL's camera model, objects, light sources, and the viewer (camera) can be defined separately — their combined interaction produces the final rendered image.  
    - a) True  
    - b) False

3. **Ray tracing** produces highly realistic images by simulating rays of light, but it is generally more computationally expensive than OpenGL's real-time rasterization pipeline.  
    - a) True  
    - b) False

4. OpenGL is essentially a specification/API, and the actual implementation of OpenGL functions is provided by your graphics hardware's driver.  
    - a) True  
    - b) False

5. When you call a drawing command like `glDrawArrays`, where does the rendering work happen?  
    - a) On the GPU (graphics processing unit) via the graphics driver.  
    - b) On the CPU in a separate thread created by OpenGL.  
    - c) In a software renderer that OpenGL provides by default.  
    - d) Directly on the display without involving the GPU or CPU.

6. Modern OpenGL uses a **retained mode** approach (with buffers and shaders) instead of the old **immediate mode** (specifying vertices on the fly each frame).  
    - a) True  
    - b) False

7. Which statement about GLUT is **true**?  
    - a) GLUT makes OpenGL programs cross-platform by handling window creation and input events for you.  
    - b) GLUT provides advanced GUI widgets (buttons, menus) as part of its toolkit.  
    - c) GLUT is part of the core OpenGL library and is required to use OpenGL.  
    - d) GLUT can only be used with the C programming language.

8. Which stage of the OpenGL pipeline is responsible for breaking down primitives into **fragments** (pixels) for the fragment shader?  
    - a) Primitive Assembly  
    - b) Fragment Shading  
    - c) Vertex Shading  
    - d) Rasterization stage

9. During rasterization, vertex outputs (varyings) like color or texture coordinates are interpolated to produce values for each fragment, before those fragments are processed by the fragment shader.  
    - a) True  
    - b) False

10. **Clip coordinates** refer to the coordinates of vertices after the projection transformation has been applied but before the perspective divide by *w*.  
    - a) True  
    - b) False

11. Which of the following is a property of an **affine transformation** in 3D?  
    - a) It preserves straight lines (keeps points that were collinear still collinear after transformation).  
    - b) It preserves all angles between vectors.  
    - c) It cannot include translations (only rotation and scaling).  
    - d) It is a non-linear (curved) mapping.

12. The order of transformations matters: for example, applying a rotation then a translation generally gives a different result than applying the translation first and then the rotation.  
    - a) True  
    - b) False

13. Shaders in modern OpenGL are most commonly written in:  
    - a) GLSL (OpenGL Shading Language)  
    - b) C++  
    - c) Assembly language  
    - d) HLSL

14. A vertex shader **must** output a clip-space position for each vertex (usually by writing to `gl_Position`).  
    - a) True  
    - b) False

15. Which is **NOT** a valid storage qualifier or keyword in GLSL?  
    - a) `in`  
    - b) `out`  
    - c) `uniform`  
    - d) `static`

16. If you want to pass a computed value (e.g. a color) from your vertex shader to your fragment shader, you should:  
    - a) Declare an output variable in the vertex shader and a matching input variable in the fragment shader to carry the value.  
    - b) Use a `uniform` for the value so the fragment shader can see it.  
    - c) Write it to a global variable that both shaders share automatically.  
    - d) You cannot pass data from the vertex shader to fragment shader in OpenGL.

17. A Vertex Array Object (VAO) stores the setup of vertex attribute pointers and associated buffer bindings so that the configuration can be easily reused for drawing.  
    - a) True  
    - b) False

18. Binding a buffer ID of 0 (e.g., `glBindBuffer(GL_ARRAY_BUFFER, 0)`) has what effect?  
    - a) It unbinds the currently bound array buffer (no vertex buffer is bound after that).  
    - b) It binds a special default buffer with ID 0.  
    - c) It resets or clears the current buffer's data store.  
    - d) It results in an error, since 0 is not a valid buffer.

19. Which GLUT function allows you to handle special keyboard keys (like arrow keys or function keys) separately from regular character keys?  
    - a) `glutSpecialFunc`  
    - b) `glutKeyboardFunc`  
    - c) `glutMouseFunc`  
    - d) `glutArrowFunc`

20. Calling `glutMainLoop()` hands control over to GLUT's event processing loop, and code after `glutMainLoop()` in your `main()` will not execute (until the program terminates).  
    - a) True  
    - b) False

21. Without a registered display callback in a GLUT program, nothing will be drawn to the window (the window will remain blank or static).  
    - a) True  
    - b) False

22. Calling `glutPostRedisplay()` in an update or input callback will request a new frame draw, causing the display callback to be called on the next iteration of the event loop.  
    - a) True  
    - b) False

23. Which of the following is **not** an actual primitive mode you can use with `glDrawArrays`?  
    - a) GL_POINTS  
    - b) GL_TRIANGLES  
    - c) GL_POLYGON (in compatibility, draws a single convex polygon)  
    - d) GL_SQUARES

24. `glEnable(GL_DEPTH_TEST)` is used to turn on depth buffering, so that fragments that are behind others (farther from the camera) are discarded.  
    - a) True  
    - b) False

25. Which function is used to set the **clear color** (the background color that the screen will be cleared to)?  
    - a) `glClearColor(r, g, b, a)`  
    - b) `glColor3f(r, g, b)`  
    - c) `glBackgroundColor(r, g, b, a)`  
    - d) `glClear(GL_COLOR_BUFFER_BIT, r, g, b)` 