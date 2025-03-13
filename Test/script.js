const runningSumDeclarative = (nums) =>
  nums.reduce((acc, curr, i) => {
    acc.push((acc[i - 1] || 0) + curr);
    return acc;
  }, []);

console.log(runningSumDeclarative([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
