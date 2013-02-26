var f = new Firebase('https://jjperezaguinaga.firebaseio.com/');
f.on('child_changed', function(s) {
	var elements = ["audio", "video", "image"];

	for (var i = 0, len = elements.length; i < len; i ++) {
		document.getElementById(elements[i]).style.visibility = "hidden";		
	}

	var typeOfElement = s.name();
  	var ele = document.getElementById(typeOfElement);
  	ele.src = s.val();
  	ele.style.visibility = "visible";
  	console.log(ele);
});