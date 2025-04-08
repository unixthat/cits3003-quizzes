# CITS3003 Computer Graphics Quiz Application

An interactive web-based quiz application for CITS3003 Computer Graphics course.

## Project Structure

```
.
├── content/               # Source content
│   ├── quizzes/          # Quiz content in markdown
│   │   ├── quiz1/       # Quiz 1 content
│   │   ├── quiz2/       # Quiz 2 content
│   │   └── ...
│   └── source/          # Other source materials
├── index.html           # Main web application
├── styles.css          # Application styles
└── script.js           # Application logic
```

## Features

- Interactive quiz interface
- True/False and Multiple Choice questions
- Immediate feedback on answers
- Detailed explanations for each question
- Progress tracking
- Score calculation

## Development

The application is built with vanilla JavaScript and doesn't require any build steps. Simply open `index.html` in a web browser to run the application.

## Content Management

Quiz content is stored in markdown files under the `content/quizzes` directory. Each quiz has its own directory containing:
- `questions/quizN.md`: Quiz questions
- `answers/quizN.md`: Quiz answers and explanations

## License

This project is for educational purposes only.
