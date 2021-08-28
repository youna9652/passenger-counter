let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let countStr = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
  countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.innerText = 0;
  count = 0;
}
