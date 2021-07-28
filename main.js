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
console.log(listaNumeri);

document.getElementById("campo").addEventListener('click',
    function(e) { // e = event 
        let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']");
        ricercaBomba = isInArray(bombe, e.target.dataset.cella);

        if (ricercaBomba == false){
            element[0].classList.add("green");
            element[0].innerHTML = '<i class="fas fa-seedling"></i>';
        }else if (ricercaBomba == true){
            element[0].classList.add("red");
            alert("BOOOM! Hai colpito una bomba, la tua partita è terminata.");
            element[0].innerHTML = '<i class="fas fa-bomb"></i>';
        }
    }
)

if(listaNumeri.length == range){
    alert("COMPLIMENTI! HAI VINTO!!!");
}

creaCampo(maxNumber);

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

function creaCampo(celle){
    for(i = 0; i < celle; i++){
        let cella = `
            <div data-cella="${i+1}" class="cella"></div>
        `;

        let templateCella = document.createElement("DIV");
        templateCella.classList.add("casella");
        templateCella.innerHTML = cella;
        document.getElementById("campo").appendChild(templateCella);
    } 
}

