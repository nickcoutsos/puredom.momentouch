puredom(function() {
	var bounds = {
		x: puredom('#container').width(),
		y: puredom('#container').height()
	};
	
	puredom('.ball').each(function(elem, index) {
		var x, y;
		var ball = puredom(elem);
		
		ball.momentouch()
			.on('slidestart', function(e) { ball.classify('sliding'); })
			.on('sliding', function(e) {
				var w = ball.width(),
					h = ball.height();
				
				// broken
				//ball.css({'-webkit-transform': 'rotate(' + e.angle + 'deg)'});
				
				x = (x || ball.x()) + e.deltaX;
				y = (y || ball.y()) + e.deltaY;
				
				if (x > bounds.x + w/2) {
					x = -w;
				} else if (x < -w) {
					x = bounds.x;
				}
				
				if (y > bounds.y + h/2) {
					y = -h;
				} else if (y < -h) {
					y = bounds.y;
				}
				
				ball.position(Math.round(x), Math.round(y));
			})
			.on('slidestop', function(e) { ball.declassify('sliding'); });
	});
});
