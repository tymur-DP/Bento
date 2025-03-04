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

let resColored = document.querySelectorAll(".our-project-section__circle");
resColored[img].classList.add("fill");

document.getElementById("btn-next").addEventListener("click", (event) => {
  nextSlide();
  change();
  changeFill();
});

document.getElementById("btn-prev").addEventListener("click", (event) => {
  prevSlide();
  change();
  changeFill();
});

change = () => {
  document.querySelector("#image").style = "opacity: 0.6";
  setTimeout(() => {
    document.querySelector("#image").src = imgPath;
  }, 100);
  setTimeout(() => {
    document.querySelector("#image").style = "opacity: 1";
  }, 300);
};

nextSlide = () => {
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
};

prevSlide = () => {
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
};

changeFill = () => {
  resColored.forEach((element) => {
    element.classList.remove("fill");
  });
  resColored[img].classList.add("fill");
};

const time1 = 3000;
const time2 = 4000;
const time3 = 5000;
const step = 1;

digitOut = (num, elem, timeEl) => {
  const digits = document.querySelector("#" + elem);
  let n = 1;
  let time = Math.round(time1 / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    digits.innerHTML = n;
  }, time);
};

digitOut(10, "digit1", time1);
digitOut(2, "digit2", time2);
digitOut(360, "digit3", time3);
