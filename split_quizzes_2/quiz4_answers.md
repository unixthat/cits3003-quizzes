# Master Quiz 4 Answer Key

1. **a) Model → View → Projection → Divide → Viewport.** That's the correct order:
   - First, model transformations (to world).
   - Then view (camera) transformation (to eye coordinates).
   - Then projection (to clip coordinates).
   - Then perspective divide (to NDC).
   - Then viewport mapping (to screen pixels).
   
   The other sequences are out of order. So (a) is right.

2. **a) True.** The final color of a rendered object usually comes from the lighting equation which considers light sources, material properties (like diffuse, specular reflectivity), and the viewer's position (for specular highlights, etc.). Without those factors, everything would look flat or not lit properly. So it's true.

3. **a) True.** Perspective projection has foreshortening: far objects appear smaller. That's one of its defining features (which gives a sense of depth). Orthographic, by contrast, would not have that effect. The statement is true.

4. **a) Automatic reflections/refractions.** Ray tracing simulation includes rays bouncing off surfaces (reflections) or bending through transparent materials (refractions), which rasterization (OpenGL's default pipeline) does not inherently do. 
   - Depth buffer (b) is used in OpenGL rasterization for visibility (not unique to ray tracing).
   - Matrix transforms (c) are common to both.
   - Shading models like Gouraud/Phong (d) are used in rasterization. So (a) is clearly a ray tracing hallmark.

5. **a) True.** This reiterates the earlier camera model concept. Real pinhole: image flips upside down on the film. Synthetic camera (OpenGL): we place a "projection plane" in front so the image doesn't invert. So yes, true.

6. **d) glRenderObject() – not a real function.** The others are all real (though note glBegin is deprecated in modern OpenGL, it's still a function in older versions). glRenderObject() is made up for this question. So (d) is not an actual OpenGL call.

7. **a) True.** Core OpenGL doesn't handle OS-specific tasks; you need a toolkit like GLUT or similar to create a window and capture keyboard/mouse events. So indeed, true.

8. **a) Hidden-surface removal via depth.** The depth buffer stores depth values for fragments and allows the system to keep track of the nearest surface at each pixel, discarding fragments that are behind something already stored (thus "hidden surface removal"). This is the main purpose of a z-buffer. It's not for color (b), not inherently for blending (that's a separate stage, though depth can affect blending indirectly), and not for texturing (d). So (a) is correct.

9. **a) True.** Model transforms indeed take local coordinates to the shared world coords. If you have multiple objects, you apply each object's model matrix to bring them into the world coordinate system together. So true.

10. **a) Rotation about the object's center.** A rotation around its own center does not distort or scale the object – it just changes its orientation. So shape and size remain same. 

    - Non-uniform scaling (b) changes shape.
    - Uniform scaling (c) changes size (though keeps shape).
    - Shear (d) definitely distorts shape. 
    So (a) is the one that leaves shape and size unchanged.

11. **a) True.** Rotations, translations, and scalings (if scale is not zero) are all affine transforms. They can be combined, and the result is an affine transform (represented by a 4x4 matrix). As long as no scale is zero (which would collapse dimension), the transform is invertible. So yes, it's true.

12. **a) Buffer objects with vertex attrib pointers.** Modern OpenGL uses VBOs to store vertex data. The application sets up these buffers and then uses `glVertexAttribPointer` calls (and glEnableVertexAttribArray) to tell OpenGL how to feed that data into the vertex shader's input variables. So (a) describes that.

    - (b) doesn't exist; GPU doesn't have built-in shapes.
    - (c) fragment shader doesn't feed vertex shader; flow is opposite.
    - (d) OpenGL doesn't auto-provide complex models for you. So (a) is correct.

13. **a) True.** Yes, vertex shader outputs (like varying color, texture coords) get interpolated across the primitive's surface during rasterization. Each fragment shader invocation then gets an interpolated value. That's exactly how smooth shading works. So it's true.

14. **b) Recursive function calls.** GLSL does not support recursion. Each shader invocation must be finite and cannot call itself or other functions cyclically. Loops are allowed (with some limits, they must be able to unroll or otherwise have a known maximum). Vector ops and built-in functions are allowed. So recursion (b) is the forbidden one.

15. **a) True.** `gl_FragCoord` gives the window coordinates (x, y) of the fragment and also the depth in gl_FragCoord.z. w is 1/clip.w basically. So yes, it contains screen position and depth. That is true.

16. **a) True.** glBufferSubData allows partial updates to an existing buffer's data store. This is exactly what the statement says, so true.

17. **a) glVertexAttribPointer.** This function defines the format of vertex data (like saying attribute index 0 is 3 floats per vertex, type float, stride X, offset Y in the currently bound VBO). It essentially tells OpenGL how to interpret memory in the bound VBO as vertex attributes, linking it to a specific attribute index (which is usually tied to a shader input). 

    - glBindVertexArray binds a VAO.
    - glEnableVertexAttribArray enables a given attribute index.
    - glBufferData allocates/initializes buffer memory. 
    Only glVertexAttribPointer explicitly sets the layout of vertex data in the buffer relative to the shader inputs.

18. **a) True.** `glutTimerFunc(msec, func, value)` triggers `func(value)` once after the given time in milliseconds. It's often used for triggering animation steps or events on a timed basis. After calling, if you want continuous periodic calls, you usually re-register it within the callback. So yes, it schedules a one-time future call. True.

19. **a) glutMouseFunc.** This sets a callback for mouse button events (presses and releases). The callback you pass to glutMouseFunc will be called with parameters like button, state (down/up), and mouse (x,y). 

    - MotionFunc is for movement *while* a button is pressed.
    - PassiveMotionFunc is for movement with no buttons pressed.
    - KeyboardFunc is keys, not mouse. So (a) is right.

20. **a) True.** The keyboard callback (for standard keys) has signature like `void func(unsigned char key, int x, int y)`. The x, y are the mouse coordinates at the time of the key event. GLUT provides that so you know where the mouse was when a key was pressed. So yes, that's true.

21. **a) True.** Exactly: `glutMotionFunc` handles dragged mouse movement (mouse move with a button held), and `glutPassiveMotionFunc` handles movement with no buttons. The statement is correct.

22. **a) True.** `glutPostRedisplay()` marks the current window as needing to redraw. GLUT will then call your display callback at the next opportunity (often next loop iteration). This is how you manually trigger redraws (especially in an idle or input callback). So it's true.

23. **a) GL_POINTS.** GL_POINTS is valid. GL_CUBE and GL_SPHERE are not actual primitive enums (they don't exist, those would be made of triangles or something via user code). GL_POLYGON_STRIP doesn't exist (there's GL_TRIANGLE_STRIP, but not POLYGON_STRIP). So (a) is the only valid primitive type listed. 