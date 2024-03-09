"use strict";
if (window.innerWidth <= 768) {
  let gallery = document.querySelector(".picture-section__wrapper");
  let images = document.querySelectorAll(".picture-section__image");
  images[1].classList.add("hidden");
  let xDiffSwipe = 0;

  function swipeStart(eventSwipe) {
    let firstSwipe = eventSwipe.touches[0];
    x1Swipe = firstSwipe.clientX;
  }

  function swipeMove(eventSwipe) {
    if (!x1Swipe) {
      return false;
    }
    let x2Swipe = eventSwipe.touches[0].clientX;
    xDiffSwipe = x2Swipe - x1Swipe;
    if (Math.abs(xDiffSwipe) > 50) {
      swipeEnd;
    } else return false;
  }

  function swipeEnd() {
    if (Math.abs(xDiffSwipe) > 50) {
      images.forEach((element) => {
        element.classList.toggle("hidden");
        xDiffSwipe = 0;
      });
    }
  }

  gallery.addEventListener("touchstart", swipeStart, false);
  gallery.addEventListener("touchmove", swipeMove, false);
  gallery.addEventListener("touchend", swipeEnd);
}
