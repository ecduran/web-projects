<!DOCTYPE html>
<html>
<head>
	<title>Weather App</title>
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet">
<style>
	body {
		background-color: grey;
		font-family: 'Raleway', sans-serif;
		color: white;
		padding-top: 50px;
	}
	.location {
		padding-top: 40px;
		font-size: 30px;
		font-weight: bold;
	}
	.temp {
		margin-top: -30px;
		font-size: 129px;
	}
	.weatherCondition {
		font-size: 18px;
	}
	.weatherIcon img{
		margin-top: -50px;
		width: 300px;
		height: 300px;
	}
	.changeUnits button{
		color: white;
		border:0;
		background-color: grey;
	}


</style>
</head>
<body>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-5 col-md-offset-4">
			<p class="location" id="location"></p>

			<p class="weatherCondition" id="weatherCondition"></p>	

			<p class="temp" id="temp-value"></p>
			
			<div class="weatherIcon" id="weatherIcon">
				<img src="" alt="">
			</div>
		</div>
		<div class="changeUnits">
			<button id="unitsInCelsius">Celsius</button> | <button id="unitsInFahrenheit">Fahrenheit</button>

		</div>

	</div>	
	<footer class="row">
		<div class="col-md-5 col-md-offset-4">
			<p style="padding-left: 90px">by <a href="" style="color: white;" target="_blank">Eldrin Duran</a></p>
		</div>	
	</footer>
</div>
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous">	
</script>
<script>


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
	$('#location').text(city +', '+ country);
}

function displayUnit(temp){
	 cel = Math.round(temp)+' ° C';
	  $('#temp-value').text(cel);

	 fah = Math.round((temp * 9)/5 + 32)+' ° F';	

}	


function displayWeatherCon(weatherMain, weatherDesc, weatherIcon) {
	$('#weatherCondition').text(weatherDesc);
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

</script>
</body>
</html>