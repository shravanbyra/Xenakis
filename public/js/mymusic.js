var selection = null;


$('#newdoc').click(function() {
	console.log("New doc was clicked");
});

$('#doc1').click(function() {
	if (selection) {
		selection.css('border-color', '#33435C');
	}
	selection = $('.document1');
	$('.document1').css('border-color', '#ff3333');
	$('a#opendoc').attr('href', '/profile/mymusic/document1');
	$('.subtitlewrapper p#title').text('In the Hall of the Mountain King');
	$('.subtitlewrapper p#instrument').text('Piano, Violin, Viola, Cello');
	$('img#previewimage').attr('src', '/images/In the Hall of the Mountain King.png');
});

$('#doc2').click(function() {
	if (selection) {
		selection.css('border-color', '#33435C');
	}
	selection = $('.document2');
	$('.document2').css('border-color', '#ff3333');
	$('a#opendoc').attr('href', '/profile/mymusic/document1');
	$('.subtitlewrapper p#title').text('Moonlight Sonata');
	$('.subtitlewrapper p#instrument').text('Piano');
	$('img#previewimage').attr('src', '/images/Moonlight Sonata.png');
});

$('#doc3').click(function() {
	if (selection) {
		selection.css('border-color', '#33435C');
	}
	selection = $('.document3');
	$('.document3').css('border-color', '#ff3333');
	$('a#opendoc').attr('href', '/profile/mymusic/document1');
	$('.subtitlewrapper p#title').text('Long, Long Time Ago / The Funeral');
	$('.subtitlewrapper p#instrument').text('Piano');
	$('img#previewimage').attr('src', '/images/Long, Long Time Ago.png');
});
