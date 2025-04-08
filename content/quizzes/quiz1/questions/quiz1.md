# CITS3003 Computer Graphics - Quiz 1

## Instructions
- This is a 30-minute closed-book quiz
- Answer all questions in the spaces provided
- Each question is worth equal marks
- Total marks: 20

## Part A: True/False (10 marks)
Mark each statement as True or False. Write your answer in the space provided.

1. Rendering is the process of taking a 3D scene (objects, geometry, etc.) and producing a 2D image (pixels) as output.
   Answer: _____

2. In OpenGL's synthetic camera model, the camera is fixed at the origin looking down the negative Z-axis, so moving the camera is achieved by transforming (moving/rotating) the entire world instead.
   Answer: _____

3. In an orthographic projection, a far object appears smaller on the image plane than a near object of the same size.
   Answer: _____

4. The CPU (not the GPU) performs the vertex transformations and fragment shading in the modern OpenGL pipeline.
   Answer: _____

5. OpenGL is a state machine API, meaning that most of its functions modify a global state that persists until changed (rather than returning new data directly).
   Answer: _____

6. Double-buffering (using a back buffer and front buffer) is used in rendering to prevent flicker/tearing, by drawing to an off-screen buffer then swapping it to display.
   Answer: _____

7. Clipping is the pipeline step that discards or trims any parts of primitives that lie outside the view frustum before rasterization.
   Answer: _____

8. In modern OpenGL (core profile), if you draw a 3D object without writing any shader code for lighting, the object will still appear with default realistic lighting applied by OpenGL.
   Answer: _____

9. In homogeneous coordinates, a point in 3D space is typically represented as (x, y, z, 1) while a direction vector is represented as (vx, vy, vz, 0).
   Answer: _____

10. Generally, applying a rotation to an object then a translation yields a different result than applying the translation first then the rotation (i.e. rotation and translation transformations do not commute).
    Answer: _____

## Part B: Multiple Choice (10 marks)
Circle the one best answer for each question.

1. Graphics Pipeline: Which of the following is NOT a typical stage in the OpenGL graphics pipeline?
   - [ ] A. Vertex Processing (Vertex Shader stage)
   - [ ] B. Clipping and Primitive Assembly
   - [ ] C. Rasterization
   - [ ] D. Garbage Collection

2. Pipeline Stages: In the modern OpenGL programmable pipeline, which stage is responsible for computing the color and other attributes for each pixel fragment (e.g. applying lighting and texturing per-pixel)?
   - [ ] A. Vertex Shader
   - [ ] B. Geometry Shader
   - [ ] C. Fragment Shader
   - [ ] D. Rasterizer

3. Camera Coordinates: OpenGL's default camera/view orientation can be described as:
   - [ ] A. Camera at the origin, looking toward -Z direction (into the screen), with +Y up and +X to the right.
   - [ ] B. Camera at the origin, looking toward +Z (out of the screen), with +Y up.
   - [ ] C. Camera at (0,0,1) looking toward the origin (0,0,0).
   - [ ] D. Camera at the origin, looking toward -Y (downwards), with +Z up.

4. To rotate an object about its own center and then move it to a new position, which sequence of transformations should be applied (in the correct order)?
   - [ ] A. Rotate the object about its center, then Translate it to the new position.
   - [ ] B. Translate the object to the new position, then Rotate about the world origin.
   - [ ] C. Translate to origin, then Rotate, then Translate back (to original position).
   - [ ] D. The order of applying Rotate or Translate doesn't matter for the final result.

5. Shaders: What is the primary role of a vertex shader in the OpenGL pipeline?
   - [ ] A. It determines the color of each pixel of a triangle.
   - [ ] B. It processes each vertex's attributes (position, normals, etc.), typically transforming vertex positions to clip space and passing data to the fragment stage.
   - [ ] C. It rasterizes primitives into fragments.
   - [ ] D. It handles user input events for each vertex.

6. If a triangle primitive partially lies outside the view frustum, what does the OpenGL pipeline do with it?
   - [ ] A. It discards (does not draw) the entire triangle.
   - [ ] B. It clips the triangle, removing the outside portion and using the inside portion that lies in the view.
   - [ ] C. It draws the triangle anyway, including parts off-screen.
   - [ ] D. It warps the triangle to fit entirely within the screen.

7. Homogeneous Coordinates: What is an important advantage of using homogeneous coordinates (x,y,z,w) in graphics transformations?
   - [ ] A. It allows representing translations as matrix multiplications (when w is used), which isn't possible with just 3×3 matrices in 3D.
   - [ ] B. It is required to represent rotations – rotations cannot be done with 3×3 matrices.
   - [ ] C. It doubles the number of coordinates for higher precision.
   - [ ] D. It makes perspective projection impossible to represent.

8. Calling glClear(GL_COLOR_BUFFER_BIT) in an OpenGL program will:
   - [ ] A. Fill the entire color buffer (the screen/background) with the current clear color (set by glClearColor).
   - [ ] B. Flash the window to white briefly.
   - [ ] C. Also automatically clear the depth buffer.
   - [ ] D. Do nothing unless depth testing is enabled.

9. GLUT Callbacks: Which GLUT function allows you to specify a function that will be called when the application is idle (no other events are occurring)?
   - [ ] A. glutDisplayFunc – to continuously redraw when idle.
   - [ ] B. glutIdleFunc – to set a callback for when the program is idle.
   - [ ] C. glutKeyboardFunc – to handle idle keyboard input.
   - [ ] D. glutMainLoop – which handles idle events automatically, no callback needed.

10. In modern OpenGL (core profile), how do you send the vertices of a triangle to the GPU for rendering (assuming a typical setup)?
    - [ ] A. Use glBegin(GL_TRIANGLES) and glVertex3f calls for each triangle vertex.
    - [ ] B. Store vertex data in a Vertex Buffer Object (VBO) and set up vertex attribute pointers, then issue a draw call.
    - [ ] C. Call a single function like glDrawTriangle(x1,y1,z1, x2,y2,z2, x3,y3,z3) with the coordinates.
    - [ ] D. OpenGL automatically knows the shape once you set the proper mode; no need to send vertex data explicitly. 