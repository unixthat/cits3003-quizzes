const quizData = {
    title: "Week 4 Quiz: Coordinate Frames and Transformations",
    questions: [
        {
            type: "multiple-choice",
            text: "What is the primary difference between a point and a vector in computer graphics?",
            options: [
                "Points represent locations in space (w=1), while vectors represent directions or displacements (w=0)",
                "Points can only be used for vertices, while vectors can only be used for normals",
                "Points are always stored in model coordinates, while vectors are in world coordinates",
                "There is no difference; the terms are interchangeable"
            ],
            correctAnswerIndex: 0,
            explanation: "Points and vectors serve different purposes and are treated differently in transformations. Points represent specific locations in space and use w=1 in homogeneous coordinates, allowing them to be translated. Vectors represent directions or displacements and use w=0, making them invariant to translations."
        },
        {
            type: "multiple-choice",
            text: "Which transformation sequence would you use to rotate an object around a point that is not its own center?",
            options: [
                "Translate to origin, rotate, translate back",
                "Just rotate around the desired point directly",
                "Scale, rotate, then translate",
                "Apply the rotation matrix with the desired center point"
            ],
            correctAnswerIndex: 0,
            explanation: "To rotate around an arbitrary point: 1) Translate the object so the rotation point is at the origin, 2) Perform the rotation, 3) Translate back to the original position. This sequence ensures the rotation occurs around the desired point."
        },
        {
            type: "true-false",
            text: "When transforming normal vectors, you should use the transpose of the inverse of the model matrix (the normal matrix) rather than the model matrix directly.",
            correctAnswerIndex: 0,
            explanation: "This is true. Normal vectors must be transformed using the transpose of the inverse of the model matrix to ensure they remain perpendicular to surfaces after non-uniform scaling or other non-orthogonal transformations."
        },
        {
            type: "multiple-choice",
            text: "What is the effect of a shear transformation on parallel lines?",
            options: [
                "Some parallel lines remain parallel while others do not",
                "All parallel lines become perpendicular",
                "All parallel lines remain parallel",
                "All parallel lines become curved"
            ],
            correctAnswerIndex: 2,
            explanation: "A shear transformation is an affine transformation, and one property of affine transformations is that they preserve parallel lines. While angles and distances may change, lines that were parallel before the shear remain parallel after it."
        },
        {
            type: "multiple-choice",
            text: "Which sequence represents the typical order of transformations in the graphics pipeline, from object space to screen space?",
            options: [
                "Model → View → Projection → Perspective Division → Viewport",
                "View → Model → Projection → Viewport → Perspective Division",
                "Projection → View → Model → Perspective Division → Viewport",
                "Model → Projection → View → Viewport → Perspective Division"
            ],
            correctAnswerIndex: 0,
            explanation: "The standard transformation pipeline goes: Model transform (object to world space) → View transform (world to camera space) → Projection transform (camera to clip space) → Perspective Division (clip to NDC) → Viewport transform (NDC to screen space)."
        },
        {
            type: "multiple-choice",
            text: "What is the purpose of the view matrix in the graphics pipeline?",
            options: [
                "To transform vertices from world space to camera space",
                "To transform vertices from object space to world space",
                "To apply perspective projection",
                "To convert coordinates to screen space"
            ],
            correctAnswerIndex: 0,
            explanation: "The view matrix transforms vertices from world space to camera space by effectively moving and rotating the scene so that the camera is at the origin looking down the negative z-axis. This simplifies subsequent projection calculations."
        },
        {
            type: "true-false",
            text: "The order of matrix multiplications matters because matrix multiplication is not commutative.",
            correctAnswerIndex: 0,
            explanation: "This is true. Matrix multiplication is not commutative (A×B ≠ B×A). The order of transformations matters significantly - for example, rotating then translating produces a different result than translating then rotating."
        },
        {
            type: "multiple-choice",
            text: "What is the main advantage of using homogeneous coordinates in computer graphics?",
            options: [
                "They allow all transformations, including translation, to be represented as matrix multiplications",
                "They make calculations faster by reducing the number of dimensions",
                "They automatically handle perspective projection",
                "They simplify rotation calculations"
            ],
            correctAnswerIndex: 0,
            explanation: "Homogeneous coordinates allow all affine transformations (including translation) to be represented as matrix multiplications. Without homogeneous coordinates, translations would require addition rather than multiplication, making the transformation pipeline less uniform."
        },
        {
            type: "multiple-choice",
            text: "Which of the following transformations preserves angles between lines?",
            options: [
                "Rotation",
                "Non-uniform scaling",
                "Shear",
                "Perspective projection"
            ],
            correctAnswerIndex: 0,
            explanation: "Rotation is a rigid body transformation that preserves both distances and angles. Non-uniform scaling can change angles, shear definitely changes angles, and perspective projection intentionally distorts angles to create the illusion of depth."
        },
        {
            type: "multiple-choice",
            text: "What happens to parallel lines under perspective projection?",
            options: [
                "They appear to converge at a vanishing point (if not parallel to the viewing plane)",
                "They always remain parallel",
                "They become perpendicular",
                "They become curved"
            ],
            correctAnswerIndex: 0,
            explanation: "Under perspective projection, parallel lines that are not parallel to the viewing plane appear to converge at a vanishing point. This creates the illusion of depth and is similar to how we perceive parallel lines (like railroad tracks) in the real world."
        },
        {
            type: "true-false",
            text: "A pure rotation transformation will always preserve the distance between any two points in the object.",
            correctAnswerIndex: 0,
            explanation: "This is true. Rotation is a rigid body transformation that preserves distances between all points. It only changes the orientation of the object, not its shape or size."
        },
        {
            type: "multiple-choice",
            text: "Which space are vertices in immediately after the vertex shader but before perspective division?",
            options: [
                "Clip space",
                "World space",
                "Screen space",
                "Object space"
            ],
            correctAnswerIndex: 0,
            explanation: "After the vertex shader applies the model-view-projection transformation but before perspective division, vertices are in clip space. This is a 4D homogeneous coordinate space where the viewing volume is defined by a cube from -w to +w."
        },
        {
            type: "multiple-choice",
            text: "What is the purpose of normalized device coordinates (NDC) in the graphics pipeline?",
            options: [
                "To provide a standardized coordinate system independent of screen resolution",
                "To make all coordinates positive",
                "To eliminate the need for the viewport transformation",
                "To handle perspective projection"
            ],
            correctAnswerIndex: 0,
            explanation: "NDC provides a standardized coordinate system (-1 to +1 in each dimension) that is independent of the final screen resolution. This intermediate space makes it easier to perform clipping and to transform to various output resolutions."
        },
        {
            type: "multiple-choice",
            text: "Which transformation would you use to mirror an object across the XY plane?",
            options: [
                "Scale by (1, 1, -1)",
                "Rotate by 180 degrees around the Z axis",
                "Translate along the Z axis",
                "Apply a shear transformation"
            ],
            correctAnswerIndex: 0,
            explanation: "To mirror an object across the XY plane, you need to negate the Z coordinate while leaving X and Y unchanged. This is achieved by scaling with factors (1, 1, -1), which flips the sign of the Z coordinate."
        },
        {
            type: "true-false",
            text: "The viewport transformation is the final step that converts normalized device coordinates to screen coordinates.",
            correctAnswerIndex: 0,
            explanation: "This is true. The viewport transformation is the final step in the graphics pipeline that maps normalized device coordinates (-1 to +1) to screen coordinates (pixels), taking into account the window size and position."
        }
    ]
};

export default quizData; 