$(document).ready(function() {
	$('input').on('input keyup', function() {
		var a = $('#a').val();
		var b = $('#b').val();
		var c = $('#c').val();

		var prom = a * c;
		var leads = a * b;
		var profit = prom - leads;
		var my = profit * 0.07;
		if (my < 5000) {
			my = 5000;
		};
		var client = profit - my;
		$('.my').text(my);
		$('.client').text(client);
	})
})