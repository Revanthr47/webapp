console.log('Loaded!');
//counter code
var btn = document.getElementById('btn');

btn.onclick = function() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var counter = request.responseText;
				var spArea = document.getElementById('count');
				spArea.innerHTML = counter.toString();

			}
		}
	};

	request.open('GET', 'http://localhost:8080/counter', true);
	request.send(null);
};

//submit name code

var submit = document.getElementById('subBtn');
submit.onclick = function(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var names = request.responseText;
				names = JSON.parse(names);
				var list = '';
				for(var i = 0; i<names.length; i++){
					list += '<li>'+ names[i]+ '</li>' ;
				}
				var ui = document.getElementById('nameList');
				ui.innerHTML = list;

			}
		}
	};
	var nameInput = document.getElementById('myName');
	var name = nameInput.value;
	request.open('GET', 'http://localhost:8080/submit-name/name?name='+name, true);
	request.send(null);
};


	
