const mergeSortMain = (() => {
  let list = [15, 8, 28, 5, 19, 33, 11, 46];
  const beginIndex = 0;
  const endIndex = list.length - 1;

  //! Merge Function
  function merge(array, startIndex, lastIndex, middleIndex) {
    let copyList = [...array];
    let firstHalfList = [];
    let lastHalfList = [];

    console.log(`copy list: `);
    console.log(copyList);

    for (let i = startIndex; i < middleIndex; i += 1) {
      firstHalfList.push(copyList[i]);
    }
    console.log(`First Half:`);
    console.log(firstHalfList);
    for (let i = middleIndex; i < lastIndex; i += 1) {
      lastHalfList.push(copyList[i]);
    }
    console.log(`Second Half list: `);
    console.log(lastHalfList);
    console.log(`copy list: `);
    console.log(copyList);

    let n = 0;
    let m = 0;
    let x = 0;

    while (n < firstHalfList.length && m < lastHalfList.length) {
      if (firstHalfList[n] < lastHalfList[m]) {
        copyList[x] = firstHalfList[n];
        n += 1;
      } else {
        copyList[x] = lastHalfList[m];
        m += 1;
      }
      x += 1;

      if (x > 20) {
        console.log("Main loop Broken");
        break;
      }
    }

    while (n < firstHalfList.length) {
      copyList[x] = firstHalfList[n];
      n += 1;
      x += 1;
      if (x > 20) {
        console.log("n loop Broken");
        break;
      }
    }
    while (m < lastHalfList.length) {
      copyList[x] = lastHalfList[m];
      m += 1;
      x += 1;
      if (x > 20) {
        console.log("m loop Broken");
        break;
      }
    }
    return copyList;
  }

  //! MergeSort Function
  function mergeSort(array, startIndex, lastIndex) {
    console.log(startIndex);
    console.log(lastIndex);
    // console.log(array);
    if (startIndex === lastIndex) {
      return;
    }
    const middleIndex = Number(Math.floor((startIndex + lastIndex) / 2));
    mergeSort(array, startIndex, middleIndex);
    mergeSort(array, middleIndex + 1, lastIndex);
    merge(array, startIndex, lastIndex, middleIndex);
    // return array;
  }

  mergeSort(list, beginIndex, endIndex);
  console.log(list);
})();
