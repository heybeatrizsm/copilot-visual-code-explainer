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

// ==================== LANGUAGE EXPLANATIONS ====================
const explanations = {
    en: {
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
            tryItHtml: '<div>Hello World!</div>'
        },
        cssColor: {
            function: 'The color property in CSS sets the text color of an element. It applies to all text content within the element and its children unless overridden.',
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
            tryItHtml: '<p>This text is red!</p>'
        },
        cssFontSize: {
            function: 'The font-size property in CSS controls the size of text. It can be specified in pixels (px), em units (em), percentages (%), or other CSS units.',
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
            tryItHtml: '<h1>This is a large heading</h1>'
        },
        htmlButton: {
            function: 'The <button> element creates a clickable button that users can interact with. By default, buttons are used to submit forms or trigger JavaScript actions.',
            whatHappened: 'You\'ve created an interactive button. Users can click it to trigger an action or submit a form.',
            tips: [
                'Always provide descriptive text inside the button to tell users what it does.',
                'Use the "type" attribute to specify button behavior: type="button", type="submit", or type="reset".',
                'Style buttons with CSS to match your design.',
                'Make sure buttons are easily clickable on mobile devices.'
            ],
            tryItExample: `<button onclick="alert('Button clicked!')">Click Me</button>`,
            tryItHtml: '<button onclick="alert(\'Button clicked!\')">Click Me</button>'
        },
        jsEventListener: {
            function: 'addEventListener() is a JavaScript method that attaches an event handler to an element. It listens for specific events (like clicks, typing, etc.) and executes code when the event occurs.',
            whatHappened: 'You\'ve set up a listener that watches for an event on an element. When the event happens, the code inside the function will run.',
            tips: [
                'Common events include: click, mouseover, keydown, submit, change.',
                'You can attach multiple listeners to the same element.',
                'The event parameter gives you information about what happened.',
                'Use removeEventListener() to stop listening for an event.'
            ],
            tryItExample: `const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('You clicked the button!');
});`,
            tryItHtml: '<button>Click me!</button>'
        },
        jsQuerySelector: {
            function: 'document.querySelector() is a JavaScript method that finds and returns the first element in the DOM that matches a specified CSS selector.',
            whatHappened: 'You\'ve selected an HTML element from the page using a CSS selector. This element is now stored in a variable so you can manipulate it.',
            tips: [
                'Use CSS selectors: .class, #id, tag, [attribute], etc.',
                'querySelector() returns only the first matching element.',
                'Use querySelectorAll() to get all matching elements.',
                'Store the result in a variable to reuse it multiple times.'
            ],
            tryItExample: `const heading = document.querySelector('h1');
heading.textContent = 'New heading text';`,
            tryItHtml: '<h1>Original text</h1>'
        },
        jsInnerHTML: {
            function: 'innerHTML is a JavaScript property that gets or sets the HTML content inside an element. It allows you to add, remove, or change HTML elements dynamically.',
            whatHappened: 'You\'ve changed the HTML content inside an element. The new content replaces what was there before.',
            tips: [
                'innerHTML parses HTML strings, so you can add complex content.',
                'Use textContent for plain text without HTML parsing (more secure).',
                'Be careful with user input when using innerHTML (security risk).',
                'innerHTML overwrites all existing content inside the element.'
            ],
            tryItExample: `const div = document.querySelector('div');
div.innerHTML = '<p>This is <strong>new content</strong></p>';`,
            tryItHtml: '<div>Original content</div>'
        },
        jsonBasic: {
            function: 'JSON (JavaScript Object Notation) is a format for storing and exchanging data. It uses key-value pairs enclosed in curly braces and arrays enclosed in square brackets.',
            whatHappened: 'You\'ve created a JSON structure to organize and store data. This data can be easily read, modified, and sent between different systems.',
            tips: [
                'JSON keys must be strings enclosed in double quotes.',
                'Values can be: strings, numbers, booleans, null, objects, or arrays.',
                'JSON is language-independent and widely used in web APIs.',
                'Use JSON.parse() to convert JSON strings to JavaScript objects.'
            ],
            tryItExample: `{
  "name": "John",
  "age": 30,
  "city": "New York"
}`,
            tryItHtml: '<pre>JSON data displayed</pre>'
        },
        fetchAPI: {
            function: 'The fetch() API is a JavaScript method for making HTTP requests to retrieve data from a server or API. It returns a Promise that resolves with the response.',
            whatHappened: 'You\'ve initiated a request to fetch data from a server. Once the data arrives, you can process it and use it in your application.',
            tips: [
                'fetch() returns a Promise, use .then() or async/await to handle the response.',
                'Always check the response status (.ok) before using the data.',
                'Convert the response to JSON using .json() method.',
                'Handle errors with .catch() to manage failed requests gracefully.'
            ],
            tryItExample: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));`,
            tryItHtml: '<p>Fetching data from server...</p>'
        },
        cssDisplay: {
            function: 'The display property in CSS controls how an element is rendered on the page. Common values are block, inline, inline-block, flex, grid, and none.',
            whatHappened: 'You\'ve changed how this element is displayed and positioned relative to other elements on the page.',
            tips: [
                'display: block - Element takes full width, starts on new line.',
                'display: inline - Element only takes needed width, flows with text.',
                'display: flex - Creates flexible layout container.',
                'display: none - Hides element completely (different from visibility: hidden).'
            ],
            tryItExample: `div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}`,
            tryItHtml: '<div>Centered content</div>'
        },
        jsIfStatement: {
            function: 'An if statement in JavaScript checks if a condition is true, and if so, executes a block of code. You can also use else or else if for additional conditions.',
            whatHappened: 'You\'ve created conditional logic that makes decisions based on whether conditions are true or false. Different code runs depending on the outcome.',
            tips: [
                'Use === for strict equality comparison (recommended).',
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
            tryItHtml: '<p id="result">Check the result...</p>'
        }
    },
    es: {
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
            tryItHtml: '<div>¡Hola Mundo!</div>'
        },
        cssColor: {
            function: 'La propiedad color en CSS establece el color del texto de un elemento. Se aplica a todo el contenido de texto dentro del elemento y sus elementos secundarios.',
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
            tryItHtml: '<p>¡Este texto es rojo!</p>'
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
            tryItHtml: '<h1>Este es un título grande</h1>'
        },
        htmlButton: {
            function: 'El elemento <button> crea un botón con el que los usuarios pueden interactuar. Por defecto, los botones se utilizan para enviar formularios o activar acciones de JavaScript.',
            whatHappened: 'Has creado un botón interactivo. Los usuarios pueden hacer clic en él para activar una acción o enviar un formulario.',
            tips: [
                'Siempre proporciona texto descriptivo dentro del botón para indicar a los usuarios qué hace.',
                'Usa el atributo "type" para especificar el comportamiento del botón: type="button", type="submit" o type="reset".',
                'Personaliza los botones con CSS para que coincidan con tu diseño.',
                'Asegúrate de que los botones sean fáciles de hacer clic en dispositivos móviles.'
            ],
            tryItExample: `<button onclick="alert('¡Botón clicked!')">Haz clic en mí</button>`,
            tryItHtml: '<button onclick="alert(\'¡Botón clicked!\')">Haz clic en mí</button>'
        },
        jsEventListener: {
            function: 'addEventListener() es un método de JavaScript que adjunta un controlador de eventos a un elemento. Escucha eventos específicos (como clics, escritura, etc.) y ejecuta código cuando ocurre el evento.',
            whatHappened: 'Has configurado un oyente que vigila un evento en un elemento. Cuando ocurra el evento, se ejecutará el código dentro de la función.',
            tips: [
                'Los eventos comunes incluyen: click, mouseover, keydown, submit, change.',
                'Puedes adjuntar múltiples oyentes al mismo elemento.',
                'El parámetro event te da información sobre qué sucedió.',
                'Usa removeEventListener() para dejar de escuchar un evento.'
            ],
            tryItExample: `const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('¡Hiciste clic en el botón!');
});`,
            tryItHtml: '<button>¡Haz clic en mí!</button>'
        },
        jsQuerySelector: {
            function: 'document.querySelector() es un método de JavaScript que encuentra y devuelve el primer elemento en el DOM que coincide con un selector CSS especificado.',
            whatHappened: 'Has seleccionado un elemento HTML de la página usando un selector CSS. Este elemento ahora se almacena en una variable para que puedas manipularlo.',
            tips: [
                'Usa selectores CSS: .class, #id, tag, [attribute], etc.',
                'querySelector() devuelve solo el primer elemento coincidente.',
                'Usa querySelectorAll() para obtener todos los elementos coincidentes.',
                'Almacena el resultado en una variable para reutilizarlo varias veces.'
            ],
            tryItExample: `const heading = document.querySelector('h1');
