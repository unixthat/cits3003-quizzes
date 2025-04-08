# Week 3 Quiz: OpenGL Transformations and Coordinate Systems

1. True or False: In OpenGL, transformations are applied to vertices in the order they appear in the shader code.

2. Which of the following is true about homogeneous coordinates in OpenGL?
   a) They are used to represent 3D points and vectors with a fourth w-coordinate
   b) For points, w is typically set to 1.0
   c) For vectors, w is typically set to 0.0
   d) All of the above

3. What is the primary purpose of the Model matrix in the Model-View-Projection transformation pipeline?
   a) To transform vertices from world space to camera space
   b) To transform vertices from object space to world space
   c) To transform vertices from camera space to clip space
   d) To transform vertices from clip space to screen space

4. True or False: The View matrix transforms vertices from world space to camera space by moving the camera to the origin and rotating the scene accordingly.

5. Which of the following statements about perspective projection is correct?
   a) Objects appear smaller as they get closer to the camera
   b) Objects appear larger as they get closer to the camera
   c) All objects appear the same size regardless of distance
   d) The size of objects is not affected by perspective projection

6. What is the purpose of the near and far planes in perspective projection?
   a) They define the boundaries of what can be rendered
   b) They affect the precision of the depth buffer
   c) They determine how much perspective distortion is applied
   d) Both a and b

7. In OpenGL, what is the correct order of matrix multiplications to transform a vertex from object space to clip space?
   a) Vertex × Model × View × Projection
   b) Projection × View × Model × Vertex
   c) Vertex × Projection × View × Model
   d) Model × View × Projection × Vertex

8. True or False: The orthographic projection matrix preserves parallel lines and relative sizes of objects regardless of their distance from the camera.

9. What is the purpose of the w-divide (perspective divide) in the OpenGL pipeline?
   a) To convert from clip coordinates to normalized device coordinates (NDC)
   b) To apply perspective distortion to the scene
   c) To transform vertices from world space to camera space
   d) To convert from NDC to screen coordinates

10. Which of the following transformations would you use to make an object appear twice as large?
    a) Translate by a factor of 2
    b) Scale by a factor of 2
    c) Rotate by 2 degrees
    d) None of the above

11. What is the effect of applying a rotation transformation with a negative angle?
    a) The object rotates clockwise instead of counterclockwise
    b) The object rotates counterclockwise instead of clockwise
    c) The object becomes mirrored
    d) The object disappears

12. True or False: The order of transformations doesn't matter when combining multiple transformations.

13. What is the purpose of the aspect ratio in perspective projection?
    a) To ensure circles appear circular rather than elliptical
    b) To determine the field of view
    c) To set the near and far planes
    d) To control the amount of perspective distortion

14. Which space are vertices in after the vertex shader but before the perspective divide?
    a) World space
    b) Camera space
    c) Clip space
    d) Normalized device coordinates (NDC)

15. What happens to a vertex's position when you multiply it by an identity matrix?
    a) The position is set to (0,0,0)
    b) The position remains unchanged
    c) The position is inverted
    d) The position becomes undefined
