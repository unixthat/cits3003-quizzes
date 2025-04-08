# Week 3 Quiz Answer Key: OpenGL Transformations and Coordinate Systems

1. **False**
   - Explanation: In OpenGL, transformations are applied in right-to-left order when written as matrix multiplications. This means that the rightmost transformation is applied first to the vertex, followed by the next transformation to its left, and so on. This order is crucial for achieving the desired transformation sequence.

2. **d) All of the above**
   - Explanation: Homogeneous coordinates in OpenGL use a fourth w-coordinate to represent both 3D points and vectors. For points, w is set to 1.0, which allows translation transformations to affect them. For vectors, w is set to 0.0, making them invariant to translations while still being affected by rotation and scaling.

3. **b) To transform vertices from object space to world space**
   - Explanation: The Model matrix is responsible for transforming vertices from object space (local coordinates) to world space. This transformation positions, rotates, and scales the object relative to the world origin and coordinate system. It's the first step in the Model-View-Projection (MVP) transformation pipeline.

4. **True**
   - Explanation: The View matrix transforms vertices from world space to camera space (eye space) by effectively moving the camera to the origin and rotating the entire scene so that the camera looks down the negative z-axis. This is equivalent to moving and rotating the camera to its desired position and orientation.

5. **b) Objects appear larger as they get closer to the camera**
   - Explanation: Perspective projection simulates how we see objects in the real world. Objects appear larger as they get closer to the camera and smaller as they get farther away. This creates a more realistic 3D appearance and is one of the key features of perspective projection.

6. **d) Both a and b**
   - Explanation: The near and far planes in perspective projection serve two important purposes: they define the boundaries of the viewing volume (anything outside won't be rendered), and they affect the precision of the depth buffer. The space between these planes is mapped to the depth buffer's range, affecting depth precision throughout the scene.

7. **b) Projection × View × Model × Vertex**
   - Explanation: The correct order of matrix multiplications is Projection × View × Model × Vertex when written in mathematical notation. This corresponds to first applying the Model transformation, then View, and finally Projection. Remember that matrix multiplications are read right-to-left in terms of the order of transformations applied to the vertex.

8. **True**
   - Explanation: The orthographic projection matrix creates a parallel projection where objects maintain their size regardless of distance from the camera, and parallel lines remain parallel. This is different from perspective projection where objects appear smaller with distance and parallel lines may converge.

9. **a) To convert from clip coordinates to normalized device coordinates (NDC)**
   - Explanation: The perspective divide (w-divide) is performed after the vertex shader and transforms vertices from clip space to normalized device coordinates (NDC) by dividing the x, y, and z components by the w component. This step is crucial for implementing perspective projection effects.

10. **b) Scale by a factor of 2**
    - Explanation: To make an object appear twice as large, you need to apply a scale transformation with a factor of 2. This uniformly multiplies all vertex coordinates by 2, effectively doubling the object's dimensions in all directions (or in specified directions if scaling non-uniformly).

11. **a) The object rotates clockwise instead of counterclockwise**
    - Explanation: When you specify a negative angle for rotation, the direction of rotation is reversed. In OpenGL, positive angles typically produce counterclockwise rotation (when looking along the rotation axis toward the origin), so negative angles produce clockwise rotation.

12. **False**
    - Explanation: The order of transformations is crucial and will produce different results if changed. For example, rotating an object and then translating it will produce a different result than translating it and then rotating it. This is because matrix multiplication is not commutative.

13. **a) To ensure circles appear circular rather than elliptical**
    - Explanation: The aspect ratio in perspective projection is used to compensate for non-square viewport dimensions. Without proper aspect ratio correction, circles would appear stretched or squashed. The aspect ratio ensures that the projection maintains proper proportions regardless of window dimensions.

14. **c) Clip space**
    - Explanation: After the vertex shader applies the MVP transformation but before the perspective divide, vertices are in clip space. This is a 4D homogeneous coordinate space where the viewing volume is defined by a cube extending from -w to +w in all dimensions. The perspective divide then transforms these coordinates to NDC.

15. **b) The position remains unchanged**
    - Explanation: An identity matrix is a special square matrix with 1s on the main diagonal and 0s elsewhere. When you multiply a vertex position by an identity matrix, the result is the same as the original position. This is why the identity matrix is often used as a starting point or default transformation.
