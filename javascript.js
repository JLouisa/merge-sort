// const mergeSortMain = (() => {
let list = [15, 8, 28, 5, 19, 33, 11, 46];
const beginIndex = 0;
const endIndex = list.length - 1;

//! Merge Function
function merge(array, startIndex, lastIndex, middleIndex) {
  console.log(`Start Index in merge = ${startIndex}`);
  console.log(`Last Index in merge = ${lastIndex}`);
  console.log(`Middle Index in merge = ${middleIndex}`);
  let copyList = [...array];
  let firstHalfList = [];
  let lastHalfList = [];

  // console.log(`copy list: `);
  // console.log(copyList);

  for (let i = startIndex; i <= middleIndex; i += 1) {
    firstHalfList.push(copyList[i]);
  }

  for (let i = middleIndex + 1; i <= lastIndex; i += 1) {
    lastHalfList.push(copyList[i]);
  }
  console.log(`First Half:`);
  console.log(firstHalfList);
  console.log(`Second Half list: `);
  console.log(lastHalfList);
  console.log(`copy list: `);
  console.log(copyList);

  let n = 0;
  let m = 0;
  let x = startIndex;
  console.log(`Length for First: ${firstHalfList.length}`);
  console.log(`Length for Last ${lastHalfList.length}`);

  while (n < firstHalfList.length && m < lastHalfList.length) {
    if (firstHalfList[n] < lastHalfList[m]) {
      array[x] = firstHalfList[n];
      n += 1;
    } else {
      array[x] = lastHalfList[m];
      m += 1;
    }
    x += 1;

    if (x > 20) {
      console.log("Main loop Broken");
      break;
    }
  }
  console.log(`Before:`);
  console.log(copyList);

  while (n < firstHalfList.length) {
    array[x] = firstHalfList[n];
    n += 1;
    x += 1;
    if (x > 20) {
      console.log("n loop Broken");
      break;
    }
  }
  while (m < lastHalfList.length) {
    array[x] = lastHalfList[m];
    m += 1;
    x += 1;
    if (x > 20) {
      console.log("m loop Broken");
      break;
    }
  }
  console.log(copyList);
  console.log(`Array:`);
  console.log(array);

  return array;
}

//! MergeSort Function
function mergeSort(array, startIndex, lastIndex) {
  console.log(`Start Index in mergeSort = ${startIndex}`);
  console.log(`Last Index in mergeSort = ${lastIndex}`);
  console.log(array);
  if (startIndex === lastIndex) {
    return;
  }
  const middleIndex = Number(Math.floor((startIndex + lastIndex) / 2));
  mergeSort(array, startIndex, middleIndex);
  mergeSort(array, middleIndex + 1, lastIndex);
  merge(array, startIndex, lastIndex, middleIndex);
  // return array;
}

console.log(mergeSort(list, beginIndex, endIndex));
console.log(list);
// })();
