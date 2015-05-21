/* Trianglify canvas */
var canvas  = document.getElementById('bg'),
    context = canvas.getContext('2d'),
    pattern = Trianglify({
		cell_size: 90,
		variance: 1,
		width: window.innerWidth,
		height: window.innerHeight,
		x_colors: ['#000', '#758', '#d5cdd8', '#758', '#000']
    });
pattern.canvas(canvas);