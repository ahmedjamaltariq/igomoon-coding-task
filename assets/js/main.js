(function ($) {
	$(".module-form_optin #email").blur(function () {

		/* Check if the email is valid or not by calling the isValidEmail method */
		if (isValidEmail($(this).val())) {

			/* First empty the email value span container */
			$('.module-form_optin #email-val').empty();

			/* The update it with the new one or either it's the first attempt */
			$('.module-form_optin #email-val').html(' : '+$(this).val());

			/* If the email is valid then increase the progress bar with animation of 1 sec */
			$('.module-form_optin .progress-bar').animate({
				width: "66%"
			}, 1000);
		}else{
			$(this).focus();
		}
	});

	/* method to check the email pattern with regex */
	function isValidEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
})(jQuery);