const links = document.querySelectorAll<HTMLElement>(".link");

links.forEach(l => {
    l.addEventListener("click", () => {
        links.forEach(link => link.classList.remove("active"));
        
        l.classList.add("active");
    });
});
