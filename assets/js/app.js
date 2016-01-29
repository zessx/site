var loadedPosts,
	loadedWorks,
	posts = document.querySelector('.posts > ul'),
	works = document.querySelector('.works > ul');

// Debouncer
function debounce(funct, timeout) {
	var timeoutID , timeout = timeout || 200;
	return function () {
		var scope = this , args = arguments;
		clearTimeout( timeoutID );
		timeoutID = setTimeout( function () {
			funct.apply( scope , Array.prototype.slice.call( args ) );
		} , timeout );
	}
}

// setAttribute multiple
Element.prototype.setAttributes = function(attrs) {
	for(var key in attrs) {
		this.setAttribute(key, attrs[key]);
	}
}

// Trianglified header
var points = [],
	polygons = [],
	oldWidth = 0;
function trianglify() {
	if(oldWidth == window.innerWidth) {
		return;
	}
	var svg = document.querySelector('#canvas');

	points = [];
	polygons = [];
	oldWidth = window.innerWidth;
	while (svg.firstChild) {
		svg.removeChild(svg.firstChild);
	}

	var margin = 30,
	fullWidth = window.innerWidth - margin * 2,
	fullHeight = window.innerHeight - margin * 2,
	attributes = {
		'width': fullWidth,
		'height': fullHeight
	}

	svg.setAttributes(attributes);

	var unitSize = (fullWidth + fullHeight)/20,
		numPointsX = Math.ceil(fullWidth / unitSize) + 1,
		numPointsY = Math.ceil(fullHeight / unitSize) + 1,
		unitWidth = Math.ceil(fullWidth / (numPointsX - 1)),
		unitHeight = Math.ceil(fullHeight / (numPointsY - 1));

	for(var y = 0; y < numPointsY; y++) {
		for(var x = 0; x < numPointsX; x++) {
			points.push([
				unitWidth * x + ((x == 0 || x == numPointsX - 1) ? 0 : (Math.random() * unitWidth - unitWidth / 2) / 1.4),
				unitHeight * y + ((y == 0 || y == numPointsY - 1) ? 0 : (Math.random() * unitHeight - unitHeight / 2) / 1.4)
			]);
		}
	}

	for(var i = 0; i < points.length; i++) {
		if(i % numPointsX != numPointsX - 1 && i <= numPointsY * numPointsX - numPointsX - 1) {
			var rando = Math.floor(Math.random()*2);
			for(var n = 0; n < 2; n++) {
				var polygon = document.createElementNS(svg.namespaceURI, 'polygon'),
				coords = '';
				if(rando==0) {
					if(n==0) {
						coords = points[i].join(',')+' '+points[i+numPointsX].join(',')+' '+points[i+numPointsX+1].join(',');
					} else if(n==1) {
						coords = points[i].join(',')+' '+points[i+1].join(',')+' '+points[i+numPointsX+1].join(',');
					}
				} else if(rando==1) {
					if(n==0) {
						coords = points[i].join(',')+' '+points[i+numPointsX].join(',')+' '+points[i+1].join(',');
					} else if(n==1) {
						coords = points[i+numPointsX].join(',')+' '+points[i+1].join(',')+' '+points[i+numPointsX+1].join(',');
					}
				}
				polygon.setAttributes({
					'class': 'nofill nostroke',
					'points': coords,
					'fill': 'rgba(0,0,0,' + (Math.random() / 4) + ')'
				});
				polygons.push(polygon);
				svg.appendChild(polygon);
			}
		}
	}
}

// Fetch blog posts
function fetchPosts(offset, soft) {
	offset = typeof offset !== 'undefined' ? offset : 0;
	soft = typeof soft !== 'undefined' ? soft : false;
	if(!loadedPosts) {
		loadPosts(offset, true);
	} else {
		var n = Math.min(offset + 10, loadedPosts.length);
		for (var i = offset; i < n; i++) {
			var post = loadedPosts[i],
			dompost = document.createElement('li'),
			domlink = document.createElement('a');
			domlink.innerHTML = post.title;
			domlink.setAttribute('href', 'http://blog.smarchal.com' + post.url);
			dompost.appendChild(domlink);
			posts.appendChild(dompost);
		}
	}
}
function loadPosts(offset, soft) {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://blog.smarchal.com/posts.json', true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			loadedPosts = JSON.parse(request.responseText)['posts'];
			fetchPosts(offset, soft);
		}
	};
	request.send();
}

// Fetch works
function fetchWorks(offset, soft) {
	offset = typeof offset !== 'undefined' ? offset : 0;
	soft = typeof soft !== 'undefined' ? soft : false;
	if(!loadedWorks) {
		loadWorks(offset, true);
	} else {
		var n = Math.min(offset + 10, loadedWorks.length);
		for (var i = offset; i < n; i++) {
			var work = loadedWorks[i],
			domwork = document.createElement('li'),
			domlink = document.createElement('a');
			domlink.innerHTML = work.title;
			domlink.setAttribute('href', work.url);
			domwork.appendChild(domlink);
			works.appendChild(domwork);
		}
	}
}
function loadWorks(offset, soft) {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://blog.smarchal.com/works.json', true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			loadedWorks = JSON.parse(request.responseText)['works'];
			fetchWorks(offset, soft);
		}
	};
	request.send();
}

/* Init */
function init() {
	trianglify();
	fetchPosts();
	fetchWorks();
}
window.addEventListener('DOMContentLoaded', init, false);
window.addEventListener('resize', debounce(trianglify, 50));