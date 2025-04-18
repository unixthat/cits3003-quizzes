# Week 6 Lectures

## Lecture 011: more on Callbacks


```cpp
CITS3003 Graphics & Animation
Lecture 11:
Interactive Programs
with Callbacks and Menus
Content
```

- ข
- ข

```cpp
How to build interactive programs using GLUT callbacks
o Mouse
o Keyboard
o Reshape
o Idle
Introduction to menus in GLUT
Using a Pointing Device (Mouse)
```

- ข

```cpp
Mouse Event: When one of the mouse buttons is depressed
or released or the scroll wheel is moved. glutMouseFunc()
```

- ข

```cpp
Motion Event: When the mouse is moved within the window
with one of the buttons depressed. glutMotionFunc()
```

- ข

```cpp
Passive Motion Event: When the mouse is moved within the
window without a button being held down.
glutPassiveMotionFunc()
The Mouse Callback
```

- ข The parameters passed to the function are:

```cpp
button - which mouse button caused the event
```

- ข GLUT_LEFT_BUTTON
- ข GLUT_MIDDLE_BUTTON
- ข GLUT_RIGHT_BUTTON
- ข Wheel is still a button
๏
๏

```cpp
button == 3 (scroll forward)
button == 4 (scroll backwards)
state - state of that button
```

(GLUT_UP, GLUT_DOWN)

```cpp
x, y โ the mouse click position (in pixels) in the window
Terminating a Program
```

- ข We can use a simple mouse callback to terminate a

```cpp
program:
```

- ข Note that we ignore the x and y parameters in the

```cpp
example above.
Mouse Positioning (x, y)
```

- ข The mouse position on the screen window is usually measured in

```cpp
pixels with the origin at the top-left corner
```

โ When the window is refreshed, it is done from top to bottom
- ข OpenGL uses a world coordinate system with the origin at the

```cpp
center of the window. Thus,
```

โ you must invert the y coordinate passed to your callback

```cpp
function by the height of the window
```

โ i.e., y = h โ y;

```cpp
GLUT(0,0)
y=(y/(h/2) โ 1.0;
h
```

โ x=x/(w/2) โ 1.0;

```cpp
OpenGL(-1,1)
w
How to Obtain the Window Size
```

- ข To invert the y position, we need to know the window height
- ข Note that the window height can change during program

```cpp
execution
```

- ข We can use a global variable to keep track of the window

```cpp
height value
Using the Mouse Position
```

- ข In the next example, we show how to draw a small

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

- ข We can draw squares (or anything else) using the motion callback:
- ข We can also draw squares without depressing a button using the

```cpp
passive motion callback
Using the Keyboard Callback
Parameters passed to the mykey callback function are:
```

- ข key โ the ASCII code of the key depressed
- ข x, y - and mouse location at the time the key was pressed

```cpp
Example:
Special and Modifier Keys
```

- ข GLUT defines the special keys in glut.h
โ Function key 1: GLUT_KEY_F1, GLUT_KEY_F12 โฆ
โ Up arrow key: GLUT_KEY_UP, GLUT_KEY_RIGHT โฆ
โ e.g., if (key == GLUT_KEY_F1 โฆโฆ
- ข Can also check whether one of the modifiers
โ GLUT_ACTIVE_SHIFT
โ GLUT_ACTIVE_CTRL
โ GLUT_ACTIVE_ALT

```cpp
is depressed by
glutGetModifiers()
https://en.wikipedia.org/wiki/Function_key#/media/File:Qwerty.svg
Reshaping the Window
```

- ข We can reshape and resize the display window by

```cpp
pulling the corner of the window
```

- ข What happens to the display?
- ข The window in the application must be redrawn
- ข There are three possibilities:
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

- ข Three reshape possibilities

```cpp
Default
original
reshaped
The Reshape Callback
```

- ข Parameters passed to the function:

```cpp
w, h โ the width and height of new window (in pixels)
```

- ข What happens when the window is resized:

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

- ข Invoked when there are no other events. Its

```cpp
default is the null function pointer.
```

- ข Uses:
โ continue to generate graphical primitives through a

```cpp
display function while nothing else is happening
```

โ to produce an animated display.
- ข In main, we specify an idle callback,
โ glutIdleFunc(idle);

```cpp
Example : Idle Callback
Toolkits and Widgets
```

- ข Most window systems provide a toolkit or library of

```cpp
functions for building user interfaces that use special
types of windows called widgets
```

- ข Widget sets include tools such as

```cpp
o Menus
o Slidebars
o Dials
o Input boxes
But toolkits tend to be platform dependent
```

- ข GLUT provides a few widgets including menus

```cpp
Menus
```

- ข GLUT supports pop-up menus

```cpp
o A menu can have submenus
```

- ข Three steps for setting up a menu:
1) Define entries for the menu
2) Define action for each menu item

