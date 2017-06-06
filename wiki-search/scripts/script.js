function getQueryData(value) {
		var results, txt = "", extract, pageid, title;
		var val = value;	
		var urlApi = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+val;

		$.ajax( {
		    url: urlApi,
		    dataType: 'jsonp',
		    success: function(data) {

	       		results = data.query.pages;
	     
	      		txt += "<ul>";
	      		txt += "<em>Results for:</em><br>";
	      		for (x in results) {
	      			
	      			extract = results[x]["extract"];
	      			pageid = results[x]["pageid"];
	      			title = results[x]["title"];

					//console.log(extract);
					

	      			txt += "<br><h4>"+title+"</h4><br>";
	      			txt += "<a href=https://en.wikipedia.org/?curid="+pageid+" target=_blank>";
	      			txt += "<p class=tab><em>"+extract+"</em></p>";
   					txt += "</a><br><hr>";	 
	      		}

	      		txt += "</ul>";
	      		$("#result-box").html(txt);
	       }

		} );
	}
	
	$(document).ready(function() {
		$("#search-btn").click(function(){
			var val = $("#search-value").val();
			if(val==''){
				alert("Please enter a topic.");
			} else {
				getQueryData(val);				
			}
			
		});

	});	