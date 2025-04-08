# CITS3003 Computer Graphics - Quiz 2 Answers

## Part A: True/False Answers and Explanations

1. **False**
   Adding two point positions isn't a meaningful operation in affine geometry. You can average points or subtract to get a vector, but simply adding coordinates of two distinct points doesn't give a useful result (unlike adding a point and a vector, which gives a new point). In other words, "point + point" is not defined in the usual vector-space sense – you typically only add vectors or do point minus point = vector.

2. **True**
   The Model matrix (sometimes called model-to-world transform) moves coordinates from an object's local space into the shared world coordinate system. For example, it can position, scale, and orient a model within the world. (It's the transform representing the object's pose in world coordinates.)

3. **True**
   The View matrix is indeed the inverse of the camera's world transform. If a camera in world space is at position (x,y,z) and rotated with some orientation, applying the view matrix will translate by (-x,-y,-z) and apply the opposite rotation, effectively moving the world such that the camera ends up at the origin looking down -Z. This converts world coordinates to eye/camera-space coordinates.

4. **True**
   A negative scale factor will reflect (mirror) the object across the corresponding axis. For instance, scaling an object by -1 in X will flip it left-right. Negative scaling on an odd number of axes can also change the winding (which affects face culling orientation). This is a standard way to create mirror images of geometry.

5. **True**
   This is describing the basic property of perspective projection: objects farther from the camera project to a smaller image on the near plane compared to closer objects of the same size. That's why, for example, in a perspective view, distant buildings look smaller than a nearer building of identical height.

6. **False**
   A uniform scale (same factor on all axes) will enlarge or shrink an object but preserve its shape proportions and angles. It does not distort the shape – it's basically like zooming in or out uniformly. (Non-uniform scaling, where axes have different factors, will distort shapes unless the object is symmetric.)

7. **True**
   In a standard 4×4 transformation matrix (in homogeneous coordinates), the matrix can be viewed as: the upper-left 3×3 part handles rotation/scale/shear, the rightmost 3×1 column handles translation (x, y, z shifts), and the bottom row is usually [0 0 0 1] for an affine transform. So the elements in that rightmost column (except the very bottom which is typically 1) are the translation distances.

8. **True**
   In an event-driven approach, input devices generate events that get placed in a queue, and the program uses callbacks to handle them asynchronously. The program does not stop and wait for input at specific points; instead, it continually runs an event loop (often managed by a library like GLUT/GLFW) and invokes your callback functions when events occur. (By contrast, in request mode or a simple console program, the code might block waiting for input – not how interactive graphics main loops work.)

9. **True**
   By default, OpenGL does not perform back-face culling. Unless you enable culling (with glEnable(GL_CULL_FACE) and set a winding order), OpenGL will rasterize both front and back faces of polygons. So the statement is true: initially both faces are rendered. (With culling turned on, typically back faces – those facing away from the camera – are not drawn.)

10. **False**
    Modern OpenGL (core profile) does not use the old glBegin/glEnd immediate mode. All geometry must be sent through vertex buffers/arrays. The old immediate mode functions are deprecated and unavailable in core contexts. So we no longer issue vertices with glVertex one by one in modern OpenGL. (We prepare data in buffers and use glDraw* calls instead.)

## Part B: Multiple Choice Answers and Explanations

1. **A. Translate to origin, rotate, translate back**
   To rotate around an arbitrary point (pivot), you translate the object so that the pivot aligns with the origin (this makes that point the center of rotation), then perform the rotation, then translate back. This composite is required because basic rotation matrices only rotate about the origin. Option B is wrong because a single rotation matrix on its own always rotates about the origin of the current coordinate system (not an arbitrary point).

2. **A. is set by the application and remains constant**
   A uniform in GLSL is a variable that the application (CPU side) sets and which remains constant for all vertices/fragments for that rendering call (or until changed). For example, transformation matrices, light parameters, or an object's solid color are often passed as uniforms. They do not change per-vertex or per-fragment automatically. (Option B describes attributes varying per vertex; uniform is the opposite of that. Option C is describing a fragment shader output like gl_FragColor, not a uniform. Option D is nonsense.)

3. **A. The step where clip-space coordinates are divided by w**
   The perspective divide is the operation of dividing the clip-space coordinates (x, y, z) by the w component to get normalized device coordinates (NDC). After the projection matrix transforms a vertex, coordinates are in homogeneous form (x,y,z,w); then the GPU divides by w to yield the actual 3D position in NDC (where -1 ≤ x,y,z ≤ 1 if inside the frustum). This step is what produces the true perspective effect (objects' x,y shrink with distance because far objects have larger w before divide).

4. **D. "File download complete" event**
   "File download complete" is not a graphics/window system event; it's related to networking or application logic outside the scope of typical GUI input. A, B, and C are all normal event types in a graphics application: mouse events, window events, keyboard events are handled via the windowing system and callbacks.

5. **B. The primitive is converted into fragments**
   Rasterization is the process of converting a primitive (like a triangle) into a set of fragments covering the appropriate pixels. During rasterization, the GPU interpolates vertex attributes (such as vertex colors, texture coordinates, normals, depth) across the triangle's area to produce fragment data for each covered pixel. Lighting per vertex would have happened earlier (or will happen per fragment later), and depth testing happens after fragment generation (during fragment processing stage), not during rasterization itself.

6. **A. It specifies how vertex data is laid out**
   glVertexAttribPointer (used along with glEnableVertexAttribArray and binding a VBO) tells OpenGL how to interpret the array of vertex data in memory and associate it with a shader's vertex attribute. For example, it might specify that the "position" attribute is 3 floats starting at offset 0 of the bound VBO, with a certain stride. This is crucial for feeding vertex data to the vertex shader. (It does not issue draw calls itself, nor relate to swapping buffers or input devices.)

7. **D. Perspective projection**
   A perspective projection is not affine. Affine transformations (rotation, translation, scaling, shear – combinations of those) preserve parallel lines and have linear properties (except for the added translation). Perspective projection, on the other hand, makes parallel lines converge and involves a non-linear division by w. So among the options, Rotation, Scaling, Translation are all affine transforms, while Perspective is a projective transform (not affine).

8. **A. glutMainLoop()**
   glutMainLoop() enters the GLUT event-processing loop. It hands control over to GLUT, which will then call registered callbacks (display, idle, input, etc.) as events occur. This function typically never returns until the program exits. The other options are incorrect: glutPostRedisplay just flags a window to redraw, glutInit initializes GLUT, and glutSwapBuffers swaps the buffers (and is usually called within the display callback).

9. **A. Translation by (+X) and (-X)**
   A translation by (+X) and a translation by (-X) are inverse transformations. Doing one then the other results in no net change. (In general, the inverse of a translation is a translation in the opposite direction.) By contrast, rotations about different axes (B) do not undo each other; scaling vs translation (C) aren't inverses at all; and shear vs rotation (D) are entirely different operations (no simple inverse relationship, and in any case shearing is not the inverse of rotation).

10. **A. To store the depth of each fragment**
    A depth buffer stores depth values (distance from the camera or more formally the z-value in normalized device coordinates) for each pixel. When a new fragment is drawn, its depth is compared to the stored value; if it's closer (passes the depth test), it will overwrite the pixel (and update the depth value). This allows the renderer to automatically handle occlusion (closer objects obscure farther ones). It's unrelated to double buffering (that's the back buffer), and it doesn't count fragments; it also doesn't store color – color goes in the color buffer, not the depth buffer. 