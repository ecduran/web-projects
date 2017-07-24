$(document).ready(function(){

function getStream() {

	$.ajax({
		url: 'https://wind-bow.glitch.me/twitch-api/streams/womboxcombo',
		jsonp: 'jsonp',
		dataType: 'jsonp',
		data: {
			method: 'getStream',
			format: 'jsonp',
			lang: 'en'
		},
		success: function(response) { 
			console.log(response);
		}

	});
}

getStream();

});