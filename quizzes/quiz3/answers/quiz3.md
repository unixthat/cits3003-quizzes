# CITS3003 Computer Graphics - Quiz 3 Answers

## Part A: True/False Answers and Explanations

1. **True**
   A fragment is indeed a candidate pixel produced during rasterization. It contains interpolated data from the vertices, including color, depth, texture coordinates, and other attributes. The fragment shader processes this data to determine the final pixel color and other properties.

2. **True**
   The old fixed-function pipeline had built-in matrix stacks and transformation functions like glMatrixMode, glTranslatef, and glRotatef. These are not available in modern OpenGL (core profile) where you must implement transformations using shaders and matrices yourself.

3. **True**
   The winding order (clockwise vs counter-clockwise) of a triangle's vertices as seen from the camera determines whether it's considered a front face or back face. This is used for back-face culling, where back faces can be discarded to improve performance.

4. **True**
   glDrawArrays(GL_TRIANGLES, ...) can render multiple triangles from a vertex buffer. It takes the vertices in sequence, three at a time, to form triangles. So if you have 9 vertices in your buffer, it will render 3 triangles.

5. **True**
   In a typical vertex shader, gl_Position is computed by multiplying the vertex position by the Model-View-Projection (MVP) matrix. This transforms the vertex from model space through world space and view space to clip space.

6. **True**
   After the perspective divide, normalized device coordinates (NDC) must be in the range [-1, 1] for all components to be visible. The point (2, 2, 0.5, 1) would become (2, 2, 0.5) in NDC after dividing by w=1, which is outside the [-1, 1] range for x and y, so it would be clipped.

7. **False**
   The aspect ratio in a perspective projection refers to the ratio of width to height of the viewport or window, not the field of view angles. It's used to ensure the projection doesn't distort the image.

8. **True**
   A shear transformation can be represented by a matrix and is indeed an affine transform. Like other affine transforms (translation, rotation, scaling), it preserves parallel lines and ratios of distances along parallel lines.

9. **True**
   In OpenGL's default coordinate system, the near plane distance must be positive for perspective projections. This is because the near plane represents the closest point to the camera that can be rendered, and distances are measured along the negative Z-axis.

10. **True**
    The fragment shader can write to gl_FragDepth to override the default interpolated depth value. This is useful for effects like depth-based fog or when you need to modify the depth value for special rendering effects.

## Part B: Multiple Choice Answers and Explanations

1. **A. (0.5, 1.2, 0.3, 1)**
   In clip coordinates, a point is inside the view volume if -1 ≤ x/w, y/w, z/w ≤ 1. For point A: (0.5, 1.2, 0.3, 1) => y = 1.2 is outside the range [-1,1], so this point lies outside and would be clipped. The other points are all within the valid range.

2. **A. World coordinates are a common reference frame**
   World coordinates refer to a common scene reference frame. After each object's model transform, its vertices are in world space, where they share a global coordinate system. This is where all objects in the scene are positioned relative to each other.

3. **A. -1 to +1**
   In OpenGL, normalized device coordinate (NDC) depth ranges from -1 (at the near plane) to +1 (at the far plane) before being mapped to the depth buffer. This differs from DirectX's 0 to 1 NDC depth range.

4. **A. Linearly interpolates vertex attributes**
   During rasterization, the GPU linearly interpolates the outputs of the vertex shader (such as colors, texture coordinates, normals, etc.) across the surface of the primitive. These interpolated values become the inputs to the fragment shader for each fragment.

5. **A. Declare an output in the vertex shader and a matching input**
   To pass data from the vertex shader to the fragment shader, you declare an output in the vertex shader (in old terminology, a "varying") and a matching input in the fragment shader. The GPU interpolates that output across the primitive.

6. **A. Enable depth testing**
   Enabling depth testing (glEnable(GL_DEPTH_TEST)) is required to use the depth buffer to occlude fragments behind others. If depth test is off, the GPU won't reject fragments based on depth and you may see closer objects overwritten by farther ones.

7. **A. glutSwapBuffers()**
   To display the rendered image in a double-buffered context, you call the buffer swap function (e.g., glutSwapBuffers in GLUT) at the end of rendering each frame. This swaps the back buffer (just drawn) with the front buffer (displayed).

8. **A. vec3**
   In GLSL, a 3-component float vector is declared as vec3. (There is no built-in type called float3 or vector3 in GLSL – those are non-GLSL notations. mat3 is a 3×3 matrix type, not a 3D vector.)

9. **A. The memory buffer containing the image**
   The framebuffer is the memory buffer containing the image that will be displayed. It typically includes a color buffer (for pixel colors) and can include depth and stencil buffers. After rendering, the color buffer part of the framebuffer is what's shown on screen.

10. **A. Is a built-in variable that the fragment shader writes to**
    In legacy GLSL (before shader #version 330 core), gl_FragColor is a built-in variable that the fragment shader writes to set the output color of the fragment. (In modern GLSL, you would declare your own output variable, but the concept is the same.) 