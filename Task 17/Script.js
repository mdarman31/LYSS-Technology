// --------------------------------------------------
// JavaScript Exception Handling Project
// Contains:
// 1. Undeclared Variable Error
// 2. Divide by Zero Error
// 3. Out of Bound Error
// 4. Exception Handling with finally block
// --------------------------------------------------

// 1. Handle Exception: Printing an Undeclared Variable
console.log("1️⃣ Undeclared Variable Error");
try {
    console.log(undeclaredVar); // This variable is not declared
} catch (error) {
    console.error("Error caught: " + error.message);
}
console.log("\n");

// 2. Throw "Divide by Zero" Error
console.log("2️⃣ Divide by Zero Error");
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divide by Zero Error");
        }
        console.log(`Result: ${a / b}`);
    } catch (error) {
        console.error("Error caught: " + error.message);
    }
}
divide(10, 0); // Example
console.log("\n");

// 3. Throw "Out of Bound Error"
console.log("3️⃣ Out of Bound Error");
function accessArrayElement(arr, index) {
    try {
        if (index >= arr.length || index < 0) {
            throw new Error("Out of Bound Error");
        }
        console.log("Element at index " + index + " is: " + arr[index]);
    } catch (error) {
        console.error("Error caught: " + error.message);
    }
}
const myArray = [10, 20, 30];
accessArrayElement(myArray, 5); // Example
console.log("\n");

// 4. Exception Handling with finally block
console.log("4️⃣ Exception Handling with finally block");
function readFile(fileName) {
    try {
        if (!fileName) {
            throw new Error("File name not provided");
        }
        console.log("Reading file: " + fileName);
    } catch (error) {
        console.error("Error caught: " + error.message);
    } finally {
        console.log("Execution of try-catch-finally block is complete.");
    }
}
readFile(""); // Example
