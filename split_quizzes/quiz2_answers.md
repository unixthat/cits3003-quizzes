# Week 2 Quiz: Answer Key

1. **a) The vertex processing stage handles transforming vertices between coordinate systems (object space to camera space, etc.) and can perform per-vertex lighting or color computations.**
   - Explanation: The vertex processing stage (vertex shader) is responsible for transforming vertex positions and computing per-vertex attributes. Primitive assembly happens before fragment shading, rasterization generates fragments with interpolated attributes, and fragment processing includes various tests like depth testing.

2. **a) It is clipped or discarded before rasterization, so it won't appear in the final image.**
   - Explanation: Geometry outside the viewing volume is clipped before rasterization. This is an important optimization step that prevents unnecessary processing of fragments that wouldn't be visible anyway. The clipping stage removes or modifies primitives that extend beyond the view frustum.

3. **c) Triangles can approximate any surface when used in large numbers, and GPUs are optimized for triangle processing.**
   - Explanation: Triangles are used as the fundamental primitive because they can approximate any surface when tessellated into small enough pieces, and GPUs are highly optimized for processing triangles. While triangles do have nice properties like being always planar, that's not the primary reason for their use.

4. **True**
   - Explanation: Modern OpenGL (core profile) only supports points, lines, and triangles as basic primitives. To draw a quad, you must either break it into two triangles yourself or use a helper function that does this conversion for you. This is because triangles are the fundamental building block for all polygon rendering.

5. **b) Vertex Processing and Fragment Processing stages.**
   - Explanation: In modern OpenGL's programmable pipeline, the vertex shader (Vertex Processing) and fragment shader (Fragment Processing) are the two main stages that developers can program. The other stages like primitive assembly, clipping, rasterization, and framebuffer operations are fixed-function stages that cannot be directly programmed.

6. **a) After the vertex shader runs, each vertex is typically in clip coordinates, which are then divided by w to yield normalized device coordinates (NDC).**
   - Explanation: The vertex shader outputs clip coordinates, which then undergo perspective division (dividing by w) to produce normalized device coordinates. The other options are incorrect: model and world coordinates are distinct, the camera is at (0,0,0) by default, and screen coordinates are in pixels.

7. **a) Immediate mode: send each vertex with a function call (e.g., glVertex calls); Retained mode: store vertex data in buffers on the GPU and draw from those stored data.**
   - Explanation: This correctly describes the key difference between immediate and retained mode. Immediate mode involves sending vertices one at a time through function calls, while retained mode stores vertex data in GPU buffers for efficient reuse.

8. **d) Directly calling a function to draw pixels on the screen for each frame (e.g., plotting each pixel in a loop), instead of using OpenGL's draw call (like glDrawArrays).**
   - Explanation: In modern OpenGL, you never directly plot pixels in a loop. Instead, you use OpenGL's drawing commands (like glDrawArrays) to render primitives. The other steps (buffer objects, attribute pointers, buffer swapping) are all necessary parts of modern OpenGL rendering.

9. **a) To store vertex data (positions, colors, normals, etc.) on the GPU for efficient drawing.**
   - Explanation: VBOs are used to store vertex data (positions, colors, normals, texture coordinates, etc.) in GPU memory for efficient rendering. They are not used for shader storage, framebuffer storage, or shader program management.

10. **b) An OpenGL object that encapsulates the state needed to supply vertex data — for example, it stores the associations between VBOs and vertex attribute pointers.**
    - Explanation: A VAO stores the state of vertex attribute configurations and their associations with VBOs. It acts as a container that remembers how vertex data is organized and which VBOs to use for each attribute.

11. **True**
    - Explanation: glBufferSubData allows you to update a portion of an existing buffer object's data without reallocating or recreating the entire buffer. This is useful for updating dynamic data efficiently.

12. **c) A display callback (for rendering), and usually an idle or timer callback to continuously redisplay, plus perhaps an input callback for interactivity.**
    - Explanation: At minimum, you need a display callback to render content. For animation or continuous updates, you typically also need an idle or timer callback. Input callbacks are needed for interactivity. The other options would not provide sufficient functionality.

13. **Answer:** Two possible reasons for a white triangle when red was intended:
    1. The vertex colors or uniform color values in the shader program are not properly set or bound.
    2. The vertex attribute pointers for color data are not properly configured, or the color attribute is not enabled.

14. **Answer:** Steps to debug a blank screen with an invisible triangle:
    1. Check if the clear color is different from the triangle color (they might be the same, making the triangle invisible).
    2. Verify that the viewport dimensions are correct and match the window size.
    3. Ensure the vertex positions are within the visible range (-1 to 1 in NDC).
    4. Check if the VAO is bound before drawing.
    5. Verify that the shader program is properly compiled, linked, and in use.

15. **b) It uses the depth buffer (Z-buffer) to keep track of fragment depths; only the fragment with the closest depth passes the depth test and is drawn, hiding fragments behind it.**
    - Explanation: When depth testing is enabled, OpenGL uses the depth buffer to determine which fragments are visible. Each fragment's depth is compared to the stored depth value, and only closer fragments pass the test and get drawn. This automatically handles hidden surface removal.
