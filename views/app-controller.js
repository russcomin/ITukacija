this.learn = document.getElementsByClassName('nauci')[0];
this.learn.addEventListener('click', executeNauci);

function executeNauci(){
	document.location = "ucionice.html";
}

this.learn1 = document.getElementsByClassName('nauci')[1];
this.learn1.addEventListener('click', executeNauci1);

function executeNauci1(){
	document.location = "ucionice.html";
}

this.learn2 = document.getElementsByClassName('nauci')[2];
this.learn2.addEventListener('click', executeNauci2);

function executeNauci2(){
	document.location = "ucionice.html";
}

let read,
	doTask;

	read=document.getElementById('read');
	doTask=document.getElementById('do');

	read.addEventListener('click', function() { document.location = "aktivnosti.html" });
	doTask.addEventListener('click', function() { document.location = "zadaci.html" });

	let logout = document.getElementById('logout');
		logout.addEventListener('click', executeLogout);

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