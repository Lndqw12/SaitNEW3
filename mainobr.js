 	function call() {
 	  var msg   = $('#formx').serialize();
        $.ajax({
          type: 'POST',
          url: 'res.php',
          data: msg,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
	    alert('�������� ������: ' + xhr.responseCode);
          }
        });
    }