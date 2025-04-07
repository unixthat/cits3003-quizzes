# Week 3 Lectures

## Lecture 005: Vertex and Fragment Shaders (1)


```cpp
CITS3003 Graphics & Animation
Lecture 6:
Vertex and Fragment
Shaders-2
Content
```

- �� Vertex Shader
- �� Examples of Vertex Shader
- �� Fragment Shader
- �� Examples of Fragment Shader
- �� How the application program and vertex

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

- �� Geometric transformations

```cpp
o Change location, rotation, scale of objects/camera
o Apply 3D perspective transformation – make far objects smaller
```

- �� Moving vertices

```cpp
o
o
o
o
Perform morphing
Compute wave motion & deformation due to physical forces
Simulate particle effects – for fire, smoke, rain, waterfalls, …
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

- �� Lighting – vertex shader can also
– Calculate shading color using light and surface properties
– Calculate cartoon shading (for special effects)

```cpp
Vertex Shader
```

- �� The vertex shader processes one vertex – it takes in one

```cpp
vertex from the vertex stream as input and generates the
transformed vertex (optionally with attributes) to the
output vertex stream.
```

- �� Multiple shader programs can be invoked and run in

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

….
// code omitted

```cpp
color = …..; // compute the out variable color
gl_Position = vPosition; // may be a more complex expression
}
Vertex Shader – Example 1
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
Vertex Shader – Example 2
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

….
// code omitted

```cpp
color = …..;
gl_Position = vPosition;
}
void main()
{
```

….
// code omitted

```cpp
color = …..;
gl_Position = vPosition;
}
Older Version
Opengl Version 3+
What can Fragment Shader do?
```

(Application perspective)
- �� Per fragment lighting calculations
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
- �� Lighting calculation

```cpp
o Per fragment lighting
```

- �� Texture mapping, including

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

- �� Using OpenGL to render 3D images generally

```cpp
involves sending data through the OpenGL shader
pipeline. For example, to draw a simple 3D object
such as a cube, you will need to at least send the
following items:
```

– the vertices for the cube model
– some transformation matrices to control the

```cpp
appearance of the cube’s orientation in 3D space
How to send data from Application to
the Shader?
Sending data from Application to the
Shader
Two methods:
```

- �� through a buffer to a vertex attribute, or
- �� uniform variable

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

- ��

```cpp
Use a uniform variable for values that are constant for the entire
object being drawn (such as transformation matrices)
```

- ��

```cpp
data that may change relatively infrequently compared to pervertex attributes
```

- �� Use a vertex attribute for per vertex data or when you want the

```cpp
values to be interpolated by the rasterizer.
```

- ��

```cpp
rasterization of vertices
Rasterization linearly interpolates
vertex attribute values so that the
displayed pixels seamlessly connect
the modeled surfaces.
Shaders and Application Program Must
Work Together
```

- �� For each variable declared using the qualifier

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

- �� Compiles and links vertex, fragment shaders
- �� Linking involves
- �� making the connections between the input variables from one shader

```cpp
to the output variables of another.
```

- �� making the connections between the other input/output variables of

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

- �� Compiles and links vertex, fragment shaders
- �� Linking involves
- �� making the connections between the input variables from one shader

```cpp
to the output variables of another.
```

- �� making the connections between the other input/output variables of

```cpp
a shader to appropriate locations in the OpenGL environment.
Vertex shader file
in vec4 vPosition
Compiler puts all variables
declared in shader into a table
Shaders and Application Program Must
Work Together
```

– All attribute/uniform variable names are stored in a

```cpp
table.
```

– The application program can get an index for each

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

– An Example
- �� In application program (in function init()):

```cpp
The application program can refer to
the vertex attribute via this index
GLuint loc = glGetAttribLocation( program, “position" );
glEnableVertexAttribArray( loc );
glVertexAttribPointer( loc, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(0) );
```

- �� In vertex shader:

```cpp
in vec3 position;
Must be the same
Data transmission between a VBO and a vertex
attribute
The vertex shader runs once per vertex
Reference to attribute (or in) variables
```

– Another Example
- �� In application program (in function init()):

```cpp
GLuint loc, loc2;
loc = glGetAttribLocation(program, “vPosition”);
glEnableVertexAttribArray(loc);
glVertexAttribPointer(loc, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(0));
loc2 = glGetAttribLocation(program, “vColor”);
glEnableVertexAttribArray(loc2);
glVertexAttribPointer(loc2, 3, GL_FLOAT, GL_FALSE, 0,
BUFFER_OFFSET(sizeofpoints));
```

