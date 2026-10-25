// Assignment 1: Variables, Data Types, and Console Operations

const readline = typeof require === "function" ? require("readline") : null;

function displayUserData(nameInput, ageInput, employedInput, skillsInput) {
  // declaring variables using var, let, and const
  var userName = nameInput || "Alice";
  let userAge = Number(ageInput) || 25;
  const isEmployed = employedInput !== undefined ? (employedInput === "true" || employedInput === true) : true;
  const userSkills = skillsInput && Array.isArray(skillsInput)
    ? skillsInput
    : (skillsInput ? skillsInput.split(",").map(s => s.trim()) : ["HTML", "CSS", "JavaScript"]);

  // checking types and logging to console
  const outputLines = [
    `Name: ${userName} (Type: ${typeof userName})`,
    `Age: ${userAge} (Type: ${typeof userAge})`,
    `Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`,
    `Skills: ${JSON.stringify(userSkills).replace(/,/g, ", ")} (Type: ${typeof userSkills})`
  ];

  outputLines.forEach(line => console.log(line));
  return outputLines.join("\n");
}

// export to global scope for browser UI access
if (typeof window !== "undefined") {
  window.displayUserData = displayUserData;
}

// capture inputs interactively when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter name (default: Alice): ", (nameAns) => {
    rl.question("Enter age (default: 25): ", (ageAns) => {
      rl.question("Is employed true/false (default: true): ", (empAns) => {
        rl.question("Enter skills comma-separated (default: HTML, CSS, JavaScript): ", (skillsAns) => {
          rl.close();
          const finalName = nameAns.trim() !== "" ? nameAns.trim() : "Alice";
          const finalAge = ageAns.trim() !== "" ? ageAns.trim() : "25";
          const finalEmp = empAns.trim() !== "" ? empAns.trim() : "true";
          const finalSkills = skillsAns.trim() !== "" ? skillsAns.trim() : "HTML, CSS, JavaScript";
          displayUserData(finalName, finalAge, finalEmp, finalSkills);
        });
      });
    });
  });
}
