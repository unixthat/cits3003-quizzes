# CITS3003 Computer Graphics - Quiz 2

## Instructions
- This is a 30-minute closed-book quiz
- Answer all questions in the spaces provided
- Each question is worth equal marks
- Total marks: 20

## Part A: True/False (10 marks)
Mark each statement as True or False. Write your answer in the space provided.

1. Adding two point positions (e.g., coordinates of two distinct points) together yields another meaningful point in space.
   Answer: _____

2. The Model matrix is used to transform coordinates from an object's local model space into the common world coordinate space.
   Answer: _____

3. The View matrix (camera transform) is generally the inverse of the camera's world transform – effectively converting world coordinates to a camera-centric coordinate system with the camera at the origin.
   Answer: _____

4. Using a negative scale factor (e.g., scaling by -1 on an axis) will mirror or reflect an object across the corresponding axis.
   Answer: _____

5. In a perspective projection, the farther an object is from the camera, the smaller it appears on the projected image.
   Answer: _____

6. A uniform scale (scaling an object equally on all axes) will distort the object's shape and angles.
   Answer: _____

7. In a 4×4 homogeneous transformation matrix, the rightmost column (excluding the bottom element) represents the translation components of the transform.
   Answer: _____

8. Event-driven input mode (as used in interactive graphics programs) utilizes an event queue and callback functions, rather than forcing the program to halt and wait for each input.
   Answer: _____

9. By default, OpenGL will render both the front and back faces of polygons (no back-face culling is active unless explicitly enabled).
   Answer: _____

10. In modern OpenGL, we still use glBegin/glEnd and glVertex calls to submit geometry to the pipeline.
    Answer: _____

## Part B: Multiple Choice (10 marks)
Circle the one best answer for each question.

1. To rotate an object about an arbitrary point (pivot) in space (not at the origin), one typically must:
   - [ ] A. Translate the object so that the pivot point aligns with the origin, then apply the rotation, then translate back to the original location.
   - [ ] B. Directly apply the rotation about that pivot in one step; no translation is ever needed for off-origin rotations.
   - [ ] C. Rotate the world instead of the object.
   - [ ] D. Convert the rotation to Euler angles first.

2. In GLSL (OpenGL Shading Language), a uniform variable is one that:
   - [ ] A. is set by the application and remains constant for all vertices/fragments for a draw call (e.g., a single overall transformation matrix or color).
   - [ ] B. varies for each vertex (like position inputs).
   - [ ] C. is an output from the fragment shader to the framebuffer.
   - [ ] D. has the same value across all applications (a built-in constant).

3. In the graphics pipeline, what is the perspective divide?
   - [ ] A. The step where clip-space coordinates (x,y,z,w) are divided by w to produce normalized device coordinates.
   - [ ] B. Splitting the view frustum into near and far sections for LOD (level of detail).
   - [ ] C. Halving the field-of-view angle to simulate perspective.
   - [ ] D. A special matrix that handles perspective projection.

4. Input Events: Which of the following is NOT typically an event that a graphics application's window system would handle?
   - [ ] A. Mouse button press or move event
   - [ ] B. Window resize or refresh event
   - [ ] C. Keyboard key press event
   - [ ] D. "File download complete" event from a web browser

5. During rasterization in the pipeline:
   - [ ] A. The vertices of a primitive are connected to form edges.
   - [ ] B. The primitive is converted into a set of fragments (potential pixels) covering its area, each with interpolated attributes (color, depth, etc.).
   - [ ] C. The GPU computes lighting for each vertex.
   - [ ] D. The depth test is performed on each triangle before generating fragments.

6. What is the role of glVertexAttribPointer (and the associated calls) in modern OpenGL?
   - [ ] A. It specifies how vertex data is laid out in memory (in a VBO) and connects it to a vertex shader attribute, so the GPU knows how to fetch vertex attributes.
   - [ ] B. It issues a draw call for vertices stored in an array.
   - [ ] C. It sets the pointer speed for mouse input (unrelated to graphics).
   - [ ] D. It swaps the front and back framebuffers after drawing.

7. Transforms: Which of the following transformations is NOT an affine transform (i.e., does not preserve straight lines and parallelism)?
   - [ ] A. Rotation
   - [ ] B. Non-uniform scaling
   - [ ] C. Translation
   - [ ] D. Perspective projection

8. In a GLUT program, which function call is used to enter the event-processing loop, handing control over to GLUT to handle rendering and input callbacks?
   - [ ] A. glutMainLoop()
   - [ ] B. glutPostRedisplay()
   - [ ] C. glutInit()
   - [ ] D. glutSwapBuffers()

9. Which pair of transformations are inverses of each other?
   - [ ] A. Translation by (+X) and translation by (-X)
   - [ ] B. Rotation by +30° about Y and rotation by +30° about X
   - [ ] C. Scaling by 2 in X and scaling by 2 in Y
   - [ ] D. Shearing in X and a rotation in Z

10. What is the primary purpose of a depth buffer (Z-buffer) in rendering?
    - [ ] A. To store the depth (distance) of each fragment/pixel and ensure that for overlapping objects, only the closest surface's fragment is ultimately drawn (hidden surface removal).
    - [ ] B. To hold the color of each pixel until display.
    - [ ] C. To double the frame rate by storing an extra frame.
    - [ ] D. To count how many fragments have been processed. 