window.onload = function(event) {

	var externals = document.getElementsByClassName('external');

	for (var i = 0, len = externals.length; i < len; i++) {
		externals[i].setAttribute('target','_blank');
	}

	var logo     = document.getElementById('zessx');
	var strip    = document.getElementById('strip');
	var wrapper  = document.getElementById('wrapper');

	logo.onclick = function(event) {
		event.preventDefault();
		wrapper.className = wrapper.className == 'opened' ? 'closed' : 'opened';
	};
	logo.onmouseover = function(event) {
		wrapper.className = wrapper.className == 'opened' ? 'closed' : 'opened';
	};
	strip.onmouseout = function(event) {
		var e = event.toElement || event.relatedTarget;
		if (e.parentNode.parentNode == this || e.parentNode == this || e == this) {
		   return;
		}
		wrapper.className = 'closed';
	};
};