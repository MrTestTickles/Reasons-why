const words = ["First", "Second", "Third"];
let currentIndex= 0;
let rotation = 0;

const backbtn = document.getElementById("backbtn");
const forwardbtn = document.getElementById("forwardbtn");

const introScreen = document.getElementById("introScreen");
const readyScreen = document.getElementById("readyScreen");
const cardScreen = document.getElementById("cardScreen");

const introForward = document.getElementById("introForward");
const readyBack = document.getElementById("readyBack");
const readyForward = document.getElementById("readyForward");

const boxElement = document.querySelector(".box");

backbtn.addEventListener("click", function() { 
	rotation = rotation - 360;
	boxElement.style.transform = `rotateY(${rotation}deg)`;
	setTimeout(function() {
		if (currentIndex > 0) {
		currentIndex = currentIndex - 1;
		boxElement.textContent = words[currentIndex]}
},150);
	} else {
		cardScreen.style.display = "none";
		readyScreen.style.display = "flex";
	}
});

forwardbtn.addEventListener("click", function() {
	rotation = rotation + 360;
		boxElement.style.transform = `rotateY(${rotation}deg)`;
	setTimeout(function() {
		if (currentIndex < words.length - 1) {
		currentIndex = currentIndex + 1;
		boxElement.textContent = words[currentIndex]}	
}, 150);
});

introForward.addEventListener("click", function() {
	introScreen.style.display = "none";
	readyScreen.style.display = "flex";
});

readyBack.addEventListener("click", function() {
	readyScreen.style.display = "none";
	introScreen.style.display = "flex";
});

readyForward.addEventListener("click", function() {
	readyScreen.style.display = "none";
	cardScreen.style.display = "flex";
});

boxElement.textContent = words[currentIndex];