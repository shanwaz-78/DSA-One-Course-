function seletion_sort(unsortArr) {
  for (let i = 0; i < unsort_arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < unsort_arr.length; j++) {
      if (unsort_arr[j] < unsort_arr[min]) {
        min = j;
      }
    }
    const tmp = unsort_arr[min];
    unsort_arr[min] = unsort_arr[i];
    unsort_arr[i] = tmp;
  }
}
seletion_sort([2, 4, 3, 5, 6, 1]);
