var f = new Firebase('https://jjperezaguinaga.firebaseio.com/photo_title');
f.on('value', function(s) {
  document.getElementById('image').src = s.val();
});