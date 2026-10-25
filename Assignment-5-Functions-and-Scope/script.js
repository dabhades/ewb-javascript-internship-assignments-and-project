// Assignment 5: Function Architecture and Scope

const readline = typeof require === "function" ? require("readline") : null;

// standard function with default parameter values
function calculateArea(length = 5, width = 4) {
  return length * width;
}

// arrow function with default parameter values
const calculateAreaArrow = (length = 5, width = 4) => length * width;

// demonstrating function and block scope
function testScopeLimits() {
  var functionScoped = "Available throughout this function";

  if (true) {
    let blockVar = "Visible only inside this if block";
  }

  // accessing blockVar outside its block triggers a ReferenceError
  try {
    console.log(blockVar);
    return "Accessed blockVar successfully";
  } catch (err) {
    const msg = `Scope Test Error: ${err.toString()} (when accessed outside block)`;
    console.log(msg);
    return msg;
  }
}

function runScopeDemo(customLength, customWidth) {
  const l = Number(customLength) || 10;
  const w = Number(customWidth) || 3;

  const line1 = `Standard Function Area (Default 5x4): ${calculateArea()}`;
  const line2 = `Arrow Function Area (Custom ${l}x${w}): ${calculateAreaArrow(l, w)}`;
  console.log(line1);
  console.log(line2);
  const line3 = testScopeLimits();

  return [line1, line2, line3].join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.runScopeDemo = runScopeDemo;
  window.calculateArea = calculateArea;
  window.calculateAreaArrow = calculateAreaArrow;
}

// capture custom dimensions from user when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter custom length (default: 10): ", (lenAns) => {
    rl.question("Enter custom width (default: 3): ", (widAns) => {
      rl.close();
      const finalLen = lenAns.trim() !== "" ? lenAns.trim() : "10";
      const finalWid = widAns.trim() !== "" ? widAns.trim() : "3";
      runScopeDemo(finalLen, finalWid);
    });
  });
}
