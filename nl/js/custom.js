$(document).ready(function() {
    nextParticle = document.all.logo.nextParticle;
	nextParticle.width = window.innerWidth;
	nextParticle.height = window.innerHeight;

	window.onresize = function() {
		nextParticle.width = window.innerWidth;
		nextParticle.height = window.innerHeight;
		nextParticle.start();
	};
});