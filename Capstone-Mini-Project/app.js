// Project Title: Interactive Product Inventory & Analytics Dashboard
// Currency: Indian Rupee (₹)

const readline = typeof require === "function" ? require("readline") : null;

// 1. Data & Input Initialization
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// 2. Control Flow & Conditional Evaluation
// function to assign category badges using switch based on price thresholds
function getCategoryBadge(price) {
  let tier = "";
  if (price >= 500) {
    tier = "PREMIUM";
  } else if (price >= 100) {
    tier = "STANDARD";
  } else {
    tier = "BUDGET";
  }

  switch (tier) {
    case "PREMIUM":
      return "Premium";
    case "STANDARD":
      return "Standard";
    case "BUDGET":
      return "Budget";
    default:
      return "Unclassified";
  }
}

// 4. Functions & Scope
// regular function to calculate inventory statistics with custom tax/discount parameters and local scope
function calculateTotalInventory(items, taxRate = 0, discountRate = 0) {
  // locally scoped calculation variables
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price;
  }
  const discountAmount = subtotal * (discountRate / 100);
  const discountedTotal = subtotal - discountAmount;
  const taxAmount = discountedTotal * (taxRate / 100);
  const finalTotal = discountedTotal + taxAmount;
  return finalTotal;
}

// arrow function to format report list tags
const formatReportTag = (item) => `${item.name.toUpperCase()}: ₹${item.price}`;

// arrow function for calculating individual discounted item prices
const applyDiscount = (price, percent = 0) => price - (price * (percent / 100));

// main project execution pipeline
function processInventoryAnalytics(newProductName, newProductPriceRaw) {
  const lines = [];

  lines.push("--- Initializing Inventory System ---");
  console.log("\n--- Initializing Inventory System ---");

  const name = newProductName ? newProductName.trim() : "Monitor";
  // explicit type conversion using Number()
  const price = Number(newProductPriceRaw);

  // validation using if...else
  if (!name || isNaN(price) || price <= 0) {
    const errMsg = "Invalid product data provided. Skipped insertion.";
    console.log(errMsg);
    lines.push(errMsg);
  } else {
    inventory.push({ name: name, price: price });
    const addMsg = `[Prompt executed: User adds "${name}" at "₹${price}"]`;
    console.log(addMsg);
    lines.push(addMsg);
  }

  // 3. Loops & Flow Control: search inventory and handle bad/missing inputs cleanly
  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    if (!item.name || typeof item.price !== "number" || item.price <= 0) {
      continue; // skip corrupt or invalid items
    }
    if (item.price > 1000000) {
      break; // guard against extreme values
    }
  }

  // 5. Array Methods & Iteration
  // forEach: log final inventory roster with category badges
  lines.push("\n--- Processing Inventory Roster (forEach) ---");
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((item) => {
    const category = getCategoryBadge(item.price);
    const itemLog = `* Item: ${item.name} (₹${item.price}) -> Category: ${category}`;
    console.log(itemLog);
    lines.push(itemLog);
  });

  // Financial Analytics
  lines.push("\n--- Financial Analytics ---");
  console.log("\n--- Financial Analytics ---");
  const totalValue = calculateTotalInventory(inventory, 0, 0);
  const totalLog = `Total Inventory Value: ₹${totalValue}`;
  console.log(totalLog);
  lines.push(totalLog);

  // filter: isolate affordable items under ₹200
  const affordableItems = inventory
    .filter((item) => item.price < 200)
    .map((item) => item.name);

  const affLog = `Filtered Affordable Items (Under ₹200): ${JSON.stringify(affordableItems).replace(/,/g, ", ")}`;
  console.log(affLog);
  lines.push(affLog);

  // map: produce transformed uppercase report summary
  const formattedReport = inventory.map(formatReportTag);
  const repLog = `Formatted Report List: ${JSON.stringify(formattedReport).replace(/,/g, ", ")}`;
  console.log(repLog);
  lines.push(repLog);

  return lines.join("\n");
}

// export to global scope for browser UI
if (typeof window !== "undefined") {
  window.inventory = inventory;
  window.getCategoryBadge = getCategoryBadge;
  window.calculateTotalInventory = calculateTotalInventory;
  window.formatReportTag = formatReportTag;
  window.processInventoryAnalytics = processInventoryAnalytics;
}

// interactive execution handling when run directly in CLI terminal
if (typeof process !== "undefined" && process.stdin && process.stdout && readline) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter product name (default: Monitor): ", (nameInput) => {
    rl.question("Enter product price in ₹ (default: 150): ", (priceInput) => {
      rl.close();
      const finalName = nameInput.trim() !== "" ? nameInput.trim() : "Monitor";
      const finalPrice = priceInput.trim() !== "" ? priceInput.trim() : "150";
      processInventoryAnalytics(finalName, finalPrice);
    });
  });
}