```cpp
o Action carried out if an entry is selected
```

3) Attach menu to a mouse button

```cpp
Defining a Simple Menu
```

- ข In the main or init function:

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

- ข

```cpp
To add a submenu, use glutAddSubMenu:
```

- ข

```cpp
To add a menu entry, use glutAddMenuEntry:
```

- ข

```cpp
To attach the current menu, use glutAttachMenu.
Menu โ an example
Put these lines of code
in an init function
Callback functions
Always create the
submenus before the
main menu
Menu โ an example
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with Shader-Based

```cpp
OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ข Sec. 2.7 Control Functions
- ข Sec. 2.11 Adding Interaction up to

```cpp
Sec 2.11.4 The Idle Callback
```

- ข Sec 2.12 Menus
- ข C++ code in the Chapter04 - Chapter09 folders


---

## Lecture 012: Computer Viewing


```cpp
CITS3003 Graphics & Animation
Lecture 12:
Computer Viewing
Objectives
```

- ข Introduce OpenGL viewing functions
- Learn how to place the camera
- ข Introduce the mathematics of projection
- Learn how to define orthographic and perspective projection
- gluLookAt(), glOrtho(), glFrustum(), gluPerspective()

```cpp
and their mat.h counterparts
```

- ข Introduce glMatrixMode()

```cpp
Computer Viewing
```

- ข There are three aspects of the viewing process, all of

```cpp
which are implemented in the pipeline,
```

1. Positioning the camera
- ข Setting the model-view matrix
2. Selecting a lens
- ข Setting the projection matrix
3. Clipping
- ข Setting the view volume

```cpp
Image credits : https://www.bhphotovideo.com/explora/photography/tips-and-solutions/faq-wideangle-lenses
The OpenGL Camera
```

- ข In OpenGL, initially the object and camera frames are the

```cpp
same
```

- The default model-view matrix is an identity
- ข The camera is located at the origin and points in the

```cpp
negative ๐ง๐ง direction
Objects specified in
the world frame
World frame origin
```

(0,0,0)

```cpp
Moving the Camera Frame
default frames
frames after translation by ๐๐
where ๐๐ > 0
Translate(0.0,0.0,-d);
Camera frame origin
Default Frames
Translate the camera in
```

+z direction

```cpp
Moving the Camera Frame
We can move the objects in the โ ๐ง๐ง direction
o Moving the world frame
Default Frames
Translate the objects in -z
direction
Moving the Camera Frame
```

- ข If we want to visualize objects that have both positive and

```cpp
negative ๐ง๐ง โvalues we can either
```

- Move the objects in the negative ๐ง๐ง direction
- ข Translate the world frame
- Move the camera in the positive ๐ง๐ง direction
- ข Translate the camera frame

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

+๐ฅ๐ฅ axis looking towards the origin
1. Rotate the camera
2. Move it away from origin

```cpp
Model-view matrix ๐๐ = ๐๐๐๐
Moving the Camera โ OpenGL code
```

- ข Remember that the last transformation specified is

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

- ข The GLU library contains the function gluLookAt which can be used

```cpp
to form the required model-view matrix.
void gluLookAt(eyeX, eyeY, eyeZ, centreX, centreY, centreZ, upX, upY, upZ)
```

- ข We need to define the eye (camera) position, the centre (fixation

```cpp
point), and an up direction. All are of type GLdouble.
Programmer defines:
```

- ขeye position
- ขLookAtpoint (at) and
- ขUpvector (Updirection

```cpp
usually (0,1,0))
gluLookAt deprecated!
The LookAt() Function
```

- ข Alternatively, we can use LookAt() defined in mat.h
- The function returns a mat4 matrix.
- Can concatenate with modeling transformations

```cpp
Type: GLfloat
```

- ข Example:

```cpp
mat4 mv = LookAt(vec4 eye, vec4 at, vec4 up);
The LookAt() Function:
```

- ข Forms camera (u,v,n) frame
- ข
- ข
- ข
- ข

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

- ข The LookAt() function is only for positioning the

```cpp
camera
```

- ข Other ways to specify camera position are:
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

- ข Projection: Perspective, orthographic etc.,
- ข Near and far clipping planes- only the objects b/w near and far planes appear on

```cpp
the image
```

- ข Field of view โ determines how much of the world is captured in the picture
- ข Aspect ratio- w/h of the near plane

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

- ข The default projection in the eye (camera) frame is orthogonal
- ข

```cpp
How to find the orthographic
projection of a 3D object on a
projection plane?
```

- ข Draw parallel lines from each object

```cpp
vertex to the projection plane.
```

- ข The projection center is at infinite
- ข Use (x,y) coordinates, just drop z

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

- ข The default projection in the eye (camera) frame is orthogonal
- ข
- ข For a point ๐ฉ๐ฉ = ๐ฅ๐ฅ, ๐ฆ๐ฆ, ๐ง๐ง, 1 T within the default view volume, it is

```cpp
projected to ๐ฉ๐ฉ๐๐ = (๐ฅ๐ฅ๐๐, ๐ฆ๐ฆ๐๐, ๐ง๐ง๐๐, ๐ค๐ค๐๐)T , where
```

๐ฅ๐ฅ๐๐ = ๐ฅ๐ฅ, ๐ฆ๐ฆ๐๐ = ๐ฆ๐ฆ, ๐ง๐ง๐๐ = 0, ๐ค๐ค๐๐ = 1
- ข i.e., we can define
- ๐๐ = 0

```cpp
and we can then write ๐๐๐๐ = ๐๐๐๐
```

- ข In practice, we can let ๐๐ = ๐๐ and then set ๐ง๐ง to 0

```cpp
Image Credits: Emmanuel Agu, WPI, CS 543
Simple Perspective
In perspective projection, the cameraโs
focal length ๐๐ is finite
A simple perspective projection:
Center of projection is at the origin
Projection plane ๐ง๐ง = ๐๐, where ๐๐ < 0
How to find the perspective projection of a
```

3D object on a projection plane?
- ข Draw line from object to projection center
- ข Calculate where each intersects projection

```cpp
plane
Slide Credits: Emmanuel Agu, WPI, CS 543
Simple Perspective (cont.)
Consider the top and side views
```

(top view)
๐ฅ๐ฅ๐๐ ๐ฅ๐ฅ
=
๐ง๐ง
๐๐
๐ฅ๐ฅ

```cpp
i.e., ๐ฅ๐ฅ๐๐ =
```

๐ง๐ง/๐๐
๐ฆ๐ฆ๐๐ ๐ฆ๐ฆ
=
๐ง๐ง
๐๐
๐ฆ๐ฆ

```cpp
i.e., ๐ฆ๐ฆ๐๐ =
```

๐ง๐ง/๐๐
๐ง๐ง๐๐ = ๐๐
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
Consider ๐๐ = ๐๐๐๐ where
```

๐๐ = 0
0 1/๐๐
๐ฅ๐ฅ
๐ฆ๐ฆ

```cpp
and
```

๐ฉ๐ฉ
=
๐ง๐ง
๐ฅ๐ฅ
๐ฆ๐ฆ
โ ๐ช๐ช = ๐ง๐ง
๐ง๐ง/๐๐

```cpp
In OpenGL, this
is the w term
Perspective
PerspectiveDivision
Division
```

- ข Since ๐ค๐ค = ๐ง๐งโ๐๐ โ  1, so we must divide by w to return

```cpp
back to our three-dimensional space.
```

- ข This perspective division yields
๐ฅ๐ฅ
๐ฆ๐ฆ
๐ฆ๐ฆ๐๐ =
๐ง๐ง๐๐ = ๐๐
๐ฅ๐ฅ๐๐ =
๐ง๐ง/๐๐
๐ง๐ง/๐๐

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

- ข The OpenGL orthogonal viewing function is:

```cpp
void glOrtho(left, right, bottom, top, near, far)
```

- ข Alternatively, we can use Ortho() defined in mat.h:

```cpp
mat4 Ortho(left,right,bottom,top,near,far)
Type: GLfloat
near and far are measured from camera
Orthogonal Normalization
Ortho(left,right,bottom,top,near,far)
normalization โ find transformation to convert
specified clipping volume to default
E. Angel and D. Shreiner: Interactive Computer Graphics 6E ยฉ Addison-Wesley 2012
Orthogonal Matrix
```

- ข Two steps
- Move center to origin

```cpp
T(-(left+right)/2, -(bottom+top)/2,(near+far)/2))
```

- Scale to have sides of length 2

```cpp
S(2/(left-right),2/(top-bottom),2/(near-far))
P = ST =
```

๏ฃฎ
๏ฃฏ right โ left
๏ฃฏ
๏ฃฏ
๏ฃฏ
๏ฃฏ
๏ฃฏ
๏ฃฏ
๏ฃฐ๏ฃฏ

```cpp
top โ bottom
near โ far
E. Angel and D. Shreiner: Interactive Computer Graphics 6E ยฉ Addison-Wesley 2012
right โ left ๏ฃน
right โ left ๏ฃบ
```

๏ฃบ

```cpp
top + bottom ๏ฃบ
```

โ

```cpp
top โ bottom ๏ฃบ
far + near ๏ฃบ
```

๏ฃบ

```cpp
far โ near ๏ฃบ
```

๏ฃป๏ฃบ
โ

```cpp
Perspective Viewing
Perspective
Viewing
```

- ข To define a perspective transformation matrix for the

```cpp
camera, we can use
mat4 Frustum(left,right,bottom,top,near,far)
defined in mat.h:
All are of type
GLfloat
Perspective Viewing
Viewing with
ofof
Viewโ
Perspective
withโField
```

โField

```cpp
Viewโ
```

- ข Another way to get perspective projection is:

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
E. Angel and D. Shreiner: Interactive Computer Graphics 6E ยฉ Addison-Wesley
The
Complete
Viewing
Pipeline
The Complete Viewing Pipeline
```

- ข Model (orient individual objects)
- ข View (orient the camera OR the entire world)
- ข Projection
๐๐ โ ๐๐ โ ๐๐๐๐ โ ๐๐๐๐
- ข There is one projection, one camera but there could be

```cpp
many objects ๐๐๐๐ and hence ๐๐๐๐ where ๐๐ = 1,2,3, โฆ ๐๐
The
Complete
Viewing
Pipeline
The Complete Viewing Pipeline
```

- ข Model (orient individual objects)
- ข View (orient the camera OR the entire world)
- ข Projection
๐๐ โ ๐๐ โ ๐๐๐๐ โ ๐๐๐๐
- ข The model-view matrix will take vertices in object coordinates and convert them to a representation in camera coordinates.
- ข The projection matrix will both carry out the desired projectionโeither orthogonal or perspectiveโand convert a viewing volume

```cpp
specified in camera coordinates to fit inside the viewing cube in clip coordinates.
gluLookAt(), glOrtho(), glFrustum(), and
gluPerspective()
```

- ข Did you notice thatโฆ
- ข The โglโ and โgluโ versions have no return

```cpp
arguments
```

- ข Whereas the mat.h versions LootAt(), Ortho(),

```cpp
Frustum() and Perspective() return 4x4 matrices of
type mat4
glMatrixMode()
glMatrixMode()
```

- ข Recall that OpenGL is a state machine

```cpp
Legacy OpenGL maintains several matrices for transforming points in 3D space
```

- ข glMatrixMode() defines the current matrix
- ข GL_MODELVIEW
- ข GL_PROJECTION
- ข GL_TEXTURE
- ข GL_COLOR
- ข glGet(GL_MATRIX_MODE) will return the current

```cpp
matrix mode
glMatrixMode()
glMatrixMode()
```

- ข When you define MODELVIEW with gluLookAt()
- OR
- ข When you define PROJECTION with glOrtho(),

```cpp
glFrustum(), or gluPerspective()
```

- ข The current matrix is multiplied by the new matrix

```cpp
glMatrixMode(GL_PROJECTION);
glLoadIdentity() /*clear the matrix*/
glFrustrum(-1.0, -1.0, -1.0, 1.5. 20.0)
FurtherReading
Reading
Further
```

โInteractive Computer Graphics โ A Top-Down Approach with Shader-Based

```cpp
OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ข Secs. 4.1. Classical and Computer Viewing; 4.1.2. Orthographic Projections;

### 4.1.5 Perspective Viewing

- ข Sec. 4.2. Viewing with a Computer
- ข Sec. 4.3.1. Positioning of the Camera Frame; 4.3.3. The Look-At Function
- ข Sec. 4.4.1. Orthographic Projections; 4.4.2. Parallel Viewing with OpenGL;

### 4.4.4. Orthogonal-Projection Matrices; (optional) 4.4.6 An Interactive Viewer

- ข Secs. 4.5. โ 4.7. Projections โ Perspective-Projection Matrices


---

