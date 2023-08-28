const mergeSortMain = (() => {
  let list = [37, 15, 8, 42, 28, 5, 19, 33, 11, 46];
  const beginIndex = 0;
  const endIndex = list.length - 1;

  function merge(array, startIndex, lastIndex, middleIndex) {
    let firstHalfList = [];
    let lastHalfList = [];
    for (let i = startIndex; i < middleIndex; i++) {
      firstHalfList[i] = array[i];
    }
    for (let i = middleIndex; i < lastIndex; i++) {
      lastHalfList[i] = array[i];
    }
    let n = 0;
    let m = 0;
    let x = 0;

    while (n < firstHalfList.length && m < lastHalfList.length) {
      if (firstHalfList[n] < lastHalfList[m]) {
        array[x] = firstHalfList[n];
        n += 1;
      } else {
        array[x] = lastHalfList[m];
        m += 1;
      }
    }

    while (n < firstHalfList.length) {
      array[x] = firstHalfList[n];
      n += 1;
      x += 1;
    }
    while (n < lastHalfList.length) {
      array[x] = lastHalfList[m];
      m += 1;
      x += 1;
    }
    return array;
  }

  function mergeSort(array, startIndex, lastIndex) {
    if (startIndex === lastIndex) {
      return;
    }
    let middleIndex = Number(Math.floor((startIndex + lastIndex) / 2));
    mergeSort(array, startIndex, middleIndex);
    mergeSort(array, middleIndex, lastIndex);
    merge(array, startIndex, lastIndex, middleIndex);
    return list;
  }

  mergeSort(list, beginIndex, endIndex);
})();
