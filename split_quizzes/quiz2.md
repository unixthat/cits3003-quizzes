# Week 2 Quiz: OpenGL Pipeline Architecture, Example Program

1. **Multiple Choice:** Which statement about the **OpenGL graphics pipeline** is true?
   - a) The **vertex processing** stage handles transforming vertices between coordinate systems (object space to camera space, etc.) and can perform per-vertex lighting or color computations.
   - b) The **primitive assembly** stage occurs *after* fragment shading, to group colored pixels into final geometric shapes.
   - c) The **rasterization** stage converts geometric primitives into **fragments** (potential pixels) and interpolates vertex attributes like color across the primitive.
   - d) The **fragment processing** stage only paints each fragment; it does not involve any tests (like depth test) or discarding of fragments.

2. **Multiple Choice:** What happens to geometry that lies **outside the viewing volume** of the synthetic camera?
   - a) It is clipped or discarded before rasterization, so it won't appear in the final image.
   - b) It is rasterized normally, but fragments are colored black.
   - c) The vertex processor automatically moves it into the view frustum (view volume).
   - d) OpenGL will throw an error if a primitive extends outside the view volume.

3. **Multiple Choice:** OpenGL emphasizes triangles as the fundamental polygon for rendering. **Why are triangles used as the basic primitive for complex surfaces?**
   - a) Triangles are always planar (flat) and cannot be self-intersecting or concave, simplifying rendering.
   - b) Rendering hardware only supports triangles and cannot draw lines or points.
   - c) Triangles can approximate any surface when used in large numbers, and GPUs are optimized for triangle processing.
   - d) Using triangles ensures that no clipping is ever needed during rendering.

4. **True/False:** If you want to draw a quadrilateral (four-sided polygon) in modern OpenGL, you must break it into two triangles first (or use an OpenGL function that does so), because OpenGL's core profile does not directly support drawing general quads.

5. **Multiple Choice:** Consider the classic stages of the pipeline. Which **pair of pipeline stages** can **both** be programmed by the developer (via shaders) in modern OpenGL's programmable pipeline?
   - a) Primitive Assembly and Clipping stages.
   - b) Vertex Processing and Fragment Processing stages.
   - c) Rasterization and Framebuffer Output stages.
   - d) The application stage and the depth-testing stage.

6. **Multiple Choice:** Regarding **coordinate systems** in OpenGL, which is correct?
   - a) After the vertex shader runs, each vertex is typically in **clip coordinates**, which are then divided by \(w\) to yield **normalized device coordinates (NDC)**.
   - b) Object (model) coordinates and world coordinates are the same thing in all cases.
   - c) The camera (eye) coordinate system places the camera at \((1,1,1)\) looking toward the origin by default.
   - d) Screen (window) coordinates range from \(-1\) to \(+1\) in X and Y by convention.

7. **Multiple Choice:** Which of the following describes a difference between **immediate mode** and **retained mode** graphics in OpenGL?
   - a) **Immediate mode:** send each vertex with a function call (e.g., `glVertex` calls); **Retained mode:** store vertex data in buffers on the GPU and draw from those stored data.
   - b) **Immediate mode** retains all vertices on the GPU for reuse, whereas **retained mode** sends vertices each time.
   - c) In modern OpenGL, you typically use immediate mode for performance, and retained mode only for compatibility.
   - d) There is no real difference; these are two names for the same OpenGL mechanism.

8. **Multiple Choice:** In a modern OpenGL **example program**, which of these steps is **not** necessary?
   - a) Generating one or more buffer objects (like VBOs) and uploading vertex data into them (e.g., with `glBufferData`).
   - b) Setting up vertex attribute pointers (via `glVertexAttribPointer`) to describe how vertex data is laid out in the buffer.
   - c) Explicitly calling a function to swap the front and back buffers if you are using double buffering (e.g., `glSwapBuffers` or letting GLUT handle it via `glutSwapBuffers`).
   - d) Directly calling a function to draw pixels on the screen for each frame (e.g., plotting each pixel in a loop), instead of using OpenGL's draw call (like `glDrawArrays`).

9. **Multiple Choice:** What is the purpose of a **Vertex Buffer Object (VBO)** in OpenGL?
   - a) To store vertex data (positions, colors, normals, etc.) on the GPU for efficient drawing.
   - b) To store compiled shader programs on the GPU.
   - c) To hold the rendered image (pixel data) before sending it to the screen.
   - d) To group multiple shader programs together for switching between them quickly.

10. **Multiple Choice:** What is a **Vertex Array Object (VAO)**?
    - a) An array that holds all the vertices of a single 3D model in system (CPU) memory.
    - b) An OpenGL object that encapsulates the state needed to supply vertex data — for example, it stores the associations between VBOs and vertex attribute pointers (effectively, a VAO is a container for one or more VBOs and their configuration).
    - c) A special type of shader program for array-based calculations.
    - d) A deprecated feature from legacy OpenGL replaced by VBOs.

11. **True/False:** Calling `glBufferSubData()` allows you to update a subset of data in an existing buffer object without reallocating the entire buffer.

12. **Multiple Choice:** In an OpenGL program using GLUT, what is typically the **minimum set of callback functions** you should register to ensure something gets drawn on the screen and the window is responsive?
    - a) Only a reshape callback (to adjust the viewport).
    - b) Only a keyboard callback (so the program can exit on a key press).
    - c) A display callback (for rendering), and usually an idle or timer callback to continuously redisplay, plus perhaps an input callback for interactivity (keyboard and/or mouse).
    - d) No callbacks at all – you can simply put your drawing code after `glutMainLoop()` and it will execute.

13. **Scenario (Short Answer):** You draw a triangle using OpenGL, but it appears **white** even though you intended it to be red. Assuming lighting is not enabled (so the color should come directly from your vertex data or fragment shader), list two possible reasons in your OpenGL program that could result in the triangle showing up as white.

14. **Scenario (Short Answer):** Imagine you have configured a VBO and VAO for a triangle's vertices and colors, and written appropriate shaders. The triangle should be visible, but you see only a blank screen. What are some **steps to debug** this issue? Name at least two things you would check or try (e.g., state settings, functions called, etc.) to find the problem.

15. **Multiple Choice:** During the fragment processing stage, multiple fragments might map to the same pixel, especially when 3D objects overlap on screen. How does OpenGL decide which fragment's color gets written to the framebuffer in such cases?
    - a) It always takes the fragment that was generated last (from the primitive drawn last) and overwrites earlier fragments (painter's algorithm by default).
    - b) It uses the **depth buffer** (Z-buffer) to keep track of fragment depths; only the fragment with the closest depth passes the depth test and is drawn, hiding fragments behind it (assuming depth testing is enabled).
    - c) It averages the colors of all fragments for that pixel to produce a smooth blending by default.
    - d) It randomly picks one of the fragments if more than one occupy the same pixel.
