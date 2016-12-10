var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });




