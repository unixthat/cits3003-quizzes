# Week 1 Quiz: Answer Key

1. **False**
   - Explanation: Computer graphics is concerned with both generating images and simulating how light and physics affect the appearance of objects. This includes modeling light behavior, materials, and physical properties to create realistic or stylized visual representations.

2. **True**
   - Explanation: An ideal pinhole camera does have an infinite depth of field (everything is in focus), but the small aperture means very little light enters, requiring long exposure times. This is a fundamental trade-off in pinhole photography.

3. **a) Additive color mixing (RGB) is used by emissive displays and lighting (e.g., monitors, projectors).**
   - Explanation: Additive color mixing (RGB) is used by emissive displays like monitors and projectors because they emit light. Subtractive color mixing (CMY/CMYK) is used in print media where light is reflected off surfaces.

4. **b) It places the image plane in front of the center of projection so that the rendered image appears upright (not inverted).**
   - Explanation: The OpenGL synthetic camera places the image plane in front of the center of projection, which means the rendered image appears upright (not inverted like a real pinhole camera). This is a key difference from physical cameras and makes the rendering more intuitive for developers.

5. **c) Two-dimensional graphics cannot be handled by the synthetic camera model (it only works for 3D).**
   - Explanation: This is incorrect - the synthetic camera model can indeed handle 2D graphics. While it's often used for 3D rendering, it can be used for 2D by simply working in a plane. The other options correctly describe advantages of the synthetic camera model.

6. **b) OpenGL is a cross-platform graphics API specification, and its implementation is typically provided by graphics card drivers.**
   - Explanation: OpenGL is a specification for a graphics API, and hardware vendors provide implementations through their graphics drivers. It's not an open-source library, doesn't include GUI elements (that's what GLUT/GLFW are for), and modern OpenGL uses a programmable pipeline.

7. **d) GL_TRIANGLE_LOOP**
   - Explanation: `GL_TRIANGLE_LOOP` is not a valid OpenGL primitive type. The valid primitive types include `GL_POINTS`, `GL_TRIANGLES`, `GL_TRIANGLE_STRIP`, and `GL_LINE_LOOP`.

8. **a) The polygon must be simple (no self-intersecting edges) and convex.**
   - Explanation: OpenGL requires polygons to be simple (non-self-intersecting) and convex for direct rendering. Concave or self-intersecting polygons must be triangulated (broken into triangles) before rendering.

9. **False**
   - Explanation: Both vertex and fragment shaders can influence the final color of pixels. The vertex shader can output colors that are interpolated across primitives and used by the fragment shader. The fragment shader makes the final color decision but can use inputs from the vertex shader.

10. **d) OpenGL itself includes functions for creating windows and handling user input events.**
    - Explanation: This is incorrect. OpenGL does not include window management or input handling - these are handled by separate libraries like GLUT or GLFW. OpenGL focuses solely on rendering graphics.

11. **Answer:** A callback function is a function that you write and register with the graphics system, which will be called automatically when specific events occur. For example, a display callback is called when the window needs to be redrawn, or a keyboard callback is called when a key is pressed. This allows the program to respond to events asynchronously without constantly checking for them.

12. **Answer:** Two critical initialization steps are:
    1. Setting up the clear color and clearing the color buffer (using glClearColor and glClear)
    2. Setting up the viewport dimensions to match the window size (using glViewport)
    Additional important steps might include enabling depth testing, creating and binding shader programs, or setting up vertex buffers.

13. **a) OpenGL has a fixed set of states (like current color, current shader program, etc.) that persist between function calls until changed, and function calls affect these states.**
    - Explanation: OpenGL maintains various states (current shader, current texture, current color, etc.) that persist until explicitly changed. Function calls both read and modify these states, making OpenGL a state machine.

14. **True**
    - Explanation: In OpenGL's default coordinate system, before any viewing transformations are applied, the camera is positioned at the origin (0,0,0) looking down the negative Z-axis, with positive Y being up.

15. **d) Calling glBegin() and glEnd() for each triangle to draw it on screen.**
    - Explanation: In modern OpenGL (Core profile), the immediate mode functions like glBegin() and glEnd() are deprecated and unavailable. Instead, you must use vertex buffers and shaders for rendering.
