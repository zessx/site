var width, height, center, points, paths;
var NB_POINTS = 12,
    NB_PATHS = 50,
    VARIANCE = 50,
    SAW_FACTOR = 1,
    ACCELERATION = 0.1,
    MAX_SPEED = 1;

paper.install(window);

function backgroundInit()
{
  var canvas = document.getElementById('background');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  paper.setup(canvas);

  calculate();

  paths = [];
  colors = {
    from: { r: 2, g: 195, b: 154 },
    to:   { r: 7, g: 86,  b: 117 }
  };
  for (var i = 0; i < NB_PATHS; i++) {
    r = colors.from.r + (colors.to.r - colors.from.r) / NB_PATHS * i;
    g = colors.from.g + (colors.to.g - colors.from.g) / NB_PATHS * i;
    b = colors.from.b + (colors.to.b - colors.from.b) / NB_PATHS * i;
    color = new Color(r / 255, g / 255, b / 255, 0.5);
    path = new Path({
      strokeColor: color,
      strokeWidth: 1
    });
    path.segments = [];
    for (var j = 0; j < NB_POINTS; j++) {
      path.add(new Point(points[j].x, points[j].y));
    }
    path.scale(1 + i / NB_PATHS);
    paths.push(path);
  }


  view.onFrame = function(event) {
    if (event.count == 0) {
      for (var j = 0; j < NB_PATHS; j++) {
        paths[j].smooth();
      }
    }
    // if (event.count % 5 == 0) {
    //   for (var i = 0; i < NB_POINTS; i++) {
    //     points[i].y += points[i].speed;
    //     if (points[i].y >= window.innerHeight) {
    //       points[i].speed -= ACCELERATION;
    //     } else if (points[i].y <= 0) {
    //       points[i].speed += ACCELERATION;
    //     } else {
    //       points[i].speed = Math.max(Math.min(points[i].speed + Math.random() * 2 * ACCELERATION - ACCELERATION, MAX_SPEED), -MAX_SPEED);
    //     }
    //     for (var j = 0; j < NB_PATHS; j++) {
    //       paths[j].segments[i].point.y = points[i].y;
    //     }
    //   }
    //   for (var j = 0; j < NB_PATHS; j++) {
    //     paths[j].smooth();
    //   }
    // }
  }
}

function calculate()
{
  points = [];
  for (var i = 0; i <= NB_POINTS; i++) {
    shift = SAW_FACTOR * view.center.y;
    if (i == 0) {
      x = -200;
    } else if (i == NB_POINTS) {
      x = view.size.width + 200;
    } else {
      x = view.size.width / (2 * (NB_POINTS - 1)) * (2 * i - 1) + Math.random() * view.size.width / (NB_POINTS - 1);
    }
    points.push({
      x: x,
      y: view.center.y + Math.random() * shift - shift / 2,
      speed: Math.random() * 2 * ACCELERATION - ACCELERATION
    });
  }
}

window.addEventListener('DOMContentLoaded', backgroundInit, false);