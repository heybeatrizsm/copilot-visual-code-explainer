/**
 * Copilot Visual Code Explainer
 * A beginner-friendly web application for explaining code with visual demonstrations
 * Supports: HTML, CSS, JavaScript, JSON, and Fetch/API code
 * 
 * This application uses modular architecture ready for Copilot CLI API integration
 */

// ==================== LANGUAGE TRANSLATIONS ====================
const translations = {
    en: {
        // Navigation
        appTitle: 'Copilot Visual Code Explainer',
        enterYourCode: 'Enter Your Code',
        
        // Sections
        theCode: 'The Code',
        function: 'Function',
        whatHappened: 'What Happened',
        tips: 'Tips',
        tryItYourself: 'Try it Yourself',
        visualResult: 'Visual Result',
        
        // Buttons
        explainCode: 'Explain Code',
        explain: 'Explain',
        
        // Messages
        analyzingCode: 'Analyzing your code...',
        placeholderText: 'Paste HTML, CSS, JavaScript, JSON or API code below',
        errorTitle: 'Error',
        
        // Error messages
        emptyCodeError: 'Please paste some code to analyze.',
        invalidCodeError: 'The code could not be analyzed. Please check the syntax.',
        
        // Generic explanations
        noCodeDetected: 'No recognized code patterns were detected.',
    },
    es: {
        // Navegación
        appTitle: 'Explicador Visual de Código Copilot',
        enterYourCode: 'Ingresa Tu Código',
        
        // Secciones
        theCode: 'El Código',
        function: 'Función',
        whatHappened: 'Qué Sucedió',
        tips: 'Consejos',
        tryItYourself: 'Pruébalo Tú Mismo',
        visualResult: 'Resultado Visual',
        
        // Botones
        explainCode: 'Explicar Código',
        explain: 'Explicar',
        
        // Mensajes
        analyzingCode: 'Analizando tu código...',
        placeholderText: 'Pega código HTML, CSS, JavaScript, JSON o API aquí',
        errorTitle: 'Error',
        
        // Error messages
        emptyCodeError: 'Por favor, pega algo de código para analizar.',
        invalidCodeError: 'El código no pudo ser analizado. Por favor, verifica la sintaxis.',
        
        // Generic explanations
        noCodeDetected: 'No se detectaron patrones de código reconocidos.',
    }
};