heading.textContent = 'Nuevo texto de encabezado';`,
            tryItHtml: '<h1>Texto original</h1>'
        },
        jsInnerHTML: {
            function: 'innerHTML es una propiedad de JavaScript que obtiene o establece el contenido HTML dentro de un elemento. Te permite agregar, eliminar o cambiar elementos HTML dinámicamente.',
            whatHappened: 'Has cambiado el contenido HTML dentro de un elemento. El nuevo contenido reemplaza lo que estaba allí antes.',
            tips: [
                'innerHTML analiza cadenas HTML, así que puedes agregar contenido complejo.',
                'Usa textContent para texto plano sin análisis HTML (más seguro).',
                'Ten cuidado con la entrada del usuario al usar innerHTML (riesgo de seguridad).',
                'innerHTML sobrescribe todo el contenido existente dentro del elemento.'
            ],
            tryItExample: `const div = document.querySelector('div');
div.innerHTML = '<p>Este es el <strong>nuevo contenido</strong></p>';`,
            tryItHtml: '<div>Contenido original</div>'
        },
        jsonBasic: {
            function: 'JSON (Notación de Objetos de JavaScript) es un formato para almacenar e intercambiar datos. Utiliza pares clave-valor encerrados en llaves y matrices encerradas en corchetes.',
            whatHappened: 'Has creado una estructura JSON para organizar y almacenar datos. Estos datos se pueden leer, modificar y enviar fácilmente entre diferentes sistemas.',
            tips: [
                'Las claves JSON deben ser cadenas encerradas entre comillas dobles.',
                'Los valores pueden ser: cadenas, números, booleanos, null, objetos o matrices.',
                'JSON es independiente del lenguaje y se usa ampliamente en APIs web.',
                'Usa JSON.parse() para convertir cadenas JSON a objetos de JavaScript.'
            ],
            tryItExample: `{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Nueva York"
}`,
            tryItHtml: '<pre>Datos JSON mostrados</pre>'
        },
        fetchAPI: {
            function: 'La API fetch() es un método de JavaScript para realizar solicitudes HTTP para recuperar datos de un servidor o API. Devuelve una Promesa que se resuelve con la respuesta.',
            whatHappened: 'Has iniciado una solicitud para obtener datos de un servidor. Una vez que llegan los datos, puedes procesarlos y usarlos en tu aplicación.',
            tips: [
                'fetch() devuelve una Promesa, usa .then() o async/await para manejar la respuesta.',
                'Siempre verifica el estado de la respuesta (.ok) antes de usar los datos.',
                'Convierte la respuesta a JSON usando el método .json().',
                'Maneja errores con .catch() para gestionar solicitudes fallidas correctamente.'
            ],
            tryItExample: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));`,
            tryItHtml: '<p>Obteniendo datos del servidor...</p>'
        },
        cssDisplay: {
            function: 'La propiedad display en CSS controla cómo se representa un elemento en la página. Los valores comunes son block, inline, inline-block, flex, grid y none.',
            whatHappened: 'Has cambiado cómo se muestra este elemento y se posiciona en relación con otros elementos de la página.',
            tips: [
                'display: block - El elemento ocupa el ancho completo, comienza en una nueva línea.',
                'display: inline - El elemento solo ocupa el ancho necesario, fluye con el texto.',
                'display: flex - Crea un contenedor de diseño flexible.',
                'display: none - Oculta el elemento por completo (diferente de visibility: hidden).'
            ],
            tryItExample: `div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}`,
            tryItHtml: '<div>Contenido centrado</div>'
        },
        jsIfStatement: {
            function: 'Una sentencia if en JavaScript verifica si una condición es verdadera y, si es así, ejecuta un bloque de código. También puedes usar else o else if para condiciones adicionales.',
            whatHappened: 'Has creado lógica condicional que toma decisiones basadas en si las condiciones son verdaderas o falsas. Diferentes códigos se ejecutan dependiendo del resultado.',
            tips: [
                'Usa === para comparación de igualdad estricta (recomendado).',
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
            tryItHtml: '<p id="result">Verifica el resultado...</p>'
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
        if (code.includes('button') || code.includes('input') || code.includes('form')) {
            return 'html';
        }
    }
    
    // Check for CSS
    if (code.includes('{') && code.includes('}') && (code.includes('color:') || code.includes('background') || code.includes('font'))) {
        return 'css';
    }
    
    // Check for JavaScript
    if (code.includes('function') || code.includes('=>') || code.includes('const') || code.includes('let') || code.includes('var') || code.includes('addEventListener') || code.includes('querySelector')) {
        return 'javascript';
    }
    
    // Check for Fetch/API
    if (code.includes('fetch(') || code.includes('.then(') || code.includes('async') || code.includes('await')) {
        return 'fetch';
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
 * Generate analysis based on code type
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
        tryItExample: '',
        tryItHtml: ''
    };
    
    // Detect specific patterns and provide targeted explanations
    if (code.includes('background-color')) {
        analysis = { ...analysis, ...exp.cssBackgroundColor };
    } else if (code.includes('color:') && !code.includes('background-color')) {
        analysis = { ...analysis, ...exp.cssColor };
    } else if (code.includes('font-size')) {
        analysis = { ...analysis, ...exp.cssFontSize };
    } else if (code.includes('<button')) {
        analysis = { ...analysis, ...exp.htmlButton };
    } else if (code.includes('addEventListener')) {
        analysis = { ...analysis, ...exp.jsEventListener };
    } else if (code.includes('querySelector')) {
        analysis = { ...analysis, ...exp.jsQuerySelector };
    } else if (code.includes('innerHTML')) {
        analysis = { ...analysis, ...exp.jsInnerHTML };
    } else if (codeType === 'json') {
        analysis = { ...analysis, ...exp.jsonBasic };
    } else if (code.includes('fetch(')) {
        analysis = { ...analysis, ...exp.fetchAPI };
    } else if (code.includes('display:')) {
        analysis = { ...analysis, ...exp.cssDisplay };
    } else if (code.includes('if (') || code.includes('if(')) {
        analysis = { ...analysis, ...exp.jsIfStatement };
    } else {
        // Generic analysis based on code type
        analysis = generateGenericAnalysis(code, codeType, t, exp);
    }
    
    return analysis;
}

