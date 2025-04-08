# Master Quiz 1

1. In computer graphics, **ray tracing** is an alternative rendering approach that traces rays of light to produce images, unlike OpenGL's pipeline which uses a synthetic camera model and rasterization.  
    - a) True  
    - b) False

2. A pinhole camera produces an image that is always in perfect focus but admits very little light, resulting in the need for **long exposure times**.  
    - a) True  
    - b) False

3. Which of the following uses a **subtractive** color model (as opposed to additive)?  
    - a) CRT or LED computer monitor  
    - b) Digital projector  
    - c) Inkjet printer  
    - d) OLED display

4. Which statement is **true** about OpenGL's synthetic camera model?  
    - a) The image plane is placed behind the camera, similar to a real pinhole camera.  
    - b) It requires simulating physical light transport (ray physics) for image generation.  
    - c) Objects, viewer (camera), and lights can be specified independently of each other.  
    - d) It produces an upside-down (inverted) image by default, which must be corrected in software.

5. Choose the **incorrect** statement regarding OpenGL:  
    - a) OpenGL provides built-in functions to create windows and handle input events.  
    - b) OpenGL is a specification that defines a platform-independent API for graphics hardware.  
    - c) Graphics card vendors implement OpenGL functionality in their drivers.  
    - d) Modern OpenGL (core profile) requires the use of shader programs for rendering.

6. Which of these is **NOT** a primitive type supported by modern OpenGL?  
    - a) GL_POINTS  
    - b) GL_TRIANGLE_STRIP  
    - c) GL_LINE_LOOP  
    - d) GL_QUADS

7. A **concave** polygon (non-convex polygon) has which characteristic?  
    - a) All interior angles are less than or equal to 180°.  
    - b) It must have self-intersecting edges.  
    - c) It has at least one interior angle greater than 180°.  
    - d) It cannot be rendered at all using OpenGL.

8. In the OpenGL pipeline, which task is performed during the **primitive assembly** stage?  
    - a) Clipping away parts of primitives outside the view volume.  
    - b) Converting vertices into assembled geometric primitives (points, lines, triangles).  
    - c) Dividing each vertex's coordinates by *w* to normalize device coordinates.  
    - d) Computing the color of each pixel fragment.

9. In which coordinate system is the camera located at the origin looking along the negative Z-axis (by convention)?  
    - a) Model (object) coordinates  
    - b) World coordinates  
    - c) Eye (camera) coordinates  
    - d) Window (screen) coordinates

10. Which transformation **does not change the shape or size** of an object?  
    - a) Rotation  
    - b) Translation  
    - c) Non-uniform scaling  
    - d) Shear (skew)

11. Which of the following operations is **not defined** in an affine point-vector space?  
    - a) Point + Point  
    - b) Point – Point  
    - c) Point + Vector  
    - d) Vector + Vector

12. Which stage in the OpenGL pipeline is executed for every generated fragment (pixel) of a primitive?  
    - a) Vertex Shader  
    - b) Geometry Shader  
    - c) Fragment Shader  
    - d) Tessellation Shader

13. Which statement about GLSL (OpenGL Shading Language) is **correct**?  
    - a) It allows low-level pointer arithmetic like C/C++.  
    - b) It provides built-in vector and matrix data types (e.g., `vec3`, `mat4`).  
    - c) It uses the exact same compiler as C/C++ for shader code.  
    - d) Shader programs written in GLSL run on the CPU, not the GPU.

14. Given a definition `vec4 color = vec4(1, 2, 3, 4);`, which of the following swizzle operations is **invalid** in GLSL?  
    - a) `color.xy` (accesses the x and y components as a vec2)  
    - b) `color.xx` (repeats the x component to form a vec2)  
    - c) `color.zyx` (reorders components to z, y, x)  
    - d) `color.xrg` (mixes component name sets)

15. What is the purpose of the OpenGL function `glBufferSubData`?  
    - a) To create a new buffer object and initialize it with data.  
    - b) To bind a buffer object to a shader variable.  
    - c) To update a portion of an existing buffer object's data store.  
    - d) To subdivide a complex primitive into smaller ones.

16. Which of these best describes a Vertex Array Object (VAO) in modern OpenGL?  
    - a) An array that holds all vertex data (positions, colors, etc.) in one contiguous block.  
    - b) An object that stores the state of vertex attribute configurations (which VBOs and attributes are enabled).  
    - c) A shader program used for processing arrays of vertices.  
    - d) An old fixed-function mechanism for storing vertex data.

17. Which of the following is **true** regarding viewports in OpenGL?  
    - a) Only one viewport can ever be used per application.  
    - b) You can call `glViewport` multiple times in one frame to render to different regions of the window.  
    - c) The viewport transformation is applied in the vertex shader.  
    - d) The viewport always covers the entire window and cannot be changed.

18. Which pairing of a physical input and its logical input device type is **correct**?  
    - a) Moving a mouse continuously – **Stroke** device  
    - b) Pressing keys on a keyboard – **Locator** device  
    - c) Clicking on a displayed object – **Pick** device  
    - d) Choosing an item from a menu – **String** device

19. Which of the following is **true** about callback functions in an event-driven OpenGL/GLUT program?  
    - a) The programmer must call these functions manually whenever an event occurs.  
    - b) They are utility functions provided by OpenGL to draw common shapes.  
    - c) They are registered with GLUT and called automatically by the system when the corresponding event happens.  
    - d) Only one callback function can be registered in a program (additional registrations are ignored).

20. Every window created by GLUT has its own OpenGL rendering context (with its own state, resources, etc.).  
    - a) True  
    - b) False

21. Regarding GLSL shader variables, which statement is **correct**?  
    - a) An `in` variable in a fragment shader receives interpolated data from the vertex shader's outputs.  
    - b) A `uniform` variable is set within the shader code and cannot be changed by the application.  
    - c) Varying variables (outputs from vertex shader) automatically appear in the fragment shader without declaration.  
    - d) The `gl_Position` built-in variable is used in the fragment shader to determine fragment location.

22. Calling `glutMainLoop()` in a GLUT program will enter an event-processing loop that does not return until the program exits.  
    - a) True  
    - b) False

23. Which stage of the pipeline determines which fragments (pixels) lie inside a given primitive (essentially filling in the primitive)?  
    - a) Vertex Shading  
    - b) Primitive Assembly  
    - c) Rasterization  
    - d) Blending

24. In GLSL, using the `discard` keyword in a fragment shader will…  
    - a) Skip processing the remaining vertices in the primitive.  
    - b) Omit the current fragment, so it will not be drawn to the framebuffer.  
    - c) Flush all pending drawing commands on the GPU.  
    - d) Unbind the currently bound texture.

25. Which type of projection causes objects to appear the **same size regardless of distance** from the camera?  
    - a) Orthographic projection  
    - b) Perspective projection  
    - c) Pinhole (perspective) camera projection  
    - d) None – distance always affects perceived size 