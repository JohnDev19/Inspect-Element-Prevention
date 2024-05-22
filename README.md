# Inspect Element Prevention

This simple web page prevents users from inspecting elements, or using right-click actions through JavaScript. It displays a popup message when users try to inspect elements or open developer tools.

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Try to use inspect element, right-click, or open developer tools to see the prevention in action.

## How It Works

The JavaScript code in `script.js` detects various actions that users might use to inspect elements or access developer tools. Here's an overview of how each action is handled:

- **Keyboard Shortcuts Detection:** Detects F12 key press, Ctrl+Shift+I, and Ctrl+Shift+C to prevent inspecting elements or opening developer tools.
- **Right-Click Prevention:** Prevents the default context menu when right-clicking on the webpage.

## Structure

- `index.html`: Contains the HTML structure of the webpage, including the popup and overlay elements.
- `style.css`: Contains the styles for the webpage, including the popup appearance and overlay styles.
- `script.js`: Contains the JavaScript code for preventing inspecting elements, right-click actions, and detecting developer tools.

**Note:** While this web page utilizes JavaScript to prevent traditional methods of inspecting elements or accessing developer tools, it's important to note that determined users may still find alternative ways to inspect elements or access developer tools. This code provides a basic level of prevention and may not be foolproof against all inspection methods or tools.

Keep in mind that web browsers and their developer tools are constantly evolving, and new methods may emerge to bypass such restrictions. This code serves as a deterrent but does not guarantee complete prevention of inspection or tool access.

For enhanced security or protection of sensitive content, consider implementing additional measures or consulting with web security experts.

---
