// js/script.js

const texts = [
    "AI Engineer",
    "Data Scientist",
    "ML Researcher",
    "Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    }
    else{
        setTimeout(type, 120);
    }

})();

// Smooth-scrolling for internal sidebar nav links
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});