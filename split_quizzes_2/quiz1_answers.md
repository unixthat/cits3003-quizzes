# Master Quiz 1 Answer Key

1. **b) False.** Ray tracing and OpenGL's standard pipeline are fundamentally different. Ray tracing physically simulates rays of light to produce highly realistic images (with correct reflections, refractions, shadows, etc.), whereas OpenGL's pipeline uses a synthetic camera and rasterization approach. The statement as given is *false* because it claims these approaches are the same. In reality, ray tracing is an alternative to the typical OpenGL pipeline, not something that OpenGL itself does by default.

2. **a) True.** An ideal pinhole camera focuses an image perfectly (infinite depth of field), but because the aperture is just a tiny pinhole, almost no light gets through. This means images are very dim, and thus one must use a very long exposure time to collect enough light on the sensor/film. The statement accurately describes that trade-off: perfect focus (everything in focus) but extremely low light, requiring long exposures.

3. **c) Inkjet printer.** Inkjet printers use **subtractive** color mixing: typically cyan, magenta, and yellow (often with black as CMYK) inks. These inks filter out portions of white light to produce colors. Options (a), (b), and (d) are display devices (CRT, digital projector, LED display) which use **additive** color mixing (red, green, blue light) and not subtractive. Therefore, the only correct choice is the printer, which uses subtractive primaries.

4. **c) Objects, viewer, and lights can be specified independently of each other.** The synthetic camera model (used by OpenGL) allows you to define geometry, camera, and lighting separately. This is one of its advantages: these components are independent and combined by the system to form the image. 

   - Option (a) is incorrect because OpenGL's projection places the image plane in front of the camera (not behind), so that the image isn't inverted.
   - (b) is incorrect: OpenGL does **not** require simulating physical ray tracing; it uses a rasterization approach.
   - (d) is incorrect because in the synthetic model the image comes out upright (not upside-down) due to that image plane placement in front of the lens.

5. **a) is incorrect** (and thus the correct choice here). OpenGL by itself does **not** provide windowing or input routines – those are handled by libraries like GLUT/GLFW or platform APIs. Options (b), (c), and (d) are all true statements: OpenGL is indeed a specification/API for interfacing with GPUs, GPU vendors implement it in drivers, and it is designed to work with modern graphics hardware. Therefore, (a) is the odd one out, describing functionality OpenGL doesn't have (window creation and resizing are typically done by aux libs, not by OpenGL core).

6. **d) GL_QUADS.** Modern OpenGL (core profile 3.3+ and above) does not support the old `GL_QUADS` primitive – everything is generally rendered as points, lines, or triangles. In fact, OpenGL's preferred polygon is the triangle. The other options are valid primitives: points, triangle strips, and line loops are supported modes. `GL_QUADS` was available in older OpenGL (compatibility profile) but not in modern core profile (and even in older versions, quads would internally be broken into triangles).

7. **c) It has at least one interior angle greater than 180°.** By definition, a concave (non-convex) polygon will have an interior angle exceeding 180 degrees and a "dent" inward. This is equivalent to saying a line segment between two points of the polygon can fall outside of it. 

   - (a) is a property of convex polygons (all angles ≤ 180°).
   - (b) is incorrect: non-convex (concave) does *not* necessarily mean self-intersecting. A concave polygon can still be simple (no edges crossing).
   - (d) is wrong: concave polygons *can* be rendered in OpenGL, but the application must handle them (e.g., by tessellation). So the key trait of concave polygons among these choices is the interior angle > 180°.

8. **b) Converting vertices into assembled primitives.** The primitive assembly stage takes the processed vertices and groups them into primitives (points, lines, triangles) as specified by the drawing call. For example, if you call `glDrawArrays` with `GL_TRIANGLES`, primitive assembly will collect each trio of vertices into a triangle.

   - Clipping (a) typically happens right after assembly (or as part of it, depending on definition, but usually described as a separate stage).
   - Perspective divide (c) happens after the projection transformation, not during assembly.
   - Computing fragment colors (d) is the job of the fragment shader stage, **after** rasterization. So (b) correctly identifies the role of primitive assembly.

