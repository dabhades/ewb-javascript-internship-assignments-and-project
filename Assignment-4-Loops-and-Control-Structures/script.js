// Assignment 4: Loop Control Structures

const readline = typeof require === "function" ? require("readline") : null;

function runLoopStructures(tableNumInput) {
  const tableBase = Number(tableNumInput) || 5;
  const lines = [];

  // 1. for loop to print multiplication table up to 5
  lines.push(`-- Multiplication Table of ${tableBase} --`);
  for (let i = 1; i <= 5; i++) {
    lines.push(`${tableBase} x ${i} = ${tableBase * i}`);
  }

  // 2. while loop with break to find first number > 10 divisible by 6
  lines.push("-- First number > 10 divisible by 6 --");
  let num = 11;
  while (true) {
    if (num % 6 === 0) {
      lines.push(`Found: ${num}`);
      break;
    }
    num++;
  }

  // 3. do...while loop with continue to demonstrate skipping a value
  let counter = 0;
  do {
    counter++;
    if (counter === 3) {
      continue; // skip number 3
    }
  } while (counter < 5);

  lines.forEach(line => console.log(line));
  return lines.join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.runLoopStructures = runLoopStructures;
}

// capture input interactively from user when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter number for multiplication table (default: 5): ", (ans) => {
    rl.close();
    runLoopStructures(ans.trim() !== "" ? ans.trim() : "5");
  });
}
