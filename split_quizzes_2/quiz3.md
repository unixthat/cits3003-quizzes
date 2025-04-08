# Master Quiz 3

1. If a scene in OpenGL has **no light sources**, objects rendered with a typical lighting shader will appear completely black.  
    - a) True  
    - b) False

2. Printing devices (e.g., an inkjet printer) use the **Cyan, Magenta, Yellow** color system, which is a subtractive color model.  
    - a) True  
    - b) False

3. Which statement about **color vision** is true?  
    - a) Humans have three types of cone cells, each sensitive to different ranges of wavelengths (roughly corresponding to red, green, and blue light).  
    - b) Rod cells in the eye are responsible for perceiving colors in bright light.  
    - c) We need a distinct primary color for every possible visible wavelength to reproduce all colors.  
    - d) Humans have four primary color receptors, which is why CMYK is used for all displays.

4. OpenGL's camera uses a synthetic pinhole model where the projection plane is placed in front of the camera's center of projection, resulting in an upright (non-inverted) image.  
    - a) True  
    - b) False

5. OpenGL is often described as a **state machine** API: functions like `glEnable` or `glColor3f` set persistent states that remain until changed, affecting subsequent rendering calls.  
    - a) True  
    - b) False

6. Which of the following statements about OpenGL is **false**?  
    - a) OpenGL commands are executed on the GPU (via the graphics driver).  
    - b) OpenGL can be used for both 2D and 3D graphics rendering.  
    - c) OpenGL automatically handles physics and collision simulations for rendered objects.  
    - d) OpenGL is cross-platform, available on various operating systems given appropriate drivers.

7. GLUT (OpenGL Utility Toolkit) is a library used to create windows and handle input events in OpenGL programs in a platform-independent way.  
    - a) True  
    - b) False

8. To draw a connected series of line segments between a list of points (each point connected to the next), you should use:  
    - a) `GL_LINE_LOOP`  
    - b) `GL_LINE_STRIP`  
    - c) `GL_TRIANGLE_STRIP`  
    - d) `GL_LINES`

9. Any three non-collinear points define a triangle, and a triangle is always a simple, convex polygon.  
    - a) True  
    - b) False

10. OpenGL core (modern OpenGL) does not directly support drawing arbitrary filled polygons with more than three vertices; all complex surfaces must be composed of triangles.  
    - a) True  
    - b) False

11. Which pipeline stage is responsible for applying **model and view transformations** to vertices (typically combining them into a model-view transform)?  
    - a) The application (CPU) before sending vertices  
    - b) The Vertex Processing stage (Vertex Shader)  
    - c) The Rasterizer stage  
    - d) The Fragment Processing stage

12. The **view transformation** (camera transform) is effectively the inverse of the camera's movement and brings world coordinates into the camera's coordinate system (eye space).  
    - a) True  
    - b) False

13. After projection and the perspective divide, which coordinate space are vertices in?  
    - a) Model space  
    - b) World space  
    - c) Normalized Device Coordinate (NDC) space  
    - d) Eye (camera) space

14. Which transformation is **affine** but *not* rigid?  
    - a) Rotation about the origin  
    - b) Translation  
    - c) Uniform scaling (same scale on X, Y, Z)  
    - d) Non-uniform scaling (different scales, e.g., stretch)

15. In homogeneous coordinates, a vector (direction) can be represented with **w = 0**, indicating it has no fixed position (points at infinity).  
    - a) True  
    - b) False

16. Which of the following is a valid data type in GLSL?  
    - a) `vec5` (5-component vector)  
    - b) `mat3` (3×3 matrix)  
    - c) `int3` (3-component integer vector)  
    - d) `bool4` (4-component boolean vector)

17. Which statement is **true** regarding the order of shader execution in the pipeline?  
    - a) The fragment shader executes once per triangle.  
    - b) The fragment shader runs after rasterization to determine each fragment's color.  
    - c) The vertex shader can access the results of the fragment shader.  
    - d) The vertex shader can emit new primitives on its own.

18. GLSL (the OpenGL Shading Language) does not support pointer arithmetic or explicit memory address manipulation.  
    - a) True  
    - b) False

19. What **must** a vertex shader do to ensure a vertex is correctly placed in the scene?  
    - a) Compute and set the special built-in variable `gl_Position` (clip-space position of the vertex).  
    - b) Compute and set `gl_FragColor` for that vertex.  
    - c) Sample textures to get the vertex coordinates.  
    - d) Output a point size via `gl_PointSize` for every vertex, regardless of primitive type.

20. To use a Vertex Array Object (VAO) in OpenGL, you must bind it with `glBindVertexArray` before setting up vertex attribute pointers or drawing with it.  
    - a) True  
    - b) False

21. Selecting an item from a menu (where the program receives an identifier for the chosen item) is an example of which logical input device type?  
    - a) **Choice** device  
    - b) **Pick** device  
    - c) **Locator** device  
    - d) **String** device

22. A **locator** device is one that provides a coordinate in space, typically from a pointing device (like a mouse giving an (x,y) position).  
    - a) True  
    - b) False

23. The GLUT reshape callback (registered via `glutReshapeFunc`) is called when:  
    - a) The window is resized, providing the new width and height.  
    - b) A timer event occurs after a specified interval.  
    - c) The mouse is moved.  
    - d) A key is pressed on the keyboard.

24. If you do **not** register a display callback with GLUT (i.e., never call `glutDisplayFunc`), the window will either remain blank or not update because no rendering function is defined.  
    - a) True  
    - b) False

25. A "stroke" logical input device is one that returns a series of points (for example, tracing the path of a stylus or mouse drag).  
    - a) True  
    - b) False 