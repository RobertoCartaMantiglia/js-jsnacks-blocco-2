// Calcola la somma dei primi 10 numeri di un array.



const numbers = [1, 2, 3, 6, 17, 22, 40, 78, 71, 65,];

let somma = 0;
let media = 0;
//maxValue è definito inizialmente come la prima variabile presente nell'array alla poszione 0
let maxValue = numbers[0];

for (let i = 0; i<10; i++){
    somma += numbers[i];
// confronto il max value con gli elementi del array e vedo se di volta in volta c'è un valore che è maggiore di lui,
// una volta che max value non sarà più minore rispetto ad un altro elemento, sarò sicuro che max value corrisponderà al valore più grande del array
    if (maxValue < numbers[i]) {
        maxValue = numbers [i];
    }
}


// Calcola la somma e la media dei primi 10 numeri di un array.
media = somma / 10;


console.log(somma);
console.log("media " + media);
console.log(maxValue);




// Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.