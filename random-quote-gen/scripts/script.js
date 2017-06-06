$(document).ready(function(){

	var quote;
	var author;	

	function getQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				format: 'jsonp',
				lang: 'en'
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;

				$(".quote-box").animate({
				       opacity: 0
			        }, 500,
			        function() {
			          $(this).animate({
			            opacity: 1
			          }, 500);
				          $('#text').text(quote);
				          if(author){
								$('#author').text('- ' + author);
							} else {
								$('#author').text('- unknown');
							}
			    });
			}
		});
	}

    getQuote();

	$('#newQuoteBtn').on('click',function(event){
		event.preventDefault();
		getQuote();
	});

	$('#tweet-quote').on('click', function(event){
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?hashtags=randomquote&text=' + encodeURIComponent(quote + '-- ' + author + ''));
	});

});