function ChatOpenAIModel(query) {
    let message = query.toLowerCase()

    if (message.includes("var") || message.includes("let") || message.includes("const") || message.includes("variable")) {
        return "🧾 In JavaScript, 'var', 'let', and 'const' are used to declare variables. 'let' and 'const' are block-scoped, while 'var' is function-scoped.";
    }

    else if (message.includes("if") || message.includes("else") || message.includes("condition") || message.includes("branch") || message.includes("decision")) {
        return "🔀 JavaScript's if-else statement lets you make decisions in your code. You can also use else-if for multiple conditions.";
    }

    else if (message.includes("for") || message.includes("while") || message.includes("do") || message.includes("loop") || message.includes("repeat")) {
        return "🔁 JavaScript supports 'for', 'while', and 'do...while' loops to repeat blocks of code.";
    }

    else if (message.includes("function") || message.includes("arrow") || message.includes("parameter") || message.includes("argument")) {
        return "🔧 JavaScript functions can be declared using the 'function' keyword or arrow syntax (=>). They accept parameters and return values.";
    }

    else if (message.includes("array") || message.includes("push") || message.includes("pop") || message.includes("index") || message.includes("length")) {
        return "📚 Arrays in JavaScript are used to store multiple items. Use methods like push(), pop(), and check their length.";
    }

    else {
        return "🤖 Sorry, I can answer only JavaScript syntax-related questions like variables, loops, functions, etc.";
    }
}

module.exports = ChatOpenAIModel