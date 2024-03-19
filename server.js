const express = require("express");
const helmet = require("helmet");
const path = require("path");
const fs = require("fs");
const app = express();
require("dotenv").config();

let port = process.env.PORT;

let env = process.env;

const distPath = "dist/gpt4-enem";

const files = fs.readdirSync(`${distPath}/`);

let mainjs = null;

let mainFullPath = files.find((file) => file.match("main.*.js"));

if (mainFullPath) {
  mainFullPath = `${distPath}/${mainFullPath}`;

  mainjs = fs.readFileSync(mainFullPath).toString();

  fs.copyFileSync(mainFullPath, "dist/main.cache.js");

  Object.keys(env).forEach((key) => {
    if (key.startsWith("PLCD_")) {
      var regex = new RegExp("\\$" + key, "g");
      console.log(`replacing ${key} with ${env[key]}`);
      mainjs = mainjs.replaceAll(regex, env[key]);
    }
  });

  fs.writeFileSync(mainFullPath, mainjs);
}

function cleanUp() {
  try {
    fs.copyFileSync("dist/main.cache.js", mainFullPath);

    fs.rmSync("dist/main.cache.js");
  } catch (error) {}
}

process.on("SIGTERM", () => {
  cleanUp();
});
process.on("SIGINT", () => {
  cleanUp();
});

if (port == null || port == "") {
  port = 4200;
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.static(path.join(__dirname, distPath)));

app.get("/*", (request, response) => {
  response.sendFile(path.join(`${__dirname}/${distPath}/index.html`));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
