# Week 4 Quiz Answer Key (Representation & Coordinate Systems, Transformations and Homogeneous Coordinates)

1. **Answer: a)** A reference origin point and a set of basis vectors (axes) emanating from that origin, typically three perpendicular vectors for 3D.  
   **Explanation:** A coordinate frame in 3D graphics is defined by an origin point and three perpendicular basis vectors (typically called i, j, k or x, y, z). These define the reference system for specifying positions and directions in 3D space.

2. **Answer: a)** A point represents a location in space (with coordinates relative to a frame), while a vector represents a direction and magnitude (no fixed position).  
   **Explanation:** In computer graphics, points and vectors are distinct mathematical entities. A point has a fixed position in space, while a vector has direction and magnitude but no fixed position. This distinction is important for transformations.

3. **Answer: True**  
   **Explanation:** In homogeneous coordinates, the w-component distinguishes between points and vectors. When w=0, the 4D vector represents a direction (vector) in 3D space. When w=1, it represents a point. This representation allows both points and vectors to be transformed using the same matrix operations.

4. **Answer: a)** It allows translation to be represented as matrix multiplication, by using the extra coordinate and 4×4 matrices.  
   **Explanation:** Homogeneous coordinates enable all transformations (including translation) to be represented as matrix multiplications. Without homogeneous coordinates, translation would require addition, which breaks the composition of transformations. The 4×4 matrix representation allows all transformations to be combined through multiplication.

5. **Answer: a)** The entire scene or environment in which the object resides.  
   **Explanation:** The model coordinate system is local to a specific object, defining its geometry. The world coordinate system is the global reference frame for the entire scene, where all objects are positioned relative to each other.

6. **Answer: a)** Modeling transform – e.g., a combination of rotates/translates/scales that position the object in the world.  
   **Explanation:** The modeling transform converts coordinates from an object's local coordinate system to the world coordinate system. It typically involves a combination of translations, rotations, and scalings to position, orient, and size the object in the world.

7. **Answer: a)** The camera is at the origin and looking down the negative Z-axis in eye space (by convention).  
   **Explanation:** In eye (camera) space, the camera is positioned at the origin (0,0,0) looking along the negative Z-axis, with the up direction along the positive Y-axis. This is a convention that simplifies many calculations in the graphics pipeline.

8. **Answer: True**  
   **Explanation:** A rigid transformation preserves distances and angles between points. It includes translations and rotations (and possibly reflections), but not scaling or shear, which would alter the shape or size of objects.

9. **Answer: a)** Affine transformations – they include non-uniform scaling or shear, which do alter an object's size or shape.  
   **Explanation:** Affine transformations can change the shape or size of objects through operations like non-uniform scaling or shear. Rigid transformations (rotations and translations) preserve shape and size, while the identity transformation leaves objects unchanged.

10. **Answer: a)** Its inverse is equal to its transpose (the rows and columns are orthonormal vectors).  
    **Explanation:** A rotation matrix has the special property that its inverse is equal to its transpose. This is because the rows and columns of a rotation matrix form orthonormal vectors (unit vectors that are perpendicular to each other).

11. **Answer: a)** It becomes a parallelogram (slanted shape) – one pair of its sides remain parallel and of the same length, but the right angles are gone (shear keeps area but changes shape).  
    **Explanation:** A shear transformation in the X-direction proportional to Y will slant the square, turning it into a parallelogram. The area remains the same, but the right angles are lost. The sides parallel to the Y-axis remain unchanged in length and direction.

12. **Answer: True**  
    **Explanation:** The order of transformations matters because matrix multiplication is not commutative. Applying a rotation then a translation produces a different result than applying a translation then a rotation. This is why the order of operations in the transformation pipeline is crucial.

13. **Answer: (0, 6, 0)**  
    **Explanation:** First, the point (1,0,0) is rotated 90° around the Z-axis, which moves it to (0,1,0). Then, it is translated by (0,5,0), which adds 5 to the Y coordinate, resulting in (0,6,0).

14. **Answer:** You should apply the rotation first, then the translation.  
    **Explanation:** If you rotate first (R) and then translate (T), the object will rotate around its local Y-axis and then move 10 units along the world X-axis. If you translate first (T) and then rotate (R), the object will move 10 units along the world X-axis and then rotate around its local Y-axis, which is now offset from the world origin. The first approach (R then T) achieves the desired result of rotating the object around its own axis and then moving it in world space.

15. **Answer: a)** Does not self-intersect (its edges only meet at their shared vertices).  
    **Explanation:** A simple polygon is one that does not self-intersect - its edges only meet at their shared vertices. This is a fundamental property that ensures the polygon can be properly rendered and processed by graphics systems.

16. **Answer: a)** Any line segment connecting any two points inside the polygon lies entirely inside the polygon.  
    **Explanation:** A convex polygon has the property that any line segment connecting any two points inside the polygon lies entirely within the polygon. This is a key geometric property that simplifies many graphics algorithms.

17. **Answer: d)** (a) and (c) are true.  
    **Explanation:** The object is indeed twice as large due to the scale of 2.0, rotated 45°, and then moved 5 units along the world X-axis. The translation happens in world space, so it's always 5 units along the world X-axis regardless of the object's rotation. The rotation happens after scaling, so it affects the scaled object.

18. **Answer:** The viewing transformation (view matrix) transforms objects from world space to camera (eye) space. It effectively moves and rotates the entire world so that the camera is at the origin looking down the negative Z-axis. This simplifies subsequent operations like projection.  
    **Explanation:** The view matrix is the inverse of the camera's world transformation. It transforms all objects in the world so that the camera appears to be at the origin looking down the negative Z-axis. This is equivalent to moving the camera to the origin with the opposite movement of the camera's real motion. After applying the view matrix, all coordinates are relative to the camera's position and orientation, making it easier to perform operations like projection.
