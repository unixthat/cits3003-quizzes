# Week 4 Lectures

## Lecture 007: Representation and Coordinate Systems(3)


```cpp
CITS3003 Graphics & Animation
Lecture 7:
Representation and
Coordinate Systems
Content
```

- �� Intro. to the elements of geometry:
- �� points, scalars and vectors
- �� Dimensionality and linear independence
- �� Intro. to coordinate frame
- �� Learn how to define and change coordinate frames
- �� Derive homogeneous coordinate transformation

```cpp
matrices
Points, Scalars and Vectors
```

- �� Point (fundamental geometric object)
– Location in space/coordinate system

```cpp
y
```

- �� Example: Point (3, 4)
– Cannot add or scale points
(0,0)
– mathematical point has neither a size nor a shape
(3,4)

```cpp
x
```

- �� Scalars
– Real /complex numbers
– Used to specify quantities
– Obey a set of rules
- �� addition and multiplication
- �� commutivity and associativity // a + b = b + a ; (a + b) + c= a + (b + c)
- �� multiplicative and additive inverses // a + (-a) = 0 ; a . 𝑎𝑎−1= 1

```cpp
Points, Scalars and Vectors
```

- �� Vector
– Is any quantity with direction and magnitude
- �� e.g., Force, velocity etc.
– Can be added, scaled and rotated
– A vector does not have a fixed location in space

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

– scalars are the real numbers using ordinary addition and multiplication.
– geometric points are locations in space,
– and vectors are directed line segments.

```cpp
These objects obey the rules of an affine space.
```

– Vector-vector addition
– Scalar-vector multiplication
– Point-vector addition
– Scalar-scalar operations
– No point-point addition
- �� For any point define
– 1•P=P
– 0 • P = 0 (zero vector)

```cpp
No other point-scalar operations
Vector-Point Relationship
```

- �� Vector
– Two points can be thought of defining a vector,

```cpp
i.e., point-point-subtraction
```

𝒗𝒗 = 𝑷𝑷 − 𝑸𝑸
- �� Subtract 2 Points = vector
- �� Point + vector =point
– Because vectors can be multiplied by scalars,

```cpp
expressions, below make sense
```

𝑷𝑷 + 𝟑𝟑𝟑𝟑
– But this does not
𝟐𝟐𝟐𝟐 − 𝑸𝑸 + 𝟑𝟑𝟑𝟑
𝑷𝑷 + 𝟑𝟑𝟑𝟑 − 𝒗𝒗

```cpp
Magnitude of a Vector
```

- �� Magnitude of a

```cpp
The magnitude of a vector a is a real number
denoted
```

– If a =(2, 5, 6)
- �� Normalizing a vector

```cpp
Dot and Cross Products
```

- �� Many of the geometric concepts relating the orientation

```cpp
between two vectors are in terms of the dot (inner) and cross
```

(outer) products of two vectors.

```cpp
Dot and Cross Products
```

- �� Dot (inner) product:
𝑢𝑢 � 𝑣𝑣 = 𝑢𝑢 𝑣𝑣 cos 𝜃𝜃
– angle between two vectors
– Finding a vector’s magnitude
- �� Square of magnitude
– Finding whether two vectors are perpendicular,
- �� If u.v = 0, u and v are orthogonal
– Finding whether two vectors are parallel but pointing

```cpp
in opposite directions.
Dot and Cross Products
```

- �� Cross (outer) product
– Given by u x v = |u||v| sin(θ)
– Normal

```cpp
An important property of the cross product of two vectors, is
that it produces a vector that is normal (perpendicular) to the
plane defined by the original two vectors.
Linear Independence
```

- �� A set of vectors v1, v2, …, vn is linearly independent

```cpp
when
a1v1+a2v2+.. anvn = 0,
only if a1=a2=…= 0
```

- �� If a set of vectors is linearly independent, we cannot

```cpp
represent any vector (in the set) in terms of the other
vectors.
```

- �� If a set of vectors is linearly dependent, at least one

```cpp
can be written in terms of the others
Examples
```