- �� In vertex shader:

```cpp
in vec3 vPosition;
in vec3 vColor;
```

// vPosition and

```cpp
vColor are in
variables in the
vertex shader
Reference to uniform Variables –
An Example
Sometimes we want to connect variables in OpenGL application to uniform variable in
shader
```

- �� In application program (init()):
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

- �� In vertex shader:

```cpp
uniform float angle;
```

- ��
- ��

```cpp
Declare a variable in
the application
program
Assign it a value
```

- ��

```cpp
find location of
shader “angle”
variable in linker
table
```

- ��

```cpp
Connect: location of
shader variable
shader “angle” to
application variable
```

“my_angle”
- ��

```cpp
Declare a uniform
variable in the shader
Reference to uniform Variables –
An Example
Sometimes we want to connect variables in OpenGL application to uniform variable in
shader
```

- �� In application program (init()):
/* my_angle set in application */

```cpp
GLfloat my_angle;
my_angle = 5.0 /* or some other value */
GLuint angleParam;
angleParam = glGetUniformLocation(myProgObj,"angle");
glUniform1f(angleParam, my_angle);
```

- �� In vertex shader:

```cpp
uniform float angle;
This line appears in the display callback function
also, as the new value of my_angle computed in the
application program for every frame needs to be
copied to the vertex shader.
Which of the following
statements are correct:
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
Further Reading
```

- �� “Interactive Computer Graphics – A Top-Down Approach with ShaderBased OpenGL” by Edward Angel and Dave Shreiner, 6th Ed, 2012
- ��
- ��

```cpp
Sec2. 2.8.2-2.8.5
The Vertex Shader …The InitShader Function
Sec 3.12.2 Uniform Variables
```

- �� David Wolff - OpenGL 4.0 Shading Language Cookbook
- �� OpenGL Programming Guide 9th Edition-Kessenich
- �� Computer Graphics programming in OpenGL with C++- Scott Gordon
- �� A good reference on OpenGL shaders:

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

- �� The rendering pipeline and the shaders
- �� GLSL
– Data types, qualifiers, built-in variables, and

```cpp
functions in shaders
```

– Swizzling & selection

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

- �� The goal of the vertex shader is to provide the

```cpp
final transformation of mesh vertices to the
rendering pipeline.
```

- �� The goal of the fragment shader is to provide

```cpp
the colour to each pixel in the frame buffer.
Mesh
A sphere with some
parts made invisible by
discarding pixels in the
fragment
shader.
GLSL Shading Language
GLSL – A Quick Review
```

- ��
- ��
- ��
- ��
- ��

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

- ��
- ��

```cpp
Scalar (non-vector) types:
```

- ��
- ��
- ��
- ��
- ��

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

- �� bvecn: a vector of booleans
- �� ivecn: a vector of signed integers //e.g., ivec2 myvar = ivec2(-1, 2);
- �� uvecn: a vector of unsigned integers
- �� vecn: a vector of single-precision floating-point numbers
- �� dvecn: a vector of double-precision floating-point numbers

```cpp
Data Types in GLSL
Matrices: All matrix types are floating-points
```

- �� matn: A matrix with n columns and n rows. Shorthand

```cpp
for matnxn
```

- �� matnxm: A matrix with n columns and m rows
- ��

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

- ��
- ��
- ��

```cpp
There are no pointers in GLSL
We can use C structs
Because matrices and vectors are basic types, they can be
passed into and output from GLSL functions, e.g.
mat3 func(mat3 a);
GLSL Qualifiers
```

- ��

```cpp
A qualifier is used in GLSL to modify the storage or behaviour of variables.
Qualifiers specify particular aspects of the variable, e.g., where they will get
their data from?
```

- ��

```cpp
GLSL has some of the same qualifiers as C/C++, e.g., const. However, more
are required due to the nature of the rendering pipeline
```

- ��

```cpp
Qualifiers that can be used in shader programs include:
```

– attribute, uniform, varying (these are storage qualifiers)
– highp, mediump, lowp (these are precision qualifiers)
– in, out, inout (these are parameter qualifiers)

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

- ��

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

- ��

```cpp
The qualifier const is used for variables that are compile-time constants or for function
parameters that are read-only.
```

–
- ��

```cpp
must be initialized when declared
These variables:
```

–

```cpp
cannot be used on the left-hand side of an assignment operation
```

–

```cpp
cannot be referenced outside the shader that defines it
Qualifier attribute
```