9. **c) Eye (camera) coordinates.** In eye (or camera) space, the camera is at the origin, looking down the negative Z-axis by convention. 

   - In model (object) coordinates, each object might have its own local frame.
   - In world coordinates, the camera could be anywhere (not necessarily at origin).
   - Window (screen) coordinates are 2D pixel coordinates after all transformations. The convention of camera at origin facing -Z applies specifically to the coordinate system *after applying the view transformation*, i.e., eye space.

10. **a) Rotation.** A pure rotation about any axis is a rigid transformation that preserves both shape and size. It does not change the object's scale or proportions – it only changes orientation. 

    - Translation (b) also preserves shape and size (it just moves the object's position), but it wasn't listed. Among the given options, rotation is the clear shape-and-size preserving operation.
    - Non-uniform scaling (c) changes the object's proportions (stretching/compressing along axes), so it definitely alters shape.
    - Shear (d) distorts angles and shapes as well. Thus, (a) is the transformation that leaves shape and size unchanged.

11. **a) Point + Point (is not defined).** In affine geometry, you can't add two points together meaningfully. You can add vectors to points or subtract points (giving a vector), but adding two distinct point positions doesn't yield a valid point in that space. 

    - Point – Point is defined and yields a vector (the difference between the two points). 
    - Point + Vector is defined (moving a point by a vector yields a new point).
    - Vector + Vector is of course defined (resulting in another vector).

12. **c) Fragment Shader.** Each fragment (potential pixel) produced by rasterization is processed by the fragment shader. The fragment shader runs for every fragment generated, computing its color (and other attributes like depth). 

    The vertex shader (a) runs per vertex, not per fragment. Geometry shaders and tessellation (if present) also operate on primitives or patches, not every pixel. So the fragment stage is the one that executes for each fragment.

13. **b) It provides built-in vector and matrix data types.** GLSL is a C-like shading language that includes high-level types such as `vec2`, `vec3`, `vec4` (for vector math), `mat2`, `mat3`, `mat4` (matrix types), as well as many built-in functions for graphics math. It does *not* allow pointer arithmetic or direct memory addresses like C/C++ does, and it runs on the GPU, not the CPU. So (b) is the correct statement.

14. **d) `color.xrg` is invalid.** In GLSL, swizzling must use components from the same naming set. Mixing **position** notation (x, y, z, w) with **color** notation (r, g, b, a) in one swizzle is not allowed. `color.xrg` tries to mix `.x` and `.rg` – `.x` belongs to the xyzw set, and `.r`/`.g` belong to the rgba set. That makes it illegal. 

    Options (a), (b), and (c) are all valid swizzles:
    - `color.xy` yields a `vec2` of the first two components (1,2 in this case).
    - `color.xx` yields a `vec2` with the x component repeated twice (1,1).
    - `color.zyx` yields a `vec3` with components in reversed order (3,2,1). These are allowed. Only (d) is disallowed by GLSL's rules.

15. **c) To update a portion of an existing buffer object's data.** `glBufferSubData` lets you replace a subset of data in a buffer that's already been allocated (with `glBufferData`). For example, you might allocate a large buffer then fill it in pieces using `glBufferSubData` at different offsets. 

    - (a) describes `glBufferData` (which allocates and initializes a buffer).
    - (b) "bind a buffer to a shader variable" is not how OpenGL works – buffer binding is to binding points (like GL_ARRAY_BUFFER), and shader variables (attributes) are linked via VAOs and vertex attrib pointers, not directly by `glBufferSubData`.
    - (d) "subdivide a complex primitive" would refer to tessellation, not this function. So (c) is correct.

16. **b) An object that stores the state of vertex attribute configurations.** A Vertex Array Object holds references to the vertex buffer objects and remembers how vertex attributes are set up (enabled/disabled, pointer formats, etc.). It's essentially an array of state settings for vertex inputs.

    - It is not literally a big array of all vertex data (that's what VBOs are for) – so (a) is wrong.
    - It's not a shader program (c) – shader programs are separate objects.
    - It's not deprecated; VAOs are a modern core feature (d is false). So (b) is the right description.

17. **b) glViewport can be called multiple times…** You can define multiple viewports in one window. For example, you could set one viewport to the left half of the window and draw a scene, then set another viewport to the right half and draw another scene. This is commonly done for split-screen or picture-in-picture rendering. So (b) is true. 

    - (a) is false – you're not limited to one viewport.
    - (c) is false – the viewport transform is a fixed-function step that happens after NDC, not something you code in the vertex shader.
    - (d) is false – the default is one viewport covering the whole window, but you can change its size and position with glViewport.