- �� Example#1:
v1=[1,2]T , v2=[-5,3]T

```cpp
Independent
```

- �� Example#2:
v1=[2,-1,1]T , v2=[3,-4,2]T, v3=[5,-5,3]T

```cpp
Dependent
Linear Independence (cont.)
```

- �� For example:

```cpp
Let
```

𝐯𝐯1 = 0 , 𝐯𝐯2 = 3 , 𝐯𝐯3 = 0
−2

```cpp
then 𝐯𝐯1 , 𝐯𝐯2 , 𝐯𝐯3 is a set of linearly independent vectors.
```

- �� What are the values of 𝛼𝛼1 , 𝛼𝛼2 , and 𝛼𝛼3 if we want
𝛼𝛼1 𝐯𝐯1 + 𝛼𝛼2 𝐯𝐯2 + 𝛼𝛼3 𝐯𝐯3 = 𝟎𝟎?

```cpp
Linear Independence (cont.)
```

- �� What are the values of 𝛼𝛼1 , 𝛼𝛼2 , and 𝛼𝛼3 if we want 𝛼𝛼1 𝐯𝐯1 + 𝛼𝛼2 𝐯𝐯2 +
𝛼𝛼3 𝐯𝐯3 = 𝟎𝟎?
- �� That is, we want
𝛼𝛼1
0 + 𝛼𝛼2 3 + 𝛼𝛼3 0 = 0
−2
𝛼𝛼1
⟺ 𝛼𝛼2 = 0
𝛼𝛼3
⟺ 𝛼𝛼1 = 𝛼𝛼2 = 𝛼𝛼3 = 0

```cpp
Dimension
```

- ��

```cpp
In a vector space, the maximum number of linearly
independent vectors is fixed and is called the dimension of
the space
```

- ��

```cpp
In an n-dimensional space, any set of n linearly
independent vectors form a basis for the space
```

- ��

```cpp
Given a basis v1, v2, ..., vn, any vector w can be written as
w = a1v1+ a2v2 +….+anvn
where the coefficients {ai } are unique and are called
representations of w with respect to the basis {v1, v2, ..., vn}
A 3-dimensional space can
have 4 linearly independent
vectors?
```

ⓘ Start presenting to display the poll results on this slide.

```cpp
Dimension (cont.)
Let us define a basis 𝐯𝐯1 = 0 , 𝐯𝐯2 = 1 , 𝐯𝐯3 = 0 .
```

- ��

```cpp
Orthonormal basis vectors
The vector 𝐰𝐰 can be written as:
```

𝐰𝐰 = 10.5 𝐯𝐯1 + 21.3 𝐯𝐯2 + 0.9 𝐯𝐯3

```cpp
and the coefficients 𝛼𝛼1 = 10.5, 𝛼𝛼2 = 21.3, and 𝛼𝛼3 = 0.9 are
unique
In a three-dimensional vector
space, we can represent any
vector w uniquely in terms of
any three linearly independent
vectors, v1, v2, and v3
Coordinate Systems
```

- �� Which one is correct?

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

- �� Both are correct, because vectors have no fixed

```cpp
location
Coordinate Systems
```

- �� We need a frame of reference to relate points and

```cpp
objects to our physical world.
o For example, where is a point? We can’t answer
this without a reference system
Coordinate Frame
```

- �� Basis vectors alone cannot represent points
- �� We can add a single point, the origin, to the

```cpp
basis vectors to form a coordinate frame
v2
P0
v1
v3
Coordinate Frame
```

- �� A coordinate system (or coordinate frame) is

```cpp
determined by the origin and the basis vectors
```

𝐏𝐏0 , 𝐯𝐯1 , 𝐯𝐯2 , 𝐯𝐯3
- �� Within this coordinate frame, every vector w can be

```cpp
written as
w = α 1v 1+ α 2v 2 + α 3v 3
Every point can be written as
P = P0 + β1v1+ β2v2 + β3v3
for some 𝛼𝛼1 , 𝛼𝛼2 , 𝛼𝛼3 , and 𝛽𝛽1 , 𝛽𝛽2 , 𝛽𝛽3
Representation in a Coordinate Frame
```

