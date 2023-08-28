const mergeSortMain = (() => {
  // let list = [15, 8, 28, 5, 19, 33, 11, 46];
  let list = [84, 29, 53, 12, 67, 41, 96, 6, 75, 18, 90, 47];
  //   let list = [56, 8, 37, 92, 14, 68, 23, 42, 79, 5, 61, 31, 73, 49, 18];
  //   let list = [78, 32, 59, 4, 87, 21, 65, 93, 10, 55, 39, 84, 16, 72, 50, 98, 7, 26, 63, 91];
  const beginIndex = 0;
  const endIndex = list.length - 1;

  //! Merge Function
  // Function takes the list, an Start index, an stop Index and the middle Index
  // Will the array in to half and compare each half with each other
  function merge(array, startIndex, lastIndex, middleIndex) {
    const copyList = [...array];
    const firstHalfList = [];
    const lastHalfList = [];
    // Creating the two halfs
    for (let i = startIndex; i <= middleIndex; i += 1) {
      firstHalfList.push(copyList[i]);
    }

    for (let i = middleIndex + 1; i <= lastIndex; i += 1) {
      lastHalfList.push(copyList[i]);
    }

    let n = 0;
    let m = 0;
    let x = startIndex;
    // comparing which is smaller than swapping.
    while (n < firstHalfList.length && m < lastHalfList.length) {
      if (firstHalfList[n] < lastHalfList[m]) {
        array[x] = firstHalfList[n];
        n += 1;
      } else {
        array[x] = lastHalfList[m];
        m += 1;
      }
      x += 1;
    }
    // Add left over to the array
    while (n < firstHalfList.length) {
      array[x] = firstHalfList[n];
      n += 1;
      x += 1;
    }
    while (m < lastHalfList.length) {
      array[x] = lastHalfList[m];
      m += 1;
      x += 1;
    }
    return array;
  }

  //! MergeSort Function
  function mergeSort(array, startIndex, lastIndex) {
    if (startIndex === lastIndex) {
      return;
    }
    // Looking for the middle Index to replace the Start Index or Last Index
    const middleIndex = Number(Math.floor((startIndex + lastIndex) / 2));
    mergeSort(array, startIndex, middleIndex);
    mergeSort(array, middleIndex + 1, lastIndex);
    merge(array, startIndex, lastIndex, middleIndex);
    return array;
  }

  console.log(mergeSort(list, beginIndex, endIndex));
})();
