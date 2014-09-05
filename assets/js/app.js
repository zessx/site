//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

$('article').each(function() {
	var link = $(this).find('h3 a').first();
	link.on('click mousedown', function(event) {
		event.preventDefault();
	});
	$(this).on('click', function(event) {
		if(!$(event.target).hasClass('label')) {
			var url = link.attr('href');
			if(event.which == 2 ) {
				window.open(url, '_blank');
				event.preventDefault();
			} else if(event.which == 1 ) {
				if (event.ctrlKey) {
					window.open(url, '_blank');
				} else {
					window.location.href = url;
				}
				event.preventDefault();
			}
		}
	});
});

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
	zoom: 13,
	center: new google.maps.LatLng(48.5756446, 7.7473311),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	scrollwheel: false,
	styles: [{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#e74c3c"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#c0392b"
		}, {
			"lightness": 29
		}, {
			"weight": 0.1
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#e74c3c"
		}, {
			"lightness": 18
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#e74c3c"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 21
		}]
	}, {
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#000000"
		}, {
			"lightness": 16
		}]
	}, {
		"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": 36
		}, {
			"color": "#000000"
		}, {
			"lightness": 40
		}]
	}, {
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 19
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}, {
			"weight": 1.2
		}]
	}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
