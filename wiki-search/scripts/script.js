
function getQueryData(value) {
		var results, txt = "", extract, pageid, title;
		var val = value;	
		var urlApi = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+val;

		$.ajax( {
		    url: urlApi,
		    async: true,
		    dataType: 'jsonp',
		    success: function(data) {

		    	try {

	       			results = data.query.pages;
	       			
	     			//console.log(data.query);

	      		
	      			for (x in results) {
	      			
	      				extract = results[x]["extract"];
	      				pageid = results[x]["pageid"];
	      				title = results[x]["title"];

						//console.log(extract);
					
						txt += "<a href=https://en.wikipedia.org/?curid="+pageid+" target=_blank class=list-group-item>";	
	      				txt += "<br><h4>"+title+"</h4><br>";
	      				txt += "<p class=tab><em>"+extract+"</em></p>";
   						txt += "<br></a><br>";	 
	      			}

	      			$("#result-box").html(txt);	     

	      		} catch(err) {

		      		txt += '<br><h4 class="tab">The page <a class="error-link">\''+value+'\'</a> does not exist.</h4>';
		      		txt += '<h5 class="tab">&nbsp;&nbsp;&nbsp;There were no results matching the query.</h5>';
		      	
	      			$("#result-box").html(txt);	     
	      		}
	       }

		} );
}

function selectInput() {

	document.getElementById("search-value").select();

}
	



	$(document).ready(function() {


		$("#search-btn").click(function() {

			var val = $("#search-value").val();

			if (val.length == 0) {

				alert('Enter some topic!');

			} else {

				$("#result").html('<em><h4>Showing results for</em> <a style="color:red;"> '+ val +'</a> : </h4><br><br>');
				getQueryData(val);			

			}
						
		});
		
		$("#search-value").keydown(function(event) {

			var backspace = event.which;

			if (backspace == 8) {
				$("#result").empty();
				$("#result-box").empty();
			}

		});

	});	