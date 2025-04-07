# Week 2 Lectures

## Lecture 003: 003-OpenGL-Pipeline.pdf


```cpp
CITS3003 Graphics & Animation
Lecture 3:
Pipeline Architecture
Content
```

- �� Expanding on primitives
- �� Vertex attributes
- �� OpenGL pipeline architecture
- �� Immediate mode graphics vs retained mode

```cpp
graphics
OpenGL Primitives
Recall from a previous lecture…
GL_POINTS
GL_LINES
GL_LINE_STRIP
GL_LINE_LOOP
GL_TRIANGLES
GL_TRIANGLE_STRIP
GL_TRIANGLE_FAN
Polygons in OpenGL
Everything you see rendered on the screen is a collection of points,
lines, and triangles.
```

- �� Applications normally break complex surfaces into a very large number

```cpp
of triangles and send them to OpenGL
The only OpenGL polygons that OpenGL supports are triangles
```

- �� Triangles are easy to draw.
- �� We can approximate surfaces using collections of many triangles.

```cpp
Image credits: Fundamentals of Computer Graphics, 4th edition, Peter Shirley
Polygons in OpenGL
```

- �� Graphics systems like triangles because triangles are:

```cpp
o Simple: edges cannot cross
o Convex: All points on a line segment between two points
in a polygon are also in that polygon
o Flat: all vertices are in the same plane
Non-simple polygon
convexity
nonconvex polygon
Polygon Issues (cont.)
```

- �� In practice, we need to deal with more general polygons.
- �� If other polygons are used, Application program must

```cpp
tessellate a polygon into triangles (a.k.a triangulation)
```

- �� OpenGL 4.1 contains a tessellator.

```cpp
Tessellation (tiling) of a flat surface is the process of covering
it with one or more geometric shapes (the tiles): Wikipedia
Recursive Triangulation of
Convex Polygon
There are some simple algorithms to perform
triangulations for planar convex polygons.
```

- ��

```cpp
d
c
For example:
```

1. Start with first three vertices and form b

```cpp
a triangle.
```

- ��

```cpp
Start with abc to form the 1st triangle
```

2. Remove the second vertex from the list

```cpp
of vertices
```

- ��

```cpp
a
Remove b
```

3. (Recursion) Go to Step 1 to form the
2nd triangle
- �� Does not guarantee all triangles are good.

```cpp
Triangulation
Good and Bad Triangles
Although every set of vertices can be triangulated, not all
triangulations are equivalent.
Triangulation
Good and Bad Triangles
```

- ��

```cpp
Long, thin triangles render badly
```

- ��
- ��

```cpp
Equilateral triangles render well
To get good triangles for rendering
```

 Maximize the minimum interior angle

```cpp
Delaunay triangulation can be used for unstructured points
```

- ��

```cpp
Vertices and attributes
```

- �� Each triangle is made up of 3 vertices. Each

```cpp
vertex is associated with some numerical
data.
```

- �� Vertex Attributes
– Each data item associated with a vertex

```cpp
is called an attribute.
```

