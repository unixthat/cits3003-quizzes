# CITS3003 Computer Graphics - Quiz 3

## Instructions
- This is a 30-minute closed-book quiz
- Answer all questions in the spaces provided
- Each question is worth equal marks
- Total marks: 20

## Part A: True/False (10 marks)
Mark each statement as True or False. Write your answer in the space provided.

1. A fragment in OpenGL corresponds to a candidate pixel produced during rasterization, containing color, depth, and other interpolated data.
   Answer: _____

2. The old fixed-function OpenGL pipeline had built-in concepts like glMatrixMode, glTranslatef, and glRotatef for transformations, but these are not available in the modern core-profile pipeline.
   Answer: _____

3. In OpenGL, the winding order of a triangle's vertices (clockwise vs counter-clockwise as seen from the camera) can determine whether the triangle is considered a front-face or back-face.
   Answer: _____

4. A single call to glDrawArrays(GL_TRIANGLES, ...) with a proper vertex buffer can render multiple triangles.
   Answer: _____

5. In a typical vertex shader, you compute gl_Position by multiplying the vertex's position by the Model-View-Projection matrix.
   Answer: _____

6. If a vertex's clip-space coordinates after the projection transform are (2, 2, 0.5, 1), that vertex will be outside the normalized device coordinate (NDC) cube and will be clipped or discarded.
   Answer: _____

7. The aspect ratio in a perspective projection refers to the ratio of the field of view angles in horizontal vs vertical directions.
   Answer: _____

8. A shear transformation can be represented by a matrix and is considered an affine transform.
   Answer: _____

9. OpenGL's default coordinate system and view volume expect the near plane distance to be positive (greater than 0) for perspective projections.
   Answer: _____

10. The output of the fragment shader can include a depth value (gl_FragDepth) to override the default interpolated depth.
    Answer: _____

## Part B: Multiple Choice (10 marks)
Circle the one best answer for each question.

1. Clipping Volume: Which of these points (given in clip coordinates before perspective divide) would be completely outside the canonical view volume and thus get clipped? (Assume w is positive unless stated otherwise.)
   - [ ] A. (0.5, 1.2, 0.3, 1) – where x=0.5, y=1.2
   - [ ] B. (-0.9, -0.5, 0.2, 1) – where x=-0.9, y=-0.5
   - [ ] C. (1.5, 0.0, 0.5, 2) – after divide this is (0.75, 0.0, 0.25)
   - [ ] D. (0.0, -0.7, -0.8, 1) – within range

2. Coordinate Systems: Which statement best describes world coordinates in the context of computer graphics?
   - [ ] A. World coordinates are a common reference frame in which all objects in the scene are placed (the result after each object's model transform).
   - [ ] B. World coordinates are the coordinates relative to the camera's position and orientation.
   - [ ] C. World coordinates are the 2D pixel coordinates on the screen.
   - [ ] D. World coordinates refer to the object's local coordinate system before any transforms.

3. In OpenGL, normalized device coordinate (NDC) depth ranges from:
   - [ ] A. -1 (at the near plane) to +1 (at the far plane)
   - [ ] B. 0 (at the near plane) to 1 (at the far plane)
   - [ ] C. -∞ to +∞
   - [ ] D. 0 to 255

4. During rasterization, the GPU:
   - [ ] A. Linearly interpolates vertex attributes across the primitive's surface
   - [ ] B. Computes lighting for each fragment
   - [ ] C. Performs depth testing
   - [ ] D. All of the above

5. To pass data from the vertex shader to the fragment shader, you:
   - [ ] A. Declare an output in the vertex shader and a matching input in the fragment shader
   - [ ] B. Use a uniform variable
   - [ ] C. Use a fragment shader variable in the vertex shader
   - [ ] D. Pass the data through gl_Position

6. To use the depth buffer for hidden surface removal, you must:
   - [ ] A. Enable depth testing with glEnable(GL_DEPTH_TEST)
   - [ ] B. Enable face culling with glEnable(GL_CULL_FACE)
   - [ ] C. Set the depth mask to false
   - [ ] D. Enable blending

7. To display the rendered image in a double-buffered context, you call:
   - [ ] A. glutSwapBuffers() (or equivalent)
   - [ ] B. glFlush()
   - [ ] C. glFinish()
   - [ ] D. glClear()

8. In GLSL, a 3-component float vector is declared as:
   - [ ] A. vec3
   - [ ] B. float3
   - [ ] C. vector3
   - [ ] D. mat3

9. The framebuffer is:
   - [ ] A. The memory buffer containing the image that will be displayed
   - [ ] B. A data structure for storing scene objects
   - [ ] C. A queue of GPU commands
   - [ ] D. A buffer for keyboard input

10. In legacy GLSL (before shader #version 330 core), gl_FragColor:
    - [ ] A. Is a built-in variable that the fragment shader writes to set the output color
    - [ ] B. Contains the texture color by default
    - [ ] C. Is read-only
    - [ ] D. Is only used in vertex shaders 