# Code Editor

Aryan Code Editor is a simple and interactive web-based code editor where you can write, edit, and preview HTML, CSS, and JavaScript code in real-time.

## Features

- **Real-time Preview:** As you type your HTML, CSS, and JavaScript code, the output is rendered in real-time within an embedded iframe.
- **Flexible Panels:** You can expand and collapse the HTML, CSS, and JS panels to focus on specific sections of your code.
- **Open in New Tab:** Allows you to open the rendered output in a new browser tab.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the code editor.
- `style.css`: The CSS file that styles the editor and its components.
- `index.js`: The JavaScript file that handles the interaction and dynamic rendering of code.

## How to Use

1. **HTML Panel:** Start by typing your HTML code in the HTML panel. For example, `<h1>Hello World</h1>`.
2. **CSS Panel:** Style your HTML elements by adding CSS code in the CSS panel, e.g., `h1 { color: red; }`.
3. **JavaScript Panel:** Add interactivity by typing JavaScript code in the JS panel, such as `document.querySelector('h1').style.fontSize = '2em';`.
4. **Preview:** The output of your code will be displayed in real-time in the output area below the code editor.
5. **Expand/Collapse Panels:** Use the icons in the header of each panel to expand or collapse that particular panel.
6. **Open in New Tab:** Click the "Open in NewTab" button to view your code’s output in a new browser tab.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the web page and editor.
- **JavaScript**: For handling dynamic interactions and real-time updates.

## Installation

No installation is required. Just clone or download the repository and open `index.html` in your web browser.

## How It Works

- **Real-time Code Rendering**: The JavaScript code captures the input from the HTML, CSS, and JS panels, and dynamically injects the combined code into an iframe for real-time preview.
- **Panel Controls**: The JavaScript controls the expansion and collapsing of the code panels, allowing you to focus on the section you are currently working on.

## Live Demo
click here to see the live demo https://aryankumar231.github.io/aryan-code-editor/
