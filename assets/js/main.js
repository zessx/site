var sections = document.querySelectorAll('section'),
	titles   = document.querySelectorAll('section h2'),
	posts    = document.querySelector('.posts > ul'),
	works    = document.querySelector('.works > ul');

// Posts/Works menus
function activeSection(event) {
	var parent = event.currentTarget.parentNode;
	var isActive = parent.classList.contains('active');
	Array.prototype.forEach.call(sections, function(element){
		element.classList.remove('active');
	});
	if(!isActive) {
		parent.classList.add('active');
	}
}
Array.prototype.forEach.call(titles, function(element){
	element.addEventListener('click', activeSection);
});

// Fetch blog posts
var loadedPosts = [];
function fetchPosts() {
	var offset = document.querySelectorAll('.posts li').length,
		n = Math.min(offset + 10, loadedPosts.length);
	for (var i = offset; i < n; i++) {
		var post     = loadedPosts[i],
			dompost  = document.createElement('li'),
			domlink  = document.createElement('a'),
			domdate  = document.createElement('p'),
			domtitle = document.createElement('h3');
		domdate.classList.add('date');
		domdate.innerHTML = post.date;
		domtitle.innerHTML = post.title;
		domlink.setAttribute('href', 'http://blog.smarchal.com' + post.url);
		domlink.appendChild(domdate);
		domlink.appendChild(domtitle);
		dompost.appendChild(domlink);
		posts.appendChild(dompost);
	}
}
function loadPosts() {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://blog.smarchal.com/posts.json', true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			loadedPosts = JSON.parse(request.responseText)['posts'];
			fetchPosts();
		}
	};
	request.send();
}
document.addEventListener('ps-y-reach-end', function() {
	fetchPosts();
});

// Init
function init() {
	loadPosts();
	Ps.initialize(posts, {
		suppressScrollX: true,
		theme: 'dark'
	});
	Ps.initialize(works, {
		suppressScrollX: true,
		theme: 'light'
	});
}
window.addEventListener('DOMContentLoaded', init, false);