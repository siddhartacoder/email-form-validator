# Email Form Validator

- A lightweight email form simulator built with vanilla JavaScript, featuring real-time validation, dynamic error handling, and loading states. 

## Live Demo
Coming soon - will be added after Vercel deployment

## How to Run Locally

1. Clone the repository:
```bash
   git clone https://github.com/siddhartacoder/email-form-validator.git
```

2. Open `index.html` in your browser

That's it! No build process required.

## Project Structure
```
email-form-validator/
├── index.html           # Main HTML file
├── js/
│   └── app.js           # Form validation and logic
├── dist/
│   ├── app.css          # Styles
│   └── spinner.css      # Loading animation
└── README.md
```

----

## Preview

### Successful Submission
![Success State](Screenshot-Success.png)

### Validation Errors
![Error State](Screenshot-Error.png)

## Key Features

- Real time validation with instant feedback.
- Dynamic error handling per field.
- Conditional submit button states.
- Loading spinner during form submission.
- Success message with auto-dismiss.
- Input sanitization.
- Email format validation using regex.


## Built With

- JavaScript (ES6+) for core logic and DOM manipulation
- HTML5 for semantic structure
- CSS3 for custom animations and styling

## What I Learned

- Event handling and delegation
- DOM manipulation and dynamic element creation
- Form validation patterns
- Regular expressions for input validation
- State management in vanilla JavaScript

## Future Enhancements

- Integration with real email API
- Input debouncing for better performance
- Internationalization (i18n) support
- Accessibility improvements (ARIA labels)