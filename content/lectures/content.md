# Week 6 Lectures

## Lecture 011: more on Callbacks


```cpp
CITS3003 Graphics & Animation
Lecture 11:
Interactive Programs
with Callbacks and Menus
Content
```

- €¢
- €¢

```cpp
How to build interactive programs using GLUT callbacks
o Mouse
o Keyboard
o Reshape
o Idle
Introduction to menus in GLUT
Using a Pointing Device (Mouse)
```

- €¢

```cpp
Mouse Event: When one of the mouse buttons is depressed
or released or the scroll wheel is moved. glutMouseFunc()
```

- €¢

```cpp
Motion Event: When the mouse is moved within the window
with one of the buttons depressed. glutMotionFunc()
```

- €¢

```cpp
Passive Motion Event: When the mouse is moved within the
window without a button being held down.
glutPassiveMotionFunc()
The Mouse Callback
```

- €¢ The parameters passed to the function are:

```cpp
button - which mouse button caused the event
```

- €¢ GLUT_LEFT_BUTTON
- €¢ GLUT_MIDDLE_BUTTON
- €¢ GLUT_RIGHT_BUTTON
- €¢ Wheel is still a button
ïƒ˜
ïƒ˜

```cpp
button == 3 (scroll forward)
button == 4 (scroll backwards)
state - state of that button
```

(GLUT_UP, GLUT_DOWN)

```cpp
x, y â€“ the mouse click position (in pixels) in the window
Terminating a Program
```

- €¢ We can use a simple mouse callback to terminate a

```cpp
program:
```

- €¢ Note that we ignore the x and y parameters in the

```cpp
example above.
Mouse Positioning (x, y)
```

- €¢ The mouse position on the screen window is usually measured in

```cpp
pixels with the origin at the top-left corner
```

â€“ When the window is refreshed, it is done from top to bottom
- €¢ OpenGL uses a world coordinate system with the origin at the

```cpp
center of the window. Thus,
```

â€“ you must invert the y coordinate passed to your callback

```cpp
function by the height of the window
```

â€“ i.e., y = h â€“ y;

```cpp
GLUT(0,0)
y=(y/(h/2) â€“ 1.0;
h
```

â€“ x=x/(w/2) â€“ 1.0;

```cpp
OpenGL(-1,1)
w
How to Obtain the Window Size
```

- €¢ To invert the y position, we need to know the window height
- €¢ Note that the window height can change during program

```cpp
execution
```

- €¢ We can use a global variable to keep track of the window

```cpp
height value
Using the Mouse Position
```

- €¢ In the next example, we show how to draw a small

```cpp
square at the location of the mouse each time the left
mouse button is clicked.
Example 1: Drawing squares at
clicked location of cursor
x+size,y+size
x-size,y+size
x,y
x-size,y-size
x+size,y-size
Note that in the drawSquare function,
variable h is a global variable storing
the height (in pixels) of the window.
h, size, points and i are global variables. 9
Example 2: Drawing a triangle by specifying
```

3 vertices

```cpp
Using the Motion Callback
```

- €¢ We can draw squares (or anything else) using the motion callback:
- €¢ We can also draw squares without depressing a button using the

```cpp
passive motion callback
Using the Keyboard Callback
Parameters passed to the mykey callback function are:
```

- €¢ key â€“ the ASCII code of the key depressed
- €¢ x, y - and mouse location at the time the key was pressed

```cpp
Example:
Special and Modifier Keys
```

