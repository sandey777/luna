
///////////////////////////////////////////////////////

	$(document).ready(function(){

		var difference = window.innerHeight - $('body').height();

		if( difference > 0 ){
			$('footer').css('margin-top', difference + 'px');
		} else {
			$('footer').css('margin-top', '50px');
		}

	});

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////