// Imperative Approach Breakdown (Step-by-step, explicit)

// Define the function: We create a function that takes an array (nums) as input.
// Create an empty array (result) to store the running sum.
// Initialize a sum variable (sum = 0) to keep track of the cumulative sum as we go through the array.
// Use a for loop to iterate over each number in the array.
// Add the current number to sum. This keeps updating the total sum at each step.
// Push the updated sum into the result array to store the running sum at that index.
// Return the final result array after the loop is done.

function runningSumImperative(nums) {
  let result = []; // Step 2: Initialize an empty array to store results
  let sum = 0; // Step 3: Start with sum = 0

  for (let i = 0; i < nums.length; i++) {
    // Step 4: Loop through array
    sum += nums[i]; // Step 5: Add the current number to sum
    result.push(sum); // Step 6: Store the updated sum in result array
  }

  return result; // Step 7: Return the final running sum array
}

// Example usage
console.log(runningSumImperative([1, 2, 3, 4])); // Output: [1, 3, 6, 10]

// Declarative Approach Breakdown (Using .reduce())

// Use .reduce() – a built-in array method that simplifies operations by accumulating values.
// Initialize an empty array (acc = accumulator) – This will store our final running sum.
// Loop through each number (curr) using .reduce(), while also keeping track of the index (i).
// Calculate the new sum at each step:
// If it's the first element, start with that value.
// Otherwise, add the previous sum (last value in acc) to the current number.
// Push the new sum into acc.
// Return acc at the end, which contains the running sum.

const runningSumDeclarative = (nums) =>
  nums.reduce((acc, curr, i) => {
    acc.push((acc[i - 1] || 0) + curr); // Step 4: Add previous sum or start from 0
    return acc; // Step 5: Store result in accumulator
  }, []); // Step 2: Start with an empty array

// Example usage
console.log(runningSumDeclarative([1, 2, 3, 4])); // Output: [1, 3, 6, 10]

// Summary & Key Differences

// Approach	How It Works	Pros	Cons
// Imperative (Loop-based)	Uses a for loop to manually track and update sum.	Easy to understand, clear step-by-step process.	More lines of code, mutates variables.
// Declarative (Functional)	Uses .reduce() to process the array functionally.	More concise, follows functional programming principles.	Might be harder to grasp for beginners.
// Final Thoughts
// Use the imperative approach if you prefer explicit steps and control.
// Use the declarative approach if you prefer concise, functional-style code.
