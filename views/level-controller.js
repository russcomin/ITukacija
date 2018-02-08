let level2;
	level2 = localStorage.getItem('level2');

if (level2 == 'true') {
	let levelNumber = document.getElementById('levelNumber');
		levelNumber.innerHTML = 2;

	let levelIndicator = document.getElementsByClassName('circle')[0];
		levelIndicator.style.borderColor = "#dfdfdf #2ecc71 #2ecc71 #dfdfdf";

	let levelCall = document.getElementById('zvanje');
		levelCall.innerHTML = "SREDNJI";

}