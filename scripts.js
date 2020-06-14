var labelID = "noIDYet"

function expandButton {
	labelID = this.id;
	console.log(labelID)
	var label = document.getElementById(String(labelID)).getElementsByTagName("h5");
	label.style.fontSize = "9vmin";
	label.style.backgroundColor = "rgba(80, 80, 80, 0.5)";
	label.style.backgroundImage = "none";
	label.style.padding = "2vmin";
	label.style.borderRadius = "6.5vmin";
};

function contractButton {
	var label = this.getElementsByTagName("h5");
	label.style.fontSize = "7vmin";
	label.style.backgroundColor = "none";
	label.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));";
	label.style.padding = "12vmin 10vmin";
	label.style.borderRadius = "15vmin";
};

document.getElementsByClassName('categoryButton').addEventListener("mouseover", expandButton(this));