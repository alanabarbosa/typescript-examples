const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ["Banana", "Uva", "Melancia", "Laranja", "Maçã", "Goiaba", "Pessego", "Pêra", "Tangerina"];

const firstFive = <TypeList>(list: TypeList[]): TypeList[] => list.slice(0, 5);

console.log(firstFive(stringArray));
console.log(firstFive(numericArray));