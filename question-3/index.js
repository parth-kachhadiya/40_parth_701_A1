const llm = require('./chat-module.js')
const readline = require('readline')	

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Welcome to JSGuru-Chatbot : Ask any question related to JavaScript(exit to leave): ")

rl.setPrompt('[User]: ')
rl.prompt()

rl.on('line', (line) => {
    if (line.toLowerCase() == 'exit') {
        rl.close()
    }
    else {
        console.log(`[JSGuru]: ${llm(line)}\n`)
        rl.prompt()
    }
})