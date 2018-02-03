function init() {

  const logo     = document.querySelector('#logo');
  const scroller = document.querySelector('#scroller');
  const links    = document.querySelector('#links');

  var hintTID = setTimeout(function() {
    document.body.classList.add('display-hint');
  }, 5000);

  const refreshRate = 5;
  var refreshCount = 0;

  document.addEventListener('mousemove', function(event) {

    if (refreshCount++ % refreshRate != 0) {
      return;
    }

    // Logo
    var ox = logo.getBoundingClientRect().left + logo.getBBox().width / 2,
        oy = logo.getBoundingClientRect().top + logo.getBBox().height / 2,
        cx = event.pageX,
        cy = event.pageY;
    var dist  = Math.sqrt(Math.pow(Math.abs(cx - ox), 2) + Math.pow(Math.abs(cy - oy), 2));
    var d     = Math.min(200, dist);
    var ratio = d / dist / 10;
    var dx = (cx - ox) * ratio;
    var dy = (cy - oy) * ratio;
    logo.style.transform = 'translate('+ dx +'px, '+ dy +'px)';

    // Links
    var lh = links.getBoundingClientRect().top + links.getBoundingClientRect().height;
    var ty = (event.pageY - window.innerHeight / 2) * lh / (window.innerHeight / 2);
    links.style.transform = 'translate(-50%, -'+ ty +'px)';

    // Scroller
    scroller.style.left = cx - scroller.getBBox().width / 2 - 5;
    scroller.style.top = cy - scroller.getBBox().height / 2 + 28;

  });

  logo.addEventListener('mousedown', function(event) {
    document.body.classList.add('grabbing');
    clearTimeout(hintTID);
    document.body.classList.remove('display-hint');
  });

  document.addEventListener('mouseup', function(event) {
    document.body.classList.remove('grabbing');
      if (event.target && event.target.nodeName == 'A') {
        window.location = event.target.getAttribute('href');
      }
  });

}
window.addEventListener('DOMContentLoaded', init, false);