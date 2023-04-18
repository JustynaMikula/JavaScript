//TYPY PROSTE: string, number, boolean, undefined, NaN, null

// console.log(typeof "to jest Jan");
// console.log(typeof "Jan");
// console.log("123");
// console.log('tekst w apostrofie');

// console.log("Jack`s")
// console.log('Tytuł to "Harry Potter"')

// const nazwisko = "Kowalski";
// let wiek = "20";

// console.log( nazwisko.length);
// console.log( nazwisko.charAt(0));
// console.log( nazwisko.toUpperCase());

// const tekst = "Jan mieszka w Warszawie";
// const updateUser = tekst.replace("Warszawie", "Poznaniu");

// console.log(tekst);
// console.log(updateUser);

// const user = "Anna Nowak"
// console.log(user.slice(2));// zwracam całość bez 1szej litery
// console.log( user.slice(0,5));// zwracam słowo Anna(litery 0-5 bez 5)

// const kraj = "polska";
// const krajDuzaLitera = kraj.charAt(0).toUpperCase() + kraj.slice(1);
// console.log(krajDuzaLitera);


// const imie = "Jan";
// const nazwisko = "Kowalski";
// let wiek = "20";
// let miasto = "Ełk";

// //KONKATENACJA
// const dane = imie + " " + nazwisko;
// const kolejneDane = "To jest " + imie;

// //To jest Jan Kowalski. Jan ma 20 lat.
// const informacje = "To jest " + imie + " " + nazwisko + ". " + imie+ " ma"+ " " + wiek+ " lat."
// //Konkatenacja z "template stringiem" (klawisz z tyldą nad tab)
// const info = `To jest ${imie} ${nazwisko}. ${imie} ma ${wiek} lat i mieszka w ${miasto}u.`;

// console.log(info);


const jezyk = "Javascript";
const JezykRodzaj = "programowania";
const rok = "1996";
const epitet = "najpopularniejszy";
const dlugiTekst = `${jezyk} to jezyk ${JezykRodzaj}. ${jezyk} powstał w ${rok} roku i uchodzi za ${epitet} język ${JezykRodzaj}.`;

console.log(dlugiTekst)

//w3Schools exercises

// let txt = "Hello World!";
// console.log(txt.toUpperCase())

// let txt = "I can eat bananas all day";
// console.log (txt.slice(0-15, 17-25));

let txt = "Hello World!";
console.log(txt.replace("Hello", "Welcome"))