// Calcola la somma dei primi 10 numeri di un array.



const numbers = [1, 2, 3, 6, 17, 22, 40, 71, 65, 78];

let somma = 0;
let media = 0;

for (let i = 0; i<10; i++){
    somma += numbers[i];

    media = somma % 10; 
}

console.log(somma);
console.log("media " + media);

// Calcola la somma e la media dei primi 10 numeri di un array.