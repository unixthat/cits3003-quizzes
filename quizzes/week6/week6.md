# CITS3003 Computer Graphics - Week 6 Quiz Answers

## Part A: True/False (10 marks)

1. Shadow mapping is a technique that renders the scene from the light's perspective to create a depth map used for determining shadows.
   Answer: **True**
   Explanation: Shadow mapping works by rendering the scene from the light's viewpoint to create a depth map, which is then used to determine whether points in the scene are in shadow.

2. In modern OpenGL, the stencil buffer can be used to limit rendering to specific regions of the screen.
   Answer: **True**
   Explanation: The stencil buffer can be used to mask rendering to specific regions of the screen, which is useful for effects like portals, mirrors, or UI elements.

3. The depth buffer (z-buffer) algorithm always produces correct results for transparent objects without any additional processing.
   Answer: **False**
   Explanation: The depth buffer alone cannot correctly handle transparent objects. Additional techniques like depth sorting or alpha blending are required for proper transparency rendering.

4. Frame buffer objects (FBOs) in OpenGL allow rendering to textures or other off-screen buffers.
   Answer: **True**
   Explanation: FBOs allow rendering to textures or other off-screen buffers, which is useful for techniques like post-processing, shadow mapping, and deferred shading.

5. Post-processing effects in OpenGL are typically implemented by rendering a full-screen quad with a fragment shader.
   Answer: **True**
   Explanation: Post-processing effects are commonly implemented by rendering a full-screen quad with a fragment shader that processes the previously rendered scene.

## Part B: Multiple Choice (10 marks)

1. What is the main advantage of using **shadow mapping** for rendering shadows?
   Answer: **C**
   Explanation: Shadow mapping is relatively simple to implement and efficient for hard shadows, though it can produce artifacts like shadow acne and aliasing.

2. Which buffer in OpenGL is used to store the **stencil test** results?
   Answer: **B**
   Explanation: The stencil buffer stores the results of the stencil test, which can be used to control which parts of the screen are rendered to.

3. What is the purpose of the **depth buffer** (z-buffer) in OpenGL?
   Answer: **B**
   Explanation: The depth buffer stores the depth (z-value) of each pixel and is used to determine which objects are visible at each pixel.

4. How are **transparent objects** typically rendered in OpenGL?
   Answer: **B**
   Explanation: Transparent objects are typically rendered after opaque objects, sorted by distance from the camera, to ensure correct blending.

5. What is a **Frame Buffer Object (FBO)** in OpenGL?
   Answer: **B**
   Explanation: An FBO is a collection of buffers (color, depth, stencil) that can be used as a rendering target, allowing for off-screen rendering and post-processing.

6. Which technique is commonly used for **implementing post-processing effects**?
   Answer: **A**
   Explanation: Post-processing effects typically use multiple render passes with FBOs, where the scene is first rendered to a texture, then processed by a fragment shader.

7. What is the purpose of **multiple render targets (MRT)** in OpenGL?
   Answer: **B**
   Explanation: MRT allows a fragment shader to output multiple values to different color buffers simultaneously, which is useful for techniques like deferred shading.

8. How does **deferred shading** differ from traditional forward rendering?
   Answer: **B**
   Explanation: Deferred shading stores geometry information (position, normal, etc.) in textures during the first pass, then performs lighting calculations in a separate pass.

9. What is the purpose of the **scissor test** in OpenGL?
   Answer: **A**
   Explanation: The scissor test allows clipping of rendering to a rectangular region of the screen, which is useful for UI elements or optimizing rendering.

10. Which statement about **HDR (High Dynamic Range)** rendering is correct?
    Answer: **B**
    Explanation: HDR rendering stores color values with higher precision and allows for a wider range of brightness, which is useful for realistic lighting effects. 