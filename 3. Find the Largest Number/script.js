// 📌 3. Find the Largest Number

// 🛠️ Hard Code Solution

/* 🔍 Explanation

Check if the array is empty.
Initialize maxNumber with the first element.
Loop through each number, updating maxNumber when a larger number is found.
Return maxNumber.
*/

function largestNumber(arr) {
  if (arr.length === 0) return 0;

  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

console.log(largestNumber([3, 7, 2, 5, 10])); // ➞ 10

//🚀 Modern Solution

/*🔍 Explanation

Uses Math.max(...arr) – Finds the largest number instantly.
Uses ...? (spread operator) – Converts array elements into separate arguments.
Ternary operator handles empty arrays.
✅ Why is this better?

Instant maximum value calculation.
No need for loops. */

const largestNumber1 = (arr) => (arr.length ? Math.max(...arr) : 0);

console.log(largestNumber1([3, 7, 2, 5, 10])); // ➞ 10

// Cool way to use Math.max() is useing spread operator, to spread the numbers in the Math.max() its the
// same as u did Math.max(1,20,30,3,4,10,100)

let array1 = [1, 20, 30, 3, 4, 10, 400];

console.log(Math.max(...array1));
