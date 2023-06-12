document.addEventListener("mousemove", function (event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let scrollElement = document.querySelector(".scroll");
  if (scrollElement) {
    if (mouseX < 400 && mouseY < 500) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    } else {
      scrollElement.scrollTop = 0;
    }
  }
});
