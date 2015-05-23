var loadedPosts,
loadedWorks,
posts = document.querySelector('.posts > ul'),
works = document.querySelector('.works > ul');

/* Trianglify canvas */
function drawCanvas() {
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
}

/* Gradient opacity */
function gradientOpacity() {
    // Array.prototype.forEach.call(document.querySelectorAll('h1, p, small, li'), function(el, i){
    //     var wh = window.innerHeight,
    //         top = Math.max(Math.min(el.getBoundingClientRect().top, wh), 0);
    //     el.style.opacity = ((50 - Math.abs(top * 100 / wh - 50)) - 10 ) * 20;
    // });
}

/* Fetch blog posts */
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

/* Fetch works */
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
    drawCanvas();
    fetchPosts();
    fetchWorks();
}
window.addEventListener('DOMContentLoaded', init, false);
window.addEventListener('scroll', gradientOpacity, false);