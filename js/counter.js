let counterUp = document.querySelectorAll(".counter-up");
let convert = Array.from(counterUp);

convert.map((item) => {
  let counter = 0;

  function count() {
    counter++;
    item.innerHTML = counter;
    if (counter == item.dataset.number) {
      clearInterval(timing);
    }
  }
  let timing = setInterval(() => {
    count();
  }, item.dataset.time);
});
