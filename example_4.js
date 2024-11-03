"use strict";
const cursos = [
    {
        nome: "HTML e CSS",
        horas: 40,
        aulas: 200,
        gratuito: false,
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Browser"
        ],
        idAulas: [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        nivel: "iniciante"
    },
    {
        nome: "CSS Flexbox",
        horas: 20,
        aulas: 100,
        gratuito: true,
        tags: [
            "display",
            "flex",
            "css",
            "justify-content"
        ],
        idAulas: [
            10, 11, 12, 13, 14, 15, 16, 17
        ],
        nivel: "avancado"
    }
];
const containerCurso = document.getElementById("cursos");
const fetchCurso = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    if (!response.ok)
        throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
};
const exibir = async () => {
    const curso = await fetchCurso();
    curso.forEach(c => {
        const cor = c.nivel === "iniciante" ? "red" : "blue";
        if (containerCurso) {
            containerCurso.innerHTML += `
                <h2 style="color: ${cor}">Curso: ${c.nome}</h2>
                <p>Horas: ${c.horas}</p>
                <p>Gratuito: ${c.gratuito ? "Sim" : "Não"}</p>
                <p>Nivel: ${c.nivel}</p>
                <p>IdAulas: ${c.idAulas}</p>
                <p>Tags: ${c.tags}</p>
            `;
        }
    });
};
exibir();
