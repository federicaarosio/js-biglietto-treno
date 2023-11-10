// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const totalKm = parseInt(prompt("Type how many kilometers you want to travel"));
const passengerAge = parseInt(prompt("Type how old is the passenger"));

// Calcolo quanto costa il viaggio senza sconto
const ticketPrice = totalKm * 0.21;

//Calcolo quanto costa il viaggio con lo sconto a seconda del passeggero
let pgDiscount;

if (passengerAge < 18) {
    pgDiscount = ticketPrice * 20 / 100;
} else if (passengerAge >= 65) {
    pgDiscount = ticketPrice * 40 / 100;
} else {
    pgDiscount = 0;
}

const finalPrice = ticketPrice - pgDiscount;

document.getElementById("output").innerHTML="Il prezzo finale del biglietto é: " + finalPrice.toFixed(2) + " euro";

//Indico il prezzo finale con max 2 decimali