// console.log(123);

// // deklaracja funkcji
// function nazwaFunkcji() {
// console.log("Funkcja wywołana")

// }
// //wywołanie funkcji
// nazwaFunkcji();

// const imie = "Anna";
// const nazwisko = "Nowak";
// let wiek = 20;

// const wynik = `To jest ${imie} ${nazwisko}. Ma ${wiek} lat `;
// console.log(wynik);

// function przedstawSie (imie, nazwisko, wiek){
    
// const wynik=(`To jest ${imie} ${nazwisko}. Ma ${wiek} lat`);
// console.log(wynik)
// }

// przedstawSie("Marcin", "Łopek", "23");
// przedstawSie("Michał", "Klik", "32");
// przedstawSie("Ula", "Mina", "24");

//                     //parametry
// function dodajLiczby (a,b){
//     console.log(`Parametr a wynosi: ${a}`);
//     console.log(`Parametr a wynosi: ${b}`);
//     // console.log(5 + 6);
//     const wynik = a+b;
//     console.log(`Wynik działania: ${wynik}`);
// }
//                 //argumenty
// dodajLiczby(2,5);
// dodajLiczby(99,1);
// dodajLiczby(20,10);

// function powitanie(uzytkownik) {
//     const wynik = `Witaj na naszej stronie ${uzytkownik}`;
//     console.log(wynik);
// }

// powitanie("Kamil");
// powitanie("Dawid");
// powitanie("Magdalena");

/*

1. Napisz funkcję, która przyjmuje jeden argument "jezyk". 
Niech w konsoli zwraca następującą wiadomość:

"Najlepszy język programowania to [jezyk]"

*/
function najlepszyJezyk(jezyk){
    const wynik = `Najlepszy język programowania to ${jezyk}`;
console.log(wynik);
}
najlepszyJezyk( "Javascript");
najlepszyJezyk("Python");
najlepszyJezyk("Java");
najlepszyJezyk("PHP");
/*
2. Napisz funkcję, która oblicza pole trójkąta, musimy mieć
możliwość podania wysokości i długości podstawy

*/
function poleTrojkata(a, h){

console.log(`Parametr a wynosi: ${a}`);
console.log(`Parametr a wynosi: ${h}`);
const odpowiedz = (1/2*a*h);
console.log(`Wynik działania: ${odpowiedz}`);
}

poleTrojkata("5", "3")
poleTrojkata("16", "4")


/*
  3. Napisz funkcję, która konwertuje stopnie Kelvina do stopni 
  Celsjusza. Niech przyjmie jeden argument "temperatura"
*/

function temperatura(Kelvin){
const result = `${Kelvin} stopni ()`
console.log(`Po przeliczeniu ${Kelvin} to Celsjusza`)
}


/*
    4. Napisz funkcję, która podnosi pierwszą literę stringa do dużej
    wykorzystaj zapis z pliku string.js :) 
    Wyświetl skonwertowany tekst w consol.log
*/
function capitalize (str) {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
console.log(result);

capitalize("niemcy");
capitalize("jakis tekst");

const randomText = "zwykły tekst";
const uppercaseText = randomText.toUpperCase();

const capitaliseText = capitalize("polska")

console.log(randomText);
console.log(uppercaseText);

console.log(capitaliseText)

}