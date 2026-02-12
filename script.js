// Updated script.js

// Function to handle CSS rendering properly
function renderCSS() {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
        /* Your CSS rules here */
    `;
    document.head.appendChild(styleSheet);
}

// Function to enable interactive code editing
function enableCodeEditing() {
    const codeEditor = document.getElementById('code-editor');
    codeEditor.addEventListener('input', (event) => {
        // Update the rendered output based on code changes
        renderOutput(event.target.value);
    });
}

// Function to render visual results of non-visual code
function renderOutput(code) {
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = code;
}

// Initialize the script
document.addEventListener('DOMContentLoaded', () => {
    renderCSS();
    enableCodeEditing();
});