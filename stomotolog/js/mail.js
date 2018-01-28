$(document).ready(function() {
	$('#button-form1').click(function() {
    $('#input-name1').css('border', '2px solid #d0d0d0');
    $('#input-phon1').css('border', '2px solid #d0d0d0');
    var name = $('#input-name1').val();
    var phon = $('#input-phon1').val();
    if (name.length < 3) {
      $('#input-name1').css('border', '2px solid red');
      return false
    }

    else if(phon.length < 9){
      $('#input-phon1').css('border', '2px solid red');
      return false
    }
    $.ajax({
      url: '../smart.php',
      type : 'POST',
      cache : false,
      data : {'name' : name, 'telefon' : phon},
      dataType : 'html',
      success : function(data) {
        if (data == 'Сообщение отправлено') {
          $('#form1').trigger('reset');
          $('.thanks').show(400);
          $('.clous-popup').show(400);
        }
        else {
          alert('Все плохо');
        }
      }
    });
    return false;
  });

  //2 form
  $('#button-form2').click(function() {
    $('#input-name2').css('border', '2px solid #d0d0d0');
    $('#input-phon2').css('border', '2px solid #d0d0d0');
    var name = $('#input-name2').val();
    var phon = $('#input-phon2').val();
    if (name.length < 3) {
      $('#input-name2').css('border', '2px solid red');
      return false
    }

    else if(phon.length < 9){
      $('#input-phon2').css('border', '2px solid red');
      return false
    }
    $.ajax({
      url: '../smart.php',
      type : 'POST',
      cache : false,
      data : {'name' : name, 'telefon' : phon},
      dataType : 'html',
      success : function(data) {
        if (data == 'Сообщение отправлено') {
          $('#form2').trigger('reset');
          $('.thanks').show(400);
          $('.clous-popup').show(400);
        }
        else {
          alert('Все плохо');
        }
      }
    });
    return false;
  });

  //3 form

  $('#button-form3').click(function() {
    $('#input-name3').css('border', '2px solid #d0d0d0');
    $('#input-phon3').css('border', '2px solid #d0d0d0');
    var name = $('#input-name3').val();
    var phon = $('#input-phon3').val();
    if (name.length < 3) {
      $('#input-name3').css('border', '2px solid red');
      return false
    }

    else if(phon.length < 9){
      $('#input-phon3').css('border', '2px solid red');
      return false
    }
    $.ajax({
      url: '../smart.php',
      type : 'POST',
      cache : false,
      data : {'name' : name, 'telefon' : phon},
      dataType : 'html',
      success : function(data) {
        if (data == 'Сообщение отправлено') {
          $('#form3').trigger('reset');
          $('.thanks').show(400);
          $('.clous-popup').show(400);
        }
        else {
          alert('Все плохо');
        }
      }
    });
    return false;
  });

  //4 form

  $('#button-form4').click(function() {
    $('#input-name4').css('border', '2px solid #d0d0d0');
    $('#input-phon4').css('border', '2px solid #d0d0d0');
    var name = $('#input-name4').val();
    var phon = $('#input-phon4').val();
    if (name.length < 3) {
      $('#input-name4').css('border', '2px solid red');
      return false
    }

    else if(phon.length < 9){
      $('#input-phon4').css('border', '2px solid red');
      return false
    }
    $.ajax({
      url: '../smart.php',
      type : 'POST',
      cache : false,
      data : {'name' : name, 'telefon' : phon},
      dataType : 'html',
      success : function(data) {
        if (data == 'Сообщение отправлено') {
          $('#form4').trigger('reset');
          $('.thanks').show(400);
          $('.clous-popup').show(400);
        }
        else {
          alert('Все плохо');
        }
      }
    });
    return false;
  });

  // 5 form

  $('#button-popup').click(function() {
    $('#input-name_popup').css('border', '2px solid #d0d0d0');
    $('#input-phon_popup').css('border', '2px solid #d0d0d0');
    var name = $('#input-name_popup').val();
    var phon = $('#input-phon_popup').val();
    if (name.length < 3) {
      $('#input-name_popup').css('border', '2px solid red');
      return false
    }

    else if(phon.length < 9){
      $('#input-phon_popup').css('border', '2px solid red');
      return false
    }
    $.ajax({
      url: '../smart.php',
      type : 'POST',
      cache : false,
      data : {'name' : name, 'telefon' : phon},
      dataType : 'html',
      success : function(data) {
        if (data == 'Сообщение отправлено') {
          $('#form-popup').trigger('reset');
          $('.clous-popup').hide(400);
          $('.popup').hide(400);
          $('.thanks').show(400);
          $('.clous-popup').show(400);
        }
        else {
          alert('Все плохо');
        }
      }
    });
    return false;
  });
});
			