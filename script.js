const words = ["First", "Second", "Third"];
let currentIndex= 0;

const backbtn = document.getElementById("backbtn");
const forwardbtn = document.getElementById("forwardbtn");

const boxElement = document.querySelector(".box");

backbtn.addEventListener("click", function() { 
	boxElement.classList.add("flip-back")
	
	setTimeout(function() {
		if (currentIndex > 0) {
		currentIndex = currentIndex - 1;
		boxElement.textContent = words[currentIndex]}
},150);
	
	setTimeout(function() {
			 boxElement.classList.remove("flip-back");		
			 boxElement.style.transform = 'none';
			}, 300);
});

forwardbtn.addEventListener("click", function() {
	boxElement.classList.add("flip-forward")
	
	setTimeout(function() {
		
		if (currentIndex < words.length - 1) {
		currentIndex = currentIndex + 1;
		boxElement.textContent = words[currentIndex]}	
}, 150);
	
	setTimeout(function() {
		 boxElement.classList.remove("flip-forward");		
		boxElement.style.transform = 'none';
	 }, 300);
});

boxElement.textContent = words[currentIndex];