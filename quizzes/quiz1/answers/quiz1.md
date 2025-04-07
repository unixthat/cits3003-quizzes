# CITS3003 Computer Graphics - Quiz 1 Answers

## Part A: True/False Answers and Explanations

1. **True**
   Rendering is indeed the process of converting a 3D scene into a 2D image (populating the pixel frame buffer). In graphics, you take object data (geometry, materials) and produce pixels – this is the essence of rendering.

2. **True**
   In OpenGL's camera model, the camera is conceptually at the origin looking down -Z. To simulate moving the camera, we typically apply the inverse transformation to the world. For example, moving the camera to the right is done by translating the world to the left.

3. **False**
   In an orthographic (parallel) projection, objects retain their apparent size regardless of depth. A far object will appear the same size as a near object of identical dimensions. (By contrast, in perspective projection, farther objects do appear smaller.) The statement given describes perspective behavior, not orthographic.

4. **False**
   In modern graphics, the GPU executes vertex transformations and fragment shading. The CPU sends commands and data, but the heavy per-vertex and per-fragment calculations are done on the GPU in parallel. (Older fixed-function OpenGL also used the GPU for these steps via the graphics pipeline hardware.)

5. **True**
   OpenGL is a state machine. Calls like setting the current color, enabling/disabling features, binding buffers, etc., modify internal states that remain until changed. This means the order of calls matters and there is a context of current state.

6. **True**
   In double-buffering, drawing is done to a back buffer while the front buffer is displayed. When a frame is ready, the buffers swap. This prevents flickering/tearing that would happen if you drew directly to the visible buffer. (The viewer only sees complete frames.)

7. **True**
   Clipping is the pipeline step that removes parts of primitives that lie outside the canonical view volume. For example, a triangle partly outside the camera view will be cut (clipped) to the portion inside the frustum before rasterization. This ensures only the visible portions generate fragments.

8. **False**
   Modern OpenGL (core profile) does not automatically apply any lighting or shading. If you don't write shader code for lighting, objects will appear using whatever your fragment shader does (e.g. a flat color). In the old fixed-function pipeline, OpenGL had a default lighting model you could enable, but in modern OpenGL you must implement lighting in shaders explicitly.

9. **True**
   In homogeneous coordinates we use a 4th component w. By convention, (x,y,z,1) represents a point (position) and (x,y,z,0) represents a direction vector. The w distinguishes points from vectors and allows translations to be done with matrix multiplication. (A vector has no fixed position, essentially like a point at infinity in projective space.)

10. **True**
    In general, rotation and translation do not commute. The order of transformations matters. For example, rotating an object then translating it yields a different result than translating then rotating (unless the translation is zero or the rotation is about an origin). So the statement "applying rotation then translation gives a different result than vice versa" is true – order is important.

## Part B: Multiple Choice Answers and Explanations

1. **D. Garbage Collection**
   Garbage Collection is not a stage in the graphics pipeline. The typical stages include: Vertex Processing (vertex shader, etc.), Primitive Assembly & Clipping, Rasterization, Fragment Processing (fragment shader), and per-fragment operations (like depth test). Garbage collection is unrelated to rendering (it's a memory management concept).

2. **C. Fragment Shader**
   The Fragment Shader stage computes the color and other attributes for each fragment (potential pixel). This is where per-pixel lighting, texturing, etc., are applied in the programmable pipeline. (The Vertex Shader operates per-vertex; the Rasterizer generates fragments but doesn't decide their final color; a Geometry Shader (if used) operates on primitives; not every pipeline uses one.)

3. **A. Camera at the origin, looking toward -Z direction**
   By default, the camera (eye) in OpenGL is at the origin looking down the negative Z-axis with the positive Y-axis as "up". (Thus objects with smaller -Z are further away.) This is often called eye space or camera space. Choice B is incorrect (that would be an opposite camera direction); C describes moving the camera which by default we don't do (we move the world instead); D is a different orientation.

4. **A. Rotate, then Translate**
   If you want to rotate an object about its own center and then move it, you should first apply the rotation (which spins the object about its center if the center is at the origin in its local space), and then translate it to the desired position. If you did it in the opposite order (translate then rotate), the object would rotate around the world origin (causing it to orbit around that point) instead of about its own center.

5. **B. It processes each vertex's attributes**
   The vertex shader runs for each vertex, typically transforming the vertex from object space through world/view to clip space (applying the Model/View/Projection matrices) and processing per-vertex data (like lighting calculations per vertex, generating texture coordinates, etc.). It then passes outputs (like transformed position, colors, normals, texture coords) down the pipeline. It does not rasterize (that's the fixed rasterizer stage) and does not handle per-pixel calculations (that's the fragment shader).

6. **B. It clips the triangle**
   If a triangle is partly outside the view, the pipeline will clip it to the frustum. The portion outside is discarded, and the portion inside is retained; new vertices might be generated at the clip boundary. It will then rasterize the remaining (visible) part. It does not drop the entire triangle unless it's completely outside. (And it certainly doesn't draw parts off-screen or distort it to fit – those are incorrect behaviors.)

7. **A. It allows representing translations as matrix multiplications**
   Homogeneous coordinates (using a 4×4 matrix in 3D) allow translations to be represented in the same linear framework as rotations/scales. In 3D, a 3×3 matrix can't do translation, but a 4×4 homogeneous matrix can. That is the key advantage: we can combine rotation, scale, shear and translation in one matrix multiplication. (Other benefits: homogeneous coords also handle perspective divisions.) Rotations can be done with 3×3 matrices (so B is wrong), and using 4 coords isn't about precision or making things slower/faster by itself (C and D are irrelevant statements).

8. **A. Fill the entire color buffer with the current clear color**
   glClear(GL_COLOR_BUFFER_BIT) clears the color buffer (the draw framebuffer's color portion) to the current clear color (which you set with glClearColor(r,g,b,a)). It basically fills the background with a solid color (often at frame start). It doesn't automatically clear the depth or other buffers unless you specify those flags. It also doesn't flash white (unless your clear color is white!).

9. **B. glutIdleFunc**
   glutIdleFunc is the GLUT call to register an idle callback – a function that GLUT will call whenever the event loop is idle (no user input or other events to process). This is often used to continuously update animation or redraw when nothing else is happening. (glutDisplayFunc registers the display (render) callback for drawing the window, glutKeyboardFunc handles key presses, and glutMainLoop starts the event loop but doesn't itself specify what to do when idle.)

10. **B. Store vertex data in a VBO and set up vertex attribute pointers**
    In modern OpenGL, you send vertex data via buffers. Typically you would store the triangle's vertices in a Vertex Buffer Object (VBO), set up vertex attribute pointers (with glVertexAttribPointer etc.) to describe the data to the vertex shader, and then call a draw function (like glDrawArrays or glDrawElements). Option A (glBegin/glVertex/glEnd) was the old immediate mode (no longer used in core profile because it's inefficient and deprecated). Option C is fictitious (there's no single call that takes all three vertices at once like that), and D is incorrect – OpenGL doesn't "know" your geometry unless you provide it via buffers or immediate mode calls. 