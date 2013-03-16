$(document).ready(function() { 
$("#stylr-launcher").mouseenter(function(){
	 $(this).fadeOut(500);
	 $("#stylr-wrapper").fadeIn(500);
	 })

 $("#stylr-wrapper").mouseleave(function(){
	 $(this).fadeOut(500);
	 $("#stylr-launcher").fadeIn(500);
	 })
	 
	 

///* theme switcher */
//	$("#nav-colors li a").click(function() {
//		$('body').append('<div id="overlay" />');
//		$('body').css({height:'100%'});
//		$('#overlay')
//			.css({
//				display: 'none',
//				position: 'absolute',
//				top:0,
//				left: 0,
//				width: '100%',
//				height: '100%',
//				zIndex: 1010,
//				background: 'black'
//			})
//			.fadeIn(50);
//			$('#overlay').delay(100).fadeOut(200);
//			//location.reload();
//		$("link#navcolor").attr("href",$(this).attr('rel'));
//		nombrecolor = $("link#navcolor").attr("href");
//		alert(nombrecolor);
//		//return false;
//	});
//	
//	$("#highlight-colors li a").click(function() {
//		$('body').append('<div id="overlay" />');
//		$('body').css({height:'100%'});
//		$('#overlay')
//			.css({
//				display: 'none',
//				position: 'absolute',
//				top:0,
//				left: 0,
//				width: '100%',
//				height: '100%',
//				zIndex: 1010,
//				background: 'black'
//			})
//			.fadeIn(100);
//			$('#overlay').delay(100).fadeOut(200);
//		$("link#highcolor").attr("href",$(this).attr('rel'));
//		alert("click!!!!")
//		//return false;
//	});
	$('#stylr').hide();
	$('#stylr').css('display','none');
	$('#stylr').delay(2000).fadeIn('middle');
});

