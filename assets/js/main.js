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
var loadedPosts;
function fetchPosts() {
	var offset = document.querySelectorAll('.posts li').length;
	var n = Math.min(offset + 10, loadedPosts.length);
	for (var i = offset; i < n; i++) {
		var post     = loadedPosts[i],
			dompost  = document.createElement('li'),
			domdate  = document.createElement('p'),
			domtitle = document.createElement('h3');
			domlink  = document.createElement('a');
		domdate.classList.add('date');
		domdate.innerHTML = post.date;
		domlink.innerHTML = post.title;
		domlink.setAttribute('href', 'http://blog.smarchal.com' + post.url);
		domtitle.appendChild(domlink);
		dompost.appendChild(domdate);
		dompost.appendChild(domtitle);
		posts.appendChild(dompost);
	}
	Ps.update(posts);
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



// // Infinite load
// function infiniteLoad() {
//   var allPosts = [],
//       isFetchingPosts = false,
//       shouldFetchPosts = true,
//       postsToLoad = document.querySelectorAll('.articles article').length,
//       loadNewPostsThreshold = 3000,
//       request = new XMLHttpRequest();
//   request.open('GET', '/posts.json', true);
//   request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//       var data = JSON.parse(request.responseText);
//       if(loader = document.querySelector('.loader')) {
//         if(tag = loader.getAttribute('data-tag')) {
//           for (var i = 0; i < data["posts"].length; i++) {
//             if(data["posts"][i].tags.indexOf(tag) >= 0) {
//               allPosts.push(data["posts"][i])
//             }
//           };
//         } else {
//           allPosts = data["posts"];
//         }
//       }
//       if(allPosts.length <= postsToLoad) {
//         disableFetching();
//       }
//       document.addEventListener('scroll', scroller, false);
//     }
//   };
//   request.send();

//   if(document.querySelectorAll('.loader').length < 1) {
//     shouldFetchPosts = false;
//   }
//   function scroller() {
//     if(!shouldFetchPosts || isFetchingPosts) return;
//     if(document.body.scrollTop + window.innerHeight + 100 > document.body.offsetHeight) {
//       fetchPosts();
//     }
//   }

//   function fetchPosts() {
//     if (!allPosts) return;
//     isFetchingPosts = true;
//     var loadedPosts = 0,
//         postCount = document.querySelectorAll('.articles article').length,
//         callback = function() {
//           loadedPosts++;
//           var postIndex = postCount + loadedPosts;

//           if(postIndex > allPosts.length-1) {
//             disableFetching();
//             return;
//           }

//           if(loadedPosts < postsToLoad) {
//             fetchPostWithIndex(postIndex, callback);
//           } else {
//             isFetchingPosts = false;
//           }
//         };
//     fetchPostWithIndex(postCount + loadedPosts, callback);
//   }

//   function fetchPostWithIndex(index, callback) {
//     var postURL = allPosts[index].url;
//     var request = new XMLHttpRequest();
//     request.open('GET', postURL, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = document.createElement('div');
//         data.innerHTML = request.responseText;
//         var posts = data.querySelectorAll('article');
//         Array.prototype.forEach.call(posts, function(post, index){
//           if(loader = document.querySelector('.loader')) {
//             if(tag = loader.getAttribute('data-tag')) {
//               post.setAttribute('data-color', tag);
//             }
//           }
//           post.classList.remove('full-article');
//           document.querySelector('.articles').appendChild(post);
//         });
//         callback();
//       }
//     };
//     request.send();
//   }

//   function disableFetching() {
//     shouldFetchPosts = false;
//     isFetchingPosts = false;
//     if(loader = document.querySelector('.loader')) {
//       loader.classList.add('end');
//     }
//   }

// }
// document.addEventListener('DOMContentLoaded', infiniteLoad, false);