let goto_ucionice,
	goto_home;

	goto_ucionice = document.getElementsByClassName('ucionice')[0];
	goto_ucionice.addEventListener('click', function() {
		document.location = '../app/ucionice.html'; 
	});	

	goto_home = document.getElementsByClassName('kontrolna')[0];
	goto_home.addEventListener('click', function() {
		document.location = '../app/app.html'; 
	});	

	goto_aktivnosti = document.getElementsByClassName('aktivnosti')[0];
	goto_aktivnosti.addEventListener('click', function() {
		document.location = '../app/aktivnosti.html'; 
	});	

	goto_zadaci = document.getElementsByClassName('zadaci')[0];
	goto_zadaci.addEventListener('click', function() {
		document.location = '../app/zadaci.html'; 
	});	