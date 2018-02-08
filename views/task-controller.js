document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        executeChecker();
    }
})

let modal,
	close,
	error;

	modal = document.getElementById('modal');
	close = document.getElementById('close');
	error = document.getElementById('error');


let executeTask = document.getElementById('predaj');
	executeTask.addEventListener('click',
								executeChecker);

function executeChecker() {
	let task1,
		task2,
		task3,
		task4;

		task1 = document.getElementById('first-task').value;
		task2 = document.getElementById('second-task').value;
		task3 = document.getElementById('third-task').value;
		task4 = document.getElementById('fourth-task').value;
		
	if (task1.length == 0 || task2.length == 0 || task3.length == 0 || task4.length == 0) {
		openModal();
		error.innerHTML = "Error 106 | Sva polja moraju biti popunjena";
	}else {
		if (task1 == "<html>" || task1 == "html") {
			if (task2 == "<head>" || task2 == "head") {
				if (task3 == "<title>" || task3 == "title") {
					if (task4 == "<body>" || task4 == "body") {
						this.passed = localStorage.setItem('level2', 'true');
						this.passer = localStorage.setItem('passed', 'not-clicked');
						document.location = "zadaci.html";
					}
				}	
			}
		}
	}	
}

close.addEventListener('click', function(){
	closeModal();
});

function openModal() {
	modal.style.top = '0px';
	modal.style.transition = '.4s';
}

function closeModal() {
	modal.style.top = '-400px';
	modal.style.transition = '2s';
}