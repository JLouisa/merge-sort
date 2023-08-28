import mergeSortMain from "./mergeSort.js";
import "./styles.css";
export { sortedList };

let sortedList = [];
const mainProject = (() => {
  //   let unsortedList = [15, 8, 28, 5, 19, 33, 11, 46];
  // let unsortedList = [84, 29, 53, 12, 67, 41, 96, 6, 75, 18, 90, 47];
  // let unsortedList = [56, 8, 37, 92, 14, 68, 23, 42, 79, 5, 61, 31, 73, 49, 18];
  // let unsortedList = [78, 32, 59, 4, 87, 21, 65, 93, 10, 55, 39, 84, 16, 72, 50, 98, 7, 26, 63, 91];

  //! Variables
  let minNum;
  let maxNum;
  let rangeAmount;
  let createList = [];

  //! DOM Caches
  const formEl = document.querySelector("form");
  const getMinRangeEl = document.getElementById("minRange");
  const getMaxRangeEl = document.getElementById("maxRange");
  const getAmountEl = document.getElementById("amount");
  const unsortedListEl = document.querySelector(".unsortedList");
  const sortedListEl = document.querySelector(".sortedList");
  const getOkBtn = document.getElementById("okBtn");
  const getCancelBtn = document.getElementById("cancelBtn");

  //!Listener
  getOkBtn.addEventListener("click", () => {
    event.preventDefault();
    displayController();
    formEl.reset();
  });
  getCancelBtn.addEventListener("click", () => {
    formEl.reset();
  });

  //! Display Controller
  function displayController() {
    minNum = getMinRangeEl.value;
    maxNum = getMaxRangeEl.value;
    rangeAmount = getAmountEl.value;
    calcUnSortedList(rangeAmount, minNum, maxNum);
    mergeSortMain(sortedList);
    console.log(createList);
    render();
  }

  //! Create unsorted List Module
  //    Returns a random integer between min (inclusive) and max (inclusive).
  //    The value is no lower than min (or the next integer greater than min
  //    if min isn't an integer) and no greater than max (or the next integer
  //    lower than max if max isn't an integer).
  //    Using Math.round() will give you a non-uniform distribution!

  function calcRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function calcUnSortedList(amount, min, max) {
    let i = 0;
    while (i < amount) {
      let randomNumber = calcRandomNumber(min, max);
      if (!sortedList.includes(randomNumber)) {
        sortedList.push(randomNumber);
        i++;
      }
    }
    createList = [...sortedList];
  }

  //! Renderer
  function render() {
    unsortedListEl.textContent = createList;
    sortedListEl.textContent = sortedList;
  }
})();
