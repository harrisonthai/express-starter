alert('hello there welcome. this is stuff. i hope you enjoy.'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
alert('hello world!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
	$('#houdini_text').hide()
});

$('#reappear').click(function() {
	$('#houdini_text').show()
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#colorize').click(function() {
	$('#tickled_text').css('color','red');
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#Greet_Me').click(function()  {
	var value = $('#my_name').val();
	alert('Hello ' + value);
});

