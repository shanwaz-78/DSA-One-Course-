const unsort_arr = [10, 12, 22, 32, 18, 4];

function bubbleSort() {
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < unsort_arr.length - 1; i++) {
      if (unsort_arr[i] > unsort_arr[i + 1]) {
        const tmp = unsort_arr[i];
        unsort_arr[i] = unsort_arr[i + 1];
        unsort_arr[i + 1] = tmp;
        swaped = true;
      }
    }
  }
}
bubbleSort();
console.log(unsort_arr);
