"use strict";
const links = document.querySelectorAll(".link");
links.forEach(l => {
    l.addEventListener("click", () => {
        links.forEach(link => link.classList.remove("active"));
        l.classList.add("active");
    });
});
