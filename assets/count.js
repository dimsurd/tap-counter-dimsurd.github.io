let btnReset = document.querySelector(".reset"),
  btnCount = document.querySelector(".count"),
  displayNumber = document.querySelector(".displayNumber"),
  result = 0;

function performCount() {
  result++, (displayNumber.innerHTML = result);
}
function performReset() {
  (result = 0), (displayNumber.innerHTML = result);
}

btnCount.addEventListener("click", performCount);
btnReset.addEventListener("click", performReset);
