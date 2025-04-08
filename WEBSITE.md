# CITS3003 Course Website

This document describes the website files for the CITS3003 Computer Graphics course.

## Files

- `index.html` - Main website page
  - Contains the HTML structure
  - References CSS and JavaScript files
  - Includes version information
- `styles.css` - CSS styling
  - Defines the visual appearance
  - Ensures responsive design
  - Maintains consistent styling
- `script.js` - JavaScript functionality
  - Handles user interactions
  - Manages quiz display and navigation
  - Processes user input
- `quizData.js` - Quiz data
  - Contains all quiz questions and answers
  - Organized by week and topic
  - Used by script.js to display quizzes

## Version

The current version is 1.0.1, as specified in the file references:
```html
<link rel="stylesheet" href="styles.css?v=1.0.1">
<script type="module" src="quizData.js?v=1.0.1"></script>
<script type="module" src="script.js?v=1.0.1"></script>
```

## Usage

The website provides:
1. Interactive quizzes for self-assessment
2. Access to course materials
3. Navigation between different content sections

## Maintenance

When updating the website:
1. Update the version number in all file references
2. Test the website after changes
3. Ensure compatibility with different browsers
4. Update documentation as needed 