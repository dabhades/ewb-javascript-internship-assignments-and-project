// Assignment 6: Arrays, Objects, and Core Methods

const readline = typeof require === "function" ? require("readline") : null;

// array of product objects
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

function runProductAnalytics(filterThresholdRaw) {
  const threshold = Number(filterThresholdRaw) || 50;
  const lines = [];

  // 1. using forEach to print each product
  lines.push("-- All Products (forEach) --");
  console.log("-- All Products (forEach) --");
  products.forEach((product) => {
    const itemStr = `Item: ${product.name} - Price: ₹${product.price}`;
    console.log(itemStr);
    lines.push(itemStr);
  });

  // 2. using filter to find items under threshold
  lines.push(`-- Filtered Products (Price < ₹${threshold}) --`);
  console.log(`-- Filtered Products (Price < ₹${threshold}) --`);
  const affordableProducts = products.filter((product) => product.price < threshold);
  console.log(affordableProducts);
  lines.push(JSON.stringify(affordableProducts, null, 2));

  // 3. using map to create formatted tags
  lines.push("-- Mapped Product Tags (map) --");
  console.log("-- Mapped Product Tags (map) --");
  const productTags = products.map(
    (product) => `${product.name.toUpperCase()} costs ₹${product.price}`
  );
  console.log(productTags);
  lines.push(JSON.stringify(productTags, null, 2));

  return lines.join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.runProductAnalytics = runProductAnalytics;
  window.products = products;
}

// capture filter threshold interactively from user when run in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter price filter threshold in ₹ (default: 50): ", (ans) => {
    rl.close();
    runProductAnalytics(ans.trim() !== "" ? ans.trim() : "50");
  });
}
