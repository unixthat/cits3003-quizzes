# Master Quiz 4

1. What is the correct order of coordinate transformations for a vertex going from model space to screen space in OpenGL?  
    - a) Model transform → View (camera) transform → Projection transform → Perspective divide (normalize) → Viewport mapping to screen  
    - b) View (camera) transform → Model transform → Projection transform → Viewport mapping → Perspective divide  
    - c) Model transform → Projection transform → View transform → Perspective divide → Viewport mapping  
    - d) Projection transform → Model transform → View transform → Viewport mapping → Perspective divide

2. The visual appearance of a 3D object (how bright or what color it appears) typically depends on the lighting in the scene, the object's material properties, and the viewing position.  
    - a) True  
    - b) False

3. In a **perspective projection**, objects that are farther from the camera appear smaller in the rendered image than those that are closer.  
    - a) True  
    - b) False

4. Which of the following is a characteristic of **ray tracing** (and not a default feature of the basic OpenGL pipeline)?  
    - a) Automatic calculation of reflections and refractions of light.  
    - b) Use of a depth buffer (z-buffer) to handle visibility.  
    - c) Transforming vertices by matrices to project them onto a view.  
    - d) Use of Gouraud or Phong shading for lighting.

5. A real pinhole camera forms an inverted image on its film/sensor, whereas OpenGL's synthetic camera avoids image inversion by placing the projection plane in front of the camera.  
    - a) True  
    - b) False

6. Which of these is **NOT** an actual OpenGL function or feature?  
    - a) `glTranslatef` (translate transformation in old OpenGL)  
    - b) `glEnable(GL_DEPTH_TEST)`  
    - c) `glBegin(GL_TRIANGLES)`  
    - d) `glRenderObject()` (render an object automatically)

7. OpenGL by itself does **not** provide functions for creating windows or capturing input events; those tasks are handled by toolkits like GLUT, GLFW, or the operating system.  
    - a) True  
    - b) False

8. What is the purpose of the **depth buffer** (Z-buffer) in rendering?  
    - a) To perform hidden-surface removal by tracking the closest fragment depth at each pixel.  
    - b) To store the color of each pixel on the screen.  
    - c) To handle transparency and blending of colors.  
    - d) To map texture coordinates to fragments.

9. The model transformation moves objects from their local model coordinate space into the common world coordinate space.  
    - a) True  
    - b) False

10. Which transformation leaves both the shape and size of an object unchanged?  
    - a) Rotation about the object's center  
    - b) Non-uniform scaling  
    - c) Uniform scaling  
    - d) Shear (skew)

11. Any combination of rotations, translations, and scalings (with non-zero scale factors) results in an affine transformation that is invertible (can be reversed).  
    - a) True  
    - b) False

12. In a modern OpenGL program using shaders, vertex attribute data (positions, normals, etc.) is typically provided to the vertex shader via:  
    - a) Buffer objects (VBOs) bound to vertex attribute pointers, set by the application.  
    - b) Built-in constant variables on the GPU that hold common shapes.  
    - c) The fragment shader, which passes them back to the vertex stage.  
    - d) Automatic generation by OpenGL for standard objects (cube, sphere, etc.).

13. The output of the vertex shader (e.g., varying variables like color or texture coordinates) is interpolated across the primitive during rasterization and passed into the fragment shader.  
    - a) True  
    - b) False

14. Which of the following is **NOT** allowed in GLSL shader code?  
    - a) Loop constructs like `for` and `while`.  
    - b) Recursive function calls (a function calling itself).  
    - c) Vector operations such as `dot(mat3, vec3)`.  
    - d) Built-in math functions like `sin()` or `pow()`.

15. In a fragment shader, `gl_FragCoord` is a built-in variable that gives the window (screen) coordinates of the fragment (including its depth value).  
    - a) True  
    - b) False

16. `glBufferSubData` can be used to update a subset of data in an existing buffer object without reallocating the buffer.  
    - a) True  
    - b) False

17. Which function specifies the format and location of vertex attribute data in the currently bound VBO (for use by the vertex shader)?  
    - a) `glVertexAttribPointer`  
    - b) `glBindVertexArray`  
    - c) `glEnableVertexAttribArray`  
    - d) `glBufferData`

18. The GLUT **timer** callback, registered via `glutTimerFunc`, allows you to schedule a one-time callback after a specified delay (often used for animation timing).  
    - a) True  
    - b) False

19. Which GLUT callback function is used to handle **mouse button press/release** events?  
    - a) `glutMouseFunc`  
    - b) `glutMotionFunc`  
    - c) `glutPassiveMotionFunc`  
    - d) `glutKeyboardFunc`

20. The function passed to `glutKeyboardFunc` (for ASCII key events) receives, among other parameters, the (x, y) mouse coordinates at the time of the key press.  
    - a) True  
    - b) False

21. When the user moves the mouse with a button pressed, GLUT can invoke the motion callback (registered via `glutMotionFunc`), whereas movement with no buttons pressed can trigger the passive motion callback (`glutPassiveMotionFunc`).  
    - a) True  
    - b) False

22. Calling `glutPostRedisplay()` within an event callback will mark the window for redisplay, causing GLUT to call the display callback again on the next iteration of the event loop.  
    - a) True  
    - b) False

23. Which of the following is a valid OpenGL primitive mode for rendering via `glDrawArrays`?  
    - a) GL_POINTS  
    - b) GL_CUBE  
    - c) GL_SPHERE  
    - d) GL_POLYGON_STRIP 