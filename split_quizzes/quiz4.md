# Week 4 Quiz (Representation & Coordinate Systems, Transformations and Homogeneous Coordinates)

1. **Multiple Choice:** In 3D graphics, a **coordinate frame (coordinate system)** is defined by:  
   - a) A reference origin point and a set of basis vectors (axes) emanating from that origin, typically three perpendicular vectors for 3D.  
   - b) A grid drawn on graph paper.  
   - c) The screen's pixel coordinates.  
   - d) A camera and a light source.  

2. **Multiple Choice:** What is the difference between a **point** and a **vector** in the context of coordinate systems and transformations?  
   - a) A point represents a location in space (with coordinates relative to a frame), while a vector represents a direction and magnitude (no fixed position).  
   - b) There is no difference; the terms are interchangeable in graphics math.  
   - c) A point can be scaled and rotated, but a vector cannot.  
   - d) A vector has one less coordinate value than a point in homogeneous form.  

3. **True/False:** In homogeneous coordinates, a 4D vector \( (x, y, z, w) \) with \( w = 0 \) represents a direction (vector) rather than a position (point), and \( w = 1 \) represents a point in 3D space.  

4. **Multiple Choice:** Why do we use **homogeneous coordinates (4D)** for 3D graphics transformations?  
   - a) It allows translation to be represented as matrix multiplication, by using the extra coordinate and 4×4 matrices.  
   - b) It is necessary for representing colors.  
   - c) It doubles the memory usage for points, which is required for GPU compatibility.  
   - d) It makes no difference; it's just a historical curiosity.  

5. **Multiple Choice:** A **model (object) coordinate system** is to an object as a **world coordinate system** is to:  
   - a) The entire scene or environment in which the object resides.  
   - b) The camera's view.  
   - c) The screen pixels.  
   - d) Texture coordinates.  

6. **Multiple Choice:** Which transformation is typically used to convert coordinates from an object's local coordinate system to the world coordinate system?  
   - a) **Modeling transform** – e.g., a combination of rotates/translates/scales that position the object in the world.  
   - b) **View (camera) transform** – moving the world to camera space.  
   - c) **Projection transform** – projecting 3D to 2D.  
   - d) **Viewport transform** – mapping to window pixels.  

7. **Multiple Choice:** In a standard graphics pipeline, after applying the model and view transformations to objects, coordinates are in the **eye (camera) space**. What is characteristic of this eye coordinate system?  
   - a) The camera is at the origin and looking down the negative Z-axis in eye space (by convention).  
   - b) The units are in pixels.  
   - c) It's the same as world space always.  
   - d) The Y-axis is inverted compared to object space.  

8. **True/False:** A **rigid transformation** (also called a Euclidean transform) is a transformation that preserves distances and angles – it can include rotations and translations (and reflections), but not scaling or shear.  

9. **Multiple Choice:** Which category of transformation **can change the shape or size** of objects? (Assume we're talking about transforms represented by matrices in homogeneous coordinates.)  
   - a) **Affine transformations** – they include non-uniform scaling or shear, which do alter an object's size or shape.  
   - b) **Rigid transformations** – they include only rotation/translation, which do *not* change size or shape (just position/orientation).  
   - c) **Identity transformation** – it leaves objects unchanged entirely.  
   - d) **None of the above** (no matrix transform can change shape/size).  

10. **Multiple Choice:** A **rotation matrix** in 3D (without translation) has special properties. Which of these is one of them?  
    - a) Its inverse is equal to its transpose (the rows and columns are orthonormal vectors).  
    - b) It has all zeros except possibly a few ones.  
    - c) It cannot be represented in 4×4 homogeneous form.  
    - d) It scales vectors in addition to rotating them.  

11. **Multiple Choice:** Suppose you have a square in the XY-plane (Z=0 for all points). You apply a transformation matrix that includes a shear in X-direction proportional to Y. What happens to the square?  
    - a) It becomes a parallelogram (slanted shape) – one pair of its sides remain parallel and of the same length, but the right angles are gone (shear keeps area but changes shape).  
    - b) It remains a square, just moved to a different position.  
    - c) It turns into a trapezoid that is no longer planar.  
    - d) It gets rotated 45 degrees with no other change.  

12. **True/False:** **Composition of transformations** matters: applying a rotation then a translation is generally not the same as applying a translation then a rotation (the order of multiplying transformation matrices is significant).  

13. **Scenario (Calculation):** You have a point \( P \) at coordinates \((1, 0, 0)\) in an object's local frame. The object is rotated 90° about the Z-axis (positive rotation around Z) and then translated by \((0, 5, 0)\) in world units. What are the coordinates of the point \( P \) in the world frame after these transformations? (Assume Z-axis rotation of 90° sends the point \((1,0,0)\) to \((0,1,0)\). Provide the resulting coordinates.)  

14. **Scenario (Conceptual):** You want to rotate a model around its own local Y-axis by 30°, and then move it 10 units along the world X-axis. Should you apply the rotation or the translation first? Explain what happens in both orders (i.e., R then T vs. T then R) and which one achieves the desired result.  

15. **Multiple Choice:** A **simple polygon** in computer graphics is one that:  
    - a) Does not self-intersect (its edges only meet at their shared vertices).  
    - b) Has all angles < 180° (convex).  
    - c) Is defined by exactly three vertices.  
    - d) Lies in a single plane (planar).  

16. **Multiple Choice:** A **convex polygon** is defined by the property that:  
    - a) Any line segment connecting any two points inside the polygon lies entirely inside the polygon.  
    - b) It has no more than four sides.  
    - c) It must be axis-aligned.  
    - d) It is also simple and planar by necessity (no self-intersections, flat surface).  

17. **Multiple Choice:** If an object's model matrix includes a uniform scale of 2.0, and then you rotate the object 45°, and then translate by (5,0,0), which of the following is true about the final effect?  
    - a) The object is twice as large, rotated 45°, and then moved 5 units in world X (which is not simply 5 units in its local X due to rotation).  
    - b) The rotation happens in the object's scaled space, so it may not be exactly 45° in world space.  
    - c) The translation (5,0,0) happens along the world X-axis regardless of the object's rotation.  
    - d) **(a) and (c)** are true.  

18. **Scenario (Short Answer):** Explain what the **viewing transformation (view matrix)** accomplishes in terms of coordinate systems. For example, if you have a world with various objects and a camera positioned somewhere, what does applying the camera's view matrix to all objects do to their coordinates?