// ==================== COMPREHENSIVE CODE EXPLANATIONS ====================
const explanations = {
    en: {
        // ===== CSS PROPERTIES =====
        cssBackgroundColor: {
            function: 'The background-color property in CSS is used to set the background color of a specific HTML element. It defines a color behind the content, padding, and border of an element. The default value is transparent, which allows you to see the background of the underlying element or page.',
            whatHappened: 'You\'ve applied a background color to an HTML element. This color fills the entire background area of that element, behind any text or content inside it.',
            tips: [
                'Ensure sufficient contrast between the background-color and the text color to ensure accessibility.',
                'If you use background images (background-image), define a background-color as a fallback in case the image does not load.',
                'You can use color names (red, blue), hex codes (#FF5733), or RGB values (rgb(255, 87, 51)).',
                'The background-color property is inherited by child elements unless overridden.'
            ],
            tryItExample: `div {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
}`,
            tryItHtml: '<div style="background-color: #3498db; color: white; padding: 20px; border-radius: 8px;">Hello World!</div>'
        },
        cssColor: {
            function: 'The color property in CSS sets the text color of an element. It applies to all text content within the element and its children unless overridden. This is one of the most commonly used CSS properties for styling text.',
            whatHappened: 'You\'ve changed the color of the text within the selected HTML element. All text inside this element will now display in the specified color.',
            tips: [
                'Use color names (red, blue), hex codes (#FF5733), or RGB values (rgb(255, 87, 51)).',
                'Ensure the text color has enough contrast with the background for readability.',
                'The color property is inherited by child elements.',
                'Use color to highlight important text or create visual hierarchy.'
            ],
            tryItExample: `p {
    color: #e74c3c;
    font-size: 16px;
}`,
            tryItHtml: '<p style="color: #e74c3c; font-size: 16px;">This text is red!</p>'
        },
        cssFontSize: {
            function: 'The font-size property in CSS controls the size of text. It can be specified in pixels (px), em units (em), percentages (%), or other CSS units. This property is essential for creating readable and visually appealing text.',
            whatHappened: 'You\'ve changed the size of text in the selected element. The text will now be displayed in the specified size.',
            tips: [
                'Use px for fixed sizes, em for relative sizes, or percentages for responsive sizing.',
                'A good base font size for body text is typically 16px.',
                'Larger font sizes improve readability but may take up more space.',
                'Consider using relative units (em or %) for better accessibility.'
            ],
            tryItExample: `h1 {
    font-size: 32px;
    font-weight: bold;
}`,
            tryItHtml: '<h1 style="font-size: 32px; font-weight: bold;">This is a large heading</h1>'
        },
        cssTextWrap: {
            function: 'The text-wrap property in CSS controls how text wraps within its container. It determines whether text should break to the next line or be kept on a single line. This is useful for controlling the layout of long text content.',
            whatHappened: 'You\'ve set how text should wrap within its container. This affects how long lines of text are handled when they exceed the width of their container.',
            tips: [
                'text-wrap: wrap - Text breaks into multiple lines (default behavior).',
                'text-wrap: nowrap - Text stays on one line and may overflow.',
                'text-wrap: balance - Distributes text evenly across lines (better for headings).',
                'Use white-space property together with text-wrap for more control.'
            ],
            tryItExample: `p {
    text-wrap: wrap;
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
}`,
            tryItHtml: '<p style="text-wrap: wrap; width: 300px; border: 1px solid #ccc; padding: 10px;">This is a long line of text that will wrap within the container to multiple lines as needed.</p>'
        },
        cssPadding: {
            function: 'The padding property in CSS creates space inside an element, between the content and the border. It adds internal spacing to push content away from the edges of the element.',
            whatHappened: 'You\'ve added internal spacing to an element. This creates space between the content and the element\'s border or edge.',
            tips: [
                'padding: 10px - All sides get 10px padding.',
                'padding: 10px 20px - Top/bottom 10px, left/right 20px.',
                'padding: 10px 20px 15px 5px - Top, right, bottom, left.',
                'Padding is inside the element; margin is outside.'
            ],
            tryItExample: `div {
    padding: 20px;
    background-color: #e8f4f8;
    border: 1px solid #3498db;
    border-radius: 8px;
}`,
            tryItHtml: '<div style="padding: 20px; background-color: #e8f4f8; border: 1px solid #3498db; border-radius: 8px;">This content has padding inside the box</div>'
        },
        cssMargin: {
            function: 'The margin property in CSS creates space outside an element, around its border. It adds external spacing between the element and other elements or the page edge.',
            whatHappened: 'You\'ve added external spacing around an element. This creates distance between this element and other elements on the page.',
            tips: [
                'margin: 10px - All sides get 10px margin.',
                'margin: 10px 20px - Top/bottom 10px, left/right 20px.',
                'margin: auto - Centers the element horizontally.',
                'Margin can be negative to overlap elements.'
            ],
            tryItExample: `div {
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 2px solid #333;
}`,
            tryItHtml: '<div style="margin: 20px; padding: 20px; background-color: #f0f0f0; border: 2px solid #333;">This box has external spacing (margin)</div>'
        },
        cssDisplay: {
            function: 'The display property in CSS controls how an element is rendered on the page. Common values are block, inline, inline-block, flex, grid, and none. This is one of the most important CSS properties.',
            whatHappened: 'You\'ve changed how this element is displayed and positioned relative to other elements on the page.',
            tips: [
                'display: block - Element takes full width, starts on new line.',
                'display: inline - Element only takes needed width, flows with text.',
                'display: inline-block - Behaves like inline but respects width/height.',
                'display: flex - Creates flexible layout container.',
                'display: grid - Creates grid layout container.',
                'display: none - Hides element completely (different from visibility: hidden).'
            ],
            tryItExample: `div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #3498db;
    color: white;
}`,
            tryItHtml: '<div style="display: flex; justify-content: center; align-items: center; height: 200px; background-color: #3498db; color: white;">Centered content using flexbox</div>'
        },
        cssBorderRadius: {
            function: 'The border-radius property in CSS rounds the corners of an element\'s border. It can create slightly rounded corners or fully circular shapes depending on the values used.',
            whatHappened: 'You\'ve rounded the corners of an element. This creates a softer, more modern appearance compared to sharp corners.',
            tips: [
                'border-radius: 8px - All corners rounded equally.',
                'border-radius: 50% - Creates a perfect circle (if element is square).',
                'border-radius: 10px 20px 30px 40px - Different radius for each corner.',
                'Use with background-color or border for best effect.'
            ],
            tryItExample: `div {
    border-radius: 12px;
    padding: 20px;
    background-color: #9b59b6;
    color: white;
    text-align: center;
}`,
            tryItHtml: '<div style="border-radius: 12px; padding: 20px; background-color: #9b59b6; color: white; text-align: center;">This box has rounded corners</div>'
        },
        cssOpacity: {
            function: 'The opacity property in CSS controls the transparency of an element. Values range from 0 (completely transparent/invisible) to 1 (completely opaque/visible).',
            whatHappened: 'You\'ve changed the transparency of an element. The element is now either more see-through or more solid depending on the opacity value.',
            tips: [
                'opacity: 0 - Element is invisible but still takes up space.',
                'opacity: 0.5 - Element is 50% transparent.',
                'opacity: 1 - Element is fully opaque (default).',
                'Opacity affects the entire element and all its children.'
            ],
            tryItExample: `div {
    opacity: 0.7;
    padding: 20px;
    background-color: #e74c3c;
    color: white;
}`,
            tryItHtml: '<div style="opacity: 0.7; padding: 20px; background-color: #e74c3c; color: white;">This element is 70% opaque (30% transparent)</div>'
        },
        cssWidth: {
            function: 'The width property in CSS sets the width of an element. It can be specified in pixels (px), percentages (%), em units, or other CSS units.',
            whatHappened: 'You\'ve set the width of an element. The element will now be displayed with the specified width.',
            tips: [
                'width: 300px - Fixed width of 300 pixels.',
                'width: 50% - Half the width of the parent container.',
                'width: auto - Browser calculates the width automatically.',
                'max-width and min-width can be used to set limits.'
            ],
            tryItExample: `div {
    width: 80%;
    padding: 20px;
    background-color: #2ecc71;
    color: white;
    margin: 0 auto;
}`,
            tryItHtml: '<div style="width: 80%; padding: 20px; background-color: #2ecc71; color: white; margin: 0 auto;">This element is 80% of the container width</div>'
        },
        cssHeight: {
            function: 'The height property in CSS sets the height of an element. It can be specified in pixels (px), percentages (%), em units, or other CSS units.',
            whatHappened: 'You\'ve set the height of an element. The element will now be displayed with the specified height.',
            tips: [
                'height: 200px - Fixed height of 200 pixels.',
                'height: 50vh - Half the viewport height.',
                'height: auto - Browser calculates the height based on content.',
                'min-height and max-height can be used to set limits.'
            ],
            tryItExample: `div {
    height: 150px;
    padding: 20px;
    background-color: #f39c12;
    color: white;
    display: flex;
    align-items: center;
}`,
            tryItHtml: '<div style="height: 150px; padding: 20px; background-color: #f39c12; color: white; display: flex; align-items: center;">This element has a fixed height</div>'
        },

        // ===== HTML ELEMENTS =====
        htmlButton: {
            function: 'The <button> element creates a clickable button that users can interact with. By default, buttons are used to submit forms or trigger JavaScript actions. Buttons are accessible and keyboard-friendly by default.',
            whatHappened: 'You\'ve created an interactive button. Users can click it to trigger an action or submit a form. The button is ready for JavaScript event handlers.',
            tips: [
                'Always provide descriptive text inside the button to tell users what it does.',
                'Use the "type" attribute to specify button behavior: type="button", type="submit", or type="reset".',
                'Style buttons with CSS to match your design.',
                'Make sure buttons are easily clickable on mobile devices.',
                'Use aria-label for accessibility if the button text is unclear.'
            ],
            tryItExample: `<button onclick="alert('Button clicked!')">Click Me</button>`,
            tryItHtml: '<button style="padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;" onclick="alert(\'Button clicked!\')">Click Me</button>'
        },
        htmlDiv: {
            function: 'The <div> element is a container used to group other HTML elements. It has no special semantic meaning and is used for layout and styling purposes. Divs are one of the most commonly used elements in web development.',
            whatHappened: 'You\'ve created a container element that can hold other content. You can style it with CSS and organize your page layout with divs.',
            tips: [
                'Use <div> for generic grouping of content.',
                'For semantic content, consider using <section>, <article>, or <nav> instead.',
                'Divs are block-level elements by default, taking full width.',
                'You can nest divs inside other divs for complex layouts.'
            ],
            tryItExample: `<div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px;">
    <p>This is content inside a div</p>
</div>`,
            tryItHtml: '<div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px;"><p>This is content inside a div</p></div>'
        },
        htmlParagraph: {
            function: 'The <p> element defines a paragraph of text. It is used to group related sentences and is one of the most basic HTML elements. Browsers automatically add margin around paragraphs.',
            whatHappened: 'You\'ve created a paragraph element. Text inside this element will be displayed as a block of text with margins above and below it.',
            tips: [
                'Use <p> for regular text content.',
                'Each <p> creates a new paragraph with spacing.',
                'Paragraphs should contain complete thoughts or sentences.',
                'Style paragraphs with CSS for consistent text appearance.'
            ],
            tryItExample: `<p>This is a paragraph of text. It contains related information and is displayed as a block element with spacing above and below.</p>`,
            tryItHtml: '<p style="font-size: 16px; line-height: 1.6;">This is a paragraph of text. It contains related information and is displayed as a block element with spacing above and below.</p>'
        },
        htmlHeading: {
            function: 'HTML heading elements (<h1> through <h6>) are used to define headings and subheadings on a page. <h1> is the largest and most important, while <h6> is the smallest. Headings help structure content and improve accessibility.',
            whatHappened: 'You\'ve created a heading element. This text will be displayed as a heading with larger text and bold styling by default.',
            tips: [
                'Use only one <h1> per page for the main title.',
                'Use headings in a logical hierarchy (h1, then h2, then h3, etc.).',
                'Headings improve SEO and accessibility.',
                'Don\'t skip heading levels (e.g., don\'t go from h1 directly to h3).'
            ],
            tryItExample: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>`,
            tryItHtml: '<div><h1 style="font-size: 28px; margin: 10px 0;">Main Heading</h1><h2 style="font-size: 22px; margin: 10px 0;">Subheading</h2><h3 style="font-size: 18px; margin: 10px 0;">Sub-subheading</h3></div>'
        },

        // ===== JAVASCRIPT BASICS =====
        jsEventListener: {
            function: 'addEventListener() is a JavaScript method that attaches an event handler to an element. It listens for specific events (like clicks, typing, etc.) and executes code when the event occurs. This is the modern way to handle events in JavaScript.',
            whatHappened: 'You\'ve set up a listener that watches for an event on an element. When the event happens, the code inside the function will run.',
            tips: [
                'Common events include: click, mouseover, keydown, submit, change, input.',
                'You can attach multiple listeners to the same element.',
                'The event parameter gives you information about what happened.',
                'Use removeEventListener() to stop listening for an event.',
                'addEventListener is better than onclick because it allows multiple listeners.'
            ],
            tryItExample: `const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('You clicked the button!');
});`,
            tryItHtml: '<button style="padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="alert(\'You clicked the button!\')">Click me to see the event!</button>'
        },
        jsQuerySelector: {
            function: 'document.querySelector() is a JavaScript method that finds and returns the first element in the DOM that matches a specified CSS selector. This is a powerful way to select elements from your HTML page.',
            whatHappened: 'You\'ve selected an HTML element from the page using a CSS selector. This element is now stored in a variable so you can manipulate it.',
            tips: [
                'Use CSS selectors: .class, #id, tag, [attribute], etc.',
                'querySelector() returns only the first matching element.',
                'Use querySelectorAll() to get all matching elements.',
                'Store the result in a variable to reuse it multiple times.',
                'Return value is null if no element is found.'
            ],
            tryItExample: `const heading = document.querySelector('h1');
heading.textContent = 'New heading text';`,
            tryItHtml: '<h1 id="demo">Original text</h1><script>document.querySelector("h1").textContent = "New heading text";</script>'
        },
        jsInnerHTML: {
            function: 'innerHTML is a JavaScript property that gets or sets the HTML content inside an element. It allows you to add, remove, or change HTML elements dynamically. This is powerful but must be used carefully for security.',
            whatHappened: 'You\'ve changed the HTML content inside an element. The new content replaces what was there before.',
            tips: [
                'innerHTML parses HTML strings, so you can add complex content.',
                'Use textContent for plain text without HTML parsing (more secure).',
                'Be careful with user input when using innerHTML (security risk).',
                'innerHTML overwrites all existing content inside the element.',
                'Avoid using innerHTML with untrusted data.'
            ],
            tryItExample: `const div = document.querySelector('div');
div.innerHTML = '<p>This is <strong>new content</strong></p>';`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>document.getElementById("demo").innerHTML = "<p>This is <strong>new content</strong></p>";</script>'
        },
        jsTextContent: {
            function: 'textContent is a JavaScript property that gets or sets the text content of an element. Unlike innerHTML, it treats the input as plain text, not HTML. This makes it safer for user input.',
            whatHappened: 'You\'ve changed the text content inside an element. The new text replaces what was there before.',
            tips: [
                'textContent is safer than innerHTML when dealing with user input.',
                'textContent ignores HTML tags and displays them as plain text.',
                'Performance is slightly better with textContent than innerHTML.',
                'Use textContent for displaying plain text, innerHTML for HTML content.'
            ],
            tryItExample: `const paragraph = document.querySelector('p');
paragraph.textContent = 'This is new text content';`,
            tryItHtml: '<p id="demo" style="font-size: 16px;">Original text</p><script>document.getElementById("demo").textContent = "This is new text content";</script>'
        },
        jsIfStatement: {
            function: 'An if statement in JavaScript checks if a condition is true, and if so, executes a block of code. You can also use else or else if for additional conditions. This is fundamental to controlling program flow.',
            whatHappened: 'You\'ve created conditional logic that makes decisions based on whether conditions are true or false. Different code runs depending on the outcome.',
            tips: [
                'Use === for strict equality comparison (recommended).',
                'Use == for loose equality (not recommended).',
                'Use && for AND, || for OR, ! for NOT.',
                'Always use curly braces {} even for single-statement blocks.',
                'Conditions can check values, functions, or complex logic.'
            ],
            tryItExample: `const age = 18;
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>const age = 18; const result = age >= 18 ? "You are an adult" : "You are a minor"; document.getElementById("demo").textContent = result;</script>'
        },
        jsVariable: {
            function: 'Variables in JavaScript store data values. You can declare variables using const, let, or var. const and let are preferred in modern JavaScript. Variables can hold strings, numbers, objects, arrays, and more.',
            whatHappened: 'You\'ve created a variable that stores a value. You can now use this variable throughout your code to access or modify the stored value.',
            tips: [
                'Use const by default for variables that don\'t change.',
                'Use let for variables that need to change.',
                'Avoid var in modern JavaScript; use const or let instead.',
                'Variable names should be descriptive and use camelCase.',
                'Variables are scoped to the block they\'re declared in (with let and const).'
            ],
            tryItExample: `const name = 'John';
const age = 30;
const city = 'New York';
console.log(name, age, city);`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>const name = "John"; const age = 30; const city = "New York"; document.getElementById("demo").textContent = `Name: ${name}, Age: ${age}, City: ${city}`;</script>'
        },

        // ===== JSON =====
        jsonBasic: {
            function: 'JSON (JavaScript Object Notation) is a format for storing and exchanging data. It uses key-value pairs enclosed in curly braces and arrays enclosed in square brackets. JSON is language-independent and widely used in web APIs.',
            whatHappened: 'You\'ve created a JSON structure to organize and store data. This data can be easily read, modified, and sent between different systems.',
            tips: [
                'JSON keys must be strings enclosed in double quotes.',
                'Values can be: strings, numbers, booleans, null, objects, or arrays.',
                'JSON is language-independent and widely used in web APIs.',
                'Use JSON.parse() to convert JSON strings to JavaScript objects.',
                'Use JSON.stringify() to convert JavaScript objects to JSON strings.'
            ],
            tryItExample: `{
  "name": "John",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "gaming", "coding"]
}`,
            tryItHtml: '<pre style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; overflow-x: auto;">{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}</pre>'
        },

        // ===== FETCH/API =====
        fetchAPI: {
            function: 'The fetch() API is a JavaScript method for making HTTP requests to retrieve data from a server or API. It returns a Promise that resolves with the response. This is the modern way to make HTTP requests in JavaScript.',
            whatHappened: 'You\'ve initiated a request to fetch data from a server. Once the data arrives, you can process it and use it in your application.',
            tips: [
                'fetch() returns a Promise, use .then() or async/await to handle the response.',
                'Always check the response status (.ok) before using the data.',
                'Convert the response to JSON using .json() method.',
                'Handle errors with .catch() to manage failed requests gracefully.',
                'Use async/await syntax for cleaner code.'
            ],
            tryItExample: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>Fetching data from server...</p><p style="margin-top: 10px; color: #666;">Check the browser console for the result</p></div>'
        },

        // ===== GENERIC PATTERNS =====
        genericCSS: {
            function: 'This is CSS code that styles HTML elements. CSS (Cascading Style Sheets) controls the appearance of web pages, including colors, fonts, spacing, and layout.',
            whatHappened: 'You\'ve written CSS to style elements on your page. These styles will affect how the selected HTML elements appear visually.',
            tips: [
                'CSS uses selectors to target HTML elements.',
                'Properties are separated from values by a colon (:).',
                'Multiple properties are separated by semicolons (;).',
                'Styles cascade - more specific selectors override general ones.'
            ],
            tryItExample: `/* Example CSS styling */
element {
    property: value;
    property: value;
}`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>CSS styling applied to HTML elements</p></div>'
        },
        genericHTML: {
            function: 'This is HTML (Hypertext Markup Language) code that defines the structure and content of a web page. HTML elements are the building blocks of all websites.',
            whatHappened: 'You\'ve created HTML structure. This will form the foundation of your web page, containing text, buttons, images, and other content.',
            tips: [
                'HTML uses tags enclosed in angle brackets < >.',
                'Most tags come in pairs: opening tag and closing tag.',
                'HTML provides semantic meaning to web content.',
                'Combine HTML with CSS for styling and JavaScript for interactivity.'
            ],
            tryItExample: `<div>
    <h1>Title</h1>
    <p>Content goes here</p>
</div>`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><h1 style="font-size: 20px; margin: 0 0 10px 0;">Title</h1><p>Content goes here</p></div>'
        },
        genericJavaScript: {
            function: 'This is JavaScript code that adds interactivity and dynamic behavior to web pages. JavaScript runs in the browser and can respond to user actions, modify HTML, and communicate with servers.',
            whatHappened: 'You\'ve written JavaScript code that adds functionality to your web page. This code can handle user interactions and manipulate page content.',
            tips: [
                'JavaScript runs in the browser on the user\'s computer.',
                'JavaScript can respond to user events like clicks and typing.',
                'JavaScript can modify HTML and CSS dynamically.',
                'Always handle errors gracefully in your JavaScript code.'
            ],
            tryItExample: `// JavaScript code example
console.log('Hello World');
const element = document.querySelector('element');
element.style.color = 'red';`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>JavaScript is running. Check browser console for output.</p></div>'
        }
    },
    es: {
        // ===== CSS PROPERTIES (SPANISH) =====
        cssBackgroundColor: {
            function: 'La propiedad background-color en CSS se utiliza para establecer el color de fondo de un elemento HTML específico. Define un color detrás del contenido, relleno y borde de un elemento. El valor predeterminado es transparente.',
            whatHappened: 'Has aplicado un color de fondo a un elemento HTML. Este color llena toda el área de fondo de ese elemento, detrás de cualquier texto o contenido dentro de él.',
            tips: [
                'Asegúrate de que haya suficiente contraste entre el color de fondo y el color del texto.',
                'Si usas imágenes de fondo (background-image), define un background-color como alternativa.',
                'Puedes usar nombres de colores (red, blue), códigos hexadecimales (#FF5733) o valores RGB.',
                'La propiedad background-color es heredada por elementos secundarios a menos que se anule.'
            ],
            tryItExample: `div {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
}`,
            tryItHtml: '<div style="background-color: #3498db; color: white; padding: 20px; border-radius: 8px;">¡Hola Mundo!</div>'
        },
        cssColor: {
            function: 'La propiedad color en CSS establece el color del texto de un elemento. Se aplica a todo el contenido de texto dentro del elemento y sus elementos secundarios a menos que se anule.',
            whatHappened: 'Has cambiado el color del texto dentro del elemento HTML seleccionado. Todo el texto dentro de este elemento se mostrará ahora en el color especificado.',
            tips: [
                'Usa nombres de colores (red, blue), códigos hexadecimales (#FF5733) o valores RGB.',
                'Asegúrate de que el color del texto tenga suficiente contraste con el fondo.',
                'La propiedad color es heredada por elementos secundarios.',
                'Usa el color para resaltar texto importante o crear jerarquía visual.'
            ],
            tryItExample: `p {
    color: #e74c3c;
    font-size: 16px;
}`,
            tryItHtml: '<p style="color: #e74c3c; font-size: 16px;">¡Este texto es rojo!</p>'
        },
        cssFontSize: {
            function: 'La propiedad font-size en CSS controla el tamaño del texto. Se puede especificar en píxeles (px), unidades em, porcentajes (%) u otras unidades CSS.',
            whatHappened: 'Has cambiado el tamaño del texto en el elemento seleccionado. El texto ahora se mostrará en el tamaño especificado.',
            tips: [
                'Usa px para tamaños fijos, em para tamaños relativos, o porcentajes para tamaño responsivo.',
                'Un buen tamaño de fuente base para el texto del cuerpo es típicamente 16px.',
                'Los tamaños de fuente más grandes mejoran la legibilidad pero pueden ocupar más espacio.',
                'Considera usar unidades relativas (em o %) para mejor accesibilidad.'
            ],
            tryItExample: `h1 {
    font-size: 32px;
    font-weight: bold;
}`,
            tryItHtml: '<h1 style="font-size: 32px; font-weight: bold;">Este es un título grande</h1>'
        },
        cssTextWrap: {
            function: 'La propiedad text-wrap en CSS controla cómo se ajusta el texto dentro de su contenedor. Determina si el texto debe romper a la siguiente línea o mantenerse en una sola línea.',
            whatHappened: 'Has establecido cómo debe ajustarse el texto dentro de su contenedor. Esto afecta cómo se manejan las líneas largas de texto cuando exceden el ancho de su contenedor.',
            tips: [
                'text-wrap: wrap - El texto se divide en múltiples líneas (comportamiento predeterminado).',
                'text-wrap: nowrap - El texto permanece en una línea y puede desbordarse.',
                'text-wrap: balance - Distribuye el texto uniformemente entre líneas (mejor para encabezados).',
                'Usa la propiedad white-space junto con text-wrap para más control.'
            ],
            tryItExample: `p {
    text-wrap: wrap;
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
}`,
            tryItHtml: '<p style="text-wrap: wrap; width: 300px; border: 1px solid #ccc; padding: 10px;">Este es una línea larga de texto que se ajustará dentro del contenedor en múltiples líneas según sea necesario.</p>'
        },
        cssPadding: {
            function: 'La propiedad padding en CSS crea espacio dentro de un elemento, entre el contenido y el borde. Añade espaciado interno para empujar el contenido lejos de los bordes del elemento.',
            whatHappened: 'Has añadido espaciado interno a un elemento. Esto crea espacio entre el contenido y el borde del elemento.',
            tips: [
                'padding: 10px - Todos los lados obtienen 10px de relleno.',
                'padding: 10px 20px - Arriba/abajo 10px, izquierda/derecha 20px.',
                'padding: 10px 20px 15px 5px - Arriba, derecha, abajo, izquierda.',
                'El relleno está dentro del elemento; el margen está fuera.'
            ],
            tryItExample: `div {
    padding: 20px;
    background-color: #e8f4f8;
    border: 1px solid #3498db;
    border-radius: 8px;
}`,
            tryItHtml: '<div style="padding: 20px; background-color: #e8f4f8; border: 1px solid #3498db; border-radius: 8px;">Este contenido tiene relleno dentro de la caja</div>'
        },
        cssMargin: {
            function: 'La propiedad margin en CSS crea espacio fuera de un elemento, alrededor de su borde. Añade espaciado externo entre el elemento y otros elementos o el borde de la página.',
            whatHappened: 'Has añadido espaciado externo alrededor de un elemento. Esto crea distancia entre este elemento y otros elementos de la página.',
            tips: [
                'margin: 10px - Todos los lados obtienen 10px de margen.',
                'margin: 10px 20px - Arriba/abajo 10px, izquierda/derecha 20px.',
                'margin: auto - Centra el elemento horizontalmente.',
                'El margen puede ser negativo para superponer elementos.'
            ],
            tryItExample: `div {
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 2px solid #333;
}`,
            tryItHtml: '<div style="margin: 20px; padding: 20px; background-color: #f0f0f0; border: 2px solid #333;">Esta caja tiene espaciado externo (margen)</div>'
        },
        cssDisplay: {
            function: 'La propiedad display en CSS controla cómo se representa un elemento en la página. Los valores comunes son block, inline, inline-block, flex, grid y none.',
            whatHappened: 'Has cambiado cómo se muestra este elemento y se posiciona en relación con otros elementos de la página.',
            tips: [
                'display: block - El elemento ocupa el ancho completo, comienza en una nueva línea.',
                'display: inline - El elemento solo ocupa el ancho necesario, fluye con el texto.',
                'display: inline-block - Se comporta como inline pero respeta ancho/alto.',
                'display: flex - Crea un contenedor de diseño flexible.',
                'display: grid - Crea un contenedor de diseño de cuadrícula.',
                'display: none - Oculta el elemento por completo.'
            ],
            tryItExample: `div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #3498db;
    color: white;
}`,
            tryItHtml: '<div style="display: flex; justify-content: center; align-items: center; height: 200px; background-color: #3498db; color: white;">Contenido centrado usando flexbox</div>'
        },
        cssBorderRadius: {
            function: 'La propiedad border-radius en CSS redondea las esquinas del borde de un elemento. Puede crear esquinas ligeramente redondeadas o formas completamente circulares dependiendo de los valores utilizados.',
            whatHappened: 'Has redondeado las esquinas de un elemento. Esto crea una apariencia más suave y moderna en comparación con las esquinas afiladas.',
            tips: [
                'border-radius: 8px - Todas las esquinas redondeadas por igual.',
                'border-radius: 50% - Crea un círculo perfecto (si el elemento es cuadrado).',
                'border-radius: 10px 20px 30px 40px - Radio diferente para cada esquina.',
                'Usa con background-color o border para mejor efecto.'
            ],
            tryItExample: `div {
    border-radius: 12px;
    padding: 20px;
    background-color: #9b59b6;
    color: white;
    text-align: center;
}`,
            tryItHtml: '<div style="border-radius: 12px; padding: 20px; background-color: #9b59b6; color: white; text-align: center;">Esta caja tiene esquinas redondeadas</div>'
        },
        cssOpacity: {
            function: 'La propiedad opacity en CSS controla la transparencia de un elemento. Los valores van de 0 (completamente transparente/invisible) a 1 (completamente opaco/visible).',
            whatHappened: 'Has cambiado la transparencia de un elemento. El elemento ahora es más transparente o más sólido dependiendo del valor de opacidad.',
            tips: [
                'opacity: 0 - El elemento es invisible pero aún ocupa espacio.',
                'opacity: 0.5 - El elemento es 50% transparente.',
                'opacity: 1 - El elemento es completamente opaco (predeterminado).',
                'La opacidad afecta al elemento completo y a todos sus hijos.'
            ],
            tryItExample: `div {
    opacity: 0.7;
    padding: 20px;
    background-color: #e74c3c;
    color: white;
}`,
            tryItHtml: '<div style="opacity: 0.7; padding: 20px; background-color: #e74c3c; color: white;">Este elemento es 70% opaco (30% transparente)</div>'
        },
        cssWidth: {
            function: 'La propiedad width en CSS establece el ancho de un elemento. Se puede especificar en píxeles (px), porcentajes (%), unidades em u otras unidades CSS.',
            whatHappened: 'Has establecido el ancho de un elemento. El elemento se mostrará ahora con el ancho especificado.',
            tips: [
                'width: 300px - Ancho fijo de 300 píxeles.',
                'width: 50% - La mitad del ancho del contenedor padre.',
                'width: auto - El navegador calcula el ancho automáticamente.',
                'max-width y min-width se pueden usar para establecer límites.'
            ],
            tryItExample: `div {
    width: 80%;
    padding: 20px;
    background-color: #2ecc71;
    color: white;
    margin: 0 auto;
}`,
            tryItHtml: '<div style="width: 80%; padding: 20px; background-color: #2ecc71; color: white; margin: 0 auto;">Este elemento es el 80% del ancho del contenedor</div>'
        },
        cssHeight: {
            function: 'La propiedad height en CSS establece la altura de un elemento. Se puede especificar en píxeles (px), porcentajes (%), unidades em u otras unidades CSS.',
            whatHappened: 'Has establecido la altura de un elemento. El elemento se mostrará ahora con la altura especificada.',
            tips: [
                'height: 200px - Altura fija de 200 píxeles.',
                'height: 50vh - La mitad de la altura de la ventana gráfica.',
                'height: auto - El navegador calcula la altura basada en el contenido.',
                'min-height y max-height se pueden usar para establecer límites.'
            ],
            tryItExample: `div {
    height: 150px;
    padding: 20px;
    background-color: #f39c12;
    color: white;
    display: flex;
    align-items: center;
}`,
            tryItHtml: '<div style="height: 150px; padding: 20px; background-color: #f39c12; color: white; display: flex; align-items: center;">Este elemento tiene una altura fija</div>'
        },

        // ===== HTML (SPANISH) =====
        htmlButton: {
            function: 'El elemento <button> crea un botón interactivo con el que los usuarios pueden interactuar. Por defecto, los botones se utilizan para enviar formularios o activar acciones de JavaScript.',
            whatHappened: 'Has creado un botón interactivo. Los usuarios pueden hacer clic en él para activar una acción o enviar un formulario.',
            tips: [
                'Siempre proporciona texto descriptivo dentro del botón para indicar a los usuarios qué hace.',
                'Usa el atributo "type" para especificar el comportamiento del botón: type="button", type="submit" o type="reset".',
                'Personaliza los botones con CSS para que coincidan con tu diseño.',
                'Asegúrate de que los botones sean fáciles de hacer clic en dispositivos móviles.'
            ],
            tryItExample: `<button onclick="alert('¡Botón clicked!')">Haz clic en mí</button>`,
            tryItHtml: '<button style="padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;" onclick="alert(\'¡Botón clicked!\')">Haz clic en mí</button>'
        },
        htmlDiv: {
            function: 'El elemento <div> es un contenedor utilizado para agrupar otros elementos HTML. No tiene un significado semántico especial y se utiliza para propósitos de diseño y estilo.',
            whatHappened: 'Has creado un elemento contenedor que puede contener otro contenido. Puedes estilizarlo con CSS y organizar el diseño de tu página con divs.',
            tips: [
                'Usa <div> para agrupar contenido genérico.',
                'Para contenido semántico, considera usar <section>, <article> o <nav> en su lugar.',
                'Los divs son elementos a nivel de bloque por defecto, ocupando ancho completo.',
                'Puedes anidar divs dentro de otros divs para diseños complejos.'
            ],
            tryItExample: `<div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px;">
    <p>Este es contenido dentro de un div</p>
</div>`,
            tryItHtml: '<div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px;"><p>Este es contenido dentro de un div</p></div>'
        },
        htmlParagraph: {
            function: 'El elemento <p> define un párrafo de texto. Se utiliza para agrupar oraciones relacionadas y es uno de los elementos HTML más básicos.',
            whatHappened: 'Has creado un elemento de párrafo. El texto dentro de este elemento se mostrará como un bloque de texto con márgenes arriba y abajo.',
            tips: [
                'Usa <p> para contenido de texto regular.',
                'Cada <p> crea un nuevo párrafo con espaciado.',
                'Los párrafos deben contener pensamientos u oraciones completas.',
                'Estiliza párrafos con CSS para una apariencia de texto consistente.'
            ],
            tryItExample: `<p>Este es un párrafo de texto. Contiene información relacionada y se muestra como un elemento de bloque con espaciado arriba y abajo.</p>`,
            tryItHtml: '<p style="font-size: 16px; line-height: 1.6;">Este es un párrafo de texto. Contiene información relacionada y se muestra como un elemento de bloque con espaciado arriba y abajo.</p>'
        },
        htmlHeading: {
            function: 'Los elementos de encabezado HTML (<h1> a <h6>) se utilizan para definir encabezados y subencabezados en una página. <h1> es el más grande e importante, mientras que <h6> es el más pequeño.',
            whatHappened: 'Has creado un elemento de encabezado. Este texto se mostrará como un encabezado con texto más grande y estilo en negrita por defecto.',
            tips: [
                'Usa solo un <h1> por página para el título principal.',
                'Usa encabezados en una jerarquía lógica (h1, luego h2, luego h3, etc.).',
                'Los encabezados mejoran el SEO y la accesibilidad.',
                'No saltes niveles de encabezado (por ejemplo, no vayas de h1 directamente a h3).'
            ],
            tryItExample: `<h1>Encabezado Principal</h1>
<h2>Subencabezado</h2>
<h3>Sub-subencabezado</h3>`,
            tryItHtml: '<div><h1 style="font-size: 28px; margin: 10px 0;">Encabezado Principal</h1><h2 style="font-size: 22px; margin: 10px 0;">Subencabezado</h2><h3 style="font-size: 18px; margin: 10px 0;">Sub-subencabezado</h3></div>'
        },

        // ===== JAVASCRIPT (SPANISH) =====
        jsEventListener: {
            function: 'addEventListener() es un método de JavaScript que adjunta un controlador de eventos a un elemento. Escucha eventos específicos (como clics, escritura, etc.) y ejecuta código cuando ocurre el evento.',
            whatHappened: 'Has configurado un oyente que vigila un evento en un elemento. Cuando ocurra el evento, se ejecutará el código dentro de la función.',
            tips: [
                'Los eventos comunes incluyen: click, mouseover, keydown, submit, change, input.',
                'Puedes adjuntar múltiples oyentes al mismo elemento.',
                'El parámetro event te da información sobre qué sucedió.',
                'Usa removeEventListener() para dejar de escuchar un evento.',
                'addEventListener es mejor que onclick porque permite múltiples oyentes.'
            ],
            tryItExample: `const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('¡Hiciste clic en el botón!');
});`,
            tryItHtml: '<button style="padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="alert(\'¡Hiciste clic en el botón!\')">Haz clic para ver el evento</button>'
        },
        jsQuerySelector: {
            function: 'document.querySelector() es un método de JavaScript que encuentra y devuelve el primer elemento en el DOM que coincide con un selector CSS especificado.',
            whatHappened: 'Has seleccionado un elemento HTML de la página usando un selector CSS. Este elemento ahora se almacena en una variable para que puedas manipularlo.',
            tips: [
                'Usa selectores CSS: .class, #id, tag, [attribute], etc.',
                'querySelector() devuelve solo el primer elemento coincidente.',
                'Usa querySelectorAll() para obtener todos los elementos coincidentes.',
                'Almacena el resultado en una variable para reutilizarlo varias veces.',
                'El valor devuelto es null si no se encuentra ningún elemento.'
            ],
            tryItExample: `const heading = document.querySelector('h1');
heading.textContent = 'Nuevo texto de encabezado';`,
            tryItHtml: '<h1 id="demo">Texto original</h1><script>document.querySelector("h1").textContent = "Nuevo texto de encabezado";</script>'
        },
        jsInnerHTML: {
            function: 'innerHTML es una propiedad de JavaScript que obtiene o establece el contenido HTML dentro de un elemento. Te permite agregar, eliminar o cambiar elementos HTML dinámicamente.',
            whatHappened: 'Has cambiado el contenido HTML dentro de un elemento. El nuevo contenido reemplaza lo que estaba allí antes.',
            tips: [
                'innerHTML analiza cadenas HTML, así que puedes agregar contenido complejo.',
                'Usa textContent para texto plano sin análisis HTML (más seguro).',
                'Ten cuidado con la entrada del usuario al usar innerHTML (riesgo de seguridad).',
                'innerHTML sobrescribe todo el contenido existente dentro del elemento.',
                'Evita usar innerHTML con datos no confiables.'
            ],
            tryItExample: `const div = document.querySelector('div');
div.innerHTML = '<p>Este es el <strong>nuevo contenido</strong></p>';`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>document.getElementById("demo").innerHTML = "<p>Este es el <strong>nuevo contenido</strong></p>";</script>'
        },
        jsTextContent: {
            function: 'textContent es una propiedad de JavaScript que obtiene o establece el contenido de texto de un elemento. A diferencia de innerHTML, trata la entrada como texto plano, no HTML.',
            whatHappened: 'Has cambiado el contenido de texto dentro de un elemento. El nuevo texto reemplaza lo que estaba allí antes.',
            tips: [
                'textContent es más seguro que innerHTML cuando se trata de entrada del usuario.',
                'textContent ignora etiquetas HTML y las muestra como texto plano.',
                'El rendimiento es ligeramente mejor con textContent que con innerHTML.',
                'Usa textContent para mostrar texto plano, innerHTML para contenido HTML.'
            ],
            tryItExample: `const paragraph = document.querySelector('p');
paragraph.textContent = 'Este es nuevo contenido de texto';`,
            tryItHtml: '<p id="demo" style="font-size: 16px;">Texto original</p><script>document.getElementById("demo").textContent = "Este es nuevo contenido de texto";</script>'
        },
        jsIfStatement: {
            function: 'Una sentencia if en JavaScript verifica si una condición es verdadera y, si es así, ejecuta un bloque de código. También puedes usar else o else if para condiciones adicionales.',
            whatHappened: 'Has creado lógica condicional que toma decisiones basadas en si las condiciones son verdaderas o falsas. Diferentes códigos se ejecutan dependiendo del resultado.',
            tips: [
                'Usa === para comparación de igualdad estricta (recomendado).',
                'Usa == para igualdad flexible (no recomendado).',
                'Usa && para AND, || para OR, ! para NOT.',
                'Siempre usa llaves {} incluso para bloques de una sola declaración.',
                'Las condiciones pueden verificar valores, funciones o lógica compleja.'
            ],
            tryItExample: `const age = 18;
if (age >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>const age = 18; const result = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"; document.getElementById("demo").textContent = result;</script>'
        },
        jsVariable: {
            function: 'Las variables en JavaScript almacenan valores de datos. Puedes declarar variables usando const, let o var. const y let son preferidas en JavaScript moderno.',
            whatHappened: 'Has creado una variable que almacena un valor. Ahora puedes usar esta variable en todo tu código para acceder o modificar el valor almacenado.',
            tips: [
                'Usa const por defecto para variables que no cambian.',
                'Usa let para variables que necesitan cambiar.',
                'Evita var en JavaScript moderno; usa const o let en su lugar.',
                'Los nombres de variables deben ser descriptivos y usar camelCase.',
                'Las variables están limitadas al bloque en el que se declaran (con let y const).'
            ],
            tryItExample: `const name = 'Juan';
const age = 30;
const city = 'Nueva York';
console.log(name, age, city);`,
            tryItHtml: '<div id="demo" style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"></div><script>const name = "Juan"; const age = 30; const city = "Nueva York"; document.getElementById("demo").textContent = `Nombre: ${name}, Edad: ${age}, Ciudad: ${city}`;</script>'
        },

        // ===== JSON (SPANISH) =====
        jsonBasic: {
            function: 'JSON (Notación de Objetos de JavaScript) es un formato para almacenar e intercambiar datos. Utiliza pares clave-valor encerrados en llaves y matrices encerradas en corchetes.',
            whatHappened: 'Has creado una estructura JSON para organizar y almacenar datos. Estos datos se pueden leer, modificar y enviar fácilmente entre diferentes sistemas.',
            tips: [
                'Las claves JSON deben ser cadenas encerradas entre comillas dobles.',
                'Los valores pueden ser: cadenas, números, booleanos, null, objetos o matrices.',
                'JSON es independiente del lenguaje y se usa ampliamente en APIs web.',
                'Usa JSON.parse() para convertir cadenas JSON a objetos de JavaScript.',
                'Usa JSON.stringify() para convertir objetos de JavaScript a cadenas JSON.'
            ],
            tryItExample: `{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Nueva York",
  "hobbies": ["lectura", "juegos", "codificación"]
}`,
            tryItHtml: '<pre style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; overflow-x: auto;">{\n  "nombre": "Juan",\n  "edad": 30,\n  "ciudad": "Nueva York"\n}</pre>'
        },

        // ===== FETCH/API (SPANISH) =====
        fetchAPI: {
            function: 'La API fetch() es un método de JavaScript para realizar solicitudes HTTP para recuperar datos de un servidor o API. Devuelve una Promesa que se resuelve con la respuesta.',
            whatHappened: 'Has iniciado una solicitud para obtener datos de un servidor. Una vez que llegan los datos, puedes procesarlos y usarlos en tu aplicación.',
            tips: [
                'fetch() devuelve una Promesa, usa .then() o async/await para manejar la respuesta.',
                'Siempre verifica el estado de la respuesta (.ok) antes de usar los datos.',
                'Convierte la respuesta a JSON usando el método .json().',
                'Maneja errores con .catch() para gestionar solicitudes fallidas correctamente.',
                'Usa la sintaxis async/await para código más limpio.'
            ],
            tryItExample: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>Obteniendo datos del servidor...</p><p style="margin-top: 10px; color: #666;">Verifica la consola del navegador para el resultado</p></div>'
        },

        // ===== GENERIC (SPANISH) =====
        genericCSS: {
            function: 'Este es código CSS que estiliza elementos HTML. CSS (Hojas de Estilo en Cascada) controla la apariencia de páginas web, incluyendo colores, fuentes, espaciado y diseño.',
            whatHappened: 'Has escrito CSS para estilizar elementos en tu página. Estos estilos afectarán la apariencia visual de los elementos HTML seleccionados.',
            tips: [
                'CSS usa selectores para dirigirse a elementos HTML.',
                'Las propiedades están separadas de los valores por dos puntos (:).',
                'Múltiples propiedades están separadas por punto y coma (;).',
                'Los estilos se aplican en cascada - los selectores más específicos anulan los generales.'
            ],
            tryItExample: `/* Ejemplo de estilo CSS */
element {
    property: value;
    property: value;
}`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>Estilo CSS aplicado a elementos HTML</p></div>'
        },
        genericHTML: {
            function: 'Este es código HTML (Lenguaje de Marcas de Hipertexto) que define la estructura y contenido de una página web. Los elementos HTML son los bloques de construcción de todos los sitios web.',
            whatHappened: 'Has creado estructura HTML. Esto formará la base de tu página web, conteniendo texto, botones, imágenes y otro contenido.',
            tips: [
                'HTML usa etiquetas encerradas en paréntesis angulares < >.',
                'La mayoría de las etiquetas vienen en parejas: etiqueta de apertura y etiqueta de cierre.',
                'HTML proporciona significado semántico al contenido web.',
                'Combina HTML con CSS para estilizar y JavaScript para interactividad.'
            ],
            tryItExample: `<div>
    <h1>Título</h1>
    <p>El contenido va aquí</p>
</div>`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><h1 style="font-size: 20px; margin: 0 0 10px 0;">Título</h1><p>El contenido va aquí</p></div>'
        },
        genericJavaScript: {
            function: 'Este es código JavaScript que agrega interactividad y comportamiento dinámico a páginas web. JavaScript se ejecuta en el navegador y puede responder a acciones del usuario y modificar HTML.',
            whatHappened: 'Has escrito código JavaScript que agrega funcionalidad a tu página web. Este código puede manejar interacciones del usuario y manipular contenido de página.',
            tips: [
                'JavaScript se ejecuta en el navegador en la computadora del usuario.',
                'JavaScript puede responder a eventos del usuario como clics y escritura.',
                'JavaScript puede modificar HTML y CSS dinámicamente.',
                'Siempre maneja errores correctamente en tu código JavaScript.'
            ],
            tryItExample: `// Ejemplo de código JavaScript
console.log('Hola Mundo');
const element = document.querySelector('element');
element.style.color = 'red';`,
            tryItHtml: '<div style="padding: 20px; background-color: #ecf0f1; border-radius: 8px;"><p>JavaScript se está ejecutando. Verifica la consola del navegador para ver la salida.</p></div>'
        }
    }
};

// ==================== STATE MANAGEMENT ====================
let currentLanguage = 'en';
let lastAnalyzedCode = '';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateUILanguage();
});

/**
 * Initialize all event listeners for the application
 */
function initializeEventListeners() {
    // Code explanation triggers
    const explainBtn = document.getElementById('explainBtn');
    const explainBtnTop = document.getElementById('explainBtnTop');
    
    explainBtn.addEventListener('click', handleExplainCode);
    explainBtnTop.addEventListener('click', handleExplainCode);
    
    // Language selector
    const languageBtn = document.getElementById('languageBtn');
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageBtn.addEventListener('click', toggleLanguageMenu);
    languageOptions.forEach(option => {
        option.addEventListener('click', changeLanguage);
    });
    
    // Code editor interaction
    const editableCode = document.getElementById('editableCode');
    editableCode.addEventListener('input', debounce(updateVisualResult, 500));
    
    // Sync code between input fields
    const codeInput = document.getElementById('codeInput');
    const codeInputTop = document.getElementById('codeInputTop');
    
    codeInput.addEventListener('input', function() {
        codeInputTop.value = this.value;
    });
    
    codeInputTop.addEventListener('input', function() {
        codeInput.value = this.value;
    });
    
    // Close language menu when clicking outside
    document.addEventListener('click', function(event) {
        const languageSelector = document.querySelector('.language-selector');
        if (!languageSelector.contains(event.target)) {
            document.getElementById('languageMenu').classList.add('hidden');
            document.getElementById('languageBtn').classList.remove('active');
        }
    });
}

// ==================== LANGUAGE MANAGEMENT ====================
/**
 * Toggle the language menu visibility
 */
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    const btn = document.getElementById('languageBtn');
    
    menu.classList.toggle('hidden');
    btn.classList.toggle('active');
}

/**
 * Change the application language
 * @param {Event} event - The click event
 */
function changeLanguage(event) {
    const langCode = event.target.getAttribute('data-lang');
    currentLanguage = langCode;
    
    document.getElementById('langDisplay').textContent = langCode.toUpperCase();
    updateUILanguage();
    
    // Close menu
    document.getElementById('languageMenu').classList.add('hidden');
    document.getElementById('languageBtn').classList.remove('active');
    
    // Re-analyze current code if any
    if (lastAnalyzedCode) {
        const codeInput = document.getElementById('codeInput');
        codeInput.value = lastAnalyzedCode;
        handleExplainCode();
    }
}

/**
 * Update all UI text to the current language
 */
function updateUILanguage() {
    const t = translations[currentLanguage];
    
    // Update labels
    document.getElementById('mainTitle').textContent = t.enterYourCode;
    document.getElementById('codeInput').placeholder = t.placeholderText;
    document.getElementById('codeInputTop').placeholder = t.placeholderText;
    document.getElementById('explainBtn').textContent = t.explainCode;
    document.getElementById('explainBtnTop').textContent = t.explain;
    
    // Update section titles
    document.getElementById('codeTitle').textContent = t.theCode;
    document.getElementById('functionTitle').textContent = t.function;
    document.getElementById('whatHappenedTitle').textContent = t.whatHappened;
    document.getElementById('tipsTitle').textContent = t.tips;
    document.getElementById('tryItTitle').textContent = t.tryItYourself;
    document.getElementById('visualResultTitle').textContent = t.visualResult;
    document.getElementById('loadingText').textContent = t.analyzingCode;
    document.getElementById('errorTitle').textContent = t.errorTitle;
}

// ==================== CODE ANALYSIS ====================
/**
 * Main handler for code explanation
 */
function handleExplainCode() {
    const codeInput = document.getElementById('codeInput');
    const code = codeInput.value.trim();
    
    if (!code) {
        showError(translations[currentLanguage].emptyCodeError);
        return;
    }
    
    lastAnalyzedCode = code;
    showLoadingIndicator();
    
    // Simulate API call delay for better UX
    setTimeout(() => {
        analyzeCode(code);
        hideLoadingIndicator();
    }, 800);
}

/**
 * Detect the type of code and analyze it
 * @param {string} code - The code to analyze
 */
function analyzeCode(code) {
    const codeType = detectCodeType(code);
    const analysis = generateAnalysis(code, codeType);
    
    displayResults(analysis);
    transitionToResults();
}

/**
 * Detect what type of code the user provided
 * @param {string} code - The code to analyze
 * @returns {string} - The detected code type
 */
function detectCodeType(code) {
    // Check for JSON
    if (isJSON(code)) {
        return 'json';
    }
    
    // Check for HTML
    if (code.includes('<') && code.includes('>')) {
        return 'html';
    }
    
    // Check for Fetch/API
    if (code.includes('fetch(') || code.includes('.then(') || code.includes('async') || code.includes('await')) {
        return 'fetch';
    }
    
    // Check for JavaScript
    if (code.includes('function') || code.includes('=>') || code.includes('const') || code.includes('let') || code.includes('var') || code.includes('addEventListener') || code.includes('querySelector') || code.includes('if (') || code.includes('if(')) {
        return 'javascript';
    }
    
    // Check for CSS (most common patterns)
    if (code.includes(':') && code.includes(';') && code.includes('{') && code.includes('}')) {
        return 'css';
    }
    
    // Default to CSS if it looks like it could be
    if (code.includes('-') || code.includes(':')) {
        return 'css';
    }
    
    return 'generic';
}

/**
 * Check if a string is valid JSON
 * @param {string} str - The string to check
 * @returns {boolean} - True if valid JSON
 */
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Generate analysis based on code patterns
 * @param {string} code - The code to analyze
 * @param {string} codeType - The type of code
 * @returns {Object} - Analysis object with explanation data
 */
function generateAnalysis(code, codeType) {
    const t = translations[currentLanguage];
    const exp = explanations[currentLanguage];
    
    let analysis = {
        code: code,
        type: codeType,
        function: t.noCodeDetected,
        whatHappened: t.noCodeDetected,
        tips: [],
        tryItExample: code,
        tryItHtml: '<p>Content will be displayed here</p>'
    };
    
    // ===== DETECT SPECIFIC CSS PROPERTIES =====
    if (code.includes('text-wrap')) {
        analysis = { ...analysis, ...exp.cssTextWrap };
    } else if (code.includes('background-color')) {
        analysis = { ...analysis, ...exp.cssBackgroundColor };
    } else if (code.includes('color:') && !code.includes('background')) {
        analysis = { ...analysis, ...exp.cssColor };
    } else if (code.includes('font-size')) {
        analysis = { ...analysis, ...exp.cssFontSize };
    } else if (code.includes('padding')) {
        analysis = { ...analysis, ...exp.cssPadding };
    } else if (code.includes('margin')) {
        analysis = { ...analysis, ...exp.cssMargin };
    } else if (code.includes('display:') || code.includes('display :')) {
        analysis = { ...analysis, ...exp.cssDisplay };
    } else if (code.includes('border-radius')) {
        analysis = { ...analysis, ...exp.cssBorderRadius };
    } else if (code.includes('opacity')) {
        analysis = { ...analysis, ...exp.cssOpacity };
    } else if (code.includes('width') && code.includes(':')) {
        analysis = { ...analysis, ...exp.cssWidth };
    } else if (code.includes('height') && code.includes(':')) {
        analysis = { ...analysis, ...exp.cssHeight };
    }
    // ===== DETECT HTML ELEMENTS =====
    else if (code.includes('<button')) {
        analysis = { ...analysis, ...exp.htmlButton };
    } else if (code.includes('<div')) {
        analysis = { ...analysis, ...exp.htmlDiv };
    } else if (code.includes('<p')) {
        analysis = { ...analysis, ...exp.htmlParagraph };
    } else if (code.includes('<h1') || code.includes('<h2') || code.includes('<h3') || code.includes('<h4') || code.includes('<h5') || code.includes('<h6')) {
        analysis = { ...analysis, ...exp.htmlHeading };
    }
    // ===== DETECT JAVASCRIPT FUNCTIONS =====
    else if (code.includes('addEventListener')) {
        analysis = { ...analysis, ...exp.jsEventListener };
    } else if (code.includes('querySelector')) {
        analysis = { ...analysis, ...exp.jsQuerySelector };
    } else if (code.includes('innerHTML')) {
        analysis = { ...analysis, ...exp.jsInnerHTML };
    } else if (code.includes('textContent')) {
        analysis = { ...analysis, ...exp.jsTextContent };
    } else if (code.includes('if (') || code.includes('if(')) {
        analysis = { ...analysis, ...exp.jsIfStatement };
    } else if ((code.includes('const ') || code.includes('let ') || code.includes('var ')) && code.includes('=')) {
        analysis = { ...analysis, ...exp.jsVariable };
    }
    // ===== DETECT FETCH/API =====
    else if (code.includes('fetch(')) {
        analysis = { ...analysis, ...exp.fetchAPI };
    }
    // ===== DETECT JSON =====
    else if (codeType === 'json') {
        analysis = { ...analysis, ...exp.jsonBasic };
    }
    // ===== DETECT CODE TYPE FOR GENERIC RESPONSES =====
    else if (codeType === 'css') {
        analysis = { ...analysis, ...exp.genericCSS };
    } else if (codeType === 'html') {
        analysis = { ...analysis, ...exp.genericHTML };
    } else if (codeType === 'javascript') {
        analysis = { ...analysis, ...exp.genericJavaScript };
    }
    
    return analysis;
}

// ==================== DISPLAY AND UI UPDATES ====================
/**
 * Display analysis results in the UI
 * @param {Object} analysis - The analysis object
 */
function displayResults(analysis) {
    // Display the code
    document.getElementById('displayCode').textContent = analysis.code;
    
    // Display function explanation
    document.getElementById('functionContent').textContent = analysis.function;
    
    // Display what happened
    document.getElementById('whatHappenedContent').textContent = analysis.whatHappened;
    
    // Display tips
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    if (Array.isArray(analysis.tips)) {
        analysis.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }
    
    // Set editable code
    document.getElementById('editableCode').value = analysis.tryItExample;
    
    // Update visual result
    renderVisualResult(analysis.tryItExample, analysis.tryItHtml);
}

/**
 * Render the visual result in an iframe
 * @param {string} code - The editable code
 * @param {string} htmlContent - The HTML content to display
 */
function renderVisualResult(code, htmlContent) {
    const iframe = document.getElementById('visualResult');
    
    try {
        // Determine if code is CSS or JavaScript
        const isCSS = code.includes(':') && code.includes(';') && code.includes('{');
        const isJS = code.includes('function') || code.includes('=>') || code.includes('addEventListener') || code.includes('querySelector');
        
        // Build complete HTML document
        let fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        margin: 20px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        background-color: #f5f5f5;
                    }
        `;
        
        // Add CSS if detected
        if (isCSS) {
            fullHtml += `${code}`;
        }
        
        fullHtml += `
                </style>
            </head>
            <body>
                ${htmlContent}
                <script>
                    ${isJS ? code : ''}
                </script>
            </body>
            </html>
        `;
        
        iframe.srcdoc = fullHtml;
    } catch (error) {
        console.error('Error rendering visual result:', error);
    }
}

