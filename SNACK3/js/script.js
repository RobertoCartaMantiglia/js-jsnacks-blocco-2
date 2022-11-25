// Calcola la somma dei primi 10 numeri di un array.



const numbers = [1, 2, 3, 6, 17, 22, 40, 78, 71, 65,];

let somma = 0;
let media = 0;
let maxValue = 0;

for (let i = 0; i<10; i++){
    somma += numbers[i];
     
    if (maxValue < numbers[i]) {
        maxValue = numbers [i];
    }
}



media = somma / 10;


console.log(somma);
console.log("media " + media);
console.log(maxValue);

// Calcola la somma e la media dei primi 10 numeri di un array.


// Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.