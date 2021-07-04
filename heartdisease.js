var submit = $('.sub-btn-story');
var finalScore = $('.finalScore');

submit.on('click', displayScore);

function displayScore(event) {
	event.preventDefault();
	
	var correct = $('.correct:checked');
	$('.endDisplay').css('visibility', 'visible');
	finalScore.css('visibility', 'visible');
	finalScore.text(`Score: ${correct.length}/5`);
}