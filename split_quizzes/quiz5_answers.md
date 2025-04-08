# Week 5 Quiz Answer Key (Input, Interaction, and Callbacks)

1. **Answer: a)** An abstraction of input that categorizes devices by the type of data they return (e.g., locator returns a position, string returns text, pick returns a selection) rather than the physical device.  
   **Explanation:** Logical input devices are abstractions that categorize input based on the type of data they return, not the physical device used. This allows the same logical device type to be implemented using different physical devices.

2. **Answer: a)** **String** device and **Pick** device, respectively.  
   **Explanation:** A String device returns text input (like a keyboard), while a Pick device returns the ID of a selected object (like clicking on an object with a mouse).

3. **Answer: a)** In **request mode**, the program explicitly waits for input (e.g., calling a function to get a value, like waiting for the user to press enter), whereas in **event mode**, input is handled asynchronously via events and callbacks whenever the input occurs.  
   **Explanation:** Request mode is synchronous - the program pauses and waits for input. Event mode is asynchronous - the program continues running and input is handled through callbacks when events occur.

4. **Answer: True**  
   **Explanation:** In event-driven systems like GLUT, if no callback is registered for an event, that event is simply ignored. The system only processes events that have registered handlers.

5. **Answer: d)** **(a) and (c)** are true.  
   **Explanation:** GLUT provides callback registration functions for various events, and it manages an event loop internally through `glutMainLoop()`. The program spends most of its time in this loop, invoking callbacks when events occur.

6. **Answer: a)** Continuously execute some code when there are no other events (e.g., update animation and then trigger a new display) so that your application can redraw or animate smoothly even when no user input is happening.  
   **Explanation:** The idle callback is called whenever there are no other events to process, making it ideal for continuous animation or updates. It's commonly used with `glutPostRedisplay()` to create smooth animations.

7. **Answer: True**  
   **Explanation:** Each GLUT window has its own OpenGL context, allowing independent rendering states and resources for each window. This is important for multi-window applications.

8. **Answer: a)** A function that you (the programmer) write and register, which the system will call when a certain event occurs (e.g., a key press triggers your keyboard callback).  
   **Explanation:** Callback functions are user-defined functions that are registered with the system and called automatically when specific events occur. They are a fundamental part of event-driven programming.

9. **Answer:** When a key is pressed, GLUT calls your `myKeyFunc` with three parameters: the ASCII value of the key pressed, the x and y coordinates of the mouse at the time of the key press, and possibly a flag indicating if any modifier keys (Shift, Ctrl, Alt) were held during the key press.  
   **Explanation:** The keyboard callback receives the key's ASCII value, mouse position, and modifier state, allowing the program to respond appropriately to the key press.

10. **Answer:** To create a right-click context menu in GLUT: 1) Create a menu using `glutCreateMenu()`, 2) Add menu entries with `glutAddMenuEntry()`, 3) Attach the menu to the right mouse button with `glutAttachMenu(GLUT_RIGHT_BUTTON)`, 4) Define a menu callback function to handle menu selections.  
    **Explanation:** GLUT provides a simple menu system that can be attached to mouse buttons. The menu callback receives the menu item ID when an item is selected.

11. **Answer: a)** The origin of the window coordinate `(0,0)` is typically at the top-left in windowing systems, whereas OpenGL's default coordinate origin (for NDC) is center or bottom-left, so you may need to invert the y coordinate and normalize by window width/height.  
    **Explanation:** Window coordinates and OpenGL's normalized device coordinates (NDC) use different coordinate systems. Window coordinates typically have (0,0) at the top-left, while NDC has (-1,-1) at the bottom-left. Converting between them requires coordinate transformation.

12. **Answer: True**  
    **Explanation:** This is a common animation pattern in GLUT. The idle function updates object positions, calls `glutPostRedisplay()` to request a redraw, and the display callback draws the objects at their new positions. This creates smooth animation.

13. **Answer:** After updating the object's rotation state in the special key callback, you need to call `glutPostRedisplay()` to request a redraw. Without this call, the display callback won't be triggered, and the visual change won't appear on screen.  
    **Explanation:** Changing an object's state (like rotation) doesn't automatically trigger a redraw. You must explicitly request a redraw with `glutPostRedisplay()` for the changes to be visible.

14. **Answer:** To implement dragging: 1) Use a mouse down callback to detect when the left button is pressed and record the initial mouse position, 2) Use a motion callback to track mouse movement and update the object's position based on the change in mouse coordinates, 3) Use a mouse up callback to detect when the button is released and stop the dragging operation.  
    **Explanation:** Dragging requires tracking the mouse state (down, moving, up) and updating the object's position based on mouse movement. This is typically implemented using multiple mouse callbacks.

15. **Answer: a)** Initialize GLUT (e.g., `glutInit`), create a window (`glutCreateWindow`), set up desired callbacks (display, input, etc.), then call `glutMainLoop()` to hand over control to GLUT.  
    **Explanation:** The typical initialization sequence is: initialize GLUT, create a window, set up callbacks, and then enter the main loop. This ensures everything is properly set up before the event loop begins.
