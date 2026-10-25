# JavaScript Internship Assignments & Capstone Project

This repository contains clean, human-written solutions for all assigned JavaScript practical tasks and the Capstone Mini Project. Every assignment and the capstone project comes with an interactive frontend UI to test and interact with user inputs in the browser, while also being 100% executable in Node.js via the terminal.

---

## 📁 Repository Structure

```
.
├── index.html            # Main Interactive Portal: test all assignments & project in one UI
│
├── Assignment-1-Variables-and-DataTypes/
│   ├── index.html        # Interactive UI for user data & typeof inspection
│   └── script.js          # Variables (var, let, const), data types, typeof operator
│
├── Assignment-2-Operators-and-Input/
│   ├── index.html        # Interactive UI for bill & tip computation
│   └── script.js          # prompt() / CLI inputs, Number() conversion, arithmetic & assignment ops
│
├── Assignment-3-Conditional-Logic/
│   ├── index.html        # Interactive score evaluator & grade display
│   └── script.js          # if...else score tiers, switch grade, ternary operator
│
├── Assignment-4-Loops-and-Control-Structures/
│   ├── index.html        # Interactive multiplication & loop execution viewer
│   └── script.js          # for loop, while with break, do...while with continue
│
├── Assignment-5-Functions-and-Scope/
│   ├── index.html        # Interactive rectangle dimensions & scope test viewer
│   └── script.js          # Regular & arrow functions, default params, scope demo
│
├── Assignment-6-Arrays-and-Objects/
│   ├── index.html        # Interactive price filter & product transformation viewer
│   └── script.js          # Object arrays, forEach(), filter(), and map()
│
└── Capstone-Mini-Project/
    ├── index.html        # Interactive Product Inventory & Analytics Dashboard
    └── app.js            # Console-based & UI application logic with Rupee (₹)
```

---

## 🚀 How to Run

### Method 1: Interactive Browser UI
- **All-in-One Dashboard Portal**: Simply double-click or open `index.html` at the root of the project. It provides top navigation tabs to switch between and interact with all 6 assignments and the Capstone Mini Project.
- **Individual Projects**: Open `index.html` located inside any assignment or project folder to interact with that specific task.

### Method 2: Using Node.js (CLI)
You can also run any assignment or the capstone project directly from the root terminal:

```bash
# Assignment 1
node "Assignment-1-Variables-and-DataTypes/script.js"

# Assignment 2
node "Assignment-2-Operators-and-Input/script.js"

# Assignment 3
node "Assignment-3-Conditional-Logic/script.js"

# Assignment 4
node "Assignment-4-Loops-and-Control-Structures/script.js"

# Assignment 5
node "Assignment-5-Functions-and-Scope/script.js"

# Assignment 6
node "Assignment-6-Arrays-and-Objects/script.js"

# Capstone Mini Project
node "Capstone-Mini-Project/app.js"
```

### Method 2: In the Browser
- **Capstone Mini Project**: Open `Capstone-Mini-Project/index.html` in your browser and press **F12** (Developer Tools -> Console) to interact with browser prompts and view logs.

---

## 📝 Assignment Overviews & Expected Outputs

### Assignment 1: Variables, Data Types, and Console Operations
- **Concepts**: `var`, `let`, `const`, primitive types, object types, and `typeof` operator.
- **Console Output**:
  ```
  Name: Alice (Type: string)
  Age: 25 (Type: number)
  Is Employed: true (Type: boolean)
  Skills: ["HTML", "CSS", "JavaScript"] (Type: object)
  ```

### Assignment 2: Operators, Expressions, and Input Handling
- **Concepts**: User input with `prompt()` / `readline`, explicit type conversion (`Number()`), arithmetic operators, compound assignment operators (`+=`).
- **Console Output**:
  ```
  Subtotal: ₹100
  Tip Percentage: 15%
  Calculated Tip: ₹15
  Total Amount to Pay: ₹115
  ```

### Assignment 3: Conditional Logic Implementation
- **Concepts**: Score evaluation using `if...else`, letter grades via `switch`, and pass/fail status with ternary (`? :`).
- **Console Output**:
  ```
  Score: 85
  Grade: B
  Status: Passed
  ```

### Assignment 4: Loop Control Structures
- **Concepts**: `for` loop for multiplication table, `while` loop with `break` (divisible by 6), and `do...while` with `continue`.
- **Console Output**:
  ```
  -- Multiplication Table of 5 --
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  5 x 4 = 20
  5 x 5 = 25
  -- First number > 10 divisible by 6 --
  Found: 12
  ```

### Assignment 5: Function Architecture and Scope
- **Concepts**: Standard function & arrow function with default parameters, demonstrating function vs block scope boundaries.
- **Console Output**:
  ```
  Standard Function Area (Default 5x4): 20
  Arrow Function Area (Custom 10x3): 30
  Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)
  ```

### Assignment 6: Arrays, Objects, and Core Methods
- **Concepts**: Array of product objects, `forEach()` printing, `filter()` price criteria, and `map()` label transformations.
- **Console Output**:
  ```
  -- All Products (forEach) --
  Item: Laptop - Price: ₹800
  Item: Mouse - Price: ₹25
  Item: Keyboard - Price: ₹45
  -- Filtered Products (Price < ₹50) --
  [ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]
  -- Mapped Product Tags (map) --
  [ 'LAPTOP costs ₹800', 'MOUSE costs ₹25', 'KEYBOARD costs ₹45' ]
  ```

---

## 🏆 Capstone Mini Project: Console Application

An integrated console-based application combining all core JavaScript concepts:
1. **Data & Input Initialization**: User product capture with type conversion and default seed data.
2. **Control Flow & Conditional Evaluation**: Validation of inputs and dynamic category tier assignment (`Premium`, `Standard`, `Budget`) using `if...else` and `switch`.
3. **Loops & Flow Control**: Integrity scan using loops with `break` and `continue`.
4. **Functions & Scope**: Pure functions for total valuation with custom tax/discount parameters and encapsulated local scoping, alongside arrow functions for label formatting.
5. **Array Methods & Iteration**: `forEach()` for inventory logging, `filter()` for budget isolation (< ₹200), and `map()` for transformed uppercase reporting tags.

### Console Output (with Rupee ₹):
```
Enter product name (default: Monitor): Monitor
Enter product price in ₹ (default: 150): 150

--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "₹150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop (₹800) -> Category: Premium
* Item: Mouse (₹25) -> Category: Budget
* Item: Monitor (₹150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: ₹975
Filtered Affordable Items (Under ₹200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: ₹800", "MOUSE: ₹25", "MONITOR: ₹150"]
```

