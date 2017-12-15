 $(document).ready(function(){
        $("#form").submit(function() { 
         $.ajax({
           type: "POST", 
           url: "smart.php",
           data: $(this).serialize()
         }).done(function() {
                $(this).find("input").val(""); 
                $('#modal').show();
                $("#form").trigger('reset');
         });
         return false;
       });

        
        $('#button-clous').click(function() {
            $('#modal').hide(500);
        });
});    