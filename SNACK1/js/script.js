// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.



const array = [];
let userNumber;


for (let i=0; i<6; i++){
    userNumber = parseInt(prompt("inserisci un numero")) ,10;
    console.log(userNumber);
    if(userNumber % 2 !== 0){
        array.push(userNumber);
    }
}
console.log(array);