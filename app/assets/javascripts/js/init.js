var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 25,
			defaultText = 'Skins',
			speed = 250;
		
		r.circle(150, 150, 35).attr({ stroke: 'none', fill: 'none' });
		
		var title = r.text(150, 150, defaultText).attr({
			font: 'italic 12px Georgia',
			fill: '#000'
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 150 + rad * Math.cos(b),
				sy = 150 - rad * Math.sin(b),
				x = 150 + rad * Math.cos(a),
				y = 150 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			rad += 14;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 10 });
			
			z.mouseover(function(){
                this.animate({ 'stroke-width': 20, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text }).animate({ opacity: 1 }, speed, '<');				
				
				});
				
				var colorOption = z.id;
				
				z.click(function(){
				if(colorOption == 2) {
					$("body").attr('class', 'skin-01');
					scheme1 = "skins/skin-1.css"
					$("link#schemecolor").attr("href", scheme1);
					texto = scheme1;
					nombrecolor = $("link#schemecolor").attr("href");
				}
				
				if(colorOption == 3) {
					$("body").attr('class', 'skin-02');
					scheme2 = "skins/skin-2.css"
					$("link#schemecolor").attr("href", scheme2);
					texto = scheme2;
					nombrecolor = $("link#schemecolor").attr("href");
				}
				
				if(colorOption == 4) {
					$("body").attr('class', 'skin-03');
					scheme3 = "skins/skin-3.css"
					$("link#schemecolor").attr("href", scheme3);
					texto = scheme3;
					nombrecolor = $("link#schemecolor").attr("href");
				}
				
				if(colorOption == 5) {
					$("body").attr('class', 'skin-04');
					scheme4 = "skins/skin-4.css"
					$("link#schemecolor").attr("href", scheme4);
					texto = scheme4;
					nombrecolor = $("link#schemecolor").attr("href");
				
				}	
				
				if(colorOption == 6) {
					$("body").attr('class', 'skin-05');
					scheme5 = "skins/skin-5.css"
					$("link#schemecolor").attr("href", scheme5);
					texto = scheme5;
					nombrecolor = $("link#schemecolor").attr("href");
				
				}
				
				if(colorOption == 7) {
					$("body").attr('class', 'skin-06');
					scheme6 = "skins/skin-6.css"
					$("link#schemecolor").attr("href", scheme6);
					texto = scheme6;
					nombrecolor = $("link#schemecolor").attr("href");
				
				}
					});
				
				
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 10, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});
            });
			
		});
		
	}
}
$(function(){ o.init(); });