/**
 * Update visual result when editable code changes
 */
function updateVisualResult() {
    const editableCode = document.getElementById('editableCode').value;
    
    try {
        const isCSS = editableCode.includes(':') && editableCode.includes(';') && editableCode.includes('{');
        
        const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        margin: 20px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        background-color: #f5f5f5;
                    }
                    ${isCSS ? editableCode : ''}
                </style>
            </head>
            <body>
                <div>Hello World!</div>
                <script>
                    ${editableCode.includes('addEventListener') ? editableCode : ''}
                </script>
            </body>
            </html>
        `;
        
        document.getElementById('visualResult').srcdoc = fullHtml;
    } catch (error) {
        console.error('Error updating visual result:', error);
    }
}

/**
 * Transition from initial section to results section
 */
function transitionToResults() {
    const initialSection = document.getElementById('initialSection');
    const resultsSection = document.getElementById('resultsSection');
    
    initialSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    // Scroll to results
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

// ==================== LOADING AND ERROR STATES ====================
/**
 * Show loading indicator
 */
function showLoadingIndicator() {
    document.getElementById('loadingIndicator').classList.remove('hidden');
}

/**
 * Hide loading indicator
 */
function hideLoadingIndicator() {
    document.getElementById('loadingIndicator').classList.add('hidden');
}

/**
 * Show error message
 * @param {string} message - The error message
 */
function showError(message) {
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorModal.classList.remove('hidden');
}

// ==================== UTILITY FUNCTIONS ====================
/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ==================== COPILOT CLI API READY ARCHITECTURE ====================
/**
 * Future integration point for Copilot CLI API
 * This structure allows seamless integration of Copilot CLI for advanced analysis
 * 
 * @param {string} code - The code to send for Copilot analysis
 * @returns {Promise<Object>} - Promise with Copilot analysis results
 */
async function getCopilotAnalysis(code) {
    // TODO: Implement Copilot CLI integration
    /*
    const response = await fetch('/api/copilot-analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code })
    });
    
    const analysis = await response.json();
    return analysis;
    */
    
    return null;
}

/**
 * Validate code before sending to Copilot
 * @param {string} code - The code to validate
 * @returns {boolean} - Whether code is valid
 */
function validateCodeForCopilot(code) {
    if (!code || code.length === 0) {
        return false;
    }
    
    const dangerousPatterns = [
        /eval\s*\(/i,
        /expression\s*=/i
    ];
    
    return !dangerousPatterns.some(pattern => pattern.test(code));
}

console.log('✨ Copilot Visual Code Explainer - Ready for Copilot CLI API integration');
console.log('🚀 Supported: HTML, CSS, JavaScript, JSON, Fetch/API');
