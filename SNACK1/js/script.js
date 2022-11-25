// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.



const array = [];




for (let i=0; i < 6; i++) {

    const userNumbers = parseInt(prompt("inserisci un numero"));
    console.log(userNumbers);

    let numeroDispari = false;

    if (userNumbers % 2 === 1){
        numeroDispari = true;
    }
}

console.log(array);