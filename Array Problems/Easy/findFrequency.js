function findFrequency(arr) {
  let resultObj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentElem = arr[i];
    let counter = 0;

    for (let j = 0; j < arr.length; j++) {
      if (currentElem === arr[j]) {
        counter++;
      }
    }

    resultObj[currentElem] = counter;
  }

  return resultObj;
}

console.log(findFrequency([10, 5, 10, 15, 10, 5]));

