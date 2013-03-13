/**********************************
   SEQUENTIAL THUMB LOADER
****************************************/
		var i = 0;
		$('ul#thumbs li img').clone().appendTo($('#thumbspreload'));
		$('ul#thumbs li img').css('display', 'block');
		$('ul#thumbs li img').each(function()
		{
		var me = this;
		$(this).hide()
		var j = i;
		setTimeout(function()
		{
		$(me).fadeIn(200);
		}, i)
		i += 50
	});
