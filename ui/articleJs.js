console.log('loaded');
var subBtn = document.getElementById('cmtsubBtn');
subBtn.onclick = function(){
var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var cmts = request.responseText;
				cmts = JSON.parse(cmts);
				var list = '';
				for(var i = 0; i<cmts.length; i++){
					list += '<li>'+ cmts[i]+ '</li>' ;
				}
				var ui = document.getElementById('cmtList');
				ui.innerHTML = list;

			}
		}
	};
	var cmtIn = document.getElementById('cmtBox');
	var cmt = cmtIn.value;
	request.open('GET', 'http://localhost:8080/submit-cmt/cmt?cmt='+cmt, true);
	request.send(null);
};