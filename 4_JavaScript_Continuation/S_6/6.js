const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/v_1.mp4");

const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(videoEl);

const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
playEl.classList.add("play");
pauseEl.classList.add("pause");

playEl.addEventListener("click", function (e) {
  videoEl.play();
  console.log(videoEl.duration, videoEl.currentTime);
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
  console.log(videoEl.duration, videoEl.currentTime);
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");

rangeEl.addEventListener("change", function (e) {
  console.log(e.target.value);
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

videoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});

volumeEl.addEventListener("change", function (e) {
  videoEl.value = e.target.value / 100; 
  console.log(videoEl.value);
});

containerEl.appendChild(volumeEl);
containerEl.appendChild(rangeEl);
containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
