// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const totalKm = parseInt(prompt("Type how many kilometers you want to travel"));
const passengerAge = parseInt(prompt("Type how old is the passenger"));

// Quanto costa il viaggio senza sconto?
let ticketPrice = totalKm * 0.21;