const quizData = {
    title: "Week 5 Quiz: Input, Interaction, and Callbacks",
    questions: [
        {
            type: "multiple-choice",
            text: "In the context of a graphics program, what is meant by a \"logical input device\"?",
            options: [
                "An abstraction of input that categorizes devices by the type of data they return (e.g., locator returns a position, string returns text, pick returns a selection) rather than the physical device.",
                "Any input device that is currently plugged into the computer.",
                "A device used only in logical operations (like a binary switch).",
                "A device that processes input in a logical sequence."
            ],
            correctAnswerIndex: 0,
            explanation: "A logical input device is an abstraction that categorizes input devices by the type of data they return, rather than their physical implementation. This concept allows programmers to work with input in a device-independent way."
        },
        {
            type: "multiple-choice",
            text: "According to the logical device types, if Device A returns a string of characters and Device B returns the ID of a selected on-screen object, what logical device classes are A and B?",
            options: [
                "String device and Pick device, respectively.",
                "Keyboard and Mouse (physical devices).",
                "Stroke and Choice.",
                "Valuator and Locator."
            ],
            correctAnswerIndex: 0,
            explanation: "A String device returns text input (like a keyboard), while a Pick device returns the ID of a selected object (like clicking on an object with a mouse)."
        },
        {
            type: "multiple-choice",
            text: "What is the difference between immediate mode (request mode) input and event mode input in interactive graphics?",
            options: [
                "In request mode, the program explicitly waits for input (e.g., calling a function to get a value, like waiting for the user to press enter), whereas in event mode, input is handled asynchronously via events and callbacks whenever the input occurs.",
                "Immediate mode input refers to legacy OpenGL's glBegin/glEnd. Event mode refers to modern buffer operations.",
                "They are the same; the terms are interchangeable.",
                "Immediate mode input is faster than event mode."
            ],
            correctAnswerIndex: 0,
            explanation: "Request mode is synchronous - the program pauses and waits for input. Event mode is asynchronous - the program continues running and input is handled through callbacks when events occur."
        },
        {
            type: "true-false",
            text: "In an event-driven graphics library like GLUT, if no callback function is registered for a certain event (for example, no mouse-click callback), then mouse clicks in the window are simply ignored (no action happens).",
            correctAnswerIndex: 0,
            explanation: "In event-driven systems like GLUT, if no callback is registered for an event, that event is simply ignored. The system only processes events that have registered handlers."
        },
        {
            type: "multiple-choice",
            text: "Which of the following is true about using GLUT (OpenGL Utility Toolkit) for interactive programs?",
            options: [
                "GLUT provides callback registration functions like glutDisplayFunc, glutKeyboardFunc, glutMouseFunc to handle drawing and input events.",
                "GLUT automatically creates a default menu UI for any program.",
                "GLUT manages an event loop internally; once you call glutMainLoop(), your program will spend most of its time inside that loop invoking callbacks when events occur.",
                "(a) and (c) are true."
            ],
            correctAnswerIndex: 3,
            explanation: "GLUT provides callback registration functions for various events, and it manages an event loop internally through glutMainLoop(). The program spends most of its time in this loop, invoking callbacks when events occur."
        },
        {
            type: "multiple-choice",
            text: "In a typical OpenGL program using GLUT, what does the idle callback (glutIdleFunc) allow you to do?",
            options: [
                "Continuously execute some code when there are no other events (e.g., update animation and then trigger a new display) so that your application can redraw or animate smoothly even when no user input is happening.",
                "It is called when the CPU is idle to put the GPU to sleep.",
                "It is required to process keyboard events.",
                "It will be called exactly once after glutMainLoop starts and never again."
            ],
            correctAnswerIndex: 0,
            explanation: "The idle callback is called whenever there are no other events to process, making it ideal for continuous animation or updates. It's commonly used with glutPostRedisplay() to create smooth animations."
        },
        {
            type: "true-false",
            text: "Each window created by GLUT has its own separate OpenGL context, meaning if you open two windows, each maintains its own state (like current shaders, buffers, etc.) independent of the other.",
            correctAnswerIndex: 0,
            explanation: "Each GLUT window has its own OpenGL context, allowing independent rendering states and resources for each window. This is important for multi-window applications."
        },
        {
            type: "multiple-choice",
            text: "The term \"callback function\" in GUI/graphics libraries refers to:",
            options: [
                "A function that you (the programmer) write and register, which the system will call when a certain event occurs (e.g., a key press triggers your keyboard callback).",
                "Any function that calls another function.",
                "A function for error handling that \"calls back\" upon failure.",
                "The main function of a program."
            ],
            correctAnswerIndex: 0,
            explanation: "Callback functions are user-defined functions that are registered with the system and called automatically when specific events occur. They are a fundamental part of event-driven programming."
        },
        {
            type: "multiple-choice",
            text: "Suppose you registered a keyboard callback with glutKeyboardFunc(myKeyFunc). What information is typically passed to your myKeyFunc callback?",
            options: [
                "The ASCII value of the key pressed, the x and y coordinates of the mouse, and modifier key flags",
                "Only the key pressed",
                "The entire keyboard state",
                "A string containing the key name"
            ],
            correctAnswerIndex: 0,
            explanation: "The keyboard callback receives the key's ASCII value, mouse position, and modifier state, allowing the program to respond appropriately to the key press."
        },
        {
            type: "multiple-choice",
            text: "What are the steps to create a right-click context menu in GLUT?",
            options: [
                "Create menu with glutCreateMenu(), add entries with glutAddMenuEntry(), attach to right button with glutAttachMenu(), define menu callback",
                "Just call glutCreateMenu() and the menu appears automatically",
                "Write a custom menu drawing function",
                "Use the operating system's native menu API"
            ],
            correctAnswerIndex: 0,
            explanation: "GLUT provides a simple menu system that can be attached to mouse buttons. The menu callback receives the menu item ID when an item is selected."
        },
        {
            type: "multiple-choice",
            text: "If you receive the mouse callback in GLUT with coordinates (x, y) of a click, and you want to map this to OpenGL's normalized device coordinates or your world coordinates, what must you consider?",
            options: [
                "The origin of the window coordinate (0,0) is typically at the top-left in windowing systems, whereas OpenGL's default coordinate origin (for NDC) is center or bottom-left, so you may need to invert the y coordinate and normalize by window width/height.",
                "GLUT already gives coordinates in the same system that OpenGL uses for drawing vertices, so no conversion is needed.",
                "The x and y are in range -1 to 1 already.",
                "The coordinates are given in 3D, not 2D."
            ],
            correctAnswerIndex: 0,
            explanation: "Window coordinates and OpenGL's normalized device coordinates (NDC) use different coordinate systems. Window coordinates typically have (0,0) at the top-left, while NDC has (-1,-1) at the bottom-left. Converting between them requires coordinate transformation."
        },
        {
            type: "true-false",
            text: "Using GLUT, if you want to animate something, one common approach is to update object positions in an idle function or timer function, call glutPostRedisplay() to request a redraw, and then in the display callback, draw the objects at their new positions.",
            correctAnswerIndex: 0,
            explanation: "This is a common animation pattern in GLUT. The idle function updates object positions, calls glutPostRedisplay() to request a redraw, and the display callback draws the objects at their new positions. This creates smooth animation."
        },
        {
            type: "multiple-choice",
            text: "When handling arrow key presses via a GLUT special key callback to rotate an object, what is needed for the rotation to actually reflect on screen?",
            options: [
                "Call glutPostRedisplay() after updating the object's rotation state",
                "The rotation happens automatically",
                "Call the display function directly",
                "Restart the main loop"
            ],
            correctAnswerIndex: 0,
            explanation: "Changing an object's state (like rotation) doesn't automatically trigger a redraw. You must explicitly request a redraw with glutPostRedisplay() for the changes to be visible."
        },
        {
            type: "multiple-choice",
            text: "How would you implement a simple dragging interaction in GLUT?",
            options: [
                "Use mouse down callback to record initial position, motion callback to track movement and update object position, mouse up callback to stop dragging",
                "Just use the mouse motion callback",
                "Use keyboard controls instead",
                "Dragging is not possible in GLUT"
            ],
            correctAnswerIndex: 0,
            explanation: "Dragging requires tracking the mouse state (down, moving, up) and updating the object's position based on mouse movement. This is typically implemented using multiple mouse callbacks."
        },
        {
            type: "multiple-choice",
            text: "In an interactive graphics program, what is the typical order of operations to initialize and start the event loop (using GLUT as an example)?",
            options: [
                "Initialize GLUT (e.g., glutInit), create a window (glutCreateWindow), set up desired callbacks (display, input, etc.), then call glutMainLoop() to hand over control to GLUT.",
                "Call glutMainLoop() first, then create a window.",
                "Only call the display callback, nothing else is needed.",
                "Initialize OpenGL state after entering the main loop."
            ],
            correctAnswerIndex: 0,
            explanation: "The typical initialization sequence is: initialize GLUT, create a window, set up callbacks, and then enter the main loop. This ensures everything is properly set up before the event loop begins."
        }
    ]
};

export default quizData; 