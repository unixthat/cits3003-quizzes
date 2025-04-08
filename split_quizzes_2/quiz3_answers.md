# Master Quiz 3 Answer Key

1. **a) True.** In a typical lighting shader, if there are no light sources defined, the objects will appear black because there's no light to reflect or illuminate them. This assumes a standard lighting model where object visibility depends on light sources. (Some basic shaders might still show objects without lights, but in a proper lighting setup, no lights means no illumination.)

2. **a) True.** Printers use CMY(K) which is indeed a subtractive color model. The inks subtract (absorb) certain wavelengths from white light, leaving only the desired colors to be reflected. This is in contrast to additive color (RGB) used by displays that emit light.

3. **a) Humans have three types of cone cells.** This is correct. The human retina has three types of cone cells (photoreceptors) that are most sensitive to long (red), medium (green), and short (blue) wavelengths. This trichromatic vision is why RGB works well for displays. The other options are incorrect:
   - Rod cells handle low-light vision, not color (b).
   - We don't need a primary for each wavelength due to metamerism (c).
   - We have three, not four, types of cone cells; CMYK is for printing, not displays (d).

4. **a) True.** OpenGL uses a synthetic camera model where the projection plane is indeed placed in front of the center of projection, unlike a real pinhole camera where the image plane is behind the pinhole. This design choice results in an upright image without the need for inversion.

5. **a) True.** OpenGL is a state machine – when you call functions like glEnable or set colors/materials, those settings remain in effect until explicitly changed. This state persists and affects all subsequent rendering operations until modified.

6. **c) OpenGL automatically handles physics...** is false. OpenGL is purely a graphics API; it doesn't handle physics, collision detection, or game logic. Those must be implemented separately. The other statements are true:
   - OpenGL commands do run on the GPU (a).
   - It can handle both 2D and 3D graphics (b).
   - It is cross-platform (d).

7. **a) True.** GLUT is indeed a utility library that provides cross-platform window creation and input handling for OpenGL applications. It abstracts away the platform-specific details of window management and event handling.

8. **b) GL_LINE_STRIP.** GL_LINE_STRIP is the correct primitive type for drawing connected line segments. It connects each vertex to the next in sequence. GL_LINE_LOOP would add an extra line back to the start, GL_TRIANGLE_STRIP is for triangles, and GL_LINES draws separate, unconnected line segments.

9. **a) True.** Three non-collinear points always define a unique triangle, and any triangle is inherently both simple (no self-intersections) and convex (all interior angles < 180°). This is why triangles are so fundamental in computer graphics.

10. **a) True.** Modern OpenGL core profile requires all polygons to be broken down into triangles. There is no direct support for arbitrary polygons with more than three vertices. Even if you're drawing a quad, it must be composed of two triangles.

11. **b) The Vertex Processing stage.** The vertex shader (vertex processing stage) is responsible for transforming vertices from model space through view space. While the application could do this on the CPU (a), it's typically done in the vertex shader for better performance. Rasterization (c) and fragment processing (d) happen later in the pipeline.

12. **a) True.** The view transformation is indeed the inverse of the camera's transformation. If the camera moves right, the view transform moves the world left, effectively bringing everything into the camera's coordinate system (eye space).

13. **c) Normalized Device Coordinate (NDC) space.** After projection and the perspective divide (division by w), vertices are in NDC space where coordinates range from -1 to +1 in all dimensions. This is before the viewport transform converts them to window coordinates.

14. **d) Non-uniform scaling.** Non-uniform scaling is affine (can be represented by a matrix) but not rigid because it changes the shape of objects. Rotation (a) and translation (b) are rigid transformations. Uniform scaling (c) changes size but preserves shape (it's a similarity transform, but not rigid).

15. **a) True.** In homogeneous coordinates, setting w=0 for a vector indicates it represents a direction rather than a position. This makes sense mathematically because translations don't affect vectors (directions), and setting w=0 achieves this property.

16. **b) mat3.** Among the options, only `mat3` (3×3 matrix) is a valid GLSL data type. The others are invalid:
    - There is no `vec5` (vectors are limited to 4 components)
    - Use `ivec3` for integer vectors, not `int3`
    - Use `bvec4` for boolean vectors, not `bool4`

17. **b) The fragment shader runs after rasterization.** This is correct. The pipeline order is: vertex shader → rasterization → fragment shader. The fragment shader processes each fragment (potential pixel) after rasterization. The other statements are false:
    - Fragment shaders run per fragment, not per triangle (a)
    - Vertex shaders can't see fragment shader results (c)
    - Vertex shaders can't emit new primitives (d)

18. **a) Compute and set gl_Position.** Every vertex shader must output the clip-space position via gl_Position. This is the minimum requirement for a vertex shader. The other options are incorrect:
    - gl_FragColor is for fragment shaders (b)
    - Texture sampling isn't required (c)
    - gl_PointSize is only needed for point primitives (d)

19. **a) True.** You must bind a VAO before configuring vertex attributes or drawing. The VAO stores the configuration of vertex attributes and their associations with VBOs, so it needs to be bound when setting these up or using them.

20. **a) Choice device.** A menu selection is a classic example of a choice device – it returns one option from a predefined set of choices. It's not a pick device (which selects objects in the scene), not a locator (which returns positions), and not a string device (which returns text).

21. **a) True.** A locator device does indeed provide spatial coordinates, typically from a pointing device like a mouse. The name comes from its function of "locating" or specifying a position in space.

22. **a) The window is resized.** The reshape callback is triggered when the window changes size, receiving the new dimensions as parameters. This allows the application to adjust the viewport and projection matrix to maintain proper aspect ratio.

23. **a) True.** Without a display callback, GLUT doesn't know what to draw in the window. The display callback is essential as it contains the rendering code that determines what appears in the window.

24. **a) True.** A stroke device provides a sequence of positions that trace out a path, like the points along a pen stroke or mouse drag. This is useful for freehand drawing or gesture recognition. 