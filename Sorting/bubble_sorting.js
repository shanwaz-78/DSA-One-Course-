const unsort_arr = [10, 12, 22, 32, 18, 4];

function bubble_sort() {
  for (let i = unsort_arr.length - 1; i > 0; i--) {
    let max = i;
    for (let j = i - 1; j >= 0; j--) {
      if (unsort_arr[j] > unsort_arr[max]) {
        max = j;
      };
    };
    const tmp = unsort_arr[max];
    unsort_arr[max] = unsort_arr[i];
    unsort_arr[i] = tmp;
  };
};
bubble_sort();
console.log(unsort_arr); // -> [4,10,12,18,22,32];
