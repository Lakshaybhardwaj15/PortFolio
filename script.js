function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}  

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}  

const typewriterText = document.querySelector('.typewriter-text');
const words = ['Developer', 'Designer', 'Student'];
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenWords = 500;

function typewriter() {
    if (charIndex < words[wordIndex].length) {
        typewriterText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewriter, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typewriter, typingSpeed);
    }
}

// Start the typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typewriter, delayBetweenWords);
});


