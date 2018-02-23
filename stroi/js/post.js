$(document).ready(function() {
	$('#form-top').click(function() {

		var name_top = $('#form-top-name').val();
		var phon_top = $('#form-top-phon').val();

		$('#form-top-name').css('border', '1px solid #d0d0d0');
	    $('#form-top-phon').css('border', '1px solid #d0d0d0');

		if (name_top.length < 3) {
	      	$('#form-top-name').css('border', '1px solid #F49B9B');
	      	return false
	    }

	    else if(phon_top.length < 7){
	      	$('#form-top-phon').css('border', '1px solid #F49B9B');
	      	return false
	    }
	});

	$('#form-bottom').click(function() {

		var name_bottom = $('#form-bottom-name').val();
		var phon_bottom = $('#form-bottom-phon').val();

		$('#form-bottom-name').css('border', '1px solid #d0d0d0');
	    $('#form-bottom-phon').css('border', '1px solid #d0d0d0');

		if (name_bottom.length < 3) {
	      	$('#form-bottom-name').css('border', '1px solid #F49B9B');
	      	return false
	    }

	    else if(phon_bottom.length < 7){
	      	$('#form-bottom-phon').css('border', '1px solid #F49B9B');
	      	return false
	    }
	});

})