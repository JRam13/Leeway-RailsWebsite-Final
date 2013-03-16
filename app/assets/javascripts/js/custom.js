/* JS DOCUMENTATION:

* FOLIO Ner2 *

*/

/*********************************************
* ON READY
*********************************************/

var donde = null;

$(document).ready(function(){

mode = 0;

/**********************************
 ADJUST DINAMIC HEIGHT FOR HEADER 
***********************************/
var topSection = $("#top-title-bar").height();
$("#thumb-wrapper").css("margin-top", topSection);
if($(window).width() < 480){
	$("#top-title-bar-sdevice").height() == topSection/2;
	$("#thumb-wrapper").css("margin-top", topSection/2);
	}
if ( $('body.fixed-nav').length || $('body.top-bar-disabled').length){
	var topSection = 0;
	}
	
/****************************
 MULTIDISPLAY SMART COLLUMS 
***************************/

function smartColumns() { //Create a function that calculates the smart columns | First we need to check if it is a mobile device
		if($(window).width() < 680){
		//Reset column size to a 100% once view port has been adjusted
		$("ul#thumbs").css({ 'width' : "100%"});
		var colWrap = $("ul#thumbs").width(); //Get the width of row
		var colNum = Math.floor(colWrap / 85); //Find how many columns of 200px can fit per row / then round it down to a whole number
		var colFixed = Math.floor(colWrap / colNum); //Get the width of the row and divide it by the number of columns it can fit / then round it down to a whole number. This value will be the exact width of the re-adjusted column
		$("ul#thumbs").css({ 'width' : colWrap}); //Set exact width of row in pixels instead of using % - Prevents cross-browser bugs that appear in certain view port resolutions.
		$("ul#thumbs li").css({ 'width' : colFixed}); //Set exact width of the re-adjusted column
			
		}else{ //If not a mobile device
		
		//Reset column size to a 100% once view port has been adjusted
		$("ul#thumbs").css({ 'width' : "100%"});
		var colWrap = $("ul#thumbs").width(); //Get the width of row
		var colNum = Math.floor(colWrap / 250); //Find how many columns of 200px can fit per row / then round it down to a whole number
		var colFixed = Math.floor(colWrap / colNum); //Get the width of the row and divide it by the number of columns it can fit / then round it down to a whole number. This value will be the exact width of the re-adjusted column
		$("ul#thumbs").css({ 'width' : colWrap}); //Set exact width of row in pixels instead of using % - Prevents cross-browser bugs that appear in certain view port resolutions.
		$("ul#thumbs li").css({ 'width' : colFixed}); //Set exact width of the re-adjusted column
		}
}
smartColumns();//Run the function when page loads


/***************************
// SLIDE NAV
*********************************/
function checkTopNav() {
//First we need to detect if top navigation mode is active. If it is, remove lateral navigation behaviors for hover states
if ($("#top-nav").length > 0){
  $("#tab-nav").remove();
}
else {

barra = $('nav'); // nav
trabajos = $('#wrapper'); // contents
loquedura = {queue:true, duration:1250, easing: 'easeInOutExpo'}; // .animate() style
// slideNav animations
function para(){ barra.stop(); trabajos.stop(); };
// return pixels number to move
function mide(){ 	return ($('nav').width()-10)+'px'; };

function slideNav(e){ 
	para();
	// moves nav
	barra.animate({  left: (e) ? '-'+mide() : 0	}, loquedura);
	// moves contents
	trabajos.animate({ left: (e) ? 0 : mide() }, loquedura);
};
barra.mouseenter(function(){ slideNav();});
barra.mouseleave(function(){ slideNav(1); });
$("#tap-close").click(function(){ slideNav(1); });
var initBar = setTimeout('barra.mouseleave()',1000); // 

}
}

/******************************************
// TOP NAVIGATION IN IPAD
*******************************************/

//detects if device is iOS based. If it is run the functions
if( navigator.userAgent.match(/Android/i) ||
 navigator.userAgent.match(/webOS/i) ||
 navigator.userAgent.match(/like Mac OS X/i) ||
 navigator.userAgent.match(/WP7/i) ||
 navigator.userAgent.match(/BlackBerry/)
 ){
				//launch top navigation mode
				$("body").attr("id","top-nav");
				checkTopNav();				
}
checkTopNav();


/****************************************
// HASH FUNCTIONS
*******************************************/

var controlHash = "";
$(function() {
    var newHash      = "",
        $mainContent = $("#work-detail-wrapper"),
        $pageWrap    = $("#thumb-wrapper"),
        $el;
	
		
	$(".work-launcher").delegate("a:not(#filters-launcher)", "click", function() {
		prevHash = window.location.hash.substring(1);
        window.location.hash = $(this).attr("href");
        donde = 1;
		mode = 1;
		
		tempHash = window.location.hash.substring(1);
			if (prevHash == tempHash || prevHash == "") {
					$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top-topSection},'slow');
				}
				
        if ( $.browser.msie ) {
			if(parseInt($.browser.version, 10) <=7){
				window.location.reload();
			} ;
		}   
        return false;
    });
	
    $("li.thumb").delegate("a", "click", function() {
    	prevHash = window.location.hash.substring(1);
        window.location.hash = $(this).attr("href");
        donde = 1;
		mode = 1;
		
		tempHash = window.location.hash.substring(1);
			if (prevHash == tempHash || prevHash == "") {
						$mainContent.slideDown(750, function() {
						var viewportHeight = $(window).height()*.6;
						$mainContent.height(viewportHeight);
						$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top-topSection}, "slow");
						slideWorks();
				}
					
		)};
    });
	
	//This is the code that scrolls down the top window when menu is clicked
	 
	 $("#sections2").delegate("a:not(#filters-launcher)", "click", function() {
		prevHash = window.location.hash.substring(1);
        window.location.hash = $(this).attr("href");
        donde = 1;
		mode = 1;
		
		tempHash = window.location.hash.substring(1);
			if (prevHash == tempHash || prevHash == "") {
					$mainContent.slideDown(500, function() {
						var viewportHeight = $(window).height()*6;
						$mainContent.height(viewportHeight);
						$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top-topSection}, "slow");
						slideWorks();
				}
					
				
		)};
				
        if ( $.browser.msie ) {
			if(parseInt($.browser.version, 10) <=7){
				window.location.reload();
			} ;
		}   
        return false;
		
    }); 
	 
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        if (newHash && newHash != controlHash) {
        	controlHash = window.location.hash.substring(1);
        	$mainContent.load(newHash, function(response, status, xhr) {
        		if (status == "error") {
					alert("Error loading work");
				}
				
        		// slides on
        		
				$('#prev').click(function(){
					activeSlides();
				});
				$('#next').click(function(){
					activeSlides(1);
				});
				
        		$mainContent.slideDown(300, function() {
					var viewportHeight = $(window).height()*.6;
					$mainContent.height(viewportHeight);
	            });
				
				function scrollableArea(){
				if(!navigator.userAgent.match(/iPhone/i) ||
				   !navigator.userAgent.match(/iPod/i)
				   ){
					  $(window).load(function(){
							$(function()
							{
								$('.scrollable').jScrollPane();
							});
						})
					   $(window).resize(function(){
							$('.scrollable').jScrollPane();
						   });
						
						$(function()
							{
								$('.scrollable').jScrollPane();
						});
						
						$('.scrollable').hover(function(){
								$(".jspVerticalBar").fadeIn("fast")
							
							}, function(){
								$(".jspVerticalBar").fadeOut("fast")
						})				
					}
				}
				setTimeout(function () {
					 scrollableArea();
				  }, 750);

				if($(response).find('.section').attr('id')=='about'){ 
						scrollableArea();
						checkContentInfo()
					 }
	            
				//detects if device is mobile based. If it is run the functions
				if( navigator.userAgent.match(/Android/i) ||
				 navigator.userAgent.match(/webOS/i) ||
				 navigator.userAgent.match(/like Mac OS X/i) ||
				 navigator.userAgent.match(/WP7/i) ||
				 navigator.userAgent.match(/BlackBerry/)
				 ){
					$('html,body').animate({scrollTop: $("#work-detail-wrapper").offset().top-topSection},'slow');						
				}
				else{
					$('html,body').animate({scrollTop: $("#work-detail-wrapper").offset().top-topSection},'slow');
					}
				slideWorks();
				centerWork();
				if($('body').hasClass('gal-v2')){centerGallery();} 
				closeSlideWork();
				fadeSection();
				fixVideoDeep();
              
			    $('#slideshow').fullDivGal();

            });
        };
    });
    $(window).trigger('hashchange');
});

$('#close-filters').click(function () {
	return false;
	});


      		

/********************************************************
 *  AJAX LOADER ANIMATION
 * ****************************************************** */
function createLoader(dondeLoad){
	var marca = document.createElement("img");
	marca.setAttribute("id", 'imgLoad');
	marca.setAttribute("src", "images/ajax-loader.gif");
	dondeLoad.append(marca);
}

/**************************************************
 FADE SECTIONS
********************************************************/
function fadeSection(){ 
	setTimeout("$('.item-wrapper').animate({opacity: 1},750)", 1000);
	setTimeout("$('#divThumbs').animate({opacity: 1},750)", 1000); 

}

/**************************************************
 SLIDE WORK WRAPPER
********************************************************/
var workWrapper = $('#work-detail-wrapper');
function viewportHeight(){
	return $(window).height()*.6;
};
function viewportWidth(){
	return $(window).width();
};
function slideWorks() { 
	if($('body').hasClass('gal-v1')){
	
	if( navigator.userAgent.match(/Android/i) ||
	   navigator.userAgent.match(/webOS/i) ||
	   navigator.userAgent.match(/like Mac OS X/i) ||
	   navigator.userAgent.match(/WP7/i) ||
	   navigator.userAgent.match(/BlackBerry/)
	   ){
		  workWrapper.height(viewportHeight()-topSection+5);						
	  }
	  else{
		 workWrapper.height(viewportHeight()-topSection+5);
	  }
	workWrapper.width(viewportWidth());
	}
	else{
		workWrapper.height(viewportHeight()-topSection+5);
		workWrapper.width(viewportWidth());
		}
		
	if($('body').hasClass('gal-v2')){
	
	if( navigator.userAgent.match(/Android/i) ||
	   navigator.userAgent.match(/webOS/i) ||
	   navigator.userAgent.match(/iPhone/i) ||
	   navigator.userAgent.match(/iPod/i) ||
	   navigator.userAgent.match(/WP7/i) ||
	   navigator.userAgent.match(/BlackBerry/)
	   ){
		  workWrapper.height(viewportHeight()-(topSection-79));						
	  }
	  else{
		 workWrapper.height(viewportHeight()-topSection+5);
	  }
	workWrapper.width(viewportWidth());
	}
	else{
		workWrapper.height(viewportHeight()-topSection+5);
		workWrapper.width(viewportWidth());
		}
		
} 
slideWorks();//Run the function when page loads


function closeSlideWork(){
	$('#closebt a').click(function () {
		
		var checkVideos = $(".wrapper-embed-video").length;
		
		if(checkVideos > 0){
			
			var divGal = $('#work-detail-wrapper');
			var videos = divGal.find('iframe');
			var nvideos = videos.length;
			var videoshtml5 = divGal.find('video'); //get html5 videos
			var nvideoshtml5 = videoshtml5.length;
			
			for ( n = 0 ; n < nvideos ; n++ ){			
				var source = videos.eq(n).attr("src");
				videos.eq(n).attr("src","");
				videos.eq(n).attr("src",source);
			
			};
			
			function pausePlayer() {
			  for(var i = 0; i < nvideoshtml5; i++){
				  videoshtml5[i].pause();
					//In order to don´t add youtube&vimeo APIs (overload global js code)
					//this method let you stop all videos when
					//close btn is clicked. A 2000ms delay is needed
					//to reload the src, close and don´t lose sizes
			  }
			}
			pausePlayer();
			
			
			$("#work-detail-wrapper").slideUp();
			$('html,body, #wrapper').animate({scrollTop: 0}, 500);
			donde = null;
			mode = 0;
			
		} else{
			
			$("#work-detail-wrapper").slideUp();
			$('html,body, #wrapper').animate({scrollTop: 0}, 500);
			donde = null;
			mode = 0;
		}
		
});
};

/*************************************************
 * FIX DEEPS FOR YOUTUBE VIDEOS
 ************************************************/
function fixVideoDeep() {
	$(".video-container iframe").each(function(){
		  var ifr_source = $(this).attr('src');
		  var wmode = "wmode=transparent";
		  if(ifr_source.indexOf('?') != -1){ $(this).attr('src',ifr_source+'?'+wmode);}
		  else $(this).attr('src',ifr_source+'?'+wmode);
	});
}

/*************************************************
 * CENTERWORK
 ************************************************/
function centerWork() { 
    function wrapper (){
    	return $("#work-detail-wrapper"); 
    }
	var itemW = $(".item-wrapper");
	var theItem = $('.item-wrapper .item');
	
	if($('body').hasClass('gal-v1')){
	theItem.css('height', itemW.height() - 230 +'px');
	}
	else{
		theItem.css('height', itemW.height());
		}
};

if($('body').hasClass('gal-v2')){
function centerGallery() {	
	 	var wrapper = $("#work-detail-wrapper");
		var theItem = $("#slideshow");
		var contHeight = $(wrapper).height()*.6;
		var contMiddle = contHeight/2;
		var locMiddle = theItem.height()/2;
		var theMiddle = contMiddle-locMiddle;

			var wh = $("#work-detail-wrapper").height()*.6;
			var ih = $('#slideshow').height();
			
			if (wh > ih) {
			$('#slideshow').css('margin-top', theMiddle-20 + 'px');
			} else {
			$('#slideshow').css('margin-top',0);
			}
	  }
}

/*************************************************
 * SET MODE
 ************************************************/
function setMode() { 
    	if ($('.item').height() > 0){
			mode = 1;
		}
		else{
			mode = 0;
			}		
};

/**************************************************
 * REMOVING SCROLLABLE AREA IF EMPTY or iOS DEVICE
 **************************************************/
function checkContentInfo(){
	
	if( navigator.userAgent.match(/Android/i) ||
	   navigator.userAgent.match(/webOS/i) ||
	   navigator.userAgent.match(/iPhone/i) ||
	   navigator.userAgent.match(/iPod/i) ||
	   navigator.userAgent.match(/iPad/i) ||
	   navigator.userAgent.match(/WP7/i) ||
	   navigator.userAgent.match(/BlackBerry/)
	   ){
		   //In order to get a smoother scroll in mobile and touch devices
		   //we remove the scrollable feature and we use all the native
		   //behaviors for scrolling for each device
		   
		   //Scroll area for info work in gal-v1
		   $('#scrollArea').removeClass('scrollable');
		   //Scroll area for info work in about page
		   $('#about>div').removeClass('scrollable');
		   //Scroll area for info work in info gal-v2
		   $('#info').removeClass('scrollable');
		}
}

/**********************************
   ON LOAD SLIDE NAV FUNC
****************************************/
$(window).load(function(){
(function(){
		$('.thumb').fadeTo(250, 0.4);
	});
	setTimeout((function(){
	slideWorks();
	centerWork();
	if($('body').hasClass('gal-v2')){centerGallery();}
	setMode();
	}), 750);
});

/***************************************
 ON RESIZE ADJUST IMAGES
*********************************************/
$(window).resize(function(){
	centerTopNavControls();
	slideWorks(); //Esential for calculate sizes in iPad landscape/portrait modes.
	centerWork();
	if($('body').hasClass('gal-v2')){centerGallery();}
	smartColumns();
	//slideNav(1);	//Run the function when page loads 
});

/**********************************************
//NAVIGATION		
************************************************/
$('#filters-launcher').click(function(){
	$('#filters').fadeIn(500);
	$('#sections').fadeOut(500);
	function altoScroll(){
		return $('#work-detail-wrapper').height()*.6;
	};
	$('html,body,#wrapper').animate({scrollTop: (donde) ? altoScroll() : 0}, 500);

});

$('.close-sub').click(function(){
	$('#filters').fadeOut(500);
	$('#sections').fadeIn(500);
});
var cat = "none";
if(cat == "none" )
		$(".thumb").fadeTo(100, 0.4);

/*******************************************
//FILTERS
********************************************/
$("#filter-menu a").click(function(e) {
	cat = $(this).attr("class");
	$("#works .thumb").not("."+cat).fadeTo(100, 0.1);
	$("#works .thumb").filter("."+cat).fadeTo(100, 1);
	$("#filter-menu a").parent().removeClass("active");
	$(this).parent().addClass("active");
	function altoScroll(){
		
		if ($("#top-nav").length > 0){
			var navHeight = $("#main-nav").height();
			var altoTopNav = $('#work-detail-wrapper').height()+(navHeight-topSection); //-40 is the margin top for wrapper. This compensate this default margin.
			return altoTopNav;
		}
		else{
			return $('#work-detail-wrapper').height()*.6;
			}
	
	};
	
	
	$('html,body,#wrapper').animate({scrollTop: (mode) ? altoScroll() : 0}, 500);
	
	e.preventDefault();
    e.stopPropagation();
});
$("#filter-menu a.none").click(function() {
	$("#works .thumb").animate({ opacity: 0.4 },{queue:true, duration:250, easing: 'easeInOutExpo'});
});


/*******************************************
// TOP NAVIGATION CONTROLS
********************************************/

function centerTopNavControls(){
var winWidth = $(window).width();
var sizeButton = $("#slide-controls").width()/2;
var posMiddle = winWidth/2-(sizeButton+5);
 $("#slide-controls").css("margin-left", posMiddle);
}
centerTopNavControls();


// Check if user is in top navigation mode. If he is, show the smart controls
if ($("#top-nav").length > 0){			
 	$("#slide-controls")
 			.css("display", "block")
 			.fadeOut(10)
			.delay(2000)
			.fadeIn(500);
	}
			
			
//Checkpoints to change controls when user scrolls. Smart control for top navigation mode
function getPixels(){ 
		var pos = $(window).scrollTop(); //position of the scrollbar
		var navigationHeight = $("#main-nav").height();
		var trueHeigh = navigationHeight-41;
		//$('#pixels').html(pos);
		
		if ($(".open-nav").length > 0){
			if(pos > trueHeigh){
					$(".scroll-to-menu").fadeIn(500);
				}
				else{
					$(".scroll-to-menu").fadeOut(500)
					}
		}
			else{
				return false;
				}
};

$(window).bind('scroll', function(){ //when the user is scrolling...
		getPixels(); //check if nav is open and controls the scroll in order to change the buttons
	});


$(".launch-nav").click(function(){
		$("nav#main-nav").slideToggle("slow");
		$(this).toggleClass("open-nav");
		$("#thumb-wrapper").toggleClass("the-margin");
		$('html,body,#wrapper').animate({scrollTop:0}, 500);
		return false;
	});
	$(".scroll-to-menu").click(function(){
		$('html,body,#wrapper').animate({scrollTop:0}, 500);
		return false;
		})

/*Preventing "ajaxify" for social links*/
$("#network-menu li a").click(function() {
	window.open(this.href);
    return false;
}); 

/*******************************************
 * THUMBS HOVER FIX
 ********************************************/
$('.thumb').hover(function(){
	if(cat== null || cat == "none" )
		$(this).fadeTo(100, 1);
}, function(){
	if(cat== null || cat == "none" )
		$(this).fadeTo(100, 0.4)
});


}); // End document ready

/*******************************************
 * MEDIA QUERIES TO DINAMYC ENHANCEMENT
 ********************************************/
// Edit to suit your needs.
var ADAPT_CONFIG = {
  // Where is your CSS/adaptive/folder?
  path: 'assets/',

  dynamic: true,
 
  range: [
    '0px    to 449px  = mobile.css',
    '459px  to 840px  = middle.css',
    '841px  to 1440px = large.css',
    '1441px  		  = xlarge.css'
  ]
};