# CITS3003 Lecture Slides

## Lecture 001: Intro Image Formation


```cpp
CITS3003 Graphics & Animation
Introduction
and
Admin Matters
Content
```

- ข Introduction to the Unit
- ข Introduction to Computer Graphics
- ข Introduction to OpenGL

```cpp
Teaching Team
Naeha Sharif
Unit Coordinator & Lecturer
Room 1.05, First Floor
CSSE building
Khanh
Tyler
Shane
Facilitators
Consultation Hour
```

11:30am - 12:30pm Wednesdays

```cpp
Labs
```

- ข Monday: 10:00am - 12:00pm
- ข Wednesday: 12:00pm - 2:00pm
- ข Thursday: 8:00am - 10:00am

```cpp
Email:
cits3003-csse@uwa.edu.au
Note: All CITS3003 labs will be
conducted in CSSE-201 this semester
Expect a response within 48-72hrs
Timetable
Lecture
LAB
Lecture
LAB
LAB
https://timetable.applications.uwa.edu.au/draft.html
Other Admin Matters
```

- ข Lectures and lab material will be on LMS
- ข Check regularly for announcements and updates
- ข Lectures uploaded every teaching week
- ข Check the useful resources tab
- ข Help forum is available on LMS. All queries

```cpp
related to labs/project should be posted there.
Students are encouraged to help each other.
However, sharing solutions/partial solutions of
assessments is not allowed.
```

- ข Email (cits3003-csse@uwa.edu.au) should only be

```cpp
used for issues which cannot be
discussed on the help forum
Other Admin Matters
Prerequisites
```

- ข
- ข
- ข
- ข

```cpp
CITS1401 Computational Thinking with Python
or CITS2002 Systems Programming
or CITS2401 Computer Analysis and Visualisation
or CITX1401 Computational Thinking with Python
Project and Labs
```

- ข

```cpp
Labs will be running every week, starting from week#2.
```

- ข

```cpp
Lab sheets will be provided (along with the solutions) on
LMS
```

- ข

```cpp
Lab#1-5 are not assessed but it is important to complete them
to be able to complete the project.
```

- ข

```cpp
Lab#6 is assessed and will be released in week#07
```

- ข

```cpp
Project will be released in week#07
Assessments
```

- ข The assessments will consist of:
- ข 15%: Mid-semester test
- ข 20%: Project
- ข 5%: Lab#06
- ข 60%: Final exam
(week 07)
(due in week 12)
(due in week 12)

```cpp
Mid-semester test and Final exam will be conducted in a face-to-face format
```

(paper-based)

```cpp
Other matters
Some general advice:
```

โ Attend lectures regularly
โ Attempt all the lab excercises in a timely manner
โ Consult supplementary material for deeper understanding
โ Start working on the project as soon as it is released
โ Seek help early

```cpp
Commendations:
```

โ Highest total score
โ Class participation
โ Creativity
โ Help forum

```cpp
Breakdown of Lectures
```

1.
2.
3.
4.
5.
6.
7.

```cpp
Introduction & Image Formation
Programming with OpenGL
OpenGL: Pipeline Architecture
OpenGL: An Example Program
Vertex and Fragment Shaders 1
Vertex and Fragment Shaders 2
Representation and Coordinate
Systems
```

8. Coordinate Frame Transformations
9. Transformations and Homogeneous

```cpp
Coordinates
```

10. Input, Interaction and Callbacks
11. More on Callback
12. Hidden Surface Removal

```cpp
Mid-semester Test
```

13. Computer Viewing
14. Shading
15. Shading Models
16. Shading in OpenGL
17. Texture Mapping
18. Texture Mapping in OpenGL
19. Hierarchical Modelling
20. 3D Modelling: Subdivision

```cpp
Surfaces
```

21. Animation Fundamentals,

```cpp
Quaternions and Skinning
```

22. Guest Lecture
23. Tutorial

```cpp
Computer Graphics
Computer graphics is a field that is concerned
with all aspects of creating and manipulating visual
content using a computer.
```

- ข hardware tools
- ข Software tools

```cpp
Image Courtesy: Disney New Lion King
Computer Graphics
Applications
Displaying simulations
Computer Games
Scientific visualisations
Image source
Movies
Virtual Reality
Image source
Image source
Image source
About CITS3003
```

- ข Computer Graphics has many aspects:
โ Computer Scientists create graphics programs and tools (e.g., Blender,

```cpp
Maya, photoshop)
```

- ข Includes C/C+, shader programming, maths, linear algebra, etc.,
โ Artists use Computer Graphics packages to create photorealistic/creative

```cpp
pictures โ (does not involve maths or programming)
About CITS3003
CITS3003 teaches fundamentals of computer-generated threedimensional graphics and animation.
```

โ It introduces OpenGL (Graphics library) for writing interactive

```cpp
graphics programs.
CITS3003 is:
```

โ not about using software packages like Photoshop, Maya,

```cpp
GIMP
```

โ not a comprehensive course on OpenGL, as only limited parts

```cpp
of the library are covered
```

โ not a game development unit

```cpp
A Graphics System
Input devices
Output device
Image formed in frame buffer
Image courtesy: Angel and Shreiner: Interactive Computer Graphics 6E ยฉ AddisonWesley 2012
Rendering
In general, one of the basic tasks of 3D graphics is producing 2D
images of the three-dimensional world.
Fundamentally, rendering is a process that takes as its input a set of
objects and produces as its output an array of pixels.
```

- ข the whole process of producing an image is referred to as

```cpp
rendering the scene.
Raster Image
A raster image is simply a 2D array that stores the pixel value for
each pixelโusually a color stored as three numbers, for red,
green, and blue.
Angel and Shreiner: Interactive
Computer Graphics 6E ยฉ AddisonWesley 2012
Color Images
```

- ข Color Image

```cpp
o Has perceptional attributes of hue, saturation, and
lightness
Hue
another word for color
```

(wavelength dependent)

```cpp
Saturation (Chroma)
the intensity or purity of hue
```

(100% pure = no addition of gray)

```cpp
Lightness (Value)
relative degree of black/white
Image from (https://vanseodesign.com/web-design/hue-saturation-and-lightness/)
Luminance Images
```

- ข Luminance Image

```cpp
o Monochromatic
o Values are gray levels
o Analogous to working with black and white film
or television
Introduction to Image Formation
Image credits
Image Formation
```

- ข In computer graphics, we form/create images

```cpp
using a process analogous to how images are
formed by physical imaging systems
o Cameras
o Microscopes
o Telescopes
o Human visual system
Elements of Image Formation
```

1. Objects
2. Viewer
3. Light source(s)

```cpp
Note the independence of the objects, the viewer, and the
light source(s)
Objects
```

- ข A set of locations (vertices)

```cpp
in space is sufficient to
define or approximate most
objects
Viewer
```

- ข To form an image, we must have someone or

```cpp
something that is viewing our objects, be it a
human, a camera, or a digitizer. It is the viewer
that forms the image of our objects.
Light and Images
```

- ข
- ข

```cpp
If there were no light sources, the objects would appear dark
Light is the part of the electromagnetic spectrum that causes a
reaction in our visual system
The details of the interaction
between light and the surfaces
of the object determine how
much light enters the camera.
Light and Images
```

- ข
- ข
- ข

```cpp
If there were no light sources, the objects would appear dark
Light is the part of the electromagnetic spectrum that causes a
reaction in our visual system
Generally, these are wavelengths in the range of about 350750 nm (nanometers)
```

- ข

```cpp
Long wavelengths appear as reds and short wavelengths as blues
Imaging System
Pinhole Camera
```

- ข Use trigonometry to find projection of point at ๐ฅ๐ฅ, ๐ฆ๐ฆ, ๐ง๐ง
๐ฅ๐ฅ๐๐ โ๐ง๐ง๐๐ = ๐ฅ๐ฅ โ๐ง๐ง
๐ฆ๐ฆ๐๐ โ๐ง๐ง๐๐ =๐ฆ๐ฆโ๐ง๐ง
๐ง๐ง๐๐ = โ๐๐
- ข These are equations of simple perspective
- ข The point (๐ฅ๐ฅ๐๐ , ๐ฆ๐ฆ๐๐ , โ๐๐) is called the projection of the point (x, y, z).

```cpp
Pinhole Camera (cont..)
```

- ข The field, or angle of view of our camera is the

```cpp
angle made by the largest object that our camera
can image on its film plane.
```

- ข The ideal pinhole camera has an infinite Depth

```cpp
Of Field (DOF)
```

โ DOF is the distance between the nearest and

```cpp
the farthest objects that are in acceptably
sharp focus in an image
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Pinhole Camera (cont..)
```

- ข The field, or angle of view of our camera is the angle

```cpp
made by the largest object that our camera can image
on its film plane.
```

- ข The pinhole camera has two disadvantages:
โ It admits only a single ray from a point sourceโ

```cpp
almost no light enters the camera.
```

- ข Long exposure time
โ The camera cannot be adjusted to have a different

```cpp
angle of view
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Human Visual System
```

- ข The human visual system has two types of sensors
- ข Rods (up to 125M)
- ข Monochromatic, night vision
- ข Cones (6M+)
- ข Color sensitive
- ข Three types of cones
- ข Only three values (the tristimulus values) are sent to the

```cpp
brain
```

- ข That is, we need only match these three values
๏ Need only three primary colors- trichromatic color vision

```cpp
Color
Additive color
```

- ข Form a color by adding amounts of three

```cpp
primaries
```

- ข CRTs, projection systems, positive film
- ข Primaries are Red (R), Green (G), Blue (B)

```cpp
Subtractive color
```

- ข Form a color by filtering white light with cyan
(C), Magenta (M), and Yellow (Y) filters
- ข Light-material interactions
- ข Printing
- ข Negative film

```cpp
https://en.wikipedia.org/wiki/Subtractive_color
Synthetic Camera Model
image is right way up
projector
```

- ข OpenGL uses the synthetic

```cpp
pin hole camera model
```

- ข Since the image of the

```cpp
object is flipped relative to
the object on the back of the
camera, we draw another
plane in front of the lens.
p (a point)
```

- ข With this synthetic camera

```cpp
image plane
model, the object is the right
projection of point p
way up.
center of projection
image is upside down
Synthetic Camera Model
Advantages
The synthetic-camera model is the basis for a number of
popular APIs, including OpenGL
It stresses the independence of objects, viewer, light
sources (can model them separately).
```

- ข Leads to simple software API
- ข
- ข

```cpp
Can specify objects, lights, camera, attributes separately
Let implementation determine image by interaction
```

- ข Leads to fast hardware implementation
- ข Two-dimensional graphics becomes a special case of

```cpp
three-dimensional graphics
Ray Tracing: Physical Approach to Image Formation
Ray tracing and OpenGL represent two
different methods of rendering images
in computer graphics
Ray tracing is a rendering algorithm
that simulates the physical behavior of
light. It traces the rays of light from a
source, finding which rays enter the
camera lens.
However, rays of light may have
multiple interactions with objects, get
absorbed, or go to infinity.
Languages and Libraries
Graphics Libraries
Modern graphics programming is done using a graphics library/
set of libraries
```

โ most common library for platforming independent graphics

```cpp
programming is called OpenGL (Open Graphics Library).
```

โ Using OpenGL with C++ requires configuring several

```cpp
libraries
We will use the following libraries:
```

โ OpenGL / GLSL
โ GLUT (window management)
โ extension library

```cpp
Some more libraries will be used in the lab#06 and the project
```

โ GLFW
โ glm
โ ImGui

```cpp
Introduction to OpenGL
What is OpenGL
OpenGL is a platform-independent Application
Programmersโ Interface (API) that
```

- ข
- ข
- ข
- ข
- ข

```cpp
Is close enough to the hardware to get excellent performance
Provides a link between the low-level graphics hardware and the high-level
application program that you write
Is easy to use
Most of the concepts related to OpenGL covered in week 01 are for introduction purpose.
Many of these concepts will be repeated in more detail in the weeks to follow.
Variants of OpenGL
OpenGL ES
o Is suitable for embedded systems
o Version 1.0 is a simplified version of OpenGL 2.1
o Version 2.0 is a simplified version of OpenGL 3.1
o WebGL
o Is a derivative of OpenGL ES version 2.0
o Provides JavaScript bindings for OpenGL functions, allowing
an HTML page to render images using any GPU resources
available on the computer where the web browser is running
o WebGL and OpenGL ES are not included in the curriculum
Which Function is in which Library?
```

- ข You donโt need to memorize the functionalities of different

```cpp
OpenGL libraries
```

- ข Instead, you decide on your objects, lights and camera, then

```cpp
work out which OpenGL functions are required.
```

- ข Include libraries that contain your functions.
- ข For the practical issues you will have the OpenGL

```cpp
documentation to help.
https://docs.gl/
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- ข
- ข
- ข
- ข
- ข

```cpp
Sec. 1.2 A graphics system
Sec. 1.3 Images: Physical and Synthetic
Sec. 1.4 Imaging Systems
Sec. 1.5 The Synthetic Camera Model
Sec. 1.6 The Programmerโs Interface
Acknowledgement
```

- ข It is important to acknowledge that this unit utilizes the

```cpp
resources developed and supplied by Edward Angel, Dave
Shreiner, Gordon and V. Scott Gordon and John Clevenger,
authors of the following textbooks:
```

- ข โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- ข Computer Graphics Programming in OpenGL with C++, 2nd Ed,

```cpp
by V. Scott Gordon and John Clevenger
Choose the correct option(s)
```

โ Start presenting to display the poll results on this slide.


---

## Lecture 002-Programming with OpenGL.pdf: 002-Programming with OpenGL


```cpp
CITS3003 Graphics & Animation
Lecture 2:
Programming with
OpenGL
Content
```

- ข
- ข
- ข
- ข
- ข

```cpp
OpenGL Libraries
OpenGL State Machine
OpenGL Variable Types and Functions
What is GLSL
A Simple Program
Three-Dimensional APIs
The synthetic-camera model is the basis for a number of
popular APIs, including OpenGL and Direct3D.
```

- ข If we are to follow the synthetic-camera model, we need

```cpp
functions in the API to specify the following:
```

โ Objects
โ A viewer
โ Light sources
โ Material properties

```cpp
What is OpenGL
```

- ข Its an API (specifications to be precise)
โ Allows accessing and dealing with the graphics card
โ Contains over 250 functions
โ the latest OpenGL specification 4.6 was released in 2017
- ข Where do I download OpenGL?
โ Its already there in your graphics driver
- ข Is it open source?
โ Irrelevant (its essentially just a specification)
- ข We still treat OpenGL as API

```cpp
https://www.khronos.org/opengl/
https://registry.khronos.org/OpenGL/specs/gl/glspec46.core.pdf
What is OpenGL (contโฆ)
```

- ข OpenGL is one of many APIs that allow access to the

```cpp
graphics card
```

โ E.g., Vulkan, Direct 3D 11, Metal
- ข Why OpenGL
โ Cross-platform
โ Excellent entry point for Graphics learning

```cpp
For labs (1-5) Version 3.2+ are all ok!
Modern OpenGL
```

- ข

```cpp
Legacy OpenGL (version 3.0 and below ) uses set of presets (simple but not flexible)
```

- ข

```cpp
Modern OpenGL (version 3.2+) allows the computer
program to achieve fast graphics performance by using
GPU rather than CPU
```

- ข

```cpp
Allows applications to control GPU through programs
known as shaders
```

- ข

```cpp
It is the applicationโs job to send data to GPU; GPU then
performs the rendering
OpenGL Applications
```

- ข Non exhaustive list of OpenGL applications (link)

```cpp
Extension Library- GLEW
```

- ข Modern versions of OpenGL, such as those found in version
4+, require identifying the extensions available on the GPU.
- ข It has become standard practice to use an extension library to

```cpp
abstract away the extra coding used to identify and access the
OpenGL extensions on a GPU.
```

- ข GLEW is an OpenGL Extension Wrangler Library
- ข GLEW makes it easy to access OpenGL extensions available

```cpp
on a particular system
```

- ข Application only needs to include glew.h and run a glewInit()

```cpp
OpenGL/GLUT basics
OpenGL
```

- ข OpenGLโs function is Rendering (or drawing)
โ Renderingโ Convert geometric/mathematical object

```cpp
descriptions into images
```

- ข No functions for window management (create, resize,

```cpp
etc)
```

-portability across different platforms
- ข Links with window/windowing system
- ข GLX for X window systems
- ข WGL for Windows
- ข AGL for Macintosh

```cpp
Credits: Prof. Emmanuel Agu, cs4731, WPI
OpenGL/GLUT basics
GLUT
```

- ข A window system independent toolkit which:
โ Provides basic functions for window management
โ Interfaces with different windowing systems
โ Offers portability: code is portable between windowing systems.
- ข
- ข

```cpp
GLUT lacks the functionality of a
high-end toolkit for a specific platform
```

- ข No slide bars

```cpp
GLUT
GLUT is easy to use and learn, and it
works quite well for demos and simple
applications.
```

- ข Fast prototyping

```cpp
https://web.media.mit.edu/~gordonw/OpenGL/
OpenGL
ImageCredits: Prof. Emmanuel Agu, cs4731, WPI
freeGLUT
```

- ข GLUT was created long ago and has been

```cpp
unchanged
```

- ข freeglut updates GLUT

```cpp
o Added capabilities
o Context checking
Software Organization
```

- ข

```cpp
The application programs can use GLEW, GL, GLUT functions
but not directly access to Xlib etc.
```

- ข The program can therefore be compiled with e.g., GLUT for

```cpp
other operating systems.
High level
Low level
```

- Need to access these.
- Retrieve fnc pointers.

```cpp
Removes OS dependencies
```

*.dll

```cpp
X Window System
Provides fnc.
for OpenGL
Provides min. functionalities
expected by windowing sys.
Provides fnc. for GLX
OpenGL as a State Machine
```

- ข

```cpp
We can think of the entire graphics system as a black box
```

(finite-state machine).
- ข

```cpp
This black box has inputs coming from the application
program.
```

- ข
- ข

```cpp
These inputs can change the state (mode) of the machine or can cause the machine to
produce a visible output.
The behavior of Graphics system can be determined by its โstateโ, which can
be modified by invoking OpenGL functions
change
change
State 1
State 3
State 2
change
change
State 3
```

โฆ

```cpp
OpenGL Context and State
```

- ข
- ข
- ข

```cpp
OpenGL state machine consists of hundreds of settings that
affect various aspects of rendering.
The state of OpenGL is commonly referred to as the OpenGL
context.
The initial Graphics context has a number of default values for:
```

- ข color or other attributes
- ข transformations
- ข lighting mode, camera model, textures etc
โฆโฆ

```cpp
The OpenGL state as a graphics context object
OpenGL Context and State
```

- ข OpenGL maintains a list for the current values of attributes and

```cpp
other parameters, refers to as โstate variablesโ
```

โ When we assign a value to one or more state

```cpp
variables, we put the systems into a particular state.
```

โ State remains in effect until we change the value of a

```cpp
state variable.
```

โ Each state variable has a default value.

```cpp
The OpenGL state as a graphics context object
State Machine (cont..)
```

- ข From the perspective of the API, there are two types of

```cpp
graphics functions:
```

1. Functions that either change the state inside the machine or

```cpp
return the state information
```

โ glEnable ( GL_ LIGHTING );
โ glDisable ( GL_BLEND );
2. Functions that perform some operations based on the current

```cpp
state of the machine.
```

- ข Primitive functions
โ glColor3f(0.0, 0.0, 0.0);
โ glPointSize(1.5);

```cpp
OpenGL Functions
```

- ข OpenGL provides a range of functions for specifying:
- ข Primitives ๏  the low-level objects or atomic entities that our system can display

```cpp
o Points
o Line Segments
o Triangles
```

- ข Attributes ๏  the way that a primitive appears on the display
- ข Transformations ๏  to carry out transformations of objects, such as rotation,

```cpp
translation, and scaling
```

- ข Viewing
๏  To specify various views
- ข Control (GLUT) ๏  to communicate with the window system, initialize our

```cpp
programs, and deal with any errors during the execution
```

- ข Query ๏  to get information about API i.e., how many colours are supported etc.,

```cpp
What are OpenGL Primitives?
OpenGL primitives are standard set of basic geometric shapes that are used to create
complex 3D models in OpenGL. They include points, lines, polylines and polygons.
GL_POINTS
GL_LINES
Polygons have a
well-defined
interior
GL_TRIANGLE_STRIP
GL_LINE_STRIP
GL_LINE_LOOP
OpenGL primitives are
specified by sets of
vertices
GL_TRIANGLES
GL_TRIANGLE_FAN
What are OpenGL Primitives?
OpenGL primitives are standard set of basic geometric shapes that are used to create
complex 3D models in OpenGL. They include points, lines, polylines and polygons.
GL_POINTS
GL_LINES
Polygons have a
well-defined
interior
GL_TRIANGLE_STRIP
GL_LINE_STRIP
GL_LINE_LOOP
OpenGL primitives are
specified by sets of
vertices
GL_TRIANGLES
GL_TRIANGLE_FAN
OpenGL Types
```

- ข

```cpp
In OpenGL, we use basic OpenGL types, e.g.,
```

- ข
- ข
- ข
- ข
- ข

```cpp
GLfloat,
GLdouble,
GLint, etc
```

(equivalent to float, double, and int in C/C++)

```cpp
Additional data types are supplied in header files vec.h and
mat.h from Angel and Shreiner, e.g.,
```

- ข
- ข
- ข
- ข
- ข

```cpp
vec2,
vec3,
mat2,
mat3
mat4, etc.
What are Attributes?
```

- ข Attributes are properties associated with the primitives that give

```cpp
them their different appearances, e.g.
```

- ข
- ข
- ข
- ข

```cpp
Color (for points, lines, polygons)
Size and width (for points, lines)
Stipple pattern (for lines, polygons)
Polygon mode
```

- ข Display as filled: solid color or stipple pattern
- ข Display edges
- ข Display vertices

```cpp
Attributes for lines
Attributes for polygons
OpenGL Functions:
Lack of Object Orientation
```

- ข

```cpp
OpenGL is not object oriented so that there are multiple forms
of a given logical function, e.g., the following are the same
function but for different parameter types: (no overloading)
o
o
o
glUniform3f
glUniform2i
glUniform3fv
```

- ข The major reason is efficiency (Donโt wrap everything in classes

```cpp
when it is not required)
Format of OpenGL Functions
glUniform โ Specifies the value of a uniform variable for the current program object
function name
dimensions
glUniform3f(x,y,z)
belongs to GL library
x,y,z are floats
glUniform3fv(p)
p is a pointer to an array
Uniform variables are used to communicate with vertex or
fragment shaders from outside. We will come to the details later.
OpenGL #defines
```

- ข

```cpp
Most constants are defined in the include files gl.h, glu.h and
glut.h
```

- ข
- ข
- ข

```cpp
Note #include <GL/glut.h> should automatically include the others
Examples: the functions glEnable and glClear are both declared in
gl.h
The OpenGL data types GLfloat, GLdouble,โฆ. are also
declared in gl.h
Which of the following options
is correct?
```

โ Start presenting to display the poll results on this slide.

```cpp
Components of a OpenGL application
Image credits: Computer Graphics Programming in OpenGL
with C++, Scott Gordon and John Clevenger
What is GLSL
GLSL is short for OpenGL Shading Language
```

- ข It is a C-like language with:
- ข
- ข
- ข
- ข

```cpp
o
o
Built-in Matrix and vector types (2, 3, 4 dimensional)
C++ like constructors
It is similar to Nvidiaโs Cg and Microsoft HLSL
Supports loops, if-else constructs, but recursion is not allowed
GLSL codes are not stand-alone applications, they require an
application program that uses OpenGL API
More on GLSL in later lectures
A Simple Program
simple.cpp - Generates a white square on a black
background
For the above task, following are the
Rendering Steps:
```

1. Generate vertices (2 triangle = 6 vertices)
2. Store the vertices into an array
3. Create GPU buffer for vertices
4. Move array of 6 vertices from CPU to GPU

```cpp
buffer
```

5. Draw 6 points from array on GPU using

```cpp
glDrawArray
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- ข Sec. 2.4 Primitives and Attributes (up to Sec. 2.4.1)
- ข Sec. 2.3.1 Graphics Functions
- ข Sec. 2.3.2 Graphics Pipeline and State Machine
- ข Sec. 8.10 Graphics and the Internet
- ข (Advanced) Appendix A.2

