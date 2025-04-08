# CITS3003 Computer Graphics - Quiz 4

## Instructions
- This is a 30-minute closed-book quiz
- Answer all questions in the spaces provided
- Each question is worth equal marks
- Total marks: 20

## Part A: True/False (10 marks)
Mark each statement as True or False. Write your answer in the space provided.

1. A vector has magnitude and direction but no fixed position in space, whereas a point specifies a location in space.
   Answer: _____

2. The sum of a point and a vector is a point (applying a displacement vector to a point moves it to another point).
   Answer: _____

3. The difference between two point positions is a vector.
   Answer: _____

4. To change a point's coordinate representation from one coordinate frame to another, we must account for the difference in origins (translation) between the frames.
   Answer: _____

5. OpenGL's viewport transformation maps normalized device coordinates to window (screen pixel) coordinates.
   Answer: _____

6. In GLUT, the glutDisplayFunc callback is where you put your rendering code that draws the scene each time the window needs to be refreshed.
   Answer: _____

7. Sampling input mode (for input devices) means the program explicitly polls the device state (e.g., checking mouse position every frame) rather than waiting for an event.
   Answer: _____

8. In modern OpenGL, vertex attributes are stored in Vertex Buffer Objects (VBOs) and accessed through Vertex Array Objects (VAOs).
   Answer: _____

9. The perspective projection matrix transforms points from eye space to clip space, where the w component may be different from 1.
   Answer: _____

10. In a typical OpenGL program, the depth buffer is cleared at the start of each frame with glClear(GL_DEPTH_BUFFER_BIT).
    Answer: _____

## Part B: Multiple Choice (10 marks)
Circle the one best answer for each question.

1. Which of the following is NOT a valid operation in affine geometry?
   - [ ] A. Adding a vector to a point
   - [ ] B. Subtracting two points to get a vector
   - [ ] C. Adding two points
   - [ ] D. Scaling a vector

2. In a typical OpenGL program, which of these operations would you typically do LAST in your rendering loop?
   - [ ] A. Clear the buffers
   - [ ] B. Update uniform variables
   - [ ] C. Draw the geometry
   - [ ] D. Swap the buffers

3. Which statement about the Model-View-Projection (MVP) matrix is correct?
   - [ ] A. It transforms vertices from model space directly to screen space
   - [ ] B. It combines the model transform, view transform, and projection transform into one matrix
   - [ ] C. It's only used in the fragment shader
   - [ ] D. It's automatically provided by OpenGL

4. In modern OpenGL, what is the purpose of a Vertex Array Object (VAO)?
   - [ ] A. To store vertex data
   - [ ] B. To store the state of vertex attribute configurations
   - [ ] C. To store shader programs
   - [ ] D. To store texture data

5. Which of these is NOT a typical stage in the OpenGL graphics pipeline?
   - [ ] A. Vertex Shader
   - [ ] B. Rasterization
   - [ ] C. Fragment Shader
   - [ ] D. Memory Management

6. What is the purpose of the w component in homogeneous coordinates?
   - [ ] A. To represent time in animations
   - [ ] B. To distinguish between points and vectors
   - [ ] C. To store texture coordinates
   - [ ] D. To represent color intensity

7. In a perspective projection, what happens to parallel lines in the scene?
   - [ ] A. They remain parallel in the projected image
   - [ ] B. They converge to a vanishing point
   - [ ] C. They become curved
   - [ ] D. They disappear

8. Which of these is NOT a valid uniform variable type in GLSL?
   - [ ] A. mat4
   - [ ] B. vec3
   - [ ] C. sampler2D
   - [ ] D. array

9. What is the purpose of the stencil buffer in OpenGL?
   - [ ] A. To store depth values
   - [ ] B. To store color values
   - [ ] C. To control which fragments are drawn
   - [ ] D. To store texture coordinates

10. In modern OpenGL, what is the correct way to handle window resizing?
    - [ ] A. Automatically handled by OpenGL
    - [ ] B. Update the viewport with glViewport and recalculate the projection matrix
    - [ ] C. Recreate the window
    - [ ] D. Ignore the resize event 