- €¢ GLUT defines the special keys in glut.h
â€“ Function key 1: GLUT_KEY_F1, GLUT_KEY_F12 â€¦
â€“ Up arrow key: GLUT_KEY_UP, GLUT_KEY_RIGHT â€¦
â€“ e.g., if (key == GLUT_KEY_F1 â€¦â€¦
- €¢ Can also check whether one of the modifiers
â€“ GLUT_ACTIVE_SHIFT
â€“ GLUT_ACTIVE_CTRL
â€“ GLUT_ACTIVE_ALT

```cpp
is depressed by
glutGetModifiers()
https://en.wikipedia.org/wiki/Function_key#/media/File:Qwerty.svg
Reshaping the Window
```

- €¢ We can reshape and resize the display window by

```cpp
pulling the corner of the window
```

- €¢ What happens to the display?
- €¢ The window in the application must be redrawn
- €¢ There are three possibilities:
1. We can display the whole world but force it to fit in the

```cpp
new window (this can alter the aspect ratio).
```

2. We can display part of the world.
3. We can alter the scale the of whole world to fit in the

```cpp
window and keep the aspect ratio.
Reshape Possibilities
```

- €¢ Three reshape possibilities

```cpp
Default
original
reshaped
The Reshape Callback
```

- €¢ Parameters passed to the function:

```cpp
w, h â€“ the width and height of new window (in pixels)
```

- €¢ What happens when the window is resized:

```cpp
o A redisplay is posted automatically at end of execution of
the callback
o GLUT has a default reshape callback but you probably
want to define your own
The Reshape Callback (cont.)
Suppose that the original display window is 500 (width) x 500 (height)
pixels, and the clipping volume is: left=-0.2, right=0.2, bottom=-0.2,
top=0.2, near=2.0, far=20.0.
Note that near and far clipping planes
should be positive; otherwise the clipping
volume would be taken as behind the
camera.
top
left viewer
far
right
No need to call glutPostRedisplay( ) here (see previous slide)
The Reshape Callback (cont.)
Viewing
Frustrum
object
reshaped window
without adjusting
the arguments in
glOrtho()
Display
window
reshaped
window as
per
previous
slide
The Reshape callback (cont.)
Same setting as described on the previous slide. What does the
following reshape callback function do?
Original
Viewing
Frustrum
aspect = width /height
MODIFIED Viewing
Frustrum
MODIFIED Viewing
Frustrum
https://www.youtube.com/watch?v=V87lLvKscIY
The Reshape callback (cont.)
Same setting as described on the previous slide. What does the
following reshape callback function do?
Original
Viewing
Frustrum
aspect = width /height
MODIFIED Viewing
Frustrum
MODIFIED Viewing
Frustrum
https://www.youtube.com/watch?v=V87lLvKscIY
The Idle Callback
```

- €¢ Invoked when there are no other events. Its

```cpp
default is the null function pointer.
```

- €¢ Uses:
â€“ continue to generate graphical primitives through a

```cpp
display function while nothing else is happening
```

â€“ to produce an animated display.
- €¢ In main, we specify an idle callback,
â€“ glutIdleFunc(idle);

```cpp
Example : Idle Callback
Toolkits and Widgets
```

- €¢ Most window systems provide a toolkit or library of

```cpp
functions for building user interfaces that use special
types of windows called widgets
```

- €¢ Widget sets include tools such as

```cpp
o Menus
o Slidebars
o Dials
o Input boxes
But toolkits tend to be platform dependent
```

- €¢ GLUT provides a few widgets including menus

```cpp
Menus
```

- €¢ GLUT supports pop-up menus

```cpp
o A menu can have submenus
```

- €¢ Three steps for setting up a menu:
1) Define entries for the menu
2) Define action for each menu item

```cpp
o Action carried out if an entry is selected
```

3) Attach menu to a mouse button

```cpp
Defining a Simple Menu
```

- €¢ In the main or init function:

```cpp
a unique ID returned by glut
name of the callback
function
clear screen
exit
entries that will appear when
right button is pressed
identifiers
Menu Actions
Example of a simple menu callback function:
Note when each menu is created, a unique id is returned by glut
```

- €¢

```cpp
To add a submenu, use glutAddSubMenu:
```

- €¢

```cpp
To add a menu entry, use glutAddMenuEntry:
```

- €¢

```cpp
To attach the current menu, use glutAttachMenu.
Menu â€“ an example
Put these lines of code
in an init function
Callback functions
Always create the
submenus before the
main menu
Menu â€“ an example
Further Reading
```

â€œInteractive Computer Graphics â€“ A Top-Down Approach with Shader-Based

