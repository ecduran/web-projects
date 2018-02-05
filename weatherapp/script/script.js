
var lat = "";
var long = "";
var city = "";
var country = "";
var units = "metric";
var temp = "";
var cel = "";
var fah = "";

function getLocation() {

	$.ajax({
		url: 'http://ip-api.com/json',
		success: function(response){
			city = response.city;
			country = response.countryCode;

			getWeather(city, country);
		}

	});

}


function getWeather(city, country) {

	var key = '924bf322ba961bc65d2f525dd1bca35a';
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&units='+units+'&APPID='+key,
		success: function(response){
			city = response.name;
			country = response.sys.country;
			temp = response.main.temp;             //in metric (Celsius)
			weatherDesc = response.weather[0].description;
			weatherMain = response.weather[0].main;
			weatherIcon = response.weather[0].icon;
			weatherId = response.weather[0].id;
			
			displayLocation(city,country);
			displayUnit(temp);
			displayWeatherCon(weatherMain, weatherDesc, weatherIcon);
		}
	});
	
}

function displayLocation(city, country) {
	$('#location').html('<a href=\"http://www.google.com/search?q='+city+', '+country+'\" target=\"_blank\"> '+ city +', '+ country + '</a>');
}

function displayUnit(temp){
	 cel = Math.round(temp)+' ° C';
	  $('#temp-value').text(cel);

	 fah = Math.round((temp * 9)/5 + 32)+' ° F';	

}	


function displayWeatherCon(weatherMain, weatherDesc, weatherIcon) {
	$('#weatherCondition').html('<a href=\"http://www.google.com/search?q='+weatherDesc+'\" target=\"_blank\"> '+ weatherDesc + '</a>');
	$('#weatherIcon img').attr('src', 'http://openweathermap.org/img/w/'+weatherIcon+'.png');
}	

getLocation();

$(document).ready(function(){

	$("#unitsInCelsius").click(function() {
		
		$('#temp-value').text(cel);
	 });
	$("#unitsInFahrenheit").click(function() {
		
		$('#temp-value').text(fah);
	});

});

