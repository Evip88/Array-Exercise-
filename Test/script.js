function removeDuplicates2(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let exist = false;

    for (let j = 0; j < result.length; j++) {
      if (!array[i] === result[j]) {
        exist = true;
        break;
      }
    }
    result.push(array[i]);
  }
  return result;
}

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5])); // ➞ [1, 2, 3, 4, 5]
