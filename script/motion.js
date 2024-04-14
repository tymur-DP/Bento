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
