const frutas: string[] = [
    "maçã", "banana", "laranja", "uva", "manga",
    "abacaxi", "kiwi", "pera", "maçã", "cereja",
    "melancia", "limão", "morango", "pêssego", "banana",
    "tangerina", "figo", "abacate", "kiwi", "coco",
    "cabeludinha", "mamão", "fruta-do-conde", "pêra", "limão",
    "maracujá", "cabeludinha", "manga", "tangerina", "cereza",
    "caju", "jaca", "acerola", "framboesa", "cabeludinha",
    "abacate", "maçã", "banana", "laranja", "uva",
    "melão", "limão", "morango", "pêssego", "banana",
    "tangerina", "figo", "abacaxi", "kiwi", "coco",
    "mamão", "maracujá", "cabeludinha", "pêra", "limão",
    "caju", "jaca", "acerola", "framboesa", "melancia"
];
const container = document.getElementById("frutas");

const fruta = frutas.filter(f => {
    if (f == "maçã") {
       if (container) {
            container.innerHTML += `
                <p>${f}</p>
            `
       }
    }
});


const numeros: number[] = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
    26, 27, 28, 29, 30,
    31, 32, 33, 34, 35,
    36, 37, 38, 39, 40,
    41, 42, 43, 44, 45,
    46, 47, 48, 49, 50
];

const number = numeros.filter(n => n > 20);

number.forEach(n => {
    if (container) {
        container.innerHTML += `
            <p>${n}</p>
        `
   }
})


