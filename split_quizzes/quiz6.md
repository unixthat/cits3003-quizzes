# Week 6 Quiz (More on Callbacks continued, Computer Viewing & Projection)

1. **Multiple Choice**: In GLUT, there is support for simple pop-up menus. How do you typically **trigger a GLUT menu** to appear?  
   a) Attach the menu to a mouse button (often the right mouse button) using `glutAttachMenu`, so that when that button is pressed, the menu appears.  
   b) GLUT menus appear automatically on a right-click without any setup.  
   c) Use a keyboard shortcut to show the menu.  
   d) Call the menu handler directly from within the display callback.  

2. **Multiple Choice**: When reading mouse input in OpenGL (using a library like GLUT), why might you need to **invert the y-coordinate** from the mouse callback to use it in your scene?  
   a) Window systems typically give (x,y) with y=0 at **top** of the window, but OpenGL's drawing coordinates (if using glViewport with origin at bottom) treat y=0 at bottom. So you convert y to `height - y`.  
   b) It's only necessary if you use a perspective projection.  
   c) Because the mouse hardware reports inverted data.  
   d) Modern OpenGL contexts automatically handle this; no inversion needed.  

3. **Multiple Choice**: What is the significance of **glutReshapeFunc()** callback in an OpenGL program?  
   a) It allows the program to adjust the viewport and projection matrix when the window is resized. For example, you can call `glViewport` and update the projection to maintain aspect ratio.  
   b) It prevents the window from being resized.  
   c) It is called continuously to reshape objects.  
   d) It handles switching between windowed and fullscreen modes automatically.  

4. **True/False**: The default OpenGL camera (before any viewing transformations) is located at the world origin looking along the -Z axis, with the up direction along +Y.  

5. **Multiple Choice**: The OpenGL **viewing transformation** (often set up via `gluLookAt` or manually) is conceptually:  
   a) A transform that moves/rotates the entire world so that the camera is at the origin looking down -Z. (It's equivalent to moving the camera to the origin with opposite movement of the camera's real motion).  
   b) A projection that maps 3D to 2D.  
   c) Always an orthographic transform by default.  
   d) Applied after projection in the pipeline.  

6. **Multiple Choice**: Calling `gluLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)` generates a view matrix. What does this view matrix do?  
   a) It rotates and translates the world so that the camera is positioned at `(eyeX, eyeY, eyeZ)` and looking toward `(centerX, centerY, centerZ)` with the given up direction. Points in the world are transformed into the camera's coordinate system.  
   b) It projects the scene onto a 2D plane.  
   c) It moves the camera in world space (equivalent to the inverse transformation on the world).  
   d) **(a) and (c)** are two ways to describe the same result (camera transform vs world transform).  

7. **Multiple Choice**: **gluPerspective(fovY, aspect, zNear, zFar)** sets up a perspective projection. What effect do the parameters have?  
   a) `fovY` is the vertical field-of-view angle (in degrees) – a larger fov makes more of the scene visible but objects appear smaller (wide-angle lens effect), a smaller fov zooms in.  
   b) `aspect` is the viewport width/height ratio – it ensures circles don't appear squashed (must match the actual window aspect).  
   c) `zNear` and `zFar` define the distances of the near and far clipping planes from the camera – objects closer than zNear or beyond zFar will be clipped (and also these values affect depth buffer precision).  
   d) **All of the above.**  

8. **True/False**: In a perspective projection, **parallel lines** in the 3D world that are not parallel to the projection plane will appear to converge in the 2D projected image (e.g., railroad tracks meeting at a vanishing point), whereas in an orthographic projection, parallel lines remain parallel in the image.  

9. **Multiple Choice**: In OpenGL, an **orthographic projection** (glOrtho) differs from a perspective projection (glFrustum/gluPerspective) in that:  
   a) Orthographic projection does not diminish object size with distance – an object appears the same size regardless of its depth (useful for 2D rendering or CAD), while perspective projection makes far objects look smaller (provides depth cues).  
   b) Orthographic projection has no near or far clipping planes.  
   c) Perspective projection cannot represent parallel lines correctly.  
   d) Orthographic projection is always aligned with the screen axes and cannot be rotated.  

10. **Multiple Choice**: What is the **view volume** in the context of viewing transformations?  
    a) It's the region of space that the camera can see after the projection transform – for perspective it's a frustum (a pyramid with the top cut off by the near plane), for orthographic it's a rectangular prism (box).  
    b) It's the volume of the 3D model geometry.  
    c) It's the volume of the OpenGL state.  
    d) It refers to audio volume in multimedia applications.  

11. **True/False**: In OpenGL's legacy pipeline, you typically set `glMatrixMode(GL_PROJECTION)` to define projection (with glFrustum/gluPerspective or glOrtho) and `glMatrixMode(GL_MODELVIEW)` to define the view and modeling transforms (like gluLookAt for camera and glTranslate/Rotate for models).  

12. **Scenario (Short Answer)**: If the aspect ratio of the window changes (say the window is made much wider), what is a common step you must take in your projection setup to ensure the scene doesn't look distorted? (Hint: think of `gluPerspective` or `glOrtho` parameters.)  

13. **Scenario (Short Answer)**: You have a camera at position (0, 0, 10) in world coordinates, looking toward the origin (0,0,0). Write a conceptual `gluLookAt` call for this camera, assuming +Y is up. Then describe what effect this will have on objects' coordinates when applied (for example, where does a world point at (0,0,0) end up in eye space?).  

14. **Scenario (Short Answer)**: Explain what happens if you set the near clipping plane (`zNear`) in a perspective projection to a very tiny value (e.g., 0.0001) while keeping the far plane large (e.g., 1000). Why is having an extremely close near plane problematic in practice?  

15. **Scenario (Short Answer)**: In a 3D scene, you want to render a Heads-Up Display (HUD) as 2D overlay on top of the 3D view (for example, text or icons that always face the camera and don't move with the 3D world). How would you configure the projection and modelview matrices to draw this HUD after rendering the 3D scene? (Hint: consider using an orthographic projection or switching matrices mode.)