```cpp
Graphics Shaders, Theory and Practice, 2nd Edition, Mike Baily,
Steve Cunningham
```



---

## Lecture 003-OpenGL-Pipeline.pdf: 003-OpenGL-Pipeline


```cpp
CITS3003 Graphics & Animation
Lecture 3:
Pipeline Architecture
Content
```

- ข Expanding on primitives
- ข Vertex attributes
- ข OpenGL pipeline architecture
- ข Immediate mode graphics vs retained mode

```cpp
graphics
OpenGL Primitives
Recall from a previous lectureโฆ
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

- ข Applications normally break complex surfaces into a very large number

```cpp
of triangles and send them to OpenGL
The only OpenGL polygons that OpenGL supports are triangles
```

- ข Triangles are easy to draw.
- ข We can approximate surfaces using collections of many triangles.

```cpp
Image credits: Fundamentals of Computer Graphics, 4th edition, Peter Shirley
Polygons in OpenGL
```

- ข Graphics systems like triangles because triangles are:

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

- ข In practice, we need to deal with more general polygons.
- ข If other polygons are used, Application program must

```cpp
tessellate a polygon into triangles (a.k.a triangulation)
```

- ข OpenGL 4.1 contains a tessellator.

```cpp
Tessellation (tiling) of a flat surface is the process of covering
it with one or more geometric shapes (the tiles): Wikipedia
Recursive Triangulation of
Convex Polygon
There are some simple algorithms to perform
triangulations for planar convex polygons.
```

- ข

```cpp
d
c
For example:
```

1. Start with first three vertices and form b

```cpp
a triangle.
```

- ข

```cpp
Start with abc to form the 1st triangle
```

2. Remove the second vertex from the list

```cpp
of vertices
```

- ข

```cpp
a
Remove b
```

3. (Recursion) Go to Step 1 to form the
2nd triangle
- ข Does not guarantee all triangles are good.

```cpp
Triangulation
Good and Bad Triangles
Although every set of vertices can be triangulated, not all
triangulations are equivalent.
Triangulation
Good and Bad Triangles
```

- ข

```cpp
Long, thin triangles render badly
```

- ข
- ข

```cpp
Equilateral triangles render well
To get good triangles for rendering
```

๏จ Maximize the minimum interior angle

```cpp
Delaunay triangulation can be used for unstructured points
```

- ข

```cpp
Vertices and attributes
```

- ข Each triangle is made up of 3 vertices. Each

```cpp
vertex is associated with some numerical
data.
```

- ข Vertex Attributes
โ Each data item associated with a vertex

```cpp
is called an attribute.
```

- ข location of the vertex (using 2 numbers for
2D geometry or 3 numbers for 3D geometry).
- ข color (using 3 numbers representing amounts

```cpp
of red, green and blue)
```

- ข material properties etc.

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

(2002), pp. 87โ98.. Foundations of 3D Computer

```cpp
Graphics,S.J. Gortler.MIT Press, 2012 ,
```

ยฉEurographics and Blackwell Publishing

```cpp
Ltd.
Colour
How is color handled in a graphics system from the programmerโs
Perspective?
RGB Color model:
```

- ข Each colour component is stored separately in the frame buffer.
- ข Occupies 8 bits per component in the buffer.
- ข Colour values range:

```cpp
o from 0 to 255 using unsigned integers, or
o from 0.0 (none) to 1.0 (all) using floats
```

- ข Use vec3 or vec4 to represent colour

```cpp
vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
R
G
B
Indexed Colour
```

- ข
- ข

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

- ข Pipeline architectures are very common and can be found in many

```cpp
application domains. E.g., an arithmetic pipeline:
Arithmetic Pipeline
```

- ข When two sets of a, b, and c values are passed to the system, the

```cpp
multiplier can carry out the 2nd multiplication without waiting for
the adder to finish ๏  the calculation time is shortened!
Pipeline Architectures
```

- ข Pipeline architectures are very common and can be found in many

```cpp
application domains. E.g., an arithmetic pipeline:
Arithmetic Pipeline
```

- ข When two sets of a, b, and c values are passed to the system, the

```cpp
multiplier can carry out the 2nd multiplication without waiting for
the adder to finish ๏  the calculation time is shortened!
Source
OpenGL Graphics Pipeline
```

- ข OpenGL utilizes the following pipeline (simplified version):

```cpp
application
program
```

- ข
- ข

```cpp
display
Objects passed to the pipeline are processed one at a time in the
order they are generated by the application program
All steps can be implemented in hardware on the graphics card
Image credits: Author: Romain Vergne link
Vertex Processing
```

- ข
- ข
- ข

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

- ข Projection is the process that combines the 3D

```cpp
viewer with the 3D objects to produce the 2D image
o Perspective projections: all projected rays meet at the
center of projection
o Parallel projection: projected rays are parallel; center of
projection is at infinity. (specify the direction of
projection instead of the center of projection)
Projection
```

- ข Example
2D to 1D Orthographic/Parallel Projection
2D to 1D Perspective Projection

```cpp
The gray box represents the part of the world that is visible to the projection; parts of the scene outside of this region are not seen
Credits: link
Primitive Assembly
```

- ข

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

- ข

```cpp
Just as a real camera cannot โseeโ the whole world, the virtual
camera can only see part of the world or object space
o Objects that are not within this volume are said to be clipped out
of the scene
Rasterization
```

- ข
- ข
- ข

```cpp
If an object is not clipped out, the appropriate pixels in the
frame buffer must be assigned colors.
Rasterizer produces a set of fragments for each object.
Fragments are โpotential pixelsโ. They:
o have a location in the frame buffer
o have colour, depth, and alpha attributes
```

- ข

```cpp
link
Vertex attributes (colour, transparency) are interpolated over
the objects by the rasterizer
Smooth Color
```

- ข We can tell the rasterizer in the pipeline how to interpolate

```cpp
the vertex colours across the vertices
```

- ข Default is smooth shading

```cpp
o OpenGL interpolates vertex
colors across visible polygon
```

- ข Alternative is flat shading

```cpp
o Color of the first vertex
determines the fill color
```

- ข Shading is handled in the fragment shader

```cpp
Fragment Processing
```

- ข
- ข
- ข

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

โ Start presenting to display the poll results on this slide.

```cpp
Retained Mode Graphics
The application constructs a scene from graphics primitives,
such as triangles and lines, and the library stores a model of the
scene in the memory.
```

- ข Put all vertex data in array(s), send array(s) over and store on GPU

```cpp
for multiple renderings
```

โ The application issues commands to update the scene (e.g.,

```cpp
add or remove shapes).
```

โ The library is responsible for redrawing the scene.
โ A retained-mode API is declarative.

```cpp
Image taken from docs.microsoft.com
Immediate Mode Graphics
```

- ข Older versions of OpenGL adopted immediate mode graphics,

```cpp
where:
```

โ Each time a vertex is specified in application, its location is sent to the

```cpp
GPU.
```

โ Old style programming, uses glVertex
โ The library does not store a scene model between the frames.

```cpp
Example code of using immediate
mode to draw a simple triangle.
Image taken from docs.microsoft.com
Immediate Mode with OpenGL
```

- ข Advantage:
โ No memory is required to store the geometric data (memory

```cpp
efficient)
```

- ข Disadvantages:
โ As the vertices are not stored, if they need to be displayed

```cpp
again, the entire vertex creation and the display process must
be repeated.
```

โ Creates bottleneck between CPU and GPU
- ข Immediate mode graphics has been removed from

```cpp
OpenGL 3.1
Retained Mode Graphics with OpenGL
```

- ข Put all vertex and attribute data into an array, send

```cpp
and store that on the GPU
```

- ข Update when required
- ข Retained mode graphics is adopted in OpenGL 3.1

```cpp
onward.
Comparison of the two modes
```

- ข Immediate mode graphics
- ข Retained mode graphics

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

โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- ข Sec. 1.7.2 โ 1.7.7 Pipeline Architectures โฆ Fragment

```cpp
Processing
```

- ข Sec. 2.1 The Sierpinski Gasket; immediate mode graphics vs

```cpp
retained mode graphics
```

- ข Sec 2.4 โ 2.4.4 Primitives and Attributes โฆ Triangulation

```cpp
Graphics Shaders (second edition) Bailey and Cunningham
```

- ข Chapter#01


---

## Lecture 004-OpenGL-Example-Program.pdf: 004-OpenGL-Example-Program


```cpp
CITS3003 Graphics & Animation
Lecture 4 :
OpenGL: An Example
Program
Content
```

- ข Understand an OpenGL program
โ Initialization steps and program structure
โ GLUT functions
โ Vertex array objects and vertex buffer objects
- ข Simple viewing
โ Introduce the OpenGL camera, orthographic viewing,

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

โ
โ
โ
โ
โ

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

- ข simple.cpp file: containing your main function
โ Does initialization, generates/loads geometry to be drawn
- ข Two shader files:
โ Vertex shader: functions to manipulate (e.g., move) vertices
โ Fragment shader: functions to manipulate pixels/fragments
(e.g., change color)

```cpp
A Simple Program (cont.)
```

- ข Most โ.cppโ (simple.cpp in our case) files have a similar structure

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

#include โAngel.hโ

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

#include โAngel.hโ

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

- ข

```cpp
OpenGL
programs are
event driven
The main function ends with the program entering an event loop
Display and Event Loop
```

- ข Note that the program specifies a display callback

```cpp
function named mydisplay
```

- ข
- ข

```cpp
Every glut program must have a display callback
The display callback is executed whenever OpenGL
decides the display must be refreshed, for example when
the window is opened.
simple.cpp
```

#include โAngel.hโ

```cpp
includes gl.h, glext.h,
freeglut.h,
vec.h, mat.h, โฆ
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
request โdouble bufferingโ & a โdepth bufferโ
glutInitWindowSize(640,480);
specify window size and position
glutInitWindowPosition(100,150);
glutInitContextVersion( 3, 2 ); require OpenGL 3.2 Core profile
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
create a window with the title โsimpleโ
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
request โdouble bufferingโ & a โdepth bufferโ
glutInitWindowPosition(100,150);
specify window size and position
glutInitContextVersion( 3, 2 );
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
create a window with the title โsimpleโ
simple
simple.cpp - A more complex version of
simple.cpp
main()
int main(int argc, char **argv) {
glutInit(&argc,argv);
glutInitDisplayMode(GLUT_DOUBLE|GLUT_DEPTH);
request โdouble bufferingโ & a โdepth bufferโ
glutInitWindowSize(640,480); specify window size and position
glutInitWindowPosition(100,150);
glutInitContextVersion( 3, 2 );
glutInitContextProfile( GLUT_CORE_PROFILE );
glutCreateWindow("simple");
glewInit();
init();
require OpenGL 3.2 Core profile
create a window with the title โsimpleโ
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

- ข glutInit initializes the GLUT system and allows it to receive command

```cpp
line arguments (always include this line)
```

- ข glutInitDisplayMode requests properties for the window
(the rendering context)
โ RGBA colour (default) or indexed colour (rare now)
โ Double buffering (usually) or Single buffering (redraw flickers)
โ Depth buffer (usually in 3D) stores pixel depths to find closest surfaces
๏ง [ usually with glEnable(GL_DEPTH_TEST); ]
โ Others: GLUT_ALPHA, โฆ generally for special additional window buffers
โ Properties are bitwise ORed together with | (vertical bar)
- ข glutWindowSize defines the window size in pixels
- ข glutWindowPosition positions the window (relative to top-left corner

```cpp
of display)
GLUT functions (cont.)
```

- ข glutCreateWindow creates a window

```cpp
o many functions need to be called prior to creating the window
o similarly, many other functions can only be called afterwards
```

- ข glutMainLoop enters infinite event loop

```cpp
o never returns, but may exit
Callback Functions (Recall..):
```

- ข
- ข

```cpp
A callback function is a function which the library (GLUT) calls when it needs
to know how to process events.
Register callbacks for all events your program will react to
```

- ข

```cpp
No registered callback = no action
```

โ Example:
- ข Declare function myMouse, to be called on mouse click
- ข Register it: glutMouseFunc(myMouse)

```cpp
GLUT functions (cont.)
Callback Registration
GLUT supports a number of callbacks to respond to events.
```

โ glutDisplayFunc sets the display callback
โ glutKeyboardFunc sets the keyboard callback
โ glutReshapeFunc sets the window resize callback
โ glutTimerFunc sets the timer callback
โ glutIdleFunc sets the idle callback

```cpp
OpenGl programs are
event-driven:
Program responds to
events such as:
```

- ข Mouse clicks
- ข Keyboard stroke
- ข Window resize

```cpp
Initialization
All the initialization codes can be put inside an init() function.
These include:
```

- ข Setting up the vertex array objects and vertex buffer objects
- ข Setting up vertex and fragment shaders
โ Read in the shaders
โ Compile them
โ Link them

```cpp
Covered in
detail in later
lectures
```

- ข Clearing windowโs background and other OpenGL

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

โฆ.

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
accessible as variable โvPositionโ
in vertex shader
Data starts at offset
from start of array
Reading, Compiling, and Linking Shaders
```

- ข The function InitShader defined in InitShader.cpp carries out

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

- ข Vertices can have many attributes
โ Position (1.0, 0.0, 0.1)
โ Color (e.g., red)
โ Texture Coordinates
โ Normal vector (x, y, z)

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

- ข Vertices can have many attributes
โ Position
โ Color (e.g., red)
โ Texture Coordinates
โ Normal (x, y, z)

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

- ข Array of VBOs (called Vertex Array Object (VAO))
โ

```cpp
Example: vertex positions in VBO 1, color info in VBO 2, etc.,
```

- ข To define a vertex array object (VAO):
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

- ข Unfortunately, some openGL functions are not completely

```cpp
platform independent.
```

- ข On Linux/Windows:

```cpp
GLuint abuffer;
glGenVertexArrays(1, &abuffer);
glBindVertexArray(abuffer);
```

- ข On Mac:

```cpp
GLuint abuffer;
glGenVertexArraysAPPLE(1, &abuffer);
glBindVertexArrayAPPLE(abuffer);
Vertex Buffer Objects
```

- ข Vertex buffers objects (VBO) allow us to transfer large amounts of

```cpp
data to the GPU
```

- ข Need to create and bind the VBO then copy the vertices to the

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

- ข glBufferSubData allows you to replace all or part of the data

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

- ข Can also specify more than one buffer object, e.g., 2

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

- ข Once we get data to GPU, we can initiate the rendering with a

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

- ข Prior to this, the vertex buffer objects should contain the vertex

```cpp
data.
What are shaders in OpenGL?
```

โ Start presenting to display the poll results on this slide.

```cpp
How often is a vertex shader
run in the rendering pipeline?
```

โ Start presenting to display the poll results on this slide.

```cpp
Coordinate Frames
OpenGL commonly uses the following coordinate frames
```

- ข
- ข
- ข
- ข
- ข

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

- ข

```cpp
We can define shapes of individual objects such as boxes,
trees or mountains, within a separate coordinate frame for
each object.
World Coordinates
The coordinates in which you build the complete scene
are called world coordinates.
```

- ข
- ข

```cpp
Each virtual world may contain 100โs of objects.
The application program applies a sequence of
transformations to orient and scale each object before
placing them in the virtual world.
Coordinate Frames
Camera (View) Coordinates
Camera coordinates are used to specify the
position of objects relative to the camera
```

(viewerโs) position
- ข the camera/viewer is at the origin and looking

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

- ข cube-like frustum box that defines the

```cpp
clipping space
```

- ข each vertex outside this box is clipped

```cpp
Perspective projection
```

- ข a non-uniformly shaped frustum box defines the

```cpp
clipping space
```

- ข each vertex outside this box is clipped
- ข field of view and sets how large the viewspace is

```cpp
Credits: link
Viewports
```

- ข We do not have to use the

```cpp
entire window to render the
scene, e.g., we can set the
viewport like this:
glViewport(x,y,w,h)
```

- ข Values passed to this

```cpp
function should be in pixels
```

(window coordinates)
- ข We can create multiple

```cpp
viewports in the same
window
For example, if we want to draw two scenes, sideby-side, and that the drawing surface is 600-by400 pixels. An outline for how to do that is very
simple:
The OpenGL Camera
```

- ข OpenGL places a camera at the origin in the view coordinate space pointing

```cpp
in the negative z direction
```

- ข The default viewing volume is a box centered at the origin with sides of

```cpp
length 2
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with Shader-Based

```cpp
OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ข
- ข
- ข
- ข
- ข
- ข
- ข

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

## Lecture 005: Vertex and Fragment Shaders (1)


```cpp
CITS3003 Graphics & Animation
Lecture 6:
Vertex and Fragment
Shaders-2
Content
```

- ข Vertex Shader
- ข Examples of Vertex Shader
- ข Fragment Shader
- ข Examples of Fragment Shader
- ข How the application program and vertex

```cpp
shader work together
What vertex shader can do?
```

(Application perspective)

```cpp
application
program (Vertex shader)
```

(Fragment shader)

```cpp
display
```

- ข Geometric transformations

```cpp
o Change location, rotation, scale of objects/camera
o Apply 3D perspective transformation โ make far objects smaller
```

- ข Moving vertices

```cpp
o
o
o
o
Perform morphing
Compute wave motion & deformation due to physical forces
Simulate particle effects โ for fire, smoke, rain, waterfalls, โฆ
Compute fractals
What vertex shader can do?
```

(Application perspective)

```cpp
application
program (Vertex shader)
```

(Fragment shader)

```cpp
display
```

- ข Lighting โ vertex shader can also
โ Calculate shading color using light and surface properties
โ Calculate cartoon shading (for special effects)

```cpp
Vertex Shader
```

- ข The vertex shader processes one vertex โ it takes in one

```cpp
vertex from the vertex stream as input and generates the
transformed vertex (optionally with attributes) to the
output vertex stream.
```

- ข Multiple shader programs can be invoked and run in

```cpp
parallel to render complex scenes in real-time.
A Simple Vertex Shader
```

#version 150

```cpp
in vec4 vPosition;
void main(void)
{
gl_Position = vPosition;
}
A more complex vertex shader
```

#version 150

```cpp
in vec4 vPosition;
out vec4 color;
uniform vec3 theta;
void main()
{
```

โฆ.
// code omitted

```cpp
color = โฆ..; // compute the out variable color
gl_Position = vPosition; // may be a more complex expression
}
Vertex Shader โ Example 1
Below is a wave motion vertex shader example:
in vec4 vPosition;
uniform float xs, zs; // frequencies
uniform float h; // height scale
uniform float time; //time
void main()
{
vec4 t = vPosition;
t.y = vPosition.y
```

+ h*sin(time + xs*vPosition.x)
+ h*sin(time + zs*vPosition.z);

```cpp
Remember: Uniform
variables cannot be
modified in the shader
gl_Position = t;
}
https://www.acs.psu.edu/drussell/demos/waves/wavemotion.html
Vertex Shader โ Example 2
Below is a particle system example:
in vec3 vPosition;
uniform mat4 ModelViewProjectionMatrix;
uniform vec3 vel;
uniform float g, m, t;
void main() {
vec3 object_pos;
object_pos.x = vPosition.x + vel.x*t;
object_pos.y = vPosition.y + vel.y*t + g/(2.0*m)*t*t;
object_pos.z = vPosition.z + vel.z*t;
}
gl_Position = ModelViewProjectionMatrix *
vec4(object_pos,1);
https://web.archive.org/web/20150930172450/http://www.pasteal
l.org/pic/show.php?id=67612
Vertex Shader
attribute vec4 vPosition;
varying vec4 color;
uniform vec3 theta;
in vec4 vPosition;
out vec4 color;
uniform vec3 theta;
void main()
{
```

โฆ.
// code omitted

```cpp
color = โฆ..;
gl_Position = vPosition;
}
void main()
{
```

โฆ.
// code omitted

```cpp
color = โฆ..;
gl_Position = vPosition;
}
Older Version
Opengl Version 3+
What can Fragment Shader do?
```

(Application perspective)
- ข Per fragment lighting calculations
(recall that a fragment is a potential pixel that not only

```cpp
has location coordinates but also has colour, depth, and
alpha values)
per vertex lighting
per fragment lighting
What can Fragment Shaders do?
```

(Application perspective)

```cpp
smooth shading
environment
mapping
bump mapping
What can Fragment Shader do?
```

(Application perspective)
- ข Lighting calculation

```cpp
o Per fragment lighting
```

- ข Texture mapping, including

```cpp
o Environment mapping
o Bump mapping
Image credits: Author: Romain Vergne link
What can Fragment Shader do?
```

(Application perspective)
#version 150

```cpp
out vec4 fragcolor;
void main(void) {
fragcolor = vec4(1.0, 0.0, 0.0, 1.0);
}
Example: Vertex and fragment shaders
```

#version 150
#version 150

```cpp
const vec4 red =
vec4(1.0, 0.0, 0.0, 1.0);
in vec4 vPosition;
out vec4 color_out;
in vec4 color_out;
out vec4 fragcolor;
void main(void)
{
gl_Position = vPosition;
color_out = red;
}
Vertex shader
void main(void) {
fragcolor = color_out;
}
```

// in pre-OpenGL 3.2
// versions, use built-in:
// gl_FragColor = color_out;

```cpp
out variables declared in the vertex shader must be
in variables in the fragment shader
Fragment shader
Example: Vertex and fragment shaders
const vec4 red =
vec4(1.0, 0.0, 0.0, 1.0);
attribute vec4 vPosition;
varying vec4 color_out;
Older versions
void main(void)
{
gl_Position = vPosition;
color_out = red;
}
Vertex shader
varying vec4 color_out;
void main(void) {
gl_FragColor = color_out;
}
Built-in variable
Fragment shader
varying variables declared in the vertex
shader must be varying variable in the
fragment shader
Shaders and Application Program Must
Work Together
```

- ข Using OpenGL to render 3D images generally

```cpp
involves sending data through the OpenGL shader
pipeline. For example, to draw a simple 3D object
such as a cube, you will need to at least send the
following items:
```

โ the vertices for the cube model
โ some transformation matrices to control the

```cpp
appearance of the cubeโs orientation in 3D space
How to send data from Application to
the Shader?
Sending data from Application to the
Shader
Two methods:
```

- ข through a buffer to a vertex attribute, or
- ข uniform variable

```cpp
In OpenGL, a buffer is called a VBO
```

( Vertex Buffer Object )

```cpp
VBOs are declared and instantiated in the
C++/OpenGL application
Overview of data flow for a C++/OpenGL
application, through pipeline shaders
```

(vertex attributes and uniform variables)

```cpp
Which one should I use?
```

- ข

```cpp
Use a uniform variable for values that are constant for the entire
object being drawn (such as transformation matrices)
```

- ข

```cpp
data that may change relatively infrequently compared to pervertex attributes
```

- ข Use a vertex attribute for per vertex data or when you want the

```cpp
values to be interpolated by the rasterizer.
```

- ข

```cpp
rasterization of vertices
Rasterization linearly interpolates
vertex attribute values so that the
displayed pixels seamlessly connect
the modeled surfaces.
Shaders and Application Program Must
Work Together
```

- ข For each variable declared using the qualifier

```cpp
attribute (or in) in the vertex shader, the
application needs to know how to link to it.
Main Program
```

(simple.cpp)

```cpp
Vertex Shader
```

(vertex.glsl)

```cpp
How to connect
them?
Fragment Shader
```

(fragment.glsl)

```cpp
Shaders and Application Program Must
Work Together
initShader( )
Connects main program to shader files
```

- ข Compiles and links vertex, fragment shaders
- ข Linking involves
- ข making the connections between the input variables from one shader

```cpp
to the output variables of another.
```

- ข making the connections between the other input/output variables of

```cpp
a shader to appropriate locations in the OpenGL environment.
```

// Load shaders and use the resulting shader program

```cpp
GLuint program = InitShader( "vertex.glsl", "fragment.glsl" );
glUseProgram( program );
Shaders and Application Program Must
Work Together
initShader( )
Connects main program to shader files
```

- ข Compiles and links vertex, fragment shaders
- ข Linking involves
- ข making the connections between the input variables from one shader

```cpp
to the output variables of another.
```

- ข making the connections between the other input/output variables of

```cpp
a shader to appropriate locations in the OpenGL environment.
Vertex shader file
in vec4 vPosition
Compiler puts all variables
declared in shader into a table
Shaders and Application Program Must
Work Together
```

โ All attribute/uniform variable names are stored in a

```cpp
table.
```

โ The application program can get an index for each

```cpp
attribute variable from the table.
Shaders and Application Program Must
Work Together
Vertex shader file
in vec4 vPosition
```

1-Get index/location of vertex attribute vPosition

```cpp
GLuint vPos = glGetAttribLocation( program, "vPosition" );
glEnableVertexAttribArray( vPos );
Shader program
handle returned by
InitShader() (slide25)
```

2-Enable vertex array attribute

```cpp
Address in the buffer,
where data begins
```

3-Describe the form of data in the vertex array

```cpp
glVertexAttribPointer( vPos, 3, GL_FLOAT, GL_FALSE, 0, BUFFER_OFFSET(0) );
Location of vPosition
```

3 (x,y,z) floats per

```cpp
vertex
Data no normalized
```

(0-1 range)

```cpp
Stride/Data is
contiguous
Reference to attribute (or in) variables
```

โ An Example
- ข In application program (in function init()):

```cpp
The application program can refer to
the vertex attribute via this index
GLuint loc = glGetAttribLocation( program, โposition" );
glEnableVertexAttribArray( loc );
glVertexAttribPointer( loc, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(0) );
```

- ข In vertex shader:

```cpp
in vec3 position;
Must be the same
Data transmission between a VBO and a vertex
attribute
The vertex shader runs once per vertex
Reference to attribute (or in) variables
```

โ Another Example
- ข In application program (in function init()):

```cpp
GLuint loc, loc2;
loc = glGetAttribLocation(program, โvPositionโ);
glEnableVertexAttribArray(loc);
glVertexAttribPointer(loc, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(0));
loc2 = glGetAttribLocation(program, โvColorโ);
glEnableVertexAttribArray(loc2);
glVertexAttribPointer(loc2, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(sizeofpoints));
```

- ข In vertex shader:

```cpp
in vec3 vPosition;
in vec3 vColor;
```

// vPosition and

```cpp
vColor are in
variables in the
vertex shader
Reference to uniform Variables โ
An Example
Sometimes we want to connect variables in OpenGL application to uniform variable in
shader
```

- ข In application program (init()):
/* my_angle set in application */

```cpp
GLfloat my_angle;
my_angle = 5.0 /* or some other value */
GLuint angleParam;
angleParam = glGetUniformLocation(myProgObj,"angle");
glUniform1f(angleParam, my_angle);
The data
type must be
consistent
```

- ข In vertex shader:

```cpp
uniform float angle;
```

- ข
- ข

```cpp
Declare a variable in
the application
program
Assign it a value
```

- ข

```cpp
find location of
shader โangleโ
variable in linker
table
```

- ข

```cpp
Connect: location of
shader variable
shader โangleโ to
application variable
```

โmy_angleโ
- ข

```cpp
Declare a uniform
variable in the shader
Reference to uniform Variables โ
An Example
Sometimes we want to connect variables in OpenGL application to uniform variable in
shader
```

- ข In application program (init()):
/* my_angle set in application */

```cpp
GLfloat my_angle;
my_angle = 5.0 /* or some other value */
GLuint angleParam;
angleParam = glGetUniformLocation(myProgObj,"angle");
glUniform1f(angleParam, my_angle);
```

- ข In vertex shader:

```cpp
uniform float angle;
This line appears in the display callback function
also, as the new value of my_angle computed in the
application program for every frame needs to be
copied to the vertex shader.
Which of the following
statements are correct:
```

โ Start presenting to display the poll results on this slide.

```cpp
Further Reading
```

- ข โInteractive Computer Graphics โ A Top-Down Approach with ShaderBased OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
- ข
- ข

```cpp
Sec2. 2.8.2-2.8.5
The Vertex Shader โฆThe InitShader Function
Sec 3.12.2 Uniform Variables
```

- ข David Wolff - OpenGL 4.0 Shading Language Cookbook
- ข OpenGL Programming Guide 9th Edition-Kessenich
- ข Computer Graphics programming in OpenGL with C++- Scott Gordon
- ข A good reference on OpenGL shaders:

```cpp
http://antongerdelan.net/opengl/shaders.html
```



---

## Lecture 005: Vertex and Fragment Shaders


```cpp
CITS3003 Graphics & Animation
Lecture 5:
Vertex and Fragment
Shaders-1
Content
```

- ข The rendering pipeline and the shaders
- ข GLSL
โ Data types, qualifiers, built-in variables, and

```cpp
functions in shaders
```

โ Swizzling & selection

```cpp
The Rendering Pipeline and the Shaders
Where are the vertex and fragment shaders are on the rendering
pipeline:
application
program (Vertex shader)
```

- Transformations - Polygons
- Vertex color
- Clip to view
- Projection

```cpp
vol.
```

(Fragment shader)

```cpp
display
```

- Color computation
- Fragment
- Texture mapping

```cpp
forming
```

- Discarding pixels
- Attribute

```cpp
interpolation
```

- ข The goal of the vertex shader is to provide the

```cpp
final transformation of mesh vertices to the
rendering pipeline.
```

- ข The goal of the fragment shader is to provide

```cpp
the colour to each pixel in the frame buffer.
Mesh
A sphere with some
parts made invisible by
discarding pixels in the
fragment
shader.
GLSL Shading Language
GLSL โ A Quick Review
```

- ข
- ข
- ข
- ข
- ข

```cpp
OpenGL Shading Language
Part of OpenGL 2.0 and up
High level C-like language
New data types are provided, e.g.
o Matrices
o Vectors
As of OpenGL 3.1, application programs must provide
shaders (as no default shaders are available)
Data Types in GLSL
```

- ข
- ข

```cpp
Scalar (non-vector) types:
```

- ข
- ข
- ข
- ข
- ข

```cpp
bool
Int
uint
float
double
```

// e.g., bool var = true;
// e.g., int var = -10;
// e.g., uint var = 10;
// e.g., float var = 0.5;
// e.g., double var = 0.12567;

```cpp
Vectors: Each of the scalar types, including booleans, have 2, 3,
and 4-component vector equivalents. The n digit below can be 2, 3,
or 4:
```

- ข bvecn: a vector of booleans
- ข ivecn: a vector of signed integers //e.g., ivec2 myvar = ivec2(-1, 2);
- ข uvecn: a vector of unsigned integers
- ข vecn: a vector of single-precision floating-point numbers
- ข dvecn: a vector of double-precision floating-point numbers

```cpp
Data Types in GLSL
Matrices: All matrix types are floating-points
```

- ข matn: A matrix with n columns and n rows. Shorthand

```cpp
for matnxn
```

- ข matnxm: A matrix with n columns and m rows
- ข

```cpp
Double-precision matrices (OpenGL 4.0 and above) can be declared with a
dmat instead of mat
mat3 Matrix;
Matrix[1] = vec3(1.0, 1.0, 1.0); // Sets the second column to all 1.0.
Matrix[2][0] = 15.0; // Sets the first entry of the third column to 15.0.
```


### 0.0


```cpp
Matrix = 0.0
```


### 0.0


### 1.0


### 1.0


### 1.0


### 15.0


### 0.0


### 0.0


```cpp
Pointers
```

- ข
- ข
- ข

```cpp
There are no pointers in GLSL
We can use C structs
Because matrices and vectors are basic types, they can be
passed into and output from GLSL functions, e.g.
mat3 func(mat3 a);
GLSL Qualifiers
```

- ข

```cpp
A qualifier is used in GLSL to modify the storage or behaviour of variables.
Qualifiers specify particular aspects of the variable, e.g., where they will get
their data from?
```

- ข

```cpp
GLSL has some of the same qualifiers as C/C++, e.g., const. However, more
are required due to the nature of the rendering pipeline
```

- ข

```cpp
Qualifiers that can be used in shader programs include:
```

โ attribute, uniform, varying (these are storage qualifiers)
โ highp, mediump, lowp (these are precision qualifiers)
โ in, out, inout (these are parameter qualifiers)

```cpp
Precision
qualifiers in
GLSL are
supported for
compatibility with
OpenGL ES
Storage Qualifiers
Qualifier Constant
```

- ข

```cpp
The qualifier const is used the same as in Java. It specifies that the value assigned to a
variable is constant and cannot be changed. The variable is read only. Here are a legal
and illegal statement.
```

// a vector assigned a value

```cpp
const vec4 point = vec4(1.0, 2.0, 3.0, 1.0);
```

// illegal statement because the const variable must be initialized when declared

```cpp
const float time;
```

- ข

```cpp
The qualifier const is used for variables that are compile-time constants or for function
parameters that are read-only.
```

โ
- ข

```cpp
must be initialized when declared
These variables:
```

โ

```cpp
cannot be used on the left-hand side of an assignment operation
```

โ

```cpp
cannot be referenced outside the shader that defines it
Qualifier attribute
```

- ข
- ข

```cpp
The qualifier attribute is used to declare variables that are shared
between a vertex shader and the application program; typically
used for vertex coordinates passed to the vertex shader, e.g.,
attribute vec4 vPosition;
Attribute
display
application
program
```

(Vertex shader)
(Fragment shader)
- ข Attribute variables
โ specify per vertex data, e.g., object space position, the normal direction and

```cpp
the texture coordinates of a vertex.
```

โ must be initialized in the application program.
โ Have only float, vec, and mat data types, cannot be declared as structs

```cpp
The Qualifier uniform
```

- ข The qualifier uniform is used to declare variables that are shared

```cpp
between a shader and the application program.
Uniform
display
application
program
```

(Vertex shader)
(Fragment shader)
- ข Uniform variables:
โ can appear in the vertex shader and the fragment shader
โ must have a global scope.
โ do not change from one shader invocation to the next within a particular

```cpp
rendering call thus their value is uniform among all invocations
```

- ข If a uniform variable is used in both shaders, its declaration must

```cpp
be identical in both.
The Qualifier uniform (cont.)
```

- ข uniform variables remain constant across a graphics primitive.

```cpp
They can be used to describe global properties that affect the
scene to be rendered, e.g., projection matrix, light source position,
etc. or object properties (e.g., colour, materials). e.g.,
uniform mat4 projection;
uniform float temperature;
```

- ข Variables declared as uniform are not changeable within the vertex

```cpp
shader or the fragment shader.
```

- ข However, their values can change in the application program. For

```cpp
each frame to be rendered, their new values are passed to the
shader(s).
The Qualifier varying
```

- ข The qualifier varying is used to declare variables that are shared

```cpp
between the vertex shader and the fragment shader.
Varying
display
application
program
```

(Vertex shader)
(Fragment shader)
- ข varying variables
โ are used to communicate results from one shader to another
โ must be declared identically in both shaders.

```cpp
The Qualifier varying (cont.)
```

- ข The varying qualifier can only be used with floating point scalar,

```cpp
floating point vectors and (floating point) matrices as well as arrays
containing these types.
```

- ข Example: the vertex shader can compute the color of the incoming

```cpp
vertex and then pass the value forward for interpolation. In both
shaders:
varying vec4 colour;
Precision Qualifiers
The Qualifiers highp, mediump,
lowp, and precision
```

- ข Supported for compatibility with OpenGL ES
โ Use is not recommended unless OpenGL ES compatibility is

```cpp
required
```

- ข The highp, mediump, and lowp qualifiers are used to specify the

```cpp
highest, medium, and lowest precision available for a variable. All
these qualifiers can appear in the vertex and fragment shaders.
```

- ข All variables of a certain type can be declared to have a precision

```cpp
by using the precision qualifier
precision precision-qualifierโ typeโ;
e.g., float
The Qualifiers highp, mediump,
lowp, and precision
```

- ข The default precision is highp.
- ข Using a lower precision might have a positive effect on performance
(frame rates) and power efficiency but might also cause a loss in

```cpp
rendering quality. The appropriate trade-off can only be determined
by testing different precision configurations.
Parameter Qualifiers
The Qualifiers in, out & inout
Function Parameter Qualifiers
```

- ข GLSL functions are declared and defined similarly to C/C++ functions. A

```cpp
function declaration in GLSL looks like this
void myFunct(in float inputVal, out int outputVal, inout float inAndOutVal)
Parameter qualifiers
```

- ข

```cpp
The values passed to functions are copied into parameters when the
function is called, and outputs are copied out when the function
returns (โvalue-returnโ calling convention)
The Qualifiers in, out & inout
void myFunct(in float inputVal, out int outputVal, inout float inAndOutVal)
{
inputVal = 0.0;
outputVal = int(inAndOutVal + inputVal);
inAndOutVal = 3.0;
}
void main()
{
float in1 = 10.5;
int out1 = 5;
float out2 = 10.0;
myFunct(in1, out1, out2);
}
After myFunct is called
in1
```


### 10.5


```cpp
out1
out2
```


### 3.0


```cpp
The Qualifiers in, out & inout
```

๏ฑ A parameter declared as in is intended to have a value when it is passed into a

```cpp
function but is not to be changed in the function.
```

- ข

```cpp
Such parameters are intended to communicate only from the calling function to
the called function.
```

๏ฑ The out parameter is not assumed to have an initial value the first time it appears

```cpp
in the function. But it is assumed that a value will be assigned before the function
returns.
```

- ข

```cpp
Such parameters are intended to communicate only from the called function to
the calling function.
```

๏ฑ The inout parameter is intended to have a value when it is passed into a function

```cpp
and to have a value, possibly different, when the function returns.
```

- ข

```cpp
Such parameters are intended to provide two-way communication between the
called function and the calling function.
The Qualifiers in, out & inout
```

- ข The in and out qualifiers supersede the attribute and varying

```cpp
qualifiers in GLSL version 130+ onward:
```

โ attribute is replaced by in in the vertex shader
โ varying in the vertex shader is replaced by out
โ varying in the fragment shader is replace by in

```cpp
An out variable is to get its value in the shader where it is defined and be passed from that
shader to the next shader further along in the shader pipeline. It is a write-only variable in
the shader where it is defined.
An in variable is to be received from a previous shader/application in the pipeline and used
in the shader where it is defined. It is a read-only variable in the shader where it is defined.
Passing Values
```

โ Variable declared out in vertex shader can be declared as in in

```cpp
fragment shader and used
Slide Credits: Prof Emmanuel Agu, CS4731, lecture 6
Choose the correct option(s)
```

โ Start presenting to display the poll results on this slide.

```cpp
Qualifiers
Qualifier
Variable specification/behaviour
const
Compile-time constants or function parameters that are read-only.
attribute
Shared between a vertex shader and application program for per-vertex
data.
Uniform
Shared between application and shaders, does not change across the
primitive.
varying
Shared between the vertex shader and the fragment shader for interpolated
data.
in
Function parameter that is read only, or read-only.
An in variable is to be received from a previous shader/application in the
pipeline and used in the shader where it is defined. It is a read-only variable
in the shader where it is defined.
out
Function parameter that is write-only.
An out variable is to get its value in the shader where it is defined and be
passed from that shader to the next shader further along in the pipeline. It is
a write-only variable in the shader where it is defined.
inout
Function parameter that is intended to have two-way communication
between the called function and the calling function.
Built-in variables in Shaders
```

- ข

```cpp
gl_Position
o
Its value must be defined in the vertex shader
in vec4 vPosition;
void main()
{
gl_Position = vPosition;
}
```

- ข The input vertexโs location is given by the four-dimensional

```cpp
vector vPosition whose specification includes the keyword in
to signify that its value is input to the shader when the shader
is initiated.
```

- ข gl_Position is a special state variable, which is the position that

```cpp
will be passed to the rasterizer and must be output by every
vertex shader. Because gl_Position is known to OpenGL, we
need not declare it in the shader.
Built-in Variables in Shaders
```

(Vertex shader)
- ข
(Fragment shader)

```cpp
gl_FragColor
o Now deprecated
o Its value must be defined in the fragment shader
void main()
{
gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
```

(R, G, B, Opacity)

```cpp
}
```

- ข Each invocation of the vertex shader outputs a vertex.
- ข Each fragment invokes an execution of the fragment shader.
- ข Each execution of the fragment shader must output a color for the fragment.

```cpp
Functions and Operators
```

- ข
- ข

```cpp
Standard C functions
o Trigonometric: cos, sin, tan, etc.,
o Arithmetic: min, max, log, abs, etc.,
o Normalize, reflect, length
Examples
```

- ข float length(TYPE x)
- ข float distance(TYPE x1, x2)
- ข TYPE normalize(TYPE x)
- ข Other examples are dot, cross, reflect, refract

```cpp
Reflection/refraction direction for an incident vector
```

- ข If you are performing an operation in GLSL that is somewhat

```cpp
graphics specific, check the documentation if there is an inbuilt
function for it
Functions and Operators
```

- ข

```cpp
Operators
```

- ข Binary operators *, /, +, -, =, *=, /=, +=, -= used between

```cpp
vectors of the same type, and work component-wise
vec3 a = vec3(1.0, 2.0, 3.0);
vec3 b = vec3(0.1, 0.2, 0.3);
vec3 c = a + b; // = vec3(1.1, 2.2, 3.3)
vec3 d = a * b; // = vec3(0.1, 0.4, 0.9)
Products act component-wise when
```

- ข One operand is a scalar and one is

```cpp
either a vector or matrix, or
```

- ข Both are vectors.

```cpp
But * does not work component-wise for matrix multiplication
mat2 a = mat2(1., 2., 3., 4.);
mat2 b = mat2(10., 20., 30., 40.);
mat2 c = a * b; //
```

= mat2(1. * 10. + 3. * 20., 2. * 10. + 4. * 20.,
1. * 30. + 3. * 40., 2. * 30. + 4. * 40.)

```cpp
Performs
correct linear
algebra
operations
```


### 1.0 3.0


### 10.0 30.0

= 70.0 150.0
*

### 2.0 4.0


### 20.0 40.0


### 100.0 220.0


```cpp
Operators and Functions
```

- ข
- ข

```cpp
For component matrix multiplication matrixCompMult is
provided
The * operator can also be used for matrix-vector product
vec2 v = vec2(10., 20.);
mat2 m = mat2(1., 2., 3., 4.);
vec2 w = m * v; // = vec2(1. * 10. + 3. * 20., 2. * 10. + 4. * 20.)
Selection and Swizzling
```

- ข Can refer to array elements by their indices using [] or by

```cpp
selection operator (.) with
```

โ x, y, z, w % 3D coordinates and perspective scale
โ r, g, b, a % Color values and opacity
โ s, t, p, q % texture coordinates (later)
โ vec4 m;
โ m[2], m.b, m.z, and m.p are the same

```cpp
name sets
GLSL supports some
standard name sets for
vector components
Selection and Swizzling
```

- ข Can refer to array elements by their indices using [] or by

```cpp
selection operator (.) with
```

โ x, y, z, w % 3D coordinates and perspective scale
โ r, g, b, a % Color values and opacity
โ s, t, p, q % texture coordinates (later)
โ vec4 m;
โ m[2], m.b, m.z, and m.p are the same

```cpp
name sets
GLSL supports some
standard name sets for
vector components
```

- ข Swizzling operator lets us manipulate components easily,

```cpp
e.g.,
vec4 a; // (0.0, 0.0, 0.0, 0.0)
a.yz = vec4(1.0, 2.0); // (0.0, 1.0, 2.0, 0.0)
vec4 newColour = a.bgra; // swap red and blue // (2.0, 1.0, 0.0, 0.0)
This lets you rearrange or reorganize the components of a vector.
You can also duplicate some of the components of a vector
Selection and Swizzling with
Matrices
```

- ข Swizzling does not work with matrices. You can instead

```cpp
access a matrix's fields with array syntax:
mat3 theMatrix;
theMatrix[1] = vec3(3.0, 3.0, 3.0); // Sets the 2nd column
theMatrix[2][0] = 16.0; // Sets the 1st entry of 3rd column
```

- ข However, the result of the first array accessor is a vector, so

```cpp
you can swizzle that:
mat3 theMatrix;
theMatrix[1].yzx = vec3(3.0, 1.0, 2.0);
References
```

โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed,
```

- ข Sec2. 2.8.2-2.8.5 The Vertex Shader โฆThe InitShader Function
- ข Sec 3.12.2 Uniform Variables

```cpp
Graphics Shaders (second edition) Bailey and Cunningham
```

โ GLSL Shader Language
โ Vertex Shader
โ Fragment Shader


---

## Lecture 007: Representation and Coordinate Systems(3)


```cpp
CITS3003 Graphics & Animation
Lecture 7:
Representation and
Coordinate Systems
Content
```

- ข Intro. to the elements of geometry:
- ข points, scalars and vectors
- ข Dimensionality and linear independence
- ข Intro. to coordinate frame
- ข Learn how to define and change coordinate frames
- ข Derive homogeneous coordinate transformation

```cpp
matrices
Points, Scalars and Vectors
```

- ข Point (fundamental geometric object)
โ Location in space/coordinate system

```cpp
y
```

- ข Example: Point (3, 4)
โ Cannot add or scale points
(0,0)
โ mathematical point has neither a size nor a shape
(3,4)

```cpp
x
```

- ข Scalars
โ Real /complex numbers
โ Used to specify quantities
โ Obey a set of rules
- ข addition and multiplication
- ข commutivity and associativity // a + b = b + a ; (a + b) + c= a + (b + c)
- ข multiplicative and additive inverses // a + (-a) = 0 ; a . ๐๐โ1= 1

```cpp
Points, Scalars and Vectors
```

- ข Vector
โ Is any quantity with direction and magnitude
- ข e.g., Force, velocity etc.
โ Can be added, scaled and rotated
โ A vector does not have a fixed location in space

```cpp
Directed line
segment
Parallel &
scaled
Inverse vectors
Point-vector
addition
Identical
vectors
Vector
addition
Vector-Point Relationship
For computer graphics:
```

โ scalars are the real numbers using ordinary addition and multiplication.
โ geometric points are locations in space,
โ and vectors are directed line segments.

```cpp
These objects obey the rules of an affine space.
```

โ Vector-vector addition
โ Scalar-vector multiplication
โ Point-vector addition
โ Scalar-scalar operations
โ No point-point addition
- ข For any point define
โ 1โขP=P
โ 0 โข P = 0 (zero vector)

```cpp
No other point-scalar operations
Vector-Point Relationship
```

- ข Vector
โ Two points can be thought of defining a vector,

```cpp
i.e., point-point-subtraction
```

๐๐ = ๐ท๐ท โ ๐ธ๐ธ
- ข Subtract 2 Points = vector
- ข Point + vector =point
โ Because vectors can be multiplied by scalars,

```cpp
expressions, below make sense
```

๐ท๐ท + ๐๐๐๐
โ But this does not
๐๐๐๐ โ ๐ธ๐ธ + ๐๐๐๐
๐ท๐ท + ๐๐๐๐ โ ๐๐

```cpp
Magnitude of a Vector
```

- ข Magnitude of a

```cpp
The magnitude of a vector a is a real number
denoted
```

โ If a =(2, 5, 6)
- ข Normalizing a vector

```cpp
Dot and Cross Products
```

- ข Many of the geometric concepts relating the orientation

```cpp
between two vectors are in terms of the dot (inner) and cross
```

(outer) products of two vectors.

```cpp
Dot and Cross Products
```

- ข Dot (inner) product:
๐ข๐ข ๏ฟฝ ๐ฃ๐ฃ = ๐ข๐ข ๐ฃ๐ฃ cos ๐๐
โ angle between two vectors
โ Finding a vectorโs magnitude
- ข Square of magnitude
โ Finding whether two vectors are perpendicular,
- ข If u.v = 0, u and v are orthogonal
โ Finding whether two vectors are parallel but pointing

```cpp
in opposite directions.
Dot and Cross Products
```

- ข Cross (outer) product
โ Given by u x v = |u||v| sin(ฮธ)
โ Normal

```cpp
An important property of the cross product of two vectors, is
that it produces a vector that is normal (perpendicular) to the
plane defined by the original two vectors.
Linear Independence
```

- ข A set of vectors v1, v2, โฆ, vn is linearly independent

```cpp
when
a1v1+a2v2+.. anvn = 0,
only if a1=a2=โฆ= 0
```

- ข If a set of vectors is linearly independent, we cannot

```cpp
represent any vector (in the set) in terms of the other
vectors.
```

- ข If a set of vectors is linearly dependent, at least one

```cpp
can be written in terms of the others
Examples
```

- ข Example#1:
๏v1=[1,2]T , v2=[-5,3]T

```cpp
Independent
```

- ข Example#2:
๏v1=[2,-1,1]T , v2=[3,-4,2]T, v3=[5,-5,3]T

```cpp
Dependent
Linear Independence (cont.)
```

- ข For example:

```cpp
Let
```

๐ฏ๐ฏ1 = 0 , ๐ฏ๐ฏ2 = 3 , ๐ฏ๐ฏ3 = 0
โ2

```cpp
then ๐ฏ๐ฏ1 , ๐ฏ๐ฏ2 , ๐ฏ๐ฏ3 is a set of linearly independent vectors.
```

- ข What are the values of ๐ผ๐ผ1 , ๐ผ๐ผ2 , and ๐ผ๐ผ3 if we want
๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3 = ๐๐?

```cpp
Linear Independence (cont.)
```

- ข What are the values of ๐ผ๐ผ1 , ๐ผ๐ผ2 , and ๐ผ๐ผ3 if we want ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 +
๐ผ๐ผ3 ๐ฏ๐ฏ3 = ๐๐?
- ข That is, we want
๐ผ๐ผ1
0 + ๐ผ๐ผ2 3 + ๐ผ๐ผ3 0 = 0
โ2
๐ผ๐ผ1
โบ ๐ผ๐ผ2 = 0
๐ผ๐ผ3
โบ ๐ผ๐ผ1 = ๐ผ๐ผ2 = ๐ผ๐ผ3 = 0

```cpp
Dimension
```

- ข

```cpp
In a vector space, the maximum number of linearly
independent vectors is fixed and is called the dimension of
the space
```

- ข

```cpp
In an n-dimensional space, any set of n linearly
independent vectors form a basis for the space
```

- ข

```cpp
Given a basis v1, v2, ..., vn, any vector w can be written as
w = a1v1+ a2v2 +โฆ.+anvn
where the coefficients {ai } are unique and are called
representations of w with respect to the basis {v1, v2, ..., vn}
A 3-dimensional space can
have 4 linearly independent
vectors?
```

โ Start presenting to display the poll results on this slide.

```cpp
Dimension (cont.)
Let us define a basis ๐ฏ๐ฏ1 = 0 , ๐ฏ๐ฏ2 = 1 , ๐ฏ๐ฏ3 = 0 .
```

- ข

```cpp
Orthonormal basis vectors
The vector ๐ฐ๐ฐ can be written as:
```

๐ฐ๐ฐ = 10.5 ๐ฏ๐ฏ1 + 21.3 ๐ฏ๐ฏ2 + 0.9 ๐ฏ๐ฏ3

```cpp
and the coefficients ๐ผ๐ผ1 = 10.5, ๐ผ๐ผ2 = 21.3, and ๐ผ๐ผ3 = 0.9 are
unique
In a three-dimensional vector
space, we can represent any
vector w uniquely in terms of
any three linearly independent
vectors, v1, v2, and v3
Coordinate Systems
```

- ข Which one is correct?

```cpp
v3
v3
v2
w
v1
v2
w
v1
```

- ข Both are correct, because vectors have no fixed

```cpp
location
Coordinate Systems
```

- ข We need a frame of reference to relate points and

```cpp
objects to our physical world.
o For example, where is a point? We canโt answer
this without a reference system
Coordinate Frame
```

- ข Basis vectors alone cannot represent points
- ข We can add a single point, the origin, to the

```cpp
basis vectors to form a coordinate frame
v2
P0
v1
v3
Coordinate Frame
```

- ข A coordinate system (or coordinate frame) is

```cpp
determined by the origin and the basis vectors
```

๐๐0 , ๐ฏ๐ฏ1 , ๐ฏ๐ฏ2 , ๐ฏ๐ฏ3
- ข Within this coordinate frame, every vector w can be

```cpp
written as
w = ฮฑ 1v 1+ ฮฑ 2v 2 + ฮฑ 3v 3
Every point can be written as
P = P0 + ฮฒ1v1+ ฮฒ2v2 + ฮฒ3v3
for some ๐ผ๐ผ1 , ๐ผ๐ผ2 , ๐ผ๐ผ3 , and ๐ฝ๐ฝ1 , ๐ฝ๐ฝ2 , ๐ฝ๐ฝ3
Representation in a Coordinate Frame
```

- ข

```cpp
Consider a basis v1, v2, โฆ, vn
```

- ข

```cpp
A vector w is written w = a1v1+ a2v2 +โฆ.+anvn
```

- ข

```cpp
The list of scalars {a1, a2, โฆ. an} is the representation of
w with respect to the given basis
```

- ข

```cpp
We can write the representation as a row or column matrix
```

๐ถ๐ถ = ๐ผ๐ผ1
๐ผ๐ผ2
๐ผ๐ผ1
๐ผ๐ผ
โฏ ๐ผ๐ผ๐๐ T = 2
โฎ
๐ผ๐ผ๐๐

```cpp
Coordinate systems (cont.)
For example, let ๐ฐ๐ฐ = 2๐ฏ๐ฏ1 + 3๐ฏ๐ฏ2 โ 4๐ฏ๐ฏ3 .
If ๐ฏ๐ฏ1 = 1 0 0 T ,
```

๐ฏ๐ฏ2 = 0 1 0 T ,

```cpp
and ๐ฏ๐ฏ3 = 0 0 1 T ,
then ๐ถ๐ถ = 2
```

โ4 T

```cpp
Note that this representation is with respect to a particular
basis
Homogeneous Coordinates
```

- ข Consider the point P and the vector v, where

```cpp
P = P0 + ฮฒ1v1+ ฮฒ2v2 + ฮฒ3v3
w = ฮฑ1v1+ ฮฑ2v2 + ฮฑ3v3
```

- ข They appear to have similar representations:

```cpp
P = [ฮฒ1, ฮฒ2, ฮฒ3]T , w =[ฮฑ1, ฮฑ2, ฮฑ3]T which
w
P
confuses the point with the vector
w
A vector has no position
Vector can be placed anywhere
P0
point: fixed
Representation in a Coordinate Frame
c =[c1, c2, c3]T
Representation of a vector or a point?
A Single Representation
```

- ข Assuming 0 ๏ฟฝ ๐๐ = ๐๐ and 1 ๏ฟฝ ๐๐ = ๐๐ , we can write
๐ฐ๐ฐ = ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3 = ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3 + 0 ๏ฟฝ ๐๐0
๐๐ = ๐ฝ๐ฝ1 ๐ฏ๐ฏ1 + ๐ฝ๐ฝ2 ๐ฏ๐ฏ2 + ๐ฝ๐ฝ3 ๐ฏ๐ฏ3 + ๐๐0 = ๐ฝ๐ฝ1 ๐ฏ๐ฏ1 + ๐ฝ๐ฝ2 ๐ฏ๐ฏ2 + ๐ฝ๐ฝ3 ๐ฏ๐ฏ3 + 1 ๏ฟฝ ๐๐0
- ข Thus, we obtain the four-dimensional homogeneous

```cpp
coordinate representation
```

๐ฐ๐ฐ = ๐ผ๐ผ1
๐๐ = ๐ฝ๐ฝ1
๐ผ๐ผ2
๐ฝ๐ฝ2
๐ผ๐ผ3
๐ฝ๐ฝ3
0 ๐๐
1 ๐๐

```cpp
Homogeneous Coordinates
```

- ข The homogeneous coordinate form for a three-dimensional point
๐ฅ๐ฅ ๐ฆ๐ฆ ๐ง๐ง T is given as
๐ฉ๐ฉ = ๐ฅ๐ฅ
๐ฆ๐ฆ
๐ง๐ง
1T
๐ค๐ค๐ฅ๐ฅ
๐ค๐ค๐ค๐ค
๐ค๐ค๐ง๐ง
๐ค๐ค T = ๐ฅ๐ฅ๐ฅ
๐ฆ๐ฆ๐ฆ
๐ง๐ง๐ง
- ข We return to a three-dimensional point (for ๐ค๐ค โ  0) by
๐ฅ๐ฅ โ ๐ฅ๐ฅ โฒ /๐ค๐ค
๐ฆ๐ฆ โ ๐ฆ๐ฆ โฒ /๐ค๐ค
๐ง๐ง โ ๐ง๐ง โฒ /๐ค๐ค
๐ค๐ค T
- ข If ๐ค๐ค = 0, the representation is that of a vector
- ข Homogeneous coordinates replace points in three dimensions by

```cpp
lines through the origin in four dimensions
```

- ข For ๐ค๐ค = 1, the representation of a point is ๐ฅ๐ฅ
๐ฆ๐ฆ
๐ง๐ง
1T

```cpp
Homogeneous Coordinates and Computer
Graphics
```

- ข Homogeneous coordinates are key to all computer

```cpp
graphics systems
```

โ All standard transformations (rotation, translation, scaling)

```cpp
can be implemented with matrix multiplications using 4 x 4
matrices
```

โ Hardware pipeline works with 4 dimensional representations
โ For orthographic viewing, we can maintain w = 0 for

```cpp
vectors and w = 1 for points
```

โ For perspective viewing we need a perspective division

```cpp
Change of Coordinate System
```

- ข Letโs consider transformation of two bases
โ {v1, v2, v3} and {u1, u2, u3} are two bases.
โ Each basis vector in the second set can be

```cpp
represented in terms of the first basis
```

๐ฐ๐ฐ

```cpp
The same vector w represented in two
coordinate systems
```

- ข Consider the same vector w with respect to two different coordinate

```cpp
systems having basis vectors ๐ฏ๐ฏ1 , ๐ฏ๐ฏ2 , ๐ฏ๐ฏ3 and ๐ฎ๐ฎ1 , ๐ฎ๐ฎ2 , ๐ฎ๐ฎ3 . Suppose that
```

๐ฐ๐ฐ = ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3
๐ฐ๐ฐ = ๐ฝ๐ฝ1 ๐ฎ๐ฎ1 + ๐ฝ๐ฝ2 ๐ฎ๐ฎ2 + ๐ฝ๐ฝ3 ๐ฎ๐ฎ3
- ข Then the representations are:
- ข Equivalently,
๐๐ = ๐ผ๐ผ1 ๐ผ๐ผ2
๐๐ = ๐ฝ๐ฝ1 ๐ฝ๐ฝ2
๐ผ๐ผ3 T
๐ฝ๐ฝ3 T
๐ฐ๐ฐ = ๐๐T v

```cpp
and ๐ฐ๐ฐ = ๐๐T u
```

๐ฏ๐ฏ = ๐ฏ๐ฏ1
๐ฎ๐ฎ = ๐ฎ๐ฎ1
๐ฏ๐ฏ2
๐ฎ๐ฎ2
๐ฏ๐ฏ3 T
๐ฎ๐ฎ3 T

```cpp
Representing the Second Basis in
Terms of the First (cont.)
```

- ข In this example, we have ๐ฐ๐ฐ = ๐๐T v and ๐ฐ๐ฐ = ๐๐T u

```cpp
So
```

- ข With ๐ฎ๐ฎ = ๐๐๐ฏ๐ฏ, we have
๐๐T v = ๐๐T u
๐๐T v = ๐๐T ๐๐๐ฏ๐ฏ
โ ๐๐ = ๐๐ T ๐๐
- ข Thus, ๐๐ and ๐๐ are related by ๐๐ T

```cpp
Representation w.r.t the second basis (u)
Representation w.r.t first basis (v)
Change of Coordinate System
Example:
Suppose u and v are two basis related to each other as
follows:
We have a vector w that is represented in basis v as:
what will be its representation in u ?
Coordinate Frame
```

- ข We can also do all this in coordinate systems:

```cpp
Change of Coordinate Frames
```

- ข We can apply a similar process in homogeneous coordinates

```cpp
to the representations of both points and vectors
Consider two coordinate
frames:
```

(P0, v1, v2, v3)
(Q0, u1, u2, u3)

```cpp
v
v2
P0
u2
u1
v1
Q0
u3
```

- ข Any point or vector can be represented in either coordinate

```cpp
frame.
```

- ข We can represent (Q0, u1, u2, u3) in terms of (P0, v1, v2, v3)

```cpp
Representing One Coordinate Frame in
Terms of the Other
```

- ข We can extend what we did with the change of basis

```cpp
vectors:
```

๐ฎ๐ฎ1 = ๐พ๐พ11 ๐ฏ๐ฏ1 + ๐พ๐พ12 ๐ฏ๐ฏ2 +๐พ๐พ13 ๐ฏ๐ฏ3
๐ฎ๐ฎ2 = ๐พ๐พ21 ๐ฏ๐ฏ1 + ๐พ๐พ22 ๐ฏ๐ฏ2 +๐พ๐พ23 ๐ฏ๐ฏ3
๐ฎ๐ฎ3 = ๐พ๐พ31 ๐ฏ๐ฏ1 + ๐พ๐พ32 ๐ฏ๐ฏ2 +๐พ๐พ33 ๐ฏ๐ฏ3
๐๐0 = ๐พ๐พ41 ๐ฏ๐ฏ1 + ๐พ๐พ42 ๐ฏ๐ฏ2 +๐พ๐พ43 ๐ฏ๐ฏ3 + ๐๐0

```cpp
by replacing the 3 ร 3 matrix ๐๐ by a 4 ร 4 matrix as follows:
```

๐พ๐พ11
๐พ๐พ21
๐๐ = ๐พ๐พ
๐พ๐พ41
๐พ๐พ12
๐พ๐พ22
๐พ๐พ32
๐พ๐พ42
๐พ๐พ13
๐พ๐พ23
๐พ๐พ33
๐พ๐พ43

```cpp
Working with Representations
```

- ข Within the two coordinate frames any point or vector has a

```cpp
representation of the same form:
```

๐๐ = ๐ผ๐ผ1
๐๐ = ๐ฝ๐ฝ1
๐ผ๐ผ2
๐ฝ๐ฝ2
๐ผ๐ผ3
๐ฝ๐ฝ3
๐ผ๐ผ4 in the first frame
๐ฝ๐ฝ4 in the second frame

```cpp
where ๐ผ๐ผ4 = ๐ฝ๐ฝ4 = 1 for points and ๐ผ๐ผ4 = ๐ฝ๐ฝ4 = 0 for vectors and
```

๐๐ = ๐๐ T ๐๐

```cpp
or
```

- ข The matrix ๐๐ T is 4 ร 4 and specifies an affine

```cpp
transformation in homogeneous coordinates
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with

```cpp
Shader-Based OpenGLโ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- ข Sec 3.3 Coordinate Systems and Frames
(all subsections)
- ข Sec 3.4 Frames in OpenGL

```cpp
Vector and Affine Spaces
```

- ข Scalar field
โ A pair of scalars can be combined to form another scalar
- ข two operations: addition and multiplication
โ obey the closure, associativity, commutivity, and inverse

```cpp
properties
```

- ข Vector space
โ Contains vectors and scalars
โ Vector-scalar and vector-vector interactions
โ Euclidean vector space
- ข is an extension of a vector space that adds a measure of size or distance
- ข e.g., length of a line segment
โ Affine vector space
- ข Extension of vector space and includes โpointโ
- ข No point serves as origin, we have displacement vectors and points
- ข Vector-point addition and point-point subtraction are possible
- ข No point-point addition and point-scalar operation are possible


---

## Lecture 008-9: Coordinate Frame Transformations(1)


```cpp
CITS3003 Graphics & Animation
Lecture 8:
Coordinate Frames and
Transformations
Content
```

- ข Introduce standard transformations
โ Rotation, Translation, Scaling, Shear
- ข Learn to build arbitrary transformation

```cpp
matrices from simple transformations
Revision
```

- ข Vectors are entities having length and direction, but no

```cpp
position.
```

- ข The difference between two points is a vector:
๐๐ = ๐ท๐ท โ ๐ธ๐ธ
- ข The sum of a point and a vector is a point:
๐ท๐ท = ๐๐ + ๐ธ๐ธ

```cpp
we also say that a point P is formed by displacing point Q by vector v
```

- ข An n-dimensional vector is given by an n-tuple (list of its

```cpp
components)
representations of w with
w = ๐ผ๐ผ1 ๐ผ๐ผ2 โฏ ๐ผ๐ผ๐๐ T
respect to the basis vectors
A Coordinate Frame
```

- ข A coordinate system (or coordinate frame) is

```cpp
determined by ๐๐0 , ๐ฏ๐ฏ1 , ๐ฏ๐ฏ2 , ๐ฏ๐ฏ3
v2
P0
v1
v3
The Homogeneous representation of a
Point and a Vector
```

- ข Assuming 0 ๏ฟฝ ๐๐ = ๐๐ and 1 ๏ฟฝ ๐๐ = ๐๐ , we can write
๐ฐ๐ฐ = ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3 = ๐ผ๐ผ1 ๐ฏ๐ฏ1 + ๐ผ๐ผ2 ๐ฏ๐ฏ2 + ๐ผ๐ผ3 ๐ฏ๐ฏ3 + 0 ๏ฟฝ ๐๐0
๐๐ = ๐ฝ๐ฝ1 ๐ฏ๐ฏ1 + ๐ฝ๐ฝ2 ๐ฏ๐ฏ2 + ๐ฝ๐ฝ3 ๐ฏ๐ฏ3 + ๐๐0 = ๐ฝ๐ฝ1 ๐ฏ๐ฏ1 + ๐ฝ๐ฝ2 ๐ฏ๐ฏ2 + ๐ฝ๐ฝ3 ๐ฏ๐ฏ3 + 1 ๏ฟฝ ๐๐0
- ข Thus, we obtain the four-dimensional homogeneous

```cpp
coordinate representation
```

๐ฐ๐ฐ = ๐ผ๐ผ1
๐๐ = ๐ฝ๐ฝ1
๐ผ๐ผ2
๐ฝ๐ฝ2
๐ผ๐ผ3
๐ฝ๐ฝ3
0 ๐๐
1 ๐๐

```cpp
The Homogeneous representation of a
Point and a Vector
```

- ข Homogeneous coordinates help keep the distinction between points

```cpp
and vectors.
```

- ข To go from ordinary to homogeneous coordinates:
โ if itโs a point append a 1;
โ if itโs a vector, append a 0;
๐ฐ๐ฐ = ๐ผ๐ผ1
๐๐ = ๐ฝ๐ฝ1
๐ผ๐ผ2
๐ฝ๐ฝ2
๐ผ๐ผ3
๐ฝ๐ฝ3
0 ๐๐
1 ๐๐

```cpp
Change of Coordinate Frames
Consider two coordinate frames:
v2
```

(P0, v1, v2, v3)
(Q0, u1, u2, u3)

```cpp
P0
P
v1
v3
```

- ข We can represent (Q0, u1, u2, u3) in terms of (P0, v1, v2, v3)
๐ฎ๐ฎ1 = ๐พ๐พ11 ๐ฏ๐ฏ1 + ๐พ๐พ12 ๐ฏ๐ฏ2 +๐พ๐พ13 ๐ฏ๐ฏ3
๐ฎ๐ฎ2 = ๐พ๐พ21 ๐ฏ๐ฏ1 + ๐พ๐พ22 ๐ฏ๐ฏ2 +๐พ๐พ23 ๐ฏ๐ฏ3
๐ฎ๐ฎ3 = ๐พ๐พ31 ๐ฏ๐ฏ1 + ๐พ๐พ32 ๐ฏ๐ฏ2 +๐พ๐พ33 ๐ฏ๐ฏ3
๐๐0 = ๐พ๐พ41 ๐ฏ๐ฏ1 + ๐พ๐พ42 ๐ฏ๐ฏ2 +๐พ๐พ43 ๐ฏ๐ฏ3 + ๐๐0

```cpp
Representing One Coordinate Frame in
Terms of the Other
```

๐๐ is a 4 ร 4 matrix:
๐พ๐พ11
๐พ๐พ21
๐๐ = ๐พ๐พ
๐พ๐พ41
๐พ๐พ12
๐พ๐พ22
๐พ๐พ32
๐พ๐พ42
๐พ๐พ13
๐พ๐พ23
๐พ๐พ33
๐พ๐พ43

```cpp
Working with Representations
```

- ข Within the two coordinate frames any point or vector can be

```cpp
represented as:
```

๐๐ = ๐ผ๐ผ1
๐๐ = ๐ฝ๐ฝ1
๐ผ๐ผ2
๐ฝ๐ฝ2
๐ผ๐ผ3
๐ฝ๐ฝ3
๐ผ๐ผ4 in the first frame
๐ฝ๐ฝ4 in the second frame

```cpp
where ๐ผ๐ผ4 = ๐ฝ๐ฝ4 = 1 for points and ๐ผ๐ผ4 = ๐ฝ๐ฝ4 = 0 for vectors and
```

๐๐ = ๐๐ T ๐๐

```cpp
or
```

- ข The matrix ๐๐ T is 4 ร 4 and specifies an affine

```cpp
transformation in homogeneous coordinates
An Example
We consider two reference frames that have basis vector relation
Let's say the reference point does not change, so
Our matrix MT would be:
Only accounting for
rotation
An Example
Now, we want our frames to have different reference pointโฆ.
Letโs say, to the point Q0 that has the following representation in
the original system.
The MT for such a setting will be:
Also accounting for
translation
Transformations
changing the
coordinate
System
```

(Lec#07)

```cpp
using
transformation
matrices
to move points
around
```

(todayโs lecture)

```cpp
On the top right is our mental image if we view it as a change of coordinates (a movement of the origin in this case).
and on the bottom right is our mental image if we view this transformation as a physical movement
Both ways will lead to exactly the same matrix
Matrix Multiplication
```


### 1.1

๐๐

### 2.2 x

=
๐๐

### 3.3

1๐๐ + 1.1๐๐
2๐๐ + 2.2๐๐
3๐๐ + 3.3๐๐

### 1.1

= a 2 + b 2.2

### 3.3


```cpp
a=b=1
```


### 2.1

= 4.2

### 6.3


### 2.1

= 4.2

### 6.3


```cpp
Identity Matrix
The identity matrix contains all zeros, with ones along the diagonal
Any point or matrix multiplied by the identity matrix is unchanged.
Transpose of a Matrix
The transpose of a matrix is computed by interchanging its rows and columns.
For example:
Transformation
```

- ข A transformation is a function that maps points

```cpp
to other points and/or vectors to other vectors
v = T(u)
Q=T(P)
Transformation matrics
In graphics, matrices are typically used for performing
transformations on objects. For example, a matrix can be used to
move a point from one location to another. We will learn several
useful transformation matrices:
```

- ข
- ข
- ข
- ข

```cpp
Translation
Rotation
Scale
Shear
Most of the transformations that we need in
computer graphics are affine.
Rotation (2D)
```

- ข Consider a rotation about the origin by ฮธ degrees
โ radius stays the same, angle increases by ฮธ
๐ฅ๐ฅโฒ = ๐๐ cos(๐๐ + ๐๐)
๐ฆ๐ฆโฒ = ๐๐ sin(๐๐ + ๐๐)
(New point ๐๐๐ after rotation)

```cpp
Two-dimensional
rotation
Representing x,y
```

๐ฅ๐ฅ = ๐๐ cos ๐๐

```cpp
in the Polar form
```

๐ฆ๐ฆ = ๐๐ sin ๐๐
(Old point P before rotation)

```cpp
sin(A+B) = sin(A) cos(B) + cos(A) sin(B)
cos(A+B) = cos(A) cos(B) โ sin(A) sin(B)
Rotation (2D)
```

- ข Consider a rotation about the origin by ฮธ degrees
โ radius stays the same, angle increases by ฮธ
๐ฅ๐ฅโฒ = ๐๐ cos(๐๐ + ๐๐)
๐ฆ๐ฆโฒ = ๐๐ sin(๐๐ + ๐๐)
๐ฅ๐ฅ = ๐๐ cos ๐๐
๐ฆ๐ฆ = ๐๐ sin ๐๐
๐ฅ๐ฅ โฒ = ๐๐ cos๐๐ cos ๐๐ โ ๐๐ sin๐๐ sin ๐๐
๐ฆ๐ฆ โฒ = ๐๐ cos๐๐ sin ๐๐ + ๐๐ sin๐๐ cos ๐๐
๐ฅ๐ฅโฒ = ๐ฅ๐ฅ cos ๐๐ โ ๐ฆ๐ฆ sin ๐๐
๐ฆ๐ฆโฒ = ๐ฅ๐ฅ sin ๐๐ + ๐ฆ๐ฆ cos ๐๐

```cpp
Two-dimensional
rotation
sin(A+B) = sin(A) cos(B) + cos(A) sin(B)
cos(A+B) = cos(A) cos(B) โ sin(A) sin(B)
Rotation (2D)
Rotation about the z-axis
```

- ข Rotation in two dimensions is equivalent to rotation

```cpp
about the ๐ง๐ง axis in three dimensions.
```

- ข Rotation about the ๐ง๐ง axis in 3D leaves the ๐ง๐ง

```cpp
components of all the points unchanged:
cos ๐๐
```

๐๐๐ง๐ง ๐๐ = sin ๐๐
โsin ๐๐

```cpp
cos ๐๐
Rotation about the z-axis
cos ๐๐
P โฒ = ๐๐๐ง๐ง ๐๐ P = sin ๐๐
```

โsin ๐๐

```cpp
cos ๐๐
```

๐ฅ๐ฅโฒ = ๐ฅ๐ฅ cos ๐๐ - y sin ๐๐ + 0 + 0
๐ฆ๐ฆ๐ฆ = ๐ฅ๐ฅ sin ๐๐ + y cos ๐๐ + 0 + 0
๐ง๐ง๐ง =
0 +0
+0+0
๐ค๐ค๐ค =
0 +0
+0+1

```cpp
In homogeneous coordinates
```

๐๐๐ = ๐๐ ๐๐ ๐๐ ๐๐
๐ฅ๐ฅ
0 ร ๐ฆ๐ฆ
= ๐ฅ๐ฅ cos ๐๐ - y sin ๐๐
= ๐ฅ๐ฅ sin ๐๐ + y cos ๐๐
=0
=1

```cpp
Rotation about x and y axis
```

- ข We can also derive the matrices for rotation about the x

```cpp
and y axis.
```

โ For rotation about x axis, x values are unchanged
โ For rotation about y axis, y values are unchanged
๏ฃฎ1
๏ฃฏ0 cos ฮธ - sin ฮธ
๏ฃฏ

```cpp
R = Rx(q) = ๏ฃฏ0 sin ฮธ cos ฮธ
```

๏ฃฏ
๏ฃฐ0
๏ฃฎ cos ฮธ
๏ฃฏ 0

```cpp
R = Ry(q) = ๏ฃฏ
```

๏ฃฏ- sin ฮธ

```cpp
Note the negative
```

๏ฃฏ

```cpp
sign here
```

๏ฃฐ 0
0๏ฃน
0๏ฃบ
๏ฃบ
0๏ฃบ
๏ฃบ
1๏ฃป
0 sin ฮธ 0๏ฃน
0๏ฃบ
๏ฃบ
0 cos ฮธ 0๏ฃบ
๏ฃบ
1๏ฃป

```cpp
Translation
```

- ข Move (translate, displace) a point to a new location

```cpp
d
```

๐๐โฒ
๐๐
- ข Displacement is determined by a vector d
โ Three degrees of freedom
๐๐โฒ = ๐๐ + ๐๐

```cpp
The whole object moves
```

- ข Although we can move a point to a new location in an

```cpp
infinite number of ways, when we move many points of
a rigid object there is usually only one way
object
translation: every point displaced
by same vector
Translation using Representations
```

- ข Using the homogeneous coordinate representation in a

```cpp
frame
```

๏ง ๐๐ = [๐ฅ๐ฅ ๐ฆ๐ฆ ๐ง๐ง 1]T
๏ง ๐๐โฒ = [๐ฅ๐ฅโฒ ๐ฆ๐ฆ๐ฆ ๐ง๐งโฒ 1]T
๏ง ๐๐ = [๐๐๐ฅ๐ฅ ๐๐๐ฆ๐ฆ ๐๐๐ง๐ง 0]T
- ข Hence ๐๐โฒ = ๐๐ + ๐๐ or
๏ง ๐ฅ๐ฅ โฒ = ๐ฅ๐ฅ + ๐๐๐ฅ๐ฅ
๏ง ๐ฆ๐ฆ โฒ = ๐ฆ๐ฆ + ๐๐๐ฆ๐ฆ
๏ง ๐ง๐งโฒ = ๐ง๐ง + ๐๐๐ง๐ง

```cpp
note that this expression is in
four dimensions and expresses
point = point + vector
```

27

```cpp
Translation Matrix
```

- ข We can also express translation using a 4 ร 4 matrix T in

```cpp
homogeneous coordinates
```

๐๐ = ๐๐(๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ, ๐๐๐ง๐ง) =
0 0 ๐๐๐ฅ๐ฅ
1 0 ๐๐๐ฆ๐ฆ
0 1 ๐๐๐ง๐ง
0 0 1
- ข This form is better for implementation because all affine

```cpp
transformations can be expressed this way and multiple
transformations can be concatenated together
Translation Matrix
```

- ข We can also express translation using a 4 ร 4 matrix T in

```cpp
homogeneous coordinates
```

๐๐โฒ = ๐๐๐๐ where
๐๐โฒ = ๐๐๐๐ =
0 ๐๐๐ฅ๐ฅ
0 ๐๐๐ฆ๐ฆ
1 ๐๐๐ง๐ง
0 1
๐ฅ๐ฅ
๐ฅ๐ฅ + ๐๐๐ฅ๐ฅ
๐ฆ๐ฆ
๐ฆ๐ฆ + ๐๐๐ฆ๐ฆ
๐ง๐ง = ๐ง๐ง + ๐๐๐ง๐ง
- ข This form is better for implementation because all affine

```cpp
transformations can be expressed this way, and multiple
transformations can be concatenated together
Translation
```

- ข Translate object= Move each vertex by the same

```cpp
distance d =(๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ, ๐๐๐ง๐ง)
```

๐๐ = ๐๐(๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ , ๐๐๐ง๐ง ) =
0 0 ๐๐๐ฅ๐ฅ
1 0 ๐๐๐ฆ๐ฆ
0 1 ๐๐๐ง๐ง
0 0 1

```cpp
If we translate a point (2,2,2) by displacement (2,4,6), new location
of point is (4,6,8)
Where
```

- ข ๐ฅ๐ฅ โฒ = ๐ฅ๐ฅ + ๐๐๐ฅ๐ฅ
- ข ๐ฆ๐ฆ โฒ = ๐ฆ๐ฆ + ๐๐๐ฆ๐ฆ
- ข ๐ง๐งโฒ = ๐ง๐ง + ๐๐๐ง๐ง

```cpp
Slide Credits :
Emmanuel Agu
WPI CS543
Scaling (non-rigid transform)
```

- ข Expand or contract along each axis (fixed point of origin)
๐ฅ๐ฅ โฒ = ๐ ๐ ๐ฅ๐ฅ๐ฅ๐ฅ
๐ฆ๐ฆ โฒ = ๐ ๐ ๐ฆ๐ฆ๐ฆ๐ฆ
๐ง๐ง โฒ = ๐ ๐ ๐ง๐งz
๐๐โฒ = ๐๐๐๐
๏ฃฎ sx
๏ฃฏ0
๐๐ = ๐๐(๐ ๐ ๐ฅ๐ฅ , ๐ ๐ ๐ฆ๐ฆ, ๐ ๐ ๐ง๐ง) = ๏ฃฏ
๏ฃฏ0
๏ฃฏ
๏ฃฐ0

```cpp
sy
sz
```

0๏ฃน
0๏ฃบ
๏ฃบ
0๏ฃบ
๏ฃบ
1๏ฃป

```cpp
Non-uniform
Uniform
Reflection
corresponds to negative scale factors
```

๏ฃฎ sx
๏ฃฏ0
๏ฃฏ
๏ฃฏ0
๏ฃฏ
๏ฃฐ0

```cpp
sy
sx = -1
sy = 1
original
sx = -1
sy = -1
sx = 1
sy = -1
sz
```

0๏ฃน
0๏ฃบ
๏ฃบ
0๏ฃบ
๏ฃบ
1๏ฃป

```cpp
Shear
```

- ข It is helpful to add one more basic transformation, the

```cpp
shearing transformation, to the collection of
transformation we have learnt
```

- ข Shearing is equivalent to pulling faces in opposite

```cpp
directions
Shear
Shear Matrix
Consider a simple shear along the x axis
```

๏ง ๐ฅ๐ฅโฒ = ๐ฅ๐ฅ + ๐ฆ๐ฆ cot ๐๐
๏ง ๐ฆ๐ฆโฒ = ๐ฆ๐ฆ
๏ง ๐ง๐งโฒ = ๐ง๐ง
๏ฃฎ1 cot ฮธ
๏ฃฏ0
๏ฃฏ
=> H(ฮธ) =
๏ฃฏ0
๏ฃฏ
๏ฃฐ0
0๏ฃน
๏ฃบ
๏ฃบ
0๏ฃบ
๏ฃบ
1๏ฃป
๐ฅ๐ฅ โฒ โ ๐ฅ๐ฅ = ๐ฆ๐ฆ cot ๐๐

```cpp
Shear
Shear Matrix
Consider a simple shear along the x axis
```

๏ง ๐ฅ๐ฅโฒ = ๐ฅ๐ฅ + ๐ฆ๐ฆ cot ๐๐
๏ง ๐ฆ๐ฆโฒ = ๐ฆ๐ฆ
๏ง ๐ง๐งโฒ = ๐ง๐ง
๏ฃฎ1 cot ฮธ
๏ฃฏ0
=> H(ฮธ) = ๏ฃฏ
๏ฃฏ0
๏ฃฏ
๏ฃฐ0
0๏ฃน
0๏ฃบ
๏ฃบ
0๏ฃบ
๏ฃบ
1๏ฃป

```cpp
Inverses
```

- ข Although we could compute inverse matrices by general

```cpp
formulas, we can use simple geometric observations
```

โ Translation: ๐๐ โ1 (๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ, ๐๐๐ง๐ง) = ๐๐(โ๐๐๐ฅ๐ฅ , โ๐๐๐ฆ๐ฆ, โ๐๐๐ง๐ง)
โ Rotation: ๐๐โ1 (๐๐) = ๐น๐น(โ๐๐)
- ข Holds for any rotation matrix
- ข Note that since cos(โ๐๐) = cos(๐๐) and sin(โ๐๐) =
โ sin(๐๐)
๐๐โ1 (๐๐) = ๐๐T (๐๐)
โ Scaling: ๐๐ โ1 (๐ ๐ ๐ฅ๐ฅ, ๐ ๐ ๐ฆ๐ฆ, ๐ ๐ ๐ง๐ง) = ๐๐(1/๐ ๐ ๐ฅ๐ฅ, 1/๐ ๐ ๐ฆ๐ฆ, 1/๐ ๐ ๐ง๐ง)
โ Shear:
37

```cpp
Concatenation
```

- ข We can form arbitrary affine transformation matrices by

```cpp
multiplying together rotation, translation, scaling and
shear matrices
```

- ข Because the same transformation is applied to many

```cpp
vertices, the cost of forming a matrix ๐๐ = ๐๐๐๐๐๐๐๐ is
not significant compared to the cost of computing ๐๐๐๐
for many vertices ๐ฉ๐ฉ
```

- ข The difficult part is how to form a desired transformation

```cpp
from the specifications in the application
Order of Transformations
```

- ข Suppose that we carry out three successive

```cpp
transformations on a point p, creating a new point q
```

- ข We can write the sequence as ๐ช๐ช = ๐๐๐๐๐๐๐ฉ๐ฉ
โ Note that matrix on the right is the first applied
โ Mathematically, the following are equivalent
๐ช๐ช = ๐๐๐๐๐๐๐ฉ๐ฉ = ๐๐(๐๐(๐๐๐ฉ๐ฉ))
- ข If we have many points to transform

```cpp
M = CBA
q = Mp
Order of Transformation matters
Image credits: Fundamentals of Computer Graphics (4th Edition)-Peter Shirley
General Rotation About the Origin
A rotation angle of ๐๐ about the origin can be decomposed into the
concatenation of rotations about the ๐ฅ๐ฅ, ๐ฆ๐ฆ, and ๐ง๐ง axes
```

๐น๐น(๐๐) = ๐น๐น๐ง๐ง(๐๐๐ง๐ง) ๐น๐น๐ฆ๐ฆ(๐๐๐ฆ๐ฆ) ๐น๐น๐ฅ๐ฅ (๐๐๐ฅ๐ฅ )

```cpp
y
```

๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ , and ๐๐๐ง๐ง are called the Euler angles

```cpp
Note that rotations do not commute
We can use rotations in another order but
with different angles
z
q
v
x
Rotation About a Fixed Point other
than the Origin
```

1. Move the object to the origin
2. Rotate
3. Move the object back to the fixed point
=> M = T(pf) ๐น๐น(๐๐) T(-pf)

```cpp
After Step 1
After Step 2
After Step 3
Rotation About a Fixed Point other
than the Origin (cont.)
```

- ข A 2D example:

```cpp
y
Objective: want to rotate a square 45 degrees about its
own center, ๐ฉ๐ฉ.
```

๐ฉ๐ฉ

```cpp
x
Before rotation
y
x
Output wanted after rotation
This is the same as rotating about the ๐ง๐ง-axis (pointing out
of the page) in 3D.
Rotation About a Fixed Point other
than the Origin (cont.)
```

- ข Our aim is to construct a matrix ๐๐ so that when the four

```cpp
vertices of the square are multiplied by it, we get the
desired output.
```

- ข Step 1: apply a translation so that the origin is at ๐ฉ๐ฉ.

```cpp
y
y
```

๐ฉ๐ฉ

```cpp
x
```

๐๐ = ๐๐(โ๐ฉ๐ฉ)

```cpp
x
Rotation About a Fixed Point other
than the Origin (cont.)
```

- ข Step 2: apply a 45-degree rotation about the ๐ง๐ง-axis at the

```cpp
origin.
y
y
x
```

๐๐ = ๐๐ z ๐ฝ๐ฝ ๐๐(โ๐ฉ๐ฉ)

```cpp
x
Rotation About a Fixed Point other
than the Origin (cont.)
```

- ข Step 3: move the origin back to where it was before.

```cpp
y
y
x
x
```

๐๐ = ๐๐ ๐ฉ๐ฉ ๐๐ z ๐ฝ๐ฝ ๐๐(โ๐ฉ๐ฉ)

```cpp
A Few Common Transformations
```

- ข Rigid transformation: The 4 ร 4 matrix has the form:
๐๐
๐๐T
๐ญ๐ญ

```cpp
where ๐๐ is a 3 ร 3 rotation matrix and ๐ญ๐ญ โ โ๐๐๐ฑ๐ฑ๐๐ is a
translation vector. Rigid transformation preserves
everything (angle (this means the shape), length, area, etc.,)
```

- ข Similarity transformation: The matrix has the form:

```cpp
Small (or large) ๐ ๐ โฒ
Large (or small) ๐ ๐ 
```

๐ ๐ ๐๐ ๐ญ๐ญ
๐๐ ๐ญ๐ญ

```cpp
values enlarge (or
values enlarge (or
or T
T
```

๐๐
๐๐
๐ ๐ ๐ 

```cpp
diminish) the object
diminish) the object
where ๐ ๐ , ๐ ๐ ๐  โ  1. Similarity transformation preserves angle,
ratios of lengths and of areas.
A Few Common Transformations (cont.)
```

- ข Affine transformation: The 4 ร 4 matrix has the form:
๐ด๐ด
๐๐T
๐ญ๐ญ

```cpp
where ๐ด๐ด can be any 3 ร 3 non-singular matrix and
```

๐ญ๐ญ โ โ๐๐ is a translation vector. Affine transformation

```cpp
preserves parallelism, ratios of lengths.
```

- ข Perspective transformation: The matrix can be any nonsingular 4 ร 4 matrix. Perspective transformation matrix

```cpp
preserves cross ratios (i.e., ratio of ratios of lengths).
A Few Common Transformations (cont.)
```

- ข Rigid transformation is equivalent to a change in

```cpp
coordinate frames. It has 6 degrees of freedom (dof) i.e.,
```

3 rotations + 3 translations (along each of the three axes)
- ข Similarity transformation has 7 dof (an additional scaling)
- ข Affine transformation has 12 dof
โ 3 rotations + 3 translations + 3 scaling + 3 shear

```cpp
Choose the correct option
```

โ Start presenting to display the poll results on this slide.

```cpp
What does the given
Transformation matrix do?
```

โ Start presenting to display the poll results on this slide.

```cpp
Instancing
```

- ข In modeling, we often start with a simple

```cpp
object centered at the origin, oriented with the
axis, and at a standard size
```

- ข We apply an instance transformation to its

```cpp
vertices to
```

โ Scale
โ Orient
โ Locate

```cpp
Instancing
```

- ข Instancing provides a mechanism for telling the graphics card to render

```cpp
multiple copies of an object using only a single OpenGL call.
Using glDrawArraysInstanced()
instead of glDrawArrays()
Instancing: 100,000 animated cubes
number of instances to be drawn
Image credits: Computer Graphics Programming in OpenGL with C++, by V. Scott Gordon and John Clevengerโ, 2nd Edition
Frames in OpenGL
We had considered the following coordinate systems
```

1. Object (or model) coordinates
2. World coordinates
3. Eye (or camera) coordinates
4. Clip coordinates
5. Normalised device coordinates
6. Window (or screen) coordinates

```cpp
Image credits: Fundamentals of Computer Graphics (4th Edition)-Peter Shirley
Change of Coordinate Frame
In OpenGL, we specify our geometry using the coordinate
system or frame that is natural for the model, which is known
as the object or model frame.
Models are then brought into the world frame
At some point, we want to know how these objects appear to
the camera. It is natural at that point to convert from the world
frame to the camera or eye frame
The conversion from the object frame to the eye frame is done
by the model-view matrix.
Object (Local) and World Space
```

- ข Object (Local or Model) space:
โ The space in which a model is defined, usually centered at

```cpp
the origin.
```

- ข World space:
โ The space in which a simulated scene is built

```cpp
The Model matrix
positions and orients
the object in the world
coordinate space.
Each model has its own
model matrix.
The matrix transforms (concatenated) that place an object
in world space is called its Model matrix, or M
Camera (or View or Eye) Space
```

- ข World space as seen from a simulated camera or โeyeโ.

```cpp
Camera (or View or Eye) Space
```

- ข The View matrix moves and rotates the models in the world to

```cpp
simulate the effect of a camera at a desired location.
```

- ข OpenGL camera exists at location (0,0,0) and faces down the

```cpp
negative Z axis.
```

- ข To simulate the appearance of that camera being moved a

```cpp
certain way, we will need to move the objects themselves in
the opposite direction.
Transformations in Graphics pipeline
We had considered the following coordinate systems
Can be
```

1. Object (or model) coordinates

```cpp
Affine
combined in
```

2. World coordinates

```cpp
transform
model-view
```

3. Eye (or camera) coordinates

```cpp
transform
```

4. Clip coordinates
5. Normalised device coordinates
6. Window (or screen) coordinates

```cpp
The model-view
transformation brings
representations of geometric
objects from application or
model frame to the camera
frame.
The projection matrix will both
carry out the desired projection and
also change the representation to
clip coordinates.
Camera and Object Frames
Camera and object frame in default positions
```

๐๐ = 0

```cpp
model-view matrix
the camera is initially pointing in
the negative z-direction
Note that if we do not model with predefined objects or apply any transformations before we
specify our geometry, object and world coordinates are the same.
Camera and Object Frames
In most applications, we model our objects as being located around
the origin, so a camera located at the default position with the
default orientation does not see all the objects in the scene.
Thus, either:
```

- ข we must move the camera away from

```cpp
the objects that we wish to have in our image
Or
```

- ข the objects must be moved in front of the camera.

```cpp
These are equivalent operations, as either can be looked at as
positioning the frame of the camera with respect to the frame of the
objects.
Positioning Object frame
relative to the Camera frame
Camera frame is fixed, we are placing object frame relative to
the camera frame.
```

1 0
๐๐ = 0 1
0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
Transformation matrix โAโ moves a
point (x, y, z) in the world frame to the
point (x, y, z โ d) in the camera frame
Moving the Camera Vs
Moving the Objects
Camera frame is fixed, we are placing world frame relative to
the camera frame.
```

1 0
๐๐ = 0 1
0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
How did we derive A (modelview matrix)?
Positioning World frame
relative to the Camera frame
Camera frame is fixed, we are placing world frame relative to
the camera frame.
```

1 0
๐๐ = 0 1
0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
Recall?
Translation matrix
```

- ข
- ข
- ข
๐ฅ๐ฅ โฒ = ๐ฅ๐ฅ
๐ฆ๐ฆ โฒ = ๐ฆ๐ฆ
โฒ = ๐ง๐ง + (โ๐๐)
๐ง๐ง
๐๐ = ๐๐(๐๐๐ฅ๐ฅ , ๐๐๐ฆ๐ฆ , ๐๐๐ง๐ง ) =
0 ๐๐๐ฅ๐ฅ
0 ๐๐๐ฆ๐ฆ
1 ๐๐๐ง๐ง
0 1

```cpp
Moving the Camera
Moving the camera away from its initial position at the origin
of the object frame.
```

1 0
๐๐ = 0 1
0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
Recall? โฆ changing coordinate frames
Recall: Change of Coordinate Frames
y
Consider two coordinate frames:
yc P0
z d
```

(P0, x, y, z)
(Q0, xc, yc, zc)

```cpp
Q0
x
Initially both coordinate
frames shared the same
origin (0,0,0), then we
moved the camera frame
to (0,0,d)
xc
zc
```

- ข We can represent (Q0, xc, yc, zc) in terms of (P0, x, y, z)
๐ฑ๐ฑ ๐๐ = ๐พ๐พ11 ๐๐ + ๐พ๐พ12 ๐๐+๐พ๐พ13 ๐๐
๐ฒ๐ฒ๐๐ = ๐พ๐พ21 ๐๐ + ๐พ๐พ22 ๐๐+๐พ๐พ23 ๐๐
๐ณ๐ณ๐๐ = ๐พ๐พ31 ๐๐ + ๐พ๐พ32 ๐๐+๐พ๐พ33 ๐๐
๐๐0 = ๐พ๐พ41 ๐๐ + ๐พ๐พ42 ๐๐+๐พ๐พ43 ๐๐ + ๐๐0
๐ฑ๐ฑ ๐๐ = ๐๐
๐ฒ๐ฒ๐๐ = ๐๐
๐ณ๐ณ๐๐ = ๐๐
๐๐0 = d๐๐ + ๐๐0
1 0
๐๐ = 0 1
0 0
0 0
๐๐

```cpp
Moving the Camera
Moving the camera away from its initial position at the origin of the
object/world frame.
```

1 0

```cpp
T= 0 1
```

0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
Recall? โฆ changing coordinate frames
where, ๐๐ = 0
```

0 0
1 0
0 1
0 ๐๐
โbโ is the representation of a point/vector w.r.t the camera coordinates
โaโ is the representation of a point/vector w.r.t the world coordinates

```cpp
Positioning Camera frame
relative to the World frame
World frame is fixed, we are placing camera frame relative to
the world frame.
```

1 0

```cpp
T= 0 1
```

0 0
0 0
0 0
0 0
1 โ๐๐
0 1

```cpp
This matrix T takes a point (0, 0, d) in the
object/world frame, whose representation is:
p =[0 0 ๐๐ 1]๐๐
to
pโ= [0 0 0 1]๐๐
i.e., the origin in the camera frame
The World and Camera Coordinate
Frames
```

- ข Changes in coordinate frame are then defined by 4 ร 4

```cpp
matrices
```

- ข In OpenGL, the base frame that we start with is the

```cpp
world frame
```

- ข Eventually we represent entities in the camera frame by

```cpp
changing the world representation using the modelview matrix
```

- ข Initially these frames are the same (i.e., M=I)

```cpp
Pipeline Implementation
T (from application program)
u
v
transformation
T(u)
```

(before transformation)

```cpp
rasterizer
T(v)
T(v)
v
u
vertices
frame
buffer
T(u)
vertices
```

(after transformation)

```cpp
T(v)
T(u)
pixels
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with Shader-Based

```cpp
OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ข
- ข
- ข
- ข

```cpp
Sec 3.7 Affine Transformations (all subsections)
Sec 3.8 Translation, Rotation, and Scaling
Sec 3.9 Transformations in Homogeneous Coordinates
Sec 3.10 Concatenation of Transformations
```

โFundamentals of Computer Graphics , Steve Marschner and Peter Shirley, 4th

```cpp
Editionโ
```

- ข Chapter#06, Transformation Matrices
โComputer Graphics Programming in OpenGL with C++, by V. Scott

```cpp
Gordon and John Clevengerโ, 2nd Edition
```

- ข Sec 4.6.1 Instancing


---

## Lecture 010: Input Interaction and Callbacks(1)


```cpp
CITS3003 Graphics & Animation
Lecture 10:
Input, Interaction &
Callbacks
How do we interact with a
Graphics application?
```

โ Start presenting to display the poll results on this slide.

```cpp
Content
```

- ข Basic input devices
โ Physical Devices
โ Logical Devices
โ Input Modes
- ข Event-driven input
- ข Introduction to callbacks

```cpp
Sketchpad
```

- ข Ivan Sutherland (MIT 1963) established the basic

```cpp
interactive paradigm that characterizes interactive
computer graphics:
```

โ User sees an object on the display
โ User points to (picks) the object with an input device (light

```cpp
pen, mouse, trackball)
```

โ Object changes (moves, rotates, morphs)
โ Repeat

```cpp
Ivan
Sutherlandโs
sketchpad
demo: link
https://bimaplus.org/news/the-very-beginning-of-the-digital-representation-ivan-sutherland-sketchpad/
A Graphics System
There are six major elements in a graphics system
```

โ Input devices
โ Central Processing Unit
โ Graphics Processing Unit
โ Memory
โ Frame Buffer
โ Output Devices

```cpp
A Graphics System
Input Devices
```

- ข Input devices can be viewed as:
โ Physical Devices
โ Logical Devices

```cpp
what it is
Vs. what it does
Input Devices
Physical devices:
Two primary types of physical devices:
o Pointing devices: Allow user to indicate a position on the
screen, e.g., mouse.
o Incorporates one or more buttons
o Keyboard devices: Return character codes (ASCII code),
e.g., keyboard.
image source
Pointing Devices
Relative positioning:
```

- ข

```cpp
Devices such as the mouse, trackball, and joystick return
incremental inputs (or velocities) to the operating system
o
Must integrate these inputs to obtain the position of the curser on
the screen
```

- ข

```cpp
Roll of trackball
Absolute positioning:
```

- ข

```cpp
Devices such as the data tablet return a position directly to
the operating system
Input Devices
```

- ข Input devices can also be viewed as

```cpp
o Logical devices: characterized by how they influence
the application program, e.g., what is returned to the
program via the API
```

- ข An ๐ฅ๐ฅ, ๐ฆ๐ฆ position on the screen?
- ข An object identifier for a menu item chosen?

```cpp
Both are performed by the same physical device (the
mouse, in this case) but what is returned to the program is
different.
Logical Input Devices
```

- ข Consider the C and C++ code

```cpp
o C++: cin >> x; \\ data in
o C: scanf(โ%dโ, &x); \\data out
```

- ข What is the input physical device?

```cpp
o Canโt tell from the code
o Could be keyboard, file, output from another
program
o A string is returned to the program regardless of
the physical device
Logical Input Devices (cont.)
```

- ข

```cpp
Graphics APIs define different types of logical devices based on the
kind of data (number, string, or position) the device provides :
```

โ Locator: a device provides a position in world coordinates to the

```cpp
user program.
```

- ข Usually implemented via pointing device e.g., mouse
โ Choice: a device that allows the user to select one of a discrete

```cpp
number of options, e.g., a menu item
```

- ข OpenGL can use widgets such as menus, and scroll bars
โ String: a device that provides ASCII strings to the user program,

```cpp
e.g., via key presses
```

- ข String might be provided by a keyboard, or a file, or by

```cpp
pointing devices.
Logical Input Devices (cont.)
```

โ Stroke: a device that returns an array of locations.
- ข pushing down a mouse button, starts the transfer of data into the

```cpp
specified array and then releasing of the button, ends the transfer
```

โ Valuator: a device that returns analog input to the user

```cpp
program, e.g., a widget such as a slidebar, that allows the
user to input numerical data, such as a value or a range.
```

โ Pick: a device that returns the identifier of an object on the

```cpp
display to the user program. Pick devices are used for
selecting individual objects or elements within a scene.
```

- ข GLUT provide functions to handle all these

```cpp
Input Modes
The manner by which physical and logical devices provide an input to
the application program, can be described in terms of two entities:
```

- ข
- ข
- ข

```cpp
Input devices produce a trigger which can be used to send a signal
to the operating system
o
o
```

- ข

```cpp
Measure โ value or a set of values returned to the program
Trigger โ manner in which a user can signal to the computer
that input is available and should be processed.
Button on mouse
Pressing or releasing a key
When triggered, input devices return information (their measure)
to the system
o
o
Locator returns position information
Keyboard returns ASCII code (string)
Input Modes
```

- ข We can obtain the measure of a device in three

```cpp
distinct modes.
```

โ Request mode, sample mode and event mode.
- ข Each mode is defined by the relationship

```cpp
between the measure process and the trigger.
```

- ข Sample, request, and event are different modes

```cpp
of receiving inputs in a computer system.
Request Mode
```

- ข For request mode input, the measure is read by the

```cpp
program only when user triggers the device, when
requested.
```

- ข This mode is standard in non-graphical applications such as

```cpp
typical C programs
```

- ข A typical example is keyboard input:

```cpp
o The application program request a keyboard input from the user
o The user can type, erase (backspace), correct. The application
program hangs there until the enter (return) key (the trigger) is
depressed
Sample Mode
```

- ข It is an immediate mode (samples the input

```cpp
when the function call is made)
```

- ข Expects the measure to be present already at

```cpp
the sampling time (call time)
Request and Sample Mode
Request and sample modes are:
```

- ข

```cpp
useful for situations where the program guides the user
but are not useful in applications where the user controls
the flow of the program.
For sample and request mode, user must identify which
device will provide the input
Event Mode
```

- ข Each time a device is triggered, an event is

```cpp
generated.
```

- ข Device measure is placed on an event queue

```cpp
Event Mode (cont.)
triggered
Event 3
Event 2
Event n
Dev n
Dev
Dev
```

1 Dev

```cpp
Event
Measure+[n]
Event queue
Multiple devices
Program
Multiple ways in
which a program can
use the events
What type of
event?
Associate a callback function with a specific type of event.
The OS queries the event queue regularly, and execute the callbacks corresponding to the events in
the queue
Event Categories
```

- ข Window event: resize, expose, iconify
- ข Mouse event: click one or more buttons
- ข Motion event: this refers to the mouse move event
(when the cursor is inside the window of the application

```cpp
program)
```

- ข Keyboard: press or release a key
- ข Idle: non-event

```cpp
o Define what should be done if no other event is in the event
queue
Callbacks
```

- ข We can define a callback function for each

```cpp
type of event that the graphics system
recognizes
```

- ข This user-supplied function is executed when

```cpp
the event occurs
```

- ข

```cpp
For e.g., when a mouse button is pressed or released, the
callback function registered with glutMouseFunc() is
invoked
```

- ข glutMouseFunc(mymouse)

```cpp
mouse callback function
GLUT callbacks
```

- ข

```cpp
GLUT recognizes a subset of the events recognized by any
particular window system (Windows, X, Macintosh)
```

- ข

```cpp
Examples of the GLUT functions that set the callbacks function
for various events
```

โ glutDisplayFunc // for specifying the display callback function
โ glutMouseFunc // for specifying the mouse callback function
โ glutReshapeFunc // for specifying the window resize callback function
โ glutKeyboardFunc // for specifying the keyboard input callback function
โ glutIdleFunc // for specifying the idle callback function (what the program should

```cpp
do when no events take place)
```

โ glutMotionFunc // for specifying the mouse motion callback function (what to do

```cpp
when the user moves the mouse over the GUI while pressing down one or more mouse
buttons)
glutMouseFunc
```

% usage

```cpp
void glutMouseFunc(void (*func)(int button, int state, int x, int y));
Example:
glutMouseFunc(myMouseFun);
```

% the function definition

```cpp
void myMouseFun(int button, int state, int x, int y)
{
```

% this is where you write code for what you want to do
% when a mouse โeventโ happens

```cpp
}
GLUT Event Loop
Recall that the last line in main.c for a program using
GLUT must be
glutMainLoop();
which puts the program in an infinite event loop
```

- ข In each pass through the event loop, GLUT
1. looks at the events in the queue
2. for each event in the queue, GLUT executes the appropriate

```cpp
callback function if one is registered
```

3. if no callback is registered for the event, the event is

```cpp
ignored
The display callback
```

- ข The display callback is executed whenever GLUT

```cpp
determines that the window should be refreshed, for
example
o When the window is first opened
o When the window is reshaped
o When a window is exposed
o When the user program decides it wants to change the display
```

- ข In main()

```cpp
o glutDisplayFunc(mydisplay) sets the display callback function
to โmydisplayโ.
o Every GLUT program must have a display callback
Posting redisplays
```

- ข Different events may need to invoke the display

```cpp
callback function
```

- ข We use glutPostRedisplay(); to mark that the current

```cpp
window needs to be redisplayed, which sets a flag.
```

- ข GLUT checks to see if the flag is set at the end of the

```cpp
event loop
```

- ข If the flag is set then the display callback function is

```cpp
executed
Further Reading
```

โInteractive Computer Graphics โ A Top-Down Approach with Shader-Based

```cpp
OpenGLโ by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ข
- ข
- ข

