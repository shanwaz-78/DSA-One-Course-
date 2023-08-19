function find_longest_subarray(arr, k) {
  if (typeof arr !== "object") {
    return "Input Is Not Valid";
  }
  const longestSubArray = new Set();
  for (const index in arr) {
    const currentElem = arr[index];
    for (const key of arr) {
      if (currentElem + key === k) {
        longestSubArray.add(currentElem, key);
      }
    }
  }
  return Array.from(longestSubArray).length;
}

console.log(find_longest_subarray([2, 3, 5], 5)); // 2
console.log(find_longest_subarray([2, 3, 5, 1, 9], 10)); // 3
