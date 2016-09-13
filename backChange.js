function changeBack() {
	var time = prompt("Enter your time of day","");

	if (time >= 6 && time <= 11) {
	var mor = document.getElementById("body");
	mor.style.backgroundImage = "url('mor.jpg')";
	mor.style.backgroundSize = "cover";

	}
	if (time >= 11 && time <= 17) {
	var aft = document.getElementById("body");
	aft.style.backgroundImage = "url('noon1.jpg')";
	aft.style.backgroundSize = "cover";
	}

	if (time >= 17 && time <= 19) {
	var aft = document.getElementById("body");
	aft.style.backgroundImage = "url('eve.jpg')";
	aft.style.backgroundSize = "cover";
	}

	if (time >= 20 && time <= 24 || time =< 5) {
	var aft = document.getElementById("body");
	aft.style.backgroundImage = "url('night.jpg')";
	aft.style.backgroundSize = "cover";
	}
}