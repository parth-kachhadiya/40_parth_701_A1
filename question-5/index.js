const unzipper = require("unzipper");
const fs = require("fs");
const path = require("path");

const zipFilePath = path.join(__dirname, "data.zip");
const outputDir = path.join(__dirname, "unzipped");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on("close", () => {
    console.log("✅ Unzipping completed!");
  })
  .on("error", (err) => {
    console.error("Error during unzipping:", err);
  });
