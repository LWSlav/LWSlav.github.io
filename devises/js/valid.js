$(document).ready(function() {
	$('#formOne__form').validate({
		rules: {
			user_name: {
				required : true,
				minlength : 3
			},

			user_password : {
				required : true,
				minlength : 6
			}
		},

		messages : {
			user_name: {
				required : '',
				minlength : ''
			},

			user_password : {
				required : '',
				minlength : ''
			}
		},
	});

	$('#formTwo__form').validate({
		rules: {
			user_email: {
				required : true,
				minlength : 3,
				email : true
			}
		},

		messages : {
			user_email: {
				required : '',
				minlength : '',
				email : ''
			}
		},
	});
	
});