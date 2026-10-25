// Assignment 3: Conditional Logic Implementation

const readline = typeof require === "function" ? require("readline") : null;

function evaluateScore(rawScore) {
  const score = Number(rawScore);

  // evaluating score tier using if...else
  let performanceTier = "";
  if (score >= 90 && score <= 100) {
    performanceTier = "TIER_A";
  } else if (score >= 80 && score < 90) {
    performanceTier = "TIER_B";
  } else if (score >= 70 && score < 80) {
    performanceTier = "TIER_C";
  } else if (score >= 60 && score < 70) {
    performanceTier = "TIER_D";
  } else {
    performanceTier = "TIER_F";
  }

  // determining letter grade using switch
  let grade;
  switch (performanceTier) {
    case "TIER_A":
      grade = "A";
      break;
    case "TIER_B":
      grade = "B";
      break;
    case "TIER_C":
      grade = "C";
      break;
    case "TIER_D":
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // ternary operator for pass or fail status
  let status = score >= 60 ? "Passed" : "Failed";

  // output results
  const outputLines = [
    `Score: ${score}`,
    `Grade: ${grade}`,
    `Status: ${status}`
  ];

  outputLines.forEach(line => console.log(line));
  return outputLines.join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.evaluateScore = evaluateScore;
}

// capture input interactively from user when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter numerical test score (default: 85): ", (ans) => {
    rl.close();
    evaluateScore(ans.trim() !== "" ? ans.trim() : "85");
  });
}
