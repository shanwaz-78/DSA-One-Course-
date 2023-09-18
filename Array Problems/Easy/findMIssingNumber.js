function find_missing_number(arr, n) {
  let missing_numbers = [];
  for (let i = 1; i < n; i++) {
    if (!arr.includes(i)) {
      missing_numbers.push(i);
    }
  }
  return missing_numbers;
}
console.log(find_missing_number([1, 2, 5], 5));
