import mergeSortMain from "./mergeSort.js";
import "./styles.css";

const mainProject = (() => {
  //   let unsortedList = [15, 8, 28, 5, 19, 33, 11, 46];
  // let unsortedList = [84, 29, 53, 12, 67, 41, 96, 6, 75, 18, 90, 47];
  // let unsortedList = [56, 8, 37, 92, 14, 68, 23, 42, 79, 5, 61, 31, 73, 49, 18];
  // let unsortedList = [78, 32, 59, 4, 87, 21, 65, 93, 10, 55, 39, 84, 16, 72, 50, 98, 7, 26, 63, 91];
  //   console.log(mergeSortMain(unsortedList));

  //! Variables
  let minNum;
  let maxNum;
  let rangeAmount;
  let sortedList;

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
    minNum = getMinRangeEl.value;
    maxNum = getMaxRangeEl.value;
    rangeAmount = getAmountEl.value;
    formEl.reset();
  });
  getCancelBtn.addEventListener("click", () => {
    formEl.reset();
  });
})();