- ��
- ��

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
- �� Attribute variables
– specify per vertex data, e.g., object space position, the normal direction and

```cpp
the texture coordinates of a vertex.
```

– must be initialized in the application program.
– Have only float, vec, and mat data types, cannot be declared as structs

```cpp
The Qualifier uniform
```

- �� The qualifier uniform is used to declare variables that are shared

```cpp
between a shader and the application program.
Uniform
display
application
program
```

(Vertex shader)
(Fragment shader)
- �� Uniform variables:
– can appear in the vertex shader and the fragment shader
– must have a global scope.
– do not change from one shader invocation to the next within a particular

```cpp
rendering call thus their value is uniform among all invocations
```

- �� If a uniform variable is used in both shaders, its declaration must

```cpp
be identical in both.
The Qualifier uniform (cont.)
```

- �� uniform variables remain constant across a graphics primitive.

```cpp
They can be used to describe global properties that affect the
scene to be rendered, e.g., projection matrix, light source position,
etc. or object properties (e.g., colour, materials). e.g.,
uniform mat4 projection;
uniform float temperature;
```

- �� Variables declared as uniform are not changeable within the vertex

```cpp
shader or the fragment shader.
```

- �� However, their values can change in the application program. For

```cpp
each frame to be rendered, their new values are passed to the
shader(s).
The Qualifier varying
```

- �� The qualifier varying is used to declare variables that are shared

```cpp
between the vertex shader and the fragment shader.
Varying
display
application
program
```

(Vertex shader)
(Fragment shader)
- �� varying variables
– are used to communicate results from one shader to another
– must be declared identically in both shaders.

```cpp
The Qualifier varying (cont.)
```

- �� The varying qualifier can only be used with floating point scalar,

```cpp
floating point vectors and (floating point) matrices as well as arrays
containing these types.
```

- �� Example: the vertex shader can compute the color of the incoming

```cpp
vertex and then pass the value forward for interpolation. In both
shaders:
varying vec4 colour;
Precision Qualifiers
The Qualifiers highp, mediump,
lowp, and precision
```

- �� Supported for compatibility with OpenGL ES
– Use is not recommended unless OpenGL ES compatibility is

```cpp
required
```

- �� The highp, mediump, and lowp qualifiers are used to specify the

```cpp
highest, medium, and lowest precision available for a variable. All
these qualifiers can appear in the vertex and fragment shaders.
```

- �� All variables of a certain type can be declared to have a precision

```cpp
by using the precision qualifier
precision precision-qualifier​ type​;
e.g., float
The Qualifiers highp, mediump,
lowp, and precision
```

- �� The default precision is highp.
- �� Using a lower precision might have a positive effect on performance
(frame rates) and power efficiency but might also cause a loss in

```cpp
rendering quality. The appropriate trade-off can only be determined
by testing different precision configurations.
Parameter Qualifiers
The Qualifiers in, out & inout
Function Parameter Qualifiers
```

- �� GLSL functions are declared and defined similarly to C/C++ functions. A

```cpp
function declaration in GLSL looks like this
void myFunct(in float inputVal, out int outputVal, inout float inAndOutVal)
Parameter qualifiers
```

- ��

```cpp
The values passed to functions are copied into parameters when the
function is called, and outputs are copied out when the function
returns (“value-return” calling convention)
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

 A parameter declared as in is intended to have a value when it is passed into a

```cpp
function but is not to be changed in the function.
```

- ��

```cpp
Such parameters are intended to communicate only from the calling function to
the called function.
```

 The out parameter is not assumed to have an initial value the first time it appears

```cpp
in the function. But it is assumed that a value will be assigned before the function
returns.
```

- ��

```cpp
Such parameters are intended to communicate only from the called function to
the calling function.
```

 The inout parameter is intended to have a value when it is passed into a function

```cpp
and to have a value, possibly different, when the function returns.
```

- ��

```cpp
Such parameters are intended to provide two-way communication between the
called function and the calling function.
The Qualifiers in, out & inout
```

- �� The in and out qualifiers supersede the attribute and varying

```cpp
qualifiers in GLSL version 130+ onward:
```

– attribute is replaced by in in the vertex shader
– varying in the vertex shader is replaced by out
– varying in the fragment shader is replace by in

```cpp
An out variable is to get its value in the shader where it is defined and be passed from that
shader to the next shader further along in the shader pipeline. It is a write-only variable in
the shader where it is defined.
An in variable is to be received from a previous shader/application in the pipeline and used
in the shader where it is defined. It is a read-only variable in the shader where it is defined.
Passing Values
```

– Variable declared out in vertex shader can be declared as in in

```cpp
fragment shader and used
Slide Credits: Prof Emmanuel Agu, CS4731, lecture 6
Choose the correct option(s)
```

ⓘ Start presenting to display the poll results on this slide.

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

- ��

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

- �� The input vertex’s location is given by the four-dimensional

```cpp
vector vPosition whose specification includes the keyword in
to signify that its value is input to the shader when the shader
is initiated.
```

- �� gl_Position is a special state variable, which is the position that

```cpp
will be passed to the rasterizer and must be output by every
vertex shader. Because gl_Position is known to OpenGL, we
need not declare it in the shader.
Built-in Variables in Shaders
```

(Vertex shader)
- ��
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

- �� Each invocation of the vertex shader outputs a vertex.
- �� Each fragment invokes an execution of the fragment shader.
- �� Each execution of the fragment shader must output a color for the fragment.

```cpp
Functions and Operators
```

- ��
- ��

```cpp
Standard C functions
o Trigonometric: cos, sin, tan, etc.,
o Arithmetic: min, max, log, abs, etc.,
o Normalize, reflect, length
Examples
```

- �� float length(TYPE x)
- �� float distance(TYPE x1, x2)
- �� TYPE normalize(TYPE x)
- �� Other examples are dot, cross, reflect, refract

```cpp
Reflection/refraction direction for an incident vector
```

- �� If you are performing an operation in GLSL that is somewhat

```cpp
graphics specific, check the documentation if there is an inbuilt
function for it
Functions and Operators
```

- ��

```cpp
Operators
```

- �� Binary operators *, /, +, -, =, *=, /=, +=, -= used between

```cpp
vectors of the same type, and work component-wise
vec3 a = vec3(1.0, 2.0, 3.0);
vec3 b = vec3(0.1, 0.2, 0.3);
vec3 c = a + b; // = vec3(1.1, 2.2, 3.3)
vec3 d = a * b; // = vec3(0.1, 0.4, 0.9)
Products act component-wise when
```

- �� One operand is a scalar and one is

```cpp
either a vector or matrix, or
```

- �� Both are vectors.

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

- ��
- ��

```cpp
For component matrix multiplication matrixCompMult is
provided
The * operator can also be used for matrix-vector product
vec2 v = vec2(10., 20.);
mat2 m = mat2(1., 2., 3., 4.);
vec2 w = m * v; // = vec2(1. * 10. + 3. * 20., 2. * 10. + 4. * 20.)
Selection and Swizzling
```

- �� Can refer to array elements by their indices using [] or by

```cpp
selection operator (.) with
```

– x, y, z, w % 3D coordinates and perspective scale
– r, g, b, a % Color values and opacity
– s, t, p, q % texture coordinates (later)
– vec4 m;
– m[2], m.b, m.z, and m.p are the same

```cpp
name sets
GLSL supports some
standard name sets for
vector components
Selection and Swizzling
```

- �� Can refer to array elements by their indices using [] or by

```cpp
selection operator (.) with
```

– x, y, z, w % 3D coordinates and perspective scale
– r, g, b, a % Color values and opacity
– s, t, p, q % texture coordinates (later)
– vec4 m;
– m[2], m.b, m.z, and m.p are the same

```cpp
name sets
GLSL supports some
standard name sets for
vector components
```

- �� Swizzling operator lets us manipulate components easily,

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

- �� Swizzling does not work with matrices. You can instead

```cpp
access a matrix's fields with array syntax:
mat3 theMatrix;
theMatrix[1] = vec3(3.0, 3.0, 3.0); // Sets the 2nd column
theMatrix[2][0] = 16.0; // Sets the 1st entry of 3rd column
```

- �� However, the result of the first array accessor is a vector, so

```cpp
you can swizzle that:
mat3 theMatrix;
theMatrix[1].yzx = vec3(3.0, 1.0, 2.0);
References
```

“Interactive Computer Graphics – A Top-Down Approach with

```cpp
Shader-Based OpenGL” by Edward Angel and Dave Shreiner, 6th Ed,
```

- �� Sec2. 2.8.2-2.8.5 The Vertex Shader …The InitShader Function
- �� Sec 3.12.2 Uniform Variables

```cpp
Graphics Shaders (second edition) Bailey and Cunningham
```

– GLSL Shader Language
– Vertex Shader
– Fragment Shader


---

