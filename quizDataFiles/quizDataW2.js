const quizData = {
    title: "Week 2 Quiz: Transformations and Matrices",
    questions: [
        {
            type: "multiple-choice",
            text: "Which of the following is NOT a valid way to represent a point in 3D space?",
            options: [
                "As a 3-component vector (x, y, z)",
                "As a 4-component homogeneous coordinate (x, y, z, w) where w ≠ 0",
                "As a 4-component homogeneous coordinate (x, y, z, 0)",
                "As a position relative to the origin using three coordinates"
            ],
            correctAnswerIndex: 2,
            explanation: "A point cannot have w=0 in homogeneous coordinates. Points must have w≠0 (typically w=1). Vectors, which represent directions rather than positions, use w=0."
        },
        {
            type: "multiple-choice",
            text: "What is the primary advantage of using homogeneous coordinates in computer graphics?",
            options: [
                "They allow translation to be represented as matrix multiplication, making all transformations uniform",
                "They make calculations faster by using fewer dimensions",
                "They eliminate the need for matrices entirely",
                "They convert all coordinates to screen space automatically"
            ],
            correctAnswerIndex: 0,
            explanation: "Homogeneous coordinates allow all transformations (including translation) to be represented as matrix multiplication. Without homogeneous coordinates, translation would require addition rather than multiplication."
        },
        {
            type: "true-false",
            text: "In homogeneous coordinates, multiplying a point's coordinates by any non-zero scalar represents the same point in 3D space after perspective division.",
            correctAnswerIndex: 0,
            explanation: "This is true. In homogeneous coordinates, (x,y,z,w) represents the same point as (kx,ky,kz,kw) for any k≠0 after perspective division (dividing by w). This is why (x,y,z,1) and (2x,2y,2z,2) represent the same point."
        },
        {
            type: "multiple-choice",
            text: "Which statement about vectors in homogeneous coordinates is correct?",
            options: [
                "Vectors are represented with w=0 because they represent directions and are unaffected by translation",
                "Vectors must have w=1 like points",
                "Vectors cannot be represented in homogeneous coordinates",
                "The w component of vectors can be any non-zero value"
            ],
            correctAnswerIndex: 0,
            explanation: "Vectors represent directions and should not be affected by translation. Setting w=0 ensures this because the translation components of a transformation matrix multiply by w, resulting in no translation effect on the vector."
        },
        {
            type: "multiple-choice",
            text: "What is the correct order to multiply transformation matrices to first rotate an object around its center, then translate it?",
            options: [
                "Multiply the translation matrix by the rotation matrix",
                "Multiply the rotation matrix by the translation matrix",
                "The order doesn't matter because matrix multiplication is commutative",
                "Neither order will work; you need a different approach"
            ],
            correctAnswerIndex: 1,
            explanation: "To apply transformations in a specific order, you multiply the matrices in the reverse order. To rotate then translate, you multiply rotation matrix first, then translation matrix (reading right to left: point * rotation * translation)."
        },
        {
            type: "true-false",
            text: "The inverse of a rotation matrix is equal to its transpose.",
            correctAnswerIndex: 0,
            explanation: "This is true for rotation matrices. They are orthogonal matrices, meaning their inverse equals their transpose. This property makes computing inverses of rotation matrices very efficient."
        },
        {
            type: "multiple-choice",
            text: "Which transformation preserves parallel lines and distance ratios but not necessarily angles?",
            options: [
                "Affine transformation",
                "Rigid body transformation",
                "Projection",
                "Rotation"
            ],
            correctAnswerIndex: 0,
            explanation: "Affine transformations preserve parallel lines and ratios of distances along lines, but they may change angles and absolute distances. They include operations like scaling, shearing, rotation, and translation."
        },
        {
            type: "multiple-choice",
            text: "What is the dimension of a transformation matrix that operates on 3D homogeneous coordinates?",
            options: [
                "4x4",
                "3x3",
                "4x3",
                "3x4"
            ],
            correctAnswerIndex: 0,
            explanation: "When using homogeneous coordinates for 3D points (4 components: x,y,z,w), the transformation matrix must be 4x4 to multiply with these coordinates. This allows representation of all necessary 3D transformations including translation."
        },
        {
            type: "true-false",
            text: "A scaling transformation with factors (2,2,2) will double the volume of a 3D object.",
            correctAnswerIndex: 1,
            explanation: "This is false. A scaling of (2,2,2) will multiply the volume by 8, not 2. Volume scales by the product of the scaling factors (2 * 2 * 2 = 8)."
        },
        {
            type: "multiple-choice",
            text: "Which sequence of basic transformations can be used to rotate an object around an arbitrary point P?",
            options: [
                "Translate P to origin, rotate, translate back",
                "Rotate only",
                "Translate only",
                "Scale, then rotate"
            ],
            correctAnswerIndex: 0,
            explanation: "To rotate around an arbitrary point P: 1) Translate P to the origin, 2) Perform the rotation, 3) Translate P back to its original position. This ensures the rotation happens around P rather than the origin."
        },
        {
            type: "multiple-choice",
            text: "What happens when you multiply a point's homogeneous coordinates by a transformation matrix where the bottom row is not (0,0,0,1)?",
            options: [
                "The result may require perspective division (dividing by w) to get the final position",
                "The transformation will not be valid",
                "The point will not move",
                "The w coordinate will always be 1"
            ],
            correctAnswerIndex: 0,
            explanation: "When the bottom row is not (0,0,0,1), the transformation may change the w coordinate. To get the final 3D position, you need to perform perspective division (divide x,y,z by w). This is crucial in projection transformations."
        },
        {
            type: "true-false",
            text: "A pure rotation transformation will always preserve the distance of points from the origin.",
            correctAnswerIndex: 0,
            explanation: "This is true. Rotation is a rigid body transformation that preserves distances and angles. Points maintain their distance from the rotation center (origin for basic rotation matrices)."
        },
        {
            type: "multiple-choice",
            text: "What is the effect of concatenating (multiplying) two rotation matrices?",
            options: [
                "The result is equivalent to performing the rotations in sequence",
                "The rotations cancel each other out",
                "You get back the identity matrix",
                "Rotation matrices cannot be concatenated"
            ],
            correctAnswerIndex: 0,
            explanation: "Multiplying rotation matrices combines their effects, resulting in a single rotation matrix that represents applying the rotations in sequence. The order of multiplication matters because matrix multiplication is not commutative."
        },
        {
            type: "multiple-choice",
            text: "Which transformation matrix will mirror an object across the XY plane?",
            options: [
                "A matrix with -1 scaling in the z component",
                "A rotation matrix of 180 degrees",
                "A translation matrix moving twice the distance",
                "A shear matrix"
            ],
            correctAnswerIndex: 0,
            explanation: "Mirroring across the XY plane means flipping the z coordinate while keeping x and y the same. This is achieved by scaling by -1 in the z direction while leaving x and y unchanged (scale factors of 1)."
        },
        {
            type: "true-false",
            text: "The product of two or more affine transformations is always another affine transformation.",
            correctAnswerIndex: 0,
            explanation: "This is true. Affine transformations are closed under multiplication, meaning when you combine (multiply) any number of affine transformation matrices, the result is always another affine transformation."
        }
    ]
};

export default quizData; 