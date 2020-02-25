console.log('111')

function runScroll() {
  scrollTo(document.body, 0, 600);
}
var scrollme;
scrollme = document.querySelector("#scrollme");
scrollme.addEventListener("click",runScroll,false)

// TODO: use RequestAnimationFrame
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

function mult(a,b) {
  return a * b;
}

mult(2,2);
mult(2,3);