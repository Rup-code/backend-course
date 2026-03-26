const fs = require('fs');

const fileData = fs.readFileSync('./.env').toString();
fileData.split(/\r?\n/).forEach((variable) => {
  const [key, value] = variable.split('=');
  process.env[key] = value;
});

const a = process.env;
console.log(a);

// const { exec } = require('child_process');

// exec(`powershell -Command "setx VARIABLE_NAME  'Biswarup' /M"`);

// const environmentVariables = process.env.num;
// console.log(environmentVariables);
// process.env.num = 24578;
// console.log(process.env.num);

// Key Takeaways (Core Summary)
// ✔ Environment variables are key-value string pairs
// ✔ There are 3 types: User, System, Process
// ✔ PATH is the most important variable
// ✔ PATH values are semicolon-separated (Windows)
// ✔ Child processes inherit environment variables
// ✔ Use export to create environment variable in bash
// ✔ Temporary vs permanent variables differ
// ✔ Node.js accesses them via process.env
// ✔ Process variables override user & system
// ✔ PATH updates append, not replace
