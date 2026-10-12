# GlobalPulse – Responsive Online News Portal

A clean, multi-page web application project simulating a modern digital news website. Built from scratch using native web technologies to demonstrate core structural layout flow and client-side form interaction.

## 📂 Project Structure
*   `index.html` – The main home dashboard showing news grid feeds and signup widgets.
*   `article.html` – A connected page to view a full news article and leave feedback.
*   `styles.css` – Central stylesheet handling visual aesthetics, flexbox layout, and mobile breakpoints.
*   `script.js` – Foundational JavaScript file managing form events and pop-up notifications.

## 🚀 Core Features
*   **Multi-Page Setup:** Seamless navigation between the main page and article sub-page using basic hyperlinks (`<a>`).
*   **Flexible Responsive Layout:** Built using CSS Flexbox columns that automatically stack vertically on small devices via media queries (`@media`).
*   **JavaScript Form Feedback:** Intercepts page reloads (`preventDefault`), captures user-entered text strings, and returns instant pop-up verification confirmations (`alert()`).

## 🛠️ Tech Stack & Basic Tags Used
*   **HTML5 Semantic Elements:** `<header>`, `<nav>`, `<main>`, `<aside>`, `<form>`, `<footer>`, `<textarea>`.
*   **CSS3 Styling Rules:** `display: flex`, `flex-direction`, `@media (max-width: 768px)`, `:hover`.
*   **JavaScript Hooks:** `document.getElementById().value`, `event.preventDefault()`, `alert()`, `reset()`.

## 💻 How to Run the Project
1. Clone or download all four files into the **same folder** on your computer.
2. Double-click `index.html` to open the home portal dashboard in any web browser.
3. Click "Read Full Article" to jump to the second reading page.
