const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  // get time data using Date()
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
  let ampm = "AM";

  //checks if the hour is greater than 12
  if (h > 12) {
    //if true then minus (h)13-12 which gives 1 (1 pm)
    h = h - 12;
    ampm = "PM";
  }

  //update clock text
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm, (innerText = ampm);

  setTimeout(() => {
    updateClock();
  });
}

updateClock();
