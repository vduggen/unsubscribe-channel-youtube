var index = 0;
var scroll = 20;

var myLoop = setInterval(() => {
	// Update button list
	var allButtons = document.querySelectorAll("#subscribe > ytd-subscribe-button-renderer > paper-button");
	
	// Informations about the current script
	console.log(`Index: ${index}`);
	console.log(`Canal: ${allButtons[index].ariaLabel.split('Cancelar inscrição de ')[1]}`);
	
	// Click on the first button to open the modal
	allButtons[index].click();

	// Waiting to open modal and to get button
	setTimeout(() => {
		// Click the button to unsubscribe
		document.querySelector("#confirm-button > a").click();
	}, 300)

	// Add the index to get the next button
	index++;
	
	// Sum to scroll
	scroll = scroll + 40;
	
	// Scroll down
	scrollTo(0, scroll);
	
	// Check if it is final
	if (index === allButtons.length) {
		clearInterval(myLoop);
	}
}, 1000);
