const unsort_arr = [13, 46, 24, 52, 20, 9];

function insertion_sort() {
  for (let i = 1; i < unsort_arr.length; i++) {
    let current = unsort_arr[i];
    let j = i - 1;
    while (j >= 0 && unsort_arr[j] > current) {
      unsort_arr[j + 1] = unsort_arr[j];
      j--;
    };
    unsort_arr[j + 1] = current;
  };
};

insertion_sort();
console.log(unsort_arr);