/**
 * Generate generic analysis when no specific pattern is found
 * @param {string} code - The code to analyze
 * @param {string} codeType - The code type
 * @param {Object} t - Translations object
 * @param {Object} exp - Explanations object
 * @returns {Object} - Analysis object
 */
function generateGenericAnalysis(code, codeType, t, exp) {
    let analysis = {
        code: code,
        type: codeType,
        function: t.noCodeDetected,
        whatHappened: t.noCodeDetected,
        tips: ['Check your code syntax and try again.'],
        tryItExample: code,
        tryItHtml: '<p>Content will be displayed here</p>'
    };
    
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
        // Build complete HTML document
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
                    ${code.includes('{') && code.includes('}') ? code : ''}
                </style>
            </head>
            <body>
                ${htmlContent}
                <script>
                    ${code.includes('function') || code.includes('=>') || code.includes('addEventListener') ? code : ''}
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
    const htmlContent = document.querySelector('.visual-result-container').innerHTML;
    
    // Preserve the iframe and re-render with new code
    const iframe = document.getElementById('visualResult');
    
    try {
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
                    ${editableCode.includes('{') && editableCode.includes('}') ? editableCode : ''}
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
        
        iframe.srcdoc = fullHtml;
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
 * When integrated, this function will send code to Copilot CLI for more advanced
 * explanations and recommendations
 * 
 * @param {string} code - The code to send for Copilot analysis
 * @returns {Promise<Object>} - Promise with Copilot analysis results
 */
async function getCopilotAnalysis(code) {
    // TODO: Implement Copilot CLI integration
    // This would call your backend which uses Copilot CLI API
    
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
    
    // For now, return local analysis
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
    
    // Check for potentially malicious code patterns
    const dangerousPatterns = [
        /eval\s*\(/i,
        /expression\s*=/i
    ];
    
    return !dangerousPatterns.some(pattern => pattern.test(code));
}

/**
 * Log code analysis for future Copilot training
 * @param {string} code - The code analyzed
 * @param {string} type - The code type detected
 */
function logAnalyticsData(code, type) {
    // TODO: Send analytics to backend for Copilot training
    console.log('Analytics:', { code, type, timestamp: new Date() });
}

console.log('Copilot Visual Code Explainer - Ready for Copilot CLI API integration');