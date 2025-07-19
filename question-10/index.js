console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

let counter = 0;
const interval = setInterval(() => {
  console.log("Repeating every second...");
  counter++;
  if (counter === 3) {
    clearInterval(interval);
    console.log("Stopped repeating after 3 times.");
  }
}, 1000);

console.log("Running on platform:", process.platform);

global.myAppName = "SimpleNodeApp";
console.log("Global variable:", global.myAppName);
