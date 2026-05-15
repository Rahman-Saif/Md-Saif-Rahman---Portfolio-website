// js/projects.js

const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE CLASS
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.getAttribute("data-category");

        // SHOW & HIDE PROJECTS
        cards.forEach(card => {

            if(card.classList.contains(category)){
                card.classList.remove("hidden");
            }
            else{
                card.classList.add("hidden");
            }

        });

    });

});