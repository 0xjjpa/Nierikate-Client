var f = new Firebase('https://jjperezaguinaga.firebaseio.com/');

var latestFeed = f.child('latest');
latestFeed.on('value', function(s) {
	var dataType = s.val() || "image";
	var dataFeed = f.child(dataType);
	dataFeed.on('value', function(r) {
		var ele = document.getElementById(dataType)
		ele.src = r.val();
		ele.style.visibility = "visible";
	})
});

f.on('child_changed', function(s) {
	if(s.name() === 'latest') return;
	var elements = ["audio", "video", "image"];

	for (var i = 0, len = elements.length; i < len; i ++) {
		document.getElementById(elements[i]).style.visibility = "hidden";		
	}

	var typeOfElement = s.name();
  	var ele = document.getElementById(typeOfElement);
  	ele.src = s.val();
  	ele.style.visibility = "visible";
});