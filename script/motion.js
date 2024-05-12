const motionItems = document.querySelectorAll(".motion");
if (motionItems.length > 0) {
  window.addEventListener("scroll", motionScroll);
  function motionScroll() {
    for (let i = 0; i < motionItems.length; i++) {
      const motionItem = motionItems[i];
      const motionItemHeight = motionItem.offsetHeight;
      const motionItemOffset = offset(motionItem).top;
      const motionStart = 5;
      let motionItemPoint = window.innerHeight - motionItemHeight / motionStart;
      if (motionItemHeight > window.innerHeight) {
        motionItemPoint = window.innerHeight - window.innerHeight / motionStart;
      }
      if (
        pageYOffset > motionItemOffset - motionItemPoint &&
        pageYOffset < motionItemOffset + motionItemHeight
      ) {
        motionItem.classList.add("active");
      }
    }
  }
  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(motionScroll, 300);
}

let img = 0;
let btn = 0;
let imgPath = "./images/bed.png";

document.getElementById("btn-next").addEventListener("click", (event) => {
  img++;

  if (img == 0) {
    imgPath = "./images/bed.png";
  } else if (img == 1) {
    imgPath = "./images/bed1.png";
  } else if (img == 2) {
    imgPath = "./images/bed2.png";
  } else {
    img = 0;
    imgPath = "./images/bed.png";
  }

  document.querySelector("#image").style = "opacity: 0.4";
  setTimeout(() => {
    document.querySelector("#image").src = imgPath;
  }, 300);
  setTimeout(() => {
    document.querySelector("#image").style = "opacity: 1";
  }, 500);
});

document.getElementById("btn-prev").addEventListener("click", (event) => {
  img--;

  if (img == 0) {
    imgPath = "./images/bed.png";
  } else if (img == 1) {
    imgPath = "./images/bed1.png";
  } else if (img == 2) {
    imgPath = "./images/bed2.png";
  } else {
    img = 2;
    imgPath = "./images/bed2.png";
  }
  document.querySelector("#image").style = "opacity: 0.4";
  setTimeout(() => {
    document.querySelector("#image").src = imgPath;
  }, 300);
  setTimeout(() => {
    document.querySelector("#image").style = "opacity: 1";
  }, 500);
});
