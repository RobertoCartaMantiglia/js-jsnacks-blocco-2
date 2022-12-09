// Calcola la somma dei primi 10 numeri di un array.

const array = [1,2,3,4,5,6,25,79,91,30];

let somma = 0;

for (let i=0; i<array.length; i++){
    somma += array[i];
}
console.log(somma);

// Calcola la somma e la media dei primi 10 numeri di un array.
let media = somma / (array.length -1);
console.log("la media è " + media);

//maxValue è definito inizialmente come la prima variabile presente nell'array alla poszione 0

// confronto il max value con gli elementi del array e vedo se di volta in volta c'è un valore che è maggiore di lui,
// una volta che max value non sarà più minore rispetto ad un altro elemento, sarò sicuro che max value corrisponderà al valore più grande del array
// Calcola il valore massimo dei primi 10 numeri di un array.
let maxValue = 0;

for(let i=0; i<array.length; i++){
    if(maxValue < array[i]){
        maxValue = array[i];
    }else{
        console.log(maxValue);
    }
}