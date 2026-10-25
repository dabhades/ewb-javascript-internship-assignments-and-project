// Assignment 2: Operators, Expressions, and Input Handling

const readline = typeof require === "function" ? require("readline") : null;

function calculateBill(rawBill, rawTip) {
  // explicit type conversion using Number()
  const subtotal = Number(rawBill);
  const tipPercentage = Number(rawTip);

  // arithmetic operation to calculate tip
  const calculatedTip = (subtotal * tipPercentage) / 100;

  // compound assignment operator (+=) to compute total amount
  let totalAmount = subtotal;
  totalAmount += calculatedTip;

  // logging formatted output
  const outputLines = [
    `Subtotal: ₹${subtotal}`,
    `Tip Percentage: ${tipPercentage}%`,
    `Calculated Tip: ₹${calculatedTip}`,
    `Total Amount to Pay: ₹${totalAmount}`
  ];

  outputLines.forEach(line => console.log(line));
  return outputLines.join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.calculateBill = calculateBill;
}

// capture inputs interactively when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter bill amount in ₹ (default: 100): ", (billAns) => {
    rl.question("Enter tip percentage (default: 15): ", (tipAns) => {
      rl.close();
      const finalBill = billAns.trim() !== "" ? billAns.trim() : "100";
      const finalTip = tipAns.trim() !== "" ? tipAns.trim() : "15";
      calculateBill(finalBill, finalTip);
    });
  });
}