18. **c) Clicking on a displayed object – Pick device.** A pick device returns an identifier of a selected entity. In the scenario described, using a mouse to click an icon and getting an ID back is exactly a **Pick** operation. 

    - (a) Moving a mouse continuously would typically be treated as a locator device (giving a stream of positions) or a stroke device if recording the path, but "stroke" usually implies a sequence of positions making a path. This is less straightforward and not as directly one of the classic categories for a single coordinate update.
    - (b) Keyboard pressing is a **String** device (it returns characters), not a locator.
    - (d) Menu selection is a **Choice** device, not a string device. So (c) is the only correct pairing.

19. **c) They are registered with GLUT and called automatically…** In an event-driven program, you (the programmer) register callback functions with the system (GLUT). GLUT will then invoke those functions when the appropriate event occurs (e.g., when a key is pressed or when the window needs to be redrawn). 

    - (a) is wrong: you do not manually call the display or input callbacks – GLUT does that for you.
    - (b) is wrong: callback functions are your own functions (or library-provided ones you set), not OpenGL's built-in shape drawing.
    - (d) is wrong: you can register multiple callbacks (one per event type, e.g., one for display, one for keyboard, etc.). Therefore, (c) is the correct description.

20. **a) True.** Each GLUT window has a separate OpenGL context behind it. That means resources (textures, buffers, etc.) aren't automatically shared between windows unless explicitly set up. The statement is true – GLUT creates a new context per window by default. Thus every window manages its own rendering state independently.

21. **a) An `in` variable in a fragment shader receives interpolated data from the vertex shader.** In modern GLSL, vertex shader outputs (declared as `out`) get interpolated across the primitive and become `in` variables to the fragment shader. For example, if the vertex shader has `out vec3 vColor;`, the fragment shader can declare `in vec3 vColor;` to receive the smoothly interpolated color for each fragment.

    - (b) is incorrect: uniforms are set by the application, not within the shader.
    - (c) is incorrect: modern GLSL requires explicit in/out declarations.
    - (d) is incorrect: gl_Position is a vertex shader output, not used in fragment shaders. Thus, (a) is correct.

22. **a) True.** Once you call `glutMainLoop()`, GLUT takes over with its internal loop and will continuously process events (redraw, input, etc.) until the program exits. The function does not return back to your code. So any code after `glutMainLoop()` in `main()` will not execute. This matches typical GLUT usage (the program essentially lives inside the main loop).

23. **c) Rasterization.** The rasterizer is the pipeline stage that determines which pixels (fragments) are covered by a primitive. It takes assembled primitives (points, lines, triangles) and fills them in, generating fragment data for the fragment shader. 

    - Vertex shading happens earlier (processing each vertex).
    - Primitive assembly groups vertices into primitives.
    - Blending happens after fragment processing to mix colors, not to generate fragments. So (c) is correct.

24. **b) Omit the current fragment (not draw it).** In a fragment shader, the `discard` keyword will **throw away** the current fragment being processed. This means that fragment doesn't get written to the framebuffer (and doesn't undergo depth or stencil writes). Typically this is used for implementing transparency cutouts (e.g., discard fragments of a texture that are transparent).

    - (a) is wrong: Vertex processing is separate; `discard` has nothing to do with skipping vertices.
    - (c) is wrong: `discard` doesn't flush GPU commands; it's purely about the current fragment.
    - (d) is wrong: it doesn't unbind textures. So the correct effect is dropping that fragment from being drawn.

25. **a) Orthographic projection.** In an orthographic (parallel) projection, object size remains constant regardless of depth. An object will appear the same size no matter how far from the camera it is (assuming it's within the viewing volume). In contrast, perspective projection (b) makes far objects look smaller (foreshortening). 

    - Option (c) "Pinhole" is essentially perspective (so objects do change size with distance).
    - (d) "None" is incorrect because orthographic indeed maintains size with distance. So (a) is correct. 