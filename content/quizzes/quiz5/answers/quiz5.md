# CITS3003 Computer Graphics - Quiz 5 Answers

## Part A: True/False Answers and Explanations

1. **True**: The depth buffer (also known as the z-buffer) is used to determine which fragments should be drawn when objects overlap by comparing the depth values of fragments at the same pixel location.

2. **True**: The perspective projection matrix is indeed a 4x4 matrix that transforms points from eye space to clip space, where the w component may be different from 1 to enable perspective division.

3. **True**: Modern OpenGL requires shaders to be written in GLSL and compiled before they can be used in the rendering pipeline.

4. **True**: The view matrix transforms vertices from world space to eye space, where the camera is positioned at the origin (0,0,0) looking down the negative z-axis.

5. **True**: The stencil buffer is specifically designed to create masking effects and control which fragments are drawn based on a test, allowing for complex rendering operations.

6. **True**: The model matrix transforms vertices from their local coordinate space (model space) to the global coordinate space (world space).

7. **True**: The projection matrix needs to be recalculated when the window is resized to maintain the correct aspect ratio and field of view.

8. **True**: The viewport transformation is the final step that maps normalized device coordinates (NDC) to actual window coordinates where pixels are drawn.

9. **True**: In modern OpenGL, VBOs store the actual vertex data, while VAOs store the configuration of how to interpret that data.

10. **True**: Perspective division (dividing by w) occurs after the vertex shader and before the fragment shader, as part of the fixed-function pipeline stages.

## Part B: Multiple Choice Answers and Explanations

1. **D. Memory Management**
   - Memory Management is not a stage in the graphics pipeline. The main stages are vertex processing, rasterization, and fragment processing.

2. **B. To distinguish between points and vectors**
   - The w component in homogeneous coordinates is used to distinguish between points (w ≠ 0) and vectors (w = 0), enabling unified transformation of both.

3. **B. They converge to a vanishing point**
   - In perspective projection, parallel lines that are not parallel to the projection plane converge to a vanishing point, creating the illusion of depth.

4. **D. array**
   - While GLSL supports various uniform types including matrices (mat4), vectors (vec3), and textures (sampler2D), it does not directly support arrays as uniform variables.

5. **C. To control which fragments are drawn**
   - The stencil buffer is used to control which fragments are drawn based on a test, allowing for effects like masking and complex rendering operations.

6. **B. Update the viewport with glViewport and recalculate the projection matrix**
   - When a window is resized, you need to update the viewport dimensions and recalculate the projection matrix to maintain the correct aspect ratio and field of view.

7. **B. It combines the model transform, view transform, and projection transform into one matrix**
   - The MVP matrix is a combination of all three transformations, allowing vertices to be transformed from model space to clip space in a single matrix multiplication.

8. **B. To store the state of vertex attribute configurations**
   - VAOs store the configuration of how vertex attributes are laid out and accessed, not the actual vertex data (which is stored in VBOs).

9. **C. Adding two points**
   - Adding two points is not a valid operation in affine geometry. You can add a vector to a point, subtract points to get a vector, and scale vectors, but adding points has no geometric meaning.

10. **D. Swap the buffers**
    - Buffer swapping is typically the last operation in the rendering loop. It displays the completed frame and prepares for the next frame to be rendered. 