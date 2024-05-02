const canvas = document.getElementById("canvas");
const clear = document.getElementById("clear-canvas");
const red = document.getElementById("draw-red");
const black = document.getElementById("draw-black");
const yellow = document.getElementById("draw-yellow");
const ctx = canvas.getContext("2d");
const toggle = document.getElementsByClassName("logo")[0];
const toolbar = document.getElementById("toolbar");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
console.log(canvasOffsetX, canvasOffsetY);

canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
console.log(canvas.width, canvas.height);
let isPainting;

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
});

const draw = (e) => {
  if (!isPainting) {
    return;
  }

  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX - canvasOffsetX, window.scrollY + e.clientY);
  ctx.stroke();
};

function reset() {
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", draw);

clear.addEventListener("click", () => {
  reset();
});

red.addEventListener("click", () => {
  ctx.strokeStyle = "#ea4646";
});

black.addEventListener("click", () => {
  ctx.strokeStyle = "white";
});

yellow.addEventListener("click", () => {
  ctx.strokeStyle = "#efbe43";
});

function toggleIcon() {
  let icon = document.getElementById("logo-icon");
  icon.classList = icon.classList.contains("fa-hand-pointer")
    ? "fa fa-pencil-alt"
    : "fa fa-hand-pointer";
}

toggle.addEventListener("click", () => {
  canvas.classList.toggle("show");
  toolbar.classList.toggle("show");
  ctx.strokeStyle = "white";
  toggleIcon();
  reset();
});
// window.addEventListener("resize", () => {
//   canvas.width = canvas.getBoundingClientRect().width;
//   canvas.height = canvas.getBoundingClientRect().height;
// });
