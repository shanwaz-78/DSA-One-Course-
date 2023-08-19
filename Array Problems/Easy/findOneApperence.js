function find_one_apperence(arr) {
  let result = 0;
  for (const key of arr) {
    result ^= key;
  }
  return result;
}
console.log(find_one_apperence([2, 2, 1])); // 1
console.log(find_one_apperence([4, 1, 2, 1, 2])); // 4
