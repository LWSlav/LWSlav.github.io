$(document).ready(function() {
	$('#form').validate({
		rules: {
			name: {
				required : true,
				minlength : 3
			},

			email: {
				required : true,
				minlength : 6,
				email : true
			},

			password: {
				required : true,
				minlength : 4
			}
		},

		messages: {
			name: {
				required : 'Обязательное поле',
				minlength : 'Не менее 3 символов'
			},

			email: {
				required : 'Обязательное поле',
				minlength : 'Не менее 6 символов',
				email : 'Некорректный email'
			},

			password: {
				required : 'Обязательное поле',
				minlength : 'Не менее 4 символов'
			}
		},
	})
})