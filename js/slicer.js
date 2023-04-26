const carousel = document.querySelector(".container-video");
const images = document.querySelectorAll(".video");

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("dragstart", (e) => e.preventDefault());
  
  // Touch events
  image.addEventListener("touchstart", touchStart(index));
  image.addEventListener("touchend", touchEnd);
  image.addEventListener("touchmove", touchMove);

  // Mouse events
  image.addEventListener("mousedown", touchStart(index));
  image.addEventListener("mouseup", touchEnd);
  image.addEventListener("mouseleave", touchEnd);
  image.addEventListener("mousemove", touchMove);
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    animationID = requestAnimationFrame(animation);
    carousel.classList.add("grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < images.length - 1) {
    currentIndex++;
  }

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }

  setPositionByIndex();
  carousel.classList.remove("grabbing");
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -carousel.offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}