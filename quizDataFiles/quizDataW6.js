const quizData = {
    title: "Week 6 Quiz: More on Callbacks continued, Computer Viewing & Projection",
    questions: [
      {
        type: "multiple-choice",
        text: "In GLUT, there is support for simple pop-up menus. How do you typically **trigger a GLUT menu** to appear?",
        options: [
          "Attach the menu to a mouse button (often the right mouse button) using `glutAttachMenu`, so that when that button is pressed, the menu appears.",
          "GLUT menus appear automatically on a right-click without any setup.",
          "Use a keyboard shortcut to show the menu.",
          "Call the menu handler directly from within the display callback."
        ],
        correctAnswerIndex: 0,
        explanation: "GLUT menus are typically triggered by attaching them to a mouse button using `glutAttachMenu()`. The right mouse button is commonly used for context menus."
      },
      {
        type: "multiple-choice",
        text: "When reading mouse input in OpenGL (using a library like GLUT), why might you need to **invert the y-coordinate** from the mouse callback to use it in your scene?",
        options: [
          "Window systems typically give (x,y) with y=0 at **top** of the window, but OpenGL's drawing coordinates (if using glViewport with origin at bottom) treat y=0 at bottom. So you convert y to `height - y`.",
          "It's only necessary if you use a perspective projection.",
          "Because the mouse hardware reports inverted data.",
          "Modern OpenGL contexts automatically handle this; no inversion needed."
        ],
        correctAnswerIndex: 0,
        explanation: "Window coordinate systems typically have (0,0) at the top-left, while OpenGL's coordinate system often has (0,0) at the bottom-left. This difference requires coordinate conversion when mapping mouse positions to OpenGL coordinates."
      },
      {
        type: "multiple-choice",
        text: "What is the significance of **glutReshapeFunc()** callback in an OpenGL program?",
        options: [
          "It allows the program to adjust the viewport and projection matrix when the window is resized. For example, you can call `glViewport` and update the projection to maintain aspect ratio.",
          "It prevents the window from being resized.",
          "It is called continuously to reshape objects.",
          "It handles switching between windowed and fullscreen modes automatically."
        ],
        correctAnswerIndex: 0,
        explanation: "The reshape callback is called whenever the window is resized. It's used to update the viewport dimensions and adjust the projection matrix to maintain the correct aspect ratio, preventing distortion of the rendered scene."
      },
      {
        type: "true-false",
        text: "The default OpenGL camera (before any viewing transformations) is located at the world origin looking along the -Z axis, with the up direction along +Y.",
        correctAnswerIndex: 0,
        explanation: "By default, the OpenGL camera is positioned at the origin (0,0,0) looking down the negative Z-axis, with the up direction along the positive Y-axis. This is the standard camera orientation in OpenGL."
      },
      {
        type: "multiple-choice",
        text: "The OpenGL **viewing transformation** (often set up via `gluLookAt` or manually) is conceptually:",
        options: [
          "A transform that moves/rotates the entire world so that the camera is at the origin looking down -Z. (It's equivalent to moving the camera to the origin with opposite movement of the camera's real motion).",
          "A projection that maps 3D to 2D.",
          "Always an orthographic transform by default.",
          "Applied after projection in the pipeline."
        ],
        correctAnswerIndex: 0,
        explanation: "The viewing transformation conceptually moves the entire world so that the camera is at the origin looking down the negative Z-axis. This is mathematically equivalent to moving the camera to the origin with the opposite motion."
      },
      {
        type: "multiple-choice",
        text: "Calling `gluLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)` generates a view matrix. What does this view matrix do?",
        options: [
          "It rotates and translates the world so that the camera is positioned at `(eyeX, eyeY, eyeZ)` and looking toward `(centerX, centerY, centerZ)` with the given up direction. Points in the world are transformed into the camera's coordinate system.",
          "It projects the scene onto a 2D plane.",
          "It moves the camera in world space (equivalent to the inverse transformation on the world).",
          "**(a) and (c)** are two ways to describe the same result (camera transform vs world transform)."
        ],
        correctAnswerIndex: 3,
        explanation: "The view matrix can be understood in two equivalent ways: either as transforming the world to position the camera at the origin, or as moving the camera to its desired position. Both descriptions lead to the same mathematical result."
      },
      {
        type: "multiple-choice",
        text: "**gluPerspective(fovY, aspect, zNear, zFar)** sets up a perspective projection. What effect do the parameters have?",
        options: [
          "`fovY` is the vertical field-of-view angle (in degrees) – a larger fov makes more of the scene visible but objects appear smaller (wide-angle lens effect), a smaller fov zooms in.",
          "`aspect` is the viewport width/height ratio – it ensures circles don't appear squashed (must match the actual window aspect).",
          "`zNear` and `zFar` define the distances of the near and far clipping planes from the camera – objects closer than zNear or beyond zFar will be clipped (and also these values affect depth buffer precision).",
          "**All of the above.**"
        ],
        correctAnswerIndex: 3,
        explanation: "All the parameters of `gluPerspective` have important effects: `fovY` controls the vertical field of view, `aspect` maintains proper proportions, and `zNear`/`zFar` define the viewing frustum and affect depth buffer precision."
      },
      {
        type: "true-false",
        text: "In a perspective projection, **parallel lines** in the 3D world that are not parallel to the projection plane will appear to converge in the 2D projected image (e.g., railroad tracks meeting at a vanishing point), whereas in an orthographic projection, parallel lines remain parallel in the image.",
        correctAnswerIndex: 0,
        explanation: "This is a fundamental difference between perspective and orthographic projections. Perspective projection creates the effect of parallel lines converging at a vanishing point, while orthographic projection preserves parallel lines."
      },
      {
        type: "multiple-choice",
        text: "In OpenGL, an **orthographic projection** (glOrtho) differs from a perspective projection (glFrustum/gluPerspective) in that:",
        options: [
          "Orthographic projection does not diminish object size with distance – an object appears the same size regardless of its depth (useful for 2D rendering or CAD), while perspective projection makes far objects look smaller (provides depth cues).",
          "Orthographic projection has no near or far clipping planes.",
          "Perspective projection cannot represent parallel lines correctly.",
          "Orthographic projection is always aligned with the screen axes and cannot be rotated."
        ],
        correctAnswerIndex: 0,
        explanation: "Orthographic projection maintains object size regardless of distance, making it useful for technical drawings and 2D interfaces. Perspective projection creates depth cues by making distant objects appear smaller."
      },
      {
        type: "multiple-choice",
        text: "What is the **view volume** in the context of viewing transformations?",
        options: [
          "It's the region of space that the camera can see after the projection transform – for perspective it's a frustum (a pyramid with the top cut off by the near plane), for orthographic it's a rectangular prism (box).",
          "It's the volume of the 3D model geometry.",
          "It's the volume of the OpenGL state.",
          "It refers to audio volume in multimedia applications."
        ],
        correctAnswerIndex: 0,
        explanation: "The view volume defines what portion of 3D space is visible to the camera. For perspective projection, it's a frustum (truncated pyramid), while for orthographic projection, it's a rectangular box."
      },
      {
        type: "true-false",
        text: "In OpenGL's legacy pipeline, you typically set `glMatrixMode(GL_PROJECTION)` to define projection (with glFrustum/gluPerspective or glOrtho) and `glMatrixMode(GL_MODELVIEW)` to define the view and modeling transforms (like gluLookAt for camera and glTranslate/Rotate for models).",
        correctAnswerIndex: 0,
        explanation: "In the legacy OpenGL pipeline, different matrix modes are used for different transformations. The projection matrix handles the projection transform, while the modelview matrix combines both the view transform and model transforms."
      },
      {
        type: "multiple-choice",
        text: "**Scenario (Short Answer)**: If the aspect ratio of the window changes (say the window is made much wider), what is a common step you must take in your projection setup to ensure the scene doesn't look distorted? (Hint: think of `gluPerspective` or `glOrtho` parameters.)",
        options: [
          "You need to update the aspect ratio parameter in your projection setup. For example, with `gluPerspective`, you would recalculate the aspect ratio as width/height and pass this new value to the function. This ensures that objects maintain their proper proportions regardless of window shape.",
          "You need to adjust the field of view to compensate for the wider window.",
          "You need to change the near and far clipping planes.",
          "You need to rotate the camera to account for the new window shape."
        ],
        correctAnswerIndex: 0,
        explanation: "When the window's aspect ratio changes, you must update the projection matrix to maintain the correct proportions. Otherwise, objects will appear stretched or squashed."
      },
      {
        type: "multiple-choice",
        text: "**Scenario (Short Answer)**: You have a camera at position (0, 0, 10) in world coordinates, looking toward the origin (0,0,0). Write a conceptual `gluLookAt` call for this camera, assuming +Y is up. Then describe what effect this will have on objects' coordinates when applied (for example, where does a world point at (0,0,0) end up in eye space?)",
        options: [
          "A conceptual `gluLookAt` call would be: `gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0)`. This positions the camera at (0,0,10) looking at the origin (0,0,0) with up vector (0,1,0). When this view matrix is applied, the world origin (0,0,0) would be transformed to (0,0,-10) in eye space, as the camera is looking toward it from 10 units away.",
          "A conceptual `gluLookAt` call would be: `gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0)`. This positions the camera at (0,0,10) looking at the origin (0,0,0) with up vector (0,1,0). When this view matrix is applied, the world origin (0,0,0) would be transformed to (0,0,10) in eye space.",
          "A conceptual `gluLookAt` call would be: `gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0)`. This positions the camera at (0,0,10) looking at the origin (0,0,0) with up vector (0,1,0). When this view matrix is applied, the world origin (0,0,0) would be transformed to (0,0,0) in eye space.",
          "A conceptual `gluLookAt` call would be: `gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0)`. This positions the camera at (0,0,10) looking at the origin (0,0,0) with up vector (0,1,0). When this view matrix is applied, the world origin (0,0,0) would be transformed to (0,0,-1) in eye space."
        ],
        correctAnswerIndex: 0,
        explanation: "The view matrix transforms world coordinates into camera coordinates. In this case, the world origin appears 10 units in front of the camera along the negative Z-axis in eye space."
      },
      {
        type: "multiple-choice",
        text: "**Scenario (Short Answer)**: Explain what happens if you set the near clipping plane (`zNear`) in a perspective projection to a very tiny value (e.g., 0.0001) while keeping the far plane large (e.g., 1000). Why is having an extremely close near plane problematic in practice?",
        options: [
          "Setting a very small near plane creates precision issues in the depth buffer. The depth buffer has limited precision, and when the ratio between far and near planes is very large (e.g., 1000/0.0001 = 10,000,000), the depth values become clustered near the far plane, causing z-fighting (flickering) of objects.",
          "Setting a very small near plane causes objects to be clipped incorrectly, making them appear to disappear when they should be visible.",
          "Setting a very small near plane causes the perspective effect to be too extreme, making objects appear distorted.",
          "Setting a very small near plane has no negative effects and is actually recommended for better precision."
        ],
        correctAnswerIndex: 0,
        explanation: "The depth buffer's precision is distributed logarithmically across the range between near and far planes. A very small near plane creates a huge ratio with the far plane, leading to poor depth precision and visual artifacts."
      },
      {
        type: "multiple-choice",
        text: "**Scenario (Short Answer)**: In a 3D scene, you want to render a Heads-Up Display (HUD) as 2D overlay on top of the 3D view (for example, text or icons that always face the camera and don't move with the 3D world). How would you configure the projection and modelview matrices to draw this HUD after rendering the 3D scene? (Hint: consider using an orthographic projection or switching matrices mode.)",
        options: [
          "To render a HUD that's always visible regardless of the 3D scene, you would: 1) Save the current projection and modelview matrices, 2) Set up an orthographic projection that matches the screen dimensions (e.g., `glOrtho(0, width, 0, height, -1, 1)`), 3) Reset the modelview matrix to identity, 4) Draw the HUD elements in screen space coordinates, 5) Restore the original matrices to continue with 3D rendering.",
          "To render a HUD, you would: 1) Use the same projection and modelview matrices as the 3D scene, 2) Draw the HUD elements at a fixed distance from the camera, 3) Use billboarding to make the HUD elements always face the camera.",
          "To render a HUD, you would: 1) Use a separate rendering pass with depth testing disabled, 2) Draw the HUD elements in world space coordinates, 3) Use a special shader that ignores the modelview transformation.",
          "To render a HUD, you would: 1) Use a post-processing effect to overlay the HUD on the final rendered image, 2) Apply the HUD as a texture on a full-screen quad."
        ],
        correctAnswerIndex: 0,
        explanation: "HUDs are typically rendered in screen space using orthographic projection. This approach ensures the HUD remains fixed on screen regardless of camera movement or 3D scene changes."
      }
    ]
  
};

export default quizData;