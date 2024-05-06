// class Doodle {
//   constructor(startColor) {
//     this.canvas = document.getElementById("canvas");
//     this.ctx = this.canvas.getContext("2d");
//     this.clearBtn = document.getElementById("clear-canvas");
//     this.colorWell1 = document.getElementById("draw-red");
//     this.colorWell2 = document.getElementById("draw-black");
//     this.colorWell3 = document.getElementById("draw-yellow");
//     this.activeColor = startColor;
//     this.ctx.strokeStyle = startColor;
//     this.isPainting = false;
//     this.canvas.width = canvas.getBoundingClientRect().width;
//     this.canvas.height = canvas.getBoundingClientRect().height;
//     this.canvasOffsetX = canvas.offsetLeft;
//   }

//   draw(e) {
//     if (!this.isPainting) {
//       return;
//     }

//     ctx.lineWidth = 2;
//     ctx.lineCap = "round";

//     ctx.lineTo(e.clientX - this.canvasOffsetX, window.scrollY + e.clientY);
//     ctx.stroke();
//   }
// }

// const doodle = new Doodle("white");

function isMobile() {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    var mq = match("(pointer:coarse)");
    return mq.matches;
  }
  return false;
}

if (isMobile()) {
  let icon = document.getElementById("logo-icon");
  icon.classList = "";
  icon.textContent = "☀️";
} else {
  const canvas = document.getElementById("canvas");
  const clear = document.getElementById("clear-canvas");
  const red = document.getElementById("draw-red");
  const black = document.getElementById("draw-black");
  const yellow = document.getElementById("draw-yellow");
  const ctx = canvas.getContext("2d");

  // console.log(ctx.strokeStyle);
  const toggle = document.getElementsByClassName("logo")[0];
  const toolbar = document.getElementById("toolbar");
  const doodleMessage = document.getElementById("doodle-message");
  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;
  console.log(canvasOffsetX, canvasOffsetY);

  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  console.log(canvas.width, canvas.height);
  let isPainting;
  let currentColor = "white";

  canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    ctx.strokeStyle = currentColor;
    // startX = e.clientX;
    // startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", draw);

  // canvas.addEventListener("pointerdown", (e) => {
  //   isPainting = true;
  //   ctx.strokeStyle = currentColor;
  //   // startX = e.clientX;
  //   // startY = e.clientY;
  // });

  // canvas.addEventListener("pointerup", (e) => {
  //   isPainting = false;
  //   ctx.stroke();
  //   ctx.beginPath();
  // });

  // canvas.addEventListener("pointermove", draw);

  function draw(e) {
    if (!isPainting) {
      return;
    }

    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - canvasOffsetX, window.scrollY + e.clientY);
    ctx.stroke();
  }

  function reset() {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  clear.addEventListener("click", () => {
    reset();
  });

  red.addEventListener("click", () => {
    currentColor = "#ea4646";
  });

  black.addEventListener("click", () => {
    currentColor = "white";
  });

  yellow.addEventListener("click", () => {
    currentColor = "#efbe43";
  });

  function toggleIcon() {
    let icon = document.getElementById("logo-icon");
    icon.classList = icon.classList.contains("fa-hand-pointer")
      ? "fa fa-pencil-alt"
      : "fa fa-hand-pointer";
    doodleMessage.textContent =
      doodleMessage.textContent == "doodle! 👀" ? "no doodle 🙅" : "doodle! 👀";
  }

  toggle.addEventListener("click", () => {
    canvas.classList.toggle("show");
    toolbar.classList.toggle("show");
    ctx.strokeStyle = "white";
    toggleIcon();
    reset();
  });

  toggle.addEventListener("mouseover", (e) => {
    doodleMessage.style.top = `${e.clientY}px`;
    doodleMessage.style.left = `${e.clientX + 10}px`;
    doodleMessage.classList.add("show");
  });

  toggle.addEventListener("mousemove", (e) => {
    doodleMessage.style.top = `${e.clientY}px`;
    doodleMessage.style.left = `${e.clientX + 10}px`;
  });

  toggle.addEventListener("mouseout", (e) => {
    doodleMessage.classList.remove("show");
  });
  // window.addEventListener("resize", () => {
  //   canvas.width = canvas.getBoundingClientRect().width;
  //   canvas.height = canvas.getBoundingClientRect().height;
  // });
}
