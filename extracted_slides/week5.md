# Week 5 Lectures

## Lecture 009: Coordinate Frame Transformations(1)


```cpp
CITS3003 Graphics & Animation
Lecture 8:
Coordinate Frames and
Transformations
Content
```

- �� Introduce standard transformations
– Rotation, Translation, Scaling, Shear
- �� Learn to build arbitrary transformation

```cpp
matrices from simple transformations
Revision
```

- �� Vectors are entities having length and direction, but no

```cpp
position.
```

- �� The difference between two points is a vector:
𝒗𝒗 = 𝑷𝑷 − 𝑸𝑸
- �� The sum of a point and a vector is a point:
𝑷𝑷 = 𝒗𝒗 + 𝑸𝑸

```cpp
we also say that a point P is formed by displacing point Q by vector v
```

- �� An n-dimensional vector is given by an n-tuple (list of its

```cpp
components)
representations of w with
w = 𝛼𝛼1 𝛼𝛼2 ⋯ 𝛼𝛼𝑛𝑛 T
respect to the basis vectors
A Coordinate Frame
```

- �� A coordinate system (or coordinate frame) is

```cpp
determined by 𝐏𝐏0 , 𝐯𝐯1 , 𝐯𝐯2 , 𝐯𝐯3
v2
P0
v1
v3
The Homogeneous representation of a
Point and a Vector
```

- �� Assuming 0 � 𝐏𝐏 = 𝟎𝟎 and 1 � 𝐏𝐏 = 𝐏𝐏 , we can write
𝐰𝐰 = 𝛼𝛼1 𝐯𝐯1 + 𝛼𝛼2 𝐯𝐯2 + 𝛼𝛼3 𝐯𝐯3 = 𝛼𝛼1 𝐯𝐯1 + 𝛼𝛼2 𝐯𝐯2 + 𝛼𝛼3 𝐯𝐯3 + 0 � 𝐏𝐏0
𝐏𝐏 = 𝛽𝛽1 𝐯𝐯1 + 𝛽𝛽2 𝐯𝐯2 + 𝛽𝛽3 𝐯𝐯3 + 𝐏𝐏0 = 𝛽𝛽1 𝐯𝐯1 + 𝛽𝛽2 𝐯𝐯2 + 𝛽𝛽3 𝐯𝐯3 + 1 � 𝐏𝐏0
- �� Thus, we obtain the four-dimensional homogeneous

```cpp
coordinate representation
```

𝐰𝐰 = 𝛼𝛼1
𝐏𝐏 = 𝛽𝛽1
𝛼𝛼2
𝛽𝛽2
𝛼𝛼3
𝛽𝛽3
0 𝑇𝑇
1 𝑇𝑇

```cpp
The Homogeneous representation of a
Point and a Vector
```

- �� Homogeneous coordinates help keep the distinction between points

```cpp
and vectors.
```

- �� To go from ordinary to homogeneous coordinates:
– if it’s a point append a 1;
– if it’s a vector, append a 0;
𝐰𝐰 = 𝛼𝛼1
𝐏𝐏 = 𝛽𝛽1
𝛼𝛼2
𝛽𝛽2
𝛼𝛼3
𝛽𝛽3
0 𝑇𝑇
1 𝑇𝑇

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

- �� We can represent (Q0, u1, u2, u3) in terms of (P0, v1, v2, v3)
𝐮𝐮1 = 𝛾𝛾11 𝐯𝐯1 + 𝛾𝛾12 𝐯𝐯2 +𝛾𝛾13 𝐯𝐯3
𝐮𝐮2 = 𝛾𝛾21 𝐯𝐯1 + 𝛾𝛾22 𝐯𝐯2 +𝛾𝛾23 𝐯𝐯3
𝐮𝐮3 = 𝛾𝛾31 𝐯𝐯1 + 𝛾𝛾32 𝐯𝐯2 +𝛾𝛾33 𝐯𝐯3
𝐐𝐐0 = 𝛾𝛾41 𝐯𝐯1 + 𝛾𝛾42 𝐯𝐯2 +𝛾𝛾43 𝐯𝐯3 + 𝐏𝐏0

```cpp
Representing One Coordinate Frame in
Terms of the Other
```

𝐌𝐌 is a 4 × 4 matrix:
𝛾𝛾11
𝛾𝛾21
𝐌𝐌 = 𝛾𝛾
𝛾𝛾41
𝛾𝛾12
𝛾𝛾22
𝛾𝛾32
𝛾𝛾42
𝛾𝛾13
𝛾𝛾23
𝛾𝛾33
𝛾𝛾43

```cpp
Working with Representations
```

- �� Within the two coordinate frames any point or vector can be

```cpp
represented as:
```

𝐚𝐚 = 𝛼𝛼1
𝐛𝐛 = 𝛽𝛽1
𝛼𝛼2
𝛽𝛽2
𝛼𝛼3
𝛽𝛽3
𝛼𝛼4 in the first frame
𝛽𝛽4 in the second frame

```cpp
where 𝛼𝛼4 = 𝛽𝛽4 = 1 for points and 𝛼𝛼4 = 𝛽𝛽4 = 0 for vectors and
```

𝐚𝐚 = 𝐌𝐌 T 𝐛𝐛

```cpp
or
```

- �� The matrix 𝐌𝐌 T is 4 × 4 and specifies an affine

```cpp
transformation in homogeneous coordinates
An Example
We consider two reference frames that have basis vector relation
Let's say the reference point does not change, so
Our matrix MT would be:
Only accounting for
rotation
An Example
Now, we want our frames to have different reference point….
Let’s say, to the point Q0 that has the following representation in
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

(today’s lecture)

```cpp
On the top right is our mental image if we view it as a change of coordinates (a movement of the origin in this case).
and on the bottom right is our mental image if we view this transformation as a physical movement
Both ways will lead to exactly the same matrix
Matrix Multiplication
```


### 1.1

𝑎𝑎

### 2.2 x

=
𝑏𝑏

### 3.3

1𝑎𝑎 + 1.1𝑏𝑏
2𝑎𝑎 + 2.2𝑏𝑏
3𝑎𝑎 + 3.3𝑏𝑏

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

- �� A transformation is a function that maps points

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

- ��
- ��
- ��
- ��

```cpp
Translation
Rotation
Scale
Shear
Most of the transformations that we need in
computer graphics are affine.
Rotation (2D)
```

- �� Consider a rotation about the origin by θ degrees
– radius stays the same, angle increases by θ
𝑥𝑥′ = 𝑟𝑟 cos(𝜙𝜙 + 𝜃𝜃)
𝑦𝑦′ = 𝑟𝑟 sin(𝜙𝜙 + 𝜃𝜃)
(New point 𝐏𝐏𝐏 after rotation)

```cpp
Two-dimensional
rotation
Representing x,y
```

𝑥𝑥 = 𝑟𝑟 cos 𝜙𝜙

```cpp
in the Polar form
```

𝑦𝑦 = 𝑟𝑟 sin 𝜙𝜙
(Old point P before rotation)

```cpp
sin(A+B) = sin(A) cos(B) + cos(A) sin(B)
cos(A+B) = cos(A) cos(B) – sin(A) sin(B)
Rotation (2D)
```

- �� Consider a rotation about the origin by θ degrees
– radius stays the same, angle increases by θ
𝑥𝑥′ = 𝑟𝑟 cos(𝜙𝜙 + 𝜃𝜃)
𝑦𝑦′ = 𝑟𝑟 sin(𝜙𝜙 + 𝜃𝜃)
𝑥𝑥 = 𝑟𝑟 cos 𝜙𝜙
𝑦𝑦 = 𝑟𝑟 sin 𝜙𝜙
𝑥𝑥 ′ = 𝑟𝑟 cos𝜙𝜙 cos 𝜃𝜃 – 𝑟𝑟 sin𝜙𝜙 sin 𝜃𝜃
𝑦𝑦 ′ = 𝑟𝑟 cos𝜙𝜙 sin 𝜃𝜃 + 𝑟𝑟 sin𝜙𝜙 cos 𝜃𝜃
𝑥𝑥′ = 𝑥𝑥 cos 𝜃𝜃 – 𝑦𝑦 sin 𝜃𝜃
𝑦𝑦′ = 𝑥𝑥 sin 𝜃𝜃 + 𝑦𝑦 cos 𝜃𝜃

```cpp
Two-dimensional
rotation
sin(A+B) = sin(A) cos(B) + cos(A) sin(B)
cos(A+B) = cos(A) cos(B) – sin(A) sin(B)
Rotation (2D)
Rotation about the z-axis
```

- �� Rotation in two dimensions is equivalent to rotation

```cpp
about the 𝑧𝑧 axis in three dimensions.
```

- �� Rotation about the 𝑧𝑧 axis in 3D leaves the 𝑧𝑧

```cpp
components of all the points unchanged:
cos 𝜃𝜃
```

𝑅𝑅𝑧𝑧 𝜃𝜃 = sin 𝜃𝜃
−sin 𝜃𝜃

```cpp
cos 𝜃𝜃
Rotation about the z-axis
cos 𝜃𝜃
P ′ = 𝑅𝑅𝑧𝑧 𝜃𝜃 P = sin 𝜃𝜃
```

−sin 𝜃𝜃

```cpp
cos 𝜃𝜃
```

𝑥𝑥′ = 𝑥𝑥 cos 𝜃𝜃 - y sin 𝜃𝜃 + 0 + 0
𝑦𝑦𝑦 = 𝑥𝑥 sin 𝜃𝜃 + y cos 𝜃𝜃 + 0 + 0
𝑧𝑧𝑧 =
0 +0
+0+0
𝑤𝑤𝑤 =
0 +0
+0+1

```cpp
In homogeneous coordinates
```

𝐏𝐏𝐏 = 𝐑𝐑 𝒁𝒁 𝜃𝜃 𝐏𝐏
𝑥𝑥
0 × 𝑦𝑦
= 𝑥𝑥 cos 𝜃𝜃 - y sin 𝜃𝜃
= 𝑥𝑥 sin 𝜃𝜃 + y cos 𝜃𝜃
=0
=1

```cpp
Rotation about x and y axis
```

- �� We can also derive the matrices for rotation about the x

```cpp
and y axis.
```

– For rotation about x axis, x values are unchanged
– For rotation about y axis, y values are unchanged
1
0 cos θ - sin θ


```cpp
R = Rx(q) = 0 sin θ cos θ
```


0
 cos θ
 0

```cpp
R = Ry(q) = 
```

- sin θ

```cpp
Note the negative
```



```cpp
sign here
```

 0
0
0

0

1
0 sin θ 0
0

0 cos θ 0

1

```cpp
Translation
```

- �� Move (translate, displace) a point to a new location

```cpp
d
```

𝐏𝐏′
𝐏𝐏
- �� Displacement is determined by a vector d
– Three degrees of freedom
𝐏𝐏′ = 𝐏𝐏 + 𝐝𝐝

```cpp
The whole object moves
```

- �� Although we can move a point to a new location in an

```cpp
infinite number of ways, when we move many points of
a rigid object there is usually only one way
object
translation: every point displaced
by same vector
Translation using Representations
```

- �� Using the homogeneous coordinate representation in a

```cpp
frame
```

 𝐏𝐏 = [𝑥𝑥 𝑦𝑦 𝑧𝑧 1]T
 𝐏𝐏′ = [𝑥𝑥′ 𝑦𝑦𝑦 𝑧𝑧′ 1]T
 𝐝𝐝 = [𝑑𝑑𝑥𝑥 𝑑𝑑𝑦𝑦 𝑑𝑑𝑧𝑧 0]T
- �� Hence 𝐏𝐏′ = 𝐏𝐏 + 𝐝𝐝 or
 𝑥𝑥 ′ = 𝑥𝑥 + 𝑑𝑑𝑥𝑥
 𝑦𝑦 ′ = 𝑦𝑦 + 𝑑𝑑𝑦𝑦
 𝑧𝑧′ = 𝑧𝑧 + 𝑑𝑑𝑧𝑧

```cpp
note that this expression is in
four dimensions and expresses
point = point + vector
```

27

```cpp
Translation Matrix
```

- �� We can also express translation using a 4 × 4 matrix T in

```cpp
homogeneous coordinates
```

𝐓𝐓 = 𝐓𝐓(𝑑𝑑𝑥𝑥 , 𝑑𝑑𝑦𝑦, 𝑑𝑑𝑧𝑧) =
0 0 𝑑𝑑𝑥𝑥
1 0 𝑑𝑑𝑦𝑦
0 1 𝑑𝑑𝑧𝑧
0 0 1
- �� This form is better for implementation because all affine

```cpp
transformations can be expressed this way and multiple
transformations can be concatenated together
Translation Matrix
```

- �� We can also express translation using a 4 × 4 matrix T in

```cpp
homogeneous coordinates
```

𝐏𝐏′ = 𝐓𝐓𝐏𝐏 where
𝐏𝐏′ = 𝐓𝐓𝐏𝐏 =
0 𝑑𝑑𝑥𝑥
0 𝑑𝑑𝑦𝑦
1 𝑑𝑑𝑧𝑧
0 1
𝑥𝑥
𝑥𝑥 + 𝑑𝑑𝑥𝑥
𝑦𝑦
𝑦𝑦 + 𝑑𝑑𝑦𝑦
𝑧𝑧 = 𝑧𝑧 + 𝑑𝑑𝑧𝑧
- �� This form is better for implementation because all affine

```cpp
transformations can be expressed this way, and multiple
transformations can be concatenated together
Translation
```

- �� Translate object= Move each vertex by the same

```cpp
distance d =(𝑑𝑑𝑥𝑥 , 𝑑𝑑𝑦𝑦, 𝑑𝑑𝑧𝑧)
```

𝐓𝐓 = 𝐓𝐓(𝑑𝑑𝑥𝑥 , 𝑑𝑑𝑦𝑦 , 𝑑𝑑𝑧𝑧 ) =
0 0 𝑑𝑑𝑥𝑥
1 0 𝑑𝑑𝑦𝑦
0 1 𝑑𝑑𝑧𝑧
0 0 1

```cpp
If we translate a point (2,2,2) by displacement (2,4,6), new location
of point is (4,6,8)
Where
```

- �� 𝑥𝑥 ′ = 𝑥𝑥 + 𝑑𝑑𝑥𝑥
- �� 𝑦𝑦 ′ = 𝑦𝑦 + 𝑑𝑑𝑦𝑦
- �� 𝑧𝑧′ = 𝑧𝑧 + 𝑑𝑑𝑧𝑧

```cpp
Slide Credits :
Emmanuel Agu
WPI CS543
Scaling (non-rigid transform)
```

- �� Expand or contract along each axis (fixed point of origin)
𝑥𝑥 ′ = 𝑠𝑠𝑥𝑥𝑥𝑥
𝑦𝑦 ′ = 𝑠𝑠𝑦𝑦𝑦𝑦
𝑧𝑧 ′ = 𝑠𝑠𝑧𝑧z
𝐏𝐏′ = 𝐒𝐒𝐏𝐏
 sx
0
𝐒𝐒 = 𝐒𝐒(𝑠𝑠𝑥𝑥 , 𝑠𝑠𝑦𝑦, 𝑠𝑠𝑧𝑧) = 
0

0

```cpp
sy
sz
```

0
0

0

1

```cpp
Non-uniform
Uniform
Reflection
corresponds to negative scale factors
```

 sx
0

0

0

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

0
0

0

1

```cpp
Shear
```

- �� It is helpful to add one more basic transformation, the

```cpp
shearing transformation, to the collection of
transformation we have learnt
```

- �� Shearing is equivalent to pulling faces in opposite

```cpp
directions
Shear
Shear Matrix
Consider a simple shear along the x axis
```

 𝑥𝑥′ = 𝑥𝑥 + 𝑦𝑦 cot 𝜃𝜃
 𝑦𝑦′ = 𝑦𝑦
 𝑧𝑧′ = 𝑧𝑧
1 cot θ
0

=> H(θ) =
0

0
0


0

1
𝑥𝑥 ′ − 𝑥𝑥 = 𝑦𝑦 cot 𝜃𝜃

```cpp
Shear
Shear Matrix
Consider a simple shear along the x axis
```

 𝑥𝑥′ = 𝑥𝑥 + 𝑦𝑦 cot 𝜃𝜃
 𝑦𝑦′ = 𝑦𝑦
 𝑧𝑧′ = 𝑧𝑧
1 cot θ
0
=> H(θ) = 
0

0
0
0

0

1

```cpp
Inverses
```

- �� Although we could compute inverse matrices by general

```cpp
formulas, we can use simple geometric observations
```

– Translation: 𝐓𝐓 −1 (𝑑𝑑𝑥𝑥 , 𝑑𝑑𝑦𝑦, 𝑑𝑑𝑧𝑧) = 𝐓𝐓(−𝑑𝑑𝑥𝑥 , −𝑑𝑑𝑦𝑦, −𝑑𝑑𝑧𝑧)
– Rotation: 𝐑𝐑−1 (𝜃𝜃) = 𝑹𝑹(−𝜃𝜃)
- �� Holds for any rotation matrix
- �� Note that since cos(−𝜃𝜃) = cos(𝜃𝜃) and sin(−𝜃𝜃) =
− sin(𝜃𝜃)
𝐑𝐑−1 (𝜃𝜃) = 𝐑𝐑T (𝜃𝜃)
– Scaling: 𝐒𝐒 −1 (𝑠𝑠𝑥𝑥, 𝑠𝑠𝑦𝑦, 𝑠𝑠𝑧𝑧) = 𝐒𝐒(1/𝑠𝑠𝑥𝑥, 1/𝑠𝑠𝑦𝑦, 1/𝑠𝑠𝑧𝑧)
– Shear:
37

```cpp
Concatenation
```

- �� We can form arbitrary affine transformation matrices by

```cpp
multiplying together rotation, translation, scaling and
shear matrices
```

- �� Because the same transformation is applied to many

```cpp
vertices, the cost of forming a matrix 𝐌𝐌 = 𝐀𝐀𝐀𝐀𝐀𝐀𝐀𝐀 is
not significant compared to the cost of computing 𝐌𝐌𝐌𝐌
for many vertices 𝐩𝐩
```

- �� The difficult part is how to form a desired transformation

```cpp
from the specifications in the application
Order of Transformations
```

- �� Suppose that we carry out three successive

```cpp
transformations on a point p, creating a new point q
```

- �� We can write the sequence as 𝐪𝐪 = 𝐂𝐂𝐂𝐂𝐂𝐂𝐩𝐩
– Note that matrix on the right is the first applied
– Mathematically, the following are equivalent
𝐪𝐪 = 𝐂𝐂𝐂𝐂𝐂𝐂𝐩𝐩 = 𝐂𝐂(𝐁𝐁(𝐀𝐀𝐩𝐩))
- �� If we have many points to transform

```cpp
M = CBA
q = Mp
Order of Transformation matters
Image credits: Fundamentals of Computer Graphics (4th Edition)-Peter Shirley
General Rotation About the Origin
A rotation angle of 𝜃𝜃 about the origin can be decomposed into the
concatenation of rotations about the 𝑥𝑥, 𝑦𝑦, and 𝑧𝑧 axes
```

𝑹𝑹(𝜃𝜃) = 𝑹𝑹𝑧𝑧(𝜃𝜃𝑧𝑧) 𝑹𝑹𝑦𝑦(𝜃𝜃𝑦𝑦) 𝑹𝑹𝑥𝑥 (𝜃𝜃𝑥𝑥 )

```cpp
y
```

𝜃𝜃𝑥𝑥 , 𝜃𝜃𝑦𝑦 , and 𝜃𝜃𝑧𝑧 are called the Euler angles

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
=> M = T(pf) 𝑹𝑹(𝜃𝜃) T(-pf)

```cpp
After Step 1
After Step 2
After Step 3
Rotation About a Fixed Point other
than the Origin (cont.)
```

- �� A 2D example:

```cpp
y
Objective: want to rotate a square 45 degrees about its
own center, 𝐩𝐩.
```

𝐩𝐩

```cpp
x
Before rotation
y
x
Output wanted after rotation
This is the same as rotating about the 𝑧𝑧-axis (pointing out
of the page) in 3D.
Rotation About a Fixed Point other
than the Origin (cont.)
```

- �� Our aim is to construct a matrix 𝐌𝐌 so that when the four

```cpp
vertices of the square are multiplied by it, we get the
desired output.
```

- �� Step 1: apply a translation so that the origin is at 𝐩𝐩.

```cpp
y
y
```

𝐩𝐩

```cpp
x
```

𝐌𝐌 = 𝐓𝐓(−𝐩𝐩)

```cpp
x
Rotation About a Fixed Point other
than the Origin (cont.)
```

- �� Step 2: apply a 45-degree rotation about the 𝑧𝑧-axis at the

```cpp
origin.
y
y
x
```

𝐌𝐌 = 𝐑𝐑 z 𝜽𝜽 𝐓𝐓(−𝐩𝐩)

```cpp
x
Rotation About a Fixed Point other
than the Origin (cont.)
```

- �� Step 3: move the origin back to where it was before.

```cpp
y
y
x
x
```

𝐌𝐌 = 𝐓𝐓 𝐩𝐩 𝐑𝐑 z 𝜽𝜽 𝐓𝐓(−𝐩𝐩)

```cpp
A Few Common Transformations
```

- �� Rigid transformation: The 4 × 4 matrix has the form:
𝑅𝑅
𝟎𝟎T
𝐭𝐭

```cpp
where 𝑅𝑅 is a 3 × 3 rotation matrix and 𝐭𝐭 ∈ ℝ𝟑𝟑𝐱𝐱𝟏𝟏 is a
translation vector. Rigid transformation preserves
everything (angle (this means the shape), length, area, etc.,)
```

- �� Similarity transformation: The matrix has the form:

```cpp
Small (or large) 𝑠𝑠′
Large (or small) 𝑠𝑠
```

𝑠𝑠𝑅𝑅 𝐭𝐭
𝑅𝑅 𝐭𝐭

```cpp
values enlarge (or
values enlarge (or
or T
T
```

𝟎𝟎
𝟎𝟎
𝑠𝑠𝑠

```cpp
diminish) the object
diminish) the object
where 𝑠𝑠, 𝑠𝑠𝑠 ≠ 1. Similarity transformation preserves angle,
ratios of lengths and of areas.
A Few Common Transformations (cont.)
```

- �� Affine transformation: The 4 × 4 matrix has the form:
𝐴𝐴
𝟎𝟎T
𝐭𝐭

```cpp
where 𝐴𝐴 can be any 3 × 3 non-singular matrix and
```

𝐭𝐭 ∈ ℝ𝟑𝟑 is a translation vector. Affine transformation

```cpp
preserves parallelism, ratios of lengths.
```

- �� Perspective transformation: The matrix can be any nonsingular 4 × 4 matrix. Perspective transformation matrix

```cpp
preserves cross ratios (i.e., ratio of ratios of lengths).
A Few Common Transformations (cont.)
```

- �� Rigid transformation is equivalent to a change in

```cpp
coordinate frames. It has 6 degrees of freedom (dof) i.e.,
```

3 rotations + 3 translations (along each of the three axes)
- �� Similarity transformation has 7 dof (an additional scaling)
- �� Affine transformation has 12 dof
– 3 rotations + 3 translations + 3 scaling + 3 shear

```cpp
Choose the correct option
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
What does the given
Transformation matrix do?
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
Instancing
```

- �� In modeling, we often start with a simple

```cpp
object centered at the origin, oriented with the
axis, and at a standard size
```

- �� We apply an instance transformation to its

```cpp
vertices to
```

– Scale
– Orient
– Locate

```cpp
Instancing
```

- �� Instancing provides a mechanism for telling the graphics card to render

```cpp
multiple copies of an object using only a single OpenGL call.
Using glDrawArraysInstanced()
instead of glDrawArrays()
Instancing: 100,000 animated cubes
number of instances to be drawn
Image credits: Computer Graphics Programming in OpenGL with C++, by V. Scott Gordon and John Clevenger”, 2nd Edition
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

- �� Object (Local or Model) space:
– The space in which a model is defined, usually centered at

```cpp
the origin.
```

- �� World space:
– The space in which a simulated scene is built

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

- �� World space as seen from a simulated camera or “eye”.

```cpp
Camera (or View or Eye) Space
```

- �� The View matrix moves and rotates the models in the world to

```cpp
simulate the effect of a camera at a desired location.
```

- �� OpenGL camera exists at location (0,0,0) and faces down the

```cpp
negative Z axis.
```

- �� To simulate the appearance of that camera being moved a

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

𝐀𝐀 = 0

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

- �� we must move the camera away from

```cpp
the objects that we wish to have in our image
Or
```

- �� the objects must be moved in front of the camera.

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
𝐀𝐀 = 0 1
0 0
0 0
0 0
0 0
1 −𝑑𝑑
0 1

```cpp
Transformation matrix ‘A’ moves a
point (x, y, z) in the world frame to the
point (x, y, z − d) in the camera frame
Moving the Camera Vs
Moving the Objects
Camera frame is fixed, we are placing world frame relative to
the camera frame.
```

1 0
𝐀𝐀 = 0 1
0 0
0 0
0 0
0 0
1 −𝑑𝑑
0 1

```cpp
How did we derive A (modelview matrix)?
Positioning World frame
relative to the Camera frame
Camera frame is fixed, we are placing world frame relative to
the camera frame.
```

1 0
𝐀𝐀 = 0 1
0 0
0 0
0 0
0 0
1 −𝑑𝑑
0 1

```cpp
Recall?
Translation matrix
```

- ��
- ��
- ��
𝑥𝑥 ′ = 𝑥𝑥
𝑦𝑦 ′ = 𝑦𝑦
′ = 𝑧𝑧 + (−𝑑𝑑)
𝑧𝑧
𝐓𝐓 = 𝐓𝐓(𝑑𝑑𝑥𝑥 , 𝑑𝑑𝑦𝑦 , 𝑑𝑑𝑧𝑧 ) =
0 𝑑𝑑𝑥𝑥
0 𝑑𝑑𝑦𝑦
1 𝑑𝑑𝑧𝑧
0 1

```cpp
Moving the Camera
Moving the camera away from its initial position at the origin
of the object frame.
```

1 0
𝐀𝐀 = 0 1
0 0
0 0
0 0
0 0
1 −𝑑𝑑
0 1

```cpp
Recall? … changing coordinate frames
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

- �� We can represent (Q0, xc, yc, zc) in terms of (P0, x, y, z)
𝐱𝐱 𝑐𝑐 = 𝛾𝛾11 𝒙𝒙 + 𝛾𝛾12 𝒚𝒚+𝛾𝛾13 𝒛𝒛
𝐲𝐲𝑐𝑐 = 𝛾𝛾21 𝒙𝒙 + 𝛾𝛾22 𝒚𝒚+𝛾𝛾23 𝒛𝒛
𝐳𝐳𝑐𝑐 = 𝛾𝛾31 𝒙𝒙 + 𝛾𝛾32 𝒚𝒚+𝛾𝛾33 𝒛𝒛
𝐐𝐐0 = 𝛾𝛾41 𝒙𝒙 + 𝛾𝛾42 𝒚𝒚+𝛾𝛾43 𝒛𝒛 + 𝐏𝐏0
𝐱𝐱 𝑐𝑐 = 𝒛𝒛
𝐲𝐲𝑐𝑐 = 𝒚𝒚
𝐳𝐳𝑐𝑐 = 𝒛𝒛
𝐐𝐐0 = d𝒛𝒛 + 𝐏𝐏0
1 0
𝐌𝐌 = 0 1
0 0
0 0
𝑑𝑑

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
1 −𝑑𝑑
0 1

```cpp
Recall? … changing coordinate frames
where, 𝐌𝐌 = 0
```

0 0
1 0
0 1
0 𝑑𝑑
‘b’ is the representation of a point/vector w.r.t the camera coordinates
‘a’ is the representation of a point/vector w.r.t the world coordinates

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
1 −𝑑𝑑
0 1

```cpp
This matrix T takes a point (0, 0, d) in the
object/world frame, whose representation is:
p =[0 0 𝑑𝑑 1]𝑇𝑇
to
p’= [0 0 0 1]𝑇𝑇
i.e., the origin in the camera frame
The World and Camera Coordinate
Frames
```

- �� Changes in coordinate frame are then defined by 4 × 4

```cpp
matrices
```

- �� In OpenGL, the base frame that we start with is the

```cpp
world frame
```

- �� Eventually we represent entities in the camera frame by

```cpp
changing the world representation using the modelview matrix
```

- �� Initially these frames are the same (i.e., M=I)

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

“Interactive Computer Graphics – A Top-Down Approach with Shader-Based

```cpp
OpenGL” by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ��
- ��
- ��
- ��

```cpp
Sec 3.7 Affine Transformations (all subsections)
Sec 3.8 Translation, Rotation, and Scaling
Sec 3.9 Transformations in Homogeneous Coordinates
Sec 3.10 Concatenation of Transformations
```

“Fundamentals of Computer Graphics , Steve Marschner and Peter Shirley, 4th

```cpp
Edition”
```

- �� Chapter#06, Transformation Matrices
“Computer Graphics Programming in OpenGL with C++, by V. Scott

```cpp
Gordon and John Clevenger”, 2nd Edition
```

- �� Sec 4.6.1 Instancing


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

ⓘ Start presenting to display the poll results on this slide.

```cpp
Content
```

- �� Basic input devices
– Physical Devices
– Logical Devices
– Input Modes
- �� Event-driven input
- �� Introduction to callbacks

```cpp
Sketchpad
```

- �� Ivan Sutherland (MIT 1963) established the basic

```cpp
interactive paradigm that characterizes interactive
computer graphics:
```

– User sees an object on the display
– User points to (picks) the object with an input device (light

```cpp
pen, mouse, trackball)
```

– Object changes (moves, rotates, morphs)
– Repeat

```cpp
Ivan
Sutherland’s
sketchpad
demo: link
https://bimaplus.org/news/the-very-beginning-of-the-digital-representation-ivan-sutherland-sketchpad/
A Graphics System
There are six major elements in a graphics system
```

– Input devices
– Central Processing Unit
– Graphics Processing Unit
– Memory
– Frame Buffer
– Output Devices

```cpp
A Graphics System
Input Devices
```

- �� Input devices can be viewed as:
– Physical Devices
– Logical Devices

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

- ��

```cpp
Devices such as the mouse, trackball, and joystick return
incremental inputs (or velocities) to the operating system
o
Must integrate these inputs to obtain the position of the curser on
the screen
```

- ��

```cpp
Roll of trackball
Absolute positioning:
```

- ��

```cpp
Devices such as the data tablet return a position directly to
the operating system
Input Devices
```

- �� Input devices can also be viewed as

```cpp
o Logical devices: characterized by how they influence
the application program, e.g., what is returned to the
program via the API
```

- �� An 𝑥𝑥, 𝑦𝑦 position on the screen?
- �� An object identifier for a menu item chosen?

```cpp
Both are performed by the same physical device (the
mouse, in this case) but what is returned to the program is
different.
Logical Input Devices
```

- �� Consider the C and C++ code

```cpp
o C++: cin >> x; \\ data in
o C: scanf(”%d”, &x); \\data out
```

- �� What is the input physical device?

```cpp
o Can’t tell from the code
o Could be keyboard, file, output from another
program
o A string is returned to the program regardless of
the physical device
Logical Input Devices (cont.)
```

- ��

```cpp
Graphics APIs define different types of logical devices based on the
kind of data (number, string, or position) the device provides :
```

– Locator: a device provides a position in world coordinates to the

```cpp
user program.
```

- �� Usually implemented via pointing device e.g., mouse
– Choice: a device that allows the user to select one of a discrete

```cpp
number of options, e.g., a menu item
```

- �� OpenGL can use widgets such as menus, and scroll bars
– String: a device that provides ASCII strings to the user program,

```cpp
e.g., via key presses
```

- �� String might be provided by a keyboard, or a file, or by

```cpp
pointing devices.
Logical Input Devices (cont.)
```

– Stroke: a device that returns an array of locations.
- �� pushing down a mouse button, starts the transfer of data into the

```cpp
specified array and then releasing of the button, ends the transfer
```

– Valuator: a device that returns analog input to the user

```cpp
program, e.g., a widget such as a slidebar, that allows the
user to input numerical data, such as a value or a range.
```

– Pick: a device that returns the identifier of an object on the

```cpp
display to the user program. Pick devices are used for
selecting individual objects or elements within a scene.
```

- �� GLUT provide functions to handle all these

```cpp
Input Modes
The manner by which physical and logical devices provide an input to
the application program, can be described in terms of two entities:
```

- ��
- ��
- ��

```cpp
Input devices produce a trigger which can be used to send a signal
to the operating system
o
o
```

- ��

```cpp
Measure – value or a set of values returned to the program
Trigger – manner in which a user can signal to the computer
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

- �� We can obtain the measure of a device in three

```cpp
distinct modes.
```

– Request mode, sample mode and event mode.
- �� Each mode is defined by the relationship

```cpp
between the measure process and the trigger.
```

- �� Sample, request, and event are different modes

```cpp
of receiving inputs in a computer system.
Request Mode
```

- �� For request mode input, the measure is read by the

```cpp
program only when user triggers the device, when
requested.
```

- �� This mode is standard in non-graphical applications such as

```cpp
typical C programs
```

- �� A typical example is keyboard input:

```cpp
o The application program request a keyboard input from the user
o The user can type, erase (backspace), correct. The application
program hangs there until the enter (return) key (the trigger) is
depressed
Sample Mode
```

- �� It is an immediate mode (samples the input

```cpp
when the function call is made)
```

- �� Expects the measure to be present already at

```cpp
the sampling time (call time)
Request and Sample Mode
Request and sample modes are:
```

- ��

```cpp
useful for situations where the program guides the user
but are not useful in applications where the user controls
the flow of the program.
For sample and request mode, user must identify which
device will provide the input
Event Mode
```

- �� Each time a device is triggered, an event is

```cpp
generated.
```

- �� Device measure is placed on an event queue

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

- �� Window event: resize, expose, iconify
- �� Mouse event: click one or more buttons
- �� Motion event: this refers to the mouse move event
(when the cursor is inside the window of the application

```cpp
program)
```

- �� Keyboard: press or release a key
- �� Idle: non-event

```cpp
o Define what should be done if no other event is in the event
queue
Callbacks
```

- �� We can define a callback function for each

```cpp
type of event that the graphics system
recognizes
```

- �� This user-supplied function is executed when

```cpp
the event occurs
```

- ��

```cpp
For e.g., when a mouse button is pressed or released, the
callback function registered with glutMouseFunc() is
invoked
```

- �� glutMouseFunc(mymouse)

```cpp
mouse callback function
GLUT callbacks
```

- ��

```cpp
GLUT recognizes a subset of the events recognized by any
particular window system (Windows, X, Macintosh)
```

- ��

```cpp
Examples of the GLUT functions that set the callbacks function
for various events
```

– glutDisplayFunc // for specifying the display callback function
– glutMouseFunc // for specifying the mouse callback function
– glutReshapeFunc // for specifying the window resize callback function
– glutKeyboardFunc // for specifying the keyboard input callback function
– glutIdleFunc // for specifying the idle callback function (what the program should

```cpp
do when no events take place)
```

– glutMotionFunc // for specifying the mouse motion callback function (what to do

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
% when a mouse “event” happens

```cpp
}
GLUT Event Loop
Recall that the last line in main.c for a program using
GLUT must be
glutMainLoop();
which puts the program in an infinite event loop
```

- �� In each pass through the event loop, GLUT
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

- �� The display callback is executed whenever GLUT

```cpp
determines that the window should be refreshed, for
example
o When the window is first opened
o When the window is reshaped
o When a window is exposed
o When the user program decides it wants to change the display
```

- �� In main()

```cpp
o glutDisplayFunc(mydisplay) sets the display callback function
to ‘mydisplay’.
o Every GLUT program must have a display callback
Posting redisplays
```

- �� Different events may need to invoke the display

```cpp
callback function
```

- �� We use glutPostRedisplay(); to mark that the current

```cpp
window needs to be redisplayed, which sets a flag.
```

- �� GLUT checks to see if the flag is set at the end of the

```cpp
event loop
```

- �� If the flag is set then the display callback function is

```cpp
executed
Further Reading
```

“Interactive Computer Graphics – A Top-Down Approach with Shader-Based

```cpp
OpenGL” by Edward Angel and Dave Shreiner, 6th Ed, 2012
```

- ��
- ��
- ��

```cpp
Sec. 1.2.4-1.2.7 Input Devices, Physical Input Devices, Logical Devices, Input Modes
Sec. 2.1 The Sierpinski Gasket; immediate mode graphics vs retained mode graphics
C++ code in the Chapter02 to Chapter04 folders
On Mid-term test
```

- �� When
– Wednesday 09.04.2025 (10:00AM – 11:00AM)
- �� Where
– ARTS [159]
– CSSE [ 207] Seminar room
- �� Mode
– Closed-book, on paper (face-to-face), invigilated
- �� Types of Questions
– Multiple Choice Questions (MCQ’s)
– True/False
- �� Test duration
– ~40 minutes
– Expect to answer 1 – 1.5 questions per minute.

```cpp
On Mid-term test
```

- �� A scantron sheet will be provided

```cpp
for you to answer the questions.
Remember to answer all questions,
including multiple-choice and
true/false questions, on the
provided answer sheet and not on
the question paper.
```

- �� Please bring a pencil and an

```cpp
eraser. Note that ink pens are not
permitted on the answer sheet.
```

- �� Ensure that you fill in both your

```cpp
student number and your name on
the answer sheet accurately.
On Mid-term test
```

- �� If you have a clash with the test schedule,

```cpp
contact UC within this week
```



---

