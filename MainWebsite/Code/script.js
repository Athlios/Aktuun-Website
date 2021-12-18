window.addEventListener('scroll', function() {
		var element = document.querySelector('#main-container');
		var position = element.getBoundingClientRect();

		if(position.top >= 0 && position.bottom <= window.innerHeight) {
			document.getElementById('target-id').style.disaply = "show";
		}
		if(position.top < window.innerHeight && position.bottom >= 0) {
			document.getElementById('target-id').style.disaply = "none";	
		}
