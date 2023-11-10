// Input: numero di chilometri chel'utente vuole percorrere e l'età del passeggero.
const totalKm = parseInt(prompt("Type how many kilometers you want to travel"));
const passengerAge = parseInt(prompt("Type how old is the passenger"));

// Calcolo costo viaggio senza sconto
const ticketPrice = totalKm * 0.21;

//Calcolo costo viaggio con sconto
let pgDiscount;

if (passengerAge < 18) {
    pgDiscount = ticketPrice * 20 / 100;
} else if (passengerAge >= 65) {
    pgDiscount = ticketPrice * 40 / 100;
} else {
    pgDiscount = 0;
}

const finalPrice = ticketPrice - pgDiscount;

//Prezzo finale con max 2 decimali
document.getElementById("output").innerHTML="Il prezzo finale del biglietto é: " + finalPrice.toFixed(2) + " euro";