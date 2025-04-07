# Week 1 Lectures

## Lecture 001: Intro Image Formation


```cpp
CITS3003 Graphics & Animation
Introduction
and
Admin Matters
Content
```

- €¢ Introduction to the Unit
- €¢ Introduction to Computer Graphics
- €¢ Introduction to OpenGL

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

- €¢ Monday: 10:00am - 12:00pm
- €¢ Wednesday: 12:00pm - 2:00pm
- €¢ Thursday: 8:00am - 10:00am

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

- €¢ Lectures and lab material will be on LMS
- €¢ Check regularly for announcements and updates
- €¢ Lectures uploaded every teaching week
- €¢ Check the useful resources tab
- €¢ Help forum is available on LMS. All queries

```cpp
related to labs/project should be posted there.
Students are encouraged to help each other.
However, sharing solutions/partial solutions of
assessments is not allowed.
```

- €¢ Email (cits3003-csse@uwa.edu.au) should only be

```cpp
used for issues which cannot be
discussed on the help forum
Other Admin Matters
Prerequisites
```

- €¢
- €¢
- €¢
- €¢

```cpp
CITS1401 Computational Thinking with Python
or CITS2002 Systems Programming
or CITS2401 Computer Analysis and Visualisation
or CITX1401 Computational Thinking with Python
Project and Labs
```

- €¢

```cpp
Labs will be running every week, starting from week#2.
```

- €¢

```cpp
Lab sheets will be provided (along with the solutions) on
LMS
```

- €¢

```cpp
Lab#1-5 are not assessed but it is important to complete them
to be able to complete the project.
```

- €¢

```cpp
Lab#6 is assessed and will be released in week#07
```

- €¢

```cpp
Project will be released in week#07
Assessments
```

- €¢ The assessments will consist of:
- €¢ 15%: Mid-semester test
- €¢ 20%: Project
- €¢ 5%: Lab#06
- €¢ 60%: Final exam
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

â€“ Attend lectures regularly
â€“ Attempt all the lab excercises in a timely manner
â€“ Consult supplementary material for deeper understanding
â€“ Start working on the project as soon as it is released
â€“ Seek help early

```cpp
Commendations:
```

â€“ Highest total score
â€“ Class participation
â€“ Creativity
â€“ Help forum

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

- €¢ hardware tools
- €¢ Software tools

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

