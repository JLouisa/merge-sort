import mergeSortMain from "./mergeSort.js";
import "./styles.css";
export { sortedList };

let sortedList = [];
const mainProject = (() => {
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
  const sortBtn = document.getElementById("sortBtn");

  //!Listener
  getOkBtn.addEventListener("click", () => {
    event.preventDefault();
    calcInput();
    formEl.reset();
    // unsortedListEl.style.visibility = "hidden";
  });
  getCancelBtn.addEventListener("click", () => {
    formEl.reset();
  });
  sortBtn.addEventListener("click", () => {
    formEl.reset();
    displayController();
    renderSorted();
    sortBtn.style.visibility = "hidden";
  });

  //! Display Controller
  function calcInput() {
    createList = [];
    sortedList = [];
    minNum = getMinRangeEl.value;
    maxNum = getMaxRangeEl.value;
    if (maxNum < minNum) {
      maxNum = minNum + 1;
    }
    rangeAmount = getAmountEl.value;
    calcUnSortedList(rangeAmount, minNum, maxNum);
    render();
    renderBtn(1);
  }
  function displayController() {
    mergeSortMain(sortedList);
    render();
    renderSorted(1);
    renderBtn(0);
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
    //Had to do it this way because mergeSortMain was sorted the
    //createList
    createList = [];
    createList = [...sortedList];
  }

  //! Renderer
  function render() {
    unsortedListEl.textContent = createList;
  }
  function renderSorted() {
    sortedListEl.textContent = sortedList;
  }
  function renderBtn(visible) {
    switch (visible) {
      case 0: {
        sortBtn.removeAttribute("style");
        sortBtn.style.visibility = "hidden";
      }
      case 1: {
        sortBtn.style.visibility = "visible";
      }
    }
  }
})();
