// Calcola la somma dei primi 10 numeri di un array.



const numbers = [1, 2, 3, 6, 17, 22, 40, 71, 65, 78];

let somma = 0;

for (let i = 0; i<10; i++){
    somma += numbers[i];
    
}
console.log(somma);