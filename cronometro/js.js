let seg = 00;
let min = 00;
let hora = 00;

let cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, 1000);
}

function timer() {
  seg++;
  if (seg == 60) {
    min++;
    seg = 00;
    if (min == 60) {
      hora++;
      min = 00;
    }
  }
  document.getElementById("timer").innerHTML =
    (hora < 10 ? "0" + hora : hora) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (seg < 10 ? "0" + seg : seg);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hora = 0;
  min = 0;
  seg = 0;
  document.getElementById("timer").innerHTML =
    (hora < 10 ? "0" + hora : hora) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (seg < 10 ? "0" + seg : seg);
  clearInterval(cron);
}

