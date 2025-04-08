# Week 5 Quiz (Input, Interaction, and Callbacks)

1. **Multiple Choice:** In the context of a graphics program, what is meant by a **"logical input device"**?  
   - a) An abstraction of input that categorizes devices by the type of data they return (e.g., locator returns a position, string returns text, pick returns a selection) rather than the physical device.  
   - b) Any input device that is currently plugged into the computer.  
   - c) A device used only in logical operations (like a binary switch).  
   - d) The hardware driver for an input device.  

2. **Multiple Choice:** According to the logical device types, if **Device A** returns a string of characters and **Device B** returns the ID of a selected on-screen object, what logical device classes are A and B?  
   - a) **String** device and **Pick** device, respectively.  
   - b) **Keyboard** and **Mouse** (physical devices).  
   - c) **Stroke** and **Choice**.  
   - d) **Valuator** and **Locator**.  

3. **Multiple Choice:** What is the difference between **immediate mode (request mode)** input and **event mode** input in interactive graphics?  
   - a) In **request mode**, the program explicitly waits for input (e.g., calling a function to get a value, like waiting for the user to press enter), whereas in **event mode**, input is handled asynchronously via events and callbacks whenever the input occurs.  
   - b) Immediate mode input refers to legacy OpenGL's `glBegin/glEnd`. Event mode refers to modern buffer operations.  
   - c) They are the same; the terms are interchangeable.  
   - d) Immediate mode input is faster than event mode.  

4. **True/False:** In an event-driven graphics library like GLUT, if no callback function is registered for a certain event (for example, no mouse-click callback), then mouse clicks in the window are simply ignored (no action happens).  

5. **Multiple Choice:** Which of the following is **true** about using **GLUT (OpenGL Utility Toolkit)** for interactive programs?  
   - a) GLUT provides callback registration functions like `glutDisplayFunc`, `glutKeyboardFunc`, `glutMouseFunc` to handle drawing and input events.  
   - b) GLUT automatically creates a default menu UI for any program.  
   - c) GLUT manages an event loop internally; once you call `glutMainLoop()`, your program will spend most of its time inside that loop invoking callbacks when events occur.  
   - d) **(a) and (c)** are true.  

6. **Multiple Choice:** In a typical OpenGL program using GLUT, what does the **idle callback** (`glutIdleFunc`) allow you to do?  
   - a) Continuously execute some code when there are no other events (e.g., update animation and then trigger a new display) so that your application can redraw or animate smoothly even when no user input is happening.  
   - b) It is called when the CPU is idle to put the GPU to sleep.  
   - c) It is required to process keyboard events.  
   - d) It will be called exactly once after `glutMainLoop` starts and never again.  

7. **True/False:** Each window created by GLUT has its own separate OpenGL context, meaning if you open two windows, each maintains its own state (like current shaders, buffers, etc.) independent of the other.  

8. **Multiple Choice:** The term **"callback function"** in GUI/graphics libraries refers to:  
   - a) A function that you (the programmer) write and register, which the system will call when a certain event occurs (e.g., a key press triggers your keyboard callback).  
   - b) Any function that calls another function.  
   - c) A function for error handling that "calls back" upon failure.  
   - d) The main function of a program.  

9. **Scenario:** Suppose you registered a keyboard callback with `glutKeyboardFunc(myKeyFunc)`. Describe how GLUT uses this when the user presses a key. What information is typically passed to your `myKeyFunc` callback? (Short answer: mention the parameters like which key and maybe mouse x,y position or special key indicator.)  

10. **Scenario:** You want to have a right-click context menu in your OpenGL application using GLUT. Outline the basic steps to create a simple pop-up menu with GLUT (no code needed, just describe the sequence of what you need to set up, e.g., create menu, add entries, attach to mouse button).  

11. **Multiple Choice:** If you receive the mouse callback in GLUT with coordinates `(x, y)` of a click, and you want to map this to OpenGL's normalized device coordinates or your world coordinates, what must you consider?  
    - a) The origin of the window coordinate `(0,0)` is typically at the top-left in windowing systems, whereas OpenGL's default coordinate origin (for NDC) is center or bottom-left, so you may need to invert the y coordinate and normalize by window width/height.  
    - b) GLUT already gives coordinates in the same system that OpenGL uses for drawing vertices, so no conversion is needed.  
    - c) The x and y are in range -1 to 1 already.  
    - d) The coordinates are given in 3D, not 2D.  

12. **True/False:** Using GLUT, if you want to animate something, one common approach is to update object positions in an idle function or timer function, call `glutPostRedisplay()` to request a redraw, and then in the display callback, draw the objects at their new positions.  

13. **Scenario (Short Answer):** You have a program where you handle arrow key presses via a GLUT special key callback (`glutSpecialFunc`). When the user presses the Left arrow, you want to rotate an object left. The callback is firing, but the object isn't rotating. What could be missing in your program for the rotation to actually reflect on screen? (Hint: think about what needs to happen after updating the object's rotation state.)  

14. **Scenario (Short Answer):** Explain how you would implement a simple **dragging** interaction: when the user presses and holds the left mouse button on an object and moves the mouse, the object should follow the cursor. (Describe which callbacks you'd use and the general approach to update the object's position.)  

15. **Multiple Choice:** In an interactive graphics program, what is the typical order of operations to initialize and start the event loop (using GLUT as an example)?  
    - a) Initialize GLUT (e.g., `glutInit`), create a window (`glutCreateWindow`), set up desired callbacks (display, input, etc.), then call `glutMainLoop()` to hand over control to GLUT.  
    - b) Call `glutMainLoop()` first, then create a window.  
    - c) Only call the display callback, nothing else is needed.  
    - d) Initialize OpenGL state after entering the main loop.
