var lastScroll = 0;
var ticking    = false;
var blurMax    = 7;
var blurLimit  = 200;

function blurry(scroll) {
  blur = Math.min(blurLimit, scroll) * blurMax / blurLimit;
  document.querySelector('main').style.filter = 'blur('+ blur +'px)';
}

window.addEventListener('scroll', function(event) {
  lastScroll = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      blurry(lastScroll);
      ticking = false;
    });
  }
  ticking = true;
});

document.addEventListener('DOMContentLoaded', function(event) {
  blurry(window.scrollY);
});
