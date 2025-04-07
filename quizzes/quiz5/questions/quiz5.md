# CITS3003 Computer Graphics - Quiz 5

## Instructions
- This is a 30-minute closed-book quiz
- Answer all questions in the spaces provided
- Each question is worth equal marks
- Total marks: 20

## Part A: True/False (10 marks)
Mark each statement as True or False. Write your answer in the space provided.

1. In OpenGL, the depth buffer is used to determine which fragments should be drawn when objects overlap.
   Answer: _____

2. The perspective projection matrix is always a 4x4 matrix that transforms points from eye space to clip space.
   Answer: _____

3. In modern OpenGL, shaders are written in GLSL (OpenGL Shading Language) and must be compiled before use.
   Answer: _____

4. The view matrix transforms vertices from world space to eye space, where the camera is at the origin looking down the negative z-axis.
   Answer: _____

5. In OpenGL, the stencil buffer can be used to create complex masking effects and control which fragments are drawn.
   Answer: _____

6. The model matrix transforms vertices from model space (local to the object) to world space.
   Answer: _____

7. In a typical OpenGL program, the projection matrix should be recalculated whenever the window is resized.
   Answer: _____

8. The viewport transformation is the final step in the graphics pipeline that maps normalized device coordinates to window coordinates.
   Answer: _____

9. In modern OpenGL, vertex attributes are stored in Vertex Buffer Objects (VBOs) and accessed through Vertex Array Objects (VAOs).
   Answer: _____

10. The perspective division (dividing by w) occurs after the vertex shader and before the fragment shader.
    Answer: _____

## Part B: Multiple Choice (10 marks)
Circle the one best answer for each question.

1. Which of these is NOT a typical stage in the OpenGL graphics pipeline?
   - [ ] A. Vertex Shader
   - [ ] B. Rasterization
   - [ ] C. Fragment Shader
   - [ ] D. Memory Management

2. What is the purpose of the w component in homogeneous coordinates?
   - [ ] A. To represent time in animations
   - [ ] B. To distinguish between points and vectors
   - [ ] C. To store texture coordinates
   - [ ] D. To represent color intensity

3. In a perspective projection, what happens to parallel lines in the scene?
   - [ ] A. They remain parallel in the projected image
   - [ ] B. They converge to a vanishing point
   - [ ] C. They become curved
   - [ ] D. They disappear

4. Which of these is NOT a valid uniform variable type in GLSL?
   - [ ] A. mat4
   - [ ] B. vec3
   - [ ] C. sampler2D
   - [ ] D. array

5. What is the purpose of the stencil buffer in OpenGL?
   - [ ] A. To store depth values
   - [ ] B. To store color values
   - [ ] C. To control which fragments are drawn
   - [ ] D. To store texture coordinates

6. In modern OpenGL, what is the correct way to handle window resizing?
   - [ ] A. Automatically handled by OpenGL
   - [ ] B. Update the viewport with glViewport and recalculate the projection matrix
   - [ ] C. Recreate the window
   - [ ] D. Ignore the resize event

7. Which statement about the Model-View-Projection (MVP) matrix is correct?
   - [ ] A. It transforms vertices from model space directly to screen space
   - [ ] B. It combines the model transform, view transform, and projection transform into one matrix
   - [ ] C. It's only used in the fragment shader
   - [ ] D. It's automatically provided by OpenGL

8. In modern OpenGL, what is the purpose of a Vertex Array Object (VAO)?
   - [ ] A. To store vertex data
   - [ ] B. To store the state of vertex attribute configurations
   - [ ] C. To store shader programs
   - [ ] D. To store texture data

9. Which of the following is NOT a valid operation in affine geometry?
   - [ ] A. Adding a vector to a point
   - [ ] B. Subtracting two points to get a vector
   - [ ] C. Adding two points
   - [ ] D. Scaling a vector

10. In a typical OpenGL program, which of these operations would you typically do LAST in your rendering loop?
    - [ ] A. Clear the buffers
    - [ ] B. Update uniform variables
    - [ ] C. Draw the geometry
    - [ ] D. Swap the buffers 