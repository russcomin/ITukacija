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