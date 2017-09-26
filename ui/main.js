console.log('Loaded!');

var btn = document.getElementById('btn');
var counter = 0;
btn.onclick = function() {
	
	counter = counter+1;
	var spArea = document.getElementById('count');
	spArea.innerHTML = counter.toString();
};
