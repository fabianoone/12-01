//FUNCTION TO GET AND AUTO PLAY VIDEO FROM DATATAG
  function autoPlayModal() {
  	$('#myModal').on('show', function () {
	  $('div.modal-body').html('<iframe src="" width="500" height="281" frameborder="0" allowfullscreen=""></iframe>');  
	});
	$('#myModal').on('hide', function () {
	  $('div.modal-body').html('');  
	});
	

  }