```cpp
Sec. 1.2.4-1.2.7 Input Devices, Physical Input Devices, Logical Devices, Input Modes
Sec. 2.1 The Sierpinski Gasket; immediate mode graphics vs retained mode graphics
C++ code in the Chapter02 to Chapter04 folders
On Mid-term test
```

- ข When
โ Wednesday 09.04.2025 (10:00AM โ 11:00AM)
- ข Where
โ ARTS [159]
โ CSSE [ 207] Seminar room
- ข Mode
โ Closed-book, on paper (face-to-face), invigilated
- ข Types of Questions
โ Multiple Choice Questions (MCQโs)
โ True/False
- ข Test duration
โ ~40 minutes
โ Expect to answer 1 โ 1.5 questions per minute.

```cpp
On Mid-term test
```

- ข A scantron sheet will be provided

```cpp
for you to answer the questions.
Remember to answer all questions,
including multiple-choice and
true/false questions, on the
provided answer sheet and not on
the question paper.
```

- ข Please bring a pencil and an

```cpp
eraser. Note that ink pens are not
permitted on the answer sheet.
```

- ข Ensure that you fill in both your

```cpp
student number and your name on
the answer sheet accurately.
On Mid-term test
```

- ข If you have a clash with the test schedule,

```cpp
contact UC within this week
```



---

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

