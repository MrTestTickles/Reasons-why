const words = ["First", "Second", "Third"];
let currentIndex= 0;

const backbtn = document.getElementById("backbtn");
const forwardbtn = document.getElementById("forwardbtn");

const boxElement = document.querySelector(".box");

backbtn.addEventListener("click", function() { 
	boxElement.classList.add("flip")
	
	setTimeout(function() {
		if (currentIndex > 0) {
		currentIndex = currentIndex - 1;
		boxElement.textContent = words[currentIndex]}
},150);
	
	setTimeout(function() {
			 boxElement.classList.remove("flip");		
			}, 300);
});

forwardbtn.addEventListener("click", function() {
	boxElement.classList.add("flip")
	
	setTimeout(function() {
		
		if (currentIndex < words.length - 1) {
		currentIndex = currentIndex + 1;
		boxElement.textContent = words[currentIndex]}	
}, 150);
	
	setTimeout(function() {
		 boxElement.classList.remove("flip");		
		}, 300);
});

boxElement.textContent = words[currentIndex];