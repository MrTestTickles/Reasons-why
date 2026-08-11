const words = ["How caring you are", "Your eyes", "Your personality", "How loving you are", "The way you love", "Your laugh","The way you walk", "How you organize things",
	"How you always help others", "Your reels", "The way you yearn", "Your music","The way you talk", "How passionate you are","How deeply you care for me","How you care for me",
	"Your selfies", "How you care for your chickens","Your amazing ideas","your big dreams", "How much you care for kids", "How you always chase your dreams no matter who says what","your perfect hair",
	"How much love you have to give all the time", "How your'e always thinking of me", "How you never judge anyone before listening first","Your legs","your ears", "How chalant you are",
	"How goofy you are", "How much you always plan", "When you give me chisme and include me in the drama", "How you always change yourself for the better", "How you always put your best foot forward",
	"How you always listen to how i feel", "How much you miss say you miss me", "How you never let me pay", "How you look at me when you admire me", "When you move your hair out of your face when youre worried",
	"Your music suggestions", "How excited you get", "How cute you are when youre just sitting there", "How you you look when youre focused", "How adorable you are when you talk about something you love", "How you always remind me to take care of myself",
	"How you always care about my hobbies", "How you always support me through anything","The updates you give me","The lengths youll go to see me happy", "How you never want to see me sad", "How nothing matters to you when im sad or upset","Your passions",
	"How you always come back","Your version of 'bare minimum'", "How joyous and positive you are", "Your ups", "Your downs", "Your love letters", "Your little habits that make you! My sweet gitl","Your love for mexico", "How you always try to talk or see me no matter how busy you are",
	"Your perfect face", "How well you take care of yourself","Your eyes","Your best moments", "Your worst moments","What a goober you are","Your drawings","How hard you work", "How perfectly you make everything feel", "how you turn any bad day around instantly by just being yourself","How much you love Dr.pepper",
	"How much you make me feel like i matter","How loved you make me feel","How much you complete me", "How much you love tacos", "How you always ask my opinion on things", "How much you genuinely care about everyone", "How you never want anyone to be upset","How hard you try when taking selfies for me","The advice you give me", "How you always try to teach me things i dont know",
	"How adorable your gifts are","How you never take credit for the amazing things you do","The way your hair always shines beautifully","How kind you always are no matter how shitty someone is to you","The wat your eyes sparkle when youre looking at me", "Your laugh when i do something stupid","How you always'bully' me", "How little care you have for shitty people",
	"How happy you get when i do the littlest of things","The way you make me feel","The little thigns you do","How much you love coffee and good food", "How much you hate my family", "The way you love", "How you always have me say hi to the family you like", "How much fun you are to be around", "How competetive you are", "How much you love motorcycles","The way you teach me spanish"
];

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
const counterElement = document.getElementById("counter");

backbtn.addEventListener("click", function() { 
	if (currentIndex > 0) {
		rotation = rotation - 360;
		boxElement.style.transform = `rotateY(${rotation}deg)`;
		setTimeout(function() {
			currentIndex = currentIndex - 1;
			boxElement.textContent = words[currentIndex];
			updateCounter();
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
		boxElement.textContent = words[currentIndex];
		updateCounter();
		}
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

const petalContainer = document.getElementById("petalContainer");

function createPetal() {
	const petal = document.createElement("div");
	petal.classList.add("petal");
	
	petal.style.left = Math.random() * 100 + "vw";
	petal.style.animationDuration = (Math.random() * 3+5) + "s";
	petal.style.animation = `fall ${petal.style.animationDuration} linear`;
	
	petalContainer.appendChild(petal);
	
	setTimeout(function() {
		petal.remove();
		
 }, 8000);
}

setInterval(createPetal,250);

function updateCounter() {
	counterElement.textContent = (currentIndex + 1) + "/" + words.length;
}

boxElement.textContent = words[currentIndex];
updateCounter();