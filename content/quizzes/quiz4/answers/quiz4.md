# CITS3003 Computer Graphics - Quiz 4 Answers

## Part A: True/False Answers and Explanations

1. **True**: A vector indeed has magnitude and direction but no fixed position in space. A point, on the other hand, specifies a specific location in space. This is a fundamental distinction in computer graphics and mathematics.

2. **True**: When you add a vector to a point, you get a new point that is displaced from the original point by the vector's magnitude and direction. This is a basic operation in affine geometry.

3. **True**: The difference between two points results in a vector that represents the displacement from one point to another. This vector has magnitude (distance) and direction but no fixed position.

4. **True**: When transforming between coordinate frames, you must account for both the orientation difference (rotation) and the position difference (translation) between the frames' origins.

5. **True**: The viewport transformation is the final step in the graphics pipeline that maps normalized device coordinates (NDC) to actual window coordinates where pixels are drawn.

6. **True**: The glutDisplayFunc callback is specifically designed to contain the rendering code that draws the scene. It's called whenever the window needs to be redrawn.

7. **True**: Sampling mode involves actively checking the state of input devices, as opposed to event-driven mode where the program responds to events as they occur.

8. **True**: In modern OpenGL, VBOs store the actual vertex data, while VAOs store the configuration of how to interpret that data (which attributes correspond to which parts of the vertex data).

9. **True**: The perspective projection matrix does transform points from eye space to clip space, and the w component becomes different from 1 for points that are not at the near plane, which is essential for perspective division.

10. **True**: Clearing the depth buffer at the start of each frame is a standard practice to ensure proper depth testing for the new frame.

## Part B: Multiple Choice Answers and Explanations

1. **C. Adding two points**
   - Adding two points is not a valid operation in affine geometry. You can add a vector to a point, subtract points to get a vector, and scale vectors, but adding points has no geometric meaning.

2. **D. Swap the buffers**
   - Buffer swapping is typically the last operation in the rendering loop. It displays the completed frame and prepares for the next frame to be rendered.

3. **B. It combines the model transform, view transform, and projection transform into one matrix**
   - The MVP matrix is a combination of all three transformations, allowing vertices to be transformed from model space to clip space in a single matrix multiplication.

4. **B. To store the state of vertex attribute configurations**
   - VAOs store the configuration of how vertex attributes are laid out and accessed, not the actual vertex data (which is stored in VBOs).

5. **D. Memory Management**
   - Memory Management is not a stage in the graphics pipeline. The main stages are vertex processing, rasterization, and fragment processing.

6. **B. To distinguish between points and vectors**
   - The w component in homogeneous coordinates is used to distinguish between points (w ≠ 0) and vectors (w = 0), enabling unified transformation of both.

7. **B. They converge to a vanishing point**
   - In perspective projection, parallel lines that are not parallel to the projection plane converge to a vanishing point, creating the illusion of depth.

8. **D. array**
   - While GLSL supports various uniform types including matrices (mat4), vectors (vec3), and textures (sampler2D), it does not directly support arrays as uniform variables.

9. **C. To control which fragments are drawn**
   - The stencil buffer is used to control which fragments are drawn based on a test, allowing for effects like masking and complex rendering operations.

10. **B. Update the viewport with glViewport and recalculate the projection matrix**
    - When a window is resized, you need to update the viewport dimensions and recalculate the projection matrix to maintain the correct aspect ratio and field of view. 