var selectedElement = null;

$("li#note-button").on("click", function() {
	if (selectedElement) {
		selectedElement.css("background-image", "url('/images/quarter-note-down.svg')");
		selectedElement.css("margin-top", "45px");
		selectedElement.css("margin-bottom", "45px");
	}
});

$("li#rest-button").on("click", function() {
	if (selectedElement) {
		selectedElement.css("background-image", "url('/images/Soupir_(silence).svg')");
		selectedElement.css("margin-top", "28px");
		selectedElement.css('margin-bottom', '70.5px');
	}
});

/*
 * When a user clicks the delete button, the currently selected note is deleted
 * and all other notes are adjusted to fit the staves accordingly.
 */
$("li#delete-button").on("click", function() {
	if (selectedElement) {

		if (selectedElement.is('#first-note')) {
			selectedElement.next().attr('id', 'first-note');
			selectedElement.nextAll('.note-added:first').removeClass('note-added').addClass('note');
			selectedElement.nextAll('.first-note-of-staff').removeClass('first-note-of-staff').next().addClass('first-note-of-staff');

		} else if (selectedElement.hasClass('first-note-of-staff')) {
			selectedElement.nextAll('.first-note-of-staff').removeClass('first-note-of-staff').next().addClass('first-note-of-staff');
			selectedElement.next().addClass('first-note-of-staff');

		} else if (selectedElement.hasClass('note')) {
			selectedElement.nextAll('.note-added:first').removeClass('note-added').addClass('note');
			selectedElement.nextAll('.first-note-of-staff').removeClass('first-note-of-staff').next().addClass('first-note-of-staff');

		} else if (selectedElement.hasClass('note-added')) {
			selectedElement.nextAll('.first-note-of-staff').removeClass('first-note-of-staff').next().addClass('first-note-of-staff');

		}

		selectedElement.parent().append('<div class="note-added"></div>');
		selectedElement.remove();
		selectedElement = null;
	}
});

$("li#add-staff").click(function() {
	$('.sheet_music').css('height', '+=150');
	$('.staves').append('<div class="staff-added"></div>');
	$('.notes').append('<div class="note-added first-note-of-staff"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div><div class="note-added"></div>');
});

/*
 * This allows the user to change the pitch of notes.
 * It has no effect on rests.
 */
$(document).keydown(function(e) {
	if (selectedElement) {
		switch(e.which) {
			case 32: // space
			if (selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-down.svg)' || selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-up.svg)') {
				selectedElement.css("background-image", "url('/images/Soupir_(silence).svg')");
				selectedElement.css("margin-top", "28px");
				selectedElement.css('margin-bottom', '70.5px');

			} else if (selectedElement.css("background-image") === "url('http://localhost:3000/images/Soupir_(silence).svg')") {
				selectedElement.css("background-image", "url('/images/quarter-note-down.svg')");
				selectedElement.css("margin-top", "45px");
				selectedElement.css("margin-bottom", "45px");
			}

			break;

	        case 37: // left
			if (!selectedElement.is(('#first-note'))) {
				selectedElement.css("background-color", "transparent");
				selectedElement.css("opacity", 1.0);

				selectedElement.prev().css("background-color", "yellow");
				selectedElement.prev().css("opacity", 0.3);
				selectedElement = selectedElement.prev();
			}
			break;

	        case 38: // up
			if (selectedElement.css("background-image") === "url('http://localhost:3000/images/Soupir_(silence).svg')") {

			} else if (selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-down.svg)') {
				if (parseInt(selectedElement.css('margin-top').replace('px', '')) > 11) {
					selectedElement.css("margin-top", "-=8.5");
					selectedElement.css("margin-bottom", "+=8.5");
				}

			} else if (selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-up.svg)') {
				if (parseInt(selectedElement.css('margin-top').replace('px', '')) > 19) {
					selectedElement.css("margin-top", "-=8.5");
					selectedElement.css("margin-bottom", "+=8.5");

				} else if ((parseInt(selectedElement.css('margin-top').replace('px', '')) - 8.5) < 19) {
					selectedElement.css("background-image", "url('/images/quarter-note-down.svg')");
					selectedElement.css("margin-top", "45px");
					selectedElement.css("margin-bottom", "45px");
				}
			}
	        break;

	        case 39: // right
			selectedElement.css("background-color", "transparent");
			selectedElement.css("opacity", 1.0);

			selectedElement.next().css("background-color", "yellow");
			selectedElement.next().css("opacity", 0.3);
			selectedElement = selectedElement.next();
	        break;

	        case 40: // down
			if (selectedElement.css("background-image") === "url('http://localhost:3000/images/Soupir_(silence).svg')") {

			} else if (selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-down.svg)') {
				if (parseInt(selectedElement.css('margin-top').replace('px', '')) < 45) {
					selectedElement.css("margin-top", "+=8.5");
					selectedElement.css("margin-bottom", "-=8.5");

				} else if ((parseInt(selectedElement.css('margin-top').replace('px', '')) + 8.5) > 45) {
					selectedElement.css('background-image', 'url("/images/quarter-note-up.svg")');
					selectedElement.css('margin-top', '18px');
					selectedElement.css('margin-bottom', '72px');
				}

			} else if (selectedElement.css('background-image') === 'url(http://localhost:3000/images/quarter-note-up.svg)') {
				if (parseInt(selectedElement.css('margin-top').replace('px', '')) < 43) {
					selectedElement.css("margin-top", "+=8.5");
					selectedElement.css("margin-bottom", "-=8.5");
				}
			}

	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	}
});


/*
 * The two following funcitons enable functionality to dynamically added notes
 */
$('.music-editor').on('click', '.note', function() {
	if (selectedElement) {
		if ($(this).is(selectedElement)) {
			$(this).css("background-color", "transparent");
			$(this).css("opacity", 1.0);
			selectedElement = null;

		} else {
			selectedElement.css("background-color", "transparent");
			selectedElement.css("opacity", 1.0);

			$(this).css("background-color", "yellow");
			$(this).css("opacity", 0.3);
			selectedElement = $(this);
		}

	} else {
		$(this).css("background-color", "yellow");
		$(this).css("opacity", 0.3);
		selectedElement = $(this);
	}
});

$('.music-editor').on('click', '.note-added', function() {
	if (selectedElement) {
		if ($(this).is(selectedElement)) {
			$(this).css("background-color", "transparent");
			$(this).css("opacity", 1.0);
			selectedElement = null;

		} else {
			selectedElement.css("background-color", "transparent");
			selectedElement.css("opacity", 1.0);

			$(this).css("background-color", "yellow");
			$(this).css("opacity", 0.3);
			selectedElement = $(this);
		}

	} else {
		$(this).css("background-color", "yellow");
		$(this).css("opacity", 0.3);
		selectedElement = $(this);
	}
});
