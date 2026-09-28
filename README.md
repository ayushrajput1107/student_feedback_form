# Student Feedback Form

A simple and responsive Student Feedback Form built using HTML, CSS, and JavaScript.

## Features

- Student information form
- Course and semester selection
- Subject feedback
- 1-5 rating system
- Teaching quality rating
- Course content rating
- Additional comments
- Anonymous feedback option
- Form validation
- Success message
- Responsive design
- LocalStorage support

## Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage

## Project Structure

student-feedback-form/

├── index.html
├── style.css
├── script.js
└── README.md

## How to Run

1. Download or clone the repository.

2. Open the project folder in VS Code.

3. Open `index.html` in your browser.

You can also use the VS Code Live Server extension.

## Data Storage

Feedback is stored in the browser's LocalStorage.

The stored data can be found using:

```javascript
localStorage.getItem("studentFeedback");