```cpp
OpenGLâ€ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- €¢ Sec. 2.7 Control Functions
- €¢ Sec. 2.11 Adding Interaction up to

```cpp
Sec 2.11.4 The Idle Callback
```

- €¢ Sec 2.12 Menus
- €¢ C++ code in the Chapter04 - Chapter09 folders


---

## Lecture 012: Computer Viewing


```cpp
CITS3003 Graphics & Animation
Lecture 12:
Computer Viewing
Objectives
```

- €¢ Introduce OpenGL viewing functions
- Learn how to place the camera
- €¢ Introduce the mathematics of projection
- Learn how to define orthographic and perspective projection
- gluLookAt(), glOrtho(), glFrustum(), gluPerspective()

```cpp
and their mat.h counterparts
```

- €¢ Introduce glMatrixMode()

```cpp
Computer Viewing
```

- €¢ There are three aspects of the viewing process, all of

```cpp
which are implemented in the pipeline,
```

1. Positioning the camera
- €¢ Setting the model-view matrix
2. Selecting a lens
- €¢ Setting the projection matrix
3. Clipping
- €¢ Setting the view volume

```cpp
Image credits : https://www.bhphotovideo.com/explora/photography/tips-and-solutions/faq-wideangle-lenses
The OpenGL Camera
```

- €¢ In OpenGL, initially the object and camera frames are the

```cpp
same
```

- The default model-view matrix is an identity
- €¢ The camera is located at the origin and points in the

```cpp
negative ğ‘§ğ‘§ direction
Objects specified in
the world frame
World frame origin
```

(0,0,0)

```cpp
Moving the Camera Frame
default frames
frames after translation by ğ‘‘ğ‘‘
where ğ‘‘ğ‘‘ > 0
Translate(0.0,0.0,-d);
Camera frame origin
Default Frames
Translate the camera in
```

+z direction

```cpp
Moving the Camera Frame
We can move the objects in the â€“ ğ‘§ğ‘§ direction
o Moving the world frame
Default Frames
Translate the objects in -z
direction
Moving the Camera Frame
```

- €¢ If we want to visualize objects that have both positive and

```cpp
negative ğ‘§ğ‘§ âˆ’values we can either
```

- Move the objects in the negative ğ‘§ğ‘§ direction
- €¢ Translate the world frame
- Move the camera in the positive ğ‘§ğ‘§ direction
- €¢ Translate the camera frame

```cpp
Default Frames
Translate the objects
in -z direction
Both of these views
are equivalent and are
determined by the
model-view matrix
Translate the camera in
```

+z direction

```cpp
Moving the Camera
We can move the camera to any desired position by a
sequence of rotations and translations
Example: side view at the
```

+ğ‘¥ğ‘¥ axis looking towards the origin
1. Rotate the camera
2. Move it away from origin

```cpp
Model-view matrix ğ‘€ğ‘€ = ğ‘‡ğ‘‡ğ‘‡ğ‘‡
Moving the Camera â€“ OpenGL code
```

- €¢ Remember that the last transformation specified is

```cpp
first to be applied
```

// Using mat.h

```cpp
mat4 t = Translate (0.0, 0.0, -d);
mat4 ry = RotateY(90.0);
mat4 m = t*ry;
The LookAt() Function
```

- €¢ The GLU library contains the function gluLookAt which can be used

```cpp
to form the required model-view matrix.
void gluLookAt(eyeX, eyeY, eyeZ, centreX, centreY, centreZ, upX, upY, upZ)
```

- €¢ We need to define the eye (camera) position, the centre (fixation

```cpp
point), and an up direction. All are of type GLdouble.
Programmer defines:
```

- €¢eye position
- €¢LookAtpoint (at) and
- €¢Upvector (Updirection

```cpp
usually (0,1,0))
gluLookAt deprecated!
The LookAt() Function
```

- €¢ Alternatively, we can use LookAt() defined in mat.h
- The function returns a mat4 matrix.
- Can concatenate with modeling transformations

```cpp
Type: GLfloat
```

- €¢ Example:

```cpp
mat4 mv = LookAt(vec4 eye, vec4 at, vec4 up);
The LookAt() Function:
```

- €¢ Forms camera (u,v,n) frame
- €¢
- €¢
- €¢
- €¢

```cpp
n away from the view volume,
v is the cross product of n and up vector,
u at right angles to both n and v
Compose matrix to transform coordinates
```

(object to camera)

```cpp
Other Camera Viewing
Controls
n
```

- €¢ The LookAt() function is only for positioning the

```cpp
camera
```

- €¢ Other ways to specify camera position are:
- Yaw, pitch, roll (angles)
- Elevation, azimuth, twist (angles)
3D Viewing and View Volume

```cpp
How do we
set the
viewing
volume?
Previously
we set the
camera
position
Different View Volumes
Orthogonal View Volume
Perspective View Volume
Different view volume leads to different look
View volume parameters:
```

- €¢ Projection: Perspective, orthographic etc.,
- €¢ Near and far clipping planes- only the objects b/w near and far planes appear on

```cpp
the image
```

- €¢ Field of view â€“ determines how much of the world is captured in the picture
- €¢ Aspect ratio- w/h of the near plane

```cpp
Slide Content Credits: Emmanuel Agu, WPI, CS 543
Viewing Frustrum
Near plane + far plane + field of view = Viewing
Frustum
Near plane
Far plane
Objects outside the viewing
frustrum are clipped
Slide Content Credits: Emmanuel Agu, WPI, CS 543
Default Orthographic Projection
```

- €¢ The default projection in the eye (camera) frame is orthogonal
- €¢

```cpp
How to find the orthographic
projection of a 3D object on a
projection plane?
```

- €¢ Draw parallel lines from each object

```cpp
vertex to the projection plane.
```

- €¢ The projection center is at infinite
- €¢ Use (x,y) coordinates, just drop z

```cpp
coordinates
In orthographic projection, the projection lines are
parallel to each other and perpendicular to the
projection plane. Because there is no convergence
of light rays in orthographic projection, the
concept of focal length is not applicable
Image Credits: Emmanuel Agu, WPI, CS 543
Default Orthographic Projection
```

- €¢ The default projection in the eye (camera) frame is orthogonal
- €¢
- €¢ For a point ğ©ğ© = ğ‘¥ğ‘¥, ğ‘¦ğ‘¦, ğ‘§ğ‘§, 1 T within the default view volume, it is

```cpp
projected to ğ©ğ©ğ‘ğ‘ = (ğ‘¥ğ‘¥ğ‘ğ‘, ğ‘¦ğ‘¦ğ‘ğ‘, ğ‘§ğ‘§ğ‘ğ‘, ğ‘¤ğ‘¤ğ‘ğ‘)T , where
```

ğ‘¥ğ‘¥ğ‘ğ‘ = ğ‘¥ğ‘¥, ğ‘¦ğ‘¦ğ‘ğ‘ = ğ‘¦ğ‘¦, ğ‘§ğ‘§ğ‘ğ‘ = 0, ğ‘¤ğ‘¤ğ‘ğ‘ = 1
- €¢ i.e., we can define
- ğŒğŒ = 0

```cpp
and we can then write ğğğ‘ğ‘ = ğŒğŒğŒğŒ
```

- €¢ In practice, we can let ğŒğŒ = ğˆğˆ and then set ğ‘§ğ‘§ to 0

```cpp
Image Credits: Emmanuel Agu, WPI, CS 543
Simple Perspective
In perspective projection, the cameraâ€™s
focal length ğ‘‘ğ‘‘ is finite
A simple perspective projection:
Center of projection is at the origin
Projection plane ğ‘§ğ‘§ = ğ‘‘ğ‘‘, where ğ‘‘ğ‘‘ < 0
How to find the perspective projection of a
```

3D object on a projection plane?
- €¢ Draw line from object to projection center
- €¢ Calculate where each intersects projection

```cpp
plane
Slide Credits: Emmanuel Agu, WPI, CS 543
Simple Perspective (cont.)
Consider the top and side views
```

(top view)
ğ‘¥ğ‘¥ğ‘ğ‘ ğ‘¥ğ‘¥
=
ğ‘§ğ‘§
ğ‘‘ğ‘‘
ğ‘¥ğ‘¥

```cpp
i.e., ğ‘¥ğ‘¥ğ‘ğ‘ =
```

ğ‘§ğ‘§/ğ‘‘ğ‘‘
ğ‘¦ğ‘¦ğ‘ğ‘ ğ‘¦ğ‘¦
=
ğ‘§ğ‘§
ğ‘‘ğ‘‘
ğ‘¦ğ‘¦

```cpp
i.e., ğ‘¦ğ‘¦ğ‘ğ‘ =
```

ğ‘§ğ‘§/ğ‘‘ğ‘‘
ğ‘§ğ‘§ğ‘ğ‘ = ğ‘‘ğ‘‘
(side view)

```cpp
Recall: the
OpenGL synthetic
camera model in
an earlier lecture
SimplePerspective
Perspective (cont.)
Simple
```

(cont.)

```cpp
Consider ğ’’ğ’’ = ğŒğŒğ’‘ğ’‘ where
```

ğŒğŒ = 0
0 1/ğ‘‘ğ‘‘
ğ‘¥ğ‘¥
ğ‘¦ğ‘¦

```cpp
and
```

ğ©ğ©
=
ğ‘§ğ‘§
ğ‘¥ğ‘¥
ğ‘¦ğ‘¦
â‡’ ğªğª = ğ‘§ğ‘§
ğ‘§ğ‘§/ğ‘‘ğ‘‘

```cpp
In OpenGL, this
is the w term
Perspective
PerspectiveDivision
Division
```

- €¢ Since ğ‘¤ğ‘¤ = ğ‘§ğ‘§â„ğ‘‘ğ‘‘ â‰  1, so we must divide by w to return

```cpp
back to our three-dimensional space.
```

- €¢ This perspective division yields
ğ‘¥ğ‘¥
ğ‘¦ğ‘¦
ğ‘¦ğ‘¦ğ‘‘ğ‘‘ =
ğ‘§ğ‘§ğ‘ğ‘ = ğ‘‘ğ‘‘
ğ‘¥ğ‘¥ğ‘ğ‘ =
ğ‘§ğ‘§/ğ‘‘ğ‘‘
ğ‘§ğ‘§/ğ‘‘ğ‘‘

```cpp
which are the desired perspective equations, as on slide
```

20.

```cpp
Orthogonal
Viewing
Orthogonal Viewing
Type: GLdouble
```

- €¢ The OpenGL orthogonal viewing function is:

```cpp
void glOrtho(left, right, bottom, top, near, far)
```

- €¢ Alternatively, we can use Ortho() defined in mat.h:

```cpp
mat4 Ortho(left,right,bottom,top,near,far)
Type: GLfloat
near and far are measured from camera
Orthogonal Normalization
Ortho(left,right,bottom,top,near,far)
normalization â‡’ find transformation to convert
specified clipping volume to default
E. Angel and D. Shreiner: Interactive Computer Graphics 6E Â© Addison-Wesley 2012
Orthogonal Matrix
```

- €¢ Two steps
- Move center to origin

```cpp
T(-(left+right)/2, -(bottom+top)/2,(near+far)/2))
```

- Scale to have sides of length 2

```cpp
S(2/(left-right),2/(top-bottom),2/(near-far))
P = ST =
```

ï£®
ï£¯ right âˆ’ left
ï£¯
ï£¯
ï£¯
ï£¯
ï£¯
ï£¯
ï£°ï£¯

```cpp
top âˆ’ bottom
near âˆ’ far
E. Angel and D. Shreiner: Interactive Computer Graphics 6E Â© Addison-Wesley 2012
right âˆ’ left ï£¹
right âˆ’ left ï£º
```

ï£º

```cpp
top + bottom ï£º
```

âˆ’

```cpp
top âˆ’ bottom ï£º
far + near ï£º
```

ï£º

```cpp
far âˆ’ near ï£º
```

ï£»ï£º
âˆ’

```cpp
Perspective Viewing
Perspective
Viewing
```

- €¢ To define a perspective transformation matrix for the

```cpp
camera, we can use
mat4 Frustum(left,right,bottom,top,near,far)
defined in mat.h:
All are of type
GLfloat
Perspective Viewing
Viewing with
ofof
Viewâ€
Perspective
withâ€œField
```

â€œField

```cpp
Viewâ€
```

- €¢ Another way to get perspective projection is:

```cpp
mat4 Perspective(fovy, aspect, near, far)
which often provides a better interface
All are of type
GLfloat
Note:
aspect = w/h
fovy is an angle in degrees
The angle fovy is the angle between the top and bottom
planes of the clipping volume.
Perspective Normalization
distorted object
projects correctly
original clipping
volume
original object
new clipping
volume
projection matrix corresponding to Frustum(left,right,bottom,top,near,far) projection matrix corresponding to Persective(fovy, aspect, near, far)
E. Angel and D. Shreiner: Interactive Computer Graphics 6E Â© Addison-Wesley
The
Complete
Viewing
Pipeline
The Complete Viewing Pipeline
```

- €¢ Model (orient individual objects)
- €¢ View (orient the camera OR the entire world)
- €¢ Projection
ğ‘ƒğ‘ƒ âˆ— ğ‘‰ğ‘‰ âˆ— ğ‘€ğ‘€ğ‘–ğ‘– âˆ— ğ‘‚ğ‘‚ğ‘–ğ‘–
- €¢ There is one projection, one camera but there could be

```cpp
many objects ğ‘‚ğ‘‚ğ‘–ğ‘– and hence ğ‘€ğ‘€ğ‘–ğ‘– where ğ‘–ğ‘– = 1,2,3, â€¦ ğ‘›ğ‘›
The
Complete
Viewing
Pipeline
The Complete Viewing Pipeline
```

- €¢ Model (orient individual objects)
- €¢ View (orient the camera OR the entire world)
- €¢ Projection
ğ‘ƒğ‘ƒ âˆ— ğ‘‰ğ‘‰ âˆ— ğ‘€ğ‘€ğ‘–ğ‘– âˆ— ğ‘‚ğ‘‚ğ‘–ğ‘–
- €¢ The model-view matrix will take vertices in object coordinates and convert them to a representation in camera coordinates.
- €¢ The projection matrix will both carry out the desired projectionâ€”either orthogonal or perspectiveâ€”and convert a viewing volume

```cpp
specified in camera coordinates to fit inside the viewing cube in clip coordinates.
gluLookAt(), glOrtho(), glFrustum(), and
gluPerspective()
```

- €¢ Did you notice thatâ€¦
- €¢ The â€œglâ€ and â€œgluâ€ versions have no return

```cpp
arguments
```

- €¢ Whereas the mat.h versions LootAt(), Ortho(),

```cpp
Frustum() and Perspective() return 4x4 matrices of
type mat4
glMatrixMode()
glMatrixMode()
```

- €¢ Recall that OpenGL is a state machine

```cpp
Legacy OpenGL maintains several matrices for transforming points in 3D space
```

- €¢ glMatrixMode() defines the current matrix
- €¢ GL_MODELVIEW
- €¢ GL_PROJECTION
- €¢ GL_TEXTURE
- €¢ GL_COLOR
- €¢ glGet(GL_MATRIX_MODE) will return the current

```cpp
matrix mode
glMatrixMode()
glMatrixMode()
```

- €¢ When you define MODELVIEW with gluLookAt()
- OR
- €¢ When you define PROJECTION with glOrtho(),

```cpp
glFrustum(), or gluPerspective()
```

- €¢ The current matrix is multiplied by the new matrix

```cpp
glMatrixMode(GL_PROJECTION);
glLoadIdentity() /*clear the matrix*/
glFrustrum(-1.0, -1.0, -1.0, 1.5. 20.0)
FurtherReading
Reading
Further
```

â€œInteractive Computer Graphics â€“ A Top-Down Approach with Shader-Based

```cpp
OpenGLâ€ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- €¢ Secs. 4.1. Classical and Computer Viewing; 4.1.2. Orthographic Projections;

### 4.1.5 Perspective Viewing

- €¢ Sec. 4.2. Viewing with a Computer
- €¢ Sec. 4.3.1. Positioning of the Camera Frame; 4.3.3. The Look-At Function
- €¢ Sec. 4.4.1. Orthographic Projections; 4.4.2. Parallel Viewing with OpenGL;

### 4.4.4. Orthogonal-Projection Matrices; (optional) 4.4.6 An Interactive Viewer

- €¢ Secs. 4.5. â€“ 4.7. Projections â€“ Perspective-Projection Matrices


---

