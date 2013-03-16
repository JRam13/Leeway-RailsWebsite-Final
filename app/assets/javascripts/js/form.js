$(document).ready(function(){
	
	$('form#ajax_form .submit').click(function(){

		$('#ajax_form .error').hide();	//if error visibile, hide on new click
		
		var name = $('input#name').val();
		if (name == "" || name == " " || name == "Name") {
		    $('input#name').focus().before('<div class="error">Hey, what´s your name...?</div>');
		    return false;
		}
		
		var email_test = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		var email = $('input#email').val();
		if (email == "" || email == " ") {
		   $('input#email').focus().before('<div class="error">Psssst. You missed one...</div>');
		   return false;
		} else if (!email_test.test(email)) {
		   $('input#email').select().before('<div class="error">I think your mail is wrong</div>');
		   return false;
		}
		
		var message = $('#message').val();
		if (message == "" || message == " " || message == "Message") {
		    $('#message').focus().fadeIn('slow').before('<div class="error">Remember your message!</div>');
		    return false;
		}
		
		var data_string = $('form#ajax_form').serialize();

		$.ajax({
		    type:       "POST",
		    url:        "php/email.php",
		    data:       data_string,
		    success:    function() {

		$('form#ajax_form').slideUp('fast').before('<div id="success"></div>');
		$('#success').html('<h3>Success</h3><p>Your email has been sent!</p>').slideDown(9000);

		    }//end success function


		}) //end ajax call

		return false;


	}) //end click function
	
	var current_data = new Array();

	$('.clear').each(function(i){
		$(this).removeClass('clear').addClass('clear'+i);
		current_data.push($(this).val());

		$(this).focus(function(){
			if($(this).val() == current_data[i]) {
				$(this).val('');
			}
		});
		$(this).blur(function(){
			var stored_data = current_data[i];
			if($(this).val()==''){
				$(this).val(stored_data);
			}
		})
	});
})