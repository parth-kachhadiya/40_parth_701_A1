// index.js
const jsKeywords = [
    "var", "let", "const", "if", "else", "for", "while", "do", "switch", "case",
    "break", "continue", "function", "return", "try", "catch", "finally",
    "throw", "new", "this", "class", "extends", "super", "import", "export",
    "await", "async", "typeof", "instanceof", "delete", "in", "of", "console", "log"
];

function findKeywords(code) {
    const found = [];
    jsKeywords.forEach(keyword => {
        if (code.includes(keyword)) {
            found.push(keyword);
        }
    });
    return found;
}

module.exports = { findKeywords };
