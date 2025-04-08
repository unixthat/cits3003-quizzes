# Computer Graphics Mid-Term Exam

## Multiple Choice Questions

1. In Computer Graphics, the appearance of objects within a scene cannot be influenced by light sources.
   - a) True
   - b) False

2. Pinhole cameras have long exposure times.
   - a) True
   - b) False

3. Additive color scheme is used in printing systems.
   - a) True
   - b) False

4. OpenGL's synthetic camera model places the image plane in front of the camera, resulting in an inverted image of the viewed object on the image plane.
   - a) True
   - b) False

5. Choose the incorrect statement:
   - a) OpenGL provides functions to manage window creation and resizing
   - b) OpenGL is a set of specifications that define a standard interface for communicating with the GPU
   - c) Graphics card manufacturers usually implement the OpenGL libraries for their hardware, based on the OpenGL specifications
   - d) OpenGL is compatible with modern graphics hardware

6. Select the valid attribute(s) for polygons (primitive) in OpenGL:
   - a) width
   - b) color
   - c) size
   - d) All of the above
   - e) both (b) and (c)

7. Which statement is correct about GLUT:
   - a) GLUT provides advanced window management features, such as slidebars
   - b) GLUT is designed only for creating 2D graphics
   - c) GLUT only works on Windows operating systems
   - d) GLUT requires extensive modifications to work on different operating systems
   - e) None of the above

8. Color and luminance images can be represented in HSL (Hue, Saturation and Lightness) format.
   - a) True
   - b) False

9. Which of the following is not an OpenGL primitive?
   - a) GL_POINTS
   - b) GL_TRIANGLE_LOOP
   - c) GL_TRIANGLE_STRIP
   - d) GL_LINES
   - e) GL_LINE_LOOP

10. Which option is correct for the Polygon given below?
    - a) It is convex and simple
    - b) It is flat and convex
    - c) It is non-convex and simple
    - d) None of the above

11. Color is an important vertex attribute and can only be computed in Fragment shaders.
    - a) True
    - b) False

12. Which statement is true about the OpenGL pipeline?
    - a) The rasterizer renders the objects that are outside the viewing volume
    - b) Vertex processor can only manipulate vertex locations but not vertex colors
    - c) Primitive assembler converts 2D vertex data to 3D primitives
    - d) Fragment processor projects the 3D objects to frame buffer
    - e) None of the above

13. Why do polygons need to be tessellated into triangles in OpenGL?
    - a) OpenGL only supports rendering triangles
    - b) Tessellation produces long and thin triangles
    - c) Triangles consume less memory during rendering
    - d) Both (a) and (c) are correct

14. Given color = vec4(1, 2, 3, 4), which of the following option is correct?
    - a) color.xy is a vec2 made from the first and third components of color
    - b) color.xyza is legal because the component names can come from different name-sets
    - c) color.gbr is a vec3 made from the second, third and fourth component of color respectively
    - d) None of the above

15. Input Device A returns a string of characters to the Application program, whereas B returns an identifier of an icon selected from the display. In terms of Logical input devices, A and B can be characterised as:
    - a) Keyboard and Mouse
    - b) String and Stroke
    - c) Type and Select
    - d) String and Pick

16. Which of the following statements about callback functions is true?
    - a) Callback functions initialise the OpenGL Context
    - b) A callback function is a function that is called by OpenGL when a specific event occurs
    - c) Callback functions are only used for error handling in OpenGL
    - d) If there is no callback function registered for an event in an OpenGL program, the event will cause an error in the OpenGL context
    - e) Both (b) and (d) are correct

17. Every window created by GLUT has its own OpenGL context:
    - a) True
    - b) False

18. glBufferSubData() can be used to update a portion of the data in a buffer object without changing its size?
    - a) True
    - b) False

19. What is the purpose of using buffer objects in OpenGL?
    - a) To store vertex data for rendering
    - b) To store shader programs
    - c) To store display lists for rendering
    - d) All the above
    - e) Both (a) and (b) are correct

20. Choose the incorrect statement:
    - a) A VAO is used to store multiple VBOs for rendering
    - b) We can set multiple viewports in the same rendering window
    - c) Perspective Projection changes the object's size based on their distance from the camera
    - d) In Orthographic Projection, the vertices that are outside the frustum box are automatically scaled to fit within the box

21. Choose a correct statement:
    - a) GLSL is similar to C and uses pointers
    - b) GLSL function parameters are passed by value, rather than by value-return
    - c) GLSL codes such as shaders are stand-alone applications, which run on GPU
    - d) GLSL does not provide any trigonometric or arithmetic functions
    - e) None of the above statements are correct

22. For the given vertex shader code, which of the following statements is true?
    ```glsl
    const vec4 intensity = vec4(1.0, 2.0, 3.0, 1.0);
    in vec4 vPosition;
    uniform mat4 projection;
    out vec4 color;
    void main() {
        gl_Position = vPosition;
        color = projection * intensity;
    }
    ```
    - a) Variable "intensity" can be shared with the fragment shader
    - b) vPosition must be initialised in the application program and can be shared between the shaders
    - c) Variable color will have a qualifier "out" in the fragment shader
    - d) Variable projection can be used in vertex shader but not in fragment shader
    - e) projection is a global variable

23. A vertex shader processes multiple vertices at the same time.
    - a) True
    - b) False

24. In which coordinate system is the camera positioned at the origin looking down the negative z-axis?
    - a) Object coordinates
    - b) World coordinates
    - c) Eye coordinates
    - d) Clip coordinates

25. Which of the following Transformations can change the size and shape of the objects?
    - a) Rigid Transformation
    - b) Affine Transformation
    - c) Nonlinear transformation 