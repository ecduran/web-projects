<!DOCTYPE html>
<html>
<head>
	<title>Weather App</title>
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet">
<link rel="stylesheet" href="styles/style.css">

</head>
<body>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-5 col-md-offset-4">
			<p class="location" id="location"></p></a>

			<p class="weatherCondition" id="weatherCondition"></p>	

			<p class="temp" id="temp-value"></p>
			
			<div class="weatherIcon" id="weatherIcon">
				<img src="" alt="">
			</div>
		</div>
		<div class="changeUnits" id="changeUnits">
			<button class="btn btn-primary"  id="unitsInCelsius">Celsius</button> | <button class="btn btn-primary" id="unitsInFahrenheit">Fahrenheit</button>

		</div>

	</div>	
	<footer class="row">
		<div class="col-md-5 col-md-offset-4">
			<p style="padding-left: 90px">by <a href="https://codepen.io/ecduran/" style="color: white;" target="_blank">Eldrin Duran</a></p>
		</div>	
	</footer>
</div>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="script/script.js"></script>

</body>
</html>