/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro ?
Abbiamo visto qualcosa di particolare che possiamo usare ?
Come creare nuovi elementi html e appenderli al container ?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e buon divertimento! */


//creo le variabili per l'incremento e il container
let i;
const container = document.querySelector('.container');

//creo ciclo for da 1 a 100
for (i = 1; i <= 100; i++) {

    //creo costante div e la inserisco nel container, a cui do poi classe box e box--i
    const div = document.createElement('div');
    container.append(div);
    div.classList.add('box', 'box--' + i);

    //creo if per le condizioni dei multipli
    if (i % 3 == 0 && i % 5 == 0) { //multipli di 15
        console.log('FrizzBuzz');

        //inserisco nei div la scritta 'FrizzBuzz' e aggiungo la classe colorata
        div.append('FrizzBuzz');
        div.classList.add('magenta');
    } else if (i % 3 == 0) { //resto == 0 allora multiplo di 3
        console.log('Frizz');

        //inserisco nei div la scritta 'Frizz' e aggiungo la classe colorata
        div.append('Frizz');
        div.classList.add('green');
    } else if (i % 5 == 0) { //resto == 0 allora multiplo di 5
        console.log('Buzz');

        //inserisco nei div la scritta 'Buzz' e aggiungo la classe colorata
        div.append('Buzz');
        div.classList.add('yellow');
    } else {
        console.log(i);
        
        //inserisco nei div i numeri restanti e aggiungo la classe colorata
        div.append(i);
        div.classList.add('lightblue');
    }
}