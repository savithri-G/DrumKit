var numberofdrums = document.querySelectorAll(".drum").length;

for(var i=0; i<=numberofdrums; i++){

	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

		var buttonInnerHTML = this.innerHTML;
	
	switch(buttonInnerHTML)
	{
		case "sa":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "re":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "ga":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "ma":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "pa":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "da":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "ni":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;
		default:
			console.log(buttoninner);
	}
});


}