- ��

```cpp
Consider a basis v1, v2, …, vn
```

- ��

```cpp
A vector w is written w = a1v1+ a2v2 +….+anvn
```

- ��

```cpp
The list of scalars {a1, a2, …. an} is the representation of
w with respect to the given basis
```

- ��

```cpp
We can write the representation as a row or column matrix
```

𝜶𝜶 = 𝛼𝛼1
𝛼𝛼2
𝛼𝛼1
𝛼𝛼
⋯ 𝛼𝛼𝑛𝑛 T = 2
⋮
𝛼𝛼𝑛𝑛

```cpp
Coordinate systems (cont.)
For example, let 𝐰𝐰 = 2𝐯𝐯1 + 3𝐯𝐯2 − 4𝐯𝐯3 .
If 𝐯𝐯1 = 1 0 0 T ,
```

𝐯𝐯2 = 0 1 0 T ,

```cpp
and 𝐯𝐯3 = 0 0 1 T ,
then 𝜶𝜶 = 2
```

−4 T

```cpp
Note that this representation is with respect to a particular
basis
Homogeneous Coordinates
```

- �� Consider the point P and the vector v, where

```cpp
P = P0 + β1v1+ β2v2 + β3v3
w = α1v1+ α2v2 + α3v3
```

- �� They appear to have similar representations:

```cpp
P = [β1, β2, β3]T , w =[α1, α2, α3]T which
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
Homogeneous Coordinates
```

- �� The homogeneous coordinate form for a three-dimensional point
𝑥𝑥 𝑦𝑦 𝑧𝑧 T is given as
𝐩𝐩 = 𝑥𝑥
𝑦𝑦
𝑧𝑧
1T
𝑤𝑤𝑥𝑥
𝑤𝑤𝑤𝑤
𝑤𝑤𝑧𝑧
𝑤𝑤 T = 𝑥𝑥𝑥
𝑦𝑦𝑦
𝑧𝑧𝑧
- �� We return to a three-dimensional point (for 𝑤𝑤 ≠ 0) by
𝑥𝑥 ← 𝑥𝑥 ′ /𝑤𝑤
𝑦𝑦 ← 𝑦𝑦 ′ /𝑤𝑤
𝑧𝑧 ← 𝑧𝑧 ′ /𝑤𝑤
𝑤𝑤 T
- �� If 𝑤𝑤 = 0, the representation is that of a vector
- �� Homogeneous coordinates replace points in three dimensions by

```cpp
lines through the origin in four dimensions
```

- �� For 𝑤𝑤 = 1, the representation of a point is 𝑥𝑥
𝑦𝑦
𝑧𝑧
1T

```cpp
Homogeneous Coordinates and Computer
Graphics
```

- �� Homogeneous coordinates are key to all computer

```cpp
graphics systems
```

– All standard transformations (rotation, translation, scaling)

```cpp
can be implemented with matrix multiplications using 4 x 4
matrices
```

– Hardware pipeline works with 4 dimensional representations
– For orthographic viewing, we can maintain w = 0 for

```cpp
vectors and w = 1 for points
```

– For perspective viewing we need a perspective division

```cpp
Change of Coordinate System
```

- �� Let’s consider transformation of two bases
– {v1, v2, v3} and {u1, u2, u3} are two bases.
– Each basis vector in the second set can be

```cpp
represented in terms of the first basis
```

𝐰𝐰

```cpp
The same vector w represented in two
coordinate systems
```

- �� Consider the same vector w with respect to two different coordinate

```cpp
systems having basis vectors 𝐯𝐯1 , 𝐯𝐯2 , 𝐯𝐯3 and 𝐮𝐮1 , 𝐮𝐮2 , 𝐮𝐮3 . Suppose that
```

𝐰𝐰 = 𝛼𝛼1 𝐯𝐯1 + 𝛼𝛼2 𝐯𝐯2 + 𝛼𝛼3 𝐯𝐯3
𝐰𝐰 = 𝛽𝛽1 𝐮𝐮1 + 𝛽𝛽2 𝐮𝐮2 + 𝛽𝛽3 𝐮𝐮3
- �� Then the representations are:
- �� Equivalently,
𝐚𝐚 = 𝛼𝛼1 𝛼𝛼2
𝐛𝐛 = 𝛽𝛽1 𝛽𝛽2
𝛼𝛼3 T
𝛽𝛽3 T
𝐰𝐰 = 𝐚𝐚T v

```cpp
and 𝐰𝐰 = 𝐛𝐛T u
```

𝐯𝐯 = 𝐯𝐯1
𝐮𝐮 = 𝐮𝐮1
𝐯𝐯2
𝐮𝐮2
𝐯𝐯3 T
𝐮𝐮3 T

```cpp
Representing the Second Basis in
Terms of the First (cont.)
```

- �� In this example, we have 𝐰𝐰 = 𝐚𝐚T v and 𝐰𝐰 = 𝐛𝐛T u

```cpp
So
```

- �� With 𝐮𝐮 = 𝐌𝐌𝐯𝐯, we have
𝐚𝐚T v = 𝐛𝐛T u
𝐚𝐚T v = 𝐛𝐛T 𝐌𝐌𝐯𝐯
⇒ 𝐚𝐚 = 𝐌𝐌 T 𝐛𝐛
- �� Thus, 𝐚𝐚 and 𝐛𝐛 are related by 𝐌𝐌 T

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

- �� We can also do all this in coordinate systems:

```cpp
Change of Coordinate Frames
```

- �� We can apply a similar process in homogeneous coordinates

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

- �� Any point or vector can be represented in either coordinate

```cpp
frame.
```

- �� We can represent (Q0, u1, u2, u3) in terms of (P0, v1, v2, v3)

```cpp
Representing One Coordinate Frame in
Terms of the Other
```

- �� We can extend what we did with the change of basis

```cpp
vectors:
```

𝐮𝐮1 = 𝛾𝛾11 𝐯𝐯1 + 𝛾𝛾12 𝐯𝐯2 +𝛾𝛾13 𝐯𝐯3
𝐮𝐮2 = 𝛾𝛾21 𝐯𝐯1 + 𝛾𝛾22 𝐯𝐯2 +𝛾𝛾23 𝐯𝐯3
𝐮𝐮3 = 𝛾𝛾31 𝐯𝐯1 + 𝛾𝛾32 𝐯𝐯2 +𝛾𝛾33 𝐯𝐯3
𝐐𝐐0 = 𝛾𝛾41 𝐯𝐯1 + 𝛾𝛾42 𝐯𝐯2 +𝛾𝛾43 𝐯𝐯3 + 𝐏𝐏0

```cpp
by replacing the 3 × 3 matrix 𝐌𝐌 by a 4 × 4 matrix as follows:
```

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

- �� Within the two coordinate frames any point or vector has a

```cpp
representation of the same form:
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
Further Reading
```

“Interactive Computer Graphics – A Top-Down Approach with

```cpp
Shader-Based OpenGL” by Edward Angel and Dave Shreiner, 6th
Ed, 2012
```

- �� Sec 3.3 Coordinate Systems and Frames
(all subsections)
- �� Sec 3.4 Frames in OpenGL

```cpp
Vector and Affine Spaces
```

- �� Scalar field
– A pair of scalars can be combined to form another scalar
- �� two operations: addition and multiplication
– obey the closure, associativity, commutivity, and inverse

```cpp
properties
```

- �� Vector space
– Contains vectors and scalars
– Vector-scalar and vector-vector interactions
– Euclidean vector space
- �� is an extension of a vector space that adds a measure of size or distance
- �� e.g., length of a line segment
– Affine vector space
- �� Extension of vector space and includes “point”
- �� No point serves as origin, we have displacement vectors and points
- �� Vector-point addition and point-point subtraction are possible
- �� No point-point addition and point-scalar operation are possible


---

## Lecture 008: Coordinate Frame Transformations(1)


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

