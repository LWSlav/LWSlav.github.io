$(document).ready(function() {
	$('#form').validate({
		rules : {
			name : {
				required : true,
				minlength : 4
			},

			password : {
				required : true,
				minlength : 6
			}
		},

		messages : {
			name : {
				required : 'Обязательное поле',
				minlength : 'Не менее 4 символов'
			},

			password : {
				required : 'Обязательное поле',
				minlength : 'Не менее 6 символов'
			}
		},
	});


	$('#button-form').click(function() {
		$('#description').show(500);
	});
	$('#clous').click(function() {
		$('#description').hide(500);
	});

	$('#button-text').click(function() {
		$('#text').show(500);
	});
	$('#claz').click(function() {
		$('#text').hide(500);
	});

})