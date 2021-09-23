(function ($) {
	var currentProgressBarWidth = $("#progress-width").val();
	$(".module-form_optin #email").blur(function () {

		/* First check if the email field is empty or not */
		if($(this).val().length > 0){

			var uniqueEmailFlag = isUniqueEmail($(this).val(),$(this).hasClass('unique_email'));

			/* Check if the email is valid or not by calling the isValidEmail method and its existence in system by calling the isUniqueEmail */
			if (isValidEmail($(this)) && uniqueEmailFlag) {

				/* First empty the email value span container */
				$('.module-form_optin #email-val').empty();

				/* The update it with the new one or either it's the first attempt */
				$('.module-form_optin #email-val').html(' : '+$(this).val());

				/* Display the name input field by fading into form card */
				$('.final-step').fadeIn();

				var newWidth = currentProgressBarWidth*2;
				/* If the email is valid then increase the progress bar with animation of 1 sec */
				$('.module-form_optin .progress-bar').animate({
					width: newWidth+"%"
				}, 1000);

				/* If the email is valid then hide the popover if it was open */
				$(this).popover('hide');
			}else{

				/* If the email is invalid then show the popover */
				$(this).popover('show');

				/* Keep the focus in email field */
				$(this).focus();
			}
		}
	});

	var limitAchived = false;
	$("#name").keyup(function (){
		if($(this).val().length > 3 && limitAchived == false){
			$('.module-form_optin .progress-bar').animate({
				width: "100%"
			}, 3000);
			limitAchived = true
		}
	});
	$("#name").blur(function (){
		/* First empty the email value span container */
		$('.module-form_optin #name-val').empty();

		/* The update it with the new one or either it's the first attempt */
		$('.module-form_optin #name-val').html(' : '+$(this).val());
	});

	/* method to check the email pattern with regex */
	function isValidEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email.val());
	}

	/* method to check the existence of email in system */
	function isUniqueEmail(email,flag){
		if(!flag){
			/* If the unique_email boolean is false of its not checked .etc */
			return true;
		}else{
			/* Ajax call to check existence of email */
			return true;
		}
	}
})(jQuery);