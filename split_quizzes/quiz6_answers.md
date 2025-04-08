# Week 6 Quiz Answer Key (More on Callbacks continued, Computer Viewing & Projection)

1. **Answer: a)** Attach the menu to a mouse button (often the right mouse button) using `glutAttachMenu`, so that when that button is pressed, the menu appears.  
   **Explanation:** GLUT menus are typically triggered by attaching them to a mouse button using `glutAttachMenu()`. The right mouse button is commonly used for context menus.

2. **Answer: a)** Window systems typically give (x,y) with y=0 at **top** of the window, but OpenGL's drawing coordinates (if using glViewport with origin at bottom) treat y=0 at bottom. So you convert y to `height - y`.  
   **Explanation:** Window coordinate systems typically have (0,0) at the top-left, while OpenGL's coordinate system often has (0,0) at the bottom-left. This difference requires coordinate conversion when mapping mouse positions to OpenGL coordinates.

3. **Answer: a)** It allows the program to adjust the viewport and projection matrix when the window is resized. For example, you can call `glViewport` and update the projection to maintain aspect ratio.  
   **Explanation:** The reshape callback is called whenever the window is resized. It's used to update the viewport dimensions and adjust the projection matrix to maintain the correct aspect ratio, preventing distortion of the rendered scene.

4. **Answer: True**  
   **Explanation:** By default, the OpenGL camera is positioned at the origin (0,0,0) looking down the negative Z-axis, with the up direction along the positive Y-axis. This is the standard camera orientation in OpenGL.

5. **Answer: a)** A transform that moves/rotates the entire world so that the camera is at the origin looking down -Z. (It's equivalent to moving the camera to the origin with opposite movement of the camera's real motion).  
   **Explanation:** The viewing transformation conceptually moves the entire world so that the camera is at the origin looking down the negative Z-axis. This is mathematically equivalent to moving the camera to the origin with the opposite motion.

6. **Answer: d)** **(a) and (c)** are two ways to describe the same result (camera transform vs world transform).  
   **Explanation:** The view matrix can be understood in two equivalent ways: either as transforming the world to position the camera at the origin, or as moving the camera to its desired position. Both descriptions lead to the same mathematical result.

7. **Answer: d)** **All of the above.**  
   **Explanation:** All the parameters of `gluPerspective` have important effects: `fovY` controls the vertical field of view, `aspect` maintains proper proportions, and `zNear`/`zFar` define the viewing frustum and affect depth buffer precision.

8. **Answer: True**  
   **Explanation:** This is a fundamental difference between perspective and orthographic projections. Perspective projection creates the effect of parallel lines converging at a vanishing point, while orthographic projection preserves parallel lines.

9. **Answer: a)** Orthographic projection does not diminish object size with distance – an object appears the same size regardless of its depth (useful for 2D rendering or CAD), while perspective projection makes far objects look smaller (provides depth cues).  
   **Explanation:** Orthographic projection maintains object size regardless of distance, making it useful for technical drawings and 2D interfaces. Perspective projection creates depth cues by making distant objects appear smaller.

10. **Answer: a)** It's the region of space that the camera can see after the projection transform – for perspective it's a frustum (a pyramid with the top cut off by the near plane), for orthographic it's a rectangular prism (box).  
    **Explanation:** The view volume defines what portion of 3D space is visible to the camera. For perspective projection, it's a frustum (truncated pyramid), while for orthographic projection, it's a rectangular box.

11. **Answer: True**  
    **Explanation:** In the legacy OpenGL pipeline, different matrix modes are used for different transformations. The projection matrix handles the projection transform, while the modelview matrix combines both the view transform and model transforms.

12. **Answer:** You need to update the aspect ratio parameter in your projection setup. For example, with `gluPerspective`, you would recalculate the aspect ratio as width/height and pass this new value to the function. This ensures that objects maintain their proper proportions regardless of window shape.  
    **Explanation:** When the window's aspect ratio changes, you must update the projection matrix to maintain the correct proportions. Otherwise, objects will appear stretched or squashed.

13. **Answer:** A conceptual `gluLookAt` call would be: `gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0)`. This positions the camera at (0,0,10) looking at the origin (0,0,0) with up vector (0,1,0). When this view matrix is applied, the world origin (0,0,0) would be transformed to (0,0,-10) in eye space, as the camera is looking toward it from 10 units away.  
    **Explanation:** The view matrix transforms world coordinates into camera coordinates. In this case, the world origin appears 10 units in front of the camera along the negative Z-axis in eye space.

14. **Answer:** Setting a very small near plane creates precision issues in the depth buffer. The depth buffer has limited precision, and when the ratio between far and near planes is very large (e.g., 1000/0.0001 = 10,000,000), the depth values become clustered near the far plane, causing z-fighting (flickering) of objects.  
    **Explanation:** The depth buffer's precision is distributed logarithmically across the range between near and far planes. A very small near plane creates a huge ratio with the far plane, leading to poor depth precision and visual artifacts.

15. **Answer:** To render a HUD that's always visible regardless of the 3D scene, you would: 1) Save the current projection and modelview matrices, 2) Set up an orthographic projection that matches the screen dimensions (e.g., `glOrtho(0, width, 0, height, -1, 1)`), 3) Reset the modelview matrix to identity, 4) Draw the HUD elements in screen space coordinates, 5) Restore the original matrices to continue with 3D rendering.  
    **Explanation:** HUDs are typically rendered in screen space using orthographic projection. This approach ensures the HUD remains fixed on screen regardless of camera movement or 3D scene changes.
