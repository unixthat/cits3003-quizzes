# Week 1 Quiz: Introduction & Image Formation, Programming with OpenGL

1. **True/False:** Computer graphics deals solely with generating images and is not concerned with how light or physics affect the appearance of objects.

2. **True/False:** An ideal pinhole camera exhibits an infinite depth of field, but in practice it requires very long exposure times to capture enough light.

3. **Multiple Choice:** In the context of color models, which statement is **correct**?
   - a) Additive color mixing (RGB) is used by emissive displays and lighting (e.g., monitors, projectors).
   - b) Subtractive color mixing (CMY/CMYK) is used in devices like computer monitors.
   - c) Additive color mixing is primarily used in print media (ink on paper).
   - d) Subtractive color mixing is suitable for combining colored lights on a screen.

4. **Multiple Choice:** The OpenGL **synthetic camera model** differs from a real pinhole camera. Which of the following is true about the synthetic camera used in OpenGL?
   - a) It places the image plane **behind** the center of projection, causing rendered images to appear upside down by default.
   - b) It places the image plane **in front of** the center of projection so that the rendered image appears upright (not inverted).
   - c) It cannot simulate perspective projection since it is not a physical camera.
   - d) It does not allow separate control of objects, viewer, and light sources.

5. **Multiple Choice:** Which of the following is **not** an advantage of the synthetic camera model in graphics APIs like OpenGL?
   - a) Objects, camera (viewer), and light sources can be defined independently and combined to produce the final image.
   - b) It leads to a simple software API and fast hardware implementations for rendering.
   - c) Two-dimensional graphics cannot be handled by the synthetic camera model (it only works for 3D).
   - d) The same model can be used for both real-time rendering (OpenGL) and offline rendering (with appropriate algorithms).

6. **Multiple Choice:** Which statement about **OpenGL** is correct?
   - a) OpenGL is an open-source software library you install separately; it is not tied to your graphics hardware or driver.
   - b) OpenGL is a cross-platform graphics API specification, and its implementation is typically provided by graphics card drivers.
   - c) OpenGL provides high-level GUI elements (windows, buttons) as part of its core functionality.
   - d) Modern OpenGL (3.2 and above) still uses the fixed-function pipeline by default for compatibility.

7. **Multiple Choice:** Which of the following is **not** a primitive type provided by OpenGL for drawing?
   - a) `GL_POINTS`
   - b) `GL_TRIANGLES`
   - c) `GL_TRIANGLE_STRIP`
   - d) `GL_TRIANGLE_LOOP`
   - e) `GL_LINE_LOOP`

8. **Multiple Choice:** In OpenGL, a **polygon** (filled shape) to be rendered must meet certain criteria. Which option correctly describes a **valid** polygon for rendering *without* needing further processing?
   - a) The polygon must be **simple** (no self-intersecting edges) and **convex**.
   - b) The polygon can be concave but must lie in a single plane (flat).
   - c) The polygon may have crossing edges as long as it is convex.
   - d) Any arbitrary 2D shape is acceptable; OpenGL automatically tessellates all polygons.

9. **True/False:** In the OpenGL graphics pipeline, *only* the fragment shader (fragment processing stage) can determine the final color of a pixel; the vertex shader cannot influence vertex colors at all.

10. **Multiple Choice:** Which of the following statements about OpenGL and its related libraries is **incorrect**?
    - a) GLUT (OpenGL Utility Toolkit) is a library to manage window creation, input, and events, but it does not provide advanced GUI widgets like sliders or menus by itself.
    - b) GLEW/GLAD are libraries for loading modern OpenGL function pointers (extensions) and are often needed alongside OpenGL.
    - c) Every window created using GLUT has its own OpenGL rendering context (state machine) associated with it.
    - d) OpenGL itself includes functions for creating windows and handling user input events.

11. **Scenario (Short Answer):** You are using an interactive OpenGL program. Explain what a **callback function** is in this context and give an example of an event you might handle with a callback. (No code is required, just describe the concept.)

12. **Scenario (Short Answer):** Suppose you have an OpenGL program where nothing appears on screen, and you suspect it's because of how OpenGL's state machine was initialized. What are two *initialization steps* or states that must be set correctly for any basic OpenGL program to draw something on the window? (Hint: Consider things like clearing the screen or enabling features.)

13. **Multiple Choice:** Modern OpenGL is often described as a **state machine**. Which scenario best illustrates what that means?
    - a) OpenGL has a fixed set of states (like current color, current shader program, etc.) that persist between function calls until changed, and function calls affect these states.
    - b) OpenGL functions execute independently without any lasting side effects; you must specify all parameters every time.
    - c) OpenGL uses a finite-state automaton internally to decide which drawing command to run next.
    - d) The only state OpenGL preserves is the content of the frame buffer (drawn pixels).

14. **True/False:** In the default OpenGL coordinate system (before any transformations), the camera is located at the origin of the scene and looks down the negative Z-axis by default.

15. **Multiple Choice:** When starting to program with modern OpenGL (Core profile), which of the following is *not* typically required?
    - a) Writing and compiling a vertex shader and a fragment shader (at minimum) to handle rendering.
    - b) Sending vertex attribute data (like positions, colors) to the GPU via buffer objects.
    - c) Setting up a rendering window and an OpenGL context (often using a library like GLFW or GLUT).
    - d) Calling `glBegin()` and `glEnd()` for each triangle to draw it on screen.
