//NUMBER liczby

console.log(typeof 34);
console.log(typeof "34");

// +, -, *, /, %

const dodaj = 3 + 4;
const odejmij = 10 - 7;
const mnozenie = 4 * 5;
const dzielenie = 12 / 4;

// console.log("2" + "5"); //25
// console.log(2+5); //7
// console.log ("2"* "6"); //12
// console.log ("a" - "b") // Not a number = NaN

// JS to język słabo i dynamicznie typowany

// console.log(dodaj);
// console.log(odejmij);
// console.log(mnozenie);
// console.log(dzielenie);

//Inkrementacja
// let licznik = 0;
// licznik++; //wyświetli 1
// licznik++; //wyświetli 2
// licznik++; //wyświetli 3
// //dekrementacja
// licznik--; //wyświetli -1
// licznik--; //wyświetli -2
// licznik--; //wyświetli -3

// console.log(licznik);

// const reszta =6 % 4; //modulo- reszta z dzielenia
// console.log(reszta);

// const cena = 24.99;
// const kolejnaCena = 5.47;
// const doZaplaty = cena + kolejnaCena;
// // console.log (doZaplaty.toFixed(2));
// console.log(Math.round(doZaplaty) );

// console.log( Math.max (5,8,2,11,98,-11,20));
// console.log( Math.min (5,8,2,11,98,-11,20));

// // console.log( Math.random());
// console.log( Math.round(Math.random() * 45));

// console.log(Math.pow(2,8));

/*
 - Napisz 3 zmienne z cenami:
  jabłka - 24.96, 
  gruszki - 70.99, 
  śliwki - 11.50
 - Napisz zmienną doZapłaty i oblicz cenę za zakupienie 3 sztuk jabłek,
 5 sztuk gruszek i 2 śliwek

 - Wynik zaokrąglij i wypisz w console log
/*
// const jablka = 24.96;
// const gruszki = 70.99;
// const sliwki = 11.50;
// const wynik = jablka*3 +gruszki*5+sliwki*2;

// console.log (wynik);

/*
   Sprawdź resztę z dzielenia liczby 12 przez 3
   Sprawdź resztę z dzielenia liczby 96 przez 10
*/



const licznik = 12;
const mianownik = 3;
const wynik = (licznik/mianownik);

console.log (wynik);