- €¢ Computer Graphics has many aspects:
â€“ Computer Scientists create graphics programs and tools (e.g., Blender,

```cpp
Maya, photoshop)
```

- €¢ Includes C/C+, shader programming, maths, linear algebra, etc.,
â€“ Artists use Computer Graphics packages to create photorealistic/creative

```cpp
pictures â€“ (does not involve maths or programming)
About CITS3003
CITS3003 teaches fundamentals of computer-generated threedimensional graphics and animation.
```

â€“ It introduces OpenGL (Graphics library) for writing interactive

```cpp
graphics programs.
CITS3003 is:
```

â€“ not about using software packages like Photoshop, Maya,

```cpp
GIMP
```

â€“ not a comprehensive course on OpenGL, as only limited parts

```cpp
of the library are covered
```

â€“ not a game development unit

```cpp
A Graphics System
Input devices
Output device
Image formed in frame buffer
Image courtesy: Angel and Shreiner: Interactive Computer Graphics 6E Â© AddisonWesley 2012
Rendering
In general, one of the basic tasks of 3D graphics is producing 2D
images of the three-dimensional world.
Fundamentally, rendering is a process that takes as its input a set of
objects and produces as its output an array of pixels.
```

- €¢ the whole process of producing an image is referred to as

```cpp
rendering the scene.
Raster Image
A raster image is simply a 2D array that stores the pixel value for
each pixelâ€”usually a color stored as three numbers, for red,
green, and blue.
Angel and Shreiner: Interactive
Computer Graphics 6E Â© AddisonWesley 2012
Color Images
```

- €¢ Color Image

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

- €¢ Luminance Image

```cpp
o Monochromatic
o Values are gray levels
o Analogous to working with black and white film
or television
Introduction to Image Formation
Image credits
Image Formation
```

- €¢ In computer graphics, we form/create images

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

- €¢ A set of locations (vertices)

```cpp
in space is sufficient to
define or approximate most
objects
Viewer
```

- €¢ To form an image, we must have someone or

```cpp
something that is viewing our objects, be it a
human, a camera, or a digitizer. It is the viewer
that forms the image of our objects.
Light and Images
```

- €¢
- €¢

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

- €¢
- €¢
- €¢

```cpp
If there were no light sources, the objects would appear dark
Light is the part of the electromagnetic spectrum that causes a
reaction in our visual system
Generally, these are wavelengths in the range of about 350750 nm (nanometers)
```

- €¢

```cpp
Long wavelengths appear as reds and short wavelengths as blues
Imaging System
Pinhole Camera
```

- €¢ Use trigonometry to find projection of point at ğ‘¥ğ‘¥, ğ‘¦ğ‘¦, ğ‘§ğ‘§
ğ‘¥ğ‘¥ğ‘ğ‘ â„ğ‘§ğ‘§ğ‘ğ‘ = ğ‘¥ğ‘¥ â„ğ‘§ğ‘§
ğ‘¦ğ‘¦ğ‘ğ‘ â„ğ‘§ğ‘§ğ‘ğ‘ =ğ‘¦ğ‘¦â„ğ‘§ğ‘§
ğ‘§ğ‘§ğ‘ğ‘ = âˆ’ğ‘‘ğ‘‘
- €¢ These are equations of simple perspective
- €¢ The point (ğ‘¥ğ‘¥ğ‘ğ‘ , ğ‘¦ğ‘¦ğ‘ğ‘ , âˆ’ğ‘‘ğ‘‘) is called the projection of the point (x, y, z).

```cpp
Pinhole Camera (cont..)
```

- €¢ The field, or angle of view of our camera is the

```cpp
angle made by the largest object that our camera
can image on its film plane.
```

- €¢ The ideal pinhole camera has an infinite Depth

```cpp
Of Field (DOF)
```

â€“ DOF is the distance between the nearest and

```cpp
the farthest objects that are in acceptably
sharp focus in an image
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Pinhole Camera (cont..)
```

- €¢ The field, or angle of view of our camera is the angle

```cpp
made by the largest object that our camera can image
on its film plane.
```

- €¢ The pinhole camera has two disadvantages:
â€“ It admits only a single ray from a point sourceâ€”

```cpp
almost no light enters the camera.
```

- €¢ Long exposure time
â€“ The camera cannot be adjusted to have a different

```cpp
angle of view
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Human Visual System
```

- €¢ The human visual system has two types of sensors
- €¢ Rods (up to 125M)
- €¢ Monochromatic, night vision
- €¢ Cones (6M+)
- €¢ Color sensitive
- €¢ Three types of cones
- €¢ Only three values (the tristimulus values) are sent to the

```cpp
brain
```

- €¢ That is, we need only match these three values
ïƒ Need only three primary colors- trichromatic color vision

```cpp
Color
Additive color
```

- €¢ Form a color by adding amounts of three

```cpp
primaries
```

- €¢ CRTs, projection systems, positive film
- €¢ Primaries are Red (R), Green (G), Blue (B)

```cpp
Subtractive color
```

- €¢ Form a color by filtering white light with cyan
(C), Magenta (M), and Yellow (Y) filters
- €¢ Light-material interactions
- €¢ Printing
- €¢ Negative film

```cpp
https://en.wikipedia.org/wiki/Subtractive_color
Synthetic Camera Model
image is right way up
projector
```

- €¢ OpenGL uses the synthetic

```cpp
pin hole camera model
```

- €¢ Since the image of the

```cpp
object is flipped relative to
the object on the back of the
camera, we draw another
plane in front of the lens.
p (a point)
```

- €¢ With this synthetic camera

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

- €¢ Leads to simple software API
- €¢
- €¢

```cpp
Can specify objects, lights, camera, attributes separately
Let implementation determine image by interaction
```

- €¢ Leads to fast hardware implementation
- €¢ Two-dimensional graphics becomes a special case of

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

â€“ most common library for platforming independent graphics

```cpp
programming is called OpenGL (Open Graphics Library).
```

â€“ Using OpenGL with C++ requires configuring several

```cpp
libraries
We will use the following libraries:
```

â€“ OpenGL / GLSL
â€“ GLUT (window management)
â€“ extension library

```cpp
Some more libraries will be used in the lab#06 and the project
```

â€“ GLFW
â€“ glm
â€“ ImGui

```cpp
Introduction to OpenGL
What is OpenGL
OpenGL is a platform-independent Application
Programmersâ€™ Interface (API) that
```

- €¢
- €¢
- €¢
- €¢
- €¢

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

- €¢ You donâ€™t need to memorize the functionalities of different

```cpp
OpenGL libraries
```

- €¢ Instead, you decide on your objects, lights and camera, then

```cpp
work out which OpenGL functions are required.
```

- €¢ Include libraries that contain your functions.
- €¢ For the practical issues you will have the OpenGL

```cpp
documentation to help.
https://docs.gl/
Further Reading
```

â€œInteractive Computer Graphics â€“ A Top-Down Approach with

```cpp
Shader-Based OpenGLâ€ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- €¢
- €¢
- €¢
- €¢
- €¢

```cpp
Sec. 1.2 A graphics system
Sec. 1.3 Images: Physical and Synthetic
Sec. 1.4 Imaging Systems
Sec. 1.5 The Synthetic Camera Model
Sec. 1.6 The Programmerâ€™s Interface
Acknowledgement
```

- €¢ It is important to acknowledge that this unit utilizes the

```cpp
resources developed and supplied by Edward Angel, Dave
Shreiner, Gordon and V. Scott Gordon and John Clevenger,
authors of the following textbooks:
```

- €¢ â€œInteractive Computer Graphics â€“ A Top-Down Approach with

```cpp
Shader-Based OpenGLâ€ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- €¢ Computer Graphics Programming in OpenGL with C++, 2nd Ed,

```cpp
by V. Scott Gordon and John Clevenger
Choose the correct option(s)
```

â“˜ Start presenting to display the poll results on this slide.


---

## Lecture 001: Intro Image Formation


```cpp
CITS3003 Graphics & Animation
Introduction
and
Admin Matters
Content
```

- €¢ Introduction to the Unit
- €¢ Introduction to Computer Graphics
- €¢ Introduction to OpenGL

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

- €¢ Monday: 10:00am - 12:00pm
- €¢ Wednesday: 12:00pm - 2:00pm
- €¢ Thursday: 8:00am - 10:00am

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

- €¢ Lectures and lab material will be on LMS
- €¢ Check regularly for announcements and updates
- €¢ Lectures uploaded every teaching week
- €¢ Check the useful resources tab
- €¢ Help forum is available on LMS. All queries

```cpp
related to labs/project should be posted there.
Students are encouraged to help each other.
However, sharing solutions/partial solutions of
assessments is not allowed.
```

- €¢ Email (cits3003-csse@uwa.edu.au) should only be

```cpp
used for issues which cannot be
discussed on the help forum
Other Admin Matters
Prerequisites
```

- €¢
- €¢
- €¢
- €¢

```cpp
CITS1401 Computational Thinking with Python
or CITS2002 Systems Programming
or CITS2401 Computer Analysis and Visualisation
or CITX1401 Computational Thinking with Python
Project and Labs
```

- €¢

```cpp
Labs will be running every week, starting from week#2.
```

- €¢

```cpp
Lab sheets will be provided (along with the solutions) on
LMS
```

- €¢

```cpp
Lab#1-5 are not assessed but it is important to complete them
to be able to complete the project.
```

- €¢

```cpp
Lab#6 is assessed and will be released in week#07
```

- €¢

```cpp
Project will be released in week#07
Assessments
```

- €¢ The assessments will consist of:
- €¢ 15%: Mid-semester test
- €¢ 20%: Project
- €¢ 5%: Lab#06
- €¢ 60%: Final exam
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

â€“ Attend lectures regularly
â€“ Attempt all the lab excercises in a timely manner
â€“ Consult supplementary material for deeper understanding
â€“ Start working on the project as soon as it is released
â€“ Seek help early

```cpp
Commendations:
```

â€“ Highest total score
â€“ Class participation
â€“ Creativity
â€“ Help forum

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

- €¢ hardware tools
- €¢ Software tools

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

- €¢ Computer Graphics has many aspects:
â€“ Computer Scientists create graphics programs and tools (e.g., Blender,

```cpp
Maya, photoshop)
```

- €¢ Includes C/C+, shader programming, maths, linear algebra, etc.,
â€“ Artists use Computer Graphics packages to create photorealistic/creative

```cpp
pictures â€“ (does not involve maths or programming)
About CITS3003
CITS3003 teaches fundamentals of computer-generated threedimensional graphics and animation.
```

â€“ It introduces OpenGL (Graphics library) for writing interactive

```cpp
graphics programs.
CITS3003 is:
```

â€“ not about using software packages like Photoshop, Maya,

```cpp
GIMP
```

â€“ not a comprehensive course on OpenGL, as only limited parts

```cpp
of the library are covered
```

â€“ not a game development unit

```cpp
A Graphics System
Input devices
Output device
Image formed in frame buffer
Image courtesy: Angel and Shreiner: Interactive Computer Graphics 6E Â© AddisonWesley 2012
Rendering
In general, one of the basic tasks of 3D graphics is producing 2D
images of the three-dimensional world.
Fundamentally, rendering is a process that takes as its input a set of
objects and produces as its output an array of pixels.
```

- €¢ the whole process of producing an image is referred to as

```cpp
rendering the scene.
Raster Image
A raster image is simply a 2D array that stores the pixel value for
each pixelâ€”usually a color stored as three numbers, for red,
green, and blue.
Angel and Shreiner: Interactive
Computer Graphics 6E Â© AddisonWesley 2012
Color Images
```

- €¢ Color Image

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

- €¢ Luminance Image

```cpp
o Monochromatic
o Values are gray levels
o Analogous to working with black and white film
or television
Introduction to Image Formation
Image credits
Image Formation
```

- €¢ In computer graphics, we form/create images

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

- €¢ A set of locations (vertices)

```cpp
in space is sufficient to
define or approximate most
objects
Viewer
```

- €¢ To form an image, we must have someone or

```cpp
something that is viewing our objects, be it a
human, a camera, or a digitizer. It is the viewer
that forms the image of our objects.
Light and Images
```

- €¢
- €¢

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

- €¢
- €¢
- €¢

```cpp
If there were no light sources, the objects would appear dark
Light is the part of the electromagnetic spectrum that causes a
reaction in our visual system
Generally, these are wavelengths in the range of about 350750 nm (nanometers)
```

- €¢

```cpp
Long wavelengths appear as reds and short wavelengths as blues
Imaging System
Pinhole Camera
```

- €¢ Use trigonometry to find projection of point at ğ‘¥ğ‘¥, ğ‘¦ğ‘¦, ğ‘§ğ‘§
ğ‘¥ğ‘¥ğ‘ğ‘ â„ğ‘§ğ‘§ğ‘ğ‘ = ğ‘¥ğ‘¥ â„ğ‘§ğ‘§
ğ‘¦ğ‘¦ğ‘ğ‘ â„ğ‘§ğ‘§ğ‘ğ‘ =ğ‘¦ğ‘¦â„ğ‘§ğ‘§
ğ‘§ğ‘§ğ‘ğ‘ = âˆ’ğ‘‘ğ‘‘
- €¢ These are equations of simple perspective
- €¢ The point (ğ‘¥ğ‘¥ğ‘ğ‘ , ğ‘¦ğ‘¦ğ‘ğ‘ , âˆ’ğ‘‘ğ‘‘) is called the projection of the point (x, y, z).

```cpp
Pinhole Camera (cont..)
```

- €¢ The field, or angle of view of our camera is the

```cpp
angle made by the largest object that our camera
can image on its film plane.
```

- €¢ The ideal pinhole camera has an infinite Depth

```cpp
Of Field (DOF)
```

â€“ DOF is the distance between the nearest and

```cpp
the farthest objects that are in acceptably
sharp focus in an image
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Pinhole Camera (cont..)
```

- €¢ The field, or angle of view of our camera is the angle

```cpp
made by the largest object that our camera can image
on its film plane.
```

- €¢ The pinhole camera has two disadvantages:
â€“ It admits only a single ray from a point sourceâ€”

```cpp
almost no light enters the camera.
```

- €¢ Long exposure time
â€“ The camera cannot be adjusted to have a different

```cpp
angle of view
Learn more: https://www.scratchapixel.com/lessons/3d-basic-rendering/3d-viewing-pinhole-camera/how-pinhole-camera-works-part-1.html
Human Visual System
```

- €¢ The human visual system has two types of sensors
- €¢ Rods (up to 125M)
- €¢ Monochromatic, night vision
- €¢ Cones (6M+)
- €¢ Color sensitive
- €¢ Three types of cones
- €¢ Only three values (the tristimulus values) are sent to the

```cpp
brain
```

- €¢ That is, we need only match these three values
ïƒ Need only three primary colors- trichromatic color vision

```cpp
Color
Additive color
```

- €¢ Form a color by adding amounts of three

```cpp
primaries
```

- €¢ CRTs, projection systems, positive film
- €¢ Primaries are Red (R), Green (G), Blue (B)

```cpp
Subtractive color
```

- €¢ Form a color by filtering white light with cyan
(C), Magenta (M), and Yellow (Y) filters
- €¢ Light-material interactions
- €¢ Printing
- €¢ Negative film

```cpp
https://en.wikipedia.org/wiki/Subtractive_color
Synthetic Camera Model
image is right way up
projector
```

- €¢ OpenGL uses the synthetic

```cpp
pin hole camera model
```

- €¢ Since the image of the

```cpp
object is flipped relative to
the object on the back of the
camera, we draw another
plane in front of the lens.
p (a point)
```

- €¢ With this synthetic camera

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

- €¢ Leads to simple software API
- €¢
- €¢

```cpp
Can specify objects, lights, camera, attributes separately
Let implementation determine image by interaction
```

- €¢ Leads to fast hardware implementation
- €¢ Two-dimensional graphics becomes a special case of

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

â€“ most common library for platforming independent graphics

```cpp
programming is called OpenGL (Open Graphics Library).
```

â€“ Using OpenGL with C++ requires configuring several

```cpp
libraries
We will use the following libraries:
```

â€“ OpenGL / GLSL
â€“ GLUT (window management)
â€“ extension library

```cpp
Some more libraries will be used in the lab#06 and the project
```

â€“ GLFW
â€“ glm
â€“ ImGui

```cpp
Introduction to OpenGL
What is OpenGL
OpenGL is a platform-independent Application
Programmersâ€™ Interface (API) that
```

- €¢
- €¢
- €¢
- €¢
- €¢

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

- €¢ You donâ€™t need to memorize the functionalities of different

```cpp
OpenGL libraries
```

- €¢ Instead, you decide on your objects, lights and camera, then

```cpp
work out which OpenGL functions are required.
```

- €¢ Include libraries that contain your functions.
- €¢ For the practical issues you will have the OpenGL

```cpp
documentation to help.
https://docs.gl/
Further Reading
```

â€œInteractive Computer Graphics â€“ A Top-Down Approach with

```cpp
Shader-Based OpenGLâ€ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- €¢
- €¢
- €¢
- €¢
- €¢

```cpp
Sec. 1.2 A graphics system
Sec. 1.3 Images: Physical and Synthetic
Sec. 1.4 Imaging Systems
Sec. 1.5 The Synthetic Camera Model
Sec. 1.6 The Programmerâ€™s Interface
Acknowledgement
```

- €¢ It is important to acknowledge that this unit utilizes the

```cpp
resources developed and supplied by Edward Angel, Dave
Shreiner, Gordon and V. Scott Gordon and John Clevenger,
authors of the following textbooks:
```

- €¢ â€œInteractive Computer Graphics â€“ A Top-Down Approach with

```cpp
Shader-Based OpenGLâ€ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- €¢ Computer Graphics Programming in OpenGL with C++, 2nd Ed,

```cpp
by V. Scott Gordon and John Clevenger
Choose the correct option(s)
```

â“˜ Start presenting to display the poll results on this slide.


---

## Lecture 002: 002-Programming with OpenGL.pdf


```cpp
CITS3003 Graphics & Animation
Lecture 2:
Programming with
OpenGL
Content
```

- €¢
- €¢
- €¢
- €¢
- €¢

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

- €¢ If we are to follow the synthetic-camera model, we need

```cpp
functions in the API to specify the following:
```

â€“ Objects
â€“ A viewer
â€“ Light sources
â€“ Material properties

```cpp
What is OpenGL
```

- €¢ Its an API (specifications to be precise)
â€“ Allows accessing and dealing with the graphics card
â€“ Contains over 250 functions
â€“ the latest OpenGL specification 4.6 was released in 2017
- €¢ Where do I download OpenGL?
â€“ Its already there in your graphics driver
- €¢ Is it open source?
â€“ Irrelevant (its essentially just a specification)
- €¢ We still treat OpenGL as API

```cpp
https://www.khronos.org/opengl/
https://registry.khronos.org/OpenGL/specs/gl/glspec46.core.pdf
What is OpenGL (contâ€¦)
```

- €¢ OpenGL is one of many APIs that allow access to the

```cpp
graphics card
```

â€“ E.g., Vulkan, Direct 3D 11, Metal
- €¢ Why OpenGL
â€“ Cross-platform
â€“ Excellent entry point for Graphics learning

```cpp
For labs (1-5) Version 3.2+ are all ok!
Modern OpenGL
```

- €¢

```cpp
Legacy OpenGL (version 3.0 and below ) uses set of presets (simple but not flexible)
```

- €¢

```cpp
Modern OpenGL (version 3.2+) allows the computer
program to achieve fast graphics performance by using
GPU rather than CPU
```

- €¢

```cpp
Allows applications to control GPU through programs
known as shaders
```

- €¢

```cpp
It is the applicationâ€™s job to send data to GPU; GPU then
performs the rendering
OpenGL Applications
```

- €¢ Non exhaustive list of OpenGL applications (link)

```cpp
Extension Library- GLEW
```

- €¢ Modern versions of OpenGL, such as those found in version
4+, require identifying the extensions available on the GPU.
- €¢ It has become standard practice to use an extension library to

```cpp
abstract away the extra coding used to identify and access the
OpenGL extensions on a GPU.
```

- €¢ GLEW is an OpenGL Extension Wrangler Library
- €¢ GLEW makes it easy to access OpenGL extensions available

```cpp
on a particular system
```

- €¢ Application only needs to include glew.h and run a glewInit()

```cpp
OpenGL/GLUT basics
OpenGL
```

- €¢ OpenGLâ€™s function is Rendering (or drawing)
â€“ Renderingâ€“ Convert geometric/mathematical object

```cpp
descriptions into images
```

- €¢ No functions for window management (create, resize,

```cpp
etc)
```

-portability across different platforms
- €¢ Links with window/windowing system
- €¢ GLX for X window systems
- €¢ WGL for Windows
- €¢ AGL for Macintosh

```cpp
Credits: Prof. Emmanuel Agu, cs4731, WPI
OpenGL/GLUT basics
GLUT
```

- €¢ A window system independent toolkit which:
â€“ Provides basic functions for window management
â€“ Interfaces with different windowing systems
â€“ Offers portability: code is portable between windowing systems.
- €¢
- €¢

```cpp
GLUT lacks the functionality of a
high-end toolkit for a specific platform
```

- €¢ No slide bars

```cpp
GLUT
GLUT is easy to use and learn, and it
works quite well for demos and simple
applications.
```

- €¢ Fast prototyping

```cpp
https://web.media.mit.edu/~gordonw/OpenGL/
OpenGL
ImageCredits: Prof. Emmanuel Agu, cs4731, WPI
freeGLUT
```

- €¢ GLUT was created long ago and has been

```cpp
unchanged
```

- €¢ freeglut updates GLUT

```cpp
o Added capabilities
o Context checking
Software Organization
```

- €¢

```cpp
The application programs can use GLEW, GL, GLUT functions
but not directly access to Xlib etc.
```

- €¢ The program can therefore be compiled with e.g., GLUT for

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

- €¢

```cpp
We can think of the entire graphics system as a black box
```

(finite-state machine).
- €¢

```cpp
This black box has inputs coming from the application
program.
```

- €¢
- €¢

```cpp
These inputs can change the state (mode) of the machine or can cause the machine to
produce a visible output.
The behavior of Graphics system can be determined by its â€œstateâ€, which can
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

â€¦

```cpp
OpenGL Context and State
```

- €¢
- €¢
- €¢

```cpp
OpenGL state machine consists of hundreds of settings that
affect various aspects of rendering.
The state of OpenGL is commonly referred to as the OpenGL
context.
The initial Graphics context has a number of default values for:
```

- €¢ color or other attributes
- €¢ transformations
- €¢ lighting mode, camera model, textures etc
â€¦â€¦

```cpp
The OpenGL state as a graphics context object
OpenGL Context and State
```

- €¢ OpenGL maintains a list for the current values of attributes and

```cpp
other parameters, refers to as â€œstate variablesâ€
```

â€“ When we assign a value to one or more state

```cpp
variables, we put the systems into a particular state.
```

â€“ State remains in effect until we change the value of a

```cpp
state variable.
```

â€“ Each state variable has a default value.

```cpp
The OpenGL state as a graphics context object
State Machine (cont..)
```

- €¢ From the perspective of the API, there are two types of

```cpp
graphics functions:
```

1. Functions that either change the state inside the machine or

```cpp
return the state information
```

â€“ glEnable ( GL_ LIGHTING );
â€“ glDisable ( GL_BLEND );
2. Functions that perform some operations based on the current

```cpp
state of the machine.
```

- €¢ Primitive functions
â€“ glColor3f(0.0, 0.0, 0.0);
â€“ glPointSize(1.5);

```cpp
OpenGL Functions
```

- €¢ OpenGL provides a range of functions for specifying:
- €¢ Primitives ïƒ  the low-level objects or atomic entities that our system can display

```cpp
o Points
o Line Segments
o Triangles
```

- €¢ Attributes ïƒ  the way that a primitive appears on the display
- €¢ Transformations ïƒ  to carry out transformations of objects, such as rotation,

```cpp
translation, and scaling
```

- €¢ Viewing
ïƒ  To specify various views
- €¢ Control (GLUT) ïƒ  to communicate with the window system, initialize our

```cpp
programs, and deal with any errors during the execution
```

- €¢ Query ïƒ  to get information about API i.e., how many colours are supported etc.,

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

- €¢

```cpp
In OpenGL, we use basic OpenGL types, e.g.,
```

- €¢
- €¢
- €¢
- €¢
- €¢

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

- €¢
- €¢
- €¢
- €¢
- €¢

```cpp
vec2,
vec3,
mat2,
mat3
mat4, etc.
What are Attributes?
```

- €¢ Attributes are properties associated with the primitives that give

```cpp
them their different appearances, e.g.
```

- €¢
- €¢
- €¢
- €¢

```cpp
Color (for points, lines, polygons)
Size and width (for points, lines)
Stipple pattern (for lines, polygons)
Polygon mode
```

- €¢ Display as filled: solid color or stipple pattern
- €¢ Display edges
- €¢ Display vertices

```cpp
Attributes for lines
Attributes for polygons
OpenGL Functions:
Lack of Object Orientation
```

- €¢

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

- €¢ The major reason is efficiency (Donâ€™t wrap everything in classes

```cpp
when it is not required)
Format of OpenGL Functions
glUniform â€” Specifies the value of a uniform variable for the current program object
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

- €¢

```cpp
Most constants are defined in the include files gl.h, glu.h and
glut.h
```

- €¢
- €¢
- €¢

```cpp
Note #include <GL/glut.h> should automatically include the others
Examples: the functions glEnable and glClear are both declared in
gl.h
The OpenGL data types GLfloat, GLdouble,â€¦. are also
declared in gl.h
Which of the following options
is correct?
```

â“˜ Start presenting to display the poll results on this slide.

```cpp
Components of a OpenGL application
Image credits: Computer Graphics Programming in OpenGL
with C++, Scott Gordon and John Clevenger
What is GLSL
GLSL is short for OpenGL Shading Language
```

- €¢ It is a C-like language with:
- €¢
- €¢
- €¢
- €¢

```cpp
o
o
Built-in Matrix and vector types (2, 3, 4 dimensional)
C++ like constructors
It is similar to Nvidiaâ€™s Cg and Microsoft HLSL
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

â€œInteractive Computer Graphics â€“ A Top-Down Approach with

```cpp
Shader-Based OpenGLâ€ by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- €¢ Sec. 2.4 Primitives and Attributes (up to Sec. 2.4.1)
- €¢ Sec. 2.3.1 Graphics Functions
- €¢ Sec. 2.3.2 Graphics Pipeline and State Machine
- €¢ Sec. 8.10 Graphics and the Internet
- €¢ (Advanced) Appendix A.2

```cpp
Graphics Shaders, Theory and Practice, 2nd Edition, Mike Baily,
Steve Cunningham
```



---

