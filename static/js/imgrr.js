// Problem 2 (Peekaboo) ------------------------------------------------------
$('#toggle_img').click(function() {
	if  ($('#toggle_img').text() ==='Go Away!') {
		$('#main_img').hide()
		$('#toggle_img').text('Come Back!');
	}else{
		$('#main_img').show()
		$('#toggle_img').text('Go Away!');
	}
});


// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function()  {
	var value = $('#new_img_file').val();
	if (value === 'giraffe') {
		$('#main_img').attr('src', '/static/img/giraffe.jpg');
	} else if (value === 'gorilla') {
	$('#main_img').attr('src', '/static/img/gorilla.jpg');
    } else { console.log("null"); }

});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  // WRITE CODE HERE
  	$(this).attr('src')
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