- �� location of the vertex (using 2 numbers for
2D geometry or 3 numbers for 3D geometry).
- �� color (using 3 numbers representing amounts

```cpp
of red, green and blue)
```

- �� material properties etc.

```cpp
A cat head is described by a
soup of triangles. Some of
the vertices are highlighted
with black dots.
Image credits: SANDER, P., GORTLER, S.,
SNYDER, J., AND HOPPE, H. Signal-specialized
parametrization. In Proceedings of the 13th
Eurographicsworkshop on RenderingTechniques
```

(2002), pp. 87–98.. Foundations of 3D Computer

```cpp
Graphics,S.J. Gortler.MIT Press, 2012 ,
```

©Eurographics and Blackwell Publishing

```cpp
Ltd.
Colour
How is color handled in a graphics system from the programmer’s
Perspective?
RGB Color model:
```

- �� Each colour component is stored separately in the frame buffer.
- �� Occupies 8 bits per component in the buffer.
- �� Colour values range:

```cpp
o from 0 to 255 using unsigned integers, or
o from 0.0 (none) to 1.0 (all) using floats
```

- �� Use vec3 or vec4 to represent colour

```cpp
vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
R
G
B
Indexed Colour
```

- ��
- ��

```cpp
Colours are indices into tables of
RGB values
Requires less memory
o Indices usually 8 bits
o no longer part of recent
versions of OpenGL
The Graphics Pipeline
Image link
Pipeline Architectures
```

- �� Pipeline architectures are very common and can be found in many

```cpp
application domains. E.g., an arithmetic pipeline:
Arithmetic Pipeline
```

- �� When two sets of a, b, and c values are passed to the system, the

```cpp
multiplier can carry out the 2nd multiplication without waiting for
the adder to finish  the calculation time is shortened!
Pipeline Architectures
```

- �� Pipeline architectures are very common and can be found in many

```cpp
application domains. E.g., an arithmetic pipeline:
Arithmetic Pipeline
```

- �� When two sets of a, b, and c values are passed to the system, the

```cpp
multiplier can carry out the 2nd multiplication without waiting for
the adder to finish  the calculation time is shortened!
Source
OpenGL Graphics Pipeline
```

- �� OpenGL utilizes the following pipeline (simplified version):

```cpp
application
program
```

- ��
- ��

```cpp
display
Objects passed to the pipeline are processed one at a time in the
order they are generated by the application program
All steps can be implemented in hardware on the graphics card
Image credits: Author: Romain Vergne link
Vertex Processing
```

- ��
- ��
- ��

```cpp
Much of the work in the pipeline is in converting object
representations from one coordinate system to another
o Object coordinates
o Camera (eye) coordinates
o Screen coordinates
Every change of vertex coordinates is the result of a matrix
transformation being applied to the vertices
Vertex processor can also compute vertex colors
Projection
```

- �� Projection is the process that combines the 3D

```cpp
viewer with the 3D objects to produce the 2D image
o Perspective projections: all projected rays meet at the
center of projection
o Parallel projection: projected rays are parallel; center of
projection is at infinity. (specify the direction of
projection instead of the center of projection)
Projection
```

- �� Example
2D to 1D Orthographic/Parallel Projection
2D to 1D Perspective Projection

```cpp
The gray box represents the part of the world that is visible to the projection; parts of the scene outside of this region are not seen
Credits: link
Primitive Assembly
```

- ��

```cpp
Vertices must be collected into geometric objects before
clipping and rasterization can take place.
o Line segments
o Polygons
o Curves and surfaces
are formed by the grouping of vertices in this step of the
pipeline.
Clipping
```

- ��

```cpp
Just as a real camera cannot “see” the whole world, the virtual
camera can only see part of the world or object space
o Objects that are not within this volume are said to be clipped out
of the scene
Rasterization
```

- ��
- ��
- ��

```cpp
If an object is not clipped out, the appropriate pixels in the
frame buffer must be assigned colors.
Rasterizer produces a set of fragments for each object.
Fragments are “potential pixels”. They:
o have a location in the frame buffer
o have colour, depth, and alpha attributes
```

- ��

```cpp
link
Vertex attributes (colour, transparency) are interpolated over
the objects by the rasterizer
Smooth Color
```

- �� We can tell the rasterizer in the pipeline how to interpolate

```cpp
the vertex colours across the vertices
```

- �� Default is smooth shading

```cpp
o OpenGL interpolates vertex
colors across visible polygon
```

- �� Alternative is flat shading

```cpp
o Color of the first vertex
determines the fill color
```

- �� Shading is handled in the fragment shader

```cpp
Fragment Processing
```

- ��
- ��
- ��

```cpp
Fragments are processed to determine the colour of the
corresponding pixel in the frame buffer.
The colour of a fragment can be determined by texture mapping
or by interpolation of vertex colours.
Fragments may be blocked by other fragments closer to the
camera
o Hidden-surface removal
Choose the correct option(s)
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
Retained Mode Graphics
The application constructs a scene from graphics primitives,
such as triangles and lines, and the library stores a model of the
scene in the memory.
```

- �� Put all vertex data in array(s), send array(s) over and store on GPU

```cpp
for multiple renderings
```

– The application issues commands to update the scene (e.g.,

```cpp
add or remove shapes).
```

– The library is responsible for redrawing the scene.
– A retained-mode API is declarative.

```cpp
Image taken from docs.microsoft.com
Immediate Mode Graphics
```

- �� Older versions of OpenGL adopted immediate mode graphics,

```cpp
where:
```

– Each time a vertex is specified in application, its location is sent to the

```cpp
GPU.
```

– Old style programming, uses glVertex
– The library does not store a scene model between the frames.

```cpp
Example code of using immediate
mode to draw a simple triangle.
Image taken from docs.microsoft.com
Immediate Mode with OpenGL
```

- �� Advantage:
– No memory is required to store the geometric data (memory

```cpp
efficient)
```

- �� Disadvantages:
– As the vertices are not stored, if they need to be displayed

```cpp
again, the entire vertex creation and the display process must
be repeated.
```

– Creates bottleneck between CPU and GPU
- �� Immediate mode graphics has been removed from

```cpp
OpenGL 3.1
Retained Mode Graphics with OpenGL
```

- �� Put all vertex and attribute data into an array, send

```cpp
and store that on the GPU
```

- �� Update when required
- �� Retained mode graphics is adopted in OpenGL 3.1

```cpp
onward.
Comparison of the two modes
```

- �� Immediate mode graphics
- �� Retained mode graphics

```cpp
main()
{
initialize_the_system();
p = find_initial_point();
for (some_no_of_points) {
q = generate_a_point(p);
display(q);
p = q;
}
cleanup();
}
main()
{
initialize_the_system();
p = find_initial_point();
for (some_no_of_points) {
q = generate_a_point(p);
store_the_point(q);
p = q;
}
display_all_points();
cleanup();
}
```

2D Sierpinski triangle

```cpp
Pseudo code for the 2D Sierpinski triangle program for the 2 modes
Further Reading
```

“Interactive Computer Graphics – A Top-Down Approach with

```cpp
Shader-Based OpenGL” by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- �� Sec. 1.7.2 – 1.7.7 Pipeline Architectures … Fragment

```cpp
Processing
```

- �� Sec. 2.1 The Sierpinski Gasket; immediate mode graphics vs

```cpp
retained mode graphics
```

- �� Sec 2.4 – 2.4.4 Primitives and Attributes … Triangulation

```cpp
Graphics Shaders (second edition) Bailey and Cunningham
```

- �� Chapter#01


---

## Lecture 004: 004-OpenGL-Example-Program.pdf


```cpp
CITS3003 Graphics & Animation
Lecture 4 :
OpenGL: An Example
Program
Content
```

- �� Understand an OpenGL program
– Initialization steps and program structure
– GLUT functions
– Vertex array objects and vertex buffer objects
- �� Simple viewing
– Introduce the OpenGL camera, orthographic viewing,

```cpp
viewport, various coordinate systems, transformations
A Crude Visualization
CPU
Application
CPU
program
Vertex
shader
Buffers
V1 V2 V3
A1 A2
Frag.
shader
GPU
Vertex
shader
Frag.
shader
Run 3
times
Run for each
fragment
Frame Buffer
A Crude Visualization
Abstracted parallelism in graphics processors
Image credits: Graphics Shaders (second edition) Bailey and Cunningham
Example: Retained Mode Graphics
Task: Draw a triangle on white background
Simple Rendering Steps:
```

–
–
–
–
–

```cpp
vec2 position[3];
position[0] = vec2(-0.5, -0.5);
position[1] = vec2(0.0, 0.5);
position[2] = vec2(0.5, -0.5);
Specify triangle corners (3 vertices)
Store vertices into an array
Create GPU Buffer for vertices
Move array of 3 vertices from CPU to GPU
Tell GPU to draw 3 points from an array (on GPU) using glDrawArrays
Application
Program (on CPU)
GPU
Rendered Triangle
OpenGL Program
Usually has 3 files:
```

- �� simple.cpp file: containing your main function
– Does initialization, generates/loads geometry to be drawn
- �� Two shader files:
– Vertex shader: functions to manipulate (e.g., move) vertices
– Fragment shader: functions to manipulate pixels/fragments
(e.g., change color)

```cpp
A Simple Program (cont.)
```

- �� Most ‘.cpp’ (simple.cpp in our case) files have a similar structure

```cpp
that consists of the following functions:
o main(): creates the window, calls the init() function,
specifies callback functions relevant to the application, enters
event loop (last executable statement)
o A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of
routine or action
o init(): defines the vertices, attributes, etc. of the objects to be
rendered, specifies the shader programs,
o display(): this is a callback function that defines what to
draw whenever the window is drawn/refreshed.
simple.cpp
```

#include ‘Angel.h’

```cpp
includes headers
void init() {
```

// code to be inserted here

```cpp
}
void mydisplay(){
```

//this is a callback function
//need to fill in this part

```cpp
}
int main(int argc, char** argv){
```

// create and open GLUT window;
// call init();
// register callback function;
// wait in glutMainLoop for events;

```cpp
}
simple.cpp
```

#include ‘Angel.h’

```cpp
includes headers
void init() {
```

// code to be inserted here

```cpp
}
void mydisplay(){
```

//this is a callback function
//need to fill in this part

```cpp
}
int main(int argc, char** argv){
```

// create and open GLUT window;
// call init();
// register callback function;
// wait in glutMainLoop for events;

```cpp
}
```

- ��

```cpp
OpenGL
programs are
event driven
The main function ends with the program entering an event loop
Display and Event Loop
```

- �� Note that the program specifies a display callback

```cpp
function named mydisplay
```

- ��
- ��

```cpp
Every glut program must have a display callback
The display callback is executed whenever OpenGL
decides the display must be refreshed, for example when
the window is opened.
simple.cpp
```

#include “Angel.h”

```cpp
includes gl.h, glext.h,
freeglut.h,
vec.h, mat.h, …
const int NumTriangles = 1; // 1 triangles to be displayed
const int NumVertices = 3 * NumTriangles;
vec2 points[NumVertices] = {
vec2( -0.5, -0.5),
vec2( 0.5, -0.5),
vec2( 0.0, 0.5),
};
```

// generate vertices + store in an array

```cpp
y
```

3 unique locations
( 0.0, 0.5 )

```cpp
x
```

-x
( -0.5, -0.5)
( 0.5, -0.5)
-y

```cpp
simple.cpp
simple.cpp
int main(int argc, char **argv) {
initializes the GLUT
system and allows it to
receive command line
arguments
glutInit(&argc,argv);
glutInitDisplayMode(GLUT_DOUBLE|GLUT_DEPTH);
request “double buffering” & a “depth buffer”
glutInitWindowSize(640,480);
specify window size and position
glutInitWindowPosition(100,150);
glutInitContextVersion( 3, 2 ); require OpenGL 3.2 Core profile
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
create a window with the title “simple”
simple.cpp
simple.cpp
int main(int argc, char **argv) {
glutInit(&argc,argv);
glutInitDisplayMode(GLUT_DOUBLE|GLUT_DEPTH);
glutInitWindowSize(640,480);
initializes the GLUT
system and allows it to
receive command line
arguments
request “double buffering” & a “depth buffer”
glutInitWindowPosition(100,150);
specify window size and position
glutInitContextVersion( 3, 2 );
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
create a window with the title “simple”
simple
simple.cpp - A more complex version of
simple.cpp
main()
int main(int argc, char **argv) {
glutInit(&argc,argv);
glutInitDisplayMode(GLUT_DOUBLE|GLUT_DEPTH);
request “double buffering” & a “depth buffer”
glutInitWindowSize(640,480); specify window size and position
glutInitWindowPosition(100,150);
glutInitContextVersion( 3, 2 );
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
glewInit();
init();
require OpenGL 3.2 Core profile
create a window with the title “simple”
set OpenGL state and initialize shaders
set display callback fn: mydisplay will be
glutDisplayFunc(mydisplay); called when the window needs redrawing
glutMainLoop();
enter event loop and wait for events
}
return 0;
actually, never returns
GLUT functions
```

- �� glutInit initializes the GLUT system and allows it to receive command

```cpp
line arguments (always include this line)
```

- �� glutInitDisplayMode requests properties for the window
(the rendering context)
– RGBA colour (default) or indexed colour (rare now)
– Double buffering (usually) or Single buffering (redraw flickers)
– Depth buffer (usually in 3D) stores pixel depths to find closest surfaces
 [ usually with glEnable(GL_DEPTH_TEST); ]
– Others: GLUT_ALPHA, … generally for special additional window buffers
– Properties are bitwise ORed together with | (vertical bar)
- �� glutWindowSize defines the window size in pixels
- �� glutWindowPosition positions the window (relative to top-left corner

```cpp
of display)
GLUT functions (cont.)
```

- �� glutCreateWindow creates a window

```cpp
o many functions need to be called prior to creating the window
o similarly, many other functions can only be called afterwards
```

- �� glutMainLoop enters infinite event loop

```cpp
o never returns, but may exit
Callback Functions (Recall..):
```

- ��
- ��

```cpp
A callback function is a function which the library (GLUT) calls when it needs
to know how to process events.
Register callbacks for all events your program will react to
```

- ��

```cpp
No registered callback = no action
```

– Example:
- �� Declare function myMouse, to be called on mouse click
- �� Register it: glutMouseFunc(myMouse)

```cpp
GLUT functions (cont.)
Callback Registration
GLUT supports a number of callbacks to respond to events.
```

– glutDisplayFunc sets the display callback
– glutKeyboardFunc sets the keyboard callback
– glutReshapeFunc sets the window resize callback
– glutTimerFunc sets the timer callback
– glutIdleFunc sets the idle callback

```cpp
OpenGl programs are
event-driven:
Program responds to
events such as:
```

- �� Mouse clicks
- �� Keyboard stroke
- �� Window resize

```cpp
Initialization
All the initialization codes can be put inside an init() function.
These include:
```

- �� Setting up the vertex array objects and vertex buffer objects
- �� Setting up vertex and fragment shaders
– Read in the shaders
– Compile them
– Link them

```cpp
Covered in
detail in later
lectures
```

- �� Clearing window’s background and other OpenGL

```cpp
parameters
init()
{
void init( void )
```

// Create a vertex array object

```cpp
GLuint vao;
glGenVertexArrays( 1, &vao );
glBindVertexArray( vao );
```

// Create and initialize a vertex buffer object

```cpp
GLuint buffer;
glGenBuffers( 1, &buffer );
glBindBuffer( GL_ARRAY_BUFFER, buffer );
```

// Move the six points generated earlier to VBO

```cpp
glBufferData( GL_ARRAY_BUFFER, sizeof(points), points, GL_STATIC_DRAW );
```

// Load shaders and use the resulting shader program

```cpp
GLuint program = InitShader( "vertex.glsl", "fragment.glsl" );
glUseProgram( program );
```

// Initialize the vertex position attribute from the vertex shader

```cpp
GLuint vPos = glGetAttribLocation( program, "vPosition" );
glEnableVertexAttribArray( vPos );
glVertexAttribPointer( vPos, 2, GL_FLOAT, GL_FALSE, 0, BUFFER_OFFSET(0) );
```

// create black background

```cpp
glClearColor( 0.0, 0.0, 0.0, 0.0 ); /* black background */
}
init()
Rendering from GPU memory significantly
faster. Move data there
GPU memory for data called Vertex Buffer
Objects (VBO)
Array of VBOs (called Vertex Array Object
```

(VAO)) usually created

```cpp
void init( void )
{
```

// First Create a vertex array object

```cpp
GLuint vao;
glGenVertexArrays( 1, &vao );
glBindVertexArray( vao ); // make VAO active
```

// Create and initialize a vertex buffer object

```cpp
GLuint buffer;
glGenBuffers( 1, &buffer ); // create one buffer object
glBindBuffer( GL_ARRAY_BUFFER, buffer );
VBO
VAO
VBO
VBO
Number of buffer objects to return
Data is array of values
init()
{
void init( void )
```

// Create a vertex array object

```cpp
GLuint vao;
glGenVertexArrays( 1, &vao );
glBindVertexArray( vao );
```

// Create and initialize a vertex buffer object

```cpp
GLuint buffer;
glGenBuffers( 1, &buffer );
glBindBuffer( GL_ARRAY_BUFFER, buffer );
buffer object data will not be changed.
Specified once by application and used
many times to draw
```

// Move the points generated earlier to VBO

```cpp
glBufferData( GL_ARRAY_BUFFER, sizeof(points), points, GL_STATIC_DRAW );
Data to be transferred to GPU memory (generated earlier)
Need to link names of vertex and
fragment shaders to the main program
```

….

```cpp
Vertex shader: functions to manipulate (e.g., move) vertices
Fragment shader: functions to manipulate pixels/fragments
```

(e.g change color)

```cpp
init()
{
void init( void )
```

// Create a vertex array object

```cpp
GLuint vao;
glGenVertexArrays( 1, &vao );
glBindVertexArray( vao );
```

// Create and initialize a vertex buffer object

```cpp
GLuint buffer;
glGenBuffers( 1, &buffer );
glBindBuffer( GL_ARRAY_BUFFER, buffer );
```

// Move the six points generated earlier to VBO

```cpp
glBufferData( GL_ARRAY_BUFFER, sizeof(points), points, GL_STATIC_DRAW );
```

// Load shaders and use the resulting shader program

```cpp
GLuint program = InitShader( "vertex.glsl", "fragment.glsl" );
glUseProgram( program );
initShader() connects main
program to the shader files
```

// Initialize the vertex position attribute from the vertex shader

```cpp
GLuint vPos = glGetAttribLocation( program, "vPosition" );
glEnableVertexAttribArray( vPos );
glVertexAttribPointer( vPos, 2, GL_FLOAT, GL_FALSE, 0, BUFFER_OFFSET(0) );
}
Location of vPosition
```

2 (x,y) floats per

```cpp
vertex
Data no normalized
```

(0-1 range)

```cpp
Want to make 3 vertices
accessible as variable ‘vPosition’
in vertex shader
Data starts at offset
from start of array
Reading, Compiling, and Linking Shaders
```

- �� The function InitShader defined in InitShader.cpp carries out

```cpp
the reading, compiling, and linking of the shaders.
```

//create a program object

```cpp
GLuint program = InitShader("vshader.glsl", "fshader.glsl");
glUseProgram(program);
If there are errors in any of the GLSL files, the program will
crash at this line.
Exercise: study InitShader.cpp.
Chapter#01, OpenGL 4.0 Shading Language Cookbook" by David Wolff.
Sending data to shaders using vertex
buffer objects
Vertex Attributes
```

- �� Vertices can have many attributes
– Position (1.0, 0.0, 0.1)
– Color (e.g., red)
– Texture Coordinates
– Normal vector (x, y, z)

```cpp
vec2 position[3] = {vec2(-0.5, -0.5),
vec2(0.0, 0.5),
vec2(0.0, -0.5)};
vec3 color[3] = {vec3(1.0, 0.0, 0.0),
vec3(1.0, 0.0, 0.0),
vec3(1.0, 0.0, 0.0)},
typedef in C: link
Vertex Attributes
```

- �� Vertices can have many attributes
– Position
– Color (e.g., red)
– Texture Coordinates
– Normal (x, y, z)

```cpp
Vertex 1 Attributes
x
y
Position
z
r
g
Color
b
Vertex 2 Attributes
t
Tex
s
x
y
Position
z
r
g
Color
b
t
s
```

---

```cpp
Tex
Vertex Array Objects
```

- �� Array of VBOs (called Vertex Array Object (VAO))
–

```cpp
Example: vertex positions in VBO 1, color info in VBO 2, etc.,
```

- �� To define a vertex array object (VAO):
1. Generate a vertex array object ID:

```cpp
GLuint vao;
glGenVertexArrays(1, &vao);
```

2.

```cpp
Bind the vertex array object ID
VBO
VAO
VBO
VBO
glBindVertexArray(vao); // make VAO active
```

//all subsequent vertex attribute and buffer operations will be associated with this VAO.

```cpp
Vertex Array Object (cont.)
```

- �� Unfortunately, some openGL functions are not completely

```cpp
platform independent.
```

- �� On Linux/Windows:

```cpp
GLuint abuffer;
glGenVertexArrays(1, &abuffer);
glBindVertexArray(abuffer);
```

- �� On Mac:

```cpp
GLuint abuffer;
glGenVertexArraysAPPLE(1, &abuffer);
glBindVertexArrayAPPLE(abuffer);
Vertex Buffer Objects
```

- �� Vertex buffers objects (VBO) allow us to transfer large amounts of

```cpp
data to the GPU
```

- �� Need to create and bind the VBO then copy the vertices to the

```cpp
buffer:
```

\\ create buffer object

```cpp
Gluint buffer;
glGenBuffers(1, &buffer);
glBindBuffer(GL_ARRAY_BUFFER, buffer); \\ make the VBO active
glBufferData(GL_ARRAY_BUFFER, sizeof(position), position, GL_STATIC_DRAW);
```

\\ move data to buffer object

```cpp
Vertex Buffer Object (cont.)
How to update a portion of the data in an existing buffer object?
```

- �� glBufferSubData allows you to replace all or part of the data

```cpp
within the buffer
vec2 position[] = {...};
vec3 colour[] = {...};
```

//create a larger buffer to hold both points and colours

```cpp
glBufferData(GL_ARRAY_BUFFER, sizeof(position) +
sizeof(colour), NULL, GL_STATIC_DRAW);
```

//load data separately

```cpp
glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(position), position);
offset
glBufferSubData(GL_ARRAY_BUFFER, sizeof(position), sizeof(colour), colour); 31
Vertex Buffer Object (cont.)
```

- �� Can also specify more than one buffer object, e.g., 2

```cpp
buffer objects:
GLuint buffer[2];
glGenBuffers(2, buffer);
```

//do the binding and send the data for the 1st buffer
//to the GPU

```cpp
glBindBuffer(GL_ARRAY_BUFFER, buffer[0]);
glBufferData(GL_ARRAY_BUFFER, sizeof(points), position);
```

//do the same for the 2nd buffer object

```cpp
glBindBuffer(GL_ARRAY_BUFFER, buffer[1]);
glBufferData(GL_ARRAY_BUFFER,sizeof(colour), colour);
position could be an array of vec2, vec3, or vec4.
colour could be an array of vec3 or vec4.
Passing vertex
coordinates
```

(variable position)

```cpp
and vertex colours
```

(variable colour)

```cpp
to GPU using
buffer[0] and
buffer[1]
Display Callback
```

- �� Once we get data to GPU, we can initiate the rendering with a

```cpp
simple display callback function:
void mydisplay()
{
glClear(GL_COLOR_BUFFER_BIT);
glDrawArrays(GL_TRIANGLES, 0, 3);
}
The display callback
function is called every
time the window needs
to be repainted.
```

// glFlush(); // Single buffering

```cpp
glutSwapBuffers(); // Double buffering
```

- �� Prior to this, the vertex buffer objects should contain the vertex

```cpp
data.
What are shaders in OpenGL?
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
How often is a vertex shader
run in the rendering pipeline?
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
Coordinate Frames
OpenGL commonly uses the following coordinate frames
```

- ��
- ��
- ��
- ��
- ��

```cpp
Object (Local) Coordinates
World Coordinates
Camera (View) Coordinates
Clip Coordinates
Window (or screen) Coordinates
Figure Credits LInk
Coordinate Frames
Object Coordinates
This is the coordinate frame which is local to an
object.
```

- ��

```cpp
We can define shapes of individual objects such as boxes,
trees or mountains, within a separate coordinate frame for
each object.
World Coordinates
The coordinates in which you build the complete scene
are called world coordinates.
```

- ��
- ��

```cpp
Each virtual world may contain 100’s of objects.
The application program applies a sequence of
transformations to orient and scale each object before
placing them in the virtual world.
Coordinate Frames
Camera (View) Coordinates
Camera coordinates are used to specify the
position of objects relative to the camera
```

(viewer’s) position
- �� the camera/viewer is at the origin and looking

```cpp
into the negative z-direction. However, this can
be altered in the program.
Coordinate Frames
Clip Coordinates
Clip coordinates are used to specify the position of the objects relative
to the clipping plane. Objects that are not inside the view volume are
clipped out. Clip coordinates are used to operate in the clip space.
Window (or screen) Coordinates
This is the final coordinate system in which the output is rendered. Also
known as device or screen coordinates. Window coordinates are
expressed as a pair of numbers (x, y), which correspond to the position
of an object on the screen.
Orthographic Vs Perspective
Projection
We can either use Orthographic projection or perspective projection matrices to transform view
coordinates to clip coordinates, where each form defines its own unique frustum.
Orthographic projection
```

- �� cube-like frustum box that defines the

```cpp
clipping space
```

- �� each vertex outside this box is clipped

```cpp
Perspective projection
```

- �� a non-uniformly shaped frustum box defines the

```cpp
clipping space
```

- �� each vertex outside this box is clipped
- �� field of view and sets how large the viewspace is

```cpp
Credits: link
Viewports
```

- �� We do not have to use the

```cpp
entire window to render the
scene, e.g., we can set the
viewport like this:
glViewport(x,y,w,h)
```

- �� Values passed to this

```cpp
function should be in pixels
```

(window coordinates)
- �� We can create multiple

```cpp
viewports in the same
window
For example, if we want to draw two scenes, sideby-side, and that the drawing surface is 600-by400 pixels. An outline for how to do that is very
simple:
The OpenGL Camera
```

- �� OpenGL places a camera at the origin in the view coordinate space pointing

```cpp
in the negative z direction
```

- �� The default viewing volume is a box centered at the origin with sides of

```cpp
length 2
Further Reading
```

“Interactive Computer Graphics – A Top-Down Approach with Shader-Based

```cpp
OpenGL” by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ��
- ��
- ��
- ��
- ��
- ��
- ��

```cpp
Secs. 2.1-2.2 The Sierpinski Gasket
Sec. 2.6.1 The Orthographic View
Sec 2.7 Control Functions
Sec. 2.8 The Gasket Program
Sec. 3.4 Frames in OpenGL (up to page 142)
App. D.1 Initialization and Window Functions
App. D.2 Vertex Array and Vertex Buffer Objects
Chapter#01, OpenGL 4.0 Shading Language Cookbook by David Wolff.
C Programming: What is a pointer? https://users.cs.cf.ac.uk/Dave.Marshall/C/node10.html
```



---

