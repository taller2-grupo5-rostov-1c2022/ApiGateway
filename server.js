const fs = require("fs");
const path = require("path");
const gateway = require("express-gateway");
require("dotenv").config();

fs.writeFile(
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  process.env.GOOGLE_CREDENTIALS.replace(/\\\\n/g, "\\n"),
  console.error,
  () => {
    gateway().load(path.join(__dirname, "config")).run();
  }
);
