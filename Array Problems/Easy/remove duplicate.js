function removeDuplicate(arr) {
  const seen = new Set();
  for (const key of arr) {
    if (!seen.has(key)) {
      seen.add(key);
    }
  }
  return Array.from(seen);
}
console.log(removeDuplicate([1, 1, 1, 2, 2, 4, 5, 5, 6])) // => [ 1, 2, 4, 5, 6 ];

