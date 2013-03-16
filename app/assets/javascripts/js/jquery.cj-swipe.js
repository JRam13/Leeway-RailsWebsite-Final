/*
* jQuery Mobile Framework 1.1.0 db342b1f315c282692791aa870455901fdb46a55
* http://jquerymobile.com
*
* Copyright 2011 (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
*/

/*
* Took the touch swipe logic from jQuery Mobile and turned it into this plugin
* Copyright 2012 (c) CodingJack - http://codecanyon.net/user/CodingJack
*/

/* USAGE
* $(element).touchSwipe(callback); // sends both left and right signals, passes a "left" or "right" argument to the callback
* $(element).touchSwipeLeft(callback); // listen for only the left swipe event
* $(element).touchSwipeRight(callback); // listen for only the right swipe event
* $(element).unbindSwipe(); // unbind both left and right swipe events
* $(element).unbindSwipeLeft(); // unbind only left swipe event
* $(element).unbindSwipeRight(); // unbind only right swipe event
*/

;(function($) {
	
	var touchStopEvent, touchMoveEvent, touchStartEvent,
	horizontalDistanceThreshold = 30,
	verticalDistanceThreshold = 75, 
	scrollSupressionThreshold = 10, 
	durationThreshold = 1000;
	
	if("ontouchend" in document) {
	
		touchStopEvent = "touchend";
		touchMoveEvent = "touchmove";
		touchStartEvent = "touchstart";
		
	}
	else {
	
		touchStopEvent = "mouseup";
		touchMoveEvent = "mousemove";
		touchStartEvent = "mousedown";
		
	}
	
	$.fn.touchSwipe = function(cb) {
		
		if(cb) return this.each(swipeBoth, [cb]);
		
	}
	
	$.fn.touchSwipeLeft = function(cb) {
		
		if(cb) return this.each(swipeLeft , [cb]);
		
	}
	
	$.fn.touchSwipeRight = function(cb) {
		
		if(cb) return this.each(swipeRight, [cb]);

	}
	
	function swipeBoth(cb) {
		
		$(this).touchSwipeLeft(cb).touchSwipeRight(cb);
		
	}
	
	function swipeLeft(cb) {
		
		var $this = $(this);
		
		if(!$this.data("swipeLeft")) $this.data("swipeLeft", cb);
		
		if(!$this.data("swipeRight")) addSwipe($this);
		
	}
	
	function swipeRight(cb) {
	
		var $this = $(this);
		
		if(!$this.data("swipeRight")) $this.data("swipeRight", cb);
		
		if(!$this.data("swipeLeft")) addSwipe($this);
		
	}
	
	$.fn.unbindSwipeLeft = function() {
		
		this.removeData("swipeLeft");
		
		if(!this.data("swipeRight")) this.unbindSwipe(true);
		
	}
	
	$.fn.unbindSwipeRight = function() {
		
		this.removeData("swipeRight");
		
		if(!this.data("swipeLeft")) this.unbindSwipe(true);
		
	}
	
	$.fn.unbindSwipe = function(changeData) {
		
		if(!changeData) this.removeData("swipeLeft swipeRight");
		
		return this.unbind(touchStartEvent).unbind(touchMoveEvent).unbind(touchStopEvent);
		
	}
	
	function addSwipe($this) {
		
		$this.unbindSwipe(true).bind(touchStartEvent, touchStart);
		
	}
	
	function touchStart(event) {
		
		var stopped, newData,
		data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
		start = {time: (new Date()).getTime(), coords: [data.pageX, data.pageY], origin: $(event.target)},
		$this = $(this).bind(touchMoveEvent, moveHandler).one(touchStopEvent, touchEnded);
			
		function touchEnded(event) {
			
			$this.unbind(touchMoveEvent);

			if(start && stopped) {
				
				if(stopped.time - start.time < durationThreshold && Math.abs(start.coords[0] - stopped.coords[0]) > horizontalDistanceThreshold && Math.abs(start.coords[1] - stopped.coords[1]) < verticalDistanceThreshold) {

					if(start.coords[0] > stopped.coords[0]) {
						
						if($this.data("swipeLeft")) $this.data("swipeLeft")("left");
						
					}
					else {
						
						if($this.data("swipeRight")) $this.data("swipeRight")("right");
						
					}
				
				}
			}
			
			start = stopped = null;
			
		}
		
		function moveHandler(event) {

			if(start) {

				newData = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
	
				stopped = {time: (new Date()).getTime(), coords: [newData.pageX, newData.pageY]};
	
				if(Math.abs(start.coords[0] - stopped.coords[0]) > scrollSupressionThreshold) event.preventDefault();
				
			}
			
		}
		
	}
	
		
})(jQuery);












