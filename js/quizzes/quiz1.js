const quizData = {
  title: "Week 1 Quiz: Introduction to Computer Graphics",
  timeLimit: 30,
  marksPerQuestion: 2,
  questions: [
    {
      type: "true-false",
      text: "Vector graphics use mathematical equations to define shapes and lines, allowing for perfect scaling without loss of quality.",
      correct: true,
      explanation: "Vector graphics use mathematical equations to define shapes and lines, which allows them to be scaled to any size without loss of quality. This is one of the main advantages of vector graphics over raster graphics."
    },
    {
      type: "multiple-choice",
      text: "Which of the following is NOT a common application of computer graphics?",
      options: [
        "Medical imaging",
        "Weather visualization",
        "Physical book printing",
        "Virtual reality",
        "Augmented reality",
        "Video games",
        "Architectural visualization",
        "Scientific data visualization",
        "Film animation",
        "Web design"
      ],
      correct: 2,
      explanation: "Physical book printing is a traditional printing process that doesn't typically involve computer graphics. Medical imaging, weather visualization, VR/AR, video games, architectural visualization, scientific data visualization, film animation, and web design are all modern applications that heavily rely on computer graphics technology."
    }
  ]
};

export default quizData; 