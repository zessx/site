var ww = window.innerWidth,
    wh = window.innerHeight,
    w = 200,
    h = w * 550 / 700,
    u = w / 14,
    angle = -28.71;
var svg = new Snap(w, h).attr({
  fill: '#222',
  overflow: 'visible'
});
var filterReverse = svg.filter('<feColorMatrix in="SourceGraphic" type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/>');

// Base logo
var logoDL = svg.rect(0, 8*u, w, 3*u);
var logoDR = logoDL.clone();
var logo = svg.group(
  svg.rect(0, 0, w, 3*u),
  svg.rect(0, 4*u, w, 3*u),
  logoDL,
  logoDR
);

// Reversed logo
var logoRDL = svg.rect(0, 4*u, w, 3*u);
var logoRDR = logoRDL.clone();
var logoReverse = svg.group(
  svg.rect(0, 0, w, 3*u),
  logoRDL,
  logoRDR,
  svg.rect(0, 8*u, w, 3*u)
).attr({
  filter: filterReverse
});

// Background
var maskBackground = svg.rect(w/2, h/2, 1, 0).attr({
  fill: '#fff'
});
var background = svg.group(
  svg.rect(w/2-wh*3, h/2-wh*3, ww*5, wh*5),
  logoReverse
).attr({
  mask: maskBackground
})

// Animation
maskBackground.animate({
  height: wh*5,
  y: h/2-wh*3
}, 700, mina.easeinout, function() {
  maskBackground.animate({
    width: ww
  }, 700, mina.easeinout, function() {
    maskBackground.animate({
      transform: Snap.format('rotate({a}, {x}, {y})', {
        a: angle,
        x: w/2,
        y: h/2+2*u
      })
    }, 400, mina.easeinout, function() {
      logoRDL.animate({
        rx: 3*u,
        ry: 3*u,
        width: 3*u,
        x: w/2
      }, 400, mina.easeinout);
      logoRDR.animate({
        rx: 3*u,
        ry: 3*u,
        width: 3*u,
        x: w-3*u
      }, 400, mina.easeinout);
      logoDL.animate({
        rx: 3*u,
        ry: 3*u,
        width: 3*u
      }, 400, mina.easeinout);
      logoDR.animate({
        rx: 3*u,
        ry: 3*u,
        width: 3*u,
        x: w/2-3*u
      }, 400, mina.easeinout);
    });
  });
});