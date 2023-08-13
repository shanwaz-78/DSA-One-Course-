function findUnion(arr1, arr2) {
  const union = new Set();
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      union.add(arr2[i]);
    }
  }
  return arr1.concat(Array.from(union)); // IF we use ... here then the time cmplexity of this will be O(n2);
}
console.log(
  findUnion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
);
console.log(findUnion([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
