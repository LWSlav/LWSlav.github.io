$(document).ready(function() {
	$('.tab').click(function() {
		var content = $(this).attr('href');
		console.log(content);
		$('.content').hide(300);
		$(content).show(300);
		
	});
});

