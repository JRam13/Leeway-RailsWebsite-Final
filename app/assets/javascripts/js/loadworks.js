    $(".launcher").delegate("a:not(#filters-launcher)", "click", function() {
        window.location.hash = $(this).attr("href");
        donde = 1;
        if ( $.browser.msie ) {
			if(parseInt($.browser.version, 10) <=7){
				window.location.reload();
			} ;
		}   
        return false;
    });
