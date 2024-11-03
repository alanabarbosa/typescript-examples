"use strict";
const numberOrString = (type) => {
    if (typeof type === "number") {
        return Math.ceil(type);
    }
    else if (typeof type === "string") {
        console.log("é uma string");
        return type;
    }
    throw new Error("Tipo não suportado");
};
console.log(numberOrString(2.5));
