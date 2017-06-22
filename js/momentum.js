function startTime() {
	var now = new Date();
	var hour = now.getHours() < 10 ? "0"+now.getHours() : now.getHours();
	var min	= now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes();
	document.getElementById("time").innerHTML = hour+":"+min;
}

/*window.addEventListener( "load", startTime );*/
window.setInterval(startTime,1000);
