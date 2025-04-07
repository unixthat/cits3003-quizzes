// Quiz data structure
const quizzes = {
    1: {
        title: "Quiz 1 - OpenGL Basics, Rendering Pipeline",
        questions: [
            {
                type: "true-false",
                text: "Rendering is the process of taking a 3D scene (objects, geometry, etc.) and producing a 2D image (pixels) as output.",
                correct: true,
                explanation: "Rendering is indeed the process of converting a 3D scene into a 2D image (populating the pixel frame buffer). In graphics, you take object data (geometry, materials) and produce pixels – this is the essence of rendering."
            },
            {
                type: "true-false",
                text: "In OpenGL's synthetic camera model, the camera is fixed at the origin looking down the negative Z-axis, so moving the camera is achieved by transforming (moving/rotating) the entire world instead.",
                correct: true,
                explanation: "In OpenGL's camera model, the camera is conceptually at the origin looking down -Z. To simulate moving the camera, we typically apply the inverse transformation to the world. For example, moving the camera to the right is done by translating the world to the left."
            },
            {
                type: "true-false",
                text: "In an orthographic projection, a far object appears smaller on the image plane than a near object of the same size.",
                correct: false,
                explanation: "In an orthographic (parallel) projection, objects retain their apparent size regardless of depth. A far object will appear the same size as a near object of identical dimensions. (By contrast, in perspective projection, farther objects do appear smaller.) The statement given describes perspective behavior, not orthographic."
            },
            {
                type: "true-false",
                text: "The CPU (not the GPU) performs the vertex transformations and fragment shading in the modern OpenGL pipeline.",
                correct: false,
                explanation: "In modern graphics, the GPU executes vertex transformations and fragment shading. The CPU sends commands and data, but the heavy per-vertex and per-fragment calculations are done on the GPU in parallel. (Older fixed-function OpenGL also used the GPU for these steps via the graphics pipeline hardware.)"
            },
            {
                type: "true-false",
                text: "OpenGL is a state machine API, meaning that most of its functions modify a global state that persists until changed (rather than returning new data directly).",
                correct: true,
                explanation: "OpenGL is a state machine. Calls like setting the current color, enabling/disabling features, binding buffers, etc., modify internal states that remain until changed. This means the order of calls matters and there is a context of current state."
            },
            {
                type: "true-false",
                text: "Double-buffering (using a back buffer and front buffer) is used in rendering to prevent flicker/tearing, by drawing to an off-screen buffer then swapping it to display.",
                correct: true,
                explanation: "In double-buffering, drawing is done to a back buffer while the front buffer is displayed. When a frame is ready, the buffers swap. This prevents flickering/tearing that would happen if you drew directly to the visible buffer. (The viewer only sees complete frames.)"
            },
            {
                type: "true-false",
                text: "Clipping is the pipeline step that discards or trims any parts of primitives that lie outside the view frustum before rasterization.",
                correct: true,
                explanation: "Clipping is the pipeline step that removes parts of primitives that lie outside the canonical view volume. For example, a triangle partly outside the camera view will be cut (clipped) to the portion inside the frustum before rasterization. This ensures only the visible portions generate fragments."
            },
            {
                type: "true-false",
                text: "In modern OpenGL (core profile), if you draw a 3D object without writing any shader code for lighting, the object will still appear with default realistic lighting applied by OpenGL.",
                correct: false,
                explanation: "Modern OpenGL (core profile) does not automatically apply any lighting or shading. If you don't write shader code for lighting, objects will appear using whatever your fragment shader does (e.g. a flat color). In the old fixed-function pipeline, OpenGL had a default lighting model you could enable, but in modern OpenGL you must implement lighting in shaders explicitly."
            },
            {
                type: "true-false",
                text: "In homogeneous coordinates, a point in 3D space is typically represented as (x, y, z, 1) while a direction vector is represented as (vx, vy, vz, 0).",
                correct: true,
                explanation: "In homogeneous coordinates we use a 4th component w. By convention, (x,y,z,1) represents a point (position) and (x,y,z,0) represents a direction vector. The w distinguishes points from vectors and allows translations to be done with matrix multiplication. (A vector has no fixed position, essentially like a point at infinity in projective space.)"
            },
            {
                type: "true-false",
                text: "Generally, applying a rotation to an object then a translation yields a different result than applying the translation first then the rotation (i.e. rotation and translation transformations do not commute).",
                correct: true,
                explanation: "In general, rotation and translation do not commute. The order of transformations matters. For example, rotating an object then translating it yields a different result than translating then rotating (unless the translation is zero or the rotation is about an origin). So the statement 'applying rotation then translation gives a different result than vice versa' is true – order is important."
            },
            {
                type: "multiple-choice",
                text: "Which of the following is NOT a typical stage in the OpenGL graphics pipeline?",
                options: [
                    "Vertex Processing (Vertex Shader stage)",
                    "Clipping and Primitive Assembly",
                    "Rasterization",
                    "Garbage Collection"
                ],
                correct: 3,
                explanation: "Garbage Collection is not a stage in the graphics pipeline. The typical stages include: Vertex Processing (vertex shader, etc.), Primitive Assembly & Clipping, Rasterization, Fragment Processing (fragment shader), and per-fragment operations (like depth test). Garbage collection is unrelated to rendering (it's a memory management concept)."
            },
            {
                type: "multiple-choice",
                text: "In the modern OpenGL programmable pipeline, which stage is responsible for computing the color and other attributes for each pixel fragment (e.g. applying lighting and texturing per-pixel)?",
                options: [
                    "Vertex Shader",
                    "Geometry Shader",
                    "Fragment Shader",
                    "Rasterizer"
                ],
                correct: 2,
                explanation: "The Fragment Shader stage computes the color and other attributes for each fragment (potential pixel). This is where per-pixel lighting, texturing, etc., are applied in the programmable pipeline. (The Vertex Shader operates per-vertex; the Rasterizer generates fragments but doesn't decide their final color; a Geometry Shader (if used) operates on primitives; not every pipeline uses one.)"
            },
            {
                type: "multiple-choice",
                text: "OpenGL's default camera/view orientation can be described as:",
                options: [
                    "Camera at the origin, looking toward -Z direction (into the screen), with +Y up and +X to the right.",
                    "Camera at the origin, looking toward +Z (out of the screen), with +Y up.",
                    "Camera at (0,0,1) looking toward the origin (0,0,0).",
                    "Camera at the origin, looking toward -Y (downwards), with +Z up."
                ],
                correct: 0,
                explanation: "By default, the camera (eye) in OpenGL is at the origin looking down the negative Z-axis with the positive Y-axis as 'up'. (Thus objects with smaller -Z are further away.) This is often called eye space or camera space. Choice B is incorrect (that would be an opposite camera direction); C describes moving the camera which by default we don't do (we move the world instead); D is a different orientation."
            },
            {
                type: "multiple-choice",
                text: "To rotate an object about its own center and then move it to a new position, which sequence of transformations should be applied (in the correct order)?",
                options: [
                    "Rotate the object about its center, then Translate it to the new position.",
                    "Translate the object to the new position, then Rotate about the world origin.",
                    "Translate to origin, then Rotate, then Translate back (to original position).",
                    "The order of applying Rotate or Translate doesn't matter for the final result."
                ],
                correct: 0,
                explanation: "If you want to rotate an object about its own center and then move it, you should first apply the rotation (which spins the object about its center if the center is at the origin in its local space), and then translate it to the desired position. If you did it in the opposite order (translate then rotate), the object would rotate around the world origin (causing it to orbit around that point) instead of about its own center."
            },
            {
                type: "multiple-choice",
                text: "What is the primary role of a vertex shader in the OpenGL pipeline?",
                options: [
                    "It determines the color of each pixel of a triangle.",
                    "It processes each vertex's attributes (position, normals, etc.), typically transforming vertex positions to clip space and passing data to the fragment stage.",
                    "It rasterizes primitives into fragments.",
                    "It handles user input events for each vertex."
                ],
                correct: 1,
                explanation: "The vertex shader runs for each vertex, typically transforming the vertex from object space through world/view to clip space (applying the Model/View/Projection matrices) and processing per-vertex data (like lighting calculations per vertex, generating texture coordinates, etc.). It then passes outputs (like transformed position, colors, normals, texture coords) down the pipeline. It does not rasterize (that's the fixed rasterizer stage) and does not handle per-pixel calculations (that's the fragment shader)."
            },
            {
                type: "multiple-choice",
                text: "If a triangle primitive partially lies outside the view frustum, what does the OpenGL pipeline do with it?",
                options: [
                    "It discards (does not draw) the entire triangle.",
                    "It clips the triangle, removing the outside portion and using the inside portion that lies in the view.",
                    "It draws the triangle anyway, including parts off-screen.",
                    "It warps the triangle to fit entirely within the screen."
                ],
                correct: 1,
                explanation: "If a triangle is partly outside the view, the pipeline will clip it to the frustum. The portion outside is discarded, and the portion inside is retained; new vertices might be generated at the clip boundary. It will then rasterize the remaining (visible) part. It does not drop the entire triangle unless it's completely outside. (And it certainly doesn't draw parts off-screen or distort it to fit – those are incorrect behaviors.)"
            },
            {
                type: "multiple-choice",
                text: "What is an important advantage of using homogeneous coordinates (x,y,z,w) in graphics transformations?",
                options: [
                    "It allows representing translations as matrix multiplications (when w is used), which isn't possible with just 3×3 matrices in 3D.",
                    "It is required to represent rotations – rotations cannot be done with 3×3 matrices.",
                    "It doubles the number of coordinates for higher precision.",
                    "It makes perspective projection impossible to represent."
                ],
                correct: 0,
                explanation: "Homogeneous coordinates (using a 4×4 matrix in 3D) allow translations to be represented in the same linear framework as rotations/scales. In 3D, a 3×3 matrix can't do translation, but a 4×4 homogeneous matrix can. That is the key advantage: we can combine rotation, scale, shear and translation in one matrix multiplication. (Other benefits: homogeneous coords also handle perspective divisions.) Rotations can be done with 3×3 matrices (so B is wrong), and using 4 coords isn't about precision or making things slower/faster by itself (C and D are irrelevant statements)."
            },
            {
                type: "multiple-choice",
                text: "Calling glClear(GL_COLOR_BUFFER_BIT) in an OpenGL program will:",
                options: [
                    "Fill the entire color buffer (the screen/background) with the current clear color (set by glClearColor).",
                    "Flash the window to white briefly.",
                    "Also automatically clear the depth buffer.",
                    "Do nothing unless depth testing is enabled."
                ],
                correct: 0,
                explanation: "glClear(GL_COLOR_BUFFER_BIT) clears the color buffer (the draw framebuffer's color portion) to the current clear color (which you set with glClearColor(r,g,b,a)). It basically fills the background with a solid color (often at frame start). It doesn't automatically clear the depth or other buffers unless you specify those flags. It also doesn't flash white (unless your clear color is white!)."
            },
            {
                type: "multiple-choice",
                text: "Which GLUT function allows you to specify a function that will be called when the application is idle (no other events are occurring)?",
                options: [
                    "glutDisplayFunc – to continuously redraw when idle.",
                    "glutIdleFunc – to set a callback for when the program is idle.",
                    "glutKeyboardFunc – to handle idle keyboard input.",
                    "glutMainLoop – which handles idle events automatically, no callback needed."
                ],
                correct: 1,
                explanation: "glutIdleFunc is the GLUT call to register an idle callback – a function that GLUT will call whenever the event loop is idle (no user input or other events to process). This is often used to continuously update animation or redraw when nothing else is happening. (glutDisplayFunc registers the display (render) callback for drawing the window, glutKeyboardFunc handles key presses, and glutMainLoop starts the event loop but doesn't itself specify what to do when idle.)"
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL (core profile), how do you send the vertices of a triangle to the GPU for rendering (assuming a typical setup)?",
                options: [
                    "Use glBegin(GL_TRIANGLES) and glVertex3f calls for each triangle vertex.",
                    "Store vertex data in a Vertex Buffer Object (VBO) and set up vertex attribute pointers, then issue a draw call.",
                    "Call a single function like glDrawTriangle(x1,y1,z1, x2,y2,z2, x3,y3,z3) with the coordinates.",
                    "OpenGL automatically knows the shape once you set the proper mode; no need to send vertex data explicitly."
                ],
                correct: 1,
                explanation: "In modern OpenGL, you send vertex data via buffers. Typically you would store the triangle's vertices in a Vertex Buffer Object (VBO), set up vertex attribute pointers (with glVertexAttribPointer etc.) to describe the data to the vertex shader, and then call a draw function (like glDrawArrays or glDrawElements). Option A (glBegin/glVertex/glEnd) was the old immediate mode (no longer used in core profile because it's inefficient and deprecated). Option C is fictitious (there's no single call that takes all three vertices at once like that), and D is incorrect – OpenGL doesn't 'know' your geometry unless you provide it via buffers or immediate mode calls."
            }
        ]
    },
    2: {
        title: "Quiz 2 - Transformations, Matrices",
        questions: [
            {
                type: "true-false",
                text: "Adding two point positions (e.g., coordinates of two distinct points) together yields another meaningful point in space.",
                correct: false,
                explanation: "Adding two point positions isn't a meaningful operation in affine geometry. You can average points or subtract to get a vector, but simply adding coordinates of two distinct points doesn't give a useful result (unlike adding a point and a vector, which gives a new point). In other words, 'point + point' is not defined in the usual vector-space sense – you typically only add vectors or do point minus point = vector."
            },
            {
                type: "true-false",
                text: "The Model matrix is used to transform coordinates from an object's local model space into the common world coordinate space.",
                correct: true,
                explanation: "The Model matrix (sometimes called model-to-world transform) moves coordinates from an object's local space into the shared world coordinate system. For example, it can position, scale, and orient a model within the world. (It's the transform representing the object's pose in world coordinates.)"
            },
            {
                type: "true-false",
                text: "The View matrix (camera transform) is generally the inverse of the camera's world transform – effectively converting world coordinates to a camera-centric coordinate system with the camera at the origin.",
                correct: true,
                explanation: "The View matrix is indeed the inverse of the camera's world transform. If a camera in world space is at position (x,y,z) and rotated with some orientation, applying the view matrix will translate by (-x,-y,-z) and apply the opposite rotation, effectively moving the world such that the camera ends up at the origin looking down -Z. This converts world coordinates to eye/camera-space coordinates."
            },
            {
                type: "true-false",
                text: "Using a negative scale factor (e.g., scaling by -1 on an axis) will mirror or reflect an object across the corresponding axis.",
                correct: true,
                explanation: "A negative scale factor will reflect (mirror) the object across the corresponding axis. For instance, scaling an object by -1 in X will flip it left-right. Negative scaling on an odd number of axes can also change the winding (which affects face culling orientation). This is a standard way to create mirror images of geometry."
            },
            {
                type: "true-false",
                text: "In a perspective projection, the farther an object is from the camera, the smaller it appears on the projected image.",
                correct: true,
                explanation: "This is describing the basic property of perspective projection: objects farther from the camera project to a smaller image on the near plane compared to closer objects of the same size. That's why, for example, in a perspective view, distant buildings look smaller than a nearer building of identical height."
            },
            {
                type: "true-false",
                text: "A uniform scale (scaling an object equally on all axes) will distort the object's shape and angles.",
                correct: false,
                explanation: "A uniform scale (same factor on all axes) will enlarge or shrink an object but preserve its shape proportions and angles. It does not distort the shape – it's basically like zooming in or out uniformly. (Non-uniform scaling, where axes have different factors, will distort shapes unless the object is symmetric.)"
            },
            {
                type: "true-false",
                text: "In a 4×4 homogeneous transformation matrix, the rightmost column (excluding the bottom element) represents the translation components of the transform.",
                correct: true,
                explanation: "In a standard 4×4 transformation matrix (in homogeneous coordinates), the matrix can be viewed as: the upper-left 3×3 part handles rotation/scale/shear, the rightmost 3×1 column handles translation (x, y, z shifts), and the bottom row is usually [0 0 0 1] for an affine transform. So the elements in that rightmost column (except the very bottom which is typically 1) are the translation distances."
            },
            {
                type: "true-false",
                text: "Event-driven input mode (as used in interactive graphics programs) utilizes an event queue and callback functions, rather than forcing the program to halt and wait for each input.",
                correct: true,
                explanation: "In an event-driven approach, input devices generate events that get placed in a queue, and the program uses callbacks to handle them asynchronously. The program does not stop and wait for input at specific points; instead, it continually runs an event loop (often managed by a library like GLUT/GLFW) and invokes your callback functions when events occur. (By contrast, in request mode or a simple console program, the code might block waiting for input – not how interactive graphics main loops work.)"
            },
            {
                type: "true-false",
                text: "By default, OpenGL will render both the front and back faces of polygons (no back-face culling is active unless explicitly enabled).",
                correct: true,
                explanation: "By default, OpenGL does not perform back-face culling. Unless you enable culling (with glEnable(GL_CULL_FACE) and set a winding order), OpenGL will rasterize both front and back faces of polygons. So the statement is true: initially both faces are rendered. (With culling turned on, typically back faces – those facing away from the camera – are not drawn.)"
            },
            {
                type: "true-false",
                text: "In modern OpenGL, we still use glBegin/glEnd and glVertex calls to submit geometry to the pipeline.",
                correct: false,
                explanation: "Modern OpenGL (core profile) does not use the old glBegin/glEnd immediate mode. All geometry must be sent through vertex buffers/arrays. The old immediate mode functions are deprecated and unavailable in core contexts. So we no longer issue vertices with glVertex one by one in modern OpenGL. (We prepare data in buffers and use glDraw* calls instead.)"
            },
            {
                type: "multiple-choice",
                text: "To rotate an object about an arbitrary point (pivot) in space (not at the origin), one typically must:",
                options: [
                    "Translate the object so that the pivot point aligns with the origin, then apply the rotation, then translate back to the original location.",
                    "Directly apply the rotation about that pivot in one step; no translation is ever needed for off-origin rotations.",
                    "Rotate the world instead of the object.",
                    "Convert the rotation to Euler angles first."
                ],
                correct: 0,
                explanation: "To rotate around an arbitrary point (pivot), you translate the object so that the pivot aligns with the origin (this makes that point the center of rotation), then perform the rotation, then translate back. This composite is required because basic rotation matrices only rotate about the origin. Option B is wrong because a single rotation matrix on its own always rotates about the origin of the current coordinate system (not an arbitrary point)."
            },
            {
                type: "multiple-choice",
                text: "In GLSL (OpenGL Shading Language), a uniform variable is one that:",
                options: [
                    "is set by the application and remains constant for all vertices/fragments for a draw call (e.g., a single overall transformation matrix or color).",
                    "varies for each vertex (like position inputs).",
                    "is an output from the fragment shader to the framebuffer.",
                    "has the same value across all applications (a built-in constant)."
                ],
                correct: 0,
                explanation: "A uniform in GLSL is a variable that the application (CPU side) sets and which remains constant for all vertices/fragments for that rendering call (or until changed). For example, transformation matrices, light parameters, or an object's solid color are often passed as uniforms. They do not change per-vertex or per-fragment automatically. (Option B describes attributes varying per vertex; uniform is the opposite of that. Option C is describing a fragment shader output like gl_FragColor, not a uniform. Option D is nonsense.)"
            },
            {
                type: "multiple-choice",
                text: "In the graphics pipeline, what is the perspective divide?",
                options: [
                    "The step where clip-space coordinates (x,y,z,w) are divided by w to produce normalized device coordinates.",
                    "Splitting the view frustum into near and far sections for LOD (level of detail).",
                    "Halving the field-of-view angle to simulate perspective.",
                    "A special matrix that handles perspective projection."
                ],
                correct: 0,
                explanation: "The perspective divide is the operation of dividing the clip-space coordinates (x, y, z) by the w component to get normalized device coordinates (NDC). After the projection matrix transforms a vertex, coordinates are in homogeneous form (x,y,z,w); then the GPU divides by w to yield the actual 3D position in NDC (where -1 ≤ x,y,z ≤ 1 if inside the frustum). This step is what produces the true perspective effect (objects' x,y shrink with distance because far objects have larger w before divide)."
            },
            {
                type: "multiple-choice",
                text: "Input Events: Which of the following is NOT typically an event that a graphics application's window system would handle?",
                options: [
                    "Mouse button press or move event",
                    "Window resize or refresh event",
                    "Keyboard key press event",
                    "\"File download complete\" event from a web browser"
                ],
                correct: 3,
                explanation: "\"File download complete\" is not a graphics/window system event; it's related to networking or application logic outside the scope of typical GUI input. A, B, and C are all normal event types in a graphics application: mouse events, window events, keyboard events are handled via the windowing system and callbacks."
            },
            {
                type: "multiple-choice",
                text: "During rasterization in the pipeline:",
                options: [
                    "The vertices of a primitive are connected to form edges.",
                    "The primitive is converted into a set of fragments (potential pixels) covering its area, each with interpolated attributes (color, depth, etc.).",
                    "The GPU computes lighting for each vertex.",
                    "The depth test is performed on each triangle before generating fragments."
                ],
                correct: 1,
                explanation: "Rasterization is the process of converting a primitive (like a triangle) into a set of fragments covering the appropriate pixels. During rasterization, the GPU interpolates vertex attributes (such as vertex colors, texture coordinates, normals, depth) across the triangle's area to produce fragment data for each covered pixel. Lighting per vertex would have happened earlier (or will happen per fragment later), and depth testing happens after fragment generation (during fragment processing stage), not during rasterization itself."
            },
            {
                type: "multiple-choice",
                text: "What is the role of glVertexAttribPointer (and the associated calls) in modern OpenGL?",
                options: [
                    "It specifies how vertex data is laid out in memory (in a VBO) and connects it to a vertex shader attribute, so the GPU knows how to fetch vertex attributes.",
                    "It issues a draw call for vertices stored in an array.",
                    "It sets the pointer speed for mouse input (unrelated to graphics).",
                    "It swaps the front and back framebuffers after drawing."
                ],
                correct: 0,
                explanation: "glVertexAttribPointer (used along with glEnableVertexAttribArray and binding a VBO) tells OpenGL how to interpret the array of vertex data in memory and associate it with a shader's vertex attribute. For example, it might specify that the \"position\" attribute is 3 floats starting at offset 0 of the bound VBO, with a certain stride. This is crucial for feeding vertex data to the vertex shader. (It does not issue draw calls itself, nor relate to swapping buffers or input devices.)"
            },
            {
                type: "multiple-choice",
                text: "Transforms: Which of the following transformations is NOT an affine transform (i.e., does not preserve straight lines and parallelism)?",
                options: [
                    "Rotation",
                    "Non-uniform scaling",
                    "Translation",
                    "Perspective projection"
                ],
                correct: 3,
                explanation: "A perspective projection is not affine. Affine transformations (rotation, translation, scaling, shear – combinations of those) preserve parallel lines and have linear properties (except for the added translation). Perspective projection, on the other hand, makes parallel lines converge and involves a non-linear division by w. So among the options, Rotation, Scaling, Translation are all affine transforms, while Perspective is a projective transform (not affine)."
            },
            {
                type: "multiple-choice",
                text: "In a GLUT program, which function call is used to enter the event-processing loop, handing control over to GLUT to handle rendering and input callbacks?",
                options: [
                    "glutMainLoop()",
                    "glutPostRedisplay()",
                    "glutInit()",
                    "glutSwapBuffers()"
                ],
                correct: 0,
                explanation: "glutMainLoop() enters the GLUT event-processing loop. It hands control over to GLUT, which will then call registered callbacks (display, idle, input, etc.) as events occur. This function typically never returns until the program exits. The other options are incorrect: glutPostRedisplay just flags a window to redraw, glutInit initializes GLUT, and glutSwapBuffers swaps the buffers (and is usually called within the display callback)."
            },
            {
                type: "multiple-choice",
                text: "Which pair of transformations are inverses of each other?",
                options: [
                    "Translation by (+X) and translation by (-X)",
                    "Rotation by +30° about Y and rotation by +30° about X",
                    "Scaling by 2 in X and scaling by 2 in Y",
                    "Shearing in X and a rotation in Z"
                ],
                correct: 0,
                explanation: "A translation by (+X) and a translation by (-X) are inverse transformations. Doing one then the other results in no net change. (In general, the inverse of a translation is a translation in the opposite direction.) By contrast, rotations about different axes (B) do not undo each other; scaling vs translation (C) aren't inverses at all; and shear vs rotation (D) are entirely different operations (no simple inverse relationship, and in any case shearing is not the inverse of rotation)."
            },
            {
                type: "multiple-choice",
                text: "What is the primary purpose of a depth buffer (Z-buffer) in rendering?",
                options: [
                    "To store the depth (distance) of each fragment/pixel and ensure that for overlapping objects, only the closest surface's fragment is ultimately drawn (hidden surface removal).",
                    "To store the color of each fragment before it is written to the color buffer.",
                    "To count the number of fragments that are generated during rasterization.",
                    "To store the depth of the camera from the scene."
                ],
                correct: 0,
                explanation: "A depth buffer stores depth values (distance from the camera or more formally the z-value in normalized device coordinates) for each pixel. When a new fragment is drawn, its depth is compared to the stored value; if it's closer (passes the depth test), it will overwrite the pixel (and update the depth value). This allows the renderer to automatically handle occlusion (closer objects obscure farther ones). It's unrelated to double buffering (that's the back buffer), and it doesn't count fragments; it also doesn't store color – color goes in the color buffer, not the depth buffer."
            }
        ]
    },
    3: {
        title: "Quiz 3 - Rasterization, Shaders",
        questions: [
            {
                type: "true-false",
                text: "A fragment in OpenGL corresponds to a candidate pixel produced during rasterization, containing color, depth, and other interpolated data.",
                correct: true,
                explanation: "A fragment is indeed a candidate pixel produced during rasterization. It contains interpolated data from the vertices, including color, depth, texture coordinates, and other attributes. The fragment shader processes this data to determine the final pixel color and other properties."
            },
            {
                type: "true-false",
                text: "The old fixed-function OpenGL pipeline had built-in concepts like glMatrixMode, glTranslatef, and glRotatef for transformations, but these are not available in the modern core-profile pipeline.",
                correct: true,
                explanation: "The old fixed-function pipeline had built-in matrix stacks and transformation functions like glMatrixMode, glTranslatef, and glRotatef. These are not available in modern OpenGL (core profile) where you must implement transformations using shaders and matrices yourself."
            },
            {
                type: "true-false",
                text: "In OpenGL, the winding order of a triangle's vertices (clockwise vs counter-clockwise as seen from the camera) can determine whether the triangle is considered a front-face or back-face.",
                correct: true,
                explanation: "The winding order (clockwise vs counter-clockwise) of a triangle's vertices as seen from the camera determines whether it's considered a front face or back face. This is used for back-face culling, where back faces can be discarded to improve performance."
            },
            {
                type: "true-false",
                text: "A single call to glDrawArrays(GL_TRIANGLES, ...) with a proper vertex buffer can render multiple triangles.",
                correct: true,
                explanation: "glDrawArrays(GL_TRIANGLES, ...) can render multiple triangles from a vertex buffer. It takes the vertices in sequence, three at a time, to form triangles. So if you have 9 vertices in your buffer, it will render 3 triangles."
            },
            {
                type: "true-false",
                text: "In a typical vertex shader, you compute gl_Position by multiplying the vertex's position by the Model-View-Projection matrix.",
                correct: true,
                explanation: "In a typical vertex shader, gl_Position is computed by multiplying the vertex position by the Model-View-Projection (MVP) matrix. This transforms the vertex from model space through world space and view space to clip space."
            },
            {
                type: "true-false",
                text: "If a vertex's clip-space coordinates after the projection transform are (2, 2, 0.5, 1), that vertex will be outside the normalized device coordinate (NDC) cube and will be clipped or discarded.",
                correct: true,
                explanation: "After the perspective divide, normalized device coordinates (NDC) must be in the range [-1, 1] for all components to be visible. The point (2, 2, 0.5, 1) would become (2, 2, 0.5) in NDC after dividing by w=1, which is outside the [-1, 1] range for x and y, so it would be clipped."
            },
            {
                type: "true-false",
                text: "The aspect ratio in a perspective projection refers to the ratio of the field of view angles in horizontal vs vertical directions.",
                correct: false,
                explanation: "The aspect ratio in a perspective projection refers to the ratio of width to height of the viewport or window, not the field of view angles. It's used to ensure the projection doesn't distort the image."
            },
            {
                type: "true-false",
                text: "A shear transformation can be represented by a matrix and is considered an affine transform.",
                correct: true,
                explanation: "A shear transformation can be represented by a matrix and is indeed an affine transform. Like other affine transforms (translation, rotation, scaling), it preserves parallel lines and ratios of distances along parallel lines."
            },
            {
                type: "true-false",
                text: "OpenGL's default coordinate system and view volume expect the near plane distance to be positive (greater than 0) for perspective projections.",
                correct: true,
                explanation: "In OpenGL's default coordinate system, the near plane distance must be positive for perspective projections. This is because the near plane represents the closest point to the camera that can be rendered, and distances are measured along the negative Z-axis."
            },
            {
                type: "true-false",
                text: "The output of the fragment shader can include a depth value (gl_FragDepth) to override the default interpolated depth.",
                correct: true,
                explanation: "The fragment shader can write to gl_FragDepth to override the default interpolated depth value. This is useful for effects like depth-based fog or when you need to modify the depth value for special rendering effects."
            },
            {
                type: "multiple-choice",
                text: "Clipping Volume: Which of these points (given in clip coordinates before perspective divide) would be completely outside the canonical view volume and thus get clipped? (Assume w is positive unless stated otherwise.)",
                options: [
                    "(0.5, 1.2, 0.3, 1) – where x=0.5, y=1.2",
                    "(-0.9, -0.5, 0.2, 1) – where x=-0.9, y=-0.5",
                    "(1.5, 0.0, 0.5, 2) – after divide this is (0.75, 0.0, 0.25)",
                    "(0.0, -0.7, -0.8, 1) – within range"
                ],
                correct: 0,
                explanation: "In clip coordinates, a point is inside the view volume if -1 ≤ x/w, y/w, z/w ≤ 1. For point A: (0.5, 1.2, 0.3, 1) => y = 1.2 is outside the range [-1,1], so this point lies outside and would be clipped. The other points are all within the valid range."
            },
            {
                type: "multiple-choice",
                text: "Coordinate Systems: Which statement best describes world coordinates in the context of computer graphics?",
                options: [
                    "World coordinates are a common reference frame in which all objects in the scene are placed (the result after each object's model transform).",
                    "World coordinates are the coordinates relative to the camera's position and orientation.",
                    "World coordinates are the 2D pixel coordinates on the screen.",
                    "World coordinates refer to the object's local coordinate system before any transforms."
                ],
                correct: 0,
                explanation: "World coordinates refer to a common scene reference frame. After each object's model transform, its vertices are in world space, where they share a global coordinate system. This is where all objects in the scene are positioned relative to each other."
            },
            {
                type: "multiple-choice",
                text: "In OpenGL, normalized device coordinate (NDC) depth ranges from:",
                options: [
                    "-1 (at the near plane) to +1 (at the far plane)",
                    "0 (at the near plane) to 1 (at the far plane)",
                    "-∞ to +∞",
                    "0 to 255"
                ],
                correct: 0,
                explanation: "In OpenGL, normalized device coordinate (NDC) depth ranges from -1 (at the near plane) to +1 (at the far plane) before being mapped to the depth buffer. This differs from DirectX's 0 to 1 NDC depth range."
            },
            {
                type: "multiple-choice",
                text: "During rasterization, the GPU:",
                options: [
                    "Linearly interpolates vertex attributes across the primitive's surface",
                    "Computes lighting for each fragment",
                    "Performs depth testing",
                    "All of the above"
                ],
                correct: 0,
                explanation: "During rasterization, the GPU linearly interpolates the outputs of the vertex shader (such as colors, texture coordinates, normals, etc.) across the surface of the primitive. These interpolated values become the inputs to the fragment shader for each fragment."
            },
            {
                type: "multiple-choice",
                text: "To pass data from the vertex shader to the fragment shader, you:",
                options: [
                    "Declare an output in the vertex shader and a matching input in the fragment shader",
                    "Use a uniform variable",
                    "Use a fragment shader variable in the vertex shader",
                    "Pass the data through gl_Position"
                ],
                correct: 0,
                explanation: "To pass data from the vertex shader to the fragment shader, you declare an output in the vertex shader (in old terminology, a \"varying\") and a matching input in the fragment shader. The GPU interpolates that output across the primitive."
            },
            {
                type: "multiple-choice",
                text: "To use the depth buffer for hidden surface removal, you must:",
                options: [
                    "Enable depth testing with glEnable(GL_DEPTH_TEST)",
                    "Enable face culling with glEnable(GL_CULL_FACE)",
                    "Set the depth mask to false",
                    "Enable blending"
                ],
                correct: 0,
                explanation: "Enabling depth testing (glEnable(GL_DEPTH_TEST)) is required to use the depth buffer to occlude fragments behind others. If depth test is off, the GPU won't reject fragments based on depth and you may see closer objects overwritten by farther ones."
            },
            {
                type: "multiple-choice",
                text: "To display the rendered image in a double-buffered context, you call:",
                options: [
                    "glutSwapBuffers() (or equivalent)",
                    "glFlush()",
                    "glFinish()",
                    "glClear()"
                ],
                correct: 0,
                explanation: "To display the rendered image in a double-buffered context, you call the buffer swap function (e.g., glutSwapBuffers in GLUT) at the end of rendering each frame. This swaps the back buffer (just drawn) with the front buffer (displayed)."
            },
            {
                type: "multiple-choice",
                text: "In GLSL, a 3-component float vector is declared as:",
                options: [
                    "vec3",
                    "float3",
                    "vector3",
                    "mat3"
                ],
                correct: 0,
                explanation: "In GLSL, a 3-component float vector is declared as vec3. (There is no built-in type called float3 or vector3 in GLSL – those are non-GLSL notations. mat3 is a 3×3 matrix type, not a 3D vector.)"
            },
            {
                type: "multiple-choice",
                text: "The framebuffer is:",
                options: [
                    "The memory buffer containing the image that will be displayed",
                    "A data structure for storing scene objects",
                    "A queue of GPU commands",
                    "A buffer for keyboard input"
                ],
                correct: 0,
                explanation: "The framebuffer is the memory buffer containing the image that will be displayed. It typically includes a color buffer (for pixel colors) and can include depth and stencil buffers. After rendering, the color buffer part of the framebuffer is what's shown on screen."
            },
            {
                type: "multiple-choice",
                text: "In legacy GLSL (before shader #version 330 core), gl_FragColor:",
                options: [
                    "Is a built-in variable that the fragment shader writes to set the output color",
                    "Is a uniform variable that must be set from the application",
                    "Is an input variable containing the fragment's color",
                    "Is a constant that cannot be modified"
                ],
                correct: 0,
                explanation: "In legacy GLSL (before shader #version 330 core), gl_FragColor is a built-in variable that the fragment shader writes to set the output color of the fragment. (In modern GLSL, you would declare your own output variable, but the concept is the same.)"
            }
        ]
    },
    4: {
        title: "Quiz 4 - Geometry, Viewing",
        questions: [
            {
                type: "true-false",
                text: "A vector has magnitude and direction but no fixed position in space, whereas a point specifies a location in space.",
                correct: true,
                explanation: "A vector indeed has magnitude and direction but no fixed position in space. A point, on the other hand, specifies a specific location in space. This is a fundamental distinction in computer graphics and mathematics."
            },
            {
                type: "true-false",
                text: "The sum of a point and a vector is a point (applying a displacement vector to a point moves it to another point).",
                correct: true,
                explanation: "When you add a vector to a point, you get a new point that is displaced from the original point by the vector's magnitude and direction. This is a basic operation in affine geometry."
            },
            {
                type: "true-false",
                text: "The difference between two point positions is a vector.",
                correct: true,
                explanation: "The difference between two points results in a vector that represents the displacement from one point to another. This vector has magnitude (distance) and direction but no fixed position."
            },
            {
                type: "true-false",
                text: "To change a point's coordinate representation from one coordinate frame to another, we must account for the difference in origins (translation) between the frames.",
                correct: true,
                explanation: "When transforming between coordinate frames, you must account for both the orientation difference (rotation) and the position difference (translation) between the frames' origins."
            },
            {
                type: "true-false",
                text: "OpenGL's viewport transformation maps normalized device coordinates to window (screen pixel) coordinates.",
                correct: true,
                explanation: "The viewport transformation is the final step in the graphics pipeline that maps normalized device coordinates (NDC) to actual window coordinates where pixels are drawn."
            },
            {
                type: "true-false",
                text: "In GLUT, the glutDisplayFunc callback is where you put your rendering code that draws the scene each time the window needs to be refreshed.",
                correct: true,
                explanation: "The glutDisplayFunc callback is specifically designed to contain the rendering code that draws the scene. It's called whenever the window needs to be redrawn."
            },
            {
                type: "true-false",
                text: "Sampling input mode (for input devices) means the program explicitly polls the device state (e.g., checking mouse position every frame) rather than waiting for an event.",
                correct: true,
                explanation: "Sampling mode involves actively checking the state of input devices, as opposed to event-driven mode where the program responds to events as they occur."
            },
            {
                type: "true-false",
                text: "In modern OpenGL, vertex attributes are stored in Vertex Buffer Objects (VBOs) and accessed through Vertex Array Objects (VAOs).",
                correct: true,
                explanation: "In modern OpenGL, VBOs store the actual vertex data, while VAOs store the configuration of how to interpret that data."
            },
            {
                type: "true-false",
                text: "The perspective projection matrix transforms points from eye space to clip space, where the w component may be different from 1.",
                correct: true,
                explanation: "The perspective projection matrix does transform points from eye space to clip space, and the w component becomes different from 1 for points that are not at the near plane, which is essential for perspective division."
            },
            {
                type: "true-false",
                text: "In a typical OpenGL program, the depth buffer is cleared at the start of each frame with glClear(GL_DEPTH_BUFFER_BIT).",
                correct: true,
                explanation: "Clearing the depth buffer at the start of each frame is a standard practice to ensure proper depth testing for the new frame."
            },
            {
                type: "multiple-choice",
                text: "Which of the following is NOT a valid operation in affine geometry?",
                options: [
                    "Adding a vector to a point",
                    "Subtracting two points to get a vector",
                    "Adding two points",
                    "Scaling a vector"
                ],
                correct: 2,
                explanation: "Adding two points is not a valid operation in affine geometry. You can add a vector to a point, subtract points to get a vector, and scale vectors, but adding points has no geometric meaning."
            },
            {
                type: "multiple-choice",
                text: "In a typical OpenGL program, which of these operations would you typically do LAST in your rendering loop?",
                options: [
                    "Clear the buffers",
                    "Update uniform variables",
                    "Draw the geometry",
                    "Swap the buffers"
                ],
                correct: 3,
                explanation: "Buffer swapping is typically the last operation in the rendering loop. It displays the completed frame and prepares for the next frame to be rendered."
            },
            {
                type: "multiple-choice",
                text: "Which statement about the Model-View-Projection (MVP) matrix is correct?",
                options: [
                    "It transforms vertices from model space directly to screen space",
                    "It combines the model transform, view transform, and projection transform into one matrix",
                    "It's only used in the fragment shader",
                    "It's automatically provided by OpenGL"
                ],
                correct: 1,
                explanation: "The MVP matrix is a combination of all three transformations, allowing vertices to be transformed from model space to clip space in a single matrix multiplication."
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the purpose of a Vertex Array Object (VAO)?",
                options: [
                    "To store vertex data",
                    "To store the state of vertex attribute configurations",
                    "To store shader programs",
                    "To store texture data"
                ],
                correct: 1,
                explanation: "VAOs store the configuration of how vertex attributes are laid out and accessed, not the actual vertex data (which is stored in VBOs)."
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a typical stage in the OpenGL graphics pipeline?",
                options: [
                    "Vertex Shader",
                    "Rasterization",
                    "Fragment Shader",
                    "Memory Management"
                ],
                correct: 3,
                explanation: "Memory Management is not a stage in the graphics pipeline. The main stages are vertex processing, rasterization, and fragment processing."
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the w component in homogeneous coordinates?",
                options: [
                    "To represent time in animations",
                    "To distinguish between points and vectors",
                    "To store texture coordinates",
                    "To represent color intensity"
                ],
                correct: 1,
                explanation: "The w component in homogeneous coordinates is used to distinguish between points (w ≠ 0) and vectors (w = 0), enabling unified transformation of both."
            },
            {
                type: "multiple-choice",
                text: "In a perspective projection, what happens to parallel lines in the scene?",
                options: [
                    "They remain parallel in the projected image",
                    "They converge to a vanishing point",
                    "They become curved",
                    "They disappear"
                ],
                correct: 1,
                explanation: "In perspective projection, parallel lines that are not parallel to the projection plane converge to a vanishing point, creating the illusion of depth."
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a valid uniform variable type in GLSL?",
                options: [
                    "mat4",
                    "vec3",
                    "sampler2D",
                    "array"
                ],
                correct: 3,
                explanation: "While GLSL supports various uniform types including matrices (mat4), vectors (vec3), and textures (sampler2D), it does not directly support arrays as uniform variables."
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the stencil buffer in OpenGL?",
                options: [
                    "To store depth values",
                    "To store color values",
                    "To control which fragments are drawn",
                    "To store texture coordinates"
                ],
                correct: 2,
                explanation: "The stencil buffer is used to control which fragments are drawn based on a test, allowing for effects like masking and complex rendering operations."
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the correct way to handle window resizing?",
                options: [
                    "Automatically handled by OpenGL",
                    "Update the viewport with glViewport and recalculate the projection matrix",
                    "Recreate the window",
                    "Ignore the resize event"
                ],
                correct: 1,
                explanation: "When a window is resized, you need to update the viewport dimensions and recalculate the projection matrix to maintain the correct aspect ratio and field of view."
            }
        ]
    },
    5: {
        title: "Quiz 5 - Modern OpenGL, Buffers",
        questions: [
            {
                type: "true-false",
                text: "In OpenGL, the depth buffer is used to determine which fragments should be drawn when objects overlap.",
                correct: true,
                explanation: "The depth buffer (also known as the z-buffer) is used to determine which fragments should be drawn when objects overlap by comparing the depth values of fragments at the same pixel location."
            },
            {
                type: "true-false",
                text: "The perspective projection matrix is always a 4x4 matrix that transforms points from eye space to clip space.",
                correct: true,
                explanation: "The perspective projection matrix is indeed a 4x4 matrix that transforms points from eye space to clip space, where the w component may be different from 1 to enable perspective division."
            },
            {
                type: "true-false",
                text: "In modern OpenGL, shaders are written in GLSL (OpenGL Shading Language) and must be compiled before use.",
                correct: true,
                explanation: "Modern OpenGL requires shaders to be written in GLSL and compiled before they can be used in the rendering pipeline."
            },
            {
                type: "true-false",
                text: "The view matrix transforms vertices from world space to eye space, where the camera is at the origin looking down the negative z-axis.",
                correct: true,
                explanation: "The view matrix transforms vertices from world space to eye space, where the camera is positioned at the origin (0,0,0) looking down the negative z-axis."
            },
            {
                type: "true-false",
                text: "In OpenGL, the stencil buffer can be used to create complex masking effects and control which fragments are drawn.",
                correct: true,
                explanation: "The stencil buffer is specifically designed to create masking effects and control which fragments are drawn based on a test, allowing for complex rendering operations."
            },
            {
                type: "true-false",
                text: "The model matrix transforms vertices from model space (local to the object) to world space.",
                correct: true,
                explanation: "The model matrix transforms vertices from their local coordinate space (model space) to the global coordinate space (world space)."
            },
            {
                type: "true-false",
                text: "In a typical OpenGL program, the projection matrix should be recalculated whenever the window is resized.",
                correct: true,
                explanation: "The projection matrix needs to be recalculated when the window is resized to maintain the correct aspect ratio and field of view."
            },
            {
                type: "true-false",
                text: "The viewport transformation is the final step in the graphics pipeline that maps normalized device coordinates to window coordinates.",
                correct: true,
                explanation: "The viewport transformation is the final step that maps normalized device coordinates (NDC) to actual window coordinates where pixels are drawn."
            },
            {
                type: "true-false",
                text: "In modern OpenGL, vertex attributes are stored in Vertex Buffer Objects (VBOs) and accessed through Vertex Array Objects (VAOs).",
                correct: true,
                explanation: "In modern OpenGL, VBOs store the actual vertex data, while VAOs store the configuration of how to interpret that data."
            },
            {
                type: "true-false",
                text: "The perspective division (dividing by w) occurs after the vertex shader and before the fragment shader.",
                correct: true,
                explanation: "Perspective division (dividing by w) occurs after the vertex shader and before the fragment shader, as part of the fixed-function pipeline stages."
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a typical stage in the OpenGL graphics pipeline?",
                options: [
                    "Vertex Shader",
                    "Rasterization",
                    "Fragment Shader",
                    "Memory Management"
                ],
                correct: 3,
                explanation: "Memory Management is not a stage in the graphics pipeline. The main stages are vertex processing, rasterization, and fragment processing."
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the w component in homogeneous coordinates?",
                options: [
                    "To represent time in animations",
                    "To distinguish between points and vectors",
                    "To store texture coordinates",
                    "To represent color intensity"
                ],
                correct: 1,
                explanation: "The w component in homogeneous coordinates is used to distinguish between points (w ≠ 0) and vectors (w = 0), enabling unified transformation of both."
            },
            {
                type: "multiple-choice",
                text: "In a perspective projection, what happens to parallel lines in the scene?",
                options: [
                    "They remain parallel in the projected image",
                    "They converge to a vanishing point",
                    "They become curved",
                    "They disappear"
                ],
                correct: 1,
                explanation: "In perspective projection, parallel lines that are not parallel to the projection plane converge to a vanishing point, creating the illusion of depth."
            },
            {
                type: "multiple-choice",
                text: "Which of these is NOT a valid uniform variable type in GLSL?",
                options: [
                    "mat4",
                    "vec3",
                    "sampler2D",
                    "array"
                ],
                correct: 3,
                explanation: "While GLSL supports various uniform types including matrices (mat4), vectors (vec3), and textures (sampler2D), it does not directly support arrays as uniform variables."
            },
            {
                type: "multiple-choice",
                text: "What is the purpose of the stencil buffer in OpenGL?",
                options: [
                    "To store depth values",
                    "To store color values",
                    "To control which fragments are drawn",
                    "To store texture coordinates"
                ],
                correct: 2,
                explanation: "The stencil buffer is used to control which fragments are drawn based on a test, allowing for effects like masking and complex rendering operations."
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the correct way to handle window resizing?",
                options: [
                    "Automatically handled by OpenGL",
                    "Update the viewport with glViewport and recalculate the projection matrix",
                    "Recreate the window",
                    "Ignore the resize event"
                ],
                correct: 1,
                explanation: "When a window is resized, you need to update the viewport dimensions and recalculate the projection matrix to maintain the correct aspect ratio and field of view."
            },
            {
                type: "multiple-choice",
                text: "Which statement about the Model-View-Projection (MVP) matrix is correct?",
                options: [
                    "It transforms vertices from model space directly to screen space",
                    "It combines the model transform, view transform, and projection transform into one matrix",
                    "It's only used in the fragment shader",
                    "It's automatically provided by OpenGL"
                ],
                correct: 1,
                explanation: "The MVP matrix is a combination of all three transformations, allowing vertices to be transformed from model space to clip space in a single matrix multiplication."
            },
            {
                type: "multiple-choice",
                text: "In modern OpenGL, what is the purpose of a Vertex Array Object (VAO)?",
                options: [
                    "To store vertex data",
                    "To store the state of vertex attribute configurations",
                    "To store shader programs",
                    "To store texture data"
                ],
                correct: 1,
                explanation: "VAOs store the configuration of how vertex attributes are laid out and accessed, not the actual vertex data (which is stored in VBOs)."
            },
            {
                type: "multiple-choice",
                text: "Which of the following is NOT a valid operation in affine geometry?",
                options: [
                    "Adding a vector to a point",
                    "Subtracting two points to get a vector",
                    "Adding two points",
                    "Scaling a vector"
                ],
                correct: 2,
                explanation: "Adding two points is not a valid operation in affine geometry. You can add a vector to a point, subtract points to get a vector, and scale vectors, but adding points has no geometric meaning."
            },
            {
                type: "multiple-choice",
                text: "In a typical OpenGL program, which of these operations would you typically do LAST in your rendering loop?",
                options: [
                    "Clear the buffers",
                    "Update uniform variables",
                    "Draw the geometry",
                    "Swap the buffers"
                ],
                correct: 3,
                explanation: "Buffer swapping is typically the last operation in the rendering loop. It displays the completed frame and prepares for the next frame to be rendered."
            }
        ]
    }
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuiz(quizNumber) {
    currentQuiz = quizNumber;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    const quiz = quizzes[quizNumber];
    if (!quiz) {
        alert('Quiz not found!');
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="quiz-container">
            <h2>${quiz.title}</h2>
            <div id="question-container"></div>
            <button class="submit-btn" onclick="submitQuiz()">Submit Quiz</button>
        </div>
    `;

    showQuestion();
}

function showQuestion() {
    const quiz = quizzes[currentQuiz];
    const question = quiz.questions[currentQuestionIndex];
    const container = document.getElementById('question-container');

    let questionHTML = `
        <div class="question">
            <h3>Question ${currentQuestionIndex + 1} of ${quiz.questions.length}</h3>
            <p>${question.text}</p>
    `;

    if (question.type === 'true-false') {
        questionHTML += `
            <div class="options">
                <div class="option" onclick="selectAnswer(true)">True</div>
                <div class="option" onclick="selectAnswer(false)">False</div>
            </div>
        `;
    } else if (question.type === 'multiple-choice') {
        questionHTML += `
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectAnswer(${index})">${option}</div>
                `).join('')}
            </div>
        `;
    }

    questionHTML += '</div>';
    container.innerHTML = questionHTML;
}

function selectAnswer(answer) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    const selectedOption = event.target;
    selectedOption.classList.add('selected');
    
    userAnswers[currentQuestionIndex] = answer;
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
        if (currentQuestionIndex < quizzes[currentQuiz].questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }
    }, 500);
}

function submitQuiz() {
    const quiz = quizzes[currentQuiz];
    let score = 0;
    
    userAnswers.forEach((answer, index) => {
        const question = quiz.questions[index];
        if (question.type === 'true-false') {
            if (answer === question.correct) score++;
        } else if (question.type === 'multiple-choice') {
            if (answer === question.correct) score++;
        }
    });

    const percentage = (score / quiz.questions.length) * 100;
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <button class="back-btn" onclick="showQuizList()">Back to Quiz List</button>
        <div class="results">
            <h2>Quiz Results</h2>
            <div class="score">${score}/${quiz.questions.length} (${percentage.toFixed(1)}%)</div>
            <div class="feedback">
                ${getFeedback(percentage)}
            </div>
        </div>
    `;
}

function getFeedback(percentage) {
    if (percentage >= 90) return "Excellent! You've mastered this material!";
    if (percentage >= 70) return "Good job! You have a solid understanding.";
    if (percentage >= 50) return "You're getting there! Review the material and try again.";
    return "You might want to review the material and try again.";
}

function showQuizList() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <header>
            <h1>CITS3003 Computer Graphics Quizzes</h1>
            <p>Select a quiz to begin</p>
        </header>
        
        <div class="quiz-list">
            <div class="quiz-card" onclick="loadQuiz(1)">
                <h2>Quiz 1</h2>
                <p>Topics: OpenGL Basics, Rendering Pipeline</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(2)">
                <h2>Quiz 2</h2>
                <p>Topics: Transformations, Matrices</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(3)">
                <h2>Quiz 3</h2>
                <p>Topics: Rasterization, Shaders</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(4)">
                <h2>Quiz 4</h2>
                <p>Topics: Geometry, Viewing</p>
            </div>
            <div class="quiz-card" onclick="loadQuiz(5)">
                <h2>Quiz 5</h2>
                <p>Topics: Modern OpenGL, Buffers</p>
            </div>
        </div>
    `;
}

// Initialize the quiz list when the page loads
document.addEventListener('DOMContentLoaded', showQuizList); 