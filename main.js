// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. 
var bomba;
var bombe = [];
var maxNumber = 100;
var listaNumeri = [];
var numeroUtente;
var i = 0;
var range = maxNumber - 16;
var control = false;
var controlloDuplicati=false;

while(bombe.length < 16){
    bomba = numbersRandom(1, maxNumber);
    if(bombe.includes(bomba) == false){
        bombe.push(bomba);
    }
}
console.log(bombe);
while(listaNumeri.length < range && control == false){
    do{
        numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100:"));
    }while(isNaN(numeroUtente)|| numeroUtente < 1 || numeroUtente > 100);

    control = isInArray(bombe, numeroUtente);
    controlloDuplicati = isInArray(listaNumeri, numeroUtente);

    if(controlloDuplicati == true){
        alert('Numero già inserito! Riprova.');
    }else if(control == false){
        listaNumeri.push(numeroUtente);
    }else{
        alert("BOOOM! Hai colpito una bomba, la tua partita è terminata. Hai totalizzato un punteggio di " + listaNumeri.length);
    }
    i++;
}

if(listaNumeri.length == range){
    alert("COMPLIMENTI! HAI VINTO!!!");
}

console.log(listaNumeri);
// funzione che genera numeri randomici delle bombe senza ripetizioni
function numbersRandom(min, max){
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

function isInArray(array, element) {
    var result = false;
    var i = 0;
    while (i < array.length && result == false) {
        if (element == array[i])
            result = true;
        i++;
    }
    return result;
}