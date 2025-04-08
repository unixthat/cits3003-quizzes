# Master Quiz 5 Answer Key

1. **b) False.** Object appearance *is* affected by light sources. If there were truly no light effect, every object would look flat (or have some default coloring but no shading). The statement says "not affected by light," which is incorrect. In realistic rendering, lights are crucial. So the answer is false.

2. **a) True.** OpenGL's model encourages separating object geometry, light definitions, and camera parameters. You specify them independently and then OpenGL (with your shaders or fixed pipeline) computes the resulting image from their interaction. So yes, that's one of the strengths: independence of these components.

3. **a) True.** Ray tracing is computationally heavy since it traces many rays per pixel for effects like reflections, shadows, refraction. OpenGL's typical pipeline (rasterization) is much faster but less physically accurate. So indeed, ray tracing is more realistic but slower, making the statement true.

4. **a) True.** OpenGL itself is just a standard (by Khronos Group), and your video card's driver implements that standard. When you call an OpenGL function, it goes into the driver which then issues commands to the GPU. So it's true.

5. **a) On the GPU via the driver.** `glDrawArrays` (or similar) will have the GPU process your vertex data, run shaders, etc. The heavy lifting is on the GPU. The driver orchestrates this but it's not CPU doing the rendering calculations. So (a) is correct. (b) no separate CPU thread is spawned; (c) OpenGL used to have software fallback if no driver, but in normal use, it's the GPU; (d) is nonsense.

6. **a) True.** Modern OpenGL is retained mode: you put data in buffers (VBOs) and reuse them; you set state, and then draw calls use that state repeatedly. Immediate mode (glBegin/glVertex/glEnd) is deprecated because it sent vertices one by one each frame (immediate use and discard). So yes, modern GL is retained mode and needs shaders, which is quite different from old immediate mode. Thus true.

7. **a) True.** GLUT handles creating windows, setting pixel formats, and capturing input events, making the code mostly platform independent. It doesn't provide advanced GUI elements (b is false), it's not core OpenGL (c false), and it can be used in C or C++ (d false, it's basically a C API but callable from C++). So (a) is the correct true statement about GLUT.

8. **d) Rasterization stage.** Rasterization is what breaks primitives into fragments (basically "drawing" the primitive into the pixel grid, generating fragment data). Primitive Assembly just groups vertices; fragment shading happens after fragments are generated; vertex shading is earlier. So the answer is rasterization.

9. **a) True.** That's how varying interpolation works. The rasterizer interpolates the outputs of the vertex shader to produce inputs for each fragment shader execution. So yes, true.

10. **a) True.** After projection, coordinates are in clip space, where we still have a w component. We haven't normalized by dividing by w yet. Clip coordinates typically range arbitrarily (depending on projection), but when you divide by w you get NDC in [-1,1]. So yes, clip coordinates are before perspective divide. The statement is true.

11. **a) It preserves straight lines.** Affine transformations preserve collinearity and ratios of distances along lines. They do *not* necessarily preserve angles (b is false; that's only rigid or similarity transforms) or lengths (affine can scale differently, so not c). (c) is false because translations are a key part of affine transforms; indeed affine = linear transform + translation. (d) is false because affine is a kind of linear mapping in homogeneous coords (so not "non-linear" in that sense). So (a) is the property of affine: lines map to lines.

12. **a) True.** Transformations do not generally commute; doing one then another often yields a different result than the reverse. A classic example: rotate then translate vs translate then rotate yields different positions. So order matters and the statement is true.

13. **a) GLSL.** Shaders in OpenGL are most commonly written in GLSL (OpenGL Shading Language). It's a C-like language specific for OpenGL. C++ is used for your application but not directly as shader code. Assembly was used eons ago or as a target, but not by most developers. HLSL is DirectX's shading language, not OpenGL's. So (a) is correct.

14. **a) True.** The vertex shader must output `gl_Position`. If it doesn't, the clipping and rasterization have no position for the vertex. OpenGL will typically treat missing gl_Position as an error or undefined. So yes, you must set it. Therefore true.

15. **d) static.** In GLSL, the storage qualifiers are things like `attribute` (old), `varying` (old), or the modern `in`, `out`, `uniform`. The word `static` doesn't have the same meaning as in C++ for GLSL variables. You cannot declare a global "static" variable in GLSL that persists across shader invocations (each invocation is isolated). So (d) is not a GLSL storage qualifier. (It might compile in some contexts for local function scope to indicate compile-time const, but generally, static isn't a common GLSL keyword in the same way.)

16. **a) Use out in vertex and in in fragment.** The way to pass data is via an output from the vertex shader that matches an input in the fragment shader. For example: in the VS `out vec3 myColor;` and in the FS `in vec3 myColor;`. Uniform wouldn't work because uniform is constant for all fragments of a draw, not per vertex. Globals aren't automatically shared (there's no shared memory between shaders except what you pass via interfaces). So (a) is correct.

17. **a) True.** VAO captures the state of vertex buffer bindings and attribute pointers. When you bind that VAO later, all that configuration is restored so you can just call glDrawArrays without re-specifying all pointers. So yes, true.

18. **a) Unbinds the current array buffer.** In OpenGL, binding to 0 typically unbinds. For VBOs, glBindBuffer(target, 0) means "no buffer bound" for that target. This is often done to avoid accidental modifications or just to reset state. It doesn't bind a default (there is none beyond 0 meaning "none"), doesn't reset data (you'd use glDeleteBuffers to delete, or glBufferData to reallocate, not glBindBuffer to 0), and binding 0 is valid and not an error – it's the standard way to unbind. So (a) is correct.

19. **a) glutSpecialFunc.** GLUT has `glutKeyboardFunc` for ASCII keys and `glutSpecialFunc` for special keys (arrows, F1-F12, etc.). So to handle arrow keys, you use glutSpecialFunc. (There is no glutArrowFunc; you catch arrow in the special callback with a special key code.) So (a) is right.

20. **a) True.** When you call glutMainLoop, it doesn't return. It starts the event loop and keeps running until you close the window or exit the app. So code after it won't run. True.

21. **a) True.** If no display callback is registered, GLUT has nothing to call to actually render content. So the window would be blank or whatever default was last drawn (if anything). Typically, you must have a display callback. So true.

22. **a) True.** Yes, calling glutPostRedisplay flags the window to be redrawn. On the next loop iteration or as soon as possible, GLUT will call your display function. It's how you animate or update drawings in response to input or time. So true.

23. **d) GL_SQUARES is not a thing.** The others:
    - GL_POINTS – valid.
    - GL_TRIANGLES – valid.
    - GL_POLYGON – exists in older OpenGL (for a single polygon primitive, often convex only).
    But GL_SQUARES isn't an OpenGL primitive mode. So (d) is the one that's not real.

24. **a) True.** Enabling depth test makes OpenGL use the depth buffer to reject fragments that are farther away than what's already drawn at that pixel. This is exactly to ensure proper occlusion (close objects cover far ones). So the statement is true.

25. **a) glClearColor.** glClearColor sets the clear color. glColor3f sets current drawing color (not specifically background). glBackgroundColor doesn't exist. glClear with GL_COLOR_BUFFER_BIT doesn't take color parameters (it just uses whatever glClearColor was set). So (a) is correct: glClearColor(r,g,b,a) is used to set the clear (background) color, which you then apply with glClear. 