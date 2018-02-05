	let logout1 = document.getElementById('logout');
		logout1.addEventListener('click', executeLogout);

		function executeLogout() {
			document.location = "../../../index.html";
		}

	let settings = document.getElementsByClassName('settings')[0];
		settings.addEventListener('click', executeSettings);

		function executeSettings() {
			document.location = "podesavanja.html";
		}	

	let settings1 = document.getElementsByClassName('settings')[1];
		settings1.addEventListener('click', executeSettings1);

		function executeSettings1() {
			document.location = "podesavanja.html";
		}

	info = document.getElementById('info');
	info.addEventListener('click', executeInfo);

	function executeInfo() {
		document.location = "informacije.html";
	}			