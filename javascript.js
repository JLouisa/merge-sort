const mergeSortMain = (() => {
  let list = [37, 15, 8, 42, 28, 5, 19, 33, 11, 46];
  const beginIndex = 0;
  const endIndex = list.length - 1;

  function mergeSort(array, startIndex, lastIndex) {
    if (startIndex === lastIndex) {
      return;
    }
    let middleIndex = Number(Math.floor((i + listLength) / 2));
    mergeSort(array, startIndex, middleIndex);
  }

  mergeSort(list, beginIndex, endIndex);
})